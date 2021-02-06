import {api} from '../../api/api.js'
import {folder} from '../folders/folders.js'

const sidebar = {
    name: 'sidebar',
    template: ` 
    <div class="sidebar" id="sidebar">
        <div class="sidebar__selector" id="sidebar__selector">
        </div>
    </div> `,
    sidebarFoldersListener: function () {
        const sidebar = document.getElementById('sidebar__selector');

        sidebar.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('folders-sidebar')) {
                console.log(e.target)
                api.getData('./src/php/scan-root.php', 'n../../root', folder.renderFolderOnSidebar);
            }
        })
    }
}

export {sidebar}
