<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$id = $db->real_escape_string($params->id);
$sheet = $db->real_escape_string($params->sheet);
$rows = $db->real_escape_string($params->rows);
$columns = $db->real_escape_string($params->columns);
$albumId = $db->real_escape_string($params->albumId);
$collectionId = $db->real_escape_string($params->collectionId);

$result = $db->query("Call Sheet_Update('$id', '$sheet', '$rows', '$columns', '$albumId', '$collectionId');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>