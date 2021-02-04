<?php

require 'get-file-extension.php';

function filterType($path, $fileName)
{
    $filePath= $path.'/'.$fileName;
    $type = filetype($filePath);

    $date = filectime($filePath);
    $lastMod = filemtime($filePath);
    $extension = getFileExtension($fileName);
    $size = filectime($filePath);

    switch ($type) {
        case 'dir':
            $dir = new Folder($fileName, $date, $lastMod, $size);
            return $dir;
        break;
        case 'file':
            $file = new File($fileName, $date, $lastMod, $extension, $size);
            return $file;
        break;
    }
}
