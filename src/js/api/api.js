
const api = {
    scanDir: function (php, path, method) {
        axios.get(php + '?path=' + path).then(
            ({data}) => {
                data.forEach(file => {
                    method(file);
                })
            }
        )
    }
}

export {api}
