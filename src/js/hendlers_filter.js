import { Notify } from "notiflix";
import { getFilteredRecipes } from "./api"
import { clearFilters, startGallery } from "./filter";
import Gallery from './gallery';
import { getData } from './loader'
import { favouriteLocalStorage, addFavouriteOnList } from './local-storage';

import {
    handlePagination,

} from './components/pagination/pagination';

const formFilter = document.querySelector(".filter-form");
const resetButton = document.querySelector(".filter-input-reset-btn");
const searchBtn = document.querySelector(".filter-search-btn");
const inputForm = document.querySelector(".filter-form-input");
const selectes = document.querySelectorAll(".filter-form-select");
const gallery = document.querySelector(".filter-gallery-list")
const buttons = [];
let searchBtnClicked = false;
export const params = {};

async function handlerAllCategoriesBtn(evt, gallery) {
    evt.preventDefault();

    disactivBtn(buttons);

    try {
        const recipes = await getFilteredRecipes();
        const { results } = recipes;

        const marcup = Gallery.createMarkupCard({ results });
        Gallery.appendMarkupToGallery(gallery, marcup);
        favouriteLocalStorage();
        addFavouriteOnList();
        if (!results.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            getData(gallery);
            return;

        }



    } catch (err) {

        Notify.failure(err.message);
        console.log(err);
    }
}



async function handlerSpecificCategoriesBtn(evt, gallery) {
    evt.preventDefault();

    disactivBtn(buttons);
    if (evt.target.classList.contains("js-categories-item-btn")) {

        const currentBtn = evt.target;
        currentBtn.classList.add("active")
        const params = {
            "category": currentBtn.value
        }


        try {
            const recipes = await getFilteredRecipes(params);
            const { results } = recipes;


            if (!results.length) {
                gallery.innerHTML = ""
                getData(gallery);

                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                return;
            }


            const marcup = Gallery.createMarkupCard({ results });
            Gallery.appendMarkupToGallery(gallery, marcup);
            favouriteLocalStorage();
            addFavouriteOnList();


        } catch (err) {

            Notify.failure(err.message);
            console.log(err);
        }
    }
}



async function handlerFilterForm(evt, gallery, choise, params, currentPage) {

    evt.preventDefault();



    searchBtnClicked = false;


    resetButton.addEventListener("click", resetInput);
    const activeCategotyBtn = findActiveBtn();
    const currentCategoty = activeCategotyBtn ? activeCategotyBtn.value : null


    const formData = new FormData(formFilter);
    const searchInput = formData.get("query");


    const timeChoiceInstance = choise.find(instance => instance.passedElement.element.name === 'time');
    const selectedTimeValue = timeChoiceInstance.getValue(true);
    const timeSelected = selectedTimeValue !== "Time" ? selectedTimeValue : null;


    const areaChoiceInstance = choise.find(instance => instance.passedElement.element.name === 'area');
    const selectedAreaValue = areaChoiceInstance.getValue(true);
    const areaSelected = selectedAreaValue !== 'Region' ? selectedAreaValue : null;

    const ingrChoiceInstance = choise.find(instance => instance.passedElement.element.name === 'ingredients');


    const selectedIngrValue = ingrChoiceInstance.getValue(true);
    const ingrSelected = selectedIngrValue !== 'Product' ? selectedIngrValue : null


    const selectedChoice = ingrChoiceInstance.config.choices.find(choice => choice.value === ingrSelected);


    const ingrSelectedId = selectedChoice ? selectedChoice.id : '';



    params = {
        category: currentCategoty || null,
        title: searchInput.trim() !== "" ? searchInput.trim() : null,
        time: timeSelected ? timeSelected : null,
        area: areaSelected ? areaSelected : null,
        ingredient: ingrSelectedId ? ingrSelectedId : null,
    };


    try {



        const recipes = await getFilteredRecipes(params, currentPage);
        const { page, results, perPage: totalPage, totalPages } = recipes;


        console.log('totalPages :>> ', totalPages);
        if (!results.length) {

            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            gallery.innerHTML = "";
            getData(gallery);

            return;
        }
        gallery.innerHTML = "";
        const marcup = Gallery.createMarkupCard({ results });
        Gallery.appendMarkupToGallery(gallery, marcup);
        favouriteLocalStorage();
        addFavouriteOnList();

        if (page < totalPages) {
            console.log('totalPages :>> ', totalPages);
            handlePagination({ page, totalPage })

        }

    } catch (err) {
        Notify.failure(err.message);

        console.log(err);
    }


}




function checkFieldsAndToggleButton() {
    const isAnySelectActive = Array.from(selectes).some(select => select.value !== "");
    const isInputFilled = inputForm.value.trim() !== "";

    if (isAnySelectActive || isInputFilled) {
        searchBtn.disabled = false;
    } else {
        searchBtn.disabled = true;
    }
}

checkFieldsAndToggleButton();

function resetInput() {
    inputForm.value = "";
    inputForm.focus();


}


function disactivBtn(buttons) {
    const categoryButtons = Array.from(document.querySelectorAll(".js-categories-item-btn"));
    buttons.push(...categoryButtons);

    buttons.forEach(btn => {
        btn.classList.remove("active");
    })
}

function findActiveBtn() {
    const activeBtn = buttons.find(button => button.classList.contains("active"));

    return activeBtn;
}



export {
    handlerAllCategoriesBtn,
    handlerSpecificCategoriesBtn,
    handlerFilterForm,
    findActiveBtn,
    disactivBtn,
    searchBtnClicked
}



