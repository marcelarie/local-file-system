import {render} from '../../render/render.js'

const folder = {
    name: 'folder',
    renderFolder: function (folders) {
        const template = `
                <div class="folders" data-path="${folders.path}" id="${folders.name}">
                    <div class="folders__box"></div>
                    <h4>${folders.name}</h4>
                </div>`
        if (folders.dir) {
            render.renderComponent(template, 'recent-folders__selector')
        }
    },
    renderFolderOnSidebar: function (folders, target) {
        console.log(folders)
        console.log(target)
        const template = `
            <div data-path="${folders.path}" class="folders-sidebar">
                <span class="material-icons-two-tone child-click">folder</span>
                <p class="folders-sidebar__name child-click">${folders.name}</p>
                <div class="folders-sidebar__files" id="${folders.path}"></div>
            </div>`
        if (folders.dir) {
            render.renderComponent(template, target)
        }
    }
}

export {folder}

