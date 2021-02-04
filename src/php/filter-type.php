<?php

require('console-log.php');

function filterType($path)
{
    foreach ($path as $file) {
        switch (filetype($file)) {

    }
        console_log($file);
    }
}
