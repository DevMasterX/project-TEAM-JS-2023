import { Notify } from "notiflix";
import { getFilteredRecipes } from "./api"
import { clearFilters } from "./filter";
import Gallery from './gallery';


const formFilter = document.querySelector(".filter-form");
const resetButton = document.querySelector(".filter-input-reset-btn");
const searchBtn = document.querySelector(".filter-search-btn");
const inputForm = document.querySelector(".filter-form-input");
const selectes = document.querySelectorAll(".filter-form-select");
const buttons = [];
let searchBtnClicked = false;


async function handlerAllCategoriesBtn(evt, galleryElement) {
    evt.preventDefault();
    clearFilters()
    disactivBtn(buttons);

    try {
        const recipes = await getFilteredRecipes();
        const { results } = recipes;

        const marcup = Gallery.createMarkupCard({ results });
        Gallery.appendMarkupToGallery(galleryElement, marcup);

        if (!results.length) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        console.log(recipes);

    } catch (err) {
        Notify.failure(err.message);
    }
}



async function handlerSpecificCategoriesBtn(evt, galleryElement) {
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

            const marcup = Gallery.createMarkupCard({ results });
            Gallery.appendMarkupToGallery(galleryElement, marcup);
            if (!results.length) {
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                return;
            }
        } catch (err) {
            Notify.failure(err.message);
        }
    }
}



async function handlerFilterForm(evt) {

    evt.preventDefault();
    console.log(evt);
    searchBtnClicked = false;
    selectes.forEach(select => {
        select.removeEventListener("change", handlerFilterForm);
    });

    selectes.forEach(select => {
        select.addEventListener("change", handlerFilterForm);
    });

    resetButton.addEventListener("click", resetInput);
    const activeCategotyBtn = findActiveBtn();
    const currentCategoty = activeCategotyBtn ? activeCategotyBtn.value : null


    const formData = new FormData(formFilter);
    const searchInput = formData.get("query");
    const timeSelected = formData.get("time");
    const areaSelected = formData.get("area");
    const ingrSelected = formData.get("ingredients")



    const params = {
        category: currentCategoty || null,
        title: searchInput.trim() !== "" ? searchInput.trim() : null,
        time: timeSelected !== "default" ? timeSelected : null,
        area: areaSelected !== "default" ? areaSelected : null,
        ingredients: ingrSelected !== "default" ? ingrSelected : null
    };

    console.log(params);
    try {

        const recipes = await getFilteredRecipes(params);
        const { results } = recipes;
        console.log(results);
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



    } catch (err) {
        Notify.failure(err.message);
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



