(function(e){function t(t){for(var r,c,a=t[0],i=t[1],l=t[2],s=0,b=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(b.length)b.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e805f1da"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var l=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o={id:"nav"},u=Object(r["e"])("Home"),c=Object(r["e"])(" | "),a=Object(r["e"])("About");function i(e,t){var n=Object(r["s"])("router-link"),i=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["f"])(n,{to:"/"},{default:Object(r["z"])((function(){return[u]})),_:1}),c,Object(r["f"])(n,{to:"/about"},{default:Object(r["z"])((function(){return[a]})),_:1})]),Object(r["f"])(i)],64)}n("b684");const l={};l.render=i;var s=l,f=(n("d3b7"),n("6c02")),b={class:"home"};function p(e,t,n,o,u,c){return Object(r["o"])(),Object(r["d"])("div",b,[Object(r["e"])(Object(r["u"])(e.msg)+" "+Object(r["u"])(e.arr)+" ",1),Object(r["A"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.arr=t})},null,512),[[r["w"],e.arr]]),Object(r["f"])("div",{onClick:t[2]||(t[2]=function(){return e.clickbtn.apply(e,arguments)})},"点击")])}var d=n("5502"),j=Object(r["g"])({name:"Home",components:{},setup(){const e=Object(d["b"])();e.dispatch("GlobalRequest")}});j.render=p;var O=j,m=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],v=Object(f["a"])({history:Object(f["b"])("/"),routes:m}),h=v,g=n("bc3a"),y=n.n(g),w=Object(d["a"])({state:{user:null},mutations:{user:function(e,t){e.user=t}},actions:{GlobalRequest:function(e){y.a.get("/user").then((function(t){console.log("GlobalRequest start"),e.commit("user",t.data),console.log("data"),console.log("GlobalRequest end")}))}},getters:{user:function(e){return e.user}}});Object(r["c"])(s).use(w).use(h).mount("#app")},"90a6":function(e,t,n){},b684:function(e,t,n){"use strict";n("90a6")}});
//# sourceMappingURL=app.9c4e40aa.js.map