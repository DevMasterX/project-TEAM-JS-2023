import CSS from '../css/styles.css';
import { getRecipeDetails } from './api';

const body = document.querySelector("body");
const modalWindow = document.querySelector('.r-modal');
const seeModal = document.querySelector('.r-modal-backdrop');
const openrModalClick = document.querySelector('.filter-gallery-item-btn');

let toId = '6462a8f74c3d0ddd28897fc1';

function loadContent() {
    document.addEventListener('keydown', closeOnEscape);
    seeModal.addEventListener('click', closeModal);

    // body.classList.add("no-scroll");

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
    <h1 class="r-modal-name">${title.toUpperCase()}</h1>
    <video class="r-modal-video"
    src="${video}"
    poster="${preview}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div class="r-modal-info-container"><div class="r-modal-tags">${newTags}</div>
    <div class="r-modal-rating-container"><div class="r-modal-rating">${rating}</div>
    <div class="r-modal-rating-stars-icon">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    <div class="r-modal-time">${time} min</div></div></div>
    <div class="r-modal-ingerdients-container">${newIngredients}</div>
    <p class="r-modal-instructions">${instructions}</p>`;
};

function closeModal(event) {
    seeModal.classList.add('visually-hidden');
    // body.classList.remove("no-scroll");

    document.removeEventListener('keydown', closeOnEscape);
    seeModal.removeEventListener('click', closeModal);
}

function closeOnEscape(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

loadContent();