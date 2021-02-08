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
            } else {
                allFiles.showAllFiles('hide');
            }
        })
    }
}

export {nav}
