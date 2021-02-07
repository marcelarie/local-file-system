
const api = {
    getData: function (php, path, method, target = 'sidebar__selector', asyncMethod = 0) {
        axios.get(php + '?path=' + path).then(
            ({data}) => {
                data.forEach(file => {
                    method(file, target);
                })
                return data;
            }
        ).then(data => {
            if (asyncMethod) {
                data.forEach(file => {
                    const id = file.path + '-folders';
                    asyncMethod(id)
                })
            }
        })
    }
}

export {api}
