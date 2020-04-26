<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$id = $db->real_escape_string($params->id);
$catalogueId = $db->real_escape_string($params->catalogue->id);
$catalogue = $db->real_escape_string($params->catalogue->catalogue);
$edition = $db->real_escape_string($params->edition);

$result = $db->query("Call CatalogueEdition_Update('$id', '$catalogueId', '$catalogue', '$edition');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>