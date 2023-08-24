document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal-team]');
  const openBtn = document.querySelector('.btnOpenNow');
  const closeBtn = document.querySelector('[data-team-close]');
  const audio = document.getElementById('sound');

  function openModal() {
    modal.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');

    stopMusic();
  }

  function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
  }

  function closeOnEscape(e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  }
  function closeOnOverlayClick(e) {
    if (e.target === modal) {
      closeModal();
    }
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeOnEscape);
  modal.addEventListener('click', closeOnOverlayClick);
});
