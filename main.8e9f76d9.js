parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var i,c=document.querySelector("body"),l=c.querySelector("table"),s=l.querySelector("thead"),u=l.querySelector("tbody");function d(e,n,t){c.insertAdjacentHTML("beforeend",'\n    <div class="notification '.concat(t,'" data-qa="notification">\n      <h2 class="title">').concat(e,"</h2>\n      <p>").concat(n,"</p>\n  </div>\n  ")),setTimeout(function(){c.removeChild(document.querySelector(".notification"))},2e3)}c.insertAdjacentHTML("beforeend",'\n  <form \n    action="#"\n    method="get"\n    class="new-employee-form"\n  >\n    <label>Name:\n      <input name="name" type="text" data-qa="name">\n    </label>\n    <label>Position:\n      <input name="position" type="text" data-qa="position">\n    </label>\n    <label>Office:\n      <select name="office" data-qa="office">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n    <label>Age:\n      <input\n        name="age"\n        type="number"\n        data-qa="age"\n        min=0\n      >\n    </label>\n    <label>Salary:\n      <input\n        name="salary"\n        type="number"\n        data-qa="salary"\n        min=0\n      >\n    </label>\n    <button type="submit">Save to table</button>\n  </form>\n');var p=document.querySelector("form");p.addEventListener("submit",function(e){e.preventDefault();var n=Object.fromEntries(new FormData(p).entries());if(n.name.length<4)d("Error","Name is too short","error");else if(+n.age<18||+n.age>90)d("Error","You are too young or too old!!","error");else if(isNaN(n.salary))d("Error","Invalid salary","error");else{var t=document.createElement("tr");t.innerHTML="\n      <td>\n        ".concat(n.name.charAt(0).toUpperCase()+n.name.slice(1),"\n      </td>\n      <td>\n        ").concat(n.position.charAt(0).toUpperCase()+n.position.slice(1),"\n      </td>\n      <td>\n        ").concat(n.office,"\n      </td>\n      <td>\n        ").concat(n.age,"\n      </td>\n      <td>\n        ").concat("$"+(+n.salary).toLocaleString("en-US"),"\n      </td>\n    "),d("Success","Employee has been added successfully!","success"),p.reset(),u.append(t)}}),s.addEventListener("click",function(n){var t=n.target.cellIndex,a=e(u.children).sort(function(e,n){var a=e.cells[t].textContent.replace(",","").replace("$",""),r=n.cells[t].textContent.replace(",","").replace("$","");return isNaN(a)?a.localeCompare(r):a-r});i===t?(u.append.apply(u,e(a.reverse())),i=void 0):(u.append.apply(u,e(a)),i=t)}),u.addEventListener("click",function(e){var n=e.target.parentNode;u.querySelector(".active")&&u.querySelector(".active").classList.remove("active"),n.classList.add("active")});var m=document.createElement("input"),f="";u.addEventListener("dblclick",function(e){f=e.target.innerText,null===document.querySelector(".cell-input")&&(m.setAttribute("value",e.target.innerText),m.classList.add("cell-input"),e.target.replaceWith(m))}),m.addEventListener("keypress",function(e){if("Enter"===e.key){e.preventDefault();var n=document.createElement("td");n.innerHTML=0===m.value.length?f:m.value,e.target.replaceWith(n)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8e9f76d9.js.map