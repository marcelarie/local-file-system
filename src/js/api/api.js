
const api = {
    scanDir: function (php, path, method) {
        axios.get(php + '?path=' + path).then(
            ({data}) => {
                method(data)
            }
        )
    }
}

export {api}
