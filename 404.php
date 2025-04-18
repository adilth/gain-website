<?php
// Get the requested URL
$requestUrl = $_SERVER['REQUEST_URI'];

// Redirect to the React Router's 404 page
header("HTTP/1.1 302 Found");
header("Location: /#/not-found");
exit();
