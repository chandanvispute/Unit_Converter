<?php
    $servername='localhost';
    $username='root';
    $password='';
    $dbname = 'responses';
    mysqli_report(MYSQLI_REPORT_ALL ^ MYSQLI_REPORT_INDEX);
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn)
	{
          die('Could not Connect MySql Server:' .mysql_error());
      }
?>