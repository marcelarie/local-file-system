<?php


    // check the file is uploaded or not
    if (is_uploaded_file($_FILES['attachment']['tmp_name'])) {
    
        // Determine the file location
        $newname = dirname(__FILE__) . '/' .basename($_FILES['attachment']['name']);
    
        if ($_FILES['attachment']['size'] > 2097152) {
            $errors[]='File size must be excately 2 MB';
        }
        
        // Check Allowed File Types
        $file_ext=strtolower(end(explode('.', $_FILES['attachment']['name'])));
        $extensions= array("pdf","doc","docx");
        if (in_array($file_ext, $extensions)=== false) {
            $errors[]="File extension not allowed, please choose a PDF, DOC, DOCX file.";
        }
        
        if (empty($errors)==true) {
            // Move the file from temporary location to determined location
            if (!(move_uploaded_file($_FILES['attachment']['tmp_name'], $newname))) {
                print_r($errors);
                echo "<p>ERROR:  A problem occurred during file upload!</p>\n";
            } else {
                echo "<p>The file has been saved as: {$newname}</p>\n";
            }
        } else {
            print_r($errors);
        }
    }
