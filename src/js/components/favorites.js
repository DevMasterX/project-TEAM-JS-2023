import { elementstyle, findElement, getCategories, handleIsActiveCategory, handleIsEmpty, handleRemoveCard} from './utils'
import { LOCALSTORAGE_KEY_FAVORITES, handleGetLocalStorage, handleSetLocalStorage } from './localstorage'
import { renderCards, renderCategoeries} from './render'


// v2


export const refs = {
    favorites_container: findElement('.my-favorites__container'),
    hero_favorite: findElement('.my-favorites__hero'),
    categoryDiv: findElement(".my-favorites__category"),
    cardsDiv: findElement(".my-favorites__cards"),
    ulCategories: findElement(".my-favorites-category__list"),
    ulCards: findElement(".my-favorites-cards__list"),
    paginationDiv: findElement('.pagination-wrap')
}


export const initialState = {
    favorites: [],
    currentCategories: "all categories",
    all() {
        return this.favorites
    },
    filter(fn) {
        return this.favorites.filter(fn)
    }

} 

const localstorageFavorites = handleGetLocalStorage(LOCALSTORAGE_KEY_FAVORITES)

if (!localstorageFavorites) {
    handleSetLocalStorage(LOCALSTORAGE_KEY_FAVORITES, initialState.favorites)
} else {
    initialState.favorites = localstorageFavorites
}



window.addEventListener("resize", () => {
    const w  = window.matchMedia("(max-width: 768px)")
    if (w?.matches) {
        if (!initialState.favorites?.length) {
        }
    }
})


if (!initialState.favorites?.length) {
    handleIsEmpty({isEmpty: true})
} else {
    initialState.categories =  getCategories(initialState.favorites)
    renderCategoeries(initialState.categories, initialState.currentCategories)
    renderCards(initialState.favorites)
    handleIsHiddenPaginationFavorite(initialState.favorites)

    refs.ulCards.addEventListener("click", function (e) {
        const target = e.target
        const isClass = target.classList.contains("favorite-heart")
        if (target.nodeName === "IMG" && isClass) {
            const targetElement = target.closest(".card__item")

            // initialState.categories =  getCategories(initialState.favorites);
            // renderCategoeries(initialState.categories);

            handleRemoveCard({id: targetElement.id, element: targetElement})
            !handleGetLocalStorage(LOCALSTORAGE_KEY_FAVORITES)?.length && handleIsEmpty({isEmpty: true})

            initialState.categories =  getCategories(initialState.favorites)
            renderCategoeries(initialState.categories);

            if (!initialState.categories.includes(initialState.currentCategories)) {
                console.log(initialState)
                renderCategoeries(initialState.categories);
                renderCards(initialState.all());
                handleIsHiddenPaginationFavorite(initialState.favorites)
               
            } else {
          
                const element = [...refs.ulCategories.children]
                    .find(item => item.textContent.trim().toLowerCase() == initialState.currentCategories.trim().toLowerCase())
                // const span = 
                handleIsActiveCategory(element)
               
            }
        }
    })


    refs.ulCategories.addEventListener("click", (e) => {
        const target = e.target
        const text = target.textContent.trim().toLowerCase();
        const isClass = target.classList.contains("text-item-category")
        if (target.nodeName === "SPAN" && isClass) {
            if (text === "all categories") {
                const all = initialState.all();
                handleIsActiveCategory(target)
                renderCards(all);
                handleIsHiddenPaginationFavorite(initialState.favorites)

            } else {
                initialState.currentCategories = text
                const fillter = initialState.filter((item) => {
                    return item.category.toLowerCase() == text.toLowerCase()
                })
                handleIsActiveCategory(target)
                renderCards(fillter);
                handleIsHiddenPaginationFavorite(fillter)
            }
            
        }
    })

}

function handleIsHiddenPaginationFavorite(arr = []) {
    if (arr.length < 12) {
        elementstyle(refs.paginationDiv, "display", "none")
    } else {
        elementstyle(refs.paginationDiv, "display", "block")
    }
}
