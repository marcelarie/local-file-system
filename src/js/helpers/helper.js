import {folder} from '../components/folders/folders.js'

const helpers = {
    name: 'helpers',
    chooseIcon: function (extension) {
        switch (extension) {
            case 'txt':
            case 'doc':
            case 'odt':
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
    },
    passTheData: function (folders, data) {
        folder.renderFolderOnFolder(folders, data);
    }
}

export {helpers}

