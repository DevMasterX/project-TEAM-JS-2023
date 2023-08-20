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
                    <svg class="filter-gallery-item-favorit-btn-icon">
                    <path
                    d="M27.787 6.147c-0.681 -0.681 -1.49 -1.222 -2.38 -1.591s-1.844 -0.559 -2.807 -0.559s-1.917 0.19 -2.807 0.559c-0.89 0.369 -1.699 0.909 -2.38 1.591l-1.413 1.413l-1.413 -1.413c-1.376 -1.376 -3.241 -2.148 -5.187 -2.148s-3.811 0.773 -5.187 2.148c-1.376 1.376 -2.148 3.241 -2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787l11.787 -11.787c0.681 -0.681 1.222 -1.49 1.591 -2.38s0.559 -1.844 0.559 -2.807c0 -0.963 -0.19 -1.917 -0.559 -2.807s-0.909 -1.699 -1.591 -2.38z"
                    fill="none" stroke="#F8F8F8" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
                    stroke-width="2.9091"></path>
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