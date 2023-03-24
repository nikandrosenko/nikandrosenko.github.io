(()=>{"use strict";var e={7535:(e,t,r)=>{var n=r(1957),a=r(1947),o=r(499),s=r(9835),i=r(4308);r(4886);const l={__name:"App",setup(e){return(0,s.bv)((()=>{const e="pk_test_YWN0aXZlLWtvYWxhLTk4LmNsZXJrLmFjY291bnRzLmRldiQ",t=(0,i.Z)(),r=async()=>{const e=window.Clerk;try{await e.load();const r=document.getElementById("user-button"),n=document.getElementById("auth-links");e.addListener((({user:e})=>{n.style.display=e?"none":"block"})),e.user?(e.mountUserButton(r),r.style.margin="0 15px",localStorage.setItem("user",JSON.stringify(e?.user)),sessionStorage.setItem("token",await e.session.getToken({template:"hasura"}))):(localStorage.setItem("user",JSON.stringify({Id:t,firstName:`Пользователь ${t.slice(0,4)}`})),sessionStorage.setItem("token",""))}catch(r){console.error("Error starting Clerk: ",r)}};(()=>{const t=document.createElement("script");t.setAttribute("data-clerk-publishable-key",e),t.async=!0,t.src="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js",t.crossOrigin="anonymous",t.addEventListener("load",r),t.addEventListener("error",(()=>{document.getElementById("no-frontend-api-warning").hidden=!1})),document.body.appendChild(t)})()})),(e,t)=>{const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}}},u=l,c=u;var d=r(4469),p=r(3340),f=r(8339);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(969)]).then(r.bind(r,5969)),children:[{path:"/",component:()=>Promise.all([r.e(736),r.e(649)]).then(r.bind(r,6649))},{path:"/info",component:()=>Promise.all([r.e(736),r.e(834)]).then(r.bind(r,2834))},{path:"/chat",component:()=>Promise.all([r.e(736),r.e(556)]).then(r.bind(r,6556))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,7065))}],h=m,v=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function g(e,t){const n=e(c);n.use(a.Z,t);const s="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:i}=await Promise.resolve().then(r.bind(r,4469)),l=(0,o.Xl)("function"===typeof v?await v({store:s}):v);return s.$router=l,{app:n,store:s,storeKey:i,router:l}}var b=r(4328);const y={config:{},plugins:{Notify:b.Z}},S="";async function w({app:e,router:t,store:r,storeKey:n},a){let o=!1;const s=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<a.length;c++)try{await a[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:S})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&(e.use(t),e.use(r,n),e.mount("#q-app"))}g(n.ri,y).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,2472)),Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));w(e,r)}))}))},3728:(e,t,r)=>{r.d(t,{B:()=>s});var n=r(7863),a=r(3243),o=r(7184);function s(e){const t=(0,n.L)({uri:"https://huge-albacore-77.hasura.app/v1/graphql"}),r=(0,o.v)(((e,{headers:t})=>{const r=sessionStorage.getItem("token");return""===r?{headers:{...t}}:{headers:{...t,Authorization:r?`Bearer ${r}`:""}}}));return Object.assign({link:r.concat(t),cache:new a.h},{},{},{},{},{},{},{},{},{},{},{})}},2472:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(2468),a=r(4886),o=r(3340),s=r(3728);const i=(0,o.xr)((({app:e})=>{const t=(0,s.B)(),r=new n.f(t),o={default:r};e.provide(a.Rw,o)}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>o,default:()=>s});var n=r(3340),a=r(7524);const o=a.Z.create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a.Z,e.config.globalProperties.$api=o}))},4469:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n={};r.r(n),r.d(n,{AVATAR_GET:()=>v,POSTS:()=>h});var a={};r.r(a),r.d(a,{SET_POSTS:()=>b,shareAvatarName:()=>y});var o={};r.r(o),r.d(o,{GET_POSTS:()=>k});var s={};r.r(s),r.d(s,{USERS:()=>E});var i={};r.r(i),r.d(i,{SET_USERS:()=>T});var l={};r.r(l),r.d(l,{GET_USERS:()=>P});var u={};r.r(u),r.d(u,{ANIMALS:()=>N});var c={};r.r(c),r.d(c,{SET_ANIMALS_TO_STATE:()=>x});var d={};r.r(d),r.d(d,{GET_DATA_ANIMALS:()=>L});var p=r(3340),f=r(3100);function m(){return{requests:[],avatarName:""}}function h(e){return e.requests}function v(e){return e.avatarName}var g=r(9835);function b(e,t){const r=(0,g.Fl)((()=>t.value?.requests??null));e.requests=r}function y(e,t){e.avatarName=t}var S=r(4886),w=r(5834);function k({commit:e}){const{result:t}=(0,S.aM)(w.ZP`
  query MyQuery{
    requests {
      FIO
      email
      name
      phone
      sex
      age
    }
  }
  `);return e("SET_POSTS",t),t}const O={namespaced:!0,getters:n,mutations:a,actions:o,state:m};function _(){return{users:["user_2NMpOw77RKYJVqUUD7ne0EHqUrj","user_2NNkpvSlkeMGHYm1JFHJyiuUix6"]}}function E(e){return e.users}function T(e,t){const r=(0,g.Fl)((()=>t.value?.users));e.users=r}function P({commit:e}){const{result:t}=(0,S.aM)(w.ZP`
    query {
      users {
        user_id
        id
      }
    }
  `);return console.log("success"),e("SET_USERS",t),t}const A={namespaced:!0,getters:s,mutations:i,actions:l,state:_};function j(){return{animals:[]}}function N(e){try{const t=(0,g.Fl)((()=>{let t="",r="",n="",a=e.animals.map((e=>{switch(!0){case 1===e.age:t=e.age+" месяц";break;case e.age>=2&&e.age<=4:t=e.age+" месяца";break;case e.age>=5&&e.age<=11:t=e.age+" месяцев";break;case 12===e.age:t=e.age/12+" год";break;case e.age>=24&&e.age<=48:t=e.age/12+" года";break;case e.age>48:t=e.age/12+" лет";break}switch(!0){case!0===e.sex:r="Мальчик";break;case!1===e.sex:r="Девочка"}switch(!0){case!0===e.sterilization:n="Есть";break;case!1===e.sterilization:n="Нет"}const a={id:e.id,breed:e.breed,info:e.info,type:e.type,age:t,image:e.image,name:e.name,sex:r,sterilization:n,updateOpen:!0};return a}));return a}));return t.value}catch(t){console.log("Данные еще не пришли")}}function x(e,t){const r=(0,g.Fl)((()=>t.value?.animals??null));e.animals=r}function L({commit:e},t){e("SET_ANIMALS_TO_STATE",t)}const C={namespaced:!0,getters:u,mutations:c,actions:d,state:j},q=(0,p.h)((function(){const e=(0,f.MT)({modules:{requests:O,animals:C,roles:A},strict:!1});return e}))}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>s[e]=()=>n[e]));return s["default"]=()=>n,r.d(o,s),o}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"3d090602",556:"e28ce7ed",649:"ea2e1e18",834:"5f1b0e30",969:"ba86e775"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{649:"342c6fcb",969:"36191516"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="q-petshelter:";r.l=(n,a,o,s)=>{if(e[n])e[n].push(a);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=r=>{if(o.onerror=o.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=n=>new Promise(((a,o)=>{var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return a();e(n,i,null,a,o)})),a={143:0};r.f.miniCss=(e,t)=>{var r={649:1,969:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,l=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,l]=n,u=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var c=l(r)}for(t&&t(n);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=globalThis["webpackChunkq_petshelter"]=globalThis["webpackChunkq_petshelter"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7535)));n=r.O(n)})();