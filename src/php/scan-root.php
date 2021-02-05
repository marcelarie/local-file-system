

<?php
require('filter-type.php');
require('file.php');
require('folder.php');
require('remove-files.php');
require('recursive-search.php');
require('convert-file-size.php');

$path = $_GET['path'];
$filesArray = removeFiles(scandir($path));


$result = [];

foreach ($filesArray as $fileName) {
    array_push($result, filterType($path, $fileName));
}

echo json_encode($result);

?>

