var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=l),l.register("b5rV1",function(e,t){let r=document.querySelector(".filter-gallery-list");r.addEventListener("click",e=>{let t=e.target.parentElement.parentElement,r={name:t.querySelector(".filter-gallery-item-tittle").textContent,image:t.querySelector(".filter-gallery-item-photo").src,rating:t.querySelector(".filter-gallery-item-rating-value").textContent,description:t.querySelector(".filter-gallery-item-description").textContent};"P"===e.target.nodeName&&(e.target.classList.add("favorite"),l.saveIntoDB(r)),"H3"===e.target.nodeName&&l.removeFromDB(r.name)});let l=new class{saveIntoDB(e){let t=this.getFromDB();t.push(e),localStorage.setItem("recipes",JSON.stringify(t))}getFromDB(){return localStorage.getItem("recipes")?JSON.parse(localStorage.getItem("recipes")):[]}removeFromDB(e){let t=this.getFromDB();t.forEach((r,l)=>{e===r.name&&t.splice(l,1)}),localStorage.setItem("recipes",JSON.stringify(t))}}}),l("b5rV1");
//# sourceMappingURL=index.057ee573.js.map
