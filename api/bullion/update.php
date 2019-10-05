<?php

require "../init.php";

$db = openDb();

$params = json_decode(file_get_contents("php://input"));

$id = $db->real_escape_string($params->id);
$metal = $db->real_escape_string($params->metal);
$price = $db->real_escape_string($params->price);

$result = $db->query("Call Bullion_Update('$id', '$metal', '$price');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>