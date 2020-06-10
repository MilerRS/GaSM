<?php
include '../classes/dbh.class.php';

class User extends Dbh
{
    protected $conexiune;
    protected function getConexiune()
    {
        if ($this->conexiune == null) //pt a impiedica sa facem noi conexiuni daca nu avem nevoie
            $this->conexiune = $this->connect();
    }
    protected function insertComment($neighbourhood, $comment, $name)
    {
        $sql = "INSERT INTO complaints VALUES(?,?,?)";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->bindParam(1, $comment, PDO::PARAM_STR, 100);
        $stmt->bindParam(2, $name, PDO::PARAM_STR, 20);
        $stmt->bindParam(3, $neighbourhood, PDO::PARAM_STR, 20);
        $stmt->execute();
    }
    protected function insertLocation($neighbourhood, $lat, $lng)
    {
        $sql = "INSERT INTO coords VALUES (?,?,?)";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->bindParam(1, $neighbourhood, PDO::PARAM_STR, 20);
        $stmt->bindParam(2, $lat);
        $stmt->bindParam(3, $lng);
        $stmt->execute();
    }
    protected function getComments($name)
    {
        $sql = "SELECT * FROM complaints WHERE neighbourhood = ?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$name]);
        $comments = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $comments[] = array('name' => $name, 'complaint' => $complaint);
        }
        return $comments;
    }
    protected function  getGunoaie($name)
    {
        $sql = "Select * from statisticaTotal WHERE cartiere=?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$name]);

        return $stmt;
    }
    protected function insertGunoaie2(string $name, int $cantitateHartie, int $cantitateMenajer, int $cantitateSticla)
    {

        $sql = "INSERT INTO statistica (cartiere,sticla,hartie,menajer,datan) values(?,?,?,?,now())";



        $stmt = $this->conexiune->prepare($sql);
        $stmt->bindParam(1, $name, PDO::PARAM_STR, 255);
        $stmt->bindParam(2, $cantitateSticla, PDO::PARAM_INT);
        $stmt->bindParam(3, $cantitateHartie, PDO::PARAM_INT);
        $stmt->bindParam(4, $cantitateMenajer, PDO::PARAM_INT);



        $stmt->execute();
    }
    protected function putGunoaie2(string $name,int $cantitateSticla,$cantitateHartie,$cantitateMenajer)
    {
        $sql="UPDATE statisticatotal set sticla=sticla+?,hartie=hartie+?,menajer=menajer+? where trim(cartiere)=?";
        $stmt=$this->conexiune->prepare($sql);
        $stmt->bindParam(1,$cantitateSticla,PDO::PARAM_INT);
        $stmt->bindParam(2,$cantitateHartie,PDO::PARAM_INT);
        $stmt->bindParam(3,$cantitateMenajer,PDO::PARAM_INT);
        $stmt->bindParam(4,$name,PDO::PARAM_STR);
      
        $stmt->execute();
    }
    protected function showCartiere2()   //aratam toate cartierele
    {
        $sql = "Select distinct cartiere from statisticaTotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        //$results=$stmt->fetchAll();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = (string) $cartiere;
        }
        return $results;
    }
    protected function showCartiereSimplu2()
    {
        $sql = "Select distinct cartiere from statisticaTotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $cartiere = $stmt->fetchAll();
        return $cartiere;
    }
    protected function showSticla2()  //aratam toata sticla
    {
        $sql = "Select sticla from statisticaTotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $results[] = $row;
        }
        return $results;
    }
    protected function showMenajer2() //aratam tot gunoiul menajer
    {
        $sql = "Select menajer from statisticaTotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $results[] = $row;
        }
        return $results;
    }
    protected function showHartie2() //aratam toata hartia
    {
        $sql = "Select hartie from statisticaTotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            //extract($row);
            $results[] = $row;
        }
        return $results;
    }
    protected function showSticlaCartier2($name)   //aratam sticla pentru un cartier anume 
    {
        $sql = "Select sticla from statisticaTotal where cartiere=?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$name]);
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = (string) $sticla;
        }
        return $results;
    }
    protected function showMenajerCartier2($name)  //aratam gunoiul menajer pentru u cartier anume
    {
        $sql = "Select menajer from statisticaTotal where cartiere=?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$name]);
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = (string) $menajer;
        }
        return $results;
    }
    protected function showHartieCartier2($name)  //aratam hartia pentru un cartier anume
    {

        $sql = "Select  hartie from statisticaTotal where cartiere=?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$name]);




        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = (string) $hartie;
        }
        return $results;
    }
    protected function setSticla($name, $cantitateSticla)
    {
        $sql = " UPDATE statistica set   sticla=?  where cartiere=? ";
        $stmt = $this->conexiune->prepare($sql);

        $stmt->bindParam(1, $cantitateSticla, PDO::PARAM_INT);
        $stmt->bindParam(2, $name, PDO::PARAM_STR, 255);
        $stmt->execute();
    }
    protected function setHartie($name, $cantitateHartie)
    {
        $sql = " UPDATE statistica set   hartie=?  where cartiere=? ";
        $stmt = $this->conexiune->prepare($sql);

        $stmt->bindParam(1, $cantitateHartie, PDO::PARAM_INT);
        $stmt->bindParam(2, $name, PDO::PARAM_STR, 255);
        $stmt->execute();
    }
    protected function setMenajer($name, $cantitateMenajer)
    {
        $sql = " UPDATE statistica set   menajer=?  where cartiere=? ";
        $stmt = $this->conexiune->prepare($sql);

        $stmt->bindParam(1, $cantitateMenajer, PDO::PARAM_INT);
        $stmt->bindParam(2, $name, PDO::PARAM_STR, 255);
        $stmt->execute();
    }
    protected function takeAll2forMonth($luna) //va fi apelata de functia takeALL din userView
    {
        $sql = "Select * from statistica where trim(to_char(datan,'Month'))=?";

        $stmt = $this->conexiune->prepare($sql);
        $stmt->bindParam(1, $luna, PDO::PARAM_STR, 255);
        $stmt->execute();
        // $results=$stmt->fetchAll();
        return $stmt;
    }
    protected function validate2($name, $parola)
    {
        $sql = "Select id from conturi where username=? AND parola=?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->bindParam(1, $name, PDO::PARAM_STR, 255);
        $stmt->bindParam(2, $parola, PDO::PARAM_STR, 255);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = $row;
        }
        return $results;
    }
    protected function redareProbleme2()
    {

        $sql = "Select * from coords";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $results[] = $row;
        }

        return $results;
    }

    protected function deleteProblema2(string $cartier, $lat, $lng)
    {
        
        $sql = "DELETE from coords where trim(neighbourhood)='$cartier' and round(lat::numeric,9)=round($lat,9)  and round(lng::numeric,9)=round($lng,9)";
       
        $stmt = $this->conexiune->prepare($sql);


        $stmt->execute();
    }

    protected function cartiereOrdine2() // clasamentul cartierul dupa cat de murdare sunt
    {
        $sql = "SELECT neighbourhood FROM coords GROUP BY neighbourhood ORDER BY COUNT(*) DESC";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {


            $results[] = $row;
        }
        return  $results;
    }

    protected function getGarbageInfoCurrentMonth2($neighbourhood, $month)
    {
        $sql = "SELECT SUM(sticla) AS sticla,SUM(hartie) AS hartie,SUM(menajer) AS menajer FROM statistica WHERE TO_CHAR(datan,'Mon') LIKE " . "'" . $month . "'" . " AND cartiere=" . "'" . $neighbourhood . "'";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = $row;
        }
        if (!isset($results[0]['sticla'])) {
            return array(array("sticla" => 0, "hartie" => 0, "menajer" => 0));
        }
        return $results;
    }

    protected function getGarbageInfoAlltime2($neighbourhood)
    {
        $sql = "SELECT SUM(sticla) AS sticla,SUM(hartie) AS hartie,SUM(menajer) AS menajer FROM statisticatotal WHERE cartiere=" . "'" . $neighbourhood . "'";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = $row;
        }
        if (!isset($results[0]['sticla'])) {
            return array(array("sticla" => 0, "hartie" => 0, "menajer" => 0));
        }
        return $results;
    }
    protected function getStatisticaperMonth2()
    {
        $sql = "select * from statistica order by datan DESC";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = $row;
        }
        return $results;
    }
    protected function getStatisticatotalcsv2()
    {
        $sql = "select * from statisticatotal";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute();
        $results = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $results[] = $row;
        }
        return $results;
    }

    protected function getNeighbourhoodPlace2($neighbourhood){
        $order = $this->cartiereOrdine2();
        $numberOfNeighs=count($order);
        $place = $numberOfNeighs ;

        foreach($order as $cartier){
            if($cartier['neighbourhood'] == $neighbourhood)
                return $place;
            $place--;
        }
        return 'N/A';
    }

    protected function verifyExistence($neighbourhood){
        $sql = "SELECT COUNT(*) FROM statisticatotal WHERE cartiere = ?";
        $stmt = $this->conexiune->prepare($sql);
        $stmt->execute([$neighbourhood]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if($row['count']==0)
            return false;
        else
            return true;

    }
    protected function deleteComplaint2($mesaj)
    {
        $sql="DELETE from complaints WHERE trim(complaint)=?";
        // $stmt = $this->conexiune->prepare($sql);
        // $stmt->bindParam(1, $name, PDO::PARAM_STR, 255);
        // $stmt->bindParam(2, $parola, PDO::PARAM_STR, 255);
        $stmt=$this->conexiune->prepare($sql);
        $stmt->bindParam(1,$mesaj,PDO::PARAM_STR,255);
        $stmt->execute();
        
    }
}
