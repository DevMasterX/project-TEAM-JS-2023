import {refs} from '../favorites.js';

import {markupCategory, markupCard, markupEmpty} from '../markup'

export function renderCategoeries(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const html = arr.map(item => markupCategory(item)).join("")

    refs.ulCategories.innerHTML += html
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