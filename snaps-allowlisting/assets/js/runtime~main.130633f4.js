(()=>{"use strict";var e,f,a,c,b,d={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=d,e=[],r.O=(f,a,c,b)=>{if(!a){var d=1/0;for(i=0;i<e.length;i++){a=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(f=n)}}return f}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[a,c,b]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((f=>d[f]=()=>e[f]));return d.default=()=>e,r.d(b,d),b},r.d=(e,f)=>{for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,a)=>(r.f[a](e,f),f)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",212:"ac6e5928",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",359:"569f2f3a",520:"cb2c0fed",528:"9cea254b",531:"52198f09",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",1257:"21b3814e",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1557:"e6fd4aff",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2273:"b10f2184",2358:"a767f895",2416:"63b87658",2445:"c23d85eb",2520:"82c9c8ff",2544:"289fa920",2675:"486ba757",2700:"d3bb2b22",2706:"59a0b046",2716:"d29f7d41",2782:"3ee3d2fe",2844:"f8f7b6b2",2894:"3e112a3e",2971:"47fa8f02",2980:"3925c87d",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3267:"0f3ed015",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3696:"42e122ba",3794:"d5f74ffe",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4057:"56aa118c",4081:"2150471b",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4300:"fe7415f5",4451:"3674895c",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4778:"1fe47011",4787:"3720c009",4873:"e3386034",4897:"71bb1823",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5151:"55960ee5",5163:"d86d8d8f",5188:"37285b91",5246:"cf946124",5312:"19fab523",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5892:"11b7fc92",6023:"a2353af7",6040:"b099eb42",6041:"94590018",6095:"ab8b636d",6161:"e7df90cf",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6655:"44c3ed52",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6832:"31bfc0a5",6875:"e1aa5429",6937:"5625bc05",6940:"090107f6",6961:"19be516c",6969:"14eb3368",7441:"ab85252c",7530:"b1deaea6",7540:"d70a1ef5",7682:"015fe5e8",7775:"5e56b9d4",7785:"68c12626",8050:"0b387740",8051:"b35d0ddb",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8581:"935f2afb",8638:"037997aa",8691:"8329f30e",8705:"577b8b2a",8714:"1be78505",8760:"ab3b18fd",8873:"fd49626c",8957:"652081cc",9071:"4ad67257",9175:"d2011f4f",9329:"ef8d09aa",9355:"95c87532",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{53:"0a16b60d",212:"ee48bbd1",242:"46bbd2a2",257:"fcab9a30",289:"9b662c0b",296:"3250db60",359:"279d07e7",416:"cd044015",520:"e9da9b49",528:"2e3e3a47",531:"1e3a66ef",736:"71d92c59",785:"57d792e5",792:"a0d4dc5d",910:"858489b4",1245:"4b021537",1257:"2de20fd1",1266:"583d981f",1273:"7d5a8c41",1343:"8ff1bfcd",1557:"6992dbdc",1588:"2e61f003",1660:"651d3e55",1697:"1026dca6",1717:"7a47bcb1",1733:"a827ef4b",1774:"93445f1c",1784:"2dee6089",1874:"7548ac2d",1891:"efd69d95",1926:"ec1c8a4e",1930:"566d4566",1969:"54770363",2138:"55088491",2146:"4b2bedb7",2166:"4ebd3b79",2169:"3718402f",2273:"76f752e5",2358:"7ce8c5dc",2416:"531a7f45",2445:"9e2bfb79",2520:"96e8513b",2544:"855bd041",2675:"6c614b9a",2700:"6627b31b",2706:"4aeced6f",2716:"3a56c3a0",2782:"60978312",2844:"9d72def4",2894:"8c782f90",2971:"4af9acf7",2980:"3a0cb7be",3056:"640f7e2e",3102:"3726b9ce",3235:"b4bc7f59",3241:"b8ba4949",3267:"f5cfd960",3349:"c590ed29",3374:"18749589",3442:"db9a459f",3499:"65ad8bd3",3523:"42788d40",3557:"a73edecc",3582:"b6bd7c3b",3623:"3d43384d",3692:"dbd04105",3696:"f066ec95",3794:"ce6fdf81",3860:"233dc9a9",3967:"fca49b9e",4022:"e768118b",4050:"2399cabe",4057:"a597662c",4081:"4e204d31",4151:"1c691a23",4209:"0891dbb7",4279:"986e0bde",4300:"472efc2f",4451:"e0f9d8e7",4520:"ada07b9c",4583:"ed2eab5e",4687:"cf590b95",4698:"7a42cf5c",4778:"6bab6dc7",4787:"6d6c9908",4873:"107cdc1a",4897:"4193890c",4933:"eb740b5b",4939:"d1f67fb9",4961:"d707a39e",5044:"9491ba56",5151:"70e29747",5163:"81d869f5",5188:"d8b93543",5246:"73bc3f26",5312:"331c8fed",5569:"4759585c",5586:"998c2205",5593:"d73f734f",5685:"e250d9c7",5690:"6c9c06b2",5693:"02829b60",5892:"49b8b68a",6023:"3716c469",6040:"8a184a8e",6041:"b4b726cb",6095:"fa327539",6161:"8ecb24f7",6213:"6c52b469",6286:"55884158",6325:"bba7da47",6333:"d581c255",6373:"f85486e8",6433:"21072b33",6594:"38109eaf",6655:"48a6c045",6694:"7047d682",6744:"74299f4c",6764:"b389f072",6832:"c8857458",6875:"fe871580",6937:"9015f3d9",6940:"71ec212b",6961:"48f086da",6969:"016c2881",7113:"79b61b81",7195:"b658c23d",7441:"c38d6e81",7530:"c4f18d39",7540:"62c07ecd",7682:"f7f2978b",7775:"5ae17735",7785:"ad15621c",7996:"a6d5cceb",8050:"cca19ab9",8051:"100d7018",8055:"b5cceacb",8228:"8ae32325",8280:"a535dac8",8298:"021dee7f",8317:"5d2820cc",8401:"f9349c4c",8428:"957e03c0",8483:"acc392ef",8581:"5660b7ac",8638:"bb61a0b0",8691:"c5c2168a",8705:"53dfd835",8714:"b5daaf67",8760:"ba82110d",8873:"839613ee",8913:"a65b2f19",8957:"b3d38ba0",9071:"0a132b29",9175:"fdb266f8",9329:"362e728c",9355:"3a8d1792",9375:"77edf834",9400:"b561111b",9462:"1e733e84",9477:"63d6a2cd",9545:"cba80f08",9566:"e2baa3bd",9588:"f0c62748",9594:"8bc7d4c6",9631:"e6774287",9664:"fc001dad",9703:"82cc34ee",9944:"f62529bc",9987:"2b457662"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),c={},b="metamask-docs:",r.l=(e,f,a,d)=>{if(c[e])c[e].push(f);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==b+a){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+a),t.src=e),c[e]=[f];var l=(f,a)=>{t.onerror=t.onload=null,clearTimeout(u);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(a))),f)return f(a)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/snaps-allowlisting/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53",ac6e5928:"212",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296","569f2f3a":"359",cb2c0fed:"520","9cea254b":"528","52198f09":"531",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910","21b3814e":"1257","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343",e6fd4aff:"1557","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169",b10f2184:"2273",a767f895:"2358","63b87658":"2416",c23d85eb:"2445","82c9c8ff":"2520","289fa920":"2544","486ba757":"2675",d3bb2b22:"2700","59a0b046":"2706",d29f7d41:"2716","3ee3d2fe":"2782",f8f7b6b2:"2844","3e112a3e":"2894","47fa8f02":"2971","3925c87d":"2980","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235","0f3ed015":"3267",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692","42e122ba":"3696",d5f74ffe:"3794",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","56aa118c":"4057","2150471b":"4081","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",fe7415f5:"4300","3674895c":"4451","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","1fe47011":"4778","3720c009":"4787",e3386034:"4873","71bb1823":"4897",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","55960ee5":"5151",d86d8d8f:"5163","37285b91":"5188",cf946124:"5246","19fab523":"5312",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693","11b7fc92":"5892",a2353af7:"6023",b099eb42:"6040",ab8b636d:"6095",e7df90cf:"6161","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594","44c3ed52":"6655",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","31bfc0a5":"6832",e1aa5429:"6875","5625bc05":"6937","090107f6":"6940","19be516c":"6961","14eb3368":"6969",ab85252c:"7441",b1deaea6:"7530",d70a1ef5:"7540","015fe5e8":"7682","5e56b9d4":"7775","68c12626":"7785","0b387740":"8050",b35d0ddb:"8051",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","78eb1577":"8483","935f2afb":"8581","037997aa":"8638","8329f30e":"8691","577b8b2a":"8705","1be78505":"8714",ab3b18fd:"8760",fd49626c:"8873","652081cc":"8957","4ad67257":"9071",d2011f4f:"9175",ef8d09aa:"9329","95c87532":"9355","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(f,a)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1869|5354)$/.test(f))e[f]=0;else{var b=new Promise(((a,b)=>c=e[f]=[a,b]));a.push(c[2]=b);var d=r.p+r.u(f),t=new Error;r.l(d,(a=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var b=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,a)=>{var c,b,d=a[0],t=a[1],o=a[2],n=0;if(d.some((f=>0!==e[f]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(f&&f(a);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},a=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();