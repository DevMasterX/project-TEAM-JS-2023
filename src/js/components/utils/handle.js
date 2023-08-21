
import { LOCALSTORAGE_KEY_FAVORITES, handleSetLocalStorage } from "../localstorage"; 
import { addClass, elementstyle, removeClass } from "./dom"; 
import { renderEmpty } from "../render";
import { initialState, refs } from "../favorites";

export function handleIsEmpty({ isEmpty }) {
    if (isEmpty ) {

        if (!!matchMedia("(max-width: 767px)").matches) {
            elementstyle(refs.hero_favorite, "display", "none")
        }

        elementstyle(refs.categoryDiv, "display", "none")
        elementstyle(refs.cardsDiv, "display", "none")
        elementstyle(refs.paginationDiv, "display", "none")
        renderEmpty()
    }
}

export function handleRemoveCard({id, element}) {
    
    initialState.favorites = initialState.favorites.filter(item => item.id !== id);
    handleSetLocalStorage(LOCALSTORAGE_KEY_FAVORITES, initialState.favorites)

    element.remove();   
}

export function handleIsActiveCategory(element) {
    const children = [...element.parentNode.children];

    children.map(item => removeClass(item, "active"));
    addClass(element, "active")

}