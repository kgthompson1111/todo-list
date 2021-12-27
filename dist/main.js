(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --light1: #EFBCD5FE;\n    --light2: #BE97C6;\n    --med1: #8661C1;\n    --med2: #4B5267;\n    --dark1: #2E294E;\n}\n\n* {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n\nh1 {\n    font-size: 48px;\n    color: var(--light1);\n}\n\nh2 {\n    font-size: 36px;\n    color: var(--light1);\n}\n\nh1, h2 {\n    margin-top: 10px;\n}\n\n#content-holder {\n    width: 75%;\n    display: flex;\n\n    border: solid 3px var(--dark1);\n}\n\n#header-bar {\n    width: 75%;\n    height: 110px;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n\n    background-color: var(--dark1);\n\n    margin-bottom: 20px;\n}\n\n#container {\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--light1);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 50px 0px;\n}\n\n#projects {\n    width: 30%;\n    height: 100vh;\n    background-color: var(--med1);\n    padding: 0px 8px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.projectItem {\n    width: 80%;\n    height: 60px;\n\n    background-color: var(--light2);\n\n    border: solid 3px var(--dark1);\n\n    font-size: 24px;\n    color: var(--dark1);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 10px 0px;\n}\n\n.clickable {\n    cursor: pointer;\n}\n\n#projectInput {\n    width: 75%;\n    font-size: 24px;\n    color: var(--dark1);\n    background-color: var(--light2);\n}\n\n.activeProject {\n    box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.644);\n}\n\n#todos {\n    width: 70%;\n    height: 100vh;\n    background-color: var(--med2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#addProjectButton, .deleteProjectButton {\n    height: 100%;\n    width: 10%;\n    font-size: 24px;\n\n    margin-left: auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-family: sans-serif;\n\n    border: solid 3px var(--dark1);\n    background-color: var(--med2);\n    color: var(--light2);\n\n    cursor: pointer;\n}\n\n#addProjectButton:active, .deleteProjectButton:active {\n    background-color: var(--dark1);\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=[];let m;function g(n){this.title=n}function x(n){m&&document.getElementById(m).classList.remove("activeProject"),m=n.target.id,document.getElementById(m).classList.add("activeProject"),activeHeader.innerText=`${m} To-do:`}function y(n){const e=n.target.parentNode.id;console.log(e);const t=document.getElementById(e);console.log(t);const r=h.findIndex((n=>n.title==`${e}`));h.splice(r,1),n.target.parentNode.parentNode.removeChild(t),b()}function b(){projects.innerHTML="<h2>Projects</h2>";for(var n=0;n<h.length;n++){const e=document.createElement("div");e.innerText=h[n].title,e.classList.add("projectItem"),e.classList.add("clickable"),e.id=h[n].title,projects.appendChild(e),e.addEventListener("click",x);const t=document.createElement("div");t.innerText="X",t.classList.add("deleteProjectButton"),e.appendChild(t),t.addEventListener("click",y)}const e=document.createElement("div");e.classList.add("projectItem"),e.id="newProject";const t=document.createElement("div");t.innerText="+";const r=document.createElement("input");r.id="projectInput",e.appendChild(r),t.id="addProjectButton",e.appendChild(t),projects.appendChild(e)}h[0]=new g("Example1"),h[1]=new g("Example2"),h[2]=new g("Example3"),b()})()})();