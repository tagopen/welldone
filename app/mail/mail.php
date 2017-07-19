<?php
  if (is_file('lib/class.phpmailer.php')) {
    require_once("lib/class.phpmailer.php");
  }
  if (is_file('lib/class.smtp.php')) {
    require_once("lib/class.smtp.php");
  }
  $http_host = $_SERVER['HTTP_HOST'];
  $body = '';
  if ( substr($http_host, 0, 4)=='www.') {
    $host_name = substr($http_host, 4);
  } else {
    $host_name = $http_host;
  }
  if (isset($_SERVER['HTTP_REFERER'])) {
    $http_referer = $_SERVER['HTTP_REFERER'];
  } else {
    $http_referer = '';
  }
  define ('HTTP_SERVER', 'http://' . $http_host . '/');
  define ('HOST_NAME', $host_name);
  define ('HTTP_REFERER', $http_referer);
  $post = array( 
    'host_name'     => HOST_NAME,
    'host_dir'      => HTTP_SERVER,
    'host_referer'  => HTTP_REFERER
  );

  if (!empty($_POST["form"])) {
    $post['user_form'] = filter_input(INPUT_POST, 'form', FILTER_SANITIZE_EMAIL);
    $body .= 'Форма: ' . $post['user_form'] . chr(10) . chr(13);
  }
  if (!empty($_POST["name"])) {
    $post['user_name'] = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $body .= 'Имя: ' . $post['user_name'] . chr(10) . chr(13);
  }
  if (!empty($_POST["phone"])) {
    $post['user_phone'] = filter_input(INPUT_POST,'phone', FILTER_SANITIZE_STRING);
    $body .= 'Телефон: ' . $post['user_phone'] . chr(10) . chr(13);
  }
  if (!empty($_POST["email"])) {
    $post['user_email'] = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $body .= 'Почта: ' . $post['user_email'] . chr(10) . chr(13);
  }
  if (!empty($_POST["message"])) {
    $post['user_message'] = filter_input(INPUT_POST,'message', FILTER_SANITIZE_STRING);
    $body .= 'Сообщение: ' . $post['user_message'] . chr(10) . chr(13);
  }
  $body .= chr(10) . chr(13) . "С уважением," . chr(10) . chr(13) . "разработчики сайта " . $post['host_referer'];

  $mail = new PHPMailer();
  $mail->CharSet = 'UTF-8';
  $mail->IsSendmail();

  $from = 'no-repeat@tagopen.com';
  $to   = "marchik88@rambler.ru";

  $mail->SetFrom($from, HOST_NAME);
  $mail->AddAddress($to);
  $mail->isHTML(false);
  $mail->Subject = HOST_NAME;
  $mail->Body    = $body;

  if(!$mail->send()) {
    echo 'Что-то пошло не так. ' . $mail->ErrorInfo;
    return false;
  } else {
    return true;
  }
?>