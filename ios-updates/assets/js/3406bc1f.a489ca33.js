"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7185],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(t),d=r,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||s;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={description:"Create a Keyring Snap to connect to custom EVM accounts in MetaMask.",sidebar_custom_props:{flask_only:!0}},o="Create a Snap to connect to custom EVM accounts",i={unversionedId:"tutorials/custom-evm-accounts",id:"tutorials/custom-evm-accounts",title:"Create a Snap to connect to custom EVM accounts",description:"Create a Keyring Snap to connect to custom EVM accounts in MetaMask.",source:"@site/snaps/tutorials/custom-evm-accounts.md",sourceDirName:"tutorials",slug:"/tutorials/custom-evm-accounts",permalink:"/ios-updates/snaps/tutorials/custom-evm-accounts",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/tutorials/custom-evm-accounts.md",tags:[],version:"current",frontMatter:{description:"Create a Keyring Snap to connect to custom EVM accounts in MetaMask.",sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Create a Snap to calculate gas fee percentages",permalink:"/ios-updates/snaps/tutorials/transaction-insights"},next:{title:"Reference",permalink:"/ios-updates/snaps/reference"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Add the snap_manageAccounts permission",id:"1-add-the-snap_manageaccounts-permission",level:3},{value:"2. Expose the Keyring interface as a JSON-RPC API",id:"2-expose-the-keyring-interface-as-a-json-rpc-api",level:3},{value:"3. Use the Keyring API from a dapp",id:"3-use-the-keyring-api-from-a-dapp",level:3}],u={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-snap-to-connect-to-custom-evm-accounts"},"Create a Snap to connect to custom EVM accounts"),(0,r.kt)("p",null,"This tutorial walks you through creating a Snap that uses the ",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/concepts/keyring-api"},"Keyring API"),"\nto integrate custom EVM accounts in MetaMask."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Snap set up using the ",(0,r.kt)("a",{parentName:"li",href:"/ios-updates/snaps/get-started/quickstart"},"Snaps quickstart")),(0,r.kt)("li",{parentName:"ul"},"Business logic written for your custom EVM account type")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-add-the-snap_manageaccounts-permission"},"1. Add the snap_manageAccounts permission"),(0,r.kt)("p",null,"Request permission to call ",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/rpc-api#snap_manageaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_manageAccounts"))," by\nediting the ",(0,r.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," file in your Snap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n  // ...other settings\n  "initialPermissions": {\n    // ...other permissions\n    "snap_manageAccounts": {}\n  }\n}\n')),(0,r.kt)("h3",{id:"2-expose-the-keyring-interface-as-a-json-rpc-api"},"2. Expose the Keyring interface as a JSON-RPC API"),(0,r.kt)("p",null,"Export the ",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/exports#onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," function from the Snap to expose\nthe ",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/keyring-api/type-aliases/Keyring"},(0,r.kt)("inlineCode",{parentName:"a"},"Keyring")),"\ninterface as a JSON-RPC API."),(0,r.kt)("p",null,"The Keyring API provides a helper called\n",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/keyring-api/functions/handleKeyringRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"handleKeyringRequest")),".\nThis helper takes an instance of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface and a request object.\nIt responds to requests where the ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_*"),", and throws a\n",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/keyring-api/classes/MethodNotSupportedError"},(0,r.kt)("inlineCode",{parentName:"a"},"MethodNotSupportedError")),"\nif it doesn't recognize the request method."),(0,r.kt)("p",null,"Since your Snap most likely wants to answer other JSON-RPC requests in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_*")," ones,\nanother helper called ",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/keyring-api/functions/buildHandlersChain"},(0,r.kt)("inlineCode",{parentName:"a"},"buildHandlersChain")),"\nlets you chain multiple RPC handlers together.\nAs each handler in the chain throws a\n",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/keyring-api/classes/MethodNotSupportedError"},(0,r.kt)("inlineCode",{parentName:"a"},"MethodNotSupportedError")),",\nthe next handler in the chain is called.\nThe return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"buildHandlersChain")," is a function that can be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," export."),(0,r.kt)("p",null,"The following is an example of composing two handlers: the keyring handler and a custom handler.\nThis code goes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/snap/src/index.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import {\n  MethodNotSupportedError,\n  buildHandlersChain,\n  handleKeyringRequest,\n} from '@metamask/keyring-api';\nimport type { OnRpcRequestHandler } from '@metamask/snaps-types';\n\n// This is your custom EVM account implementation\nimport { MyKeyring } from './keyring';\n\nlet keyring: MyKeyring;\n\n/**\n * Handle keyring requests.\n *\n * @param args - Request arguments.\n * @param args.request - Request to execute.\n * @returns The execution result.\n */\nconst keyringHandler: OnRpcRequestHandler = async ({ request }) => {\n  if (!keyring) {\n    const state = await snap.request({\n      method: 'snap_manageState',\n      params: { operation: 'get' },\n    });\n    if (!keyring) {\n      keyring = new MyKeyring(state);\n    }\n  }\n  return await handleKeyringRequest(keyring, request);\n};\n\n/**\n * Execute a custom Snap request.\n *\n * @param args - Request arguments.\n * @param args.request - Request to execute.\n * @returns The execution result.\n */\nconst customHandler: OnRpcRequestHandler = async ({\n  request,\n}): Promise<any> => {\n  switch (request.method) {\n    // internal methods\n    case 'mysnap_hello': {\n      return 'Hello World!';\n    }\n\n    default: {\n      throw new MethodNotSupportedError(request.method);\n    }\n  }\n};\n\n/**\n * Compose both handlers\n */\nexport const onRpcRequest: OnRpcRequestHandler = buildHandlersChain(\n  keyringHandler,\n  customHandler,\n);\n")),(0,r.kt)("h3",{id:"3-use-the-keyring-api-from-a-dapp"},"3. Use the Keyring API from a dapp"),(0,r.kt)("p",null,"As you build a companion dapp to provide a user interface for your Keyring Snap, you'll need to\ninteract with your Snap's JSON-RPC API.\nWhile you could do this by making regular RPC calls using\n",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/reference/rpc-api#wallet_invokesnap"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_invokeSnap")),", we recommend\n",(0,r.kt)("a",{parentName:"p",href:"/ios-updates/snaps/how-to/use-keyring-api"},"using the Keyring API from your dapp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { KeyringSnapRpcClient } from '@metamask/keyring-api';\nimport { defaultSnapOrigin as snapId } from '../config';\n\nconst keyringClient = new KeyringSnapRpcClient(snapId, window.ethereum);\n\n// Example usage, after the user fills the steps to create an account...\nkeyringClient.createAccount(name, options);\n\n// The above call is equivalent to\nwindow.ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: {\n      snapId,\n      request: {\n        method: 'keyring_createAccount',\n        params: { name, options }\n      }\n  },\n});\n")))}m.isMDXComponent=!0}}]);