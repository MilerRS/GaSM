<?php
 $host="192.168.100.7:3306";
 $user="root";
 $pwd="";
 $dbName="test";

$dsn='mysql:host=' . $host . ';dbname=' .$dbName;
$pdo=new PDO($dsn,$user,$pwd);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
var_dump($pdo);

if(isset($_GET['comment'])&&isset($_GET['neighbourhood'])){
	$comment = $_GET['comment'];
	$neighbourhood = $_GET['neighbourhood'];
	echo $comment;
	$sql = "INSERT INTO complaints VALUES ('".$neighbourhood."'".",'".$comment."'".")";
	echo $sql;
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
}

header("Location: http://localhost/TW/cityinfo.php?city=".$_GET['neighbourhood']);



?>