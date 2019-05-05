<?php

require "../init.php";

// Open the database
$db = openDb();

// Get the id of the collection to delete
$id = $db->real_escape_string(file_get_contents("php://input"));

// Call procedure to delete the collection
$result = $db->query("Call Collection_Delete('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

// Close the database
$db->close();

?>