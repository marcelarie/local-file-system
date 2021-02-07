

<?php
require('filter-type.php');
require('file.php');
require('folder.php');
require('remove-files.php');
require('recursive-search.php');
require('convert-file-size.php');
require('scan-dir.php');

$data = $_GET['path'];

$mode = substr($data, 0, 1);
$path = substr($data, 1);
$filesArray;


if ($mode === 'r') {
    $filesArray = recursiveSearch($path);
} else {
    $filesArray = findFiles($path);
}

$result = [];

foreach ($filesArray as $filePath) {
    if (filterType($filePath)) {
        array_push($result, filterType($filePath));
    }
}

echo json_encode($result);

?>

