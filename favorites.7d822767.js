function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function s(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("kyEFX",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.7d822767.js","5RfUc":"card.df7e8656.png","9SZS3":"like.15c77fd6.svg","jL7vR":"no_like.af71eca1.svg","cgZ4r":"star_fill.6e74fda4.svg","3yHF3":"star_no_fill.3faee62c.svg","6smQV":"empty_favorites.b72238c0.svg","aRHwr":"favorites.c70ef13d.js","1XaNB":"favorites.c086e373.css"}')),new URL(n("kyEFX").resolve("5RfUc"),import.meta.url).toString(),n("lhU7H");const o="recipes";function l(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function c(e){return localStorage.getItem(e)}function d(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var f=n("lhU7H");function v(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var _={};_=new URL(n("kyEFX").resolve("9SZS3"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("jL7vR"),import.meta.url).toString();const u={like:t(_),no_like:t(g)};var m={};m=new URL(n("kyEFX").resolve("cgZ4r"),import.meta.url).toString();var y={};y=new URL(n("kyEFX").resolve("3yHF3"),import.meta.url).toString();const p={star_fill:t(m),star_no_fill:t(y)};var h={};function E(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${v(e,t)}
            `:v(e,t)).join("");C.ulCategories.innerHTML=i}function S(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:s=!0}=e,o=function(e){let{isFavorites:t}=e,i=t?u.like:u.no_like,r=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return r}({isFavorites:s}),l=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:r}=p,a="",n=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=n?i:r;a+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let s=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${a}
    </div>
        `;return s}({rating:n}),c=`
    <li class="card__item" id="${t}">

        <img src='${i}' loading="lazy" alt="${r}" class="card__img" />
        
        ${o}

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
                                ${l}
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
    `;return c})(e)).join("");C.ulCards.innerHTML=t}function w({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&(0,f.elementstyle)(C.hero_favorite,"display","none"),(0,f.elementstyle)(C.categoryDiv,"display","none"),(0,f.elementstyle)(C.cardsDiv,"display","none"),(0,f.elementstyle)(C.paginationDiv,"display","none"),C.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function H(e){let t=[...e.parentNode.children];t.map(e=>(0,f.removeClass)(e,"active")),(0,f.addClass)(e,"active")}h=new URL(n("kyEFX").resolve("6smQV"),import.meta.url).toString();var f=n("lhU7H");const C={favorites_container:(0,f.findElement)(".my-favorites__container"),hero_favorite:(0,f.findElement)(".my-favorites__hero"),categoryDiv:(0,f.findElement)(".my-favorites__category"),cardsDiv:(0,f.findElement)(".my-favorites__cards"),ulCategories:(0,f.findElement)(".my-favorites-category__list"),ulCards:(0,f.findElement)(".my-favorites-cards__list"),paginationDiv:(0,f.findElement)(".pagination-wrap")},F={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},L=d(c(o));L?F.favorites=L:l(o,F.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&F.favorites?.length}),F.favorites?.length?(F.categories=s(F.favorites),E(F.categories,F.currentCategories),S(F.favorites),C.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){F.favorites=F.favorites.filter(t=>t.id!==e),l(o,F.favorites),t.remove()}({id:e.id,element:e}),d(c(o))?.length||w({isEmpty:!0}),F.categories=s(F.favorites),E(F.categories),F.categories.includes(F.currentCategories)){let e=[...C.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==F.currentCategories.trim().toLowerCase());H(e)}else console.log(F),E(F.categories),S(F.all())}}),C.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=F.all();H(t),S(e)}else{F.currentCategories=i;let e=F.filter(e=>e.category.toLowerCase()==i.toLowerCase());H(t),S(e)}}})):w({isEmpty:!0}),n("7rYDH"),n("8igf3"),n("2nhTy"),n("4S0r6"),n("9RVUD");
//# sourceMappingURL=favorites.7d822767.js.map
