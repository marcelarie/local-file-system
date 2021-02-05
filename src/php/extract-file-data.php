<?php

function extractFileData($path, $fileName) 
{
    $filePath= $path.'/'.$fileName;

    $type = filetype($filePath);
    $date = date('d m Y h:i A', filectime($filePath));
    $lastMod = date('d m Y h:i A', filemtime($filePath));
    $extension = getFileExtension($fileName);
    $size = filesize($filePath) > 1024 ?
                    round(filesize($filePath)/1000) .' MB':
                         filesize($filePath). ' kB';

    $result = [$type, $date, $lastMod, $extension, $size];
    return $result;
}

