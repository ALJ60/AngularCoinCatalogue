<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string($_REQUEST["id"]);

$result = $db->query("CALL CatalogueEdition_Select('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$row = $result->fetch_object();

if (!$row) {
  http_response_code(500);
  die("Catalogue not found");
}

$data["edition"] = $row->CatalogueEdition;
$catalogue["id"] = $row->CatalogueId;
$data["catalogue"] = $catalogue;

$result->close();

$db->close();

echo json_encode($data);

?>