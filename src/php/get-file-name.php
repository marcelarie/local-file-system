<?php
function getFileName($path, $data)
{
    if ($data[0] == 'dir') {
        // if its a dir return the dir name
        // print_r(explode('/', $path, -1));
        return explode('/', $path, -1);
    } else {
        // if its a file return the file name
        return explode('/', $path);
    }
}
