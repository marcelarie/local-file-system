import {allFiles} from '../all-files/all-files.js'

const nav = {
    name: 'nav',
    template: `
        <nav id="nav" class="nav">
            <div class="nav__items">
                <input type="text" placeholder="Search..." id="nav__items-search" spellcheck="false" />
                <span class="material-icons">search</span>
            </div>
            
        </nav>
    `,
    searchListener: function () {
        const searchBar = document.getElementById('nav__items-search')

        searchBar.addEventListener('input', e => {
            if (searchBar.value) {
                allFiles.showAllFiles('show');
                this.filterResults(searchBar.value)
            } else {
                allFiles.showAllFiles('hide');
                this.filterResults(searchBar.value)
            }
        })
    },
    filterResults: function (value, clear = false) {
        const allResults = document.getElementById('all-files__selector').children
        if (value) {
            for (let result of allResults) {
                result.classList.add('none')
                const fileName = result.children[1].textContent.toUpperCase();
                if (fileName.includes(value.toUpperCase())) {
                    result.classList.remove('none')
                }
            }
        } else {
            for (let result of allResults) {
                result.classList.remove('none')
            }

        }

    }
}

export {nav}
