<?php
include_once 'my_responses.php';
if(isset($_POST['submit']))
{   
     $name = $_POST['name'];
     $email = $_POST['response'];
     $sql = "INSERT INTO response (name,response) VALUES ('$name','$email')";
     if (mysqli_query($conn, $sql)) {
        header("Location: prac.php");
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>