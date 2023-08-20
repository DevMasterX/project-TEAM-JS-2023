import { Notify } from "notiflix";
import { getFilteredRecipes } from "./api"
import { clearFilters } from "./filter";
import Gallery from './gallery';


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

export {
    handlerAllCategoriesBtn,
    handlerSpecificCategoriesBtn
}



