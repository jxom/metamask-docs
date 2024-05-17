"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8874],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>u});var a=t(96540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=l(n.components);return a.createElement(c.Provider,{value:e},n.children)},g="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),g=l(t),d=i,u=g["".concat(c,".").concat(d)]||g[d]||m[d]||s;return t?a.createElement(u,r(r({ref:e},p),{},{components:t})):a.createElement(u,r({ref:e},p))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[g]="string"==typeof n?n:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42596:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const s={description:"Provide transaction insights in MetaMask's transaction confirmation window.",toc_max_heading_level:4,sidebar_position:13},r="Transaction insights",o={unversionedId:"features/transaction-insights",id:"features/transaction-insights",title:"Transaction insights",description:"Provide transaction insights in MetaMask's transaction confirmation window.",source:"@site/snaps/features/transaction-insights.md",sourceDirName:"features",slug:"/features/transaction-insights",permalink:"/update-react-tutorials-86-mm-detect/snaps/features/transaction-insights",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/transaction-insights.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{description:"Provide transaction insights in MetaMask's transaction confirmation window.",toc_max_heading_level:4,sidebar_position:13},sidebar:"snapsSidebar",previous:{title:"Static files",permalink:"/update-react-tutorials-86-mm-detect/snaps/features/static-files"},next:{title:"How to",permalink:"/update-react-tutorials-86-mm-detect/snaps/how-to"}},c={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to display transaction insights",id:"1-request-permission-to-display-transaction-insights",level:3},{value:"2. Implement the <code>onTransaction</code> entry point",id:"2-implement-the-ontransaction-entry-point",level:3},{value:"Transaction severity level",id:"transaction-severity-level",level:4},{value:"Example",id:"example",level:2}],p={toc:l},g="wrapper";function m(n){let{components:e,...s}=n;return(0,i.yg)(g,(0,a.A)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"transaction-insights"},"Transaction insights"),(0,i.yg)("p",null,"You can provide transaction insights in MetaMask's transaction confirmation window before a user\nsigns a transaction.\nFor example, you can show the user the percentage of gas fees they would pay for their transaction."),(0,i.yg)("h2",{id:"steps"},"Steps"),(0,i.yg)("h3",{id:"1-request-permission-to-display-transaction-insights"},"1. Request permission to display transaction insights"),(0,i.yg)("p",null,"Request the ",(0,i.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/permissions#endowmenttransaction-insight"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:transaction-insight")),"\npermission by adding the following to your Snap's manifest file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {}\n}\n')),(0,i.yg)("p",null,"If you need to receive the origin of the transaction request, add ",(0,i.yg)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," to the\npermission object, and set it to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:signature-insight": {\n    "allowTransactionOrigin": true\n  }\n}\n')),(0,i.yg)("h3",{id:"2-implement-the-ontransaction-entry-point"},"2. Implement the ",(0,i.yg)("inlineCode",{parentName:"h3"},"onTransaction")," entry point"),(0,i.yg)("p",null,"Expose an ",(0,i.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/reference/entry-points#ontransaction"},(0,i.yg)("inlineCode",{parentName:"a"},"onTransaction"))," entry point, which receives\na raw unsigned transaction payload, the chain ID, and the optional transaction origin.\nWhen a user submits a transaction using the MetaMask extension, MetaMask calls the ",(0,i.yg)("inlineCode",{parentName:"p"},"onTransaction"),"\nhandler method."),(0,i.yg)("p",null,"The following is an example implementation of ",(0,i.yg)("inlineCode",{parentName:"p"},"onTransaction"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n')),(0,i.yg)("p",null,"The Snap tab in the transaction confirmation window displays the transaction insights:"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{src:t(62982).A,alt:"Transaction insights",width:"360px",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("h4",{id:"transaction-severity-level"},"Transaction severity level"),(0,i.yg)("admonition",{type:"flaskOnly"}),(0,i.yg)("p",null,"A Snap providing transaction insights can return an optional severity level of ",(0,i.yg)("inlineCode",{parentName:"p"},'"critical"'),".\nMetaMask shows a modal with the warning before the user can confirm the transaction."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    // highlight-next-line\n    severity: "critical",\n  };\n};\n')),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{src:t(26056).A,alt:"Transaction insights warning",width:"360px"})),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"For a full end-to-end tutorial that walks you through creating a transaction insights Snap, see\n",(0,i.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/snaps/learn/tutorials/transaction-insights"},"Create a Snap to calculate gas fee percentages"),".\nYou can also see the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/transaction-insights"},(0,i.yg)("inlineCode",{parentName:"a"},"@metamask/transaction-insights-example-snap")),"\npackage for a full example of implementing transaction insights."))}m.isMDXComponent=!0},26056:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/transaction-insights-warning-bcc44107b136efbe6df830c536f9bbeb.png"},62982:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/transaction-insights-window-993288f566e310f6a5a7a86b0ebd8e08.png"}}]);