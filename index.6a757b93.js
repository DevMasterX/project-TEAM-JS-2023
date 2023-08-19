!function(){function e(e,t,r,l){Object.defineProperty(e,t,{get:r,set:l,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},t.parcelRequired7c6=i),i.register("8lIKl",function(t,r){e(t.exports,"clearFilters",function(){return y}),e(t.exports,"createMurcupGallery",function(){return h});var l=i("h6c0i"),n=i("b7ONl"),o=i("1WSnx");let c=document.querySelector(".filter-form"),a=document.querySelector(".filter-form-input"),s=document.querySelector(".filter-input-reset-btn"),u=document.querySelector(".filter-reset-btn"),f=document.querySelectorAll(".filter-form-select");document.querySelector(".filter-option-box");let d=document.querySelector(".filter-gallery-list"),g=document.getElementById("searchTime");function y(){a.value="",f.forEach(e=>{e.selectedIndex=0})}async function m(e){s.addEventListener("click",p);let t=new FormData(c);t.get("query"),t.get("time"),t.get("area"),t.get("ingredients");let r={};for(let[e,l]of t)"query"===e?r.title=l:r[e]=l;console.log(r);try{let e=await (0,n.getFilteredRecipes)(r),{results:t}=e;if(!t.length){(0,l.Notify).failure("Sorry, there are no images matching your search query. Please try again.");return}h(e)}catch(e){(0,l.Notify).failure(e.message)}}function p(){a.value="",a.focus()}async function v(){try{let e=await (0,n.getFilteredRecipes)();console.log(e);let{page:t,totalPage:r}=e;h(e)}catch(e){console.error(e)}}function h({results:e}){let t=e.map(({description:e,preview:t,rating:r,title:l})=>` <li class="filter-gallery-item">
        <img class="filter-gallery-item-photo" src="${t}" alt="${l}" width="250" height="287">
        <div class="filter-gallery-item-content">
            <div class="filter-gallery-item-favorit-btn">
                <svg>
                    <use href="./images/forcard.svg#icon-heart"></use>
                </svg>
            </div>
            <h3 class="filter-gallery-item-tittle">${l}</h3>
            <p class="filter-gallery-item-description">${e}</p>
            <div>
                <p class="filter-gallery-item-rating-value">${r}</p>
                <div class="filter-gallery-item-rating-icon"></div>
            </div>
            <button type="button">See recipe</button>
        </div>
    </li>`).join("");d.innerHTML=t}document.getElementById("area-select"),document.getElementById("ingredients-select"),v(),a.addEventListener("input",(0,o.debounce)(m,300)),u.addEventListener("click",y),console.log(f),async function(){f.forEach(e=>{let t=[];if(e===g){for(let e=5;e<=120;e+=5)t.push(`<option class="filter-form-select-time" value="${e}">${e} хв</option>`);let e=t.join("");g.innerHTML=e}})}()}),i("8lIKl")}();
//# sourceMappingURL=index.6a757b93.js.map
