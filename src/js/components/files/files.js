import {render} from '../../render/render.js'
import {icons, helpers} from '../../helpers/helper.js'
const file = {
    name: 'file',
    renderFile: function (files) {
        const template = `
                    <div class="files">
                        <span class="material-icons-two-tone files__row-icon">${helpers.chooseIcon(files.type)}</span>
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
