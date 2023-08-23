document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal-team]');
  const openBtn = document.querySelector('.btnOpenNow');
  const closeBtn = document.querySelector('[data-team-close]');
  const audio = document.getElementById('sound');

  // Функція відкриття модального вікна
  function openModal() {
    modal.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  // Функція закриття модального вікна
  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');

    // Stop audio playback when modal is closed
    stopMusic();
  }

  // Function to stop audio playback
  function stopMusic() {
    audio.pause(); // Зупиняємо відтворення музики
    audio.currentTime = 0; // Щоб знову почати відтворення з початку
  }

  // Закриття на Escape
  function closeOnEscape(e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  }

  // Закриття на клік за межами модалки
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
