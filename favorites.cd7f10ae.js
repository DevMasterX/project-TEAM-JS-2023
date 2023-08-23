!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function s(e){return document.querySelector(e)}function o(e,t,i){e.style[t]=i}function c(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.cd7f10ae.js","91rZq":"card.df7e8656.png","aZCCQ":"like.15c77fd6.svg","7xGU9":"no_like.af71eca1.svg","7Acci":"star_fill.6e74fda4.svg","lBtJ9":"star_no_fill.3faee62c.svg","gidvd":"empty_favorites.b72238c0.svg","cCSGR":"favorites.dc85ba12.js","1XaNB":"favorites.5d39420c.css"}')),n("aNJCr").getBundleURL("bN78u"),n("iE7OH").resolve("91rZq");let l="recipes";function f(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function d(e){return localStorage.getItem(e)}function v(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}function u(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var _={};_=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("aZCCQ");var g={};g=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7xGU9");let m={like:t(_),no_like:t(g)};var p={};p=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7Acci");var y={};y=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("lBtJ9");let h={star_fill:t(p),star_no_fill:t(y)};var C={};function b(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${u(e,t)}
            `:u(e,t)).join("");w.ulCategories.innerHTML=i}function H(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:s=!0}=e,o=function(e){let{isFavorites:t}=e,i=t?m.like:m.no_like,r=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return r}({isFavorites:s}),c=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:r}=h,a="",n=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=n?i:r;a+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let s=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${a}
    </div>
        `;return s}({rating:n}),l=`
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
    `;return l})(e)).join("");w.ulCards.innerHTML=t}function E({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&o(w.hero_favorite,"display","none"),o(w.categoryDiv,"display","none"),o(w.cardsDiv,"display","none"),o(w.paginationDiv,"display","none"),w.favorites_container.innerHTML+=function(){let e=t(C),i=`
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
        </div>`;return i}())}function N(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}C=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("gidvd");let w={favorites_container:s(".my-favorites__container"),hero_favorite:s(".my-favorites__hero"),categoryDiv:s(".my-favorites__category"),cardsDiv:s(".my-favorites__cards"),ulCategories:s(".my-favorites-category__list"),ulCards:s(".my-favorites-cards__list"),paginationDiv:s(".pagination-wrap")},L={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},x=v(d(l));x?L.favorites=x:f(l,L.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&L.favorites?.length}),L.favorites?.length?(L.categories=c(L.favorites),b(L.categories,L.currentCategories),H(L.favorites),w.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){L.favorites=L.favorites.filter(t=>t.id!==e),f(l,L.favorites),t.remove()}({id:e.id,element:e}),v(d(l))?.length||E({isEmpty:!0}),L.categories=c(L.favorites),b(L.categories),L.categories.includes(L.currentCategories)){let e=[...w.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==L.currentCategories.trim().toLowerCase());N(e)}else console.log(L),b(L.categories),H(L.all())}}),w.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=L.all();N(t),H(e)}else{L.currentCategories=i;let e=L.filter(e=>e.category.toLowerCase()==i.toLowerCase());N(t),H(e)}}})):E({isEmpty:!0}),n("b7ONl"),n("iakh3"),n("2hTvb"),n("jcFG7"),n("9VC5X"),n("dmpts")}();
//# sourceMappingURL=favorites.cd7f10ae.js.map
