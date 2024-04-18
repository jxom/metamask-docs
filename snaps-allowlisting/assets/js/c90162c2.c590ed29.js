"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return a?t.createElement(g,s(s({ref:n},c),{},{components:a})):t.createElement(g,s({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16658:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const i={description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},s="Interactive UI",o={unversionedId:"features/custom-ui/interactive-ui",id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/snaps-allowlisting/snaps/features/custom-ui/interactive-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/snaps-allowlisting/snaps/features/custom-ui/"},next:{title:"Lifecycle hooks",permalink:"/snaps-allowlisting/snaps/features/lifecycle-hooks"}},p={},l=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function f(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"interactive-ui"},"Interactive UI"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-ui/"},"custom UI"),".\nIt allows interfaces returned from ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),",\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", and\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage"))," to respond to user input."),(0,r.yg)("p",null,"The following interactive UI components are available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-allowlisting/snaps/features/custom-ui/#button"},(0,r.yg)("inlineCode",{parentName:"a"},"button"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-allowlisting/snaps/features/custom-ui/#form"},(0,r.yg)("inlineCode",{parentName:"a"},"form"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-allowlisting/snaps/features/custom-ui/#input"},(0,r.yg)("inlineCode",{parentName:"a"},"input")))),(0,r.yg)("h2",{id:"create-an-interactive-interface"},"Create an interactive interface"),(0,r.yg)("p",null,"Create an interactive interface using the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", returned from\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", or from\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage")),"."),(0,r.yg)("p",null,"If you need to ",(0,r.yg)("a",{parentName:"p",href:"#update-an-interactive-interface"},"update the interface")," or\n",(0,r.yg)("a",{parentName:"p",href:"#get-an-interactive-interfaces-state"},"get its state")," at a future time, you should store its ID in\nthe Snap's storage."),(0,r.yg)("h2",{id:"update-an-interactive-interface"},"Update an interactive interface"),(0,r.yg)("p",null,"To update an interactive interface that is still active, use the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_updateinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_updateInterface"))," method.\nPass the ID of the interface to be updated, and the new UI."),(0,r.yg)("p",null,"Updating an interface can be done as part of the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#onuserinput"},(0,r.yg)("inlineCode",{parentName:"a"},"onUserInput"))," entry point or as part of an\nasynchronous process."),(0,r.yg)("p",null,"The following is an example flow:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},"The user fills the fields, and selects the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"onUserInput")," is called, and the logic detects that the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button was selected."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called, replacing the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button with a ",(0,r.yg)("a",{parentName:"li",href:"/snaps-allowlisting/snaps/features/custom-ui/#spinner"},(0,r.yg)("inlineCode",{parentName:"a"},"spinner")),"."),(0,r.yg)("li",{parentName:"ol"},"Custom logic sends the funds."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called again, replacing the whole UI with a success message.")),(0,r.yg)("h2",{id:"get-an-interactive-interfaces-state"},"Get an interactive interface's state"),(0,r.yg)("p",null,"At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_getinterfacestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getInterfaceState")),"\nmethod with the ID of the interface."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/interactive-ui-example-snap")),"\npackage for a full example of implementing interactive UI."))}f.isMDXComponent=!0}}]);