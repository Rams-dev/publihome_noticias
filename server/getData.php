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

    $query ="INSERT into usuarios (nombre, telefono) values ('$nombre','$telefono')";
    if ($conexion->query($query) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "error";
    }



?>