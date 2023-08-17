// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';

// startHeroSlider();

function startHeroSlider() {
  markupSlider(data);
  swiper.enable();
}
new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  mousewheel: {
    sensitivity: 1,
    // eventsTarget: '.hero-slider',
  },
  autoHeight: true,
  slidesPerView: 2.3,
  watchOverflow: true,
  spaceBetween: 16,
  slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  // virtual: {
  //     slides: (function () {
  //         let slide = []
  //         for (let i = 0; i < 500; i += 1) {
  //             slide.push(`div class="hero-slider>Slide#${i}</div>`);
  //         } return slide;
  //     })
  // },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    notificationClass: 'swiper-notification',
    containerMessage: '',
    containerRoleDescriptionMessage: '',
    itemRoleDescriptionMessage: '',
  },

  breakpoints: {
    320: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.6,
    },
    1280: { slidesPerView: 2.5 },
  },
});

const sliderEl = document.querySelector('.swiper-container');

function markupSlider(data) {
  const makeSliderMarkup = data => {
    const { cook, topic } = data;
    return `
<div class="hero-slider_wrapper swiper-wrapper">
    <div class="hero-slider_slide swiper-slide">
        <div class="hero-slider_image">
            <img src="${cook.imgUrl}" alt="${cook.name}" />
        </div>
    </div>
    <div class="hero-slider_slide swiper-slide">
        <div class="hero-slider_image">
            <img src="${topic.previewUrl}" alt="${topic.name}" />
        </div>
        <div class="hero-slider_wrapper-text">
            <h3 class="hero-slider name-master-class">${topic.name}</h3>
            <p class="hero-slider text-region">${topic.area}</p>
        </div>
    </div>
    <div class="hero-slider_slide swiper-slide">
        <div class="hero-slider_image">
            <img src="${topic.imgUrl}" alt="${topic.name}" />
        </div>
    </div>
    <div class="hero-slider swiper-pagination"></div>
</div>
`;
  };

  const newSliderMarkup = data.map(makeSliderMarkup).join('');

  sliderEl.insertAdjacentHTML('beforeend', newSliderMarkup);
}
