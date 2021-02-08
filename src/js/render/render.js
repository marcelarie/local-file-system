import {recentFolders} from '../components/recent-folders/recent-folders.js'

const render = {
    renderComponent: function (component, location = 'root') {
        const endPoint = document.getElementById(location);
        endPoint.insertAdjacentHTML('beforeend', component);
    },
    renderAppend: function (component, location = 'root') {
        const endPoint = document.getElementById(location);
        endPoint.append(component);
    },
    addListeners: function (mode) {
        // switch (mode) {
        // case 'r':
        // recentFolders.folderControlArrowsListener();
        // break;
        // }
    }
};

export {render}
