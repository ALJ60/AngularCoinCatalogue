<?php

header("Access-Control-Allow-Origin: *");

function openDb() {

  // Load the config file to get the database connection details
  $config = simplexml_load_file("../config.xml");

  // Open a connection to the database
  $db = new mysqli($config->host, $config->username, $config->password, $config->database, +$config->port);
  if ($db->connect_error) {
    http_response_code(500);
    die($db->connect_error);
  }

  // Set the character set
  if (!$db->set_charset("utf8")) {
    http_response_code(500);
    die($db->$error);
  }

  // Return the connection
  return $db;

}

?>