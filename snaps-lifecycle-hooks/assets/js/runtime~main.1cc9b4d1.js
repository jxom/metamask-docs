(()=>{"use strict";var e,c,a,d,b,f={},r={};function t(e){var c=r[e];if(void 0!==c)return c.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return f[e].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=f,e=[],t.O=(c,a,d,b)=>{if(!a){var f=1/0;for(n=0;n<e.length;n++){a=e[n][0],d=e[n][1],b=e[n][2];for(var r=!0,o=0;o<a.length;o++)(!1&b||f>=b)&&Object.keys(t.O).every((e=>t.O[e](a[o])))?a.splice(o--,1):(r=!1,b<f&&(f=b));if(r){e.splice(n--,1);var l=d();void 0!==l&&(c=l)}}return c}b=b||0;for(var n=e.length;n>0&&e[n-1][2]>b;n--)e[n]=e[n-1];e[n]=[a,d,b]},t.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return t.d(c,{a:c}),c},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);t.r(b);var f={};c=c||[null,a({}),a([]),a(a)];for(var r=2&d&&e;"object"==typeof r&&!~c.indexOf(r);r=a(r))Object.getOwnPropertyNames(r).forEach((c=>f[c]=()=>e[c]));return f.default=()=>e,t.d(b,f),b},t.d=(e,c)=>{for(var a in c)t.o(c,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((c,a)=>(t.f[a](e,c),c)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",82:"bcd3ef34",103:"db879b56",106:"d744a15b",167:"486ba757",260:"3e112a3e",261:"reactPlayerKaltura",288:"dfccf318",368:"41f5386a",439:"4cdeeed5",479:"82c9c8ff",537:"fee401f7",782:"cf469dcb",795:"63b87658",825:"03c51261",872:"a37313e4",914:"f7ffb983",941:"2ca6782d",1038:"c423245b",1056:"bd391754",1145:"40d431ee",1321:"d2baf1b2",1342:"6bd0212d",1452:"389220b7",1687:"8267a4cd",1764:"17a18c8c",1858:"86c686bd",2071:"fd6c27b9",2121:"reactPlayerFacebook",2124:"88fb5f9d",2158:"e41cd186",2177:"fd774138",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2419:"7c5954e6",2472:"ce634f1e",2546:"reactPlayerStreamable",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2841:"56abd40c",2928:"d2011f4f",2959:"0d1f1c53",2998:"909d3e79",3109:"54f1853a",3115:"97c42b41",3237:"1df93b7f",3273:"857e9ee9",3414:"09070e4b",3520:"cc7fb5a4",3647:"e7087fcf",3696:"015fe5e8",3743:"reactPlayerVimeo",3751:"3720c009",3789:"bce2912a",3805:"91efdb01",3845:"fc9c3721",3878:"7c16bb08",3899:"bb0a09d2",4121:"55960ee5",4151:"ff576332",4232:"7976d7e4",4257:"9cea254b",4283:"c66adc2f",4328:"573e544f",4359:"3d0ce9fc",4397:"3cc70d16",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"ab8b636d",4506:"4c050ee8",4507:"129514b0",4646:"56d3cc0a",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"ef105518",4750:"3e786943",4957:"2150471b",5015:"5eb549af",5048:"4a53c000",5209:"1a5cfe2b",5404:"49244e61",5412:"7d4adaa7",5413:"dfe67240",5473:"f5000f06",5576:"3d86cae6",5589:"37f92ba7",5643:"19fab523",5709:"8ec30cb2",5712:"66d369c7",5764:"66cf4c41",5774:"406cc3cd",5808:"a419eed7",5812:"f0c90a0b",5965:"2e39c2b3",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6139:"391ef89b",6147:"c455d87c",6181:"8d63df11",6216:"reactPlayerTwitch",6250:"2b6d957d",6254:"05e0cb61",6292:"55aa32d7",6320:"facbe7ee",6325:"46731dd0",6425:"b573b49b",6487:"ad36dd7c",6528:"7c5a4f52",6570:"903ae864",6628:"6529a0a0",6655:"70334ba8",6695:"198d1261",6752:"be5df1d1",6754:"cfc76383",6784:"1cf9e4c8",6854:"25dd8fd2",6937:"85f96331",6942:"5806c6d0",7050:"11b7fc92",7194:"01740467",7266:"5e56b9d4",7318:"5625bc05",7329:"80cc2fbc",7340:"ce260bbc",7416:"6483afbc",7440:"9edebb4e",7455:"27d52537",7596:"reactPlayerDailyMotion",7612:"72448035",7664:"reactPlayerPreview",7698:"31bfc0a5",7767:"149070b9",7890:"a04dfd4c",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8078:"d058e3e1",8099:"ab65931b",8114:"8d9a344b",8162:"50dc8f0c",8218:"3669837a",8301:"4ad67257",8358:"bf7ad130",8360:"95ed0894",8439:"3ba19fe4",8613:"8d4eac50",8669:"56aa118c",8742:"6ebf937c",8778:"b91521d0",8812:"f760ba82",8888:"reactPlayerVidyard",8921:"fb409260",8931:"cf946124",8974:"a2c24fc3",9038:"cc6a76b5",9057:"94590018",9196:"e8fb5fdf",9408:"3dcb4053",9514:"1be78505",9548:"fe7415f5",9565:"f3f094fb",9817:"14eb3368",9924:"df203c0f",9936:"6ec7c3a5",9978:"10737780",9980:"284a1a9e",9997:"98e5bc64"}[e]||e)+"."+{40:"98e06ecd",53:"a95bc279",82:"4d942f25",103:"9b03c6fd",106:"988c8c94",167:"519038b6",260:"f597b744",261:"091ed2a3",288:"58a47680",368:"87308d3c",439:"5b792ee3",479:"42605fbf",537:"66708d2a",782:"482e39ed",795:"14bfb0e1",825:"455b4dfe",872:"0d60d49d",914:"ba8552e4",941:"26241ba6",1038:"a8d004bb",1056:"eb64d766",1145:"2d920bb5",1321:"50cb7a76",1342:"13a3881c",1426:"be64a7dc",1452:"fbb3c3e1",1687:"93bdf08a",1764:"5b9be2a5",1858:"d03b4941",2071:"3fed41d8",2121:"697cc207",2124:"6f3d18f6",2158:"71831e98",2177:"9f9eb023",2250:"b9db9968",2257:"c605bcea",2274:"4eb43691",2419:"a42c54e6",2472:"bfaeb170",2546:"4582143a",2741:"f74f6b09",2744:"d84da458",2794:"c9840aef",2841:"4e174974",2928:"cd897b04",2959:"32e853bf",2998:"448b64fb",3109:"b52d8557",3115:"f4ffcfa6",3237:"585d2316",3273:"8603c678",3414:"16ca90bf",3520:"def3e5ba",3647:"0ba154ab",3696:"3352a174",3743:"42a0d9c0",3751:"df3385d2",3789:"2cdd88e3",3805:"dac654be",3845:"14968db0",3878:"21cad556",3899:"086bf338",4121:"23f9d3ce",4151:"f9d7b5ff",4232:"45a115a1",4257:"25bd899f",4283:"5a67c7d8",4328:"e11cbfb4",4359:"8be1d296",4397:"f6cea3e0",4439:"a9b14741",4442:"95f42438",4467:"89fe0009",4506:"ec8818b8",4507:"8a094eac",4646:"625ca4d5",4657:"5455053c",4667:"3aafbc0c",4717:"b5939a35",4750:"12b28665",4957:"63f92c90",4972:"e49176b8",5015:"610fc8a7",5048:"c6b588cb",5209:"eac0daaa",5404:"10fbc0a2",5412:"00b50a95",5413:"8cf91aff",5473:"d5f0e394",5576:"c6ac87d6",5589:"dd1200ef",5643:"5cbe2d95",5709:"ea67a5e8",5712:"0e8e9f59",5764:"dbfc3a41",5774:"aa13cdb2",5808:"1f330aa6",5812:"d17a4cef",5965:"4adc8dbf",6011:"98545a61",6125:"bacff259",6139:"110cc4e3",6147:"bb212033",6181:"a771827f",6216:"d718da62",6250:"d27aacbf",6254:"ae6397a1",6292:"b439bbad",6316:"d9003c37",6320:"81003363",6325:"fa253104",6425:"a90a1008",6487:"79d6d30e",6528:"ef0be5f9",6570:"e44f256b",6628:"2b4d920e",6655:"875b6f60",6695:"f56330a5",6752:"182a38c9",6754:"de050ef8",6760:"1540dd1b",6784:"b1517ddc",6854:"25514477",6937:"8e2fb8f8",6942:"4980b019",6945:"07888cb2",7050:"b1d9619a",7194:"d160fe9f",7266:"6b57ba35",7318:"5cb6a303",7329:"d50ef401",7340:"655b6ff4",7416:"478a8df2",7440:"2dd67ed7",7455:"aaabac1c",7596:"a49c1936",7612:"c8953edc",7664:"9db1cd05",7698:"4056c798",7724:"df7eb109",7767:"f1220d2b",7890:"9d7cdc14",7918:"885d5086",7920:"3b179cfe",8055:"508ea7c7",8078:"db88e670",8099:"b0388022",8114:"ed584e83",8162:"ecfc9b43",8218:"23acf648",8301:"f8cf2c5b",8358:"2692249c",8360:"e879065f",8439:"aaf2eada",8613:"a673b93c",8669:"d657d635",8685:"19ce8911",8742:"ccc0c1a4",8778:"0d7d0570",8812:"83370e8c",8888:"1189c126",8894:"814fc599",8921:"cc4bc9f2",8931:"67fdff16",8974:"b2e9afaa",9038:"f63a792c",9057:"31dc2a18",9196:"5219d6b8",9408:"02a8b9f2",9487:"e0727ae8",9514:"bf7c0fe3",9548:"26c00770",9565:"592938bb",9701:"3bfec2d8",9817:"f9ec2b68",9876:"ee4589f6",9924:"8cde9cdd",9936:"f61e1591",9978:"a0830979",9980:"c531ed30",9984:"b62c7de0",9997:"be46c31c"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),d={},b="metamask-docs:",t.l=(e,c,a,f)=>{if(d[e])d[e].push(c);else{var r,o;if(void 0!==a)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+a){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",b+a),r.src=e),d[e]=[c];var u=(c,a)=>{r.onerror=r.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),b&&b.forEach((e=>e(a))),c)return c(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/snaps-lifecycle-hooks/",t.gca=function(e){return e={10737780:"9978",17896441:"7918",72448035:"7612",94590018:"9057","8145e54e":"40","935f2afb":"53",bcd3ef34:"82",db879b56:"103",d744a15b:"106","486ba757":"167","3e112a3e":"260",reactPlayerKaltura:"261",dfccf318:"288","41f5386a":"368","4cdeeed5":"439","82c9c8ff":"479",fee401f7:"537",cf469dcb:"782","63b87658":"795","03c51261":"825",a37313e4:"872",f7ffb983:"914","2ca6782d":"941",c423245b:"1038",bd391754:"1056","40d431ee":"1145",d2baf1b2:"1321","6bd0212d":"1342","389220b7":"1452","8267a4cd":"1687","17a18c8c":"1764","86c686bd":"1858",fd6c27b9:"2071",reactPlayerFacebook:"2121","88fb5f9d":"2124",e41cd186:"2158",fd774138:"2177","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274","7c5954e6":"2419",ce634f1e:"2472",reactPlayerStreamable:"2546",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794","56abd40c":"2841",d2011f4f:"2928","0d1f1c53":"2959","909d3e79":"2998","54f1853a":"3109","97c42b41":"3115","1df93b7f":"3237","857e9ee9":"3273","09070e4b":"3414",cc7fb5a4:"3520",e7087fcf:"3647","015fe5e8":"3696",reactPlayerVimeo:"3743","3720c009":"3751",bce2912a:"3789","91efdb01":"3805",fc9c3721:"3845","7c16bb08":"3878",bb0a09d2:"3899","55960ee5":"4121",ff576332:"4151","7976d7e4":"4232","9cea254b":"4257",c66adc2f:"4283","573e544f":"4328","3d0ce9fc":"4359","3cc70d16":"4397",reactPlayerYouTube:"4439",ba7d2542:"4442",ab8b636d:"4467","4c050ee8":"4506","129514b0":"4507","56d3cc0a":"4646",b099eb42:"4657",reactPlayerMixcloud:"4667",ef105518:"4717","3e786943":"4750","2150471b":"4957","5eb549af":"5015","4a53c000":"5048","1a5cfe2b":"5209","49244e61":"5404","7d4adaa7":"5412",dfe67240:"5413",f5000f06:"5473","3d86cae6":"5576","37f92ba7":"5589","19fab523":"5643","8ec30cb2":"5709","66d369c7":"5712","66cf4c41":"5764","406cc3cd":"5774",a419eed7:"5808",f0c90a0b:"5812","2e39c2b3":"5965",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125","391ef89b":"6139",c455d87c:"6147","8d63df11":"6181",reactPlayerTwitch:"6216","2b6d957d":"6250","05e0cb61":"6254","55aa32d7":"6292",facbe7ee:"6320","46731dd0":"6325",b573b49b:"6425",ad36dd7c:"6487","7c5a4f52":"6528","903ae864":"6570","6529a0a0":"6628","70334ba8":"6655","198d1261":"6695",be5df1d1:"6752",cfc76383:"6754","1cf9e4c8":"6784","25dd8fd2":"6854","85f96331":"6937","5806c6d0":"6942","11b7fc92":"7050","01740467":"7194","5e56b9d4":"7266","5625bc05":"7318","80cc2fbc":"7329",ce260bbc:"7340","6483afbc":"7416","9edebb4e":"7440","27d52537":"7455",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","31bfc0a5":"7698","149070b9":"7767",a04dfd4c:"7890","1a4e3797":"7920",reactPlayerWistia:"8055",d058e3e1:"8078",ab65931b:"8099","8d9a344b":"8114","50dc8f0c":"8162","3669837a":"8218","4ad67257":"8301",bf7ad130:"8358","95ed0894":"8360","3ba19fe4":"8439","8d4eac50":"8613","56aa118c":"8669","6ebf937c":"8742",b91521d0:"8778",f760ba82:"8812",reactPlayerVidyard:"8888",fb409260:"8921",cf946124:"8931",a2c24fc3:"8974",cc6a76b5:"9038",e8fb5fdf:"9196","3dcb4053":"9408","1be78505":"9514",fe7415f5:"9548",f3f094fb:"9565","14eb3368":"9817",df203c0f:"9924","6ec7c3a5":"9936","284a1a9e":"9980","98e5bc64":"9997"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(c,a)=>{var d=t.o(e,c)?e[c]:void 0;if(0!==d)if(d)a.push(d[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var b=new Promise(((a,b)=>d=e[c]=[a,b]));a.push(d[2]=b);var f=t.p+t.u(c),r=new Error;t.l(f,(a=>{if(t.o(e,c)&&(0!==(d=e[c])&&(e[c]=void 0),d)){var b=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.src;r.message="Loading chunk "+c+" failed.\n("+b+": "+f+")",r.name="ChunkLoadError",r.type=b,r.request=f,d[1](r)}}),"chunk-"+c,c)}},t.O.j=c=>0===e[c];var c=(c,a)=>{var d,b,f=a[0],r=a[1],o=a[2],l=0;if(f.some((c=>0!==e[c]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(c&&c(a);l<f.length;l++)b=f[l],t.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return t.O(n)},a=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))})()})();