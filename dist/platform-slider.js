this.SliderJS=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){var r=n(3),i=n(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,e){t.exports='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><g><g><polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 "></polygon></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],i=0;i<t.length;i++){var o=t[i],c=e.base?o[0]+e.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:u,updater:p(h,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,g=0;function p(t,e){var n,r,i;if(e.singleton){var o=g++;n=m||(m=l(e)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=l(e),r=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r)()(!1);i.push([t.i,":root {\r\n    --checkedWidth: 940px;\r\n    --height: 270px;\r\n    --buttonHeight: 60px;\r\n    --containerHeight: 300px;\r\n}\r\n\r\n._3xKYZGvy7lvnXqXxxtTzEX {\r\n    position: relative;\r\n    left: 0px;\r\n    top: calc(50% - var(--height) / 2);\r\n    width: 100%;\r\n    height: var(--containerHeight);\r\n}\r\n\r\n.IjvhiUQvVT55Iisdr1PAL {\r\n    position: relative;\r\n    width: 100%;\r\n    height: var(--containerHeight);\r\n}\r\n\r\n._1U77gOiKryBvstDT7cCkPQ {\r\n    outline: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 20px;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n._1U77gOiKryBvstDT7cCkPQ button {\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    display: flex;\r\n    width: 30px;\r\n    border-radius: 3px;\r\n    height: 30px;\r\n    margin-right: 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #525665;\r\n    -webkit-transition: opacity 0.7s ease-in-out;\r\n    -o-transition: opacity 0.7s ease-in-out;\r\n    transition: opacity 0.7s ease-in-out;\r\n}\r\n\r\n._1U77gOiKryBvstDT7cCkPQ button svg {\r\n    fill: #fff;\r\n    stroke-width: 2px;\r\n    width: 16px;\r\n    height: 16px;\r\n    -webkit-transition: opacity 0.7s ease-in-out;\r\n    -o-transition: opacity 0.7s ease-in-out;\r\n    transition: opacity 0.7s ease-in-out;\r\n}\r\n\r\n.XY7MDigS6V5-4EYQyvfFq {\r\n    -webkit-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n}\r\n\r\n._3KdKKqYGXy0_4BzL3cQk5_ {\r\n    -webkit-transform: rotate(-90deg);\r\n    -ms-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n._3u6yzGRFELd8wiGKnSr4qD {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 50%;\r\n    width: var(--checkedWidth);\r\n    height: var(--height);\r\n    z-index: 0;\r\n    transform: scale(0.8);\r\n    -webkit-transition: -webkit-transform 0.7s ease-in-out;\r\n    transition: -webkit-transform 0.7s ease-in-out;\r\n    -o-transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out, -webkit-transform 0.7s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n._39-y7Ek2VO_xDjwYQpJrkM,\r\n._3u6yzGRFELd8wiGKnSr4qD img {\r\n    width: var(--checkedWidth);\r\n    height: var(--height);\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n._3SfbN-2TUO4pBeqA48-OMt {\r\n    overflow: hidden;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:disabled {\r\n    cursor: default;\r\n}\r\n\r\n._3p9ZupDBFx9zbD2Mt2T0Ii,\r\n._3p9ZupDBFx9zbD2Mt2T0Ii svg {\r\n    opacity: 0;\r\n}\r\n\r\n._3_aj5ez1awyuCScQrl2Hty {\r\n    -webkit-transition: -webkit-transform 0.7s ease-in-out;\r\n    transition: -webkit-transform 0.7s ease-in-out;\r\n    -o-transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out, -webkit-transform 0.7s ease-in-out;\r\n    -webkit-transform: translateX(calc(-1 * calc(var(--checkedWidth) + 50px)));\r\n    -ms-transform: translateX(calc(-1 * calc(var(--checkedWidth) + 50px)));\r\n    transform: translateX(calc(-1 * calc(var(--checkedWidth) + 50px)));\r\n}\r\n\r\n._26NLBmQW2N2WtBbIZNz191 {\r\n    -webkit-transition: -webkit-transform 0.7s ease-in-out;\r\n    transition: -webkit-transform 0.7s ease-in-out;\r\n    -o-transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out;\r\n    transition: transform 0.7s ease-in-out, -webkit-transform 0.7s ease-in-out;\r\n    -webkit-transform: translateX(calc(var(--checkedWidth) + 50px));\r\n    -ms-transform: translateX(calc(var(--checkedWidth) + 50px));\r\n    transform: translateX(calc(var(--checkedWidth) + 50px));\r\n}\r\n\r\n.xKr16BMLCmwRuZnJLjbJH {\r\n    -webkit-transform: rotateX(180deg);\r\n    transform: rotateX(180deg);\r\n}\r\n\r\n._3l_tHgI0H_OMxgMSPcXigF {\r\n    display: block;\r\n    z-index: 0;\r\n    left: calc(calc(50% - var(--checkedWidth) - calc(var(--checkedWidth) / 2) - 50px) - var(--checkedWidth) - 50px);\r\n}\r\n\r\n.lWo5Pn687qBMMnD9Kisr9 {\r\n    display: block;\r\n    z-index: 0;\r\n    left: calc(50% - var(--checkedWidth) - calc(var(--checkedWidth) / 2) - 50px);\r\n}\r\n\r\n._2T0xHIAlMJ3ohixo3iuGnv {\r\n    display: block;\r\n    z-index: 10;\r\n    left: calc(50% - calc(var(--checkedWidth) / 2));\r\n}\r\n\r\n._2BCLqr8qyVLIeMpA_d95kw {\r\n    transform: scale(1);\r\n}\r\n\r\n._1KczTzYLFRAmONWpAENvka {\r\n    display: block;\r\n    z-index: 0;\r\n    left: calc(50% - calc(var(--checkedWidth) / 2) + var(--checkedWidth) + 50px);\r\n}\r\n\r\n._1tn28f2x7TBg3ShEFEcJww {\r\n    display: block;\r\n    z-index: 0;\r\n    left: calc(50% - calc(var(--checkedWidth) / 2) + var(--checkedWidth) + var(--checkedWidth) + 50px + 50px);\r\n}",""]),i.locals={controlContainer:"_3xKYZGvy7lvnXqXxxtTzEX",slidesContainer:"IjvhiUQvVT55Iisdr1PAL",buttonContainer:"_1U77gOiKryBvstDT7cCkPQ",btnPrev:"XY7MDigS6V5-4EYQyvfFq",btnNext:"_3KdKKqYGXy0_4BzL3cQk5_",imageDefault:"_3u6yzGRFELd8wiGKnSr4qD",singleImage:"_39-y7Ek2VO_xDjwYQpJrkM",slider:"_3SfbN-2TUO4pBeqA48-OMt",opacityInvisible:"_3p9ZupDBFx9zbD2Mt2T0Ii",nextClick:"_3_aj5ez1awyuCScQrl2Hty",prevClick:"_26NLBmQW2N2WtBbIZNz191",hideClick:"xKr16BMLCmwRuZnJLjbJH",prevPrevNumber:"_3l_tHgI0H_OMxgMSPcXigF",prevNumber:"lWo5Pn687qBMMnD9Kisr9",currentNumber:"_2T0xHIAlMJ3ohixo3iuGnv",clickTransition:"_2BCLqr8qyVLIeMpA_d95kw",nextNumber:"_1KczTzYLFRAmONWpAENvka",nextNextNumber:"_1tn28f2x7TBg3ShEFEcJww"},e.default=i},function(t,e){t.exports='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 343.089 343.089" style="enable-background:new 0 0 343.089 343.089;" xml:space="preserve"><g><g><g><path d="M239.122,124.473h-125.91V72.228c-0.057-4.328-3.611-7.79-7.939-7.733c-2.146,0.028-4.186,0.935-5.645,2.509 L2.452,166.269c-2.885,2.397-3.281,6.679-0.885,9.564c0.267,0.321,0.563,0.618,0.885,0.885l97.176,99.265 c1.501,1.588,3.563,2.526,5.747,2.612h3.135c2.983-1.448,4.828-4.523,4.702-7.837v-47.02h125.91 c5.262-0.892,9.305-5.148,9.927-10.449v-83.592C249.048,125.518,243.824,124.473,239.122,124.473z"></path><path d="M272.558,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C280.395,125.369,276.887,121.86,272.558,121.86z"></path><path d="M303.905,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C311.742,125.369,308.233,121.86,303.905,121.86z"></path><path d="M335.252,121.86c-4.328,0-7.837,3.509-7.837,7.837v83.592c0,4.328,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837 v-83.592C343.089,125.369,339.58,121.86,335.252,121.86z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(0),i=n.n(r),o=function(t,e,n){var r=t.prevNumber,i=t.currentNumber,o=t.nextNumber;switch(n){case"right":return o===e-1?i=o:i===e-1?i=0:i+=1,i;case"left":return r===e-1?i=r:1===i?i=0:i-=1,i;default:throw new Exeption("Wrong direction")}};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"getPrev",(function(){return 0===n.currentNumber?n.numberOfElements-1:n.currentNumber-1})),a(this,"getPrevPrev",(function(){return 0===n.currentNumber?n.numberOfElements-2:1===n.currentNumber?n.numberOfElements-1:n.currentNumber-2})),a(this,"getCurrent",(function(){return n.currentNumber})),a(this,"getNext",(function(){return n.currentNumber===n.numberOfElements-1?0:n.currentNumber+1})),a(this,"getNextNext",(function(){return n.currentNumber===n.numberOfElements-1?1:n.currentNumber===n.numberOfElements-2?0:n.currentNumber+2})),a(this,"goNext",(function(){n.currentNumber=o({prevNumber:n.getPrev(),currentNumber:n.currentNumber,nextNumber:n.getNext()},n.numberOfElements,"right")})),a(this,"goPrev",(function(){n.currentNumber=o({prevNumber:n.getPrev(),currentNumber:n.currentNumber,nextNumber:n.getNext()},n.numberOfElements,"left")})),this.numberOfElements=e,this.currentNumber=0},c=(n(5),n(1)),l=n.n(c);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(e,n,r){var i=r.simulationNextClick,o=r.simulationPrevClick,a=r.getButtonBlockedStatus;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.simulationNextClick=i,this.simulationPrevClick=o,this.getButtonBlockedStatus=a,this.statusButtonsVisibility=!0,this.setIconSize(n),this.createButtonsContainer(e),this.addOtherButtons(),this.addListenersForSlideButtons()}var e,n,r;return e=t,(n=[{key:"setIconSize",value:function(t){document.documentElement.style.setProperty("--buttonHeight","".concat(t,"px"))}},{key:"createButtonsContainer",value:function(t){this.buttonContainer=document.createElement("div"),this.buttonContainer.className=i.a.buttonContainer,t.append(this.buttonContainer)}},{key:"addOtherButtons",value:function(){this.btnPrev=document.createElement("button"),this.btnNext=document.createElement("button"),this.btnPrev.className=i.a.btnPrev,this.btnNext.className=i.a.btnNext,this.btnPrev.innerHTML=l.a,this.btnNext.innerHTML=l.a,this.buttonContainer.append(this.btnPrev,this.btnNext)}},{key:"hideButtons",value:function(){this.btnNext.classList.toggle(i.a.opacityInvisible),this.btnPrev.classList.toggle(i.a.opacityInvisible),this.btnNext.disabled=!0,this.btnPrev.disabled=!0}},{key:"openButtons",value:function(){this.btnNext.classList.toggle(i.a.opacityInvisible),this.btnPrev.classList.toggle(i.a.opacityInvisible),this.btnNext.disabled=!1,this.btnPrev.disabled=!1}},{key:"addListenersForSlideButtons",value:function(){var t=this;this.btnNext.addEventListener("click",(function(){t.getButtonBlockedStatus()||t.simulationNextClick()})),this.btnPrev.addEventListener("click",(function(){t.getButtonBlockedStatus()||t.simulationPrevClick()}))}}])&&u(e.prototype,n),r&&u(e,r),t}();function h(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.containerHeight,a=void 0===o?370:o,c=r.width,l=void 0===c?640:c,u=r.height,f=void 0===u?270:u,g=r.iconSize,v=void 0===g?60:g,b=r.timeout,x=void 0===b?3e3:b,y=r.hideControls,k=void 0!==y&&y;if(m(this,t),p(this,"getButtonBlockedStatus",(function(){return n.buttonBlocked})),p(this,"getSliderParams",(function(){n.slider.className="slider",n.defaultNumberOfElements=slider.children.length,n.numberOfElements=n.defaultNumberOfElements})),p(this,"setRootStyle",(function(t){var e=document.documentElement;e.style.setProperty("--checkedWidth","".concat(n.checkedWidth,"px")),e.style.setProperty("--height","".concat(t,"px")),e.style.setProperty("--containerHeight","".concat(n.containerHeight,"px"))})),p(this,"setStartedParams",(function(){n.buttonBlocked=!1,n.startPosition=null,n.positionsController=new s(n.numberOfElements)})),p(this,"simulationNextClick",(function(){n.controlContainer.children[n.positionsController.getPrevPrev()].className=i.a.imageDefault,n.controlContainer.children[n.positionsController.getNext()].classList.toggle(i.a.clickTransition),n.controlContainer.children[n.positionsController.getCurrent()].classList.toggle(i.a.clickTransition),n.controlContainer.classList.add(i.a.nextClick),n.positionsController.goNext()})),p(this,"simulationPrevClick",(function(){n.controlContainer.children[n.positionsController.getNextNext()].className=i.a.imageDefault,n.controlContainer.children[n.positionsController.getPrev()].classList.toggle(i.a.clickTransition),n.controlContainer.children[n.positionsController.getCurrent()].classList.toggle(i.a.clickTransition),n.controlContainer.classList.add(i.a.prevClick),n.positionsController.goPrev()})),p(this,"addListenersForTransition",(function(){n.controlContainer.addEventListener("transitionstart",(function(){n.buttonBlocked=!0})),n.controlContainer.addEventListener("transitionend",(function(){n.setStartedPositions(),n.controlContainer.className=i.a.controlContainer,n.buttonBlocked=!1}))})),p(this,"addListenersForTouchSwipe",(function(){n.slidesContainer.addEventListener("touchstart",(function(t){t.preventDefault(),n.startPosition=t.changedTouches[0].clientX}),!1),n.slidesContainer.addEventListener("touchend",(function(t){t.preventDefault(),console.log(t.changedTouches[0].clientX,n.startPosition),t.changedTouches[0].clientX-n.startPosition>0?n.simulationPrevClick():n.simulationNextClick()}),!1)})),p(this,"addListenersForMouseSwipe",(function(){n.slidesContainer.addEventListener("mousedown",(function(t){t.preventDefault(),n.buttonBlocked||(n.startPosition=t.clientX)}),!1),n.slidesContainer.addEventListener("mouseup",(function(t){t.preventDefault(),n.buttonBlocked||(t.clientX-n.startPosition>0?n.simulationPrevClick():t.clientX-n.startPosition<0&&n.simulationNextClick())}),!1)})),p(this,"activateContainer",(function(){if(n.slidesContainer=document.createElement("div"),n.controlContainer=document.createElement("div"),n.controlContainer.className=i.a.controlContainer,n.slidesContainer.className=i.a.slidesContainer,1===n.numberOfElements)n.singleElementSlider();else if(2===n.numberOfElements)n.twoElementsSlider();else if(3===n.numberOfElements)n.threeElementsSlider();else if(4===n.numberOfElements)n.fourElementsSlider();else{var t;(t=n.controlContainer).append.apply(t,h(n.slider.children))}n.slidesContainer.append(n.controlContainer),n.slider.append(n.slidesContainer),n.slider.className=i.a.slider,h(n.controlContainer.children).forEach((function(t){t.className=i.a.imageDefault}))})),p(this,"singleElementSlider",(function(){var t,e=h(n.slider.children)[0].cloneNode(!0),r=h(n.slider.children)[0].cloneNode(!0),i=h(n.slider.children)[0].cloneNode(!0),o=h(n.slider.children)[0].cloneNode(!0),a=[].concat(h(n.slider.children),[e,r,i,o]);(t=n.controlContainer).append.apply(t,h(a)),n.numberOfElements+=4})),p(this,"twoElementsSlider",(function(){var t,e=h(n.slider.children)[0].cloneNode(!0),r=h(n.slider.children)[1].cloneNode(!0),i=h(n.slider.children)[0].cloneNode(!0),o=h(n.slider.children)[1].cloneNode(!0),a=[].concat(h(n.slider.children),[e,r,i,o]);(t=n.controlContainer).append.apply(t,h(a)),n.numberOfElements+=4})),p(this,"threeElementsSlider",(function(){var t,e=h(n.slider.children)[1].cloneNode(!0),r=h(n.slider.children)[2].cloneNode(!0),i=[].concat(h(n.slider.children),[e,r]);(t=n.controlContainer).append.apply(t,h(i)),n.numberOfElements+=2})),p(this,"fourElementsSlider",(function(){var t,e=h(n.slider.children)[2].cloneNode(!0),r=[].concat(h(n.slider.children),[e]);(t=n.controlContainer).append.apply(t,h(r)),n.numberOfElements+=1})),p(this,"addControls",(function(t){n.controls=new d(n.slider,t,{simulationNextClick:n.simulationNextClick,simulationPrevClick:n.simulationPrevClick,getButtonBlockedStatus:n.getButtonBlockedStatus})})),this.slider=document.getElementById(e),this.timeout=x,this.checkedWidth=window.innerWidth>0&&window.innerWidth>=l?l:window.innerWidth,this.containerHeight=a,!this.slider)throw new Exeption("Не был найден слайдер с id ".concat(e));this.getSliderParams(),this.setSlider({height:f,iconSize:v,hideControls:k})}var e,n,r;return e=t,(n=[{key:"setSlider",value:function(t){var e=t.height,n=t.iconSize,r=t.hideControls;if(this.defaultNumberOfElements<1)throw new Exeption("Слайдер не содержит элементов внутри");this.setRootStyle(e),this.activateContainer(),this.setStartedParams(),this.setStartedPositions(),this.addListenersForTransition(),this.addListenersForTouchSwipe(),this.addListenersForMouseSwipe(),!r&&window.innerWidth>=724&&this.addControls(n)}},{key:"setStartedPositions",value:function(){this.controlContainer.children[this.positionsController.getPrevPrev()].className="".concat(i.a.imageDefault," ").concat(i.a.prevPrevNumber),this.controlContainer.children[this.positionsController.getPrev()].className="".concat(i.a.imageDefault," ").concat(i.a.prevNumber),this.controlContainer.children[this.positionsController.getCurrent()].className="".concat(i.a.imageDefault," ").concat(i.a.currentNumber," ").concat(i.a.clickTransition),this.controlContainer.children[this.positionsController.getNext()].className="".concat(i.a.imageDefault," ").concat(i.a.nextNumber),this.controlContainer.children[this.positionsController.getNextNext()].className="".concat(i.a.imageDefault," ").concat(i.a.nextNextNumber)}}])&&g(e.prototype,n),r&&g(e,r),t}()}]).default;