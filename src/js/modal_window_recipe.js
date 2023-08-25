import CSS from '../css/styles.css';
import { getRecipeDetails } from './api';
import { renderIcons } from './rating';

const body = document.querySelector("body");
const modalWindow = document.querySelector('.r-modal-content');
const seeModal = document.querySelector('.r-modal-backdrop');
const ratingBtn = document.querySelector('.r-modal-rating-btn');
const closeBtn = document.querySelector('.r-modal-close-btn');
const favoriteBtn = document.querySelector('.r-modal-favorite-btn');

let toId = '';

function eventOpenrModal() {
    const getIdElelment = document.querySelector('.filter-gallery-list')
    getIdElelment.addEventListener('click', openModal);
}

function eventOpenrModalTwo() {
    const getIdElelmentTwo = document.querySelector('.popular-js');
    getIdElelmentTwo.addEventListener('click', openModal);
}

function loadContent() {
    return getRecipeDetails(toId).then( data => modalWindow.insertAdjacentHTML('afterbegin', addContent(data))).catch(err => console.log(err));
}

// console.log(getRecipeDetails(toId).then( data => console.log(data)));

function addContent(arr) {
    const {title, instructions, ingredients, video, preview, rating, tags, time } = arr;

    let newTags ='';
    tags.forEach(element => {
        newTags+= `<span class="r-modal-tag">#${element}</span>`;
    });

    let newIngredients ='';
    ingredients.forEach(element => {
        newIngredients+= `<div class="r-modal-ingerdients-name">${element.name}<div class="r-modal-ingerdients-value">${element.measure}</div></div>`
    });

    return `
    <video class="r-modal-video"
    src="${video}"
    poster="${preview}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <h2 class="r-modal-name">${title.toUpperCase()}</h2>
    <div class="r-modal-info-container">
    <div class="r-modal-rating-container"><div class="r-modal-rating">${rating.toFixed(1)}</div>
    <div class="r-modal-star-wrap">
        <svg class="r-modal-rating-icon" width="18" height="18">
            <use href="../images/star.svg#icon-star"></use>
        </svg>
        <svg class="r-modal-rating-icon" width="18" height="18">
            <use href="../images/star.svg#icon-star"></use>
        </svg>
        <svg class="r-modal-rating-icon" width="18" height="18">
            <use href="../images/star.svg#icon-star"></use>
        </svg>
        <svg class="r-modal-rating-icon" width="18" height="18">
            <use href="../images/star.svg#icon-star"></use>
        </svg>
        <svg class="r-modal-rating-icon" width="18" height="18">
            <use href="../images/star.svg#icon-star"></use>
        </svg>
    </div>
    <div class="r-modal-time">${time} min</div></div></div>
    <div class="r-modal-ingerdients-container">${newIngredients}</div>
    <div class="r-modal-tags">${newTags}</div>
    <p class="r-modal-instructions">${instructions}</p>`;
};

function openModal (event) {
    if(!event.target.id) {
        return;
    }

    toId = event.target.id;
    loadContent();
    seeModal.classList.remove('visually-hidden');
    body.classList.add("no-scroll");
    document.addEventListener('keydown', closeOnEscape);
    seeModal.addEventListener('click', closeOnTarget);
    ratingBtn.addEventListener('click', closeOnTarget);
    closeBtn.addEventListener('click', closeOnTarget);
    favoriteBtn.addEventListener('click', closeOnTarget);


}

function closeModal(event) {
    seeModal.classList.add('visually-hidden');
    body.classList.remove("no-scroll");

    modalWindow.innerHTML = '';

    document.removeEventListener('keydown', closeOnEscape);
    seeModal.removeEventListener('click', closeModal);
    ratingBtn.removeEventListener('click', closeOnTarget);
    closeBtn.removeEventListener('click', closeOnTarget);
    favoriteBtn.removeEventListener('click', closeOnTarget);
}

function closeOnTarget(event) {
    if(event.target === event.currentTarget) {
        closeModal();
    }
}

function closeOnEscape(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

export {
    eventOpenrModal,
    eventOpenrModalTwo,
    toId
};

// {/* <div class="r-modal-rating-stars-icon">&#9734; &#9734; &#9734; &#9734; &#9734;</div> */}