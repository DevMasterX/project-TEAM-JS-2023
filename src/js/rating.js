// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
//   initRatings();
// }
// //основная функция
// function initRatings() {
//   let ratingActive, ratingValue;
// }
// //бегаем по всем рейтингам
// for (let index = 0; index < ratings.length; index++) {
//   const rating = ratings[index];
//   initRating(rating);
// }
// //инициализируем конкретный рейтинг
// function initRating(rating) {
//   initRatingVars(rating);

//   setRatingActiveWidth();

//   if (rating.classList.conteins('rating_set')) {
//     setRating(rating);
//   }
// }
// //инициализация переменных
// function initRatingVars(rating) {
//   ratingActive = rating.querySelector('.rating_active');
//   ratingValue = rating.querySelector('.rating_value');
// }
// //изминяем ширину активных звезд
// function setRatingActiveWidth(index = ratingValue.innerHTML) {
//   const ratingActiveWidth = index / 0.05;
//   ratingActive.style.width = `${ratingActiveWidth}%`;
// }
// //возможность указать оценку
// function setRating(rating) {
//   const ratingItems = rating.querySelectorAll('.rating_item');
//   for (let index = 0; index < ratingItems.length; index++) {
//     const ratingItem = ratingItems[index];
//     ratingItem.addEventListener('mouseeenter', function (e) {
//       //обновление переменных
//       initRatingVars(rating);
//       //обновление активных звезд
//       setRatingActiveWidth(ratingItem.value);
//     });
//     ratingItem.addEventListener('mouseleve', function (e) {
//       //обновление активных звезд
//       setRatingActiveWidth();
//     });
//     ratingItem.addEventListener('clck', function (e) {
//       //обновление переменных
//       initRatingVars(rating);
//       if (rating.dataset.ajax) {
//         //отправить на сервер
//         setRatingVelue(ratingItem.value, rating);
//       } else {
//         //отобразить указаную оценку
//         ratingValue.innerHTML = index + 1;
//         setRatingActiveWidth();
//       }
//     });
//     async function setRatingVelue(value, rating) {
//       if (!rating.classList.conteins('rating_sending')) {
//         rating / classList.add('rating_sending');
//         //отправка данных (value) на сервер
//         let respons = await fatch('rating.json', {
//           method: 'GET',

//           // body: JSON.stringify({
//           //     userRating: value
//           // }),
//           // headers: {
//           //     'content-type': 'appLication/json'
//           // }
//         });
//         if (Response.ok) {
//           const result = await response.json();
//           //получаем новый рейтинг
//           const newRating = result.newRating;
//           //вывод нового среднего результата
//           ratingValue.innerHTML = newRating;
//           //щбрщвление активных звезд
//           setRatingActiveWidth();

//           rating.classList.remove('rating_sending');
//         } else {
//           alert(Error);

//           rating.classList.remove('rating_sending');
//         }
//       }
//     }
//   }
// }

// // get push set
// // на бекенді отримати та змінити рейтинг
// // взяти клас кнопки  при кліку відкривати мою модалку(сlass="rating-btn")
// // по кліку відправляются данні в бекенді//

// import axios from 'axios';
// import Notiflix from 'notiflix';
// import { recipeID } from './pagination';

// const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/';

// const refs = {
//   ratingModal: document.querySelector(`.backdrop__rating`),
//   openRatingModal: document.querySelector(`.pop-up-btn-rating`),
//   closeRatingModal: document.querySelector(`.close__rating__btn`),
//   ratingForm: document.querySelector(`.rating__form`),
//   ratingRadio: document.querySelectorAll(`.rating__radio`),
//   body: document.querySelector(`body`),
// };

// refs.closeRatingModal.addEventListener(`click`, closeRatingModal);
// refs.ratingForm.addEventListener(`submit`, submitRating);
// refs.openRatingModal.addEventListener(`click`, openRatingModal);
// refs.ratingModal.addEventListener('click', onBackdropClick);

// function onBackdropClick(event) {
//   if (event.target === event.currentTarget) {
//     closeRatingModal();
//   }
// }

// function closeRatingModal() {
//   refs.ratingModal.classList.add(`is-hidden`);
//   refs.body.classList.remove('scroll-blocked');
// }

// function openRatingModal() {
//   const value = document.querySelector(`.set__rating > .rating__value`);
//   refs.ratingRadio.forEach(radio => {
//     radio.checked = false;
//   });
//   refs.ratingForm.reset();
//   value.innerHTML = `0.0`;
//   initRatings();
//   refs.ratingModal.classList.remove(`is-hidden`);
//   refs.body.classList.add('scroll-blocked');
// }

// export function initRatings() {
//   // Знаходимо всі рейтинги
//   const ratings = document.querySelectorAll(`.rating`);
//   let ratingValue, ratingStars;

//   ratings.forEach(rating => {
//     initRating(rating);
//   });
//   // Ініціалізуємо кожен рейтинг, якщо рейтинг на картці, то рендеримо зірки
//   function initRating(rating) {
//     if (
//       (rating.classList.contains(`card__rating`) ||
//         rating.classList.contains(`popup__rating`)) &&
//       rating.lastElementChild.classList.contains(`rating__value`)
//     ) {
//       renderIcons(rating);
//     }
//     // Ініціалізуємо змінні для роботи і зафарбовуємо зіки залежно від значення рейтингу
//     initRatingValues(rating);
//     setActiveStars();
//     // Ініціалізуємо вибір рейтингу, якщо він в модальному вікні
//     if (rating.classList.contains(`set__rating`)) {
//       rating.addEventListener(`change`, setNewValue);
//     }
//   }

//   function initRatingValues(rating) {
//     ratingValue = rating.querySelector(`.rating__value`);
//     ratingStars = rating.querySelectorAll(`.rating__icon`);
//   }

//   function setActiveStars(count = Math.floor(ratingValue.innerHTML)) {
//     ratingStars.forEach(star => {
//       star.classList.remove(`active__star`);
//     });
//     for (let i = 0; i < count; i++) {
//       const star = ratingStars[i];
//       star.classList.add(`active__star`);
//     }
//   }

//   function setNewValue(e) {
//     ratingValue.innerHTML = `${e.target.value}.0`;
//     setActiveStars();
//   }

//   // Єдиний робочий варіант рендеру SVG з JS який мені вдалось знайти
//   function renderIcons(rating) {
//     const starWrap = document.createElement(`div`);

//     for (let i = 0; i < 5; i++) {
//       const starSvg = document.createElementNS(
//         'http://www.w3.org/2000/svg',
//         'svg'
//       );
//       const starPath = document.createElementNS(
//         'http://www.w3.org/2000/svg',
//         'path'
//       );

//       starWrap.classList.add(`card__star__wrap`);

//       starSvg.setAttribute('viewBox', '0 0 32 32');
//       starSvg.setAttribute('width', '18');
//       starSvg.setAttribute('height', '18');

//       starSvg.classList.add('rating__icon');

//       starPath.setAttribute(
//         'd',
//         'M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z'
//       );

//       starSvg.appendChild(starPath);
//       starWrap.append(starSvg);
//     }
//     rating.append(starWrap);
//   }
// }

// // Відправка рейтингу на бек(проблема в тому, що якщо в email є '.' то бек не прийме його)
// async function submitRating(e) {
//   e.preventDefault();

//   const { rating, email } = e.currentTarget;

//   const inputValues = {
//     rate: Number(rating.value),
//     email: email.value,
//   };
//   if (inputValues.rate === 0) {
//     Notiflix.Report.warning(`Oops`, `Need to select some rating`, `Return`);
//     return;
//   }
//   if (inputValues.email.trim() === '') {
//     Notiflix.Report.warning(`Oops`, `Need to enter email`, `Return`);
//     return;
//   }

//   await axios
//     .patch(`${BASE_URL}${recipeID}/rating`, inputValues)
//     .then(response => {
//       Notiflix.Report.success(
//         `Great`,
//         `Completly added rating for ${response.data.title}`,
//         `Return`
//       );

//       closeRatingModal();
//     })
//     .catch(error => {
//       Notiflix.Notify.failure(`${error.response.data.message}`);
//     });
// }
