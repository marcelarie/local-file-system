

function scanDir(php, params) {
    axios.get(php).then(
        ({data}) => {
            params(data)
        }
    )
}

export {scanDir}
