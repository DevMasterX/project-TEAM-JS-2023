import star_fill from '../../../images/rating_icons/star_fill.svg'
import star_no_fill from '../../../images/rating_icons/star_no_fill.svg'

export const stars = {
    star_fill,
    star_no_fill,
}

export function markupRating(data) {

    const { rating: ratingText} = data

    const {star_fill, star_no_fill,} = stars

    let starHtml = ""
    const starRating = Math.floor(ratingText);

    for (let i = 1; i <= 5; i++) {

        const starImg = i <= starRating ? star_fill : star_no_fill

        starHtml += `
        <span class="card-info-actions-rating__star-container">
            <img src="${starImg}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`
    }

    const html = `
    <p class="card-info-actions-rating__text">${ratingText}</p>
    <div class="card-info-actions-rating__stars">
        ${starHtml}
    </div>
        `;
    return html
}