<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$album = $db->real_escape_string($params->album);
$collectionId = $db->real_escape_string($params->collectionId);
$notes = $db->real_escape_string($params->notes);

$result = $db->query("Call Album_Insert('$album', '$collectionId', '$notes');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>