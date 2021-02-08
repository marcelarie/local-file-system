import {render} from '../../render/render.js'
import {file} from '../files/files.js'
import {api} from '../../api/api.js'
import {helpers} from '../../helpers/helper.js'

const folder = {
    name: 'folder',
    renderFolder: function (folders) {
        const template = `
                <div class="folders" data-path="${folders.path}" id="${folders.path}">
                    <div data-open="false" id='${folders.path}-folders' class="folders__box overflow-hidden max15vh"></div>
                    <h4>${folders.name}</h4>
                </div>`
        if (folders.dir) {
            render.renderComponent(template, 'recent-folders__selector')
            // folder.repeatMethod(folders.path, api.getData)
        }

    },
    renderFolderOnSidebar: function (folders, target) {
        const template = `
            <div data-path="${folders.path}" data-open="false" class="folders-sidebar">
                <div class="folders-sidebar__box child-click">
                    <span class="material-icons child-click">folder</span>
                    <p class="folders-sidebar__name child-click">${folders.name}</p>
                </div>
                <div class="folders-sidebar__files" id="${folders.path}"></div>
            </div>`
        if (folders.dir) {
            render.renderComponent(template, target)
        }
    },
    renderFolderOnFolder: function (folders, target) {
        const template = `
            <div data-path="${folders.path}" class="folders-folders child-click">
                <span class="material-icons child-click">folder</span>
            </div>`
        if (folders.dir) {
            render.renderComponent(template, target)
        }

    },
    renderInsideAfterRender: function (idFolder) {
        const folder = document.getElementById(idFolder);

        if (folder) {
            const path = idFolder.slice(0, -10)

            api.getData('src/php/scan-root.php', 'n' + path, file.renderFileOnFolder, idFolder)
            api.getData('src/php/scan-root.php', 'n' + path, helpers.passTheData, idFolder)
        }
    }
}

export {folder}

