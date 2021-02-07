const helpers = {
    name: 'helpers',
    chooseIcon: function (extension) {
        switch (extension) {
            case 'txt':
                return 'description';
                break;
            case 'mp3':
                return 'library_music';
                break;
            case 'img':
                return 'photo_library';
                break;
            case 'mp4':
                return 'camera_roll';
                break;
            case 'doc':
                return 'description';
                break;
            case 'csv':
                return 'assignment';
                break;
            case 'jpg':
                return 'perm_media';
                break;
            case 'png':
                return 'perm_media';
                break;
            case 'ppt':
                return 'present_to_all';
                break;
            case 'odt':
                return 'description';
                break;
            case 'pdf':
                return 'picture_as_pdf';
                break;
            case 'zip':
                return 'lock';
                break;
            case 'rar':
                return 'lock';
                break;
            case 'svg':
                return 'polymer';
                break;
            case 'exe':
                return 'widgets';
                break;
            default:
                return 'insert_drive_file';
                break;
        }

    }
    

}

export {helpers}

