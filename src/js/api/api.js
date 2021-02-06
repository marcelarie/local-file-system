
const api = {
    getData: function (php, path, method, target = 'sidebar__selector') {
        axios.get(php + '?path=' + path).then(
            ({data}) => {
                console.log(data)
                data.forEach(file => {
                    method(file, target);
                })
            }
        )
    }
}

export {api}
