import CSS from '../css/styles.css';

const galleryBtn = document.querySelector('.filter-gallery-item-btn');
const seeModal = document.querySelector('.r-modal-backdrop');

galleryBtn.addEventListener('click', openModal);
seeModal.addEventListener('click', closeModal);

function openModal(event) {
    seeModal.classList.remove('visually-hidden');
    console.log('click');
}

function closeModal(event) {
    seeModal.classList.add('visually-hidden');
    console.log('click');
}