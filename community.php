<?php
// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "community";

$conn = new mysqli($servername, $username, $password, $dbname);

// Retrieve posts from the database
$sql = "SELECT title, content FROM posts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Title: " . $row["title"]. " - Content: " . $row["content"]. "<br>";
    }
} else {
    echo "0 results";
}

// Retrieve members from the database
$sql = "SELECT name FROM members";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Member: " . $row["name"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
