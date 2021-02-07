<?php

function extractFileData($filePath)
{
    if (substr($filePath, -2) !== '..') {
        $separatedDot = explode('.', $filePath);


        $type = filetype($filePath);
        $date = date('d m Y h:i A', filectime($filePath));
        $lastMod = date('d m Y h:i A', filemtime($filePath));
        $extension = end($separatedDot);

        $size = convertFileSize($filePath);

        $result = [$type, $date, $lastMod, $extension, $size];
        return $result;
    }
}
