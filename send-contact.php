<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include PHPMailer
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

// Allow CORS for dev (adjust in production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

try {
    $input = file_get_contents('php://input');
    if (!$input) {
        throw new Exception('No input received');
    }

    $data = json_decode($input, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON: ' . json_last_error_msg());
    }

    $fullName = trim($data['fullName'] ?? '');
    $email = trim($data['email'] ?? '');
    $subject = trim($data['subject'] ?? '');
    $message = trim($data['message'] ?? '');

    if (!$fullName || !$email || !$subject || !$message) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit();
    }

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'rajaadil19952011@gmail.com'; // Your Gmail address
        $mail->Password   = 'llch urnb scbv lhqk'; // ⚠️ REPLACE THIS with your Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('rajaadil19952011@gmail.com', 'GAiN NGO Contact Form');
        $mail->addAddress('rajaadil19952011@gmail.com', 'GAiN NGO');
        $mail->addReplyTo($email, $fullName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "[Contact Form] $subject";

        // HTML email body
        $htmlBody = "
        <html>
        <head>
            <title>New Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
                <tr>
                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;'>Name:</td>
                    <td style='padding: 10px; border: 1px solid #ddd;'>" . htmlspecialchars($fullName) . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;'>Email:</td>
                    <td style='padding: 10px; border: 1px solid #ddd;'>" . htmlspecialchars($email) . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;'>Subject:</td>
                    <td style='padding: 10px; border: 1px solid #ddd;'>" . htmlspecialchars($subject) . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;'>Message:</td>
                    <td style='padding: 10px; border: 1px solid #ddd;'>" . nl2br(htmlspecialchars($message)) . "</td>
                </tr>
            </table>
            <p><small>This message was sent from the GAiN NGO contact form on " . date('Y-m-d H:i:s') . "</small></p>
        </body>
        </html>";

        $mail->Body = $htmlBody;
        $mail->AltBody = "New Contact Form Submission\n\nName: $fullName\nEmail: $email\nSubject: $subject\nMessage: $message";

        $mail->send();

        // Log successful email
        $logContent = "=== EMAIL SENT SUCCESSFULLY ===\n";
        $logContent .= "To: rajaadil19952011@gmail.com\n";
        $logContent .= "Subject: [Contact Form] $subject\n";
        $logContent .= "From: $fullName <$email>\n";
        $logContent .= "Date: " . date('Y-m-d H:i:s') . "\n";
        $logContent .= "Content: $message\n";
        $logContent .= "================================\n\n";

        file_put_contents('email_log.txt', $logContent, FILE_APPEND | LOCK_EX);

        echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    } catch (Exception $e) {
        // Log the error
        $errorLog = "=== EMAIL ERROR ===\n";
        $errorLog .= "Error: " . $mail->ErrorInfo . "\n";
        $errorLog .= "Date: " . date('Y-m-d H:i:s') . "\n";
        $errorLog .= "==================\n\n";

        file_put_contents('email_log.txt', $errorLog, FILE_APPEND | LOCK_EX);

        throw new Exception("Email could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error: ' . $e->getMessage()]);
}
