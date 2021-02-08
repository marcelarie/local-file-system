<?php

$path = $_GET['path'];

unlink($path);

echo 'deleted file';



