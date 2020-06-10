<?php
include '../classes/user.class.php';

class UserView extends User
{
    function __construct()
    {
        $this->getConexiune();
    }
    public function showComments($name){
        $result = $this->getComments($name);
        return json_encode($result);
    }
    public function showGunoaie($name)
    {
       
        $results=$this->getGunoaie($name);
        $json=[];
         while($row=$results->fetch(PDO::FETCH_ASSOC))
         {
             extract($row);
             $json['sticla']=(float)$sticla;
             $json['hartie']=(float)$hartie;
             $json['menajer']=(float)$menajer;
         }
         return $json;

    }
    public function takeAllforMonth($luna)  //aduc toate gunoaiele din luna respectiva
    {

        $results=$this->takeAll2forMonth($luna);
        
        $cantitateHartie=0;
        $cantitateSticla=0;
        $cantitateMenajer=0;
        while($row=$results->fetch(PDO::FETCH_ASSOC))
        {
            extract($row);
            $cantitateHartie=$cantitateHartie+$hartie;
            $cantitateSticla=$cantitateSticla+$sticla;
            $cantitateMenajer=$cantitateMenajer+$menajer;
        }
        $json=[];
        $json['hartie']=(float)$cantitateHartie;
        $json['sticla']=(float)$cantitateSticla;
        $json['menajer']=(float)$cantitateMenajer;
     
        return $json;
    }
    public function showCartiere()   ///afisam cartierele
    {
        
       
       $json=[];
      $json=$this->showCartiere2();

      return $json;
    }
    public function showCartiereSimplu()
    {
        $cartiere=[];
        $cartiere=$this->showCartiereSimplu2();
        return $cartiere;
    }

    public function showSticla()   ///afisam sticla de la toate cartierele
    {
      
       $json=[];
      $json=$this->showSticla2();
          return $json;
    }
    public function showMenajer()   ///afisam gunoiul menajer din cartiere
    {
        $json=[];
      $json=$this->showMenajer2();
          return $json;
    }
  
    public function showHartie()   ///afisam cantitatea de hartie din cartiere
    {
        $json=[];
      $json=$this->showHartie2();
          return $json;
    }
    /*public function takeAll()  //voi lua toate informatiile din tabela pentru a le pune in statistica
    {
        $results=$this->takeAll2();

    }*/
    public function showHartieCartier($name)
    {
        $json=[];
        $json=$this->showHartieCartier2($name);
    
        
        return $json;
    }
    public function showSticlaCartier($name)
    {
        $json=[];
        $json=$this->showSticlaCartier2($name);
    
        
        return $json;
    }
    public function showMenajerCartier($name)
    {
        $json=[];
        $json=$this->showMenajerCartier2($name);
    
        
        return $json;
    }
    public function validate($json)  //partea de login
    {
        $problema=json_decode($json);
        $name=$problema->nume;
        $parola=$problema->parola;
        $suma=$this->validate2($name,$parola);
        if(count($suma)!=0)
        {
            return true;
        }
        else
        {
            return false;
        }
        
        
    }
    public function redareProbleme()
    {
     
         return json_encode($this->redareProbleme2());
        
    }
    public function cartiereOrdine()
    {
        $results=$this->cartiereOrdine2();
        $json=json_encode($results);
        return $json;
        
        
    }
    public function getGarbageInfoCurrentMonth($neighbourhood,$month){
        $result=$this->getGarbageInfoCurrentMonth2($neighbourhood,$month);
        return json_encode($result);
    }

    public function getGarbageInfoAllTime($neighbourhood){
        $result=$this->getGarbageInfoAllTime2($neighbourhood);
        return json_encode($result);
    }
    public function getStatisticaperMonth(){
        $results=$this->getStatisticaperMonth2();
        return json_encode($results);
    }
    public function getStatisticatotalcsv(){
        $results=$this->getStatisticatotalcsv2();
        return json_encode($results);
    }

    public function getNeighbourhoodPlace($neighbourhood){
        return json_encode($this->getNeighbourhoodPlace2($neighbourhood));
    }
}

