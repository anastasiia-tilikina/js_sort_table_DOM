parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return e(t)||r(t,o)||l(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(c){o=!0,a=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return r}}function e(t){if(Array.isArray(t))return t}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,n,r){return n&&a(t.prototype,n),r&&a(t,r),t}function u(t){return s(t)||f(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,n){if(t){if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,n):void 0}}function f(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return y(t)}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var d=document.querySelector("table"),m=d.tHead,b=u(m.rows[0].cells),p=document.querySelector("tbody"),v=function(){return u(d.tBodies[0].rows)},h=function(){function t(n,r,e,a){o(this,t),this.name=n,this.position=r,this.age=+e,this.salary=this.getSalaryNum(a)}return i(t,[{key:"getSalaryNum",value:function(t){return+t.slice(1).split(",").join("")}},{key:"getSalaryStr",value:function(t){return"$"+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}]),t}(),g=v().map(function(n){var r=t(S(u(n.cells)),4),e=r[0],o=r[1],a=r[2],i=r[3];return new h(e,o,a,i)});function S(t){return t.map(function(t){return t.innerText})}function w(t,n){return t.sort(function(t,r){var e=t[n],o=r[n];return"string"==typeof e?e.localeCompare(o):e-o})}m.addEventListener("click",function(t){var n=t.target,r=n.innerText.toLowerCase();b.forEach(function(t){t.style.color=t===n?"#fff400":"#fff",t.onmouseover=function(){t.style.color="#fff400"}}),p.innerHTML="\n  ".concat(w(g,r).map(function(t){return"\n    <tr>\n      <td>".concat(t.name,"</td>\n      <td>").concat(t.position,"</td>\n      <td>").concat(t.age,"</td>\n      <td>").concat(t.getSalaryStr(t.salary),"</td>\n    </tr>\n  ")}).join(""),"\n  ")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1175a14c.js.map