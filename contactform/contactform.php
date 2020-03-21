<?php
include('connect.php');

$name =$_POST['name'];
$email =$_POST['email'];
$subject =$_POST['subject'];
$message =$_POST['message'];

// echo $name.$email.$subject.$message;
$sql ="INSERT INTO contact (name,email,subject,message)
    VALUES('$name','$email','$subject','$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message Sent";
} 
else {
    echo "Error: " ;
}
?>