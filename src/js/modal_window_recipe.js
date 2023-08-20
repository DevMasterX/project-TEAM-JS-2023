// import { result } from 'lodash';
import CSS from '../css/styles.css';
import { getRecipeDetails } from './api';

const modalWindow = document.querySelector('.r-modal');
// const openMod = document.querySelector('.filter-gallery-item-btn');
const seeModal = document.querySelector('.r-modal-backdrop');

seeModal.addEventListener('click', closeModal);


let toId = '6462a8f74c3d0ddd28897fc1';

function loadContent() {
    return getRecipeDetails(toId).then( data => modalWindow.insertAdjacentHTML('afterbegin', addContent(data))).catch(err => console.log(err));
}

console.log(getRecipeDetails(toId).then( data => console.log(data)));

function addContent(arr) {
    const {title, instructions, ingredients, video, preview, rating, tags, time } = arr;

    let newTags ='';
    tags.forEach(element => {
        newTags+= `<span>${element}</span>`;
    });

    let newIngredients ='';
    ingredients.forEach(element => {
        newIngredients+= `<div>${element.name}<span>${element.measure}</span></div>`
    });

    return `
    <h1>${title}</h1>
    <video class="r-modal-video"
    src="${video}"
    poster="${preview}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div>${newTags}</div>
    <div>${rating}</div>
    <div>${time} min</div>
    <div>${newIngredients}</div>
    <p>${instructions}</p>`;
};

loadContent();

// function openModal(event) {
//     seeModal.classList.remove('visually-hidden');
//     console.log('click');
// }

function closeModal(event) {
    seeModal.classList.add('visually-hidden');
}

