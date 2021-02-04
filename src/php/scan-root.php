<?php
require('remove-files.php');

$path = $_GET['path'];

$result = scandir($path);

$data = json_encode($result);

echo $data;
?>

