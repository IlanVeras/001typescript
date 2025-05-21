"use strict";
const links = document.querySelectorAll('.link');
function changeColor(obj) {
    if (obj instanceof HTMLAnchorElement) {
        obj.style.color = 'green';
        obj.style.border = '1px solid green';
    }
    else if (obj instanceof HTMLButtonElement) {
        obj.style.color = 'red';
        obj.style.border = '1px solid red';
    }
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        changeColor(link);
    }
});
