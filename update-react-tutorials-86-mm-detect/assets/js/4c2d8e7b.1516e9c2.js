"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5484],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const s={description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},o="Data storage",i={unversionedId:"features/data-storage",id:"features/data-storage",title:"Data storage",description:"Store encrypted and unencrypted data within a Snap.",source:"@site/snaps/features/data-storage.md",sourceDirName:"features",slug:"/features/data-storage",permalink:"/update-react-tutorials-86-mm-detect/snaps/features/data-storage",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/data-storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Home pages",permalink:"/update-react-tutorials-86-mm-detect/snaps/features/custom-ui/home-pages"},next:{title:"Lifecycle hooks",permalink:"/update-react-tutorials-86-mm-detect/snaps/features/lifecycle-hooks"}},p={},d=[{value:"Request permission to store data",id:"request-permission-to-store-data",level:2},{value:"Use encrypted storage",id:"use-encrypted-storage",level:2},{value:"Use unencrypted storage",id:"use-unencrypted-storage",level:2},{value:"Example",id:"example",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-storage"},"Data storage"),(0,r.yg)("p",null,"You can store and manage sensitive information within a Snap using encrypted storage, or\nnon-sensitive information using unencrypted storage.\nUse the ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," API method to persist up to\n100 MB of data to the user's disk and retrieve it at will.\nWe recommend using this method for storing data in a Snap long term."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Snaps are installed in each user's MetaMask instance.\nIf a Snap stores data, that data is specific to that user's MetaMask instance.\nHowever, this data can be shared across multiple dapps.\nDo not assume that the data a Snap stores is unique to a single dapp unless it is specifically designed to be that way.")),(0,r.yg)("h2",{id:"request-permission-to-store-data"},"Request permission to store data"),(0,r.yg)("p",null,"To store data within a Snap, first request the\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," permission.\nAdd the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_manageState": {}\n}\n')),(0,r.yg)("h2",{id:"use-encrypted-storage"},"Use encrypted storage"),(0,r.yg)("p",null,"By default, ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," automatically encrypts\ndata using a Snap-specific key before storing it on the user's disk, and automatically decrypts it\nwhen retrieved.\nThis is useful to store sensitive information, such as passwords."),(0,r.yg)("p",null,"The following example uses ",(0,r.yg)("inlineCode",{parentName:"p"},"snap_manageState")," to store some data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," operation, and\nretrieves the data at a later time using the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," operation.\nWhen the data is no longer required, the Snap's state is cleared using the ",(0,r.yg)("inlineCode",{parentName:"p"},"clear")," operation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { operation: "get" },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n  },\n});\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Accessing encrypted state requires MetaMask to be unlocked.\nIf you need to access encrypted state in a background task such as a ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/features/cron-jobs"},"cron job"),", use\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_getclientstatus"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getClientStatus"))," to ensure that MetaMask is\nunlocked before accessing state, preventing an unexpected password request.")),(0,r.yg)("h2",{id:"use-unencrypted-storage"},"Use unencrypted storage"),(0,r.yg)("p",null,"To use unencrypted storage, set ",(0,r.yg)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," when storing, retrieving, or clearing data\nusing ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThe Snap will use a storage section separate from the encrypted storage, and will not encrypt the data.\nThis is useful to access non-sensitive data from background operations such as\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/features/cron-jobs"},"cron jobs"),", without requiring the user to enter their password in the case that\nMetaMask is locked."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n    encrypted: false,\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "get",\n    encrypted: false,\n  },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n    encrypted: false,\n  },\n});\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/manage-state"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/manage-state-example-snap")),"\npackage for a full example of storing data using ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThis example exposes a ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to store, retrieve, and clear data."))}u.isMDXComponent=!0}}]);