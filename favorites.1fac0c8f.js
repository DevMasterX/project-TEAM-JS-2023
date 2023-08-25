!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function s(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.1fac0c8f.js","7Acci":"star_fill.6e74fda4.svg","lBtJ9":"star_no_fill.3faee62c.svg","aZCCQ":"like.15c77fd6.svg","7xGU9":"no_like.af71eca1.svg","gidvd":"empty_favorites.b72238c0.svg","1XaNB":"favorites.28088e30.css","7CwvE":"index.5707a0a5.js","4okzo":"favorites.5f193caa.js","vSyMg":"favorites.c4ff2b70.js"}')),n("kvC6y"),n("9nKIm");let o="recipes";function l(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function c(e){return localStorage.getItem(e)}function d(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var f=n("9nKIm");function v(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var u={};u=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("aZCCQ");var m={};m=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7xGU9");let g={like:t(u),no_like:t(m)};var _={};_=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7Acci");var p={};p=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("lBtJ9");let y={star_fill:t(_),star_no_fill:t(p)};var h={};function E(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${v(e,t)}
            `:v(e,t)).join("");R.ulCategories.innerHTML=i}function C(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:s=!0}=e,o=function(e){let{isFavorites:t}=e,i=t?g.like:g.no_like,r=`
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
                            <button class="card-info-actions__see-description-btn see-description-btn" id="${t}">See resipe</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </li>
    `;return c})(e)).join("");R.ulCards.innerHTML=t}function b({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&(0,f.elementstyle)(R.hero_favorite,"display","none"),(0,f.elementstyle)(R.categoryDiv,"display","none"),(0,f.elementstyle)(R.cardsDiv,"display","none"),(0,f.elementstyle)(R.paginationDiv,"display","none"),R.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function H(e){let t=[...e.parentNode.children];t.map(e=>(0,f.removeClass)(e,"active")),(0,f.addClass)(e,"active")}h=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("gidvd");var f=n("9nKIm"),L=n("b7ONl");let $=document.querySelector("body"),S=document.querySelector(".r-modal-content"),k=document.querySelector(".r-modal-backdrop"),N="";function w(e){e.target.id&&(N=e.target.id,(0,L.getRecipeDetails)(N).then(e=>S.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:r,video:a,preview:n,rating:s,tags:o,time:l}=e,c="";o.forEach(e=>{c+=`<span class="r-modal-tag">#${e}</span>`});let d="";return r.forEach(e=>{d+=`<div class="r-modal-ingerdients-name">${e.name}<div class="r-modal-ingerdients-value">${e.measure}</div></div>`}),`
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
    <p class="r-modal-instructions">${i}</p>`}(e))).catch(e=>console.log(e)),k.classList.remove("visually-hidden"),$.classList.add("no-scroll"),document.addEventListener("keydown",A),k.addEventListener("click",x))}function x(e){k.classList.add("visually-hidden"),$.classList.remove("no-scroll"),S.innerHTML="",document.removeEventListener("keydown",A),k.removeEventListener("click",x)}function A(e){"Escape"===e.key&&x()}let R={favorites_container:(0,f.findElement)(".my-favorites__container"),hero_favorite:(0,f.findElement)(".my-favorites__hero"),categoryDiv:(0,f.findElement)(".my-favorites__category"),cardsDiv:(0,f.findElement)(".my-favorites__cards"),ulCategories:(0,f.findElement)(".my-favorites-category__list"),ulCards:(0,f.findElement)(".my-favorites-cards__list"),paginationDiv:(0,f.findElement)(".pagination-wrap"),modalDeleteBtn:(0,f.findElement)(".r-modal-favorite-btn")};(0,f.insertHTMLIntoElement)(R.modalDeleteBtn,"Delete Favor");let O={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},F=d(c(o));function D(e,t){if(!function({id:e,element:t}){O.favorites=O.favorites.filter(t=>t.id!==e),l(o,O.favorites),t.remove()}({id:e.id,element:e}),d(c(o))?.length||b({isEmpty:!0}),O.categories=s(O.favorites),E(O.categories),O.categories.includes(O.currentCategories)){let e=[...R.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==O.currentCategories.trim().toLowerCase());H(e)}else E(O.categories),C(O.all()),j(O.favorites)}function j(e=[]){e.length<12?(0,f.elementstyle)(R.paginationDiv,"display","none"):(0,f.elementstyle)(R.paginationDiv,"display","block")}F?O.favorites=F:l(o,O.favorites),O.favorites?.length?(O.categories=s(O.favorites),E(O.categories,O.currentCategories),C(O.favorites),j(O.favorites),function(){let e=document.querySelector(".my-favorites-cards__list");e.addEventListener("click",w)}(),R.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");D(e)}}),R.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=O.all();H(t),C(e),j(O.favorites)}else{O.currentCategories=i;let e=O.filter(e=>e.category.toLowerCase()==i.toLowerCase());H(t),C(e),j(e)}}}),R.modalDeleteBtn.addEventListener("click",function(e){if(N){let e=document.querySelector(`[id='${N}']`);D(e)}})):b({isEmpty:!0}),n("b7ONl"),n("jcFG7"),n("9VC5X"),n("lxY1m"),n("dmpts"),n("ekC86"),n("jjcsu")}();
//# sourceMappingURL=favorites.1fac0c8f.js.map
