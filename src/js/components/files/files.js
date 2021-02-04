import {render} from '../../render/render.js'

const file = {
    name: 'file',
    renderFile: function (files) {
        files.forEach(file => {
            const template = `
                
                    <div class="files">
                        <p>file.pdf</p>
                        <p>21/01/21</p>
                        <p>1.4MB</p>
                        <p>pdf</p>
                    </div>
                    
                `
            render.renderComponent(template, 'all-files__selector')
        })
    }
}

export{file}