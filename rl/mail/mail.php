<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
  exit();
}

$project_name = 'Рис Лосось';
$admin_email = 'order@ris-losos.ru';
$form_subject = 'Заявка с сайта Рис Лосось';
$token = "1426275203:AAEP1vmit2tvoH21XJK8t0fCwrgTNvpBAck";
$chat_id = "-447824840";
// для тестов:
// 1012537302:AAEKW7whWFDf-N-NFAzjzgq2mNXG5RU9uIk
// -426325228
// релиз:
// 1426275203:AAEP1vmit2tvoH21XJK8t0fCwrgTNvpBAck
// -447824840
$message = '';

$color_counter = 1;

foreach ($_POST as $key => $value) {
  if ($value === '') {
    continue;
  }

  if (strpos($key, 'Товар') !== false) {
    $key = 'Товар';
  }
  if (strpos($key, 'Количество') !== false) {
    $key = 'Количество';
    $value = $value. ' шт.';
  }
  if (strpos($key, 'Цена') !== false) {
    $key = 'Цена';
    $value = $value. ' р.';
  }
  if (strpos($key, 'Аттрибут') !== false) {
    $key = 'Аттрибут';
  }

  if ($key === 'Общая_сумма') {
    $value = $value.' р.';
    $key = 'Общая сумма';
  }

  $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
  $message .= "
    <tr style='background-color: $color;'>
      <td style='padding: 10px; border: 1px solid #e9e9e9; width: 25%;'>$key</td>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
    </tr>";

  $color_counter++;

  if (strpos($key, 'Товар') !== false) {
    $key = '%0A-';
  }
  if (strpos($key, 'Количество') !== false) {
    $key = '-';
  }
  if (strpos($key, 'Цена') !== false) {
    $key = ' = ';
  }
  if (strpos($key, 'Аттрибут') !== false) {
    $key = '-';
  }
  if (strpos($key, 'Имя') !== false) {
    $key = '%0A%0AИмя: ';
  }
  if (strpos($key, 'Телефон') !== false) {
    $key = '%0AТелефон: ';
  }
  if (strpos($key, 'Адрес') !== false) {
    $key = '%0AАдрес: ';
  }
  if (strpos($key, 'Оплата') !== false) {
    $key = '%0A%0AОплата';
  }

  if ($key === 'Общая сумма') {
    $value =' =  '.$value;
    $key = '%0A%0AОбщая сумма заказа';
  }

  $txt .= "".$key." ".$value." ";
}

function adopt($text) {
  return '=?utf-8?B?'.base64_encode($text).'?=';
}

$message = "Заказ<br><table style='width: 100%;'>$message</table>";

$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From:" . adopt($form_subject) . " <$admin_email>\r\n";

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text=<b>Заказ с сайта Рис Лосось</b>%0A{$txt}","r");

$success_send = mail($admin_email, adopt($form_subject), $message, $headers);

if ($success_send) {
  echo 'success';
} else {
  echo 'error';
}
?>