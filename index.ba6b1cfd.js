function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=t.parcelRequire3a11;function o(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)}))}}function s(e){return e&&e.constructor===Symbol?"symbol":typeof e}null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},t.parcelRequire3a11=a),a.register("3DHSB",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},i=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("m9izq",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=n),n}})),a("3DHSB").register(JSON.parse('{"2FzHl":"index.ba6b1cfd.js","95ino":"icons.c3a8dc14.svg"}'));function u(e,n){var t,r,i,a,o=function(e){return function(n){return c([e,n])}},c=function(o){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}},s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a}Object.create;Object.create;var l="https://forkify-api.herokuapp.com/api/v2/recipes",d="d36135f7-c835-4601-bf93-51d83e253c5e";function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e){if(Array.isArray(e))return h(e)}function g(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}function m(e){return v(e)||g(e)||y(e)||_()}var b,k,w=function(e){return e.map((function(e){return e.trim()}))},E=(b=c((function(e,n){var t,r,i,a,o,c=arguments;return u(this,(function(s){switch(s.label){case 0:t=c.length>2&&void 0!==c[2]?c[2]:"POST",s.label=1;case 1:return s.trys.push([1,4,,5]),r={method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},i=n?fetch(e,r):fetch(e),[4,Promise.race([i,(u=10,new Promise((function(e,n){setTimeout((function(){n(new Error("Request took too long! Timeout after ".concat(u," second")))}),1e3*u)})))])];case 2:return[4,(a=s.sent()).json()];case 3:if(o=s.sent(),!a.ok)throw new Error("".concat(o.message," Error code (").concat(a.status,")"));return[2,o];case 4:throw s.sent();case 5:return[2]}var u}))})),function(e,n){return b.apply(this,arguments)}),S={recipe:{},search:{query:"",result:[],itemsPerPage:10,page:1},bookmarks:[]},H=function(e){var n=e.data.recipe;return f({id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},n.key&&{key:n.key})},q=function(){var e=c((function(e){var n,t;return u(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,E("".concat(l,"/").concat(e,"?key=").concat(d))];case 1:return n=r.sent(),S.recipe=H(n),S.bookmarks.some((function(n){return n.id===e}))?S.recipe.bookmarked=!0:S.recipe.bookmarked=!1,[3,3];case 2:throw t=r.sent(),console.log("".concat(t," 💥 💥 💥")),t;case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=c((function(e){var n,t;return u(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),S.search.query=e,[4,E("".concat(l,"?search=").concat(e,"&key=").concat(d))];case 1:return n=r.sent(),S.search.result=n.data.recipes.map((function(e){return f({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher},e.key&&{key:e.key})})),[3,3];case 2:throw t=r.sent(),console.log("".concat(t," 💥 💥 💥")),t;case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.search.page;S.search.page=e;var n=(e-1)*S.search.itemsPerPage,t=n+S.search.itemsPerPage;return S.search.result.slice(n,t)},O=function(){localStorage.setItem("bookmarks",JSON.stringify(S.bookmarks))},j=function(e){S.bookmarks.push(e),e.id===S.recipe.id&&(S.recipe.bookmarked=!0),O()},x=function(e){var n=S.bookmarks.findIndex((function(n){return n.id===e}));S.bookmarks.splice(n,1),e===S.recipe.id&&(S.recipe.bookmarked=!1),O()};(k=localStorage.getItem("bookmarks"))&&(S.bookmarks=JSON.parse(k));var P=function(){var e=c((function(e){var n,t,r,i,a,o,c,s;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),n=m(e),t=Object.fromEntries(n),r=w(e.getAll("quantity")),i=w(e.getAll("unit")),a=w(e.getAll("description")),o=r.map((function(e,n){if(""===e||""===i[n]||""===a[n])throw new Error("All fields must be filled! Please do it 🙂");return{quantity:e?+e:null,unit:i[n],description:a[n]}})),c={title:t.title,source_url:t.sourceUrl,image_url:t.image,publisher:t.publisher,cooking_time:+t.cookingTime,servings:+t.servings,ingredients:o},[4,E("".concat(l,"?key=").concat(d),c)];case 1:return s=u.sent(),S.recipe=H(s),j(S.recipe),[3,3];case 2:throw u.sent();case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=c((function(e,n){var t,r,i;return u(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),(t=S.search.result.find((function(e){return e.id===n})))&&t.key===e?[4,fetch("".concat(l,"/").concat(n,"?key=").concat(e),{method:"DELETE"})]:[3,2];case 1:a.sent(),r=S.search.result.findIndex((function(e){return e.id===n})),S.search.result.splice(r,1),x(n),a.label=2;case 2:return[3,4];case 3:throw i=a.sent(),console.log(i),i;case 4:return[2]}}))}));return function(n,t){return e.apply(this,arguments)}}();function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function T(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,n,t){return n&&T(e.prototype,n),t&&T(e,t),e}function I(e,n){return I=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},I(e,n)}function C(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&I(e,n)}function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function D(e){return U(e)}function W(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?L(e):n}function z(e){var n=B();return function(){var t,r=D(e);if(n){var i=D(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return W(this,t)}}var J;J=a("m9izq").getBundleURL("2FzHl")+a("3DHSB").resolve("95ino");var Q,Y=function(){function e(){R(this,e),p(this,"_data",void 0)}return N(e,[{key:"render",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;var t=this._generateMarkup();if(!n)return t;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}},{key:"update",value:function(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;var n=this._generateMarkup(),t=document.createRange().createContextualFragment(n),r=Array.from(t.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((function(e,n){var t,r=i[n];e.isEqualNode(r)||""===(null===(t=e.firstChild)||void 0===t?void 0:t.nodeValue.trim())||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((function(e){return r.setAttribute(e.name,e.value)}))}))}},{key:"_clear",value:function(){this._parentElement.innerHTML=""}},{key:"renderSpinner",value:function(){var e='\n      <div class="spinner">\n        <svg>\n          <use href="'.concat(n(J),'#icon-loader"></use>\n        </svg>\n      </div>\n  ');this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}},{key:"renderError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._errorMsg,t="\n    <div class='error'>\n    <div>\n    <svg>\n    <use href='".concat(n(J),"#icon-alert-triangle'></use>\n    </svg>\n      </div>\n      <p>").concat(e,"</p>\n    </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}},{key:"renderMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._message,t="\n    <div class='message'>\n    <div>\n    <svg>\n    <use href='".concat(n(J),"#icon-smile'></use>\n    </svg>\n      </div>\n      <p>").concat(e,"</p>\n    </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}]),e}(),$=new(function(e){C(t,(0,Y));var n=z(t);function t(){var e;return R(this,t),p(L(e=n.call(this)),"_parentElement",document.querySelector(".upload")),p(L(e),"_message","Recipe was successfuly uploaded 👍"),p(L(e),"_ingredientNum",3),p(L(e),"_popupWindow",document.querySelector(".add-recipe-window")),p(L(e),"_btnAddField",document.querySelector(".btn--new-field")),p(L(e),"_btnRemoveField",document.querySelector(".btn--remove-field")),p(L(e),"_columnIngredients",document.querySelector(".upload__ingredients")),p(L(e),"_overlay",document.querySelector(".overlay")),p(L(e),"_btnOpen",document.querySelector(".nav__btn--add-recipe")),p(L(e),"_btnClose",document.querySelector(".btn--close-modal")),e._addHandlerShowWindow(),e._addHandlerHideWindow(),e._addHandlerAddNewField(),e._addHandlerRemoveField(),e}return N(t,[{key:"controlWindow",value:function(){this._popupWindow.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}},{key:"addNewField",value:function(){this._generateMarkup(),document.querySelectorAll(".upload__ingredient-column").length>=20&&(this._btnAddField.style.display="none")}},{key:"removeField",value:function(e){if(e.target.closest(".btn--remove-field")){e.target.closest(".upload__ingredient-column").remove(),document.querySelectorAll(".upload__ingredient-column").length<20&&(this._btnAddField.style.display="block");var n=document.querySelectorAll("label.ingredient");this._ingredientNum=n.length,n.forEach((function(e,n){e.textContent="Ingredient ".concat(n+1)}))}}},{key:"_addHandlerShowWindow",value:function(){this._btnOpen.addEventListener("click",this.controlWindow.bind(this))}},{key:"_addHandlerHideWindow",value:function(){this._btnClose.addEventListener("click",this.controlWindow.bind(this)),this._overlay.addEventListener("click",this.controlWindow.bind(this))}},{key:"_addHandlerAddNewField",value:function(){this._btnAddField.addEventListener("click",this.addNewField.bind(this))}},{key:"_addHandlerRemoveField",value:function(){this._parentElement.addEventListener("click",this.removeField.bind(this))}},{key:"addHandlerUpload",value:function(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault(),e(new FormData(this))}))}},{key:"_generateMarkup",value:function(){this._ingredientNum++;var e='\n      <div class="upload__ingredient-column">\n        <label class="ingredient">Ingredient '.concat(this._ingredientNum,'</label>\n        <div class="upload__ingredients-wrapper">\n          <input\n            type="text"\n            name="quantity"\n            placeholder="Quantity"\n          />\n          <input\n            type="text"\n            name="unit"\n            placeholder="Unit"\n          />\n          <input\n            type="text"\n            name="description"\n            placeholder="Description"\n          />\n          <div class="btn--remove-field">&times;</div>\n        </div>\n      </div>\n    ');this._columnIngredients.insertAdjacentHTML("beforeend",e)}}]),t}()),G=new(function(e){C(r,(0,Y));var t=z(r);function r(){var e;return R(this,r),p(L(e=t.apply(this,arguments)),"_parentElement",""),e}return N(r,[{key:"_generateMarkup",value:function(){var e=window.location.hash.slice(1);return'\n    <li data-id="'.concat(this._data.id,'" class="preview">\n        <div class="preview__menu \n        ').concat(this._data.key?"":"hidden",'">\n          <svg class="preview__menu-icon">\n            <use href="').concat(n(J),'#icon-dots-vertical"></use>\n          </svg>\n          <div class="preview__action-window hidden">\n            <ul class="action-window ').concat(this._data.key?"":"hidden",'">\n              <li class="action-window__item">\n                <svg class="action-window__icon">\n                  <use href="').concat(n(J),'#icon-delete-outline"></use>\n                </svg>\n                <span class="action-window__text">delete</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <a class="preview__link ').concat(this._data.id===e?"preview__link--active":"",'" href="#').concat(this._data.id,'">\n            <figure class="preview__fig">\n               <img src="').concat(this._data.image,'" alt="').concat(this._data.title,'" />\n            </figure>\n            <div class="preview__data">\n               <h4 class="preview__title">\n               ').concat(this._data.title,'</h4>\n               <p class="preview__publisher">\n               ').concat(this._data.publisher,'</p>\n              <div class="preview__user-generated ').concat(this._data.key?"":"hidden",'">\n                <svg>\n                <use href="').concat(n(J),'#icon-user"></use>\n                </svg>\n              </div>\n              </div>\n            </div>\n        </a>\n    </li>')}}]),r}()),V=new(function(e){C(t,(0,Y));var n=z(t);function t(){var e;return R(this,t),p(L(e=n.apply(this,arguments)),"_parentElement",document.querySelector(".bookmarks__list")),p(L(e),"_errorMsg","No bookmarks yet. Find a nice recipe and bookmark it 👨‍🍳"),p(L(e),"_message",""),e}return N(t,[{key:"addHandlerRender",value:function(e){window.addEventListener("load",e)}},{key:"_generateMarkup",value:function(){return this._data.map((function(e){return G.render(e,!1)})).join("")}}]),t}()),K=new(function(e){C(t,(0,Y));var n=z(t);function t(){var e;return R(this,t),p(L(e=n.call(this)),"_parentElement",document.querySelector(".results")),p(L(e),"_errorMsg","Not found!"),p(L(e),"_message","Your recipe has been successfully deleted 🔥"),e._addHandlerClick(),e}return N(t,[{key:"_addHandlerClick",value:function(){this._parentElement.addEventListener("click",(function(e){var n=e.target.closest(".preview__menu");n&&n.querySelector(".preview__action-window").classList.toggle("hidden")}))}},{key:"addHandlerRemove",value:function(e){this._parentElement.addEventListener("click",(function(n){var t=n.target.closest(".action-window__item"),r=n.target.closest(".preview");if(t&&r){var i=r.dataset.id;e(d,i)}}))}},{key:"_generateMarkup",value:function(){}}]),t}()),X=new(function(e){C(r,(0,Y));var t=z(r);function r(){var e;return R(this,r),p(L(e=t.apply(this,arguments)),"_parentElement",document.querySelector(".pagination")),e}return N(r,[{key:"addHandlerClick",value:function(e){this._parentElement.addEventListener("click",(function(n){var t=n.target.closest(".btn--inline");if(t){var r=+t.dataset.page;e(r)}}))}},{key:"_generateMarkup",value:function(){var e=Math.ceil(this._data.result.length/this._data.itemsPerPage),n=this._data.page;return 1===n&&e>1?this._generateMarkupButton("next",n):n===e&&e>1?this._generateMarkupButton("prev",n):n<e?this._generateMarkupButton("other",n):""}},{key:"_generateMarkupButton",value:function(e,t){var r='<button class="btn--inline pagination__btn--prev" data-page="'.concat(t-1,'">\n            <svg class="search__icon">\n              <use href="').concat(n(J),'#icon-arrow-left"></use>\n            </svg>\n            <span>Page ').concat(t-1,"</span>\n        </button>"),i='<button class="btn--inline pagination__btn--next" data-page="'.concat(t+1,'">\n            <span>Page ').concat(t+1,'</span>\n            <svg class="search__icon">\n              <use href="').concat(n(J),'#icon-arrow-right"></use>\n            </svg>\n        </button>');return"next"===e?i:"prev"===e?r:r+i}}]),r}());function Z(e,n,t,r,i){var a=[2,3,5];if(!0===i)for(var o=3;o*o<=e;o+=2)e%o==0&&a.push(o);for(var c=0,s=e,u=n;c<=a.length;)s%a[c]==0&&u%a[c]==0?(a[c],s/=a[c],u/=a[c]):c++;return function(e,n,t,r){return 1===e&&1===n?(t="".concat(r).concat((parseInt(t)+1).toString()),"".concat(t)):0===n?"".concat(r).concat(t):"0"==t?"".concat(r).concat(n,"/").concat(e):"".concat(r).concat(t," ").concat(n,"/").concat(e)}(u,s,t,r)}Q=function(e){var n;if(e<0?(e=Math.abs(e),n="-"):n="",void 0===e)return"Your input was undefined.";if(isNaN(e))return'"'.concat(e,'" is not a number.');if(1e16==e)return"".concat(n,"9999999999999999");if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return"".concat(n).concat(e);if(e<1e-6)return"0";var t,r=e.toString(),i=r.split("."),a=i[0];if("0"==t&&"0"!==a)return a;if("0"==t&&"0"==a)return"0";if("99"==(t=r.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return"".concat(a," 99/100");if("99"==t&&"0"==a)return"99/100";if(1-parseFloat(".".concat(t))<.0011&&(t="999"),null==t)return a;var o=t.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(o&&t.length>2){var c=o[0].split("").reverse().join(""),s=o[1].split("").reverse().join("");if(s.length>1){for(var u=s.split(""),l=1,d=0;d<u.length;d++)l/=u[0]/u[d];1===l&&(s=u[0])}return s.length>1&&s.length%2==0&&(s=parseInt(s.slice(0,s.length/2),10)-parseInt(s.slice(s.length/2,s.length),10)==0?s.slice(0,s.length/2):s),function(e,n,t,r,i){var a=!0,o=e.length-t.length>=1?e.length-t.length:1,c=Math.pow(10,o),s=parseFloat("0.".concat(e)),u=Math.pow(10,n.length);return Z(Math.round((s*u-s)*Math.pow(10,o)),(u-1)*c,r,i,a)}(t,s,c,a,n)}return function(e,n,t){var r=!1,i=parseInt(e,10),a=Math.pow(10,e.length);return Z(i,a,n,t,r)}(t,a,n)};var ee=new(function(e){C(r,(0,Y));var t=z(r);function r(){var e;return R(this,r),p(L(e=t.apply(this,arguments)),"_parentElement",document.querySelector(".recipe")),p(L(e),"_errorMsg","We could not find that recipe. Please try another one!"),p(L(e),"_message",""),e}return N(r,[{key:"addHandlerRender",value:function(e){["hashchange","load"].forEach((function(n){return window.addEventListener(n,e)}))}},{key:"addHandlerUpdateServings",value:function(e){this._parentElement.addEventListener("click",(function(n){var t=n.target.closest(".btn--update-servings");if(t){var r=+t.dataset.serving;r>0&&e(r)}}))}},{key:"addHandlerBookmark",value:function(e){this._parentElement.addEventListener("click",(function(n){n.target.closest(".btn--bookmark")&&e()}))}},{key:"_generateMarkup",value:function(){return'\n        <figure class="recipe__fig">\n          <img src="'.concat(this._data.image,'" alt="').concat(this._data.title,'" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>').concat(this._data.title,'</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="').concat(n(J),'#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">').concat(this._data.cookingTime,'</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="').concat(n(J),'#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">').concat(this._data.servings,'</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button data-serving="').concat(this._data.servings-1,'" class="btn--tiny btn--update-servings">\n                <svg>\n                  <use href="').concat(n(J),'#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button data-serving="').concat(this._data.servings+1,'" class="btn--tiny btn--update-servings">\n                <svg>\n                  <use href="').concat(n(J),'#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n          <div class="recipe__user-generated ').concat(this._data.key?"":"hidden",'">\n            <svg>\n              <use href="').concat(n(J),'#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="').concat(n(J),"#icon-bookmark").concat(this._data.bookmarked?"-fill":"",'"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ').concat(this._data.ingredients.map(this._generateMarkupIngredient).join(""),'\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">').concat(this._data.publisher,'</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="').concat(this._data.sourceUrl,'"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="').concat(n(J),'#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>')}},{key:"_generateMarkupIngredient",value:function(e){return'\n          <li class="recipe__ingredient">\n            <svg class="recipe__icon">\n              <use href="'.concat(n(J),'#icon-check"></use>\n            </svg>\n            <div class="recipe__quantity">').concat(e.quantity?n(Q)(e.quantity.toFixed(2)):"",'</div>\n            <div class="recipe__description">\n              <span class="recipe__unit">').concat(e.unit,"</span>\n              ").concat(e.description,"\n            </div>\n          </li>")}}]),r}()),ne=new(function(e){C(t,(0,Y));var n=z(t);function t(){var e;return R(this,t),p(L(e=n.apply(this,arguments)),"_parentElement",document.querySelector(".results")),p(L(e),"_errorMsg","No recipes found for your query. Please try again 👨‍🍳"),p(L(e),"_message",""),e}return N(t,[{key:"_generateMarkup",value:function(){return this._data.map((function(e){return G.render(e,!1)})).join("")}}]),t}()),te=new(function(){function e(){R(this,e),p(this,"_parentElement",document.querySelector(".search"))}return N(e,[{key:"addHandlerSearch",value:function(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault(),e()}))}},{key:"getQuery",value:function(){var e=this._parentElement.querySelector(".search__field").value;return this._clearInputField(),e}},{key:"_clearInputField",value:function(){this._parentElement.querySelector(".search__field").value=""}}]),e}()),re=function(){var e=c((function(){var e,n;return u(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),(e=window.location.hash.slice(1))?(ee.renderSpinner(),ne.update(A()),[4,q(e)]):[2];case 1:return t.sent(),V.update(S.bookmarks),ee.render(S.recipe),[3,3];case 2:return n=t.sent(),ee.renderError(),console.error(n),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=c((function(){var e,n;return u(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),(e=te.getQuery())?(ne.renderSpinner(),[4,M(e)]):[2];case 1:return t.sent(),ne.render(A(1)),X.render(S.search),[3,3];case 2:return n=t.sent(),console.log(n),ne.renderError(n),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),ae=function(e){try{ne.render(A(e)),X.render(S.search)}catch(e){console.log(e),X.renderError(e)}},oe=function(e){var n;n=e,S.recipe.ingredients.forEach((function(e){e.quantity=e.quantity*n/S.recipe.servings})),S.recipe.servings=n,ee.update(S.recipe)},ce=function(){S.recipe.bookmarked?x(S.recipe.id):j(S.recipe),ee.update(S.recipe),V.render(S.bookmarks)},se=function(){V.render(S.bookmarks)},ue=function(){var e=c((function(e){var n;return u(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),$.renderSpinner(),[4,P(e)];case 1:return t.sent(),$.renderMessage(),ee.render(S.recipe),V.render(S.bookmarks),window.history.pushState(null,"","#".concat(S.recipe.id)),setTimeout((function(){$.controlWindow()}),2500),[3,3];case 2:return n=t.sent(),console.log(n),$.renderError(n.message),[3,3];case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),le=function(){var e=c((function(e,n){var t;return u(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),ne.renderSpinner(),[4,F(e,n)];case 1:return r.sent(),K.update(S.search.result),window.history.pushState(null,"","#"),ne.render(A()),V.render(S.bookmarks),ee.renderMessage("Your recipe has been successfully deleted 🔥"),[3,3];case 2:return t=r.sent(),console.log(t),K.renderError(t.message),[3,3];case 3:return[2]}}))}));return function(n,t){return e.apply(this,arguments)}}();ee.addHandlerRender(re),ee.addHandlerUpdateServings(oe),ee.addHandlerBookmark(ce),te.addHandlerSearch(ie),X.addHandlerClick(ae),V.addHandlerRender(se),$.addHandlerUpload(ue),K.addHandlerRemove(le);
//# sourceMappingURL=index.ba6b1cfd.js.map
