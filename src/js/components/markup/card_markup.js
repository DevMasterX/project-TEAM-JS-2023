
import {markupHeart, markupRating} from '../markup'

export function markupCard(card) {

    const { id_card, img, title, sub_title, rating, isFavorites } = card;
    // const {id, img, name: title, description: sub_title, isFavorites = true} = card
    const _img = !!img.path ? img.path : img;
    const heartHtml = markupHeart({isFavorites})
    const ratingHtml = markupRating({rating})

    const cardHtml = `
    <li class="card__item" id="${id_card}">

        <img src='${_img}' loading="lazy" alt="${title}" class="card__img" />
        
        ${heartHtml}

        <div class="card__info">
            <div class="card-info__container">

                <div class="card-info__description">
                    <h3 class="card-info__title">${title}</h3>
                    <p class="card-info__sub-title">
                        ${sub_title}
                    </p>
                </div>

                <div class="card-info__actions">
                    <div class="card-info-actions__container">

                        <div class="card-info-actions__rating">
                            <div class="card-info-actions-rating__container">
                                <!-- JS star rating -->
                                ${ratingHtml}
                            </div>
                        </div>

                        <div class="card-info-actions__see-description">
                            <button class="card-info-actions__see-description-btn see-description-btn">See resipe</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </li>
    `;

    return cardHtml
}