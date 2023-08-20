var e,r,o,l;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},null==(l=e.parcelRequired7c6)&&((l=function(e){if(e in r)return r[e].exports;if(e in o){var l=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,l.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},e.parcelRequired7c6=l),l.register("bJA7V",function(e,r){var o=l("b7ONl");let t=document.querySelector(".popular-js");(async function(){try{let e=await (0,o.getPopularRecipes)();console.log(e);let r=e.map(e=>{let{preview:r,description:o,title:l}=e;return`
        <div class="item-popular">
       <img src="${r}" alt="${l}" class="img-popular"/>
<div class="cont-pop">
    <h3 class="dish-title">${l.toUpperCase()}</h3>
      <p class="paragraph-popular">${o}</p>
   </div>
      </div>
    `}).join("");console.log(r),t.innerHTML=r}catch(e){console.error(e)}})()}),l("bJA7V");
//# sourceMappingURL=index.4d5d4ae5.js.map
