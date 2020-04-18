<?php

require "../init.php";

$db = openDb();

$data = [];

$result = $db->query("CALL Catalogue_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->CatalogueId;
  $entry["catalogue"] = $row->Catalogue;;
  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>