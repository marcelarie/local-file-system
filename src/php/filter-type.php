<?php

function filterType($path, $fileName)
{
    //delete files

    $type = filetype($path.'/'.$fileName);

    switch ($type) {
        case 'dir':
            $dir = new Folder($fileName);
            return $dir;
        break;
        case 'file':
            $file = new File($fileName);
            return $file;
        break;
    }
}
