// import SlimSelect from 'slim-select'
// import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilteredRecipes } from './api';
import { debounce } from 'lodash';


const inputForm = document.querySelector(".filter-form-input");
const selectes = document.querySelectorAll(".filter-form-select");
const boxOption = document.querySelector(".filter-option-box");

const gallery = document.querySelector(".filter-gallery-list");

const selectTime = document.getElementById("searchTime");
const selectArea = document.getElementById("area-select");
const selectIngr = document.getElementById("ingredients-select");


const serchQuerry = {}

inputForm.addEventListener('submit', debounce(handlerFilterForm, 300));

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

function clearFilters() {
    inputForm.value = "";

    // Скидання значень у селектах 
    selectes.forEach(select => {
        select.selectedIndex = 0;
    })
}


function handlerFilterForm(evt) {
    evt.preventDefault();
    const searchInput = inputForm.value.trim();
    const timeSelected = selectTime.value;
    const areaSelected = selectArea.value;
    const ingrSelected = selectIngr.value;


    if (inputForm) {
        serchQuerry.search = searchInput; ///З"ясувати назву параметру
    }
    if (timeSelected) {
        serchQuerry.time = timeSelected;
    }
    if (areaSelected) {
        serchQuerry.area = areaSelected;
    }
    if (ingrSelected) {
        serchQuerry.ingredients = ingrSelected;
    }
    console.log(serchQuerry);
}




async function startGallery() {

    try {
        const recipes = await getFilteredRecipes();
        console.log(recipes);
        const { page, totalPage } = recipes;
        gallery.innerHTML = createMurcupGallery(recipes);
        if (page < totalPage) {
            // ПАГІНКАЦІЯ.classList.remove('is-hidden');
            // ПАГІНАЦІЯ.addEventListener('click', handlerLoad);
            //тут робимо видимою пагінацію і вішаємо на неї слухач
        }

    } catch (error) {
        console.error(error);
    }
}

startGallery();




function createMurcupGallery({ results }) {
    const markupCard = results.map(({ description, preview, rating, title }) => {
        return ` <li class="filter-gallery-item">
        <img class="filter-gallery-item-photo" src="${preview}" alt="${title}" width="250" height="287">
        <div class="filter-gallery-item-content">
            <div class="filter-gallery-item-favorit-btn">
                <svg>
                    <use href="#"></use>
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
    return markupCard;

}

export {
    clearFilters,
    createMurcupGallery
};