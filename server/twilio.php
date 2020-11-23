<?php
    require('conexion.php');
    require __DIR__ . '/vendor/autoload.php';
    use Twilio\Rest\Client;
    
    // Your Account SID and Auth Token from twilio.com/console
    $account_sid = 'AC8daab6eda28b9ecbf6db3f12ebbee349';
    $auth_token = 'cd62f4067470225dc985980b3f59cc9e';
    // In production, these should be environment variables. E.g.:
    // $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]
    
    // A Twilio number you own with SMS capabilities
    $twilio_number = "+13614707018";
    

$date = Date("h:i");
$query = "SELECT * from usuarios";
$data = $conexion->query($query);
while($row = mysqli_fetch_array($data)){
    echo $row['telefono'];
}


if($date == "12:00"){

    $query = "SELECT * from usuarios";
    $data = $conexion->query($query);
    while($row = mysqli_fetch_array($data)){
        
        $client = new Client($account_sid, $auth_token);
        $client->messages->create(
            // Where to send a text message (your cell phone?)
            '+521'.$row["telefono"],
            array(
                'from' => $twilio_number,
                'body' => 'Hola esta es una prueba'
            )
        );
    }
    
}
exit;

?>