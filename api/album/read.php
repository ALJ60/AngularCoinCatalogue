<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string($_REQUEST["id"]);

$result = $db->query("CALL Album_Select('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$row = $result->fetch_object();

if (!$row) {
  http_response_code(500);
  die("Album not found");
}

$data["album"] = $row->Album;
$data["collectionId"] = $row->CollectionId;
$data["notes"] = $row->Notes;

$result->close();

$db->close();

echo json_encode($data);

?>