export function markupCategory(text, currentCategory) {
    const html = `
        <span class="my-favorites-category__item-list text-item-category">
            ${text}
        </span>
    `
    return html
}