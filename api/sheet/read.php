<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string($_REQUEST["id"]);

$result = $db->query("CALL Sheet_Select('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$row = $result->fetch_object();

if (!$row) {
  http_response_code(500);
  die("Sheet not found");
}

$data["sheet"] = $row->Sheet;
$data["rows"] = $row->Rows;
$data["columns"] = $row->Columns;
$data["albumId"] = $row->AlbumId;
$data["collectionId"] = $row->CollectionId;

$result->close();

$db->close();

echo json_encode($data);

?>