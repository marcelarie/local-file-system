import {api} from '../../api/api.js'
import {folder} from '../folders/folders.js'
import {file} from '../files/files.js'

const sidebar = {
    name: 'sidebar',
    template: ` 
    <div class="sidebar" id="sidebar">
        <h2 class="sidebar__title">My Drive</h2>
        <div class="sidebar__selector" id="sidebar__selector">
        </div>
    </div> `,
    sidebarFoldersListener: function () {
        const sidebar = document.getElementById('sidebar__selector');

        sidebar.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('folders-sidebar')) {
                const path = e.target.getAttribute('data-path').slice(0, -2);
                const id = e.target.children[1].id
                const open = e.target.getAttribute('data-open')
                if (open === 'false') {
                    e.target.setAttribute('data-open', 'true');
                    e.target.children[0].children[0].textContent = 'folder_open'
                    api.getData('./src/php/scan-root.php', 'n' + path, file.renderFileOnSidebar, id);
                    api.getData('./src/php/scan-root.php', 'n' + path, folder.renderFolderOnSidebar, id);
                } else {
                    e.target.setAttribute('data-open', 'false');
                    e.target.children[0].children[0].textContent = 'folder'
                    document.getElementById(id).innerHTML = ''
                }
            }
        })
    }
}

export {sidebar}
