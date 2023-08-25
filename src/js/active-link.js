document.addEventListener('DOMContentLoaded', function () {
  const linkHomeHeaderRef = document.querySelector('.header-link-home');

  const linkFavoritesHeaderRef = document.querySelector(
    '.header-link-favorites'
  );

  function addActiveClass(link) {
    linkHomeHeaderRef.classList.remove('active-header');
    linkFavoritesHeaderRef.classList.remove('active-header');
    link.classList.add('active-header');
  }

  linkHomeHeaderRef.addEventListener('click', function () {
    addActiveClass(linkHomeHeaderRef);
  });

  linkFavoritesHeaderRef.addEventListener('click', function () {
    addActiveClass(linkFavoritesHeaderRef);
  });

  if (window.location.pathname.includes('Favorites.html')) {
    addActiveClass(linkFavoritesHeaderRef);
  } else {
    addActiveClass(linkHomeHeaderRef);
  }
});
