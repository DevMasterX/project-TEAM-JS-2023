import {refs} from '../favorites.js';

import {markupCategory, markupCard, markupEmpty} from '../markup'

export function renderCategoeries(arr, currentCategory) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const html = arr.map((item, index) => {
        if (index === 0) {
        return `
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${markupCategory(item, currentCategory)}
            ` 
        } else {
            return markupCategory(item, currentCategory)
        }
    }).join("")

    refs.ulCategories.innerHTML = html
}

export function renderCards(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const html = [...arr].map(card => markupCard(card)).join("")

    refs.ulCards.innerHTML = html
}

export function renderEmpty() {
    refs.favorites_container.innerHTML += markupEmpty()
}