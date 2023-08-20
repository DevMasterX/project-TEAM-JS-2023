var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var i=o[e];delete o[e];var l={id:e,exports:{}};return r[e]=l,i.call(l.exports,l,l.exports),l.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,r){o[e]=r},e.parcelRequired7c6=i),i.register("e1Siu",function(e,r){var o=i("7rYDH");let l=document.querySelector(".popular-js");(async function(){try{let e=await (0,o.getPopularRecipes)();console.log(e);let r=e.map(e=>{let{preview:r,description:o,title:i}=e;return`
        <div class="item-popular">
       <img src="${r}" alt="${i}" class="img-popular"/>
<div class="cont-pop">
    <h3 class="dish-title">${i.toUpperCase()}</h3>
      <p class="paragraph-popular">${o}</p>
   </div>
      </div>
    `}).join("");console.log(r),l.innerHTML=r}catch(e){console.error(e)}})()}),i("e1Siu");
//# sourceMappingURL=index.a86ca14d.js.map
