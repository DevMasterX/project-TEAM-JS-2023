import { Notify } from "notiflix";
import { getFilteredRecipes } from "./api"
import { clearFilters } from "./filter";
import Gallery from './gallery';


const formFilter = document.querySelector(".filter-form");
const resetButton = document.querySelector(".filter-input-reset-btn");



async function handlerAllCategoriesBtn(evt, galleryElement) {
    evt.preventDefault();
    clearFilters()


    try {
        const recipes = await getFilteredRecipes();
        const { results } = recipes;
        // createMurcupGallery(recipes);
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


    if (evt.target.classList.contains("js-categories-item-btn")) {

        const currentBtn = evt.target;

        const params = {
            "category": currentBtn.value
        }


        try {
            const recipes = await getFilteredRecipes(params);
            const { results } = recipes;
            // createMurcupGallery(recipes);
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

    console.log(params);
    try {

        // тут треба зробити запит на локалсторидж??
        const recipes = await getFilteredRecipes(params);
        const { results } = recipes;



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


export {
    handlerAllCategoriesBtn,
    handlerSpecificCategoriesBtn,
    handlerFilterForm
}



