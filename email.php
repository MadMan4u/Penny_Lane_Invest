<?php
$to = "email@mail.ru";//Почтовый ящик на который будет отправленно сообщение
  $subject = "Тема сообщения";//Тема сообщения
  $message = "Message, сообщение!";//Сообщение, письмо
  $headers = "Content-type: text/plain; charset=utf-8 \r\n";//Шапка сообщения, 
  //содержит определение типа письма, от кого, и кому отправить ответ на письмо
// Проверяем или метод запроса POST
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Поочередно проверяем или были переданные параметры формы, или они не пустые
    if(isset($_POST["username"]){
      
      $name = trim(strip_tags($_POST["username"]));
    }
    if(isset($_POST["usernumber"]))
    {
      $number = trim(strip_tags($_POST["usernumber"]));
    }
    if(isset($_POST["useremail"]))
    {
      $email = trim(strip_tags($_POST["useremail"]));
    }
    if (isset( $_POST["commentary"])) {
      $commentary = trim(strip_tags($commentary));
    }
      // Формируем письмо
      $message  = "<html>";
        $message  .= "<body>";
        $message  .= "Имя: ".$name;
        $message  .= "<br />";
        $message  .= "Email: ".$email;
        $message  .= "<br />";
        $message  .= "Телефон: ".$number;
        $message  .= "<br />";
        $message  .= "Комментарий: ".$commentary;
        $message  .= "</body>";
      $message  .= "</html>";

      mail ($to, $subject, $message, $headers);
}
else
{
  exit;
} 
}
?>