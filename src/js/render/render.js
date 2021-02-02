
const render = {
    renderComponent: function (component, location = 'root') {
        const endPoint = document.getElementById(location);
        endPoint.insertAdjacentHTML('beforeend', component);
    },
    renderAppend: function (component, location) {
        const endPoint = document.getElementById(location);
        endPoint.append(component);
    }
};

export {render}
