<?php
    require('conexion.php');



    // $error = new ArrayObject();
     $error = array();
    $nombre = trim($_POST["nombre"]);
    $telefono = str_replace("-", "",trim($_POST["telefono"]));

    if($nombre == ""){
        array_push($error,array("nombre" => "Este campo no puede quedar vacio"));
        //$error->append(array("nombre" => "Este campo no puede ser vacio"));
    }
    if($telefono== ""){
        //$error->append(array("telefono" => "Este campo no puede ser vacio"));

        array_push($error,array("telefono" => "Este campo no puede quedar vacio"));
    }

    if(count($error) > 0){
        echo json_encode($error);
        // var_dump($error);
        exit;
    }
        //var_dump($nombre,$telefono);

    // echo json_encode(array($nombre,$telefono));

    $queryVerify = "SELECT * from usuarios where telefono = ". $telefono;
    $res = $conexion->query($queryVerify);
    // var_dump($res);
    // exit;

    if(mysqli_num_rows($res) > 0){
        echo json_encode(array("existe" => "Este número ya esta dado de alta"));
        exit;
    }

    $query ="INSERT into usuarios (nombre, telefono) values ('$nombre','$telefono')";
    if ($conexion->query($query) === TRUE) {
        echo json_encode(array("ok" => "Gracias por registrarte"));
    } else {
        echo json_encode(array("fail" => "intenta mas tarde"));
    }



?>