import {nav} from './components/nav/nav.js'
import {fileManager} from './components/file-manager/file-manager.js'
import {main} from './components/main/main.js'
import {render} from './render/render.js'
import {folderName} from './components/folder-name/folder-name.js'
import {sidebar} from './components/sidebar/sidebar.js'


render.renderComponent(nav.template);
render.renderComponent(fileManager.template);
render.renderComponent(sidebar.template, 'file-manager');
render.renderComponent(main.template, 'file-manager');
render.renderComponent(folderName.template, 'main');


