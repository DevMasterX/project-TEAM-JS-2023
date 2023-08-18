document.addEventListener('DOMContentLoaded', function () {
  let button = document.querySelector('.show-btn');

  function checkButtonVisibility() {
    if (window.scrollY > 3) {
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

  const feedbackForm = document.querySelector('.feedback-section form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();
      feedbackForm.querySelector('input[type="email"]').value = '';
      alert('Дякуємо за відправку вашої електронної адреси!');
    });
  }
});
