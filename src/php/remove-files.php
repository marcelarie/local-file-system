<?php

function removeFiles($filesArray)
{
    $result = [];

    for ($i = 1; $i <= count($filesArray) - 1; $i++) {
        if ($filesArray[$i] !== '.' && $filesArray[$i] !== '..') {
            array_push($result, $filesArray[$i]);
        }
    }
    return $result;
}
