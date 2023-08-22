!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;function o(e){return document.querySelector(e)}function s(e,t,i){e.style[t]=i}function l(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.02378a64.js","91rZq":"card.df7e8656.png","aZCCQ":"like.15c77fd6.svg","7xGU9":"no_like.af71eca1.svg","7Acci":"star_fill.6e74fda4.svg","lBtJ9":"star_no_fill.3faee62c.svg","gidvd":"empty_favorites.b72238c0.svg","1XaNB":"favorites.c0450d24.css","5dooy":"favorites.8486d50b.js"}')),n("aNJCr").getBundleURL("bN78u"),n("iE7OH").resolve("91rZq");let c="recipes";function d(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function f(e){return localStorage.getItem(e)}function u(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}function v(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var m={};m=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("aZCCQ");var g={};g=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7xGU9");let _={like:t(m),no_like:t(g)};var p={};p=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7Acci");var y={};y=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("lBtJ9");let h={star_fill:t(p),star_no_fill:t(y)};var b={};function E(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${v(e,t)}
            `:v(e,t)).join("");S.ulCategories.innerHTML=i}function L(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:r,description:a,rating:n,isFavorites:o=!0}=e,s=function(e){let{isFavorites:t}=e,i=t?_.like:_.no_like,r=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return r}({isFavorites:o}),l=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:r}=h,a="",n=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=n?i:r;a+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let o=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${a}
    </div>
        `;return o}({rating:n}),c=`
    <li class="card__item" id="${t}">

        <img src='${i}' loading="lazy" alt="${r}" class="card__img" />
        
        ${s}

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
    `;return c})(e)).join("");S.ulCards.innerHTML=t}function C({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&s(S.hero_favorite,"display","none"),s(S.categoryDiv,"display","none"),s(S.cardsDiv,"display","none"),s(S.paginationDiv,"display","none"),S.favorites_container.innerHTML+=function(){let e=t(b),i=`
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
        </div>`;return i}())}function w(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}b=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("gidvd");let S={favorites_container:o(".my-favorites__container"),hero_favorite:o(".my-favorites__hero"),categoryDiv:o(".my-favorites__category"),cardsDiv:o(".my-favorites__cards"),ulCategories:o(".my-favorites-category__list"),ulCards:o(".my-favorites-cards__list"),paginationDiv:o(".pagination-wrap")},k={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},H=u(f(c));H?k.favorites=H:d(c,k.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&k.favorites?.length}),k.favorites?.length?(k.categories=l(k.favorites),E(k.categories,k.currentCategories),L(k.favorites),S.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){k.favorites=k.favorites.filter(t=>t.id!==e),d(c,k.favorites),t.remove()}({id:e.id,element:e}),u(f(c))?.length||C({isEmpty:!0}),k.categories=l(k.favorites),E(k.categories),k.categories.includes(k.currentCategories)){let e=[...S.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==k.currentCategories.trim().toLowerCase());w(e)}else console.log(k),E(k.categories),L(k.all())}}),S.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),r=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&r){if("all categories"===i){let e=k.all();w(t),L(e)}else{k.currentCategories=i;let e=k.filter(e=>e.category.toLowerCase()==i.toLowerCase());w(t),L(e)}}})):C({isEmpty:!0}),n("b7ONl"),document.addEventListener("DOMContentLoaded",function(){let e;(e=document.querySelector(".show-btn"))&&(e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>3?e.classList.add("is-visible"):e.classList.remove("is-visible")})),function(){let{feedbackForm:e,emailInput:t}=function(){let e=document.getElementById("feedbackForm")||document.querySelector(".feedback-section form"),t=e?e.querySelector('input[type="email"]'):null;return{feedbackForm:e,emailInput:t}}(),i=localStorage.getItem("userEmail");i&&t&&(t.value=i),e&&t&&e.addEventListener("submit",function(e){if(e.preventDefault(),!$.test(t.value)){alert("Please enter a valid email address.");return}localStorage.setItem("userEmail",t.value),t.value="",alert("Thank you for sending your email address!")})}()});let $=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;var N=n("b7ONl");document.querySelector("body");let x=document.querySelector(".r-modal"),A=document.querySelector(".r-modal-backdrop");function O(e){A.classList.add("visually-hidden"),document.removeEventListener("keydown",R),A.removeEventListener("click",O)}function R(e){"Escape"===e.key&&O()}document.querySelector(".filter-gallery-item-btn"),document.addEventListener("keydown",R),A.addEventListener("click",O),(0,N.getRecipeDetails)("6462a8f74c3d0ddd28897fc1").then(e=>x.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:r,video:a,preview:n,rating:o,tags:s,time:l}=e,c="";s.forEach(e=>{c+=`<span class="r-modal-tag">#${e}</span>`});let d="";return r.forEach(e=>{d+=`<div class="r-modal-ingerdients-name">${e.name}<div class="r-modal-ingerdients-value">${e.measure}</div></div>`}),`
    <h1 class="r-modal-name">${t.toUpperCase()}</h1>
    <video class="r-modal-video"
    src="${a}"
    poster="${n}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div class="r-modal-info-container"><div class="r-modal-tags">${c}</div>
    <div class="r-modal-rating-container"><div class="r-modal-rating">${o}</div>
    <div class="r-modal-rating-stars-icon">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    <div class="r-modal-time">${l} min</div></div></div>
    <div class="r-modal-ingerdients-container">${d}</div>
    <p class="r-modal-instructions">${i}</p>`}(e))).catch(e=>console.log(e)),localStorage.setItem("theme","light-theme");let F=document.getElementById("theme-toggle"),I=localStorage.getItem("theme");I&&document.body.classList.add(I),"dark-theme"===I&&(F.checked=!0),F.addEventListener("click",()=>{document.body.classList.contains("dark-theme")?(document.body.classList.replace("dark-theme","light-theme"),localStorage.setItem("theme","light-theme")):(document.body.classList.replace("light-theme","dark-theme"),localStorage.setItem("theme","dark-theme"))})}();
//# sourceMappingURL=favorites.02378a64.js.map
