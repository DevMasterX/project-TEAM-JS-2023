// import { BasicLightBox } from 'basiclightbox';
// import * as basicLightbox from 'basiclightbox';

const modalOrder = document.querySelector('[data-modal-order]');
const closeOrderBtn = document.querySelector('[data-modal-close]');
const formOrderBtn = document.querySelector('.btn-send');
const openOrderNow = document.querySelector('.btnOrderNow');
const openShoppingBtn = document.querySelector('.shopping-btn');

openShoppingBtn.addEventListener('click', () => {
  modalOrder.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
});
openOrderNow.addEventListener('click', () => {
  modalOrder.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
});

formOrderBtn.addEventListener('submit', event => {
  event.preventDefault();
});

const closeModal = () => {
  modalOrder.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');

  // Знімаєю слухачі
  document.removeEventListener('keydown', closeOnEscape);
  modalOrder.removeEventListener('click', closeOnOverlay);
  openOrderNow.removeEventListener('click');
  openShoppingBtn.removeEventListener('click');
};

const closeOnEscape = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

const closeOnOverlay = e => {
  if (e.target === modalOrder) {
    closeModal();
  }
};

// Додаю слухачі
closeOrderBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeOnEscape);
modalOrder.addEventListener('click', closeOnOverlay);

// * через бібліотеку  basicLightbox * //

// const htmlInstance = basicLightbox.create(
//   document.querySelector('[data-modal-order]'),
// );
// document.querySelector('.btnOrderNow').onclick = htmlInstance.show;
