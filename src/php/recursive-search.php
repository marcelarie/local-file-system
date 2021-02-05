<?php  

require 'console-log.php';

function recursiveSearch($path) {
    $allFiles = [];
    $directory = new RecursiveDirectoryIterator($path);
    foreach(new RecursiveIteratorIterator($directory) as $file ) {
        $currentDir = $path.'/'.$directory;
        array_push($allFiles, $file);
    }
    
    
    return $allFiles;
}
