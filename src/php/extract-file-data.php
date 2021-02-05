<?php

function extractFileData($path, $fileName) 
{
    $filePath= $path.'/'.$fileName;

    $type = filetype($filePath);
    $date = date('d m Y h:i A', filectime($filePath));
    $lastMod = date('d m Y h:i A', filemtime($filePath));
    $extension = getFileExtension($fileName);
        

    $size = convertFileSize($filePath);

    $result = [$type, $date, $lastMod, $extension, $size];
    return $result;
}

