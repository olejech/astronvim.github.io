"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={id:"cmdheight",title:"Disable cmdheight=0"},a=void 0,c={unversionedId:"Recipes/cmdheight",id:"version-2.7.0/Recipes/cmdheight",title:"Disable cmdheight=0",description:"By default AstroNvim enables the new feature of cmdheight=0 that was introduced with Neovim v0.8+. Some users may not like this behavior and prefer to have the cmd line always dispalying on the bottom",source:"@site/versioned_docs/version-2.7.0/Recipes/cmdheight.md",sourceDirName:"Recipes",slug:"/Recipes/cmdheight",permalink:"/2.7.0/Recipes/cmdheight",draft:!1,tags:[],version:"2.7.0",frontMatter:{id:"cmdheight",title:"Disable cmdheight=0"},sidebar:"docs",previous:{title:"Dashboard Customizations",permalink:"/2.7.0/Recipes/alpha"},next:{title:"Customize cmp Completion",permalink:"/2.7.0/Recipes/cmp"}},s={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default AstroNvim enables the new feature of ",(0,o.kt)("inlineCode",{parentName:"p"},"cmdheight=0")," that was introduced with Neovim v0.8+. Some users may not like this behavior and prefer to have the cmd line always dispalying on the bottom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = {\n    opt = {\n      cmdheight = 1,\n    },\n  },\n}\n")))}m.isMDXComponent=!0}}]);