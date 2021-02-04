import {render} from '../../render/render.js'

const file = {
    name: 'file',
    renderFile: function (files) {
        const template = `
                    <div class="files">
                        <p class="files__row files__row-name" id='${files.name}'>${files.name}</p>
                        <p class="files__row files__row-date" id='${files.name}'>${files.date}</p>
                        <p class="files__row files__row-date" id='${files.name}'>${files.lastDate}</p>
                        <p class="files__row files__row-size" id='${files.name}'>${files.size}</p>
                        <p class="files__row files__row-type" id='${files.name}'>${files.type}</p>
                    </div>`
        if (!files.dir) {
            render.renderComponent(template, 'all-files__selector')
        }
    }
}

export {file}
