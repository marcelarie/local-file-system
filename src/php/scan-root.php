

<?php
require('filter-type.php');
require('file.php');
require('folder.php');
require('remove-files.php');

$path = $_GET['path'];
$filesArray = removeFiles(scandir($path));


$result = [];

foreach ($filesArray as $fileName) {
    array_push($result, filterType($path, $fileName));
}

echo json_encode($result);

?>

