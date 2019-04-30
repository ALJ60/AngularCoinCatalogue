<?php

require "../init.php";

// Open the database
$db = openDb();

// Create an array to hold the data we're going to return
$data = [];

// Call procedure to return the records
$result = $db->query("CALL Collection_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

// Loop around adding each record to the array
while ($row = $result->fetch_object()) {
  $entry["id"] = $row->CollectionId;
  $entry["collection"] = $row->Collection;
  $data[] = $entry;
}

// Close the result set
$result->close();

// Close the database
$db->close();

// Return the data
echo json_encode($data);

?>