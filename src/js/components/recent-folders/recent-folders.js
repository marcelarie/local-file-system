
const recentFolders = {
    name: 'recentFolders',
    template: `
        <div class="recent-folders" id="recent-folders">
            <h3 class="recent-folders__title">Recent</h3>
            <div class="recent-folders__selector overflowXscroll" id="recent-folders__selector">
            </div>
        </div>
    `,
    recentFoldersListener: function () {
        const recentFolders = document.getElementById('recent-folders__selector');
        const allFiles = document.getElementById('all-files')
        // const sidebar = document.getElementById('sidebar');
        const foldersFolders = document.getElementById('folders-folders')

        recentFolders.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('folders__box')) {
                e.target.setAttribute('data-open', 'true');

                const allFolders = recentFolders.children;

                for (let folder of allFolders) {
                    const insideBox = folder.children[0]
                    if (insideBox.id !== e.target.id) {
                        // apply display none to other folders
                        folder.classList.add('none');
                        e.target.classList.remove('max15vh', 'overflow-hidden');
                        e.target.classList.add('scroll');

                        //hide all files
                        allFiles.classList.add('none');

                        // change size and scroll of recentFolders
                        recentFolders.classList.remove('overflowXscroll')
                        recentFolders.classList.add('height50vh')

                        //
                        // foldersFolders.classList.add('folders-folders-big')
                    }
                }
            }

        })
    }
}

export {recentFolders}
