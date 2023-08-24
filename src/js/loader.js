window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function () {
    preloader.classList.add('preloader-hidden');
  }, 990);
};

// Картинка-Заглушка *
let placeholderImage = document.createElement('img');

export function getData() {
  placeholderImage.src = '/src/images/Pancake.png';
  placeholderImage.alt = 'Зображення відсутнє';

  document.body.appendChild(placeholderImage);
}
