import * as basicLightbox from 'basiclightbox';

const openModal = () => {
  const content = `
     <img src="path/to/your/image.jpg" alt="Image">
     <p>Some text or additional content here.</p>
   `;

  const instance = basicLightbox.create(content);
  instance.show();
};

const button = document.querySelector('.js-open-menu');
console.log(button);
button.addEventListener('click', openModal);
