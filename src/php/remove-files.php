<?php

function removeFiles($filesArray)
{
    $result = [];
    

    for ($i = 1; $i <= count($filesArray) - 1; $i++) {
        $fileEnd = substr($filesArray[$i], -3);
        if ($filesArray[$i] !== '.' && $filesArray[$i] !== '..') {
            $fileEnd !== './.' ?  array_push($result, $filesArray[$i]) : 0;
        }
    }

    return $result;
}
