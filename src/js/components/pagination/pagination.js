import { startGallery } from '../../filter';
import { findElement } from '../utils/dom';

export const initialRefs = {
  pagesDiv: findElement('.content > .links'),
  prevButton: findElement('.button-left'),
  nextButton: findElement('.button-right'),
};

export const paramsGlobal = {
  params: null,
};

export const initialStatePagination = {
  currentPage: null,
  totalPage: null,
  step: null,
  buttonsPerPage: 3,
};

function updateGalleryAndPagination(page) {
  if (paramsGlobal.params) {
    startGallery({
      page: +page,
      ...paramsGlobal.params,
    });
  } else {
    startGallery({ page: +page });
  }
}

export function handlePagination({ page: activePage, totalPage }) {
  initialStatePagination.currentPage = +activePage;
  initialStatePagination.totalPage = totalPage;
  renderPages(totalPage, activePage);
  updateIcons();
}

export function markupPage(page, currentPage) {
  const isActive = page === currentPage ? 'active' : '';
  return `
    <button class="button-link ${isActive}" data-page="${page}">
      <a href="#" class="link" data-page="${page}">
        ${page}
      </a>
    </button>`;
}

export function markupDots() {
  return `
    <button class="button-link " data-dots="true">
      <a href="#" class="link">...</a>
    </button>`;
}

export function renderPages(pages, activePage) {
  let html = '';
  const currentPage = initialStatePagination.currentPage;
  const buttonsPerPage = initialStatePagination.buttonsPerPage;
  const halfButtonsPerPage = Math.floor(buttonsPerPage / 2);

  let startPage = Math.max(1, currentPage - halfButtonsPerPage);
  let endPage = Math.min(pages, startPage + buttonsPerPage - 1);

  if (startPage > 1) {
    html += markupDots();
  }

  for (let i = startPage; i <= endPage; i++) {
    html += markupPage(i, activePage);
  }

  if (endPage < pages) {
    html += markupDots();
  }

  initialRefs.pagesDiv.innerHTML = html;
  updateIcons();
}

function updateIcons() {
  const currentPage = initialStatePagination.currentPage;
  const totalPage = initialStatePagination.totalPage;
}

document.addEventListener('DOMContentLoaded', () => {
  renderPages(
    initialStatePagination.totalPage,
    initialStatePagination.currentPage
  );
  updateIcons();
  updateGalleryAndPagination(initialStatePagination.currentPage);
});

initialRefs.prevButton.addEventListener('click', () => {
  if (initialStatePagination.currentPage > 1) {
    initialStatePagination.currentPage -= 1;
    renderPages(
      initialStatePagination.totalPage,
      initialStatePagination.currentPage
    );
    updateIcons();
  }
});

initialRefs.nextButton.addEventListener('click', () => {
  if (initialStatePagination.currentPage < 1) {
    initialStatePagination.currentPage += 1;
    renderPages(
      initialStatePagination.totalPage,
      initialStatePagination.currentPage
    );
    updateIcons();
  }
});

const leftStartButton = document.querySelector('.button-left-start');
const leftNextButton = document.querySelector('.button-left-next');
const rightNextButton = document.querySelector('.button-right-next');
const rightEndButton = document.querySelector('.button-right-end');

leftStartButton.addEventListener('click', () => {
  initialStatePagination.currentPage = 1;
  renderPages(
    initialStatePagination.totalPage,
    initialStatePagination.currentPage
  );
  updateIcons();
  updateGalleryAndPagination(initialStatePagination.currentPage);
});

leftNextButton.addEventListener('click', () => {
  if (initialStatePagination.currentPage > 1) {
    initialStatePagination.currentPage -= 1;
    renderPages(
      initialStatePagination.totalPage,
      initialStatePagination.currentPage
    );
    updateIcons();
    updateGalleryAndPagination(initialStatePagination.currentPage);
  }
});

rightNextButton.addEventListener('click', () => {
  if (initialStatePagination.currentPage < initialStatePagination.totalPage) {
    initialStatePagination.currentPage += 1;
    renderPages(
      initialStatePagination.totalPage,
      initialStatePagination.currentPage
    );
    updateIcons();
    updateGalleryAndPagination(initialStatePagination.currentPage);
  }
});

rightEndButton.addEventListener('click', () => {
  initialStatePagination.currentPage = initialStatePagination.totalPage;
  renderPages(
    initialStatePagination.totalPage,
    initialStatePagination.currentPage
  );
  updateIcons();
  updateGalleryAndPagination(initialStatePagination.currentPage);
});

initialRefs.pagesDiv.addEventListener('click', e => {
  e.preventDefault();
  const { target } = e;
  const page = +target.dataset.page;

  if (page) {
    initialStatePagination.currentPage = page;
    renderPages(
      initialStatePagination.totalPage,
      initialStatePagination.currentPage
    );
    updateIcons();
    updateGalleryAndPagination(initialStatePagination.currentPage);
  }

  if (target.dataset.dots === 'true') {
    const currentPage = initialStatePagination.currentPage;
    const totalPage = initialStatePagination.totalPage;
    const buttonsPerPage = initialStatePagination.buttonsPerPage;

    const linksDiv = initialRefs.pagesDiv;
    const buttons = linksDiv.querySelectorAll('.button-link');

    if (buttons.length >= buttonsPerPage) {
      const dotsButton = linksDiv.querySelector('.button-link');
      const currentPageNumber = +dotsButton
        .querySelector('.link')
        .getAttribute('data-page');

      linksDiv.removeChild(dotsButton);

      const nextButtonNumber = currentPageNumber + 1;

      if (nextButtonNumber <= totalPage) {
        const button = markupPage(nextButtonNumber, currentPage);
        linksDiv.append(button);

        if (nextButtonNumber + buttonsPerPage <= totalPage) {
          linksDiv.append(markupDots());
        }
      }
    }
  }
});
