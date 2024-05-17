"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5044],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),s=n(4865),o=n(19365);const l={description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:9},i="Connect to a Snap",u={unversionedId:"how-to/connect-to-a-snap",id:"how-to/connect-to-a-snap",title:"Connect to a Snap",description:"Connect your dapp to existing, third-party Snaps.",source:"@site/snaps/how-to/connect-to-a-snap.md",sourceDirName:"how-to",slug:"/how-to/connect-to-a-snap",permalink:"/update-react-tutorials-86-mm-detect/snaps/how-to/connect-to-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/connect-to-a-snap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:9},sidebar:"snapsSidebar",previous:{title:"Get allowlisted",permalink:"/update-react-tutorials-86-mm-detect/snaps/how-to/get-allowlisted"},next:{title:"Reference",permalink:"/update-react-tutorials-86-mm-detect/snaps/reference"}},p={},c=[{value:"Detect wallet",id:"detect-wallet",level:2},{value:"Detect MetaMask Flask",id:"detect-metamask-flask",level:3},{value:"Connect to a Snap",id:"connect-to-a-snap-1",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a Snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a Snap",id:"reconnect-to-a-snap",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"connect-to-a-snap"},"Connect to a Snap"),(0,r.yg)("p",null,"Dapps can connect to Snaps designed to communicate with dapps.\nDapps can use these Snaps to take advantage of new features enabled by Snaps.\nThis is possible because Snaps can expose a ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API"),"."),(0,r.yg)("h2",{id:"detect-wallet"},"Detect wallet"),(0,r.yg)("p",null,"To connect to a Snap, dapps must first detect MetaMask in the user's browser.\nSee the Wallet documentation on ",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/connect"},"how to connect to MetaMask"),"."),(0,r.yg)("h3",{id:"detect-metamask-flask"},"Detect MetaMask Flask"),(0,r.yg)("p",null,"When developing your Snap, you might need to require\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/get-started/install-flask"},"MetaMask Flask")," in your dapp.\nWe recommend detecting MetaMask Flask using the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/concepts/wallet-interoperability"},"multi-wallet detection mechanism")," specified by EIP-6963.\nAlternatively, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider, but this might fail if the user\nis running multiple wallet extensions simultaneously. "),(0,r.yg)("p",null,"To detect MetaMask Flask, you can add the following to ",(0,r.yg)("inlineCode",{parentName:"p"},"window.onload"),": "),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"EIP-6963 example",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'window.addEventListener("eip6963:announceProvider", (event) => {\n  /* event.detail contains the discovered provider interface. */\n  const providerDetail = event.detail;\n\n  /* providerDetail.info.rdns is the best way to distinguish a wallet extension. */\n  if (providerDetail.info.rdns === "io.metamask.flask") {\n    console.log("MetaMask Flask successfully detected!");\n    // Now you can use Snaps!\n  } else { \n    console.error("Please install MetaMask Flask!");\n  }\n});\n\nwindow.dispatchEvent(new Event("eip6963:requestProvider"));\n'))),(0,r.yg)(o.A,{value:"Injected provider example",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const provider = window.ethereum; \n\nconst isFlask = ( \n  await provider?.request({ method: "web3_clientVersion" })\n)?.includes("flask"); \n\nif (provider && isFlask) {\n  console.log("MetaMask Flask successfully detected!");\n  // Now you can use Snaps!\n} else {\n  console.error("Please install MetaMask Flask!", error);\n}\n')))),(0,r.yg)("h2",{id:"connect-to-a-snap-1"},"Connect to a Snap"),(0,r.yg)("p",null,"Connect to a Snap by calling the ",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"\nmethod from your dapp.\nIf a user doesn't have the Snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the Snap."),(0,r.yg)("p",null,"The following are different possible outcomes from calling ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),"."),(0,r.yg)("h3",{id:"user-rejects-the-installation-request"},"User rejects the installation request"),(0,r.yg)("p",null,"If the user rejects the installation request, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," throws the following error:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ "code": 4001, "message": "User rejected the request." }\n')),(0,r.yg)("h3",{id:"user-approves-the-installation-request"},"User approves the installation request"),(0,r.yg)("p",null,"If the user approves the installation request, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns an object\nwith the following shape:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": true,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n')),(0,r.yg)("h3",{id:"snap-is-already-installed"},"Snap is already installed"),(0,r.yg)("p",null,"If the Snap is already installed, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns the same object as for a\nnew installation of the Snap, but the user won't see a confirmation pop-up asking them to install the Snap."),(0,r.yg)("h2",{id:"determine-whether-a-snap-is-installed"},"Determine whether a Snap is installed"),(0,r.yg)("p",null,"Determine whether a Snap is installed by calling the\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/wallet-api-for-snaps#wallet_getsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," method from your dapp.\nThis method returns a list of only those Snaps that are connected to your current dapp."),(0,r.yg)("p",null,"The response is in the form of an object keyed by the ID of the Snap.\nEach value is a nested object with additional information, such as the version of the Snap that is installed."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"wallet_getSnaps")," only returns the Snaps that are connected to your dapp.\nThe user may have other Snaps installed that your dapp is not aware of. ")),(0,r.yg)("p",null,"The following example verifies whether a Snap with ID ",(0,r.yg)("inlineCode",{parentName:"p"},"npm:super-snap")," is installed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'const snaps = await ethereum.request({\n    method: "wallet_getSnaps"\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes("npm:super-snap");\n')),(0,r.yg)("p",null,"If you need to work with a specific version of a Snap, you can instead iterate over\n",(0,r.yg)("inlineCode",{parentName:"p"},"Object.values(snaps)"),", and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," properties inside each object to determine\nwhether the Snap is installed with the required version."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"A user cannot install multiple versions of a Snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a Snap unless you absolutely need to.\nIn most cases, you should request the latest version of the Snap and architect your dapp to be able\nto work with that version.")),(0,r.yg)("h2",{id:"reconnect-to-a-snap"},"Reconnect to a Snap"),(0,r.yg)("p",null,"At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a Snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a Snap, you can reconnect by calling\n",(0,r.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".\nSince the Snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the Snap, the response has ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," for your ",(0,r.yg)("inlineCode",{parentName:"p"},"SNAP_ID"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": false,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n')))}h.isMDXComponent=!0},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(58168),r=n(96540),s=n(20053),o=n(23104),l=n(47751),i=n(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},o,{className:(0,s.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,l.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",u.tabList)},r.createElement(p,(0,a.A)({},e,t)),r.createElement(c,(0,a.A)({},e,t)))}function m(e){const t=(0,i.A)();return r.createElement(d,(0,a.A)({key:String(t)},e))}},47751:(e,t,n)=>{n.d(t,{u:()=>d});var a=n(96540),r=n(56347),s=n(57485),o=n(31682),l=n(89466);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??i(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,m]=c({queryString:n,groupId:r}),[h,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=d??h;return p({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),y(e)}),[m,y,s]),tabValues:s}}}}]);