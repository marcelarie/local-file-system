const allFiles = {
    name: 'allFiles',
    template: `
    <div id="all-files" class="all-files">
        <h3 class="all-files__title">All Files</h3>
        <div class="info-bar">
            <p class="info-detail">Name</p>
            <p class="info-detail">Creation Date</p>
            <p class="info-detail">Last Modified</p>
            <p class="info-detail">Size</p>
            <p class="info-detail">Type</p>
        </div>
        <div class="all-files__selector" id="all-files__selector"></div>
    </div>
    `
}

export {allFiles};
