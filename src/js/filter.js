
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilteredRecipes, getAreas, getIngredients } from './api';
import { debounce } from 'lodash';
import Gallery from './gallery';
import { handlerFilterForm } from './hendlers_filter';
import { eventOpenrModal } from './modal_window_recipe';
import { favouriteLocalStorage, addFavouriteOnList } from './local-storage';
import { renderIcons } from "./rating";

import Choices from 'choices.js';
import {
    handlePagination,

} from './components/pagination/pagination';


const inputForm = document.querySelector(".filter-form-input");

const resetFormButton = document.querySelector(".filter-reset-btn")
const selectes = document.querySelectorAll(".filter-form-select");

const selectTime = document.getElementById("searchTime");
const selectArea = document.getElementById("area-select");
const selectIngr = document.getElementById("ingredients-select");

const gallery = document.querySelector(".filter-gallery-list");
const choicesInstances = [];

startGallery();
createOptionsSelect()



inputForm.addEventListener('input', debounce((evt) => { handlerFilterForm(evt, gallery, choicesInstances) }, 300));

resetFormButton.addEventListener("click", clearFilters)



async function createOptionsSelect() {
    try {
        for (const item of selectes) {
            let options = [];
            let placeholderValue = '';


            if (item === selectTime) {
                const minTime = 5;
                const maxTime = 120;
                const step = 5;
                options = createOptionsTime(minTime, maxTime, step, ' min');
                placeholderValue = '0 min';
            } if (item === selectArea) {

                const areas = await getAreas();

                options = areas.map(area => ({ value: area.name, label: placeholderValue, id: area._id }));
                placeholderValue = 'Region';
            } if (item === selectIngr) {
                const ingredients = await getIngredients();

                options = ingredients.map(ingr => ({ value: ingr.name, id: ingr._id }));
                placeholderValue = 'Product';
            }

            const choicesInstance = new Choices(item, {
                choices: options,
                searchEnabled: false,
                renderSelectedChoices: 'always',
                allowHTML: true,
                placeholder: true,
                placeholderValue: placeholderValue,


                classNames: {
                    containerOuter: 'js-filter-select-wrap',
                    input: 'js-filter-form-select',
                    listDropdown: 'js-filter-form-select-dropdown',
                    highlightedState: 'is-highlighted',
                    selectedState: 'is-selected',
                    containerInner: 'choices__inner',

                },
            });

            choicesInstances.push(choicesInstance);

            setupSelectToggle(item, choicesInstance);

            createStylePlaceholder();



            item.addEventListener('change', async evt => {
                handlerFilterForm(evt, gallery, choicesInstances);
            });





        }
    } catch (error) {
        console.error(error);
    }
}

function createOptionsTime(min, max, step, unit) {
    const options = [];
    for (let time = min; time <= max; time += step) {
        options.push({ value: time, label: `${time}${unit}` });
    }
    return options;
}


function createStylePlaceholder() {
    selectes.forEach(select => {


        select.addEventListener("change", (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];

            if (selectedOption.classList.contains("filter-form-select-placeholder")) {
                select.style.color = "rgba(5, 5, 5, 0.50)";
            } else {
                select.style.color = "#050505";
            }
        });
    })

}



function setupSelectToggle(item) {
    const selectWrap = item.closest('.js-filter-select-wrap');

    selectWrap.classList.add('closed');

    selectWrap.addEventListener('click', () => {
        toggleSelectList(selectWrap);
    });

    //закриття при виборі опції 
    item.addEventListener('change', () => {
        hideSelectList(selectWrap);
    });

    // закриття списку при кліку в іншому місці
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.js-filter-select-wrap')) {
            hideSelectList(selectWrap);
        }
    });
}

function toggleSelectList(selectWrap) {
    selectWrap.classList.toggle('open');
}

function hideSelectList(selectWrap) {
    selectWrap.classList.remove('open');
}


const holder = ['0 min', 'Region', 'Product'];

function clearFilters() {
    inputForm.value = "";
    choicesInstances.forEach((choicesInstance, index) => {
        choicesInstance.setValue([holder[index]]);
    });

    startGallery();
}

async function startGallery(params = {}) {
    showLoader();
    try {
        const recipes = await getFilteredRecipes(params);

        const { page, results, perPage: totalPage } = recipes;
        const marcup = Gallery.createMarkupCard({ results });
        Gallery.appendMarkupToGallery(gallery, marcup);
        eventOpenrModal();
        favouriteLocalStorage();
        addFavouriteOnList();
        hideLoader();

        if (page < totalPage) {
            handlePagination({ page, totalPage })

        }

    } catch (error) {
        console.error(error);

    }
}

function showLoader() {
    let preloader = document.getElementById('preloader');
    preloader.classList.remove('preloader-hidden');
    preloader.classList.remove('hide-preloader');
}

function hideLoader() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function () {
        preloader.classList.add('preloader-hidden');
    }, 990);
}


export {
    clearFilters,
    startGallery

};