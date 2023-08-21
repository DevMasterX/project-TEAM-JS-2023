export function markupCategory(text) {
    const html = `
        <span class="my-favorites-category__item-list text-item-category">
            ${text}
        </span>
    `
    return html
}