<?php
$host="192.168.100.7:3306";
$user="root";
$pwd="";
$dbName="test";

$dsn='mysql:host=' . $host . ';dbname=' .$dbName;
$pdo=new PDO($dsn,$user,$pwd);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
function showComments($neighbourhood){
	global $pdo;
	$sql = "SELECT complaint FROM complaints WHERE neighbourhood = '" . $neighbourhood . "'";
	
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	$results=[];
	while($row=$stmt->fetch(PDO::FETCH_ASSOC))
	{
		extract($row);
		echo $complaint."<br><hr style=\"width:50%\">";
		
	}
	
}
?>