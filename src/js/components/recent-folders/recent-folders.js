
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

        recentFolders.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('folders__box-click')) {

                console.log(e.target)
                if (e.target.getAttribute('data-open') === 'true') {
                    e.target.addEventListener('click', e => {
                        console.log(e.target)
                    })
                } else if (e.target.getAttribute('data-open') === 'false') {
                    console.log('open')
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

                            const allCurrentFolderFiles = e.target.children

                            for (let file of allCurrentFolderFiles) {
                                // add bigger icons and show file name
                                file.classList.add('folders-folders-big')
                                file.classList.remove('child-click')
                                // file.children[0].classList.remove('child-click')
                                // file.children[1].classList.remove('child-click')
                                const fileName = file.children[1]
                                fileName.classList.remove('none')
                            }
                        }
                    }
                }
            }
        })
    }
}

export {recentFolders}
