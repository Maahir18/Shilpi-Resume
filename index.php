<?php
Header('Access-Control-Allow-Origin=*');
$serverName = "localhost";
$username= "root";
$password="";
$database = "react_php";

$conn = mysqli_connect($serverName,$username,$password,$database);

$rect_data = "JElodf";
console.log($rect_data);
 $query = "Insert Into Contact(Name, Email, Message) Values ('$rect_data','shilpi@gmail.com','$rect_data')";

 if(mysqli_query($conn, $query)){
	 echo "Data has been inserted.";
 }else 
 	echo "Error!";
?>