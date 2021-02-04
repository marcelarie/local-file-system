<?php
$path = '../../root';

$result = scandir($path);

$data = json_encode($result);

echo $data;
?>

