import { Notify } from "notiflix";
import { getCategories, getFilteredRecipes } from "./api"
import { clearFilters, createMurcupGallery } from "./filter";



const allCategoriesBtn = document.querySelector(".categories-btn");
const categoriesList = document.querySelector(".categories-list");
const buttons = [allCategoriesBtn];


allCategoriesBtn.addEventListener("click", handlerAllCategoriesBtn);

categoriesList.addEventListener("click", handlerSpecificCategoriesBtn)

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

console.log(buttons);

async function handlerAllCategoriesBtn(evt) {
    evt.preventDefault();
    clearFilters()


    try {
        const recipes = await getFilteredRecipes();
        const { results } = recipes;
        createMurcupGallery(recipes);

        if (!results.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        console.log(recipes);

    } catch (err) {
        Notify.failure(err.message);
    }
}

async function handlerSpecificCategoriesBtn(evt) {
    evt.preventDefault();


    if (evt.target.classList.contains("js-categories-item-btn")) {

        currentBtn = evt.target;

        const params = {
            "category": currentBtn.value
        }
        console.log(params);

        try {
            const recipes = await getFilteredRecipes(params);
            const { results } = recipes;
            createMurcupGallery(recipes);

            if (!results.length) {
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                return;
            }
        } catch (err) {
            Notify.failure(err.message);
        }
    }
}

// function disactivBtn(buttons) {
//     const categoryButtons = Array.from(document.querySelectorAll(".js-categories-item-btn"));
//     buttons.push(...categoryButtons);
//     // disactivBtn(buttons);
//     buttons.forEach(btn => {
//         btn.classList.remove("active");
//     })
// }

// function findActiveBtn() {
//     const activeBtn = buttons.find(button => button.classList.contains("active"));
//     return activeBtn;
// }
// export const activeButton = findActiveBtn();
// export {
//     findActiveBtn
// };