// import { BasicLightBox } from 'basiclightbox';
// import * as basicLightbox from 'basiclightbox';

const modalOrder = document.querySelector('[data-modal-order]');
const closeOrderBtn = document.querySelector('[data-modal-close]');
const formOrderBtn = document.querySelector('.btn-send');
const openOrderNow = document.querySelector('.btnOrderNow');
const openShoppingBtn = document.querySelector('.shopping-btn');

formOrderBtn.addEventListener('submit', event => {
  event.preventDefault();
});

function openModal() {
  modalOrder.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}
// Знімаєю слухачі
openOrderNow.removeEventListener('click', openModal);
openShoppingBtn.removeEventListener('click', openModal);

function closeModal() {
  modalOrder.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
// Знімаєю слухачі
document.removeEventListener('keydown', closeOnEscape);
modalOrder.removeEventListener('click', closeOnOverlay);

function closeOnOverlay(e) {
  if (e.target === modalOrder) {
    closeModal();
  }
}

function closeOnEscape(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Додаю слухачі
openShoppingBtn.addEventListener('click', openModal);
openOrderNow.addEventListener('click', openModal);
closeOrderBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeOnEscape);
modalOrder.addEventListener('click', closeOnOverlay);

// Повертаю дані localhost
function fillTextarea() {
  const savedText = JSON.parse(localStorage.getItem(infoOrder));
  if (!savedText) return;

  if (savedText.name) {
    form.elements.name.value = savedText.name;
  }
  if (savedText.phone) {
    form.elements.phone.value = savedText.phone;
  }
  if (savedText.email) {
    form.elements.email.value = savedText.email;
  }
}
// dfggf
// * через бібліотеку  basicLightbox * //

// const htmlInstance = basicLightbox.create(
//   document.querySelector('[data-modal-order]'),
// );
// document.querySelector('.btnOrderNow').onclick = htmlInstance.show;
