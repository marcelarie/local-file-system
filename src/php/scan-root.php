

<?php

$path = $_GET['path'];
$result = scandir($path);
$data = json_encode($result);

$objeto = {}

echo $data;
?>

