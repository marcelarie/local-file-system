import {render} from '../../render/render.js'

const folder = {
    name: 'folder',
    renderFolder: function (folders) {
        const template = `
                <div class="folders" id="${folders.name}">
                    <div class="folders__box"></div>
                    <h4>${folders.name}</h4>
                </div>`
        render.renderComponent(template, 'recent-folders__selector')
    }
}

export {folder}

