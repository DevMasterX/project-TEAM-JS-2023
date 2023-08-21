class Gallery {
    constructor(galleryElement) {
        this.galleryElement = galleryElement;
    }

    static createMarkupCard({ results }) {
        const markupCard = results.map(({ description, preview, rating, title, _id: idRecip }) => {
            return ` <li class="filter-gallery-item" id="${idRecip}">
            <img class="filter-gallery-item-photo" src="${preview}" alt="${title}" width="250" height="287">
            <div class="filter-gallery-item-content">
                <button type="button" class="filter-gallery-item-favorit-btn">
                <svg class="filter-gallery-item-favorit-btn-icon" viewBox="0 0 22 22" width="22" height="22">
        <path
            d="M11 19.5C11 19.5 1 13 1 7.5C1 3.36 4.36 0 8.5 0C10.21 0 11.84 0.83 12.5 2C13.16 0.83 14.79 0 16.5 0C20.64 0 24 3.36 24 7.5C24 13 14 19.5 14 19.5C14 19.5 11 19.5 11 19.5Z"
            fill="none" stroke="#FFFFFF" stroke-width="1.5"></path>
    </svg>
                </button>
                <h3 class="filter-gallery-item-tittle" >${title}</h3>
                <p class="filter-gallery-item-description">${description}</p>
                <div class="filter-gallery-item-bottom">
                <div class="filter-gallery-item-rating-wrap">
                    <p class="filter-gallery-item-rating-value">${rating}</p>
                    <div class="filter-gallery-item-rating-icons">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
                </div>
                <button class="filter-gallery-item-btn" type="button">See recipe</button>
            </div>
            </div>
        </li>`
        }).join("");

        return markupCard;
        console.log(preview);

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