<?php
    $to = '[EMAIL GOES HERE]';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = '[SUBJECT GOES HERE]';
    $reason = $_POST['reason'];
    $message = $_POST['message'];
    $body = 'From: ' . $name . '\n\n' .
            'Email: ' . $email . '\n\n' .
            'Reason: ' . $reason . '\n\n\n\n\n' .
            $message;
    if (mail($to, $subject, $body)) {
        echo('0');
    } else {
        echo('1');
    }
?>