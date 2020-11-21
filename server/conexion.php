<?php
    $dbname = "noticias";
    $dbuser = "root";
    $server = "localhost";
    $psw  = "";

    $conexion = mysqli_connect($server,$dbuser,$psw,$dbname);
    if(!$conexion){
        die("Connection failed: " . mysqli_connect_error());
        echo "db error";
    }else{
        // echo "db conectada";
    
    }
?>