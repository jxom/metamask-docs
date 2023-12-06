"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:8},i="Add a network",s={unversionedId:"how-to/add-network",id:"how-to/add-network",title:"Add a network",description:"Prompt a user to add or switch to an Ethereum network.",source:"@site/wallet/how-to/add-network.md",sourceDirName:"how-to",slug:"/how-to/add-network",permalink:"/snaps-security-best-practices/wallet/how-to/add-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/add-network.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:8},sidebar:"walletSidebar",previous:{title:"Enable human-readable addresses in Unity",permalink:"/snaps-security-best-practices/wallet/how-to/use-3rd-party-integrations/unity-dweb"},next:{title:"Manage permissions",permalink:"/snaps-security-best-practices/wallet/how-to/manage-permissions"}},c={},l=[{value:"Example",id:"example",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-a-network"},"Add a network"),(0,a.kt)("p",null,"In some cases, such as when ",(0,a.kt)("a",{parentName:"p",href:"/snaps-security-best-practices/wallet/how-to/interact-with-smart-contracts/"},"interacting with smart contracts"),",\nyour dapp must connect a user to a new network in MetaMask.\nInstead of the user ",(0,a.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5"},"adding a new network manually"),",\nwhich requires them to configure RPC URLs and chain IDs, your dapp can use the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," RPC methods to prompt\nthe user to add a specific, pre-configured network to their MetaMask wallet."),(0,a.kt)("p",null,"These methods are specified by ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3326"},"EIP-3326"),", and we recommend using them together."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")," creates a confirmation asking the user to add the specified network to MetaMask."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")," creates a confirmation asking the user to switch to the specified network.")),(0,a.kt)("p",null,"The confirmations look like the following:"),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"column"},(0,a.kt)("img",{src:r(19490).Z,alt:"Add network confirmation",style:{border:"1px solid black"}})),(0,a.kt)("div",{class:"column"},(0,a.kt)("img",{src:r(94637).Z,alt:"Switch network confirmation",style:{border:"1px solid black"}}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following is an example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain")," to\nprompt a user to add and switch to a new network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  await ethereum.request({\n    method: 'wallet_switchEthereumChain',\n    params: [{ chainId: '0xf00' }],\n  });\n} catch (switchError) {\n  // This error code indicates that the chain has not been added to MetaMask.\n  if (switchError.code === 4902) {\n    try {\n      await ethereum.request({\n        method: 'wallet_addEthereumChain',\n        params: [\n          {\n            chainId: '0xf00',\n            chainName: '...',\n            rpcUrls: ['https://...'] /* ... */,\n          },\n        ],\n      });\n    } catch (addError) {\n      // handle \"add\" error\n    }\n  }\n  // handle other \"switch\" errors\n}\n")))}m.isMDXComponent=!0},19490:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-network-b50a7e5fc0b9fd187d45f0070c071aa8.png"},94637:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/switch-network-fa13b71d966a9c048bc069d39047a5b9.png"}}]);