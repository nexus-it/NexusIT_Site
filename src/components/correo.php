<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
include 'enviar_correo.php';





function send($data){
        //Instantiation and passing true enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;//SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.nexus-it.co';//'mail.genomax.co';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            
            $mail->Username   = 'pruebaenviogenomax@gmail.com';                    //SMTP username

            
            $mail->Password   = "dzco kuna ahnh ekyh";                               //SMTP password
          
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; PHPMailer::ENCRYPTION_SMTPS encouraged
            $mail->Port       = 465;                                    //TCP port to connect to, use 465 for PHPMailer::ENCRYPTION_SMTPS above

            //Remitente
            $mail->setFrom($data["to"]);
           //Destinatario
            $mail->addAddress($data["from"]);     //Add a recipient

            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $data['subject'];
            $mail->Body    = $data['message'];
           

          if ($mail->send()) {
              echo 'Message has been sent';
          } else {
              echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
          }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
}        

/*
//$indice=8572;
//while($indice<=8700){


$indice='SETP990000003';
while($indice<='SETP990000003'){
  send('ing.leandro.castro@gmail.com',$indice);
  $indice++;
}
*/
?>