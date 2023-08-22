function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=i.parcelRequired7c6;function n(e){return document.querySelector(e)}function s(e,t,i){e.style[t]=i}function l(e){let t=[...e].map(e=>e.category?.toLowerCase());return[...new Set(t)]}null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},i.parcelRequired7c6=o),o.register("kyEFX",function(t,i){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var a,r,o={};a=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},r=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("kyEFX").register(JSON.parse('{"iGlSd":"favorites.396a51ef.js","5RfUc":"card.df7e8656.png","9SZS3":"like.15c77fd6.svg","jL7vR":"no_like.af71eca1.svg","cgZ4r":"star_fill.6e74fda4.svg","3yHF3":"star_no_fill.3faee62c.svg","6smQV":"empty_favorites.b72238c0.svg","1XaNB":"favorites.ea0a6d06.css","edLI2":"index.ce4cbc3f.css","18qn1":"favorites.c058604f.js"}')),new URL(o("kyEFX").resolve("5RfUc"),import.meta.url).toString();const c="recipes";function d(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function v(e){return localStorage.getItem(e)}function f(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}function m(e,t){let i=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return i}var u={};u=new URL(o("kyEFX").resolve("9SZS3"),import.meta.url).toString();var g={};g=new URL(o("kyEFX").resolve("jL7vR"),import.meta.url).toString();const _={like:t(u),no_like:t(g)};var y={};y=new URL(o("kyEFX").resolve("cgZ4r"),import.meta.url).toString();var p={};p=new URL(o("kyEFX").resolve("3yHF3"),import.meta.url).toString();const h={star_fill:t(y),star_no_fill:t(p)};var L={};function S(e,t){if(!Array.isArray(e))return null;let i=e.map((e,i)=>0===i?`
            <span class="my-favorites-category__item-list active text-item-category">
                All categories
            </span>
            ${m(e,t)}
            `:m(e,t)).join("");w.ulCategories.innerHTML=i}function E(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id:t,image:i,name:a,description:r,rating:o,isFavorites:n=!0}=e,s=function(e){let{isFavorites:t}=e,i=t?_.like:_.no_like,a=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return a}({isFavorites:n}),l=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:a}=h,r="",o=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=o?i:a;r+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let n=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${r}
    </div>
        `;return n}({rating:o}),c=`
    <li class="card__item" id="${t}">

        <img src='${i}' loading="lazy" alt="${a}" class="card__img" />
        
        ${s}

        <div class="card__info">
            <div class="card-info__container">

                <div class="card-info__description">
                    <h3 class="card-info__title">${a}</h3>
                    <p class="card-info__sub-title">
                        ${r}
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
    `;return c})(e)).join("");w.ulCards.innerHTML=t}function b({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&s(w.hero_favorite,"display","none"),s(w.categoryDiv,"display","none"),s(w.cardsDiv,"display","none"),s(w.paginationDiv,"display","none"),w.favorites_container.innerHTML+=function(){let e=t(L),i=`
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
        </div>`;return i}())}function k(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}L=new URL(o("kyEFX").resolve("6smQV"),import.meta.url).toString();const w={favorites_container:n(".my-favorites__container"),hero_favorite:n(".my-favorites__hero"),categoryDiv:n(".my-favorites__category"),cardsDiv:n(".my-favorites__cards"),ulCategories:n(".my-favorites-category__list"),ulCards:n(".my-favorites-cards__list"),paginationDiv:n(".pagination-wrap")},H={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},F=f(v(c));F?H.favorites=F:d(c,H.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");e?.matches&&H.favorites?.length}),H.favorites?.length?(H.categories=l(H.favorites),S(H.categories,H.currentCategories),E(H.favorites),w.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");if(function({id:e,element:t}){H.favorites=H.favorites.filter(t=>t.id!==e),d(c,H.favorites),t.remove()}({id:e.id,element:e}),f(v(c))?.length||b({isEmpty:!0}),H.categories=l(H.favorites),S(H.categories),H.categories.includes(H.currentCategories)){let e=[...w.ulCategories.children].find(e=>e.textContent.trim().toLowerCase()==H.currentCategories.trim().toLowerCase());k(e)}else console.log(H),S(H.categories),E(H.all())}}),w.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),a=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&a){if("all categories"===i){let e=H.all();k(t),E(e)}else{H.currentCategories=i;let e=H.filter(e=>e.category.toLowerCase()==i.toLowerCase());k(t),E(e)}}})):b({isEmpty:!0}),o("7rYDH"),document.addEventListener("DOMContentLoaded",function(){let e;(e=document.querySelector(".show-btn"))&&(e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>3?e.classList.add("is-visible"):e.classList.remove("is-visible")})),function(){let{feedbackForm:e,emailInput:t}=function(){let e=document.getElementById("feedbackForm")||document.querySelector(".feedback-section form"),t=e?e.querySelector('input[type="email"]'):null;return{feedbackForm:e,emailInput:t}}(),i=localStorage.getItem("userEmail");i&&t&&(t.value=i),e&&t&&e.addEventListener("submit",function(e){if(e.preventDefault(),!$.test(t.value)){alert("Please enter a valid email address.");return}localStorage.setItem("userEmail",t.value),t.value="",alert("Thank you for sending your email address!")})}()});const $=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;var C=o("7rYDH");document.querySelector("body");const R=document.querySelector(".r-modal"),A=document.querySelector(".r-modal-backdrop");function x(e){A.classList.add("visually-hidden"),document.removeEventListener("keydown",I),A.removeEventListener("click",x)}function I(e){"Escape"===e.key&&x()}document.querySelector(".filter-gallery-item-btn"),document.addEventListener("keydown",I),A.addEventListener("click",x),(0,C.getRecipeDetails)("6462a8f74c3d0ddd28897fc1").then(e=>R.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:a,video:r,preview:o,rating:n,tags:s,time:l}=e,c="";s.forEach(e=>{c+=`<span class="r-modal-tag">#${e}</span>`});let d="";return a.forEach(e=>{d+=`<div class="r-modal-ingerdients-name">${e.name}<div class="r-modal-ingerdients-value">${e.measure}</div></div>`}),`
    <h1 class="r-modal-name">${t.toUpperCase()}</h1>
    <video class="r-modal-video"
    src="${r}"
    poster="${o}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div class="r-modal-info-container"><div class="r-modal-tags">${c}</div>
    <div class="r-modal-rating-container"><div class="r-modal-rating">${n}</div>
    <div class="r-modal-rating-stars-icon">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
    <div class="r-modal-time">${l} min</div></div></div>
    <div class="r-modal-ingerdients-container">${d}</div>
    <p class="r-modal-instructions">${i}</p>`}(e))).catch(e=>console.log(e)),o("2nhTy"),localStorage.setItem("theme","light-theme");const D=document.getElementById("theme-toggle"),q=localStorage.getItem("theme");q&&document.body.classList.add(q),"dark-theme"===q&&(D.checked=!0),D.addEventListener("click",()=>{document.body.classList.contains("dark-theme")?(document.body.classList.replace("dark-theme","light-theme"),localStorage.setItem("theme","light-theme")):(document.body.classList.replace("light-theme","dark-theme"),localStorage.setItem("theme","dark-theme"))});
//# sourceMappingURL=favorites.396a51ef.js.map
