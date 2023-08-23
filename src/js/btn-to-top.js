document.addEventListener('DOMContentLoaded', function () {
  initScrollButton();
  // playMusic();
  // initFeedbackForm();
});

const SCROLL_THRESHOLD = 300;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function initScrollButton() {
  let button = document.querySelector('.show-btn');

  function checkButtonVisibility() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  }
  if (button) {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', checkButtonVisibility);
  }
}

// let play = document.getElementById('teamOpenBtn');
// function playMusic() {
//   let audio = new Audio('audio.mp3');
//   audio.play();
// }
// play.addEventListener('click', playMusic);

// function initFeedbackForm() {
//   const { feedbackForm, emailInput } = getFeedbackElements();
//   const savedEmail = localStorage.getItem('userEmail');
//   if (savedEmail && emailInput) {
//     emailInput.value = savedEmail;
//   }
//   if (feedbackForm && emailInput) {
//     feedbackForm.addEventListener('submit', function (event) {
//       event.preventDefault();
//       if (!isValidEmail(emailInput.value)) {
//         alert('Please enter a valid email address.');
//         return;
//       }
//         localStorage.setItem('userEmail', emailInput.value);
//           emailInput.value = '';
//         alert('Thank you for sending your email address!');
//     });
//   }
// }
// function getFeedbackElements() {
//   const feedbackForm =
//     document.getElementById('feedbackForm') ||
//     document.querySelector('.feedback-section form');
//   const emailInput = feedbackForm
//     ? feedbackForm.querySelector('input[type="email"]')
//     : null;
//   return { feedbackForm, emailInput };
// }
// function isValidEmail(email) {
//   return EMAIL_REGEX.test(email);
// }
