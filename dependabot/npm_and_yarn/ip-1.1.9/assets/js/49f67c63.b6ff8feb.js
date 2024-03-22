"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},s="Use MetaMask SDK with Node.js",p={unversionedId:"how-to/use-sdk/javascript/nodejs",id:"how-to/use-sdk/javascript/nodejs",title:"Use MetaMask SDK with Node.js",description:"Set up the SDK in your Node.js dapp.",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/nodejs.md",tags:[{label:"JavaScript SDK",permalink:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React Native and Expo",permalink:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/use-sdk/javascript/electron"}},i={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-nodejs"},"Use MetaMask SDK with Node.js"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/concepts/sdk/"},"MetaMask SDK")," into your Node.js dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for Node.js has the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskSDK } from "@metamask/sdk";\n')),(0,r.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,r.kt)("p",null,"Instantiate the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/sdk-js-options"},"options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const MMSDK = new MetaMaskSDK({\n    dappMetadata: {\n        name: "Example Node.js Dapp",\n        url: window.location.href,\n    },\n    // Other options\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n')),(0,r.kt)("admonition",{title:"Important SDK options",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/sdk-js-options#modals"},(0,r.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/how-to/make-read-only-requests"},"make read-only RPC requests")," from your dapp."))),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by calling any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/ip-1.1.9/wallet/reference/provider-api#request"},(0,r.kt)("inlineCode",{parentName:"a"},"request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You can copy the full Node.js example to get started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK({\n    dappMetadata: {\n        name: "Example Node.js Dapp",\n        url: window.location.href,\n    },\n    // Other options\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases."))}m.isMDXComponent=!0}}]);