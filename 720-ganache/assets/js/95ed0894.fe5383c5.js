"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Introduction"},s="Integrate with the MetaMask wallet",i={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/720-ganache/wallet/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Get started",permalink:"/720-ganache/wallet/category/get-started"}},l={},c=[{value:"What is the MetaMask Ethereum provider API?",id:"what-is-the-metamask-ethereum-provider-api",level:2},{value:"What is MetaMask SDK?",id:"what-is-metamask-sdk",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-with-the-metamask-wallet"},"Integrate with the MetaMask wallet"),(0,r.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the\n",(0,r.kt)("a",{parentName:"p",href:"/720-ganache/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),", which enables your dapp to interact\nwith its users' Ethereum accounts.\nWe recommend using ",(0,r.kt)("a",{parentName:"p",href:"how-to/use-sdk"},"MetaMask SDK")," to easily enable your users to connect to their\nMetaMask wallet client from any platform."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/720-ganache/wallet/get-started/set-up-dev-environment"},"setting up your development environment"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS."),(0,r.kt)("li",{parentName:"ul"},"To learn how to extend the functionality of MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../snaps"},"MetaMask Snaps developer documentation"),"."))),(0,r.kt)("h2",{id:"what-is-the-metamask-ethereum-provider-api"},"What is the MetaMask Ethereum provider API?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/720-ganache/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is a JavaScript API that MetaMask\ninjects into websites visited by MetaMask users.\nYour dapp can use this API to request users' Ethereum accounts, read data from blockchains the user\nis connected to, and suggest that the user sign messages and transactions."),(0,r.kt)("h2",{id:"what-is-metamask-sdk"},"What is MetaMask SDK?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/720-ganache/wallet/how-to/use-sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\n",(0,r.kt)("a",{parentName:"p",href:"/720-ganache/wallet/concepts/sdk-connections"},"connection")," from your dapp to the MetaMask browser extension and\nMetaMask Mobile.\nYou can install the SDK into your dapp to enable your users to easily connect to a MetaMask wallet\nclient from multiple platforms (web, desktop, and mobile)."),(0,r.kt)("p",null,"For example, for dapps running on a desktop browser, MetaMask SDK checks if the MetaMask extension\nis installed.\nIf MetaMask isn't installed, the SDK prompts the user to install it or connect to their MetaMask\nMobile wallet using a QR code.\nFor dapps running on a mobile browser, MetaMask SDK automatically deeplinks to the user's MetaMask\nMobile wallet to make the connection."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}u.isMDXComponent=!0}}]);