<?php

require "../init.php";

$db = openDb();

$id = $db->real_escape_string(file_get_contents("php://input"));

$result = $db->query("Call Sheet_Delete('$id');");

if (!$result) {
  http_response_code(500);
  die($db->error);
}

$db->close();

?>