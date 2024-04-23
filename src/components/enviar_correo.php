<?php

include 'correo.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $name = $_POST["name"];
    $lastName = $_POST["lastName"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    
    // Configura los detalles del correo electrónico
    $to = "paulaarias301@hotmail.com";
    $subject = "Mensaje desde el formulario de contacto";
    $message = "Nombre: $name\n Apellido: $lastName\n Empresa: $company\n Correo electrónico: $email";
    $headers = "From: $email";

    $data = [
        'name' => $name,
        'lastName' => $lastName,
        'company' => $company,
        'email' => $email,
        'to' => $to,
        'subject'=> $subject,
        'message' => $message,
        'headers' => $headers
    ];

    $correo = send($data);

    // Envía el correo electrónico
    if ($correo) {
        echo "El correo electrónico se ha enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el correo electrónico.";
    }
}
?>
