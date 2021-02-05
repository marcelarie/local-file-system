<?php

require 'get-file-extension.php';
require 'extract-file-data.php';

function filterType($path, $fileName)
{
    $data = extractFileData($path, $fileName);

            //type
    switch ($data[0]) {
        case 'dir':                       //date    lastMod    size      
            $dir = new Folder($fileName, $data[1], $data[2], $data[4]);
            return $dir;
        break;
        case 'file':                      //date  lastMod   extension   size
            $file = new File($fileName, $data[1], $data[2], $data[3], $data[4]);
            return $file;
        break;
    }
}
