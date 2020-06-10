<?php

///acesta este partea de rest
require_once '../classes/userview.class.php';
require_once '../classes/usercontr.class.php';


//pentru a sterge din tabela probleme
if (isset($_GET['q'])) {
    $stringProblema = $_GET['q'];
    $vector = array();
    $token = strtok($stringProblema, " ");
    while ($token !== false) {
        array_push($vector, $token);
        $token = strtok(" ");
    }
    $toReturn['cartiere'] = $vector[0];
    $toReturn['latitudine'] = $vector[1];
    $toReturn['longitudine'] = $vector[2];
    $obiect = new UserContr();
    $obiect->deleteProblema(json_encode($toReturn));
}
if (isset($_GET['q2'])) {
    $obiect = new UserView();
    foreach (json_decode($obiect->redareProbleme(), true) as $problema) : ?>
        <li> <?php echo $problema['cartiere'] . ' ' . $problema['longitudine'] . ' ' .  $problema['latitudine'] ?></li>
<?php endforeach;
     
}
if (isset($_GET['q3'])) {

    $obiect = new UserView();
    $cartiere = [];
    $cartiere = $obiect->showCartiereSimplu();
    
   /* foreach ($cartiere as $cartier) : ?>
        <option value="<?= $cartier['cartiere']; ?>"><?= $cartier['cartiere']; ?></option>
    <?php endforeach;*/ 
    echo json_encode($cartiere);

}
if(isset($_GET['q4']))
{
echo 'dsa';
 
 $arr=json_decode($_GET['q4']);
 print_r($arr);
 echo $arr->cartier;
 
// var_dump($arr);
 //echo $arr->sticla;
    
    
}

?>