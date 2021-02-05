<?php
function convertFileSize($filePath) {
    $size = filesize($filePath);

    if ($size > 1000000) {
        return round($size / 1000000 ) . ' MB';
    } else if ($size > 1024) {
        return round($size / 1024 ) . ' kB';
    } else {
        return $size . ' by';
    }
}
