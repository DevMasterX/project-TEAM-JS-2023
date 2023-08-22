function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=i.parcelRequired7c6;function o(e){return document.querySelector(e)}function n(e,t,i){e.style[t]=i}function c(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},i.parcelRequired7c6=s),s.register("kyEFX",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,s={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},a=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"iGlSd":"favorites.3b4772f8.js","5RfUc":"card.df7e8656.png","9SZS3":"like.15c77fd6.svg","jL7vR":"no_like.af71eca1.svg","cgZ4r":"star_fill.6e74fda4.svg","3yHF3":"star_no_fill.3faee62c.svg","6smQV":"empty_favorites.b72238c0.svg","28WDY":"favorites.2832244f.js","1XaNB":"favorites.ed96574a.css"}')),new URL(s("kyEFX").resolve("5RfUc"),import.meta.url).toString();const l="recipes";function f(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function d(e){return localStorage.getItem(e)}function v(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}function _(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var u={};u=new URL(s("kyEFX").resolve("9SZS3"),import.meta.url).toString();var g={};g=new URL(s("kyEFX").resolve("jL7vR"),import.meta.url).toString();const m={like:t(u),no_like:t(g)};var y={};y=new URL(s("kyEFX").resolve("cgZ4r"),import.meta.url).toString();var p={};p=new URL(s("kyEFX").resolve("3yHF3"),import.meta.url).toString();const h={star_fill:t(y),star_no_fill:t(p)};var S={};function w(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${_(e,t)}
            `:_(e,t)).join("");H.ulCategories.innerHTML=i}function E(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:s,isFavorites:o=!0}=e,n=function(e){let{isFavorites:t}=e,i=t?m.like:m.no_like,r=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return r}({isFavorites:o}),c=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:r}=h,a="",s=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=s?i:r;a+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let o=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${a}
    </div>
        `;return o}({rating:s}),l=`
    <li class="card__item" id="${t}">

        <img src='${i}' loading="lazy" alt="${r}" class="card__img" />
        
        ${n}

        <div class="card__info">
            <div class="card-info__container">

                <div class="card-info__description">
                    <h3 class="card-info__title">${r}</h3>
                    <p class="card-info__sub-title">
                        ${a}
                    </p>
                </div>

                <div class="card-info__actions">
                    <div class="card-info-actions__container">

                        <div class="card-info-actions__rating">
                            <div class="card-info-actions-rating__container">
                                <!-- JS star rating -->
                                ${c}
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
    `;return l})(e)).join("");H.ulCards.innerHTML=t}function L({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&n(H.hero_favorite,"display","none"),n(H.categoryDiv,"display","none"),n(H.cardsDiv,"display","none"),n(H.paginationDiv,"display","none"),H.favorites_container.innerHTML+=function(){let e=t(S),i=`
        <div class="my-faforites__empty">
            <div class="my-favorites-empty__container">
                <div class="my-favorites__empty-svg-container">
                    <img src="${e}" alt="no-testy" class="my-favorites__empty-svg empty__svg">
                </div>
                <div class="my-favorites-empty__text-container">
                    <h2 class="my-favorites-empty__title">
                        It appears that you haven't added 
                        any recipes to your favorites yet. 
                        To get started, you can add recipes 
                        that you like to your favorites for 
                        easier access in the future.
                    </h2>
                </div>
            </div>
        </div>`;return i}())}function b(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}S=new URL(s("kyEFX").resolve("6smQV"),import.meta.url).toString();const H={favorites_container:o(".my-favorites__container"),hero_favorite:o(".my-favorites__hero"),categoryDiv:o(".my-favorites__category"),cardsDiv:o(".my-favorites__cards"),ulCategories:o(".my-favorites-category__list"),ulCards:o(".my-favorites-cards__list"),paginationDiv:o(".pagination-wrap")},F={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},R=v(d(l));R?F.favorites=R:f(l,F.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&F.favorites?.length}),F.favorites?.length?(F.categories=c(F.favorites),w(F.categories,F.currentCategories),E(F.favorites),H.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){F.favorites=F.favorites.filter(t=>t.id!==e),f(l,F.favorites),t.remove()}({id:e.id,element:e}),v(d(l))?.length||L({isEmpty:!0}),F.categories=c(F.favorites),w(F.categories),F.categories.includes(F.currentCategories)){let e=[...H.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==F.currentCategories.trim().toLowerCase());b(e)}else console.log(F),w(F.categories),E(F.all())}}),H.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=F.all();b(t),E(e)}else{F.currentCategories=i;let e=F.filter(e=>e.category.toLowerCase()==i.toLowerCase());b(t),E(e)}}})):L({isEmpty:!0}),s("7rYDH"),s("8awsR"),s("8igf3"),s("2nhTy"),s("4S0r6"),s("9RVUD");
//# sourceMappingURL=favorites.3b4772f8.js.map
