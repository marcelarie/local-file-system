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

//php
import {api} from './api/api.js'

render.renderComponent(nav.template);
render.renderComponent(fileManager.template);
render.renderComponent(sidebar.template, 'file-manager');
render.renderComponent(main.template, 'file-manager');
render.renderComponent(folderName.template, 'main');
render.renderComponent(recentFolders.template, 'main');

api.scanDir('./src/php/scan-root.php', '../../root',
    folder.renderFolder
);

render.renderComponent(allFiles.template, 'main');

api.scanDir('./src/php/scan-root.php', '../../root',
    file.renderFile
);




// php 
