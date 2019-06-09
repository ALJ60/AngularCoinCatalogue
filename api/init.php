<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
  die;  
}

function openDb() {

  $config = simplexml_load_file("../config.xml");

  $db = new mysqli($config->host, $config->username, $config->password, $config->database, +$config->port);
  if ($db->connect_error) {
    http_response_code(500);
    die($db->connect_error);
  }

  if (!$db->set_charset("utf8")) {
    http_response_code(500);
    die($db->$error);
  }

  return $db;

}

?>