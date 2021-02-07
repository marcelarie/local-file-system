<?php
function findFiles($path)
{
    $allFiles = [];

    $files = scandir($path);
    
    foreach ($files as $file) {
        $filePath = $path.'/'.$file;
        if (is_dir($filePath)) {
            array_push($allFiles, $filePath.'/.');
        } else {
            array_push($allFiles, $filePath);
        }
    }

    return removeFiles($allFiles);
    
    // return $allFiles;
}
