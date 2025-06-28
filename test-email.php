<?php
// Simple test file to verify email functionality
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Email Test</h2>";

// Test data
$testData = [
    'fullName' => 'Test User',
    'email' => 'test@example.com',
    'subject' => 'Test Email',
    'message' => 'This is a test message from the contact form.'
];

echo "<p>Testing with data:</p>";
echo "<pre>" . print_r($testData, true) . "</pre>";

// Simulate the POST request
$_SERVER['REQUEST_METHOD'] = 'POST';
$input = json_encode($testData);

// Include the send-contact.php logic
try {
    $data = json_decode($input, true);

    if (!$data) {
        throw new Exception('Invalid JSON');
    }

    $fullName = trim($data['fullName'] ?? '');
    $email = trim($data['email'] ?? '');
    $subject = trim($data['subject'] ?? '');
    $message = trim($data['message'] ?? '');

    echo "<p>✅ Data parsed successfully</p>";
    echo "<p>Name: $fullName</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Subject: $subject</p>";
    echo "<p>Message: $message</p>";

    // Test email sending
    $to = 'rajaadil19952011@gmail.com';
    $headers = "From: GAiN NGO Contact Form <rajaadil19952011@gmail.com>\r\n";
    $headers .= "Reply-To: $fullName <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailContent = "Test Email\n\n";
    $emailContent .= "Name: $fullName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Subject: $subject\n";
    $emailContent .= "Message: $message\n";

    $mailSent = mail($to, "[Test] $subject", $emailContent, $headers);

    if ($mailSent) {
        echo "<p style='color: green;'>✅ Email sent successfully!</p>";
    } else {
        echo "<p style='color: orange;'>⚠️ Email function returned false (check email_log.txt)</p>";
    }
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
}

echo "<p><a href='email_log.txt'>View Email Log</a></p>";
