<?php
require_once '../classes/userview.class.php';
require_once '../classes/usercontr.class.php';
if (!session_id()) {
    session_start();
}
$allowedOrigins = array(
    'https?:\/\/localhost.*',
    'https?:\/\/smart-garbage-monitor.herokuapp.com.*'
);
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] != '') {

    foreach ($allowedOrigins as $allowedOrigin) {
        $current = file_get_contents($file);
        $current .= $allowedOrigin . "\n";
        file_put_contents($file, $current);
        if (preg_match('#' . $allowedOrigin . '#', $_SERVER['HTTP_ORIGIN'])) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
            header('Access-Control-Max-Age: 1000');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            header('Access-Control-Allow-Credentials: true');

            break;
        }
    }
}
function eJSONVALID($sir)
{
    json_decode($sir);
    return json_last_error() == JSON_ERROR_NONE;
}

////aici preluam ce este dupa /  -> mai precis comanda
$baseUrl = "https://smart-garbage-monitor.herokuapp.com/rest";
$requestUrl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
//verific ce comanda am dat
$requestString = substr($requestUrl, strlen($baseUrl));
$urlParam = array();
$urlParam = explode('/', $requestString);
$date = trim(file_get_contents("php://input"));





//-------------------------
///Andrei te folosesti de $urlParam[0] pentru comanda necesara

//------------



switch ($urlParam[1]) {
    case 'insertGunoaie':
        if (eJSONVALID($date)) {

            header("Content-type:application/json");
            $date = json_decode($date);
            $obiect = new UserContr();
            $obiect->insertGunoaie($date->cartier, $date->hartie, $date->sticla, $date->menajer);
        } else {
            die('Date incorecte');
        }
        break;
    case 'putGunoaie':
        if (eJSONVALID(($date))) {
            header("Content-type:application/json");
            $date = json_decode($date);
            $obiect = new UserContr();
            $obiect->putGunoaie($date->cartier, $date->sticla, $date->hartie, $date->menajer);
        } else {
            die('Date incorecte');
        }
        break;
    case 'deleteProblema':
        if (eJSONVALID($date)) {
            header("Content-type:application/json");

            $obiect = new UserContr();
            try {
                $obiect->deleteProblema($date);
            } catch (Exception $e) {
                $toReturn['eroare'] = $e->getMessage();
                echo json_encode($toReturn);
                return;
            }
            $toReturn["raspuns"] = "Ok";
            echo json_encode($toReturn);
        }
        break;

    case 'saveComment':
        header("Content-type:application/json");
        $obiect = new UserContr();
        $obiect->insertComments(urldecode($_POST['neighbourhood']), $_POST['comment'], $_POST['name']);
        header("Location:https://smart-garbage-monitor.herokuapp.com/neighinfo/?neighbourhood=".$_POST['neighbourhood']);
        break;

    case 'saveLocation':
        header("Content-type:application/json");
        $date = json_decode($date);
        $obiect = new UserContr();
        $obiect->saveLocation($date->neighbourhood, $date->lat, $date->lng);
        break;

    case 'getOrderCartiere':
        header("Content-type:application/json");
        $obiect = new UserView();
        echo $obiect->cartiereOrdine();
        break;

    case 'comments':
        header("Content-type:application/json");
        $obiect = new UserView();
        echo $obiect->showComments(urldecode($urlParam[2]));
        break;
    case 'probleme':
        header("Content-type:application/json");
        $obiect = new UserView();
        echo $obiect->redareProbleme();
        break;
    case 'cartiereSimplu':
        header("Content-type:application/json");

        $obiect = new UserView();
        $cartiere = [];
        $cartiere = $obiect->showCartiereSimplu();
        echo json_encode($cartiere);
        break;
    case 'Date':
        header("Content-type:application/json");

        $obiect = new UserView();
        $action = 'show';
        $action = $action . $_GET['statistica'];
        $json = $obiect->$action();
        echo json_encode($json);
        break;
    case 'DateCartier':
        header("Content-type:application/json");
        $obiect = new UserView();
        $json = $obiect->showGunoaie($_GET['cartier']);
        echo json_encode($json);
        break;
    case 'luna':

        header("Content-type:application/json");
        $obiect = new UserView();
        $json = $obiect->takeAllforMonth($_GET['luna']);
        echo json_encode($json);
        break;

    case 'garbage':
        header("Content-type:application/json");
        $obiect = new UserView();
        if ($_GET['time'] == 'current') {
            echo $obiect->getGarbageInfoCurrentMonth($_GET['neighbourhood'], date('M'));
        } else {
            if ($_GET['time'] == 'alltime') {
                echo $obiect->getGarbageInfoAllTime($_GET['neighbourhood']);
            }
        }
        break;
    case 'rank':
        header("Content-type:application/json");
        $obiect = new UserView();
        if (isset($_GET['neighbourhood']))
            echo $obiect->getNeighbourhoodPlace($_GET['neighbourhood']);
        break;
    case 'xml':
        header("Content-type:application/json");
        $obiect = new UserView();
        echo $obiect->getStatisticaperMonth();
        break;
    case 'csv':
        header("Content-type:application/json");
        $obiect = new UserView();
        echo $obiect->getStatisticatotalcsv();
        break;
    case 'login':
        header("Content-type:application/json");
        $obiect = new UserView();
        if ($obiect->validate($date) == true) {
            $_SESSION['loggedIn'] = 1;
            echo json_encode("https://smart-garbage-monitor.herokuapp.com/salubris/");
        } else {
            $_SESSION['loggedIn'] = null;
        }
        break;
    case 'deleteComplaint':
        header("Content-type:application/json");
        $date = json_decode($date);
       
        $obiect=new UserContr();
        echo $obiect->deleteComplaint($date->mesaj);
    break;
}
