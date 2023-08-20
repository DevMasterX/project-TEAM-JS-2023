import { getEvents } from '/src/js/api';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const sliderContainer = document.querySelector('.events');

getEvents().then(data => {
  sliderContainer.insertAdjacentHTML('beforeend', markupCard(data));
  new Swiper('.swiper', {
    // allowSlideNext: true,
    // pagination: {
    //   el: '.page',
    //   clickable: true,
    // },
    // autoplay: {
    //   delay: 1500,
    // },
    // speed: 800,
    // loop: true,
  });
});

function markupCard(data) {
  const makeCardMarkup = data => {
    const { cook, topic } = data;
    return `<div class="swiper-slide">
  <div class="event">
    <div class="cook" style="background-image: url(${cook.imgUrl})">
    </div>
    <div class="preview-deash-card" >
      <div class="preview-deash" style="background-image: url(${topic.previewWebpUrl})"></div>
      <p class="deash-name">
        ${topic.name}
      </p>
      <p class="deash-area">
        ${topic.area}
      </p>
    </div>
    <div class="deash" style="background-image: url(${topic.previewUrl})">
    </div>
  </div>
</div>`;
  };

  const newCardMarkup = data.map(makeCardMarkup).join('');

  sliderContainer.insertAdjacentHTML('beforeend', newCardMarkup);
}
