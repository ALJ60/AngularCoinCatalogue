<?php

require "../init.php";

$db = openDb();

$data = [];

$result = $db->query("CALL Collection_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->CollectionId;
  $entry["collection"] = $row->Collection;
  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>