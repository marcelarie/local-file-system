<?php

require 'get-file-extension.php';
require 'extract-file-data.php';

function filterType($path)
{
    $data = extractFileData($path);
    echo $data[0];

    $separatedSlash = explode('/',$path);
    $fileName = end($separatedSlash);
            //type
    if (strcmp($fileName, '.') != 0 && strcmp($fileName, '..') != 0) {
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
    } else {
    }
}
