(()=>{"use strict";var e,n,t,r,o,a,c,i,s,u,p,l,d,f,h={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),u=new URL(t(868),t.b),p=c()(o()),l=s()(u);p.push([e.id,":root {\n  --background: #FDE8B7;\n  --font: #EC6806;\n  --header: #fff;\n  --calculator: #212121;\n  --screen: #86bcc6;\n  --buttons: #414141;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--font);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;\n  margin-bottom: 100px;\n  background: url("+l+");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* #content {} */\n\n.header {\n  background-color: var(--background);\n  color: var(--font);\n  height: 80px;\n  padding: 0 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header h1 {\n  text-align: left;\n}\n\n.nav a {\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--font);\n  letter-spacing: 1.5px;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.nav {\n  display: flex;\n  gap: 35px;\n}",""]);const d=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=t(a[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},868:(e,n,t)=>{e.exports=t.p+"81190f1a52e3f793cd03.jpg"}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),c=v(565),i=v.n(c),s=v(216),u=v.n(s),p=v(589),l=v.n(p),d=v(426),(f={}).styleTagTransform=l(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,document.getElementById("content").appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");return n.textContent="Dough & Co",e.appendChild(n),e.appendChild(function(){const e=document.createElement("div");e.classList.add("nav");const n=document.createElement("a");n.textContent="Home";const t=document.createElement("a");t.textContent="Menu";const r=document.createElement("a");return r.textContent="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}()),e}())})();