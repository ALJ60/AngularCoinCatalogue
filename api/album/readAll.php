<?php

require "../init.php";

$db = openDb();

$details = $_REQUEST["details"];

$data = [];

$result = $db->query("CALL Album_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->AlbumId;
  $entry["album"] = $row->Album;
  if ($details = "true") {
    $entry["collection"] = $row->Collection;
    $entry["notes"] = $row->Notes;
  }

  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>