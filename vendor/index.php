<?php
header("Access-Control-Allow-Origin: ");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//get referrer server
if($_Server['HTTP_REFERRER'] === "http://localhost:3000/") {
    //get data from GET Method
    $name = isset($_GET['name'])? $_GET['name']:null;
    $email = isset($_GET['sendto'])? $_GET['sendto']:null;
    $message = isset($_GET['message'])? $_GET['message']:null;

    if($name && $email && $message) {
        require'vendor/autoload.php';

        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'shilpisachdeva.wadhwa@gmail.com';                     // SMTP username
            $mail->Password   = 'Shilpi@123';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom('shilpisachdeva.wadhwa@gmail.com', 'Mailer');
        
            $mail->addAddress($email);               // Name is optional
            $mail->addReplyTo('shilpisachdeva.wadhwa@gmail.com', 'Information');
          
            

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'React Form';
            $mail->Body    = 'Name: '. $name . <br/>
                                'Email: ' . $email . <br/>
                                'Message: '. $message;

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }else {
        echo "All Fields are Required";
    }
}else {
    echo "You can't use this server";
}
?>