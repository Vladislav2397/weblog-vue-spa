if(!self.define){let e,s={};const r=(r,l)=>(r=new URL(r+".js",l).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const u=e=>r(e,n),c={module:{uri:n},exports:o,require:u};s[n]=Promise.all(l.map((e=>c[e]||u(e)))).then((e=>(i(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"weblog-vue-spa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/index.be30e1c6.css",revision:null},{url:"/css/routes/article.371e7f2c.css",revision:null},{url:"/css/routes/articles.0a857ee5.css",revision:null},{url:"/css/routes/home.066a4b49.css",revision:null},{url:"/index.html",revision:"4a6ab3167d375a42c9aa2860f691e2a0"},{url:"/js/chunk-vendors.321dbb0d.js",revision:null},{url:"/js/chunks/scroll-lock.c8607e2e.js",revision:null},{url:"/js/index.9e985223.js",revision:null},{url:"/js/routes/article.9be61f86.js",revision:null},{url:"/js/routes/articles.d4b6c96f.js",revision:null},{url:"/js/routes/home.1e3e44c7.js",revision:null},{url:"/js/routes/not-found.aefd07b4.js",revision:null},{url:"/manifest.json",revision:"f2946f4e85a46df6f68102b68c2fe112"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
