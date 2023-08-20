document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('teamOpenBtn');
  const closeBtn = document.getElementById('teamCloseBtn');
  const modal = document.getElementById('teamBackdrop');

  function openModal() {
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
