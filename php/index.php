<?php

$firstname = $_REQUEST['firstname'];
$lastname = $_REQUEST['lastname'];
$date = $_REQUEST['date'];
$time = $_REQUEST['time'];
$phone = $_REQUEST['phone'];

if (isset($_POST['btn'])) {

    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cilantro";

    $conn = mysqli_connect($host, $username, $password, $dbname);
    $insert = "insert into booking values('$firstname','$lastname','$date','$time','$phone')";
    mysqli_query($conn, $insert);

    if ($conn) {
        echo ("connected");

    } else {
        echo ("not connected");
    }

}






?>