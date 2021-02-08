
const recentFolders = {
    name: 'recentFolders',
    template: `
        <div class="recent-folders" id="recent-folders">
            <h3 class="recent-folders__title">Recent</h3>
            <div class="recent-folders__selector overflowXscroll" id="recent-folders__selector">
            </div>
        </div>
    `,
    showCurrentFolder: function (currentFolder, allFiles, recentFolders, allFolders, mode = 0) {
        for (let folder of allFolders) {
            const insideBox = folder.children[0]
            if (insideBox.id !== currentFolder.id) {
                // apply display none to other folders
                folder.classList.add('none');
            }
        }
        //hide all files
        allFiles.classList.add('none');

        // show currentFolder
        currentFolder.classList.remove('max15vh', 'overflow-hidden', 'none');
        currentFolder.classList.add('scroll');
        currentFolder.parentElement.classList.remove('none')

        //show controls
        const controls = currentFolder.nextSibling.nextSibling;

        for (let control of controls.children) {
            if (control.classList.contains('none')) {
                control.classList.remove('none');
            }
        }


        const allCurrentFolderFiles = currentFolder.children

        for (let file of allCurrentFolderFiles) {
            // add bigger icons and show file name
            file.classList.add('folders-folders-big')
            file.classList.remove('child-click')
            const fileName = file.children[1]
            fileName.classList.remove('none')
        }
        // change size and scroll of recentFolders
        recentFolders.classList.remove('overflowXscroll')
        recentFolders.classList.add('height50vh')
    },
    recentFoldersListener: function () {
        const recentFolders = document.getElementById('recent-folders__selector');
        const allFolders = recentFolders.children;
        const allFiles = document.getElementById('all-files')
        // const sidebar = document.getElementById('sidebar');

        recentFolders.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('folders__box-click')) {

                if (e.target.getAttribute('data-inside') === 'true') {
                    if (e.target.classList.contains('folders-folders')) {
                        const path = e.target.getAttribute('data-path')
                        const type = e.target.getAttribute('data-type')

                        // check if its a folder
                        if (type) {
                            // console.log(recentFolders)
                            // console.log(e.target)
                            // make current folder hide and show the one from the path
                            const currentFolder = document.getElementById(path + '-folders');
                            this.showCurrentFolder(currentFolder, allFiles, recentFolders, allFolders)
                        }
                    }
                } else if (e.target.getAttribute('data-open') === 'false') {
                    e.target.setAttribute('data-open', 'true');


                    this.showCurrentFolder(e.target, allFiles, recentFolders, allFolders);
                }
            }
        })
    }
}

export {recentFolders}
