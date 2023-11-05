<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Include packages
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require '../vendor/autoload.php';

// Initialize PHP Mailer
$mail = new PHPMailer(true);
$mail -> isSMTP();
$mail -> Mailer = "smtp";

// Set required parameters for SMTP
$mail -> Host = "smtp.gmail.com";
$mail -> SMTPSecure = "tls";
$mail -> Port = 587;
$mail -> SMTPAuth = TRUE;
$mail -> SMTPDebug = 1;

// Set email address parameters
$mail -> Username   = "chrisportfolio31@gmail.com";
$mail -> Password   = "bqwwgeuikyynapft";

// Set required parameters for email header and body
$mail -> IsHTML(true);
$mail -> AddAddress("info@chrisedge.co.za", "Christopher Edge");
$mail -> SetFrom($email, $name);
$mail -> Subject = $subject;
$mail -> Body = $message;

if (!$mail->Send())
{
  echo "Error while sending Email.";
  var_dump($mail);
}
else
{
  header("Location: ../index.html");
}
?>
