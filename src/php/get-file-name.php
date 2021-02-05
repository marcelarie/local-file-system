<?php
    function getFileName($path, $data) {
        if ($data[0] == 'dir' ) {
            // $separatedSlash = explode('/', $path, -1);
            return explode('/', $path, -1);
        } else {
            // $separatedSlash = explode('/', $path);
            return explode('/', $path);
        }
    }
