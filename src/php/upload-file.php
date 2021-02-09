<?php
$filename = $_FILES['uploadedFile']['name'];

$fileTempPath = $_FILES['uploadedFile']['tmp_name'];
$uploadFileDir = '/opt/lampp/htdocs/FileSystem/local-file-system/root/uploaded/';

$destinationPath = $uploadFileDir.$filename;

if (move_uploaded_file($fileTempPath, $destinationPath))
{
    header('location: ../../index.html');
}