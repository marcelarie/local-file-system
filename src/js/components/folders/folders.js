import {render} from '../../render/render.js'

const folder = {
    name: 'folder',
    renderFolder: function (folders) {
        folders.forEach(folder => {
            const template = `
                <div class="folders" id="folders">
                    <div class="folders__box"></div>
                    <h4>${this.name}</h4>
                </div>`
            render.renderComponent(template, 'recent-folders__selector')
        })
    }
}

export {folder}
