import {nav} from './components/nav/nav.js'
import {fileManager} from './components/file-manager/file-manager.js'
import {main} from './components/main/main.js'
import {render} from './render/render.js'
import {sidebar} from './components/sidebar/sidebar.js'
import {folderName} from './components/folder-name/folder-name.js'
import {recentFolders} from './components/recent-folders/recent-folders.js'
import {folder} from './components/folders/folders.js'


render.renderComponent(nav.template);
render.renderComponent(fileManager.template);
render.renderComponent(sidebar.template, 'file-manager');
render.renderComponent(main.template, 'file-manager');
render.renderComponent(folderName.template, 'main');
render.renderComponent(recentFolders.template, 'main');


folder.renderFolder([1, 2, 3, 4]);

