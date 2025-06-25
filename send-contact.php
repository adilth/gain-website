<?php
header('Content-Type: application/json');

// Allow CORS for dev (adjust in production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

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

$to = 'rajaadil19952011@gmail.com';
$headers = "From: $fullName <$email>\r\n" .
    "Reply-To: $email\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";
$body = "Name: $fullName\nEmail: $email\nSubject: $subject\nMessage:\n$message";

$mailSent = mail($to, "[Contact Form] $subject", $body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message.']);
}
