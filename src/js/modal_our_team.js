document.addEventListener('DOMContentLoaded', function () {
  initUI();
});

const SCROLL_THRESHOLD = 500;

function initUI() {
  const button = document.querySelector('.show-btn');
  const openBtn = document.querySelector('.btnOpenNow');
  const closeBtn = document.querySelector('[data-team-close]');
  const modal = document.querySelector('[data-modal-team]');
  const audio = document.getElementById('sound');

  function checkButtonVisibility() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  }

  function playMusic() {
    audio.play().catch(error => {
      console.error('Проблема з відтворенням аудіо:', error);
    });
  }

  function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
  }

  function openModal() {
    modal.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
    playMusic();
    document.addEventListener('keydown', closeOnEscape);
  }

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    stopMusic();
    document.removeEventListener('keydown', closeOnEscape);
  }

  function closeOnEscape(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  function closeOnOverlayClick(e) {
    if (e.target === modal) {
      closeModal();
    }
  }

  // Button to scroll to top
  if (button) {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', checkButtonVisibility);
  }

  // Modal actions
  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', closeOnOverlayClick);
  }
}
