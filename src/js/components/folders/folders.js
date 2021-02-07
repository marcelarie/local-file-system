import {render} from '../../render/render.js'

const folder = {
    name: 'folder',
    renderFolder: function (folders) {
        const template = `
                <div class="folders" data-path="${folders.path}" id="${folders.name}">
                    <div id='${folders.path}-folders' class="folders__box"></div>
                    <h4>${folders.name}</h4>
                </div>`
        if (folders.dir) {
            render.renderComponent(template, 'recent-folders__selector')
        }
    },
    renderFolderOnSidebar: function (folders, target) {
        const template = `
            <div data-path="${folders.path}" data-open="false" class="folders-sidebar">
                <div class="folders-sidebar__box child-click">
                    <span class="material-icons-two-tone child-click">folder</span>
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
            <div data-path="${folders.path}" class="folders-folders">
                <span class="material-icons-two-tone child-click">folder</span>
            </div>`
        if (folders.dir) {
            render.renderComponent(template, target)
        }

    }
}

export {folder}

