"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[53],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,s(s({ref:n},l),{},{components:t})):a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={description:"Schedule periodic actions for your users.",sidebar_position:1},s="Cron jobs",i={unversionedId:"features/cron-jobs",id:"features/cron-jobs",title:"Cron jobs",description:"Schedule periodic actions for your users.",source:"@site/snaps/features/cron-jobs.md",sourceDirName:"features",slug:"/features/cron-jobs",permalink:"/1202-tutorial/snaps/features/cron-jobs",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/cron-jobs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Schedule periodic actions for your users.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Features",permalink:"/1202-tutorial/snaps/features"},next:{title:"Custom EVM accounts",permalink:"/1202-tutorial/snaps/features/custom-evm-accounts/"}},p={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Configure a cron job",id:"1-configure-a-cron-job",level:3},{value:"2. Implement a cron job handler",id:"2-implement-a-cron-job-handler",level:3},{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cron-jobs"},"Cron jobs"),(0,r.yg)("p",null,'You can schedule actions to run periodically at fixed times or intervals, also known as "cron jobs."\nFor example, you can display a dialog or notification in MetaMask at a specific time each day.'),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-configure-a-cron-job"},"1. Configure a cron job"),(0,r.yg)("p",null,"To configure a cron job, request the ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/permissions#endowmentcronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:cronjob")),"\npermission, specifying one or more cron jobs in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jobs")," array.\nDefine each job with a ",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm"},"cron expression"),"\nand a request object, which MetaMask sends to the Snap's cron job handler when the job is executed."),(0,r.yg)("p",null,"For example, to configure a job that executes every minute, add the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "execute"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.yg)("h3",{id:"2-implement-a-cron-job-handler"},"2. Implement a cron job handler"),(0,r.yg)("p",null,"Expose an ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/entry-points#oncronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"onCronjob"))," entry point, which is triggered at\nthe specified schedule with the requests defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThe following example handles the ",(0,r.yg)("inlineCode",{parentName:"p"},"execute")," method specified in the previous example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "execute":\n      // Cron jobs can execute any method that is available to the Snap.\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "alert",\n          content: panel([\n            heading("Cron job"),\n            text("This dialog was triggered by a cron job."),\n          ]),\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')),(0,r.yg)("admonition",{title:"Access data from cron jobs",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"When accessing encrypted data from cron jobs using\n",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),", MetaMask requires the user to\nenter their password if the wallet is locked.\nThis interaction can be confusing to the user, since the Snap accesses the data in the background\nwithout the user being aware."),(0,r.yg)("p",{parentName:"admonition"},"If the cron job requires access to encrypted state, use\n",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api#snap_getclientstatus"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getClientStatus"))," to ensure that MetaMask is\nunlocked before accessing state.\nThis will prevent an unexpected password request, improving the user's experience."),(0,r.yg)("p",{parentName:"admonition"},"If the cron job does not require access to sensitive data, store that data in\nunencrypted state by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," when using\n",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/cronjobs"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/cronjob-example-snap")),"\npackage for a full example of implementing cron jobs."))}m.isMDXComponent=!0}}]);