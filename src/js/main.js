// components
import {nav} from './components/nav/nav.js'
import {fileManager} from './components/file-manager/file-manager.js'
import {main} from './components/main/main.js'
import {render} from './render/render.js'
import {sidebar} from './components/sidebar/sidebar.js'
import {folderName} from './components/folder-name/folder-name.js'
import {recentFolders} from './components/recent-folders/recent-folders.js'
import {folder} from './components/folders/folders.js'
import {allFiles} from './components/all-files/all-files.js'
import {file} from './components/files/files.js'

//api && helpers
import {api} from './api/api.js'
import {helpers} from './helpers/helper.js'

// first render
render.renderComponent(nav.template);
render.renderComponent(fileManager.template);
render.renderComponent(sidebar.template, 'file-manager');
render.renderComponent(main.template, 'file-manager');
render.renderComponent(folderName.template, 'main');
render.renderComponent(recentFolders.template, 'main');
render.renderComponent(allFiles.template, 'main');

// api
// recursiveSearch
api.getData('./src/php/scan-root.php', 'r../../root', folder.renderFolder, 'sidebar__selector', folder.renderInsideAfterRender);
api.getData('./src/php/scan-root.php', 'r../../root', file.renderFile);

// non-recursiveSearch
api.getData('./src/php/scan-root.php', 'n../../root', folder.renderFolderOnSidebar);
api.getData('./src/php/scan-root.php', 'n../../root', file.renderFileOnSidebar);

// api.getData('./src/php/scan-root.php', 'n../../root/music/win', folder.renderFolderOnFolder, '../../root/music/win/.-folders');
// api.getData('./src/php/scan-root.php', 'n../../root/music/win', file.renderFileOnFolder, '../../root/music/win/.-folders');

sidebar.sidebarFoldersListener();





