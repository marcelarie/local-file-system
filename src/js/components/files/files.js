import {render} from '../../render/render.js'
import {helpers} from '../../helpers/helper.js'
import {api} from '../../api/api.js'

const file = {
    name: 'file',
    renderFile: function (files) {
        const template = `
                    <div data-path="${files.path}" class="files">
                        <span class="material-icons files__row-icon child-click">${helpers.chooseIcon(files.type)}</span>
                        <p class="files__row files__row-name child-click" id='${files.name}'>${files.name}</p>
                        <p class="files__row files__row-date child-click" id='${files.name}'>${files.date}</p>
                        <p class="files__row files__row-date child-click" id='${files.name}'>${files.lastDate}</p>
                        <p class="files__row files__row-size child-click" id='${files.name}'>${files.size}</p>
                        <p class="files__row files__row-type child-click" id='${files.name}'>${files.type}</p>
                        <span class="material-icons hidden child-click" data-path="${files.path}">delete</span>
                        
                    </div>`
        if (!files.dir) {
            render.renderComponent(template, 'all-files__selector')
        }
    },
    renderFileOnSidebar: function (files, target) {
        const template = `
            <div data-path="${files.path}" class="files-sidebar">
                <span class="material-icons child-click">${helpers.chooseIcon(files.type)}</span>
                <p id="${files.path}" class="files-sidebar__name child-click">${files.name}</p>
                <!-- <div id="${files.path}"></div> -->
            </div>`
        if (!files.dir) {
            render.renderComponent(template, target)
        }
    },
    renderFileOnFolder: function (files, target) {
        const template = `
            <div data-inside="true" data-path="${files.path}" class="folders-folders folders__box-click child-click">
                <span class="material-icons folders-folders__icon child-click">${helpers.chooseIcon(files.type)}</span>
                <p class="folders-folders__name child-click none">${files.name}</p>
            </div>`
        if (!files.dir) {
            render.renderComponent(template, target)
        }
    },
    trashListener: function () {
        const fileDiv = document.getElementById('all-files__selector');

        fileDiv.addEventListener('mouseover', e => {
            if (e.target && e.target.classList.contains('files')) {
                const trash = e.target.children[6];
                trash.classList.remove('hidden');
            }
        });

        fileDiv.addEventListener('mouseout', e => {
            if (e.target && e.target.classList.contains('files')) {
                const trash = e.target.children[6];
                trash.classList.add('hidden');
            };
        });
    },

    deleteFileListener: function () {
        const allFiles = document.getElementById('all-files__selector');

        allFiles.addEventListener("click", e => {
            const path = e.target.getAttribute('data-path');
            console.log(path);
            api.deleteFile('./src/php/delete.php', path);
            document.getElementById('all-files__selector').innerHTML = ''
            api.getData('./src/php/scan-root.php', 'r../../root', file.renderFile);
        })
    }

}

export {file}
