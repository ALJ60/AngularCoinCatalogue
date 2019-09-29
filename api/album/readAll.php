<?php

require "../init.php";

$db = openDb();

$data = [];

$result = $db->query("CALL Album_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->AlbumId;
  $entry["album"] = $row->Album;
  $entry["collection"] = $row->Collection;
  $entry["notes"] = $row->Notes;
  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>