import { getPopularRecipes } from './api';
import { eventOpenrModalTwo } from './modal_window_recipe';

const categoriesList = document.querySelector('.popular-js');

async function createCategoriesList() {
  try {
    const getPopularData = await getPopularRecipes();
    const marcupCategories = getPopularData

      .map(category => {
        const { preview, description, title, _id } = category;

        return `
        <div class="item-popular" id="${_id}">
        <img src="${preview}" alt="${title}" class="img-popular" id="${_id}"/>
        <div class="cont-pop">
        <h3 class="dish-title" id="${_id}">${title.toUpperCase()}</h3>
        <p class="paragraph-popular" id="${_id}">${description}</p>
        </div>
        </div>
        `;
      })
      .join('');

    categoriesList.innerHTML = marcupCategories;
    eventOpenrModalTwo();
  } catch (error) {
    console.error(error);
  }
}
createCategoriesList();
