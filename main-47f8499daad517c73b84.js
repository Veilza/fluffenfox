(()=>{"use strict";var e,n={152:(e,n,t)=>{var o=t(751),r=t(351),a=t(641),l=t(33);const u=[(0,a.eW)(" The default page for stuffs. "),(0,a.Lk)("br",null,null,-1),(0,a.Lk)("br",null,null,-1),(0,a.eW)(" More things will go here eventually. ")],s={name:"HomeComponent",data(){},mounted(){window.location.href="https://fluffenfox.straw.page/"}};var f=t(262);const c=(0,f.A)(s,[["render",function(e,n,t,o,r,s){return(0,a.uX)(),(0,a.CE)("div",{class:(0,l.C4)(e.$style.blurb)},u,2)}],["__cssModules",{$style:{blurb:"blurb--N6Ojd4"}}]]),i=[(0,a.eW)(" This page wasn't found. Sorry about that! "),(0,a.Lk)("br",null,null,-1),(0,a.Lk)("br",null,null,-1),(0,a.eW)(" Maybe you're looking for something that doesn't exist anymore? ")],p={name:"NotFoundComponent",data:()=>({})},b="Fluffenfox",d=[{name:`${b}`,path:"/",component:c},{name:`${b} / 404`,path:"/:catchAll(.*)*",component:(0,f.A)(p,[["render",function(e,n,t,o,r,u){return(0,a.uX)(),(0,a.CE)("div",{class:(0,l.C4)(e.$style.blurb)},i,2)}],["__cssModules",{$style:{blurb:"blurb--MFHe_W"}}]])}],h=(0,r.aE)({history:(0,r.LA)(),routes:d});h.beforeEach(((e,n,t)=>{e.href.match(/\/#/)&&h.push(e.href.replace(/\#\//,"")),document.title=e.name?e.name:b,document.head.querySelector("[property='og:title'][content]").content=e.name?e.name:b,t()}));const m=h,v={id:"app"},y={name:"TemplateComponent",components:{}},g=(0,f.A)(y,[["render",function(e,n,t,o,r,u){const s=(0,a.g2)("Navbar"),f=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.bF)(s),(0,a.Lk)("div",{class:(0,l.C4)(e.$style["page-body"])},[(0,a.bF)(f)],2)])}],["__cssModules",{$style:{"page-body":"page-body--Lo9JZO"}}]]);var w=t(107),C=t(273),O=t(188),k=t(897),x=t(875);w.Yv.add(O.X7I,k.C91,x.Cvc);const $=(0,o.Ef)(g);$.component("font-awesome-icon",C.gc),$.use(m),$.mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,e=[],o.O=(n,t,r,a)=>{if(!t){var l=1/0;for(c=0;c<e.length;c++){for(var[t,r,a]=e[c],u=!0,s=0;s<t.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var f=r();void 0!==f&&(n=f)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,r,a]},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={792:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[l,u,s]=t,f=0;if(l.some((n=>0!==e[n]))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(s)var c=s(o)}for(n&&n(t);f<l.length;f++)a=l[f],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},t=self.webpackChunkfluffenfox=self.webpackChunkfluffenfox||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=o.O(void 0,[841],(()=>o(152)));r=o.O(r)})();