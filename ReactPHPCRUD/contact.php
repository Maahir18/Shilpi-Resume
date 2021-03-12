<?php


require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = $request->name;
    $email = $request->email;
    $message = $request->message;

    //Store

    $stmt = $conn->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    $stmt->execute();

    echo "New records created successfully";

    $stmt->close();
    $conn->close();

}
?>