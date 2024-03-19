/*! For license information please see main.c200ccf9.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(r){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:C(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};p(S,u,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==o&&a.call(L,u)&&(S=L);var E=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,i,c,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==t(p)&&a.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function C(t,e,n){var o=h;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,_;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=p(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,p(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},k(q.prototype),p(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new q(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),p(E,l,"Generator"),p(E,u,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"ef200405-8bbd-4a02-a348-e756c5a720fe","Content-Type":"application/json"}};function a(t,e){return i.apply(this,arguments)}function i(){return(i=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.ok){t.next=4;break}return t.next=3,Promise.reject("Ошибка: ".concat(r.status,". ").concat(n));case 3:case 6:return t.abrupt("return",t.sent);case 4:return t.next=6,r.json();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",a(r,"Не удалось получить данные о пользователе"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",a(r,"Не удалось получить карточки"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=n(e().mark((function t(r,n){var i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r,about:n})});case 2:return i=t.sent,t.abrupt("return",a(i,"Не удалось обновить информацию о пользователе"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=n(e().mark((function t(r,n){var i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r,link:n})});case 2:return i=t.sent,t.abrupt("return",a(i,"Не удалось добавить карточку"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n,"Не удалось удалить карточку"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n,"Не удалось лайкнуть карточку"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n,"Не удалось удалить карточку"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})});case 2:return n=t.sent,t.abrupt("return",a(n,"Не удалось обновить аватар"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e,r,n,o,a){var i=function(t){return t.querySelector(".card").cloneNode(!0)}(r),c=i.querySelector(".card__image"),u=i.querySelector(".card__like-button"),s=i.querySelector(".card__like-counter"),l=i.querySelector(".card__delete-button");return c.src=t.link,c.alt=t.name,i.querySelector(".card__title").textContent=t.name,s.textContent=t.likes.length,t.owner._id!==e?l.remove():i.querySelector(".card__delete-button").addEventListener("click",(function(e){n(t,e)})),t.likes.length>0&&function(t,e){return t.some((function(t){return t._id===e}))}(t.likes,e)&&u.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(e){u.classList.contains("card__like-button_is-active")?function(t,e){(function(t){return d.apply(this,arguments)})(e).then((function(e){t.target.closest(".card__like").querySelector(".card__like-counter").textContent=e.likes.length,t.target.classList.remove("card__like-button_is-active")})).catch((function(t){console.log(t)}))}(e,t._id):o(e,t._id)})),c.addEventListener("click",(function(e){a(e,t)})),i}function v(t,e){(function(t){return f.apply(this,arguments)})(e).then((function(e){t.target.closest(".card__like").querySelector(".card__like-counter").textContent=e.likes.length,t.target.classList.add("card__like-button_is-active")})).catch((function(t){console.log(t)}))}function m(t){t.classList.add("popup_is-opened"),t.addEventListener("mousedown",b),t.querySelector(".popup__close").addEventListener("click",g),document.addEventListener("keydown",w)}function _(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",w)}function b(t){t.target.closest(".popup__content")||_(t.currentTarget)}function g(t){_(t.target.closest(".popup_is-opened"))}function w(t){"Escape"===t.key&&_(document.querySelector(".popup_is-opened"))}function S(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.inputErrorClassActive),n.textContent=""}function x(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r.inactiveButtonClass)):(e.disabled=!0,e.classList.add(r.inactiveButtonClass))}function L(t,e){var r=t.querySelectorAll(e.inputSelector),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){S(t,r,e)})),n.disabled=!0,n.classList.add(e.inactiveButtonClass)}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),C=document.querySelector(".profile__image"),O=document.querySelector(".places__list"),j=document.querySelector("#card-template").content,A=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),P=document.querySelector(".profile__image-img"),N=document.querySelector(".popup__button_confirm"),U="",G="",B=document.querySelector(".popup_type_edit"),I=document.querySelector(".popup_type_new-card"),D=document.querySelector(".popup_type_image"),F=document.querySelector(".popup_type_change_avatar"),J=document.querySelector(".popup_type_confirm"),M=document.querySelector(".popup_type_error"),H=M.querySelector(".popup__title"),V=D.querySelector(".popup__image"),Y=D.querySelector(".popup__caption"),z=B.querySelector(".popup__form"),$=I.querySelector(".popup__form"),K=F.querySelector(".popup__form"),Q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",inputErrorClassActive:"popup__input-error_active",errorClass:"popup__error_visible"};function R(t,e){t?e.textContent="Сохранение...":t||(e.textContent="Сохранить")}function W(t,e){t.target.classList.contains("card__delete-button")||(V.src=e.link,V.alt=e.name,Y.textContent=e.name,m(D))}function X(t,e){G=e.target.closest(".card"),U=t._id,m(J)}Promise.all([function(){return c.apply(this,arguments)}(),function(){return u.apply(this,arguments)}()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];A.textContent=o.name,T.textContent=o.about,P.alt=o.name,P.src=o.avatar,a.forEach((function(t){O.append(y(t,o._id,j,X,v,W))}))})).catch((function(t){m(M),H.textContent=t})),k.addEventListener("click",(function(){L(z,Q),m(B),z.name.value=A.textContent,z.description.value=T.textContent})),q.addEventListener("click",(function(){m(I)})),z.addEventListener("submit",(function(t){t.preventDefault(),R(!0,t.submitter),function(t,e){return s.apply(this,arguments)}(t.target.name.value,t.target.description.value).then((function(e){A.textContent=e.name,T.textContent=e.about,_(t.target.closest(".popup")),L($,Q)})).catch((function(t){m(M),H.textContent=t})).finally((function(){R(!1,t.submitter)}))})),$.addEventListener("submit",(function(t){t.preventDefault(),R(!0,t.submitter),function(t,e){return l.apply(this,arguments)}(t.target["place-name"].value,t.target.link.value).then((function(e){O.prepend(y(e,e.owner._id,j,X,v,W)),t.target.closest("form").reset(),_(t.target.closest(".popup")),L($,Q)})).catch((function(t){m(M),H.textContent=t})).finally((function(){R(!1,t.submitter)}))})),K.addEventListener("submit",(function(t){t.preventDefault(),R(!0,t.submitter),function(t){return h.apply(this,arguments)}(t.target.link.value).then((function(e){P.src=e.avatar,t.target.closest("form").reset(),_(F),L(K,Q)})).catch((function(t){m(M),H.textContent=t})).finally((function(){R(!1,t.submitter)}))})),C.addEventListener("click",(function(){m(F)})),M.querySelector(".popup__button_error").addEventListener("click",(function(){_(M)})),N.addEventListener("click",(function(){(function(t){return p.apply(this,arguments)})(U).then((function(t){var e;(e=G).classList.add("delete-card"),setTimeout((function(){e.remove()}),300),_(J)})).catch((function(t){m(M),H.textContent=t}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);x(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.validationError):e.setCustomValidity(""),e.validity.valid?S(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.classList.add(n.inputErrorClassActive),o.textContent=r}(t,e,e.validationMessage,r)}(t,o,e),x(r,n,e)}))}))}(e,t)}))}(Q)})();