<?php
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // Формируем заголовки электронной почты
    $to = "info@goten.solutions";
    $subject = "Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Формируем тело электронной почты
    $message = "Name: $name\r\n";
    $message .= "Email: $email\r\n";
    $message .= "Phone: $phone\r\n";

    // Отправляем почту
    $success = mail($to, $subject, $message, $headers);

    // Проверяем, удалось ли отправить почту
    if ($success) {
        // Выводим сообщение об успешной отправке
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        // Выводим сообщение об ошибке отправки
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
