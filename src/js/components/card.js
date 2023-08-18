import card from '../../images/card/card.png'
import like from '../../images/heart_icons/like.svg'
import no_like from '../../images/heart_icons/like.svg'
import star_fill from '../../images/rating_icons/star_fill.svg'
import star_no_fill from '../../images/rating_icons/star_no_fill.svg'
import emptyfavorites from '../../images/empty_favorites/empty_favorites.svg'

const heart = {
    like,
    no_like,
}

const stars = {
    star_fill,
    star_no_fill,
}

const categories = [
    {isActive: true, text: "All  categories"},
    {isActive: false, text: "Beef"},
    {isActive: false, text: "Dessert"},
    {isActive: false, text: "Breakfast"},
    {isActive: false, text: "Goat"},
]


let cards = [
    {
        id_card: 1,
        img: {
            path: card,
            alt: "tasty"
        },
        title: "Beef Wellington",
        sub_title: `Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with pâté and duxelles, wrapped in puff pastry, then baked.`,
        rating: 4.5,
        isFavorites: true,
    },
    {
        id_card: 2,
        img: {
            path: card,
            alt: "tasty"
        },
        title: "Beef Wellington",
        sub_title: `Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with pâté and duxelles, wrapped in puff pastry, then baked.`,
        rating: 4.4,
        isFavorites: true,
    },
    {
        id_card: 3,
        img: {
            path: card,
            alt: "tasty"
        },
        title: "Beef Wellington",
        sub_title: `Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with pâté and duxelles, wrapped in puff pastry, then baked.`,
        rating: 4.5,
        isFavorites: true,
    },
    {
        id_card: 4,
        img: {
            path: card,
            alt: "tasty"
        },
        title: "Beef Wellington",
        sub_title: `Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with pâté and duxelles, wrapped in puff pastry, then baked.`,
        rating: 4.5,
        isFavorites: true,
    },
    {
        id_card: 5,
        img: {
            path: card,
            alt: "tasty"
        },
        title: "Beef Wellington",
        sub_title: `Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with pâté and duxelles, wrapped in puff pastry, then baked.`,
        rating: 4.5,
        isFavorites: true,
    },

]
// cards = []

const refs = {
    favorites_container: findElement('.my-favorites__container'),
    categoryDiv: findElement(".my-favorites__category"),
    cardsDiv: findElement(".my-favorites__cards"),
    ulCategories: findElement(".my-favorites-category__list"),
    ulCards: findElement(".my-favorites-cards__list"),
}
console.log(refs)
emptyFavorites()


refs.ulCards.addEventListener("click", function (e) {
    const target = e.target

    if (target.nodeName === "IMG") {
        const targetElement = target.closest(".card__item")
        targetElement.remove()
    }
    
})


export function emptyFavorites() {
    if (!!cards.length) {
        renderCategoeries(categories)
        renderCards(cards)
    } else {

        renderEmpty()
        const {categoryDiv, cardsDiv} = refs
        categoryDiv.hidden = true;
        cardsDiv.hidden = true;
    }
}

export function renderCategoeries(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const html = arr.map(item => markupCategory(item)).join("")

    refs.ulCategories.innerHTML = html
}

export function renderCards(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const html = [...arr].map(card => markupCard(card)
    ).join("")

    refs.ulCards.innerHTML = html
}


export function markupHeart(data) {
    const {isFavorites: isHeart} = data
    const img = isHeart ? heart.like : heart.no_like

    const html = `
    <div class="favorites__container">
        <img src="${img}" alt="like" class="favorite-heart">
    </div>
    `
    return html
}

export function markupCategory(data) {
    const {text, isActive} = data
    const html = `
        <span class="my-favorites-category__item-list ${!!isActive ? "active" : ""} text-item-category">
            ${text}
        </span>
    `
    return html
}

export function markupCard(card) {

    const { id_card, img, title, sub_title, rating, isFavorites } = card;

    const heartHtml = markupHeart({isFavorites})
    const ratingHtml = markupRating({rating})

    const cardHtml = `
    <li class="card__item" id="${id_card}">

        <img src='${img.path}' loading="lazy" alt="${img.alt}" class="card__img" />
        
        ${heartHtml}

        <div class="card__info">
            <div class="card-info__container">

                <div class="card-info__description">
                    <h3 class="card-info__title">${title}</h3>
                    <p class="card-info__sub-title">
                        ${sub_title}
                    </p>
                </div>

                <div class="card-info__actions">
                    <div class="card-info-actions__container">

                        <div class="card-info-actions__rating">
                            <div class="card-info-actions-rating__container">
                                <!-- JS star rating -->
                                ${ratingHtml}
                            </div>
                        </div>

                        <div class="card-info-actions__see-description">
                            <button class="card-info-actions__see-description-btn see-description-btn">See resipe</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </li>
    `;

    return cardHtml
}

export function markupRating(data) {

    const { rating: ratingText} = data

    const {star_fill, star_no_fill,} = stars

    const html = `
    <p class="card-info-actions-rating__text">${ratingText}</p>
    <div class="card-info-actions-rating__stars">
        <!-- JS -->
        <span class="card-info-actions-rating__star-container">
            <img src="${star_fill}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>
        <span class="card-info-actions-rating__star-container">
            <img src="${star_fill}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>
        <span class="card-info-actions-rating__star-container">
            <img src="${star_fill}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>
        <span class="card-info-actions-rating__star-container">
            <img src="${star_fill}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>
        <span class="card-info-actions-rating__star-container">
            <img src="${star_no_fill}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>
        <!-- JS -->
    </div>
        `;
    return html
}


export function renderEmpty() {
    refs.favorites_container.innerHTML += markupEmpty()
}

export function markupEmpty() {
const img = emptyfavorites

    const html = `
    <div class="my-faforites__empty">
        <div class="my-favorites-empty__container">
            <div class="my-favorites__empty-svg-container">
                <img src="${img}" alt="no-testy" class="my-favorites__empty-svg empty__svg">
            </div>
            <div class="my-favorites-empty__text-container">
                <h2 class="my-favorites-empty__title">
                    It appears that you haven't added 
                    any recipes to your favorites yet. 
                    To get started, you can add recipes 
                    that you like to your favorites for 
                    easier access in the future.
                </h2>
            </div>
        </div>
    </div>`

    return html
}



export function findElement(selector) {
    return document.querySelector(selector)
}