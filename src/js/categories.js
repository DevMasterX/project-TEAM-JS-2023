import { Notify } from "notiflix";
import { getCategories, getFilteredRecipes } from "./api"
import { clearFilters, createMurcupGallery } from "./filter";
import {
    handlerAllCategoriesBtn, handlerSpecificCategoriesBtn,
} from "./hendlers_filter";




const allCategoriesBtn = document.querySelector(".categories-btn");
const categoriesList = document.querySelector(".categories-list");

const gallery = document.querySelector(".filter-gallery-list");

allCategoriesBtn.addEventListener("click", ((evt) => { handlerAllCategoriesBtn(evt, gallery) }));

categoriesList.addEventListener("click", ((evt) => { handlerSpecificCategoriesBtn(evt, gallery) }))

async function createCategoriesList() {
    try {

        const getCategoriesData = await getCategories();


        const marcupCategories = getCategoriesData.map((category) => {
            const { name, _id: idCategory } = category;

            return `  
        <li class="js-categories-item">
          <button class="js-categories-item-btn" type="submit" id="${idCategory}" value="${name}">${name}</button>
        </li>`;
        }).join("");

        categoriesList.innerHTML = marcupCategories;



    } catch (error) {
        console.error(error);
    }
}
createCategoriesList();




export {
    createCategoriesList,

}