// import SlimSelect from 'slim-select'
// import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilteredRecipes } from './api';
import { debounce } from 'lodash';
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
inputForm.addEventListener('input', debounce(
    handlerFilterForm, 300));

resetFormButton.addEventListener("click", clearFilters)

console.log(selectes);



async function createOptionsSelect() {
    selectes.forEach(item => {
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
        else {

            // тут будуть умови для інших селектів 
        }
    });
}
//     try {
//         const getCategoriesData = await getCategories();


//         const marcupCategories = getCategoriesData.map((category) => {
//             const { name, _id: idCategory } = category;

//             return `  
//         <li class="js-categories-item">
//           <button class="js-categories-item-btn" type="submit" id="${idCategory}" value="${name}">${name}</button>
//         </li>`;
//         }).join("");

//         categoriesList.innerHTML = marcupCategories;


//     } catch (error) {
//         console.error(error);
//     }
// }
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

    const formData = new FormData(formFilter);
    const searchInput = formData.get("query")
    const timeSelected = formData.get("time");
    const areaSelected = formData.get("area");
    const ingrSelected = formData.get("ingredients")

    const formDataObject = {};

    for (const [name, value] of formData) {
        if (name === "query") {
            formDataObject["title"] = value;
        } else {
            formDataObject[name] = value;
        }
    }
    console.log(formDataObject);
    try {

        // тут треба зробити запит на локалсторидж???
        const recipes = await getFilteredRecipes(formDataObject);
        const { results } = recipes;

        if (!results.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        createMurcupGallery(recipes);
    } catch (err) {
        Notify.failure(err.message);
    }


}

function resetInput() {
    inputForm.value = "";
    inputForm.focus();

}



async function startGallery() {

    try {
        const recipes = await getFilteredRecipes();
        console.log(recipes);
        const { page, totalPage } = recipes;
        createMurcupGallery(recipes);
        if (page < totalPage) {
            // ПАГІНКАЦІЯ.classList.remove('is-hidden');
            // ПАГІНАЦІЯ.addEventListener('click', handlerLoad);
            //тут робимо видимою пагінацію і вішаємо на неї слухач
        }

    } catch (error) {
        console.error(error);
    }
}




function createMurcupGallery({ results }) {
    const markupCard = results.map(({ description, preview, rating, title }) => {
        return ` <li class="filter-gallery-item">
        <img class="filter-gallery-item-photo" src="${preview}" alt="${title}" width="250" height="287">
        <div class="filter-gallery-item-content">
            <div class="filter-gallery-item-favorit-btn">
                <svg>
                    <use href="./images/forcard.svg#icon-heart"></use>
                </svg>
            </div>
            <h3 class="filter-gallery-item-tittle">${title}</h3>
            <p class="filter-gallery-item-description">${description}</p>
            <div>
                <p class="filter-gallery-item-rating-value">${rating}</p>
                <div class="filter-gallery-item-rating-icon"></div>
            </div>
            <button type="button">See recipe</button>
        </div>
    </li>`
    }).join("");
    // return markupCard;
    gallery.innerHTML = markupCard;
}

export {
    clearFilters,
    createMurcupGallery
};