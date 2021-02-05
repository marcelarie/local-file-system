<?php

require 'get-file-name.php';
require 'extract-file-data.php';

function filterType($path)
{
    $data = extractFileData($path);

    
    $fileName = getFileName($path,$data);
                //type
        switch ($data[0]) {
            case 'dir':                       //date    lastMod    size      
                $dir = new Folder(end($fileName), $data[1], $data[2], $data[4]);
                return $dir;
            break;
            case 'file':                      //date  lastMod   extension   size
                $file = new File(end($fileName), $data[1], $data[2], $data[3], $data[4]);
                return $file;
            break;
        }
}
