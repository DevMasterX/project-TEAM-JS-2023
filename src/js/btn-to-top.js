document.addEventListener('DOMContentLoaded', function () {
  initScrollButton();
  initPlayMusicButton();
  initModalCloseButton();
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

function initPlayMusicButton() {
  let play = document.querySelector('#teamOpenBtn');
  let audio = document.getElementById('sound');

  function playMusic() {
    audio.play().catch(error => {
      console.error('Проблема з відтворенням аудіо:', error);
    });
  }

  if (play) {
    play.addEventListener('click', playMusic);
  }
}

function initModalCloseButton() {
  let closeModalButton = document.querySelector('.team_modal-close-btn');
  let audio = document.getElementById('sound');

  function stopMusic() {
    audio.pause(); // Зупиняємо відтворення музики
    audio.currentTime = 0; // Щоб знову почати відтворення з початку
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', stopMusic);
  }
}
