<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string($_REQUEST["id"]);

$result = $db->query("CALL Catalogue_Select('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$row = $result->fetch_object();

if (!$row) {
  http_response_code(500);
  die("Catalogue not found");
}

$data["catalogue"] = $row->Catalogue;

$result->close();

$db->close();

echo json_encode($data);

?>