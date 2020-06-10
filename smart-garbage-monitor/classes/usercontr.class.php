<?php
require_once '../classes/user.class.php';
class UserContr extends User{

    function __construct()
    {
        $this->getConexiune();
    }
    public function saveLocation($neighbourhood,$lat,$lng){
        if($this->verifyExistence($neighbourhood)==true)
            $this->insertLocation($neighbourhood,$lat,$lng);
    }
    public function insertComments($neighbourhood,$comment,$name){
        if($this->verifyExistence($neighbourhood)==true)
            $this->insertComment($neighbourhood,$comment,$name);
    }
    public function insertGunoaie($name,int $cantitateHartie, int $cantitateSticla, int $cantitateMenajer)
    {
        
        if(is_int($cantitateHartie)  && is_int($cantitateSticla) && is_int($cantitateMenajer) && is_string($name) && $cantitateHartie>0 && $cantitateMenajer>0 && $cantitateSticla>0)
        {

        $name=trim($name);
        $this->insertGunoaie2($name,$cantitateHartie,$cantitateMenajer,$cantitateSticla);
        echo json_encode(array("message"=>"Datele au fost stocate cu succes in baza de date"));
        }
        else
        {
            echo json_encode(array("message"=>"Datele trimise sunt incorecte."));
        } 

    }   
    public function createHartie($name,$cantitateHartie)
    {
        $this->setHartie($name,$cantitateHartie);
    } 
    public function createMenajer($name,$cantitateMenajer)
    {
        $this->setMenajer($name,$cantitateMenajer);
    }
    public function createSticla($name,$cantitateSticla)
    {
        $this->setHartie($name,$cantitateSticla);
    }
    public function deleteProblema($json)
    {
        $problema=json_decode($json,true);
        $cartier=$problema['cartiere'];
        $latitudine=(float)$problema['latitudine'];
        $longitudine=(float)$problema['longitudine'];
       
        $this->deleteProblema2($cartier,$latitudine,$longitudine);
    }
    public function putGunoaie($name,int $cantitateSticla,int $cantitateHartie,int $cantitateMenajer)
    {
       
        if(is_int($cantitateHartie)  && is_int($cantitateSticla) && is_int($cantitateMenajer) && is_string($name) && $cantitateSticla>0 && $cantitateMenajer>0 && $cantitateHartie>0)
        {

        $name=trim($name);
        $this->putGunoaie2($name,$cantitateSticla,$cantitateHartie,$cantitateMenajer);
        echo json_encode(array("message"=>"Datele au fost stocate cu succes in baza de date"));
        }
        else
        {
            echo json_encode(array("message"=>"Datele trimise sunt incorecte."));
        } 
    }
    public function deleteComplaint($mesaj)
    {
        
        $this->deleteComplaint2($mesaj);
       
    }
}