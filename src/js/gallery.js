import star_fill from '../images/rating_icons/star_fill.svg'
import star_no_fill from '../images/rating_icons/star_no_fill.svg'

export const stars = {
    star_fill,
    star_no_fill,
}

export function markupRating(rating) {



    const { star_fill, star_no_fill, } = stars

    let starHtml = ""
    const starRating = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {

        const starImg = i <= starRating ? star_fill : star_no_fill

        starHtml += `
        <span class="gallery-star__stars">
            <img src="${starImg}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`
    }

    const html = `
   
    <div class="gallery-star__stars">
        ${starHtml}
    </div>
        `;
    return html
}




class Gallery {
    constructor(galleryElement) {
        this.galleryElement = galleryElement;
    }

    static createMarkupCard({ results }) {

        const markupCard = results.map(({ description, preview, rating, title, _id: idRecip, category }) => {
            const starsHtml = markupRating(rating);

            return ` <li class="filter-gallery-item" data-attribute="${category}" id="${idRecip}">
            <img class="filter-gallery-item-photo" src="${preview}" alt="${title}" width="250" height="287">
            <div class="filter-gallery-item-content">
                <button type="button" class="filter-gallery-item-favorit-btn">
                
                </button>
                <h3 class="filter-gallery-item-tittle" >${title}</h3>
                <p class="filter-gallery-item-description">${description}</p>
                <div class="filter-gallery-item-bottom">
                <div class="filter-gallery-item-rating-wrap">
                    <p class="filter-gallery-item-rating-value">${rating}</p>
                    <div class="filter-gallery-item-rating-icons">${starsHtml}</div>
                </div>
                <button class="filter-gallery-item-btn" type="button" id="${idRecip}">See recipe</button>
            </div>
            </div>
        </li>`
        }).join("");

        return markupCard;


    }



    static appendMarkupToGallery(galleryElement, marcup) {
        galleryElement.innerHTML = marcup;
    }

    static appendMarkupBeforeGallery(galleryElement, marcup) {
        galleryElement.insertAdjacentHTML("beforebegin", marcup);
    }

}


//ЯК ВИКОРИСТУВАВАТИ
// const results = твої результати з сервера

//  Створи розмітку карточок за допомогою  createMarkupCard
// const marcup = Gallery.createMarkupCard({ results });

//  Додай розмітку до галереї за допомогою appendMarkupToGallery
// Gallery.appendMarkupBeforeGallery(yourGalleryElement, marcup);


export default Gallery;