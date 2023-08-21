!function(){function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=i.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var a,r,n={};a=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},r=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,r={};a=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.6bd7040c.js","91rZq":"card.df7e8656.png","aZCCQ":"like.15c77fd6.svg","7xGU9":"no_like.af71eca1.svg","7Acci":"star_fill.6e74fda4.svg","lBtJ9":"star_no_fill.3faee62c.svg","gidvd":"empty_favorites.b72238c0.svg","1XaNB":"favorites.7e491bb2.css","hXzOq":"favorites.fc57a156.js"}'));var s={};function o(e){return document.querySelector(e)}function l(e,t,i){e.style[t]=i}s=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("91rZq");let c="favorites";function d(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function f(e){return localStorage.getItem(e)}function u(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var v={};v=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("aZCCQ");var g={};g=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7xGU9");let m={like:t(v),no_like:t(g)};var p={};p=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("7Acci");var _={};_=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("lBtJ9");let y={star_fill:t(p),star_no_fill:t(_)};var h={};function b(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id_card:t,img:i,title:a,sub_title:r,rating:n,isFavorites:s}=e,o=i.path?i.path:i,l=function(e){let{isFavorites:t}=e,i=t?m.like:m.no_like,a=`
    <div class="favorites__container">
        <img src="${i}" alt="like" class="favorite-heart">
    </div>
    `;return a}({isFavorites:s}),c=function(e){let{rating:t}=e,{star_fill:i,star_no_fill:a}=y,r="",n=Math.floor(t);for(let e=1;e<=5;e++){let t=e<=n?i:a;r+=`
        <span class="card-info-actions-rating__star-container">
            <img src="${t}" alt="star" class="card-info-actions-rating__star-svg star-svg">
        </span>`}let s=`
    <p class="card-info-actions-rating__text">${t}</p>
    <div class="card-info-actions-rating__stars">
        ${r}
    </div>
        `;return s}({rating:n}),d=`
    <li class="card__item" id="${t}">

        <img src='${o}' loading="lazy" alt="${a}" class="card__img" />
        
        ${l}

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
    `;return d})(e)).join("");L.ulCards.innerHTML=t}function k({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&l(L.hero_favorite,"display","none"),l(L.categoryDiv,"display","none"),l(L.cardsDiv,"display","none"),l(L.paginationDiv,"display","none"),L.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function E(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}h=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("gidvd"),d(c,[{id_card:1,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert","beef"]},{id_card:2,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.4,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:3,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:4,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:5,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]}]);let L={favorites_container:o(".my-favorites__container"),hero_favorite:o(".my-favorites__hero"),categoryDiv:o(".my-favorites__category"),cardsDiv:o(".my-favorites__cards"),ulCategories:o(".my-favorites-category__list"),ulCards:o(".my-favorites-cards__list"),paginationDiv:o(".pagination-wrap")},w={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},x=u(f(c));x?w.favorites=x:d(c,w.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");console.log(e),e?.matches&&w.favorites?.length}),w.favorites?.length?(w.categories=function(e){let t=[...e].flatMap(e=>e.categories);return[...new Set(t)].map(e=>e?.toLowerCase())}(w.favorites),function(e){if(!Array.isArray(e))return;let t=e.map(e=>(function(e){let t=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return t})(e)).join("");L.ulCategories.innerHTML+=t}(w.categories),b(w.favorites),L.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");(function({id:e,element:t}){w.favorites=w.favorites.filter(t=>t.id_card!==e),d(c,w.favorites),t.remove()})({id:+e.id,element:e}),u(f(c))?.length||k({isEmpty:!0})}}),L.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),a=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&a){if("all categories"===i){let e=w.all();E(t),b(e)}else{let e=w.filter(e=>[...e.categories].includes(i));E(t),b(e)}}})):k({isEmpty:!0}),n("b7ONl"),document.addEventListener("DOMContentLoaded",function(){let e;(e=document.querySelector(".show-btn"))&&(e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>3?e.classList.add("is-visible"):e.classList.remove("is-visible")})),function(){let{feedbackForm:e,emailInput:t}=function(){let e=document.getElementById("feedbackForm")||document.querySelector(".feedback-section form"),t=e?e.querySelector('input[type="email"]'):null;return{feedbackForm:e,emailInput:t}}(),i=localStorage.getItem("userEmail");i&&t&&(t.value=i),e&&t&&e.addEventListener("submit",function(e){if(e.preventDefault(),!S.test(t.value)){alert("Please enter a valid email address.");return}localStorage.setItem("userEmail",t.value),t.value="",alert("Thank you for sending your email address!")})}()});let S=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;var H=n("b7ONl");document.querySelector("body");let N=document.querySelector(".r-modal"),$=document.querySelector(".r-modal-backdrop");function C(e){$.classList.add("visually-hidden"),document.removeEventListener("keydown",F),$.removeEventListener("click",C)}function F(e){"Escape"===e.key&&C()}document.querySelector(".filter-gallery-item-btn"),document.addEventListener("keydown",F),$.addEventListener("click",C),(0,H.getRecipeDetails)("6462a8f74c3d0ddd28897fc1").then(e=>N.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:a,video:r,preview:n,rating:s,tags:o,time:l}=e,c="";o.forEach(e=>{c+=`<span class="r-modal-tag">#${e}</span>`});let d="";return a.forEach(e=>{d+=`<div class="r-modal-ingerdients-name">${e.name}<div class="r-modal-ingerdients-value">${e.measure}</div></div>`}),`
    <h1 class="r-modal-name">${t.toUpperCase()}</h1>
    <video class="r-modal-video"
    src="${r}"
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
    <p class="r-modal-instructions">${i}</p>`}(e))).catch(e=>console.log(e));let B=document.querySelector("[data-modal-order]"),O=document.querySelector("[data-modal-close]"),A=document.querySelector(".btn-send"),R=document.querySelector(".btnOrderNow");function q(){B.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",D),B.removeEventListener("click",J)}function J(e){e.target===B&&q()}function D(e){"Escape"===e.key&&q()}document.querySelector(".shopping-btn"),A.addEventListener("submit",e=>{e.preventDefault()}),R.addEventListener("click",function e(){B.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),R.removeEventListener("click",e)}),O.addEventListener("click",q),document.addEventListener("keydown",D),B.addEventListener("click",J),n("jcFG7"),n("9VC5X")}();
//# sourceMappingURL=favorites.6bd7040c.js.map
