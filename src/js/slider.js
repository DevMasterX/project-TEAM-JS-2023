import { getEvents } from '/src/js/api';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

const sliderContainer = document.querySelector('.events');

getEvents()
  .then(data => {
    if (data.length > 0) {
      markupCard(data);
      const swiper = new Swiper('.swiper', {
        modules: [Pagination, Navigation, Autoplay, Parallax],
        allowSlideNext: true,
        pagination: {
          el: '.slider-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
        },
        parallax: true,
        speed: 1000,

        loop: true,
      });
    } else {
      markupEmptySlider();
    }
  })
  .catch(error => {
    console.log(error);
    markupEmptySlider();
  });

function markupCard(data) {
  const makeCardMarkup = data => {
    const { cook, topic } = data;
    return `<div class="swiper-slide">
  <div class="slider-card">
    <div class="chief-cook" style="background-image: url(${cook.imgUrl})">
    </div>
    <div class="mini-picture-card">
      <div class="mini-picture" style="background-image: url(${topic.previewWebpUrl})"></div>
      <p class="dish-name">
        ${topic.name}
      </p>
      <p class="country">
        ${topic.area}
      </p>
    </div>
    <div class="big-picture" style="background-image: url(${topic.previewUrl})">
    </div>
  </div>
</div>`;
  };

  const newCardMarkup = data.map(makeCardMarkup).join('');

  sliderContainer.insertAdjacentHTML('beforeend', newCardMarkup);
}

function markupEmptySlider() {
  sliderContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="swiper-slide">
            <div class="slider-images">
                <div class="image-1"></div>
                <div class="image-2">
                    <h2 class="image-title">Master Сlasses</h2>
                    <p class="image-descraption">Cooming Soon</p>
                </div>
                <div class="image-3"></div>
            </div>
        </div>`
  );
}
