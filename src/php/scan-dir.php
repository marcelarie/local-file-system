<?php
function findFiles($path)
{
    $allFiles = [];

    $files = scandir($path);
    
    foreach ($files as $file) {
        $filePath = $path.'/'.$file;
        if (is_dir($filePath)) {
            array_push($allFiles, $path.'/'.$file.'/..');
        } else {
            array_push($allFiles, $path.'/'.$file);
        }
    }

    // print_r($allFiles);
    
    return $allFiles;
}
