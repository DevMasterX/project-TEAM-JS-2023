window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function () {
    preloader.classList.add('preloader-hidden');
  }, 990);
};

// Картинка-Заглушка *

const img = require('/src/images/Pancake.png');
const imgCake = img;
export function getData(wraper) {
  let placeholderImage = document.createElement('img');
  placeholderImage.src = imgCake;
  placeholderImage.alt = 'Зображення відсутнє';

  placeholderImage.style.maxWidth = '400px';
  placeholderImage.style.margin = '0 auto';

  wraper.appendChild(placeholderImage);
}
// if (!data || data.length === 0) {
//   const placeholder = createPlaceholder();
// }
// placeholder.style.display = 'none';

// if (!data) {
//   placeholder.style.display = 'block';
// }
// wraper.appendChild(placeholderImage);
