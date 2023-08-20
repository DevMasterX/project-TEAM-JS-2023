function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=i.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},i.parcelRequired7c6=n),n.register("kyEFX",function(t,i){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var a,r,n={};a=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},r=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.4d45c6f2.js","5RfUc":"card.df7e8656.png","9SZS3":"like.15c77fd6.svg","jL7vR":"no_like.af71eca1.svg","cgZ4r":"star_fill.6e74fda4.svg","3yHF3":"star_no_fill.3faee62c.svg","6smQV":"empty_favorites.b72238c0.svg","1XaNB":"favorites.1c285bd0.css","5vYzR":"index.1cbba5b6.js"}'));var s={};function o(e){return document.querySelector(e)}function l(e,t,i){e.style[t]=i}s=new URL(n("kyEFX").resolve("5RfUc"),import.meta.url).toString();const c="favorites";function d(e,t){let i=function(e){try{return JSON.stringify(e)}catch(e){console.log(e),console.log(e.message)}}(t);localStorage.setItem(e,i)}function f(e){return localStorage.getItem(e)}function u(e){try{return JSON.parse(e)}catch(e){console.log(e),console.log(e.message)}}var v={};v=new URL(n("kyEFX").resolve("9SZS3"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("jL7vR"),import.meta.url).toString();const m={like:t(v),no_like:t(g)};var p={};p=new URL(n("kyEFX").resolve("cgZ4r"),import.meta.url).toString();var _={};_=new URL(n("kyEFX").resolve("3yHF3"),import.meta.url).toString();const y={star_fill:t(p),star_no_fill:t(_)};var h={};function k(e){if(!Array.isArray(e))return null;let t=[...e].map(e=>(function(e){let{id_card:t,img:i,title:a,sub_title:r,rating:n,isFavorites:s}=e,o=i.path?i.path:i,l=function(e){let{isFavorites:t}=e,i=t?m.like:m.no_like,a=`
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
    `;return d})(e)).join("");w.ulCards.innerHTML=t}function b({isEmpty:e}){e&&(matchMedia("(max-width: 767px)").matches&&l(w.hero_favorite,"display","none"),l(w.categoryDiv,"display","none"),l(w.cardsDiv,"display","none"),l(w.paginationDiv,"display","none"),w.favorites_container.innerHTML+=function(){let e=t(h),i=`
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
        </div>`;return i}())}function E(e){let t=[...e.parentNode.children];t.map(e=>(function(e,t){e.classList.remove(t)})(e,"active")),function(e,t){e.classList.add(t)}(e,"active")}h=new URL(n("kyEFX").resolve("6smQV"),import.meta.url).toString(),d(c,[{id_card:1,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert","beef"]},{id_card:2,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.4,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:3,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:4,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]},{id_card:5,img:{path:t(s),alt:"tasty"},title:"Beef Wellington",sub_title:`Beef Wellington is a steak steak steak dish of English origin, made out of fillet steak coated with p\xe2t\xe9 and duxelles, wrapped in puff pastry, then baked.`,rating:4.5,isFavorites:!0,categories:["breakfast","dessert"]}]);const w={favorites_container:o(".my-favorites__container"),hero_favorite:o(".my-favorites__hero"),categoryDiv:o(".my-favorites__category"),cardsDiv:o(".my-favorites__cards"),ulCategories:o(".my-favorites-category__list"),ulCards:o(".my-favorites-cards__list"),paginationDiv:o(".pagination-wrap")},L={favorites:[],currentCategories:"all categories",all(){return this.favorites},filter(e){return this.favorites.filter(e)}},S=u(f(c));S?L.favorites=S:d(c,L.favorites),window.addEventListener("resize",()=>{let e=window.matchMedia("(max-width: 768px)");console.log(e),e?.matches&&L.favorites?.length}),L.favorites?.length?(L.categories=function(e){let t=[...e].flatMap(e=>e.categories);return[...new Set(t)].map(e=>e?.toLowerCase())}(L.favorites),function(e){if(!Array.isArray(e))return;let t=e.map(e=>(function(e){let t=`
        <span class="my-favorites-category__item-list text-item-category">
            ${e}
        </span>
    `;return t})(e)).join("");w.ulCategories.innerHTML+=t}(L.categories),k(L.favorites),w.ulCards.addEventListener("click",function(e){let t=e.target,i=t.classList.contains("favorite-heart");if("IMG"===t.nodeName&&i){let e=t.closest(".card__item");(function({id:e,element:t}){L.favorites=L.favorites.filter(t=>t.id_card!==e),d(c,L.favorites),t.remove()})({id:+e.id,element:e}),u(f(c))?.length||b({isEmpty:!0})}}),w.ulCategories.addEventListener("click",e=>{let t=e.target,i=t.textContent.trim().toLowerCase(),a=t.classList.contains("text-item-category");if("SPAN"===t.nodeName&&a){if("all categories"===i){let e=L.all();E(t),k(e)}else{let e=L.filter(e=>[...e.categories].includes(i));E(t),k(e)}}})):b({isEmpty:!0}),n("7rYDH"),document.addEventListener("DOMContentLoaded",function(){let e;(e=document.querySelector(".show-btn"))&&(e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>3?e.classList.add("is-visible"):e.classList.remove("is-visible")})),function(){let{feedbackForm:e,emailInput:t}=function(){let e=document.getElementById("feedbackForm")||document.querySelector(".feedback-section form"),t=e?e.querySelector('input[type="email"]'):null;return{feedbackForm:e,emailInput:t}}(),i=localStorage.getItem("userEmail");i&&t&&(t.value=i),e&&t&&e.addEventListener("submit",function(e){if(e.preventDefault(),!x.test(t.value)){alert("Please enter a valid email address.");return}localStorage.setItem("userEmail",t.value),t.value="",alert("Thank you for sending your email address!")})}()});const x=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;var F=n("7rYDH");const H=document.querySelector(".r-modal"),$=document.querySelector(".r-modal-backdrop");$.addEventListener("click",function(e){$.classList.add("visually-hidden")});let R="6462a8f74c3d0ddd28897fc1";console.log((0,F.getRecipeDetails)(R).then(e=>console.log(e))),(0,F.getRecipeDetails)(R).then(e=>H.insertAdjacentHTML("afterbegin",function(e){let{title:t,instructions:i,ingredients:a,video:r,preview:n,rating:s,tags:o,time:l}=e,c="";o.forEach(e=>{c+=`<span>${e}</span>`});let d="";return a.forEach(e=>{d+=`<div>${e.name}<span>${e.measure}</span></div>`}),`
    <h1>${t}</h1>
    <video class="r-modal-video"
    src="${r}"
    poster="${n}"
    controls
    autoplay
    loop
    preload="auto"
    ></video>
    <div>${c}</div>
    <div>${s}</div>
    <div>${l} min</div>
    <div>${d}</div>
    <p>${i}</p>`}(e))).catch(e=>console.log(e));const A=document.querySelector("[data-modal-order]"),D=document.querySelector("[data-modal-close]"),q=document.querySelector(".btn-send"),C=document.querySelector(".btnOrderNow");function B(){A.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",N),A.removeEventListener("click",M)}function M(e){e.target===A&&B()}function N(e){"Escape"===e.key&&B()}document.querySelector(".shopping-btn"),q.addEventListener("submit",e=>{e.preventDefault()}),C.addEventListener("click",function e(){A.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),C.removeEventListener("click",e)}),D.addEventListener("click",B),document.addEventListener("keydown",N),A.addEventListener("click",M),n("2nhTy"),n("4S0r6");
//# sourceMappingURL=favorites.4d45c6f2.js.map
