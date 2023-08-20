// import SlimSelect from 'slim-select'
// import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilteredRecipes, getAreas, getIngredients } from './api';
import { debounce } from 'lodash';
import Gallery from './gallery';

// import { activeButton } from './categories';

const formFilter = document.querySelector(".filter-form")

const inputForm = document.querySelector(".filter-form-input");
const resetButton = document.querySelector(".filter-input-reset-btn");

const resetFormButton = document.querySelector(".filter-reset-btn")
const selectes = document.querySelectorAll(".filter-form-select");
const boxOption = document.querySelector(".filter-option-box");

const gallery = document.querySelector(".filter-gallery-list");


const selectTime = document.getElementById("searchTime");
const selectArea = document.getElementById("area-select");
const selectIngr = document.getElementById("ingredients-select");


startGallery();
inputForm.addEventListener('input', debounce(() => { handlerFilterForm() }, 3000));

resetFormButton.addEventListener("click", clearFilters)

console.log(selectes);



async function createOptionsSelect() {
    try {
        for (const item of selectes) {
            const options = [];

            if (item === selectTime) {
                const minTime = 5;
                const maxTime = 120;
                const step = 5;

                for (let time = minTime; time <= maxTime; time += step) {
                    options.push(`<option class="filter-form-select-time" value="${time}">${time} хв</option>`);
                }

                const optionsMarkup = options.join('');
                selectTime.innerHTML = optionsMarkup;
            }
            if (item === selectArea) {
                const getOptionAreas = await getAreas();
                const optionAreas = getOptionAreas.map((area) => {
                    const { name, _id: idArea } = area;
                    return `<option class="filter-form-select-time" id="${idArea}" value="${name}">${name} </option>`;
                }).join('');

                selectArea.innerHTML = optionAreas;
            }

            if (item === selectIngr) {
                const getOptionIngr = await getIngredients();
                const optionIngr = getOptionIngr.map((area) => {
                    const { name, _id: idIngr } = area;
                    return `<option class="filter-form-select-time" id="${idIngr}" value="${name}">${name} </option>`;
                }).join('');

                selectIngr.innerHTML = optionIngr;
            }

        }
    } catch (error) {
        console.error(error);
    }
}


createOptionsSelect()

function clearFilters() {
    inputForm.value = "";

    // Скидання значень у селектах 
    selectes.forEach(select => {
        select.selectedIndex = 0;
    })
}



async function handlerFilterForm(evt) {

    resetButton.addEventListener("click", resetInput);
    // inputForm.classList.add("active");
    const formData = new FormData(formFilter);
    const searchInput = formData.get("query")
    const timeSelected = formData.get("time");
    const areaSelected = formData.get("area");
    const ingrSelected = formData.get("ingredients")


    //тут доробити повний об"єкт
    const params = {
        query: searchInput,
        time: timeSelected,
        area: areaSelected,
        ingredients: ingrSelected
    };

    try {

        // тут треба зробити запит на локалсторидж??
        const recipes = await getFilteredRecipes(params);
        const { results } = recipes;

        console.log("привіт");

        const filteredRecipes = recipes.results.filter(recipe => {
            const selectedIngredient = ingrSelected.toLowerCase();
            return recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(selectedIngredient)
            );
        });

        if (!results.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        const marcup = Gallery.createMarkupCard({ filteredRecipes });
        Gallery.appendMarkupToGallery(gallery, marcup);

        // createMurcupGallery(recipes);

    } catch (err) {
        Notify.failure(err.message);
    }


}

function resetInput() {
    inputForm.value = "";
    inputForm.focus();
    // inputForm.classList.remove("active");

}



async function startGallery() {

    try {
        const recipes = await getFilteredRecipes();
        console.log(recipes);
        const { page, results, totalPage } = recipes;
        const marcup = Gallery.createMarkupCard({ results });
        Gallery.appendMarkupToGallery(gallery, marcup);
        // createMurcupGallery(recipes);
        if (page < totalPage) {
            // ПАГІНКАЦІЯ.classList.remove('is-hidden');
            // ПАГІНАЦІЯ.addEventListener('click', handlerLoad);
            //тут робимо видимою пагінацію і вішаємо на неї слухач
        }

    } catch (error) {
        console.error(error);
    }
}




// function createMurcupGallery({ results }) {
//     const markupCard = results.map(({ description, preview, rating, title }) => {
//         return ` <li class="filter-gallery-item">
//         <img class="filter-gallery-item-photo" src="${preview}" alt="${title}" width="250" height="287">
//         <div class="filter-gallery-item-content">
//             <button type="button" class="filter-gallery-item-favorit-btn">
//                 <svg class="filter-gallery-item-favorit-btn-icon">
//                     <use href="./images/forcard.svg#icon-heart" width ="22" height="22"></use>
//                 </svg>
//             </button>
//             <h3 class="filter-gallery-item-tittle" >${title}</h3>
//             <p class="filter-gallery-item-description">${description}</p>
//             <div class="filter-gallery-item-bottom">
//             <div class="filter-gallery-item-rating-wrap">
//                 <p class="filter-gallery-item-rating-value">${rating}</p>
//                 <div class="filter-gallery-item-rating-icons">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
//             </div>
//             <button class="filter-gallery-item-btn" type="button">See recipe</button>
//         </div>
//         </div>
//     </li>`
//     }).join("");
//     // return markupCard;
//     gallery.innerHTML = markupCard;
// }

export {
    clearFilters,
    createMurcupGallery
};