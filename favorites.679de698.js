function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function s(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("kyEFX",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.679de698.js","9SZS3":"like.15c77fd6.svg","jL7vR":"no_like.af71eca1.svg","cgZ4r":"star_fill.6e74fda4.svg","3yHF3":"star_no_fill.3faee62c.svg","6smQV":"empty_favorites.b72238c0.svg","1XaNB":"favorites.2b30fe34.css","hWbFV":"favorites.3f47f230.js","pLns1":"favorites.c9bfb142.js"}')),n("gjiCh"),n("lhU7H");const o="recipes";function l(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function c(e){return localStorage.getItem(e)}function d(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var v=n("lhU7H");function f(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var m={};m=new URL(n("kyEFX").resolve("9SZS3"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("jL7vR"),import.meta.url).toString();const g={like:t(m),no_like:t(u)};var _={};_=new URL(n("kyEFX").resolve("cgZ4r"),import.meta.url).toString();var y={};y=new URL(n("kyEFX").resolve("3yHF3"),import.meta.url).toString();const p={star_fill:t(_),star_no_fill:t(y)};var h={};function E(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${f(e,t)}
            `:f(e,t)).join("");A.ulCategories.innerHTML=i}function L(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:s=!0}=e,o=function(e){let{isFavorites:t}=e,i=t?g.like:g.no_like,r=`
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
                            <button class="card-info-actions__see-description-btn see-description-btn" id="${t}">See resipe</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </li>
    `;return c})(e)).join("");A.ulCards.innerHTML=t}function S({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&(0,v.elementstyle)(A.hero_favorite,"display","none"),(0,v.elementstyle)(A.categoryDiv,"display","none"),(0,v.elementstyle)(A.cardsDiv,"display","none"),(0,v.elementstyle)(A.paginationDiv,"display","none"),A.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function C({id:e,element:t}){U.favorites=U.favorites.filter(t=>t.id!==e),l(o,U.favorites),t.remove()}function H(e){let t=[...e.parentNode.children];t.map(e=>(0,v.removeClass)(e,"active")),(0,v.addClass)(e,"active")}h=new URL(n("kyEFX").resolve("6smQV"),import.meta.url).toString();var v=n("lhU7H"),b=n("7rYDH");const k=document.querySelector("body"),$=document.querySelector(".r-modal-content"),w=document.querySelector(".r-modal-backdrop");let F="";function R(e){e.target.id&&(F=e.target.id,(0,b.getRecipeDetails)(F).then(e=>$.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:r,video:a,preview:n,rating:s,tags:o,time:l}=e,c="";o.forEach(e=>{c+=`<span class="r-modal-tag">#${e}</span>`});let d="";return r.forEach(e=>{d+=`<div class="r-modal-ingerdients-name">${e.name}<div class="r-modal-ingerdients-value">${e.measure}</div></div>`}),`
    <h2 class="r-modal-name">${t.toUpperCase()}</h2>
    <video class="r-modal-video"
    src="${a}"
    poster="${n}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div class="r-modal-info-container"><div class="r-modal-tags">${c}</div>
    <div class="r-modal-rating-container"><div class="r-modal-rating">${s}</div>
    <div class="r-modal-rating-stars-icon">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    <div class="r-modal-time">${l} min</div></div></div>
    <div class="r-modal-ingerdients-container">${d}</div>
    <p class="r-modal-instructions">${i}</p>`}(e))).catch(e=>console.log(e)),w.classList.remove("visually-hidden"),k.classList.add("no-scroll"),document.addEventListener("keydown",x),w.addEventListener("click",D))}function D(e){w.classList.add("visually-hidden"),k.classList.remove("no-scroll"),$.innerHTML="",document.removeEventListener("keydown",x),w.removeEventListener("click",D)}function x(e){"Escape"===e.key&&D()}const A={favorites_container:(0,v.findElement)(".my-favorites__container"),hero_favorite:(0,v.findElement)(".my-favorites__hero"),categoryDiv:(0,v.findElement)(".my-favorites__category"),cardsDiv:(0,v.findElement)(".my-favorites__cards"),ulCategories:(0,v.findElement)(".my-favorites-category__list"),ulCards:(0,v.findElement)(".my-favorites-cards__list"),paginationDiv:(0,v.findElement)(".pagination-wrap"),modalDeleteBtn:(0,v.findElement)(".r-modal-favorite-btn")};(0,v.insertHTMLIntoElement)(A.modalDeleteBtn,"Delete Favor");const U={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},j=d(c(o));function M(e=[]){e.length<12?(0,v.elementstyle)(A.paginationDiv,"display","none"):(0,v.elementstyle)(A.paginationDiv,"display","block")}j?U.favorites=j:l(o,U.favorites),U.favorites?.length?(U.categories=s(U.favorites),E(U.categories,U.currentCategories),L(U.favorites),M(U.favorites),function(){let e=document.querySelector(".my-favorites-cards__list");e.addEventListener("click",R)}(),A.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(C({id:e.id,element:e}),d(c(o))?.length||S({isEmpty:!0}),U.categories=s(U.favorites),E(U.categories),U.categories.includes(U.currentCategories)){let e=[...A.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==U.currentCategories.trim().toLowerCase());H(e)}else console.log(U),E(U.categories),L(U.all()),M(U.favorites)}}),A.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=U.all();H(t),L(e),M(U.favorites)}else{U.currentCategories=i;let e=U.filter(e=>e.category.toLowerCase()==i.toLowerCase());H(t),L(e),M(e)}}}),A.modalDeleteBtn.addEventListener("click",function(e){if(F){let e=document.querySelector(`[id='${F}']`);if(C({id:e.id,element:e}),d(c(o))?.length||S({isEmpty:!0}),U.categories=s(U.favorites),E(U.categories),U.categories.includes(U.currentCategories)){let e=[...A.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==U.currentCategories.trim().toLowerCase());H(e)}else console.log(U),E(U.categories),L(U.all()),M(U.favorites)}})):S({isEmpty:!0}),n("7rYDH"),n("2nhTy"),n("4S0r6"),n("iQg2E"),n("9RVUD"),n("8BGGW");
//# sourceMappingURL=favorites.679de698.js.map
