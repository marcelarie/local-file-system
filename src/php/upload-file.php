<?php
echo getcwd() . "\n";
$filename = $_FILES['uploadedFile']['name'];
echo $filename.'<br>';

$fileTempPath = $_FILES['uploadedFile']['tmp_name'];
echo $fileTempPath.'<br>';
$uploadFileDir = '/opt/lampp/htdocs/FileSystem/local-file-system/root/uploaded/';

$destinationPath = $uploadFileDir.$filename;

if (move_uploaded_file($fileTempPath, $destinationPath))
{
    echo 'archivo subido';
}