<?php

function getFileExtension($fileName)
{
    $result = substr($fileName, strpos($fileName, '.'));
    return $result;
}
