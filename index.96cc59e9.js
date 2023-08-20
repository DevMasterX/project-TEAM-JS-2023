var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in r){var l=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequired7c6=l);var t=l("7rYDH");const i=document.querySelector(".popular-js");!async function(){try{let e=await (0,t.getPopularRecipes)();console.log(e);let o=e.map(e=>{let{preview:o,description:r,title:l}=e;return`
        <div class="item-popular">
       <img src="${o}" alt="${l}" class="img-popular"/>
<div class="cont-pop">
    <h3 class="dish-title">${l.toUpperCase()}</h3>
      <p class="paragraph-popular">${r}</p>
   </div>
      </div>
    `}).join("");console.log(o),i.innerHTML=o}catch(e){console.error(e)}}();
//# sourceMappingURL=index.96cc59e9.js.map
