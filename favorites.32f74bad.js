!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l),l("b7ONl"),l("9Di7p"),l("8lIKl"),document.addEventListener("DOMContentLoaded",function(){let e;(e=document.querySelector(".show-btn"))&&(e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>3?e.classList.add("is-visible"):e.classList.remove("is-visible")})),function(){let{feedbackForm:e,emailInput:t}=function(){let e=document.getElementById("feedbackForm")||document.querySelector(".feedback-section form"),t=e?e.querySelector('input[type="email"]'):null;return{feedbackForm:e,emailInput:t}}(),n=localStorage.getItem("userEmail");n&&t&&(t.value=n),e&&t&&e.addEventListener("submit",function(e){if(e.preventDefault(),!o.test(t.value)){alert("Please enter a valid email address.");return}localStorage.setItem("userEmail",t.value),t.value="",alert("Thank you for sending your email address!")})}()});let o=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;l("2hTvb"),l("8Veln")}();
//# sourceMappingURL=favorites.32f74bad.js.map
