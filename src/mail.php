<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "shirenkoval@gmail.com";
        
        # Sender Data
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        
        # Mail Content
        $content = "Name: Subscribe on 3K MMO\n";
        $content .= "Email: $email\n\n";
        $content .= "Message:\nNew subscription to update the game 3K MMO\n";

        # email headers.
        $headers = "The user left his email and signed up to update the game.
        User's e-mail: $name <$email>";

        # Send the email.
        $success = mail($mail_to,$content, $headers);
        if ($success) {
                ('.alert').classList.AddClass('success');
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>



