<?php

require "../init.php";

$db = openDb();

$data = [];

$result = $db->query("CALL CatalogueEdition_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->CatalogueEditionId;
  $entry["edition"] = $row->CatalogueEdition;
  $catalogue["catalogue"] = $row->Catalogue;
  $entry["catalogue"] = $catalogue;
  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>