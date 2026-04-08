
<?php
// Database configuration
$servername = "localhost";
$username   = "root";
$password   = "root";
$database   = "studentdb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("❌ Connection failed: " . mysqli_connect_error());
}

// Optional: success message (for debugging)
// echo "✅ Connected successfully";
?>