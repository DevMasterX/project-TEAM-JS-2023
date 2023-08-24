!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function s(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.6561605a.js","91rZq":"card.df7e8656.png","aZCCQ":"like.15c77fd6.svg","7xGU9":"no_like.af71eca1.svg","7Acci":"star_fill.6e74fda4.svg","lBtJ9":"star_no_fill.3faee62c.svg","gidvd":"empty_favorites.b72238c0.svg","3BYud":"favorites.e87f5f75.js","1XaNB":"favorites.70d3ac86.css"}')),n("aNJCr").getBundleURL("bN78u"),n("iE7OH").resolve("91rZq"),n("9nKIm");let o="recipes";function l(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function c(e){return localStorage.getItem(e)}function f(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var d=n("9nKIm");function v(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var u={};u=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("aZCCQ");var _={};_=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7xGU9");let g={like:t(u),no_like:t(_)};var m={};m=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7Acci");var p={};p=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("lBtJ9");let y={star_fill:t(m),star_no_fill:t(p)};var h={};function C(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${v(e,t)}
            `:v(e,t)).join("");N.ulCategories.innerHTML=i}function E(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:s=!0}=e,o=function(e){let{isFavorites:t}=e,i=t?g.like:g.no_like,r=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return r}({isFavorites:s}),l=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:r}=y,a="",n=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=n?i:r;a+=`
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
    `;return c})(e)).join("");N.ulCards.innerHTML=t}function b({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&(0,d.elementstyle)(N.hero_favorite,"display","none"),(0,d.elementstyle)(N.categoryDiv,"display","none"),(0,d.elementstyle)(N.cardsDiv,"display","none"),(0,d.elementstyle)(N.paginationDiv,"display","none"),N.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function H(e){let t=[...e.parentNode.children];t.map(e=>(0,d.removeClass)(e,"active")),(0,d.addClass)(e,"active")}h=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("gidvd");var d=n("9nKIm");let N={favorites_container:(0,d.findElement)(".my-favorites__container"),hero_favorite:(0,d.findElement)(".my-favorites__hero"),categoryDiv:(0,d.findElement)(".my-favorites__category"),cardsDiv:(0,d.findElement)(".my-favorites__cards"),ulCategories:(0,d.findElement)(".my-favorites-category__list"),ulCards:(0,d.findElement)(".my-favorites-cards__list"),paginationDiv:(0,d.findElement)(".pagination-wrap")},w={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},x=f(c(o));x?w.favorites=x:l(o,w.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&w.favorites?.length}),w.favorites?.length?(w.categories=s(w.favorites),C(w.categories,w.currentCategories),E(w.favorites),N.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){w.favorites=w.favorites.filter(t=>t.id!==e),l(o,w.favorites),t.remove()}({id:e.id,element:e}),f(c(o))?.length||b({isEmpty:!0}),w.categories=s(w.favorites),C(w.categories),w.categories.includes(w.currentCategories)){let e=[...N.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==w.currentCategories.trim().toLowerCase());H(e)}else console.log(w),C(w.categories),E(w.all())}}),N.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=w.all();H(t),E(e)}else{w.currentCategories=i;let e=w.filter(e=>e.category.toLowerCase()==i.toLowerCase());H(t),E(e)}}})):b({isEmpty:!0}),n("b7ONl"),n("2hTvb"),n("jcFG7"),n("9VC5X"),n("dmpts")}();
//# sourceMappingURL=favorites.6561605a.js.map
