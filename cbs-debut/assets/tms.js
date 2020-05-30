!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=21)}({0:function(e,t,o){"use strict";var n={debug:!1,availableLocalesById:{},availableLocales:[],primaryLocaleById:{},merchantSelectedLocale:"shop_base",hasFlag:"yes",storage:{enabled:!0,key:"tms"},selectors:{label:"ht-tms-dropdown-label",selected:"ht-tms-dropdown__selected"},classNames:{dropdown:"ht-tms-dropdown",label:"ht-tms-dropdown__label",selected:"ht-tms-dropdown__selected",arrow:"ht-tms-dropdown__arrow",listContainer:"ht-tms-dropdown__list-container",list:"ht-tms-dropdown__list",item:"ht-tms-dropdown__list-item"}};const i=()=>{};class s{constructor(e=!1){this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled")}get log(){return this.enabled?Function.prototype.bind.call(console.log,console):i}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):i}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):i}}function r(e){const t=`; ${document.cookie}`.split(`; ${e}=`);return 2===t.length?t.pop().split(";").shift():null}function a(e,t,o){let n;if(o){const e=new Date;e.setTime(e.getTime()+1e3*o),n=`; expires=${e.toGMTString()}`}else n="";document.cookie=`${e}=${t}${n}; path=/`}const l=e=>null!=e?e.constructor:null,d=(e,t)=>Boolean(e&&t&&e instanceof t),c=e=>null==e,m=e=>l(e)===Object,h=e=>l(e)===String,p=e=>Array.isArray(e),u=e=>d(e,NodeList),f=e=>c(e)||(h(e)||p(e)||u(e))&&!e.length||m(e)&&!Object.keys(e).length;var g=c,w=m,b=h,y=e=>l(e)===Function,v=p,x=u,_=e=>d(e,Element),k=f;const L=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,null)});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e})();function C(e,t,o,n=!1,i=!0,s=!1){if(!e||!("addEventListener"in e)||k(t)||!y(o))return;const r=t.split(" ");let a=s;L&&(a={passive:i,capture:s}),r.forEach(t=>{this&&this.eventListeners&&n&&this.eventListeners.push({element:e,type:t,callback:o,options:a}),e[n?"addEventListener":"removeEventListener"](t,o,a)})}function T(e,t="",o,n=!0,i=!1){C.call(this,e,t,o,!0,n,i)}function S(){this&&this.eventListeners&&(this.eventListeners.forEach(e=>{const{element:t,type:o,callback:n,options:i}=e;t.removeEventListener(o,n,i)}),this.eventListeners=[])}function I(e=""){return e.toString().replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function B(e={},...t){if(!t.length)return e;const o=t.shift();return w(o)?(Object.keys(o).forEach(t=>{w(o[t])?(Object.keys(e).includes(t)||Object.assign(e,{[t]:{}}),B(e[t],o[t])):Object.assign(e,{[t]:o[t]})}),B(e,...t)):e}function N(e,t,o,n=!1){let i;return i=n?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),w(t)&&function(e,t){_(e)&&!k(t)&&Object.entries(t).filter(([,e])=>!g(e)).forEach(([t,o])=>e.setAttribute(t,o))}(i,t),b(o)&&(i.innerText=o),i}function j(e){x(e)||v(e)?Array.from(e).forEach(j):_(e)&&_(e.parentNode)&&e.parentNode.removeChild(e)}function E(e,t,o){if(x(e))return Array.from(e).map(e=>E(e,t,o));if(_(e)){let n="toggle";return void 0!==o&&(n=o?"add":"remove"),e.classList[n](t),e.classList.contains(t)}return!1}function O(e){let t=(e||window.location.pathname).split("/");t=t.splice(1,t.length);const o=t[0].match(/^[a-zA-Z]{2}$/)||t[0].match(/^[a-zA-Z]{2}-[a-zA-Z]{2}$/);return null===o?null:o[0]}class A{constructor(e){this.enabled=e.config.storage.enabled,this.key=e.config.storage.key}static get supported(){try{if(!("localStorage"in window))return!1;const e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}get(e){if(!A.supported||!this.enabled)return null;const t=window.localStorage.getItem(this.key);if(k(t))return null;const o=JSON.parse(t);return b(e)&&e.length?o[e]:o}set(e){if(!A.supported||!this.enabled)return;if(!w(e))return;let t=this.get();k(t)&&(t={}),B(t,e),window.localStorage.setItem(this.key,JSON.stringify(t))}}var M=A;var $=class{constructor(e){this.title=e.title||"Title",this.bodyText=e.bodyText||"Body text",this.cancelButtonText=e.cancelButtonText,this.confirmButtonText=e.confirmButtonText||"Confirm",this.confirmButtonLink=e.confirmButtonLink||null,this.elements={container:null,closeButton:null,cancelButton:null,confirmButton:null,backdrop:null},this.classNames={open:"tms-modal-open",backdrop:"tms-modal-backdrop",fade:"tms-fade",show:"tms-show",closeIcon:"tms-close-icon"}}createDialog(){const e=N("div",{class:"tms-modal tms-fade",tabindex:"-1",role:"dialog","aria-labelledby":"PreviewInLiveSite","aria-hidden":"true"}),t=N("div",{class:"tms-modal-dialog tms-modal-dialog-centered",role:"document"}),o=N("div",{class:"tms-modal-content"}),n=N("div",{class:"tms-modal-header"}),i=N("h5",{class:"tms-modal-title"},this.title),s=N("button",{type:"button",class:"tms-modal-close","data-dismiss":"modal","aria-label":"Close"}),r=N("span",{"aria-hidden":"true"}),a=this.createSvgIconClose(),l=N("div",{class:"tms-modal-body"}),d=N("p",{},this.bodyText),c=N("div",{class:"tms-modal-footer"});let m=N("span");g(this.cancelButtonText)||(m=N("button",{type:"button",class:"tms-modal-btn tms-modal-btn-secondary","data-dismiss":"modal"},this.cancelButtonText));const h=N("button",{class:"tms-modal-btn tms-modal-btn-primary"},this.confirmButtonText);return this.elements.container=e,this.elements.closeButton=s,this.elements.cancelButton=m,this.elements.confirmButton=h,r.appendChild(a),s.appendChild(r),n.appendChild(i),n.appendChild(s),l.appendChild(d),c.appendChild(m),c.appendChild(h),o.appendChild(n),o.appendChild(l),o.appendChild(c),t.appendChild(o),e.appendChild(t),e}createBackDrop(){return N("div",{class:`${this.classNames.backdrop} \n                    ${this.classNames.fade}`})}createSvgIconClose(){const e=N("svg",{x:"0px",y:"0px",viewBox:"0 0 60 60","enable-background":"new 0 0 60 60",class:this.classNames.closeIcon},"",!0),t=N("g",{},"",!0),o=N("line",{fill:"none",stroke:"black","stroke-width":"10",transform:"translate(5, 5)","stroke-miterlimit":"10",x1:"5",y1:"5",x2:"50",y2:"50","stroke-linecap":"round"},"",!0),n=N("line",{fill:"none",stroke:"black","stroke-width":"10",transform:"translate(5, 5)","stroke-miterlimit":"10",x1:"5",y1:"50",x2:"50",y2:"5","stroke-linecap":"round"},"",!0),i=N("g",{},"",!0),s=N("circle",{opacity:"0",fill:"none","stroke-width":"3",stroke:"black","stroke-miterlimit":"10",cx:"30",cy:"30",r:"40"},"",!0);return t.appendChild(o),t.appendChild(n),i.appendChild(s),e.appendChild(t),e.appendChild(s),e}attachListeners(){T(this.elements.closeButton,"click",()=>{this.hide()}),T(this.elements.confirmButton,"click",()=>{g(this.confirmButtonLink)?this.hide():window.open(this.confirmButtonLink,"_blank")}),g(this.elements.cancelButton)||T(this.elements.cancelButton,"click",()=>{this.hide()})}inject(){const e=document.querySelector("body");if(g(this.elements.container)){const t=this.createDialog();e.appendChild(t),this.attachListeners()}}show(){const e=document.querySelector("body"),t=this.createBackDrop();this.elements.backdrop=t,e.appendChild(t),E(e,this.classNames.open,!0),E(this.elements.backdrop,this.classNames.show,!0)}hide(){E(document.querySelector("body"),this.classNames.open,!1),E(this.elements.backdrop,this.classNames.show,!1),setTimeout(()=>{j(this.elements.backdrop)},250)}};var D=class{constructor(e){this.selector=e}container(){const{selector:e}=this,{elements:t}=e;T.call(e,t.dropdownSelectedNode,"click keydown",t=>{e.debug.log(`${t.type} event trigger on`,t.currentTarget),e.toggleListVisibility(t)}),Object.keys(t.listItemsById).forEach(o=>{T.call(e,t.listItemsById[o],"click keydown",t=>{if(e.debug.log(`${t.type} event trigger on`,t.currentTarget),"click"===t.type&&(a("tms_default_locale",t.currentTarget.id,86400),e.setSelectedListItem(t),e.closeList(),e.inIframe?(e.dialog.show(),e.debug.log("The selector is in Shopify theme editor, don't redirect.")):e.goToLocale(t.currentTarget.id)),"keydown"===t.type)switch(t.key){case"Enter":a("tms_default_locale",t.currentTarget.id,86400),e.setSelectedListItem(t),e.closeList(),e.inIframe?e.debug.log("The selector is in Shopify theme editor, don't redirect."):e.goToLocale(t.currentTarget.id);break;case"ArrowDown":e.focusNextListItem("ArrowDown");break;case"ArrowUp":e.focusNextListItem("ArrowUp");break;case"Escape":e.closeList()}})})}};/(iPhone|iPod)/gi.test(navigator.platform),/(iPad|iPhone|iPod)/gi.test(navigator.platform),document.documentMode,window.navigator.userAgent.includes("Edge")||!document.documentMode&&window.StyleMedia,!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/"),/constructor/i.test(window.HTMLElement)||(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),!window.chrome||!window.chrome.webstore&&window.chrome.runtime,!window.chrome||!window.chrome.webstore&&!window.chrome.runtime||navigator.userAgent.indexOf("Edg"),(window.chrome&&(window.chrome.webstore||window.chrome.runtime)||window.opr&&opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0)&&window.CSS,"WebkitAppearance"in document.documentElement.style&&/Edge/.test(navigator.userAgent);const F={min:600,max:899},z={createLocaleItem(e){const t=N("li",{class:this.config.classNames.item,tabindex:"0",id:`${e}`});if("yes"===this.config.hasFlag){const o=N("img",{src:`https://s3.amazonaws.com/shopifytmsprod/img/national_flag/${e}.png`});t.appendChild(o)}const o=N("span",{},I(this.config.availableLocalesById[e]));return t.appendChild(o),t},create(){const{createLocaleItem:e}=z;this.elements.dropdown=null;const t=N("div",{class:this.config.classNames.dropdown});this.elements.dropdown=t;const o=N("span",{id:this.config.selectors.label,class:this.config.classNames.label});t.appendChild(o);const n=N("div",{role:"button","aria-labelledby":this.config.selectors.label,id:this.config.selectors.selected,class:this.config.classNames.selected,tabIndex:"0"});this.elements.dropdownSelectedNode=n;const i=e.call(this,Object.keys(this.config.primaryLocaleById)[0]),s=N("ul");s.appendChild(i),n.appendChild(s),t.appendChild(n);const r=N("svg",{class:this.config.classNames.arrow,width:"10",height:"5",viewBox:"0 0 10 5","fill-rule":"evenodd",fill:"#5C5C5C"},"",!0);this.elements.dropdownArrow=r;const a=N("title",{},"Open drop down",!0),l=N("path",{d:"M10 0L5 5 0 0z"},"",!0);r.appendChild(a),r.appendChild(l),t.appendChild(r);const d=N("div",{"aria-expanded":"false",role:"list",class:this.config.classNames.listContainer});this.elements.listContainer=d;const c=N("ul",{class:this.config.classNames.list});return this.elements.list=c,Object.keys(this.config.availableLocalesById).forEach(t=>{const o=e.call(this,t);c.appendChild(o),this.elements.listItemsById[t]=o,this.elements.listItems.push(t)}),d.appendChild(c),t.appendChild(d),t},inject(){const e=z.create.call(this),{target:t}=this.elements,o=N("div",{class:"ht-tms--float-embedded ht-tms--float-bottom"});let n=!0;Object.keys(t).forEach(e=>{g(t[e])&&(n=!1,this.debug.error(`No target container found on ${e}. Cannot inject UI.`))}),n&&(window.innerWidth>F.max?"BODY"===t.desktop.tagName.toUpperCase()?(o.appendChild(e),t.desktop.appendChild(o)):t.desktopReferenceNode?t.desktop.insertBefore(e,t.desktopReferenceNode):t.desktop.appendChild(e):"BODY"===t.mobile.tagName.toUpperCase()?(o.appendChild(e),t.mobile.appendChild(o)):t.mobile.appendChild(e))}};var P=z;class U{constructor(e){this.debug=new s(!1);let t=window.hextom_tms;g(t)&&(t={},this.debug.error("Cannot find the store TMS config data.")),this.install=!0,this.config=B({},n,t),this.elements={body:document.querySelector("body"),target:e||{desktop:document.querySelector("body"),mobile:document.querySelector("body")},dropdown:null,list:null,listContainer:null,dropdownArrow:null,listItemsById:{},listItems:[],dropdownSelectedNode:null},this.inIframe=function(){try{return window.self!==window.top}catch(e){return!0}}(),this.inWhiteList=U.isWhiteList(),this.debug.log("Config",this.config),this.eventListeners=[],this.listeners=new D(this),this.storage=new M(this),P.inject.call(this),this.listeners.container(),this.displayCurrentLanguage(),this.checkInstall(),this.inIframe&&(this.debug.log("We are in an iframe, creating dialog..."),this.dialog=new $({title:"View TMS selector on your live site",bodyText:`To offer the best user experience, we disabled some TMS selector features in the Shopify theme editor, such as the locale redirection. The best way to experience the selector is by viewing it on your live site at ${window.location.origin}.`,confirmButtonText:"👍 Got it"}),this.dialog.inject()),this.debug.log("Elements",this.elements),this.debug.log("Event listeners",this.eventListeners)}checkInstall(){this.debug.log("Checking installation status...");const e=this.storage.get("check_result"),t=window.location.pathname,o=r("tms_previous_pathname");if(a("tms_previous_pathname",window.location.pathname),null===e||t===o){const e=new URL("https://tms.hextom.com/tms_install_check");e.searchParams.append("shop",window.Shopify.shop||""),function(e,t="text"){return new Promise((o,n)=>{try{const n=new XMLHttpRequest;if(!("withCredentials"in n))return;n.addEventListener("load",()=>{if("text"===t)try{o(JSON.parse(n.responseText))}catch(e){o(n.responseText)}else o(n.response)}),n.addEventListener("error",()=>{throw new Error(n.status)}),n.open("GET",e,!0),n.responseType=t,n.send()}catch(e){n(e)}})}(e,"json").then(e=>{const t=e.check_result;"installed"!==t&&(this.debug.log("The app was uninstalled. Destroy the selector."),this.install=!1,this.destroy()),this.storage.set({check_result:t}),this.inWhiteList?(this.debug.log("White list: Go to primary locale."),this.goToLocale(Object.keys(this.config.primaryLocaleById)[0])):this.goToDefaultLocale(),this.applyCartFormsActionLocale()}).catch(e=>{this.debug.error("Fetch error",e)})}else"installed"===e?(this.inWhiteList?(this.debug.log("White list: Go to primary locale."),this.goToLocale(Object.keys(this.config.primaryLocaleById)[0])):this.goToDefaultLocale(),this.applyCartFormsActionLocale()):(this.debug.log("The app was uninstalled. Destroy the selector."),this.install=!1,this.destroy())}static isWhiteList(){const e=["/pages/order-tracking-form","/apps/trackorder","/apps/shipway_track"];for(let t=0;t<e.length;t+=1)if(window.location.pathname.indexOf(e[t])>=0)return!0;return!1}goToDefaultLocale(){if(!this.install)return;const e=r("tms_default_locale"),t=this.config.availableLocales.includes(e),o=this.getVisitorLocale()||Object.keys(this.config.primaryLocaleById)[0],n="shop_base"===this.config.merchantSelectedLocale?Object.keys(this.config.primaryLocaleById)[0]:o,i=O();this.debug.log(`Default locale is: ${e}`),this.debug.log(`Default locale is available:  ${t}`),this.debug.log(`Visitor priority locale is: ${o}`),this.debug.log(`Merchant selected locale is: ${n}`),this.debug.log(`Current locale is: ${i}`),g(n)&&g(o)&&!t?this.debug.log("Stop: No TMS config. Stop goToDefaultLocale."):this.inIframe?this.debug.log("Stop: We are in an iframe. Stop goToDefaultLocale."):0!==document.referrer.length?e!==i&&(!g(e)&&t||(a("tms_default_locale",n,86400),this.goToLocale(n)),e&&this.goToLocale(e)):this.debug.log("Stop: No referrer. Stop goToDefaultLocale.")}applyCartFormsActionLocale(){if(!this.install)return;Array.from(document.getElementsByTagName("form")).filter(e=>e.action.includes("cart")||e.action.includes("checkout")||e.action.includes("search")).forEach(e=>{const t=e,o=e.action.replace(window.location.origin,""),n=O(o)||Object.keys(this.config.primaryLocaleById)[0],i=r("tms_default_locale")||Object.keys(this.config.primaryLocaleById)[0];n!==i&&(t.action=`/${i}${o}`)})}getVisitorLocale(){if(!window.navigator.language)return null;const e=[window.navigator.language.slice(0,2),window.navigator.language];for(let t=0;t<e.length;t+=1)if(this.elements.listItems.includes(e[t]))return e[t];return null}goToLocale(e){const t=Object.keys(this.config.primaryLocaleById)[0];let o=e;if(o===(O()||t))return;let n=window.location.pathname;const i=window.location.pathname.split("/"),s=O();s&&(n=i.slice(2,i.length).join("/")),o=t===o?"/":null!==s?`/${o}/`:`/${o}`,window.location.href=o+n}setSelectedListItem(e){const t=this.elements.dropdownSelectedNode,o=document.createElement("div");o.innerHTML=e.currentTarget.innerHTML,t.innerHTML=null,t.appendChild(o)}closeList(){this.elements.list.classList.remove("ht-tms-open"),this.elements.dropdownArrow.classList.remove("ht-tms-expanded"),this.elements.listContainer.setAttribute("aria-expanded",!1)}toggleListVisibility(e){const t=" "===e.key||"Enter"===e.key;"Escape"===e.key&&this.closeList(),("click"===e.type||t)&&(this.elements.list.classList.toggle("ht-tms-open"),this.elements.dropdownArrow.classList.toggle("ht-tms-expanded"),this.elements.listContainer.setAttribute("aria-expanded",this.elements.list.classList.contains("open")),"ArrowDown"===e.key&&this.focusNextListItem("ArrowDown"),"ArrowUp"===e.key&&this.focusNextListItem("ArrowUp"))}focusNextListItem(e){const t=document.activeElement.id;if("ht-tms-dropdown__selected"===t)document.querySelector(this.elements.listItems[0]).focus();else{const o=this.elements.listItems.indexOf(t);let n=null;if("ArrowDown"===e){o<this.elements.listItems.length-1&&(n=this.elements.listItems[o+1],document.querySelector(`#${n}`).focus())}else if("ArrowUp"===e){o>0&&(n=this.elements.listItems[o-1],document.querySelector(`#${n}`).focus())}}}displayCurrentLanguage(){const e=O()||Object.keys(this.config.primaryLocaleById)[0];let t=null;if(Object.keys(this.elements.listItemsById).forEach(o=>{o===e&&(t=this.elements.listItemsById[o])}),null===t)return;const o=t.innerHTML,n=document.createElement("div");n.innerHTML=o;const i=this.elements.dropdownSelectedNode;i.innerHTML=null,i.appendChild(n),this.elements.dropdown.classList.add("ht-tms-ready")}destroy(){var e;S.call(this),j(this.elements.dropdown),e="tms_default_locale",document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`,setTimeout(()=>{this.elements=null},200)}}t.a=U},1:function(e,t,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function a(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],d=o[l]||0,c="".concat(l," ").concat(d);o[l]=d+1;var m=a(c),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(r[m].references++,r[m].updater(h)):r.push({identifier:c,updater:g(h,t),references:1}),n.push(c)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,m=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function h(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function p(e,t,o){var n=o.css,i=o.media,s=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,f=0;function g(e,t){var o,n,i;if(t.singleton){var s=f++;o=u||(u=d(t)),n=h.bind(null,o,s,!1),i=h.bind(null,o,s,!0)}else o=d(t),n=p.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=a(o[n]);r[i].references--}for(var s=l(e,t),d=0;d<o.length;d++){var c=a(o[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}o=s}}}},2:function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var i=(r=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),s=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(s).concat([i]).join("\n")}var r,a,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&i[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},21:function(e,t,o){"use strict";o.r(t);o(22);var n=o(0);const i={desktop:document.querySelector(".site-header .site-header__icons .site-header__icons-wrapper"),mobile:document.querySelector("body")};new n.a(i)},22:function(e,t,o){var n=o(1),i=o(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(n(i,s),i.locals?i.locals:{});e.exports=r},23:function(e,t,o){(t=o(2)(!1)).push([e.i,'.ht-tms--float-embedded{position:fixed;top:auto;right:20px;bottom:20px;left:auto}.ht-tms-dropdown{display:inline-block;list-style:none;position:relative;cursor:pointer;padding:0;background-color:white;color:#444444;font-family:inherit;font-size:13px;opacity:0;transition:opacity 0.3s cubic-bezier(0, 0, 0.38, 0.9);z-index:1000000}.ht-tms-dropdown.ht-tms-ready{opacity:1}.ht-tms-dropdown__label{position:absolute;top:0;left:0;width:0;height:0;opacity:0}svg.ht-tms-dropdown__arrow{width:10px;height:5px;fill:#5C5C5C;position:absolute;right:10px;top:50%;transition:transform .2s linear;transform:translateY(-50%)}.ht-tms-dropdown__arrow.ht-tms-expanded{transform:translateY(-50%) rotate(-180deg)}div[class^="ht-tms--float"][class$="-bottom"] .ht-tms-dropdown__arrow{transform:translateY(-50%) rotate(-180deg)}div[class^="ht-tms--float"][class$="-bottom"] .ht-tms-dropdown__arrow.ht-tms-expanded{transform:translateY(-50%) rotate(0)}.ht-tms-dropdown__list{list-style:none;margin:0;padding:4px 0;width:100%;position:absolute;left:0;top:-1px;background-color:white;border:1px solid #e0e0e0;overflow:hidden;max-height:0;opacity:0;transition:opacity 0.2s cubic-bezier(0, 0, 0.38, 0.9),max-height 0.5s cubic-bezier(0, 0, 0.38, 0.9)}div[class^="ht-tms--float"][class$="-bottom"] .ht-tms-dropdown__list{padding:0 0 4px 0;top:auto;bottom:34px}.ht-tms-dropdown__list-container{position:relative}.ht-tms-dropdown__list-item,.ht-tms-dropdown__selected{padding:2px 38px 2px 12px;color:#444444;background-color:white;text-align:left;list-style-position:inside;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:36px}.ht-tms-dropdown__list-item img,.ht-tms-dropdown__selected img{width:30px}.ht-tms-dropdown__list-item,.ht-tms-dropdown__selected>div{display:grid;grid-template-columns:30px 1fr;grid-template-rows:30px;grid-gap:10px;align-items:center}@supports not (display: grid){.ht-tms-dropdown__list-item img,.ht-tms-dropdown__selected img{display:inline-block;margin-right:2px;position:relative;top:2px}}.ht-tms-dropdown__selected>div>span{width:65px;text-overflow:ellipsis;overflow:hidden}.ht-tms-dropdown__list-item{transition:background-color .1s linear, color .1s linear}.ht-tms-dropdown__list-item:hover,.ht-tms-dropdown__list-item:focus{background-color:#F7F7F7;color:#262626}.ht-tms-dropdown__selected{border:1px solid #e0e0e0}.ht-tms-dropdown__selected:focus{outline:1px solid #ffffff}.ht-tms-hide-flag .ht-tms-dropdown__list-item img,.ht-tms-hide-flag .ht-tms-dropdown__selected>div img{display:none}.ht-tms-hide-flag .ht-tms-dropdown__list-item,.ht-tms-hide-flag .ht-tms-dropdown__selected>div{grid-template-columns:1fr}.ht-tms-open{opacity:1;overflow:auto;max-height:300px}@media (max-width: 450px){.ht-tms-dropdown{font-size:12px}.ht-tms-dropdown__list-item,.ht-tms-dropdown__selected{height:31px;padding:2px 27px 2px 9px}.ht-tms-dropdown__list-item,.ht-tms-dropdown__selected>div{grid-template-columns:25px 1fr;grid-template-rows:25px;grid-gap:6px}.ht-tms-dropdown__selected>div>span{width:auto}.ht-tms-dropdown__list-item img,.ht-tms-dropdown__selected img{width:25px}}.tms-modal-open{overflow:hidden}.tms-modal-open .tms-modal{overflow-x:hidden;overflow-y:auto;display:block}.tms-modal{position:fixed;top:0;left:0;z-index:1072;display:none;width:100%;height:100%;overflow:hidden;outline:0}.tms-modal-dialog{position:relative;width:auto;margin:1.75rem auto;pointer-events:none}.tms-modal.tms-fade .tms-modal-dialog{transition:opacity .15s linear}.tms-modal.tms-show .tms-modal-dialog{transform:none}.tms-modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.tms-modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:""}.tms-modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:#222222;pointer-events:auto;background-color:#ffffff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.tms-modal-backdrop{position:fixed;top:0;left:0;z-index:1071;width:100vw;height:100vh;background-color:#000}.tms-modal-backdrop.tms-fade{opacity:0}.tms-modal-backdrop.tms-show{opacity:.5}.tms-modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.tms-modal-header .tms-close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.tms-modal-header .tms-close-icon{width:14px}.tms-modal-title{margin-bottom:0;line-height:1.5;font-family:inherit}.tms-modal-body{position:relative;flex:1 1 auto;padding:1rem}.tms-modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.tms-modal-footer>*{margin:.25rem}@media (min-width: 576px){.tms-modal-dialog{max-width:500px;margin:1.75rem auto}.tms-modal-dialog-centered{min-height:calc(100% - 3.5rem)}.tms-modal-dialog-centered::before{height:calc(100vh - 3.5rem)}}.tms-modal-btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:button;text-transform:none;font-family:inherit;overflow:visible}.tms-modal-btn-primary{color:#fff;background-color:#5C6AC4;border-color:#202E78}.tms-modal-btn-secondary{color:#212B36;background-color:#F4F6F8;border-color:#DFE3E8}.tms-modal-close{float:right;font-size:1.25rem;line-height:1;color:#000;opacity:.5;padding:1rem 1rem;margin:-1rem -1rem -1rem auto;cursor:pointer;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n',""]),e.exports=t}});