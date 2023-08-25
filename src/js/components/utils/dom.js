export function findElement(selector) {
    return document.querySelector(selector)
}

export function elementstyle(element, namestyle, valueStyle) {
    element.style[namestyle] = valueStyle
}

export function addClass(element, className) {
    element.classList.add(className)
}
export function removeClass(element, className) {
    element.classList.remove(className)
}
export function insertHTMLIntoElement(element, html) {
    element.innerHTML = html
}