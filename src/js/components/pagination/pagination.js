import { startGallery } from '../../filter';
import { findElement } from '../utils/dom';

export const initialRefs = {
  pagesDiv: findElement('.content > .links'),
};

export const paramsGlobal = {
  params: null,
};

export const initialStatePagination = {
  currentPage: null,
  totalPage: null,
  step: null,
};

export function handlePagination({ page: activePage, totalPage }) {
  initialStatePagination.currentPage = +activePage;
  initialStatePagination.totalPage = totalPage;
  // if (totalPage < 6) {
  //     initialStatePagination.step = 2
  // } else {
  //     initialStatePagination.step = 3
  // }

  renderPages(totalPage, activePage);
}

initialRefs.pagesDiv.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const { target } = e;
  const page = +target.dataset.page;
  initialStatePagination.currentPage = page;
  if (paramsGlobal.params) {
    startGallery({
      page: +initialStatePagination.currentPage,
      ...paramsGlobal.params,
    });
  } else {
    startGallery({ page: +initialStatePagination.currentPage });
  }
});

export function renderPages(pages, activePage) {
  let html = '';
  for (let i = 1; i <= pages; i++) {
    html += markupPage(i, activePage);
  }
  initialRefs.pagesDiv.innerHTML = html;
}

export function markupPage(page) {
  const isActive =
    page == initialStatePagination.currentPage ? 'active' : 'noactive';
  return `
    <button class="button-link ${isActive}" data-page="${page}">
      <a href="#" class="link" data-page="${page}">${page}</a>
    </button>`;
}

export function markupDots() {
  return `
    <button class="button-link">
      <a href="#" class="link">...</a>
    </button>
    `;
}
