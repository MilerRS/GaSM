<?php

/*class Dbh {
    private $host="localhost:3306";
    private $user="root";
    private $pwd="";
    private $dbName="chart";

    private $pdo;
      public function connect()
    {
      
        $dsn='mysql:host=' . $this->host . ';dbname=' .$this->dbName;
        $pdo=new PDO($dsn,$this->user,$this->pwd);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);

      

        return $pdo;
    }
}*/
class Dbh{
  private $host="ec2-54-247-78-30.eu-west-1.compute.amazonaws.com";
  private $user="toavkobcsjmuvd";
  private $pwd="57b439518b57e8a6fbd51f5278a6b703f58001fe37bf38912bb8d4a901a860de";
  private $dbName="dft05leklnsihu";
 public $pdo;
  public function connect()
  {
    $dsn='pgsql:host=' .$this->host. ';dbname=' .$this->dbName;
    $pdo=new PDO($dsn,$this->user,$this->pwd);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
    return $pdo;
  }
}

