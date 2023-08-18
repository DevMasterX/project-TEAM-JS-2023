document.addEventListener('DOMContentLoaded', function () {
  let buttonToTop = document.getElementById('btn-to-top');
  let rootElement = document.documentElement;

  function trackScroll() {
    if (rootElement.scrollTop >= document.documentElement.clientHeight) {
      buttonToTop.classList.remove('is-hidden');
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

  if (buttonToTop) {
    buttonToTop.addEventListener('click', backToTop);
    window.addEventListener('scroll', trackScroll);
  }
});
