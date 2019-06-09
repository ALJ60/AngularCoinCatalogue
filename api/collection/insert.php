<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$collection = $db->real_escape_string($params->collection);
$sortOrder = $db->real_escape_string($params->sortOrder);

$result = $db->query("Call Collection_Insert('$collection', '$sortOrder');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>