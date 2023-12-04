"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={description:"Get started by creating a Keyring Snap.",sidebar_position:1},s="Create a Keyring Snap",p={unversionedId:"how-to/use-keyring-api/snap/index",id:"how-to/use-keyring-api/snap/index",title:"Create a Keyring Snap",description:"Get started by creating a Keyring Snap.",source:"@site/snaps/how-to/use-keyring-api/snap/index.md",sourceDirName:"how-to/use-keyring-api/snap",slug:"/how-to/use-keyring-api/snap/",permalink:"/1030-keyring/snaps/how-to/use-keyring-api/snap/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api/snap/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating a Keyring Snap.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Use the Keyring API",permalink:"/1030-keyring/snaps/how-to/use-keyring-api"},next:{title:"Security guidelines",permalink:"/1030-keyring/snaps/how-to/use-keyring-api/snap/security"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Keyring API",id:"3-implement-the-keyring-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Keyring API",id:"6-expose-the-keyring-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Example",id:"example",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-keyring-snap"},"Create a Keyring Snap"),(0,r.kt)("p",null,"Create a Keyring Snap to connect to custom EVM accounts."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/how-to/use-keyring-api/snap/security"},"Keyring Snap security guidelines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/how-to/use-keyring-api/dapp"},"Use the Keyring API from a dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/concepts/keyring-api"},"About the Keyring API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a Snap.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/get-started/quickstart"},"Snaps quickstart")," and ",(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/how-to/develop-a-snap"},"how to develop a Snap"),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"/1030-keyring/snaps/how-to/use-keyring-api/snap/security"},"Keyring Snap security guidelines"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-add-permissions"},"2. Add permissions"),(0,r.kt)("p",null,"Specify the following ",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/how-to/request-permissions"},"permissions")," in your Snap manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n')),(0,r.kt)("p",null,"Add a list of URLs of dapps allowed to call Keyring API methods on your Snap using the\n",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/permissions#endowmentkeyring"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission."),(0,r.kt)("h3",{id:"3-implement-the-keyring-api"},"3. Implement the Keyring API"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/how-to/use-keyring-api/snap/security#limit-the-methods-exposed-to-dapps"},"required Keyring API methods")," in your Snap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods here...\n}\n")),(0,r.kt)("h3",{id:"4-handle-requests-submitted-by-metamask"},"4. Handle requests submitted by MetaMask"),(0,r.kt)("p",null,"MetaMask will submit Ethereum sign requests from dapps using the ","[",(0,r.kt)("inlineCode",{parentName:"p"},"submitRequest"),"]"," method of the Keyring API.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/concepts/keyring-api#supported-signing-methods"},"supported signing methods"),"."),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The request includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The unique identifier for the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account")," - The ID of the account that should handle the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The request object.")),(0,r.kt)("p",null,"Your Snap must respond with either a synchronous result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: false, result };\n")),(0,r.kt)("p",null,"Or an asynchronous result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return { pending: true, redirect: { message, url } };\n")),(0,r.kt)("p",null,"The redirect message and URL is displayed to the user to inform them on how to continue the transaction flow."),(0,r.kt)("h3",{id:"5-notify-metamask-about-events"},"5. Notify MetaMask about events"),(0,r.kt)("p",null,"Notify MetaMask when the following events take place, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"emitSnapKeyringEvent()")," helper function."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An account is created:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"},"MetaMask returns an error if the account already exists or the account object is invalid.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An account is updated:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountUpdated, { account });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"},"MetaMask returns an error if the account does not exist, the account object is invalid, or the\naccount address changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An account is deleted:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountDeleted, {\n    id: account.id,\n  });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"},"The delete event is idempotent, so it is safe to emit even if the account does not exist.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A request is approved:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestApproved, {\n    id: request.id,\n    result,\n  });\n  // Update your Snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"},"MetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that implement the\n",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/concepts/keyring-api#asynchronous-transaction-flow"},"asynchronous transaction flow"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A request is rejected:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestRejected, {\n    id: request.id,\n  });\n  // Update your snap's state...\n} catch (error) {\n  // Handle the error...\n}\n")),(0,r.kt)("p",{parentName:"li"},"MetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that implement the\n",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/concepts/keyring-api#asynchronous-transaction-flow"},"asynchronous transaction flow"),"."))),(0,r.kt)("h3",{id:"6-expose-the-keyring-api"},"6. Expose the Keyring API"),(0,r.kt)("p",null,"Create a handler function using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyringRequest")," export to expose the Keyring API methods to\nMetaMask and your dapp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Your custom logic here...\n  return handleKeyringRequest(keyring, request);\n};\n")),(0,r.kt)("h3",{id:"7-create-a-companion-dapp"},"7. Create a companion dapp"),(0,r.kt)("p",null,"Create a companion dapp to provide a user interface for your Keyring Snap.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example Snap companion dapp source code"),"\nfor more information."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that you've created a Keyring Snap and a user interface for it, you can\n",(0,r.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/how-to/use-keyring-api/dapp"},"call the Keyring API methods from your dapp")," to create and interact with custom EVM accounts."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap"},"example Keyring Snap source code"),"\nfor more information."))}m.isMDXComponent=!0}}]);