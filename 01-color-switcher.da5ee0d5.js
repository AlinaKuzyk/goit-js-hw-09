!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.setAttribute("disabled",!0)})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.da5ee0d5.js.map