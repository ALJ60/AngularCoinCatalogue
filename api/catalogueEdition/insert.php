<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$catalogueId = $db->real_escape_string($params->catalogue->id);
if ($catalogueId == 0) {
  $catalogue = $db->real_escape_string($params->catalogue->catalogue);
}
else {
  $catalogue = "";
}
$edition = $db->real_escape_string($params->edition);

$result = $db->query("Call CatalogueEdition_Insert('$catalogueId', '$catalogue', '$edition');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>