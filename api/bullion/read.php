<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string($_REQUEST["id"]);

$result = $db->query("CALL Bullion_Select('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$row = $result->fetch_object();

if (!$row) {
  http_response_code(500);
  die("Bullion not found");
}

$data["metal"] = $row->BullionMetal;
$data["price"] = $row->BullionPrice;

$result->close();

$db->close();

echo json_encode($data);

?>