<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    $to = "info@goten.solutions";
    $subject = "Quote Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $message .= "Email: $email\r\n";

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
