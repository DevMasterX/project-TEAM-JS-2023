var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register("b5rV1",function(e,t){let r=document.querySelector(".modal-form"),o=document.querySelector(".filter-gallery-list");o.addEventListener("click",e=>{let t=e.target.parentElement.parentElement,r={id:t.id,name:t.querySelector(".filter-gallery-item-tittle").textContent,image:t.querySelector(".filter-gallery-item-photo").src,rating:t.querySelector(".filter-gallery-item-rating-value").textContent,description:t.querySelector(".filter-gallery-item-description").textContent};t.classList.contains("favorite")&&"H3"===e.target.nodeName&&(l.removeFromDB(r.name),t.classList.remove("favorite")),t.classList.contains("favorite")||"P"!==e.target.nodeName||(t.classList.add("favorite"),l.saveIntoDB(r))});let l=new class{getOrderFromLC(){return localStorage.getItem("orderForm")?JSON.parse(localStorage.getItem("orderForm")):{}}setOrderFormLC(){let e={name:r.elements.name.value,phone:r.elements.phone.value,email:r.elements.email.value};localStorage.setItem("orderForm",JSON.stringify(e))}saveIntoDB(e){let t=this.getFromDB();t.push(e),localStorage.setItem("recipes",JSON.stringify(t))}getFromDB(){return localStorage.getItem("recipes")?JSON.parse(localStorage.getItem("recipes")):[]}removeFromDB(e){let t=this.getFromDB();t.forEach((r,o)=>{e===r.name&&t.splice(o,1)}),localStorage.setItem("recipes",JSON.stringify(t))}};r.addEventListener("input",()=>l.setOrderFormLC())}),o("b5rV1");
//# sourceMappingURL=favorites.619f3cc5.js.map
