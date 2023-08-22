"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var s=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(t),u=i,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return t?s.createElement(h,a(a({ref:n},m),{},{components:t})):s.createElement(h,a({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<r;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(87462),i=(t(67294),t(3905));const r={description:"Snaps permissions reference",sidebar_position:4},a="Snaps permissions",o={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"Snaps permissions reference",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/zs/eth-accounts-permission/snaps/reference/permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Snaps permissions reference",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/zs/eth-accounts-permission/snaps/reference/cli/subcommands"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"endowment:cronjob",id:"endowmentcronjob",level:3},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:3},{value:"endowment:long-running",id:"endowmentlong-running",level:3},{value:"endowment:network-access",id:"endowmentnetwork-access",level:3},{value:"Same-origin policy and CORS",id:"same-origin-policy-and-cors",level:4},{value:"endowment:rpc",id:"endowmentrpc",level:3},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:3},{value:"endowment:webassembly",id:"endowmentwebassembly",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:2},{value:"eth_accounts",id:"eth_accounts",level:2}],m={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/how-to/request-permissions"},"request the following permissions")," in your snap manifest\nfile."),(0,i.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,i.kt)("p",null,"You must request permission to use any\n",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,i.kt)("p",null,"For example, to request to use ",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/reference/rpc-api#snap_dialog"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the following to the\nmanifest file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,i.kt)("h2",{id:"endowments"},"Endowments"),(0,i.kt)("h3",{id:"endowmentcronjob"},"endowment:cronjob"),(0,i.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the snap to specify cron jobs that trigger the exported\n",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/reference/exports#oncronjob"},(0,i.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,i.kt)("p",null,"To communicate with a node using MetaMask, a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the global API ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum")," to the snap execution environment.\nThis global is an EIP-1193 provider."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n},\n')),(0,i.kt)("h3",{id:"endowmentlong-running"},"endowment:long-running"),(0,i.kt)("p",null,"A snap that is computationally heavy and can't finish execution within the\n",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/concepts/lifecycle"},"snap lifecycle requirements")," must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," permission.\nThis permission allows the snap to run indefinitely while processing RPC requests."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')),(0,i.kt)("h3",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,i.kt)("p",null,"To access the internet, a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,i.kt)("h4",{id:"same-origin-policy-and-cors"},"Same-origin policy and CORS"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," requests in a snap are bound by the browser's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access"},"same-origin policy"),".\nSince snap code is executed in an iframe with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox")," property, the browser sends an ",(0,i.kt)("inlineCode",{parentName:"p"},"Origin"),"\nheader with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," with outgoing requests.\nFor the snap to be able to read the response, the server must send an\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},(0,i.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))," CORS header\nwith the value ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," in the response."),(0,i.kt)("h3",{id:"endowmentrpc"},"endowment:rpc"),(0,i.kt)("p",null,"To handle arbitrary JSON-RPC requests, a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a snap access to JSON-RPC requests sent to the snap, using the exported\n",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/reference/exports#onrpcrequest"},(0,i.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,i.kt)("p",null,"This permission requires an object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nsnap can receive JSON-RPC requests from other snaps, or dapps, respectively.\nThe default for both properties is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": {\n      "dapps": true,\n      "snaps": false\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,i.kt)("p",null,"To provide transaction insights, a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,i.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/snaps/reference/exports#ontransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,i.kt)("p",null,"This permission requires an object with an ",(0,i.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the snap\nshould pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n},\n')),(0,i.kt)("h3",{id:"endowmentwebassembly"},"endowment:webassembly"),(0,i.kt)("p",null,"To use WebAssembly, a snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:webassembly")," permission.\nThis permission exposes the global ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAssembly")," API to the snap execution environment."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:webassembly": {}\n},\n')),(0,i.kt)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,i.kt)("p",null,"Dynamic permissions are not requested in the manifest file. Instead, they are acquired during the lifecycle of the snap."),(0,i.kt)("h2",{id:"eth_accounts"},"eth_accounts"),(0,i.kt)("p",null,"This dynamic permission is acquired when a snap calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," method of the Ethereum provider. Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," requires the ",(0,i.kt)("a",{parentName:"p",href:"#endowmentethereum-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"ethereum-provider")," endowment"),". The presence of the permission can be checked by calling ",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/rpc-api/#wallet_getpermissions"},(0,i.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions")),". If the permission is present, the return value of ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet_getPermissions")," will contain a permission with a ",(0,i.kt)("inlineCode",{parentName:"p"},"parentCapability")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_accounts"),". It will come with a caveat of ",(0,i.kt)("inlineCode",{parentName:"p"},"restrictReturnedAccounts"),", an array of all the accounts that the user allowed for this snap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "47vm2UUi1pccNAeYKGmwF", // example\n  "parentCapability": "eth_accounts",\n  "invoker": "npm:SNAP_ID",\n  "caveats": [\n    {\n      "type": "restrictReturnedAccounts",\n      "value": [\n        "0xc403b37bf1e700cb214ea1be9de066824b420de6" // example connected account #1\n      ]\n    }\n  ],\n  "date": 1692616452846\n}\n')),(0,i.kt)("p",null,'This permission can be revoked by the user by going to the snap\'s settings under "snap permissions".'))}d.isMDXComponent=!0}}]);