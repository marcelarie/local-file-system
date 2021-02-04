<?php

require 'get-file-extension.php';

function filterType($path, $fileName)
{
    $filePath= $path.'/'.$fileName;
    $type = filetype($filePath);

    $date = date('d m Y h:i A', filectime($filePath));
    $lastMod = date('d m Y h:i A', filemtime($filePath));
    $extension = getFileExtension($fileName);

    $size = filesize($filePath) > 1024 ?
                    round(filesize($filePath)/1000) .' MB':
                         filesize($filePath). ' kB';

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
