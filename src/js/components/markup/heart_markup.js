import like from '../../../images/heart_icons/like.svg'
import no_like from '../../../images/heart_icons/no_like.svg'



const heart = {
    like,
    no_like,
}

// сердечко, 
export function markupHeart(data) {
    const {isFavorites: isHeart} = data
    const img = isHeart ? heart.like : heart.no_like

    const html = `
    <div class="favorites__container">
        <img src="${img}" alt="like" class="favorite-heart">
    </div>
    `
    return html
}