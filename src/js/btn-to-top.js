document.addEventListener('DOMContentLoaded', function () {
  initScrollButton();
  initFeedbackForm();
});

const SCROLL_THRESHOLD = 3;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function initScrollButton() {
  let button = document.querySelector('.show-btn');

  function checkButtonVisibility() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      button.classList.add('is-visible');
    } else {
      buttonToTop.classList.add('is-hidden');
    }
  }

  function backToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function initFeedbackForm() {
  const { feedbackForm, emailInput } = getFeedbackElements();

  // Завантаження збереженої електронної адреси з localStorage
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail && emailInput) {
    emailInput.value = savedEmail;
  }

  if (feedbackForm && emailInput) {
    feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return; // Зупинка обробки, якщо email не є дійсним
      }

      // Зберігаємо електронну адресу в localStorage
      localStorage.setItem('userEmail', emailInput.value);

      // Очищаємо поле введення
      emailInput.value = '';

      // Показуємо спливаюче вікно з підтвердженням
      alert('Thank you for sending your email address!');
    });
  }
}

function getFeedbackElements() {
  const feedbackForm =
    document.getElementById('feedbackForm') ||
    document.querySelector('.feedback-section form');
  const emailInput = feedbackForm
    ? feedbackForm.querySelector('input[type="email"]')
    : null;

  return { feedbackForm, emailInput };
}

function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}
