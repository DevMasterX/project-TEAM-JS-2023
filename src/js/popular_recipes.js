import { getPopularRecipes } from './api';

const categoriesList = document.querySelector('.popular-js');

async function createCategoriesList() {
  try {
    const getPopularData = await getPopularRecipes();
    console.log(getPopularData);
    const marcupCategories = getPopularData

      .map(category => {
        const { preview, description, title } = category;

        return `
        <div class="item-popular">
       <img src="${preview}" alt="${title}" class="img-popular"/>
<div class="cont-pop">
    <h3 class="dish-title">${title.toUpperCase()}</h3>
      <p class="paragraph-popular">${description}</p>
   </div>
      </div>
    `;
      })
      .join('');
    console.log(marcupCategories);
    categoriesList.innerHTML = marcupCategories;
  } catch (error) {
    console.error(error);
  }
}
createCategoriesList();
