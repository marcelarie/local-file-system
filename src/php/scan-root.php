

<?php
require('filter-type.php');
require('file.php');
require('folder.php');
require('remove-files.php');
require('recursive-search.php');
require('convert-file-size.php');

$path = $_GET['path'];
$filesArray = recursiveSearch($path);

$result = [];

foreach ($filesArray as $filePath) {
    if (filterType($filePath)) {
        array_push($result, filterType($filePath));
    }
}

echo json_encode($result);

?>

