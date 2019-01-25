<?php
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$asunto=$_POST['asunto'];
$mensaje=$_POST['mensaje'];

$header='from: '.$mail."\r\n";
$header.="X-Mailer: PHP/".phpversion()."\r\n";
$header.="Mime-Version: 1.0 \r\n";
$header.="Content-type: text/plian";

$mensaje="Este mensaje fue enviado por ".$nombre.",\r\n";
$mensaje.="su e-mail es: ".$mail."\r\n";
$mensaje.="su telefono es: ".$telefono."\r\n";
$mensaje.="Asunto:  ".$asunto."\r\n";
$mensaje.="Mensaje: ".$_POST['mensaje']."\r\n";
$mensaje.="enviado el ".date('d/m/Y',time());

$para='nickooggero.dgw3547@gmail.com';
$el_asunto='Asunto del mail recibido';

mail($para, $el_asunto, utf8_decode($mensaje), $header);

header("Location:pagina.html")
?>