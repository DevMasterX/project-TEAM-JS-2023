document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements
  console.log('hello');
  const openModalButton = document.getElementById('teamOpenBtn');
  const closeModalButton = document.getElementById('teamCloseBtn');
  const modalBackdrop = document.getElementById('teamBackdrop');

  function showModal() {
    modalBackdrop.classList.remove('is-hidden');
    console.log('hello');
  }

  function hideModal() {
    modalBackdrop.classList.add('is-hidden');
  }

  openModalButton.addEventListener('click', showModal);
  closeModalButton.addEventListener('click', hideModal);
  modalBackdrop.addEventListener('click', function (event) {
    // If clicked outside of the modal content, close the modal
    if (event.target === modalBackdrop) {
      hideModal();
    }
  });
});
