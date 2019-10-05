<?php

require "../init.php";

$db = openDb();

$data = [];

$result = $db->query("CALL Bullion_SelectAll;");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

while ($row = $result->fetch_object()) {
  $entry["id"] = $row->BullionId;
  $entry["metal"] = $row->BullionMetal;
  $entry["price"] = $row->BullionPrice;
  $entry["date"] = $row->PriceDate;
  $data[] = $entry;
}

$result->close();

$db->close();

echo json_encode($data);

?>