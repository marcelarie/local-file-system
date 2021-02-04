import {render} from '../../render/render.js'

const file = {
    name: 'file',
    renderFile: function (files) {
        const template = `
                    <div class="files">
                        <p>${files.name}</p>
                        <p>${files.date}</p>
                        <p>${files.size}</p>
                        <p>${files.type}</p>
                    </div>`
        if (!files.dir) {
            render.renderComponent(template, 'all-files__selector')
        }
    }
}

export {file}
