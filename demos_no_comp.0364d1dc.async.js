(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+zIg":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("rDAX");t["default"]=()=>{var e=Object(u["a"])({hello:"world",count:0}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>r((e=>({count:e.count+1})))},"count + 1")))}},"1DhI":function(e,t,n){"use strict";var a=n("ahKI"),r=n("cxPF"),c=n("FBt5"),u=e=>{c["a"]&&(Object(r["a"])(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Object(a["useRef"])(e);Object(a["useEffect"])((()=>()=>{t.current()}),[])};t["a"]=u},"25QV":function(e,t,n){"use strict";var a=n("ahKI"),r=()=>{var e=Object(a["useRef"])(!1);return Object(a["useEffect"])((()=>(e.current=!1,()=>{e.current=!0})),[]),e};t["a"]=r},"3lnb":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("nnHe");t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo3",{defaultValue:"Hello~",serializer:e=>null!==e&&void 0!==e?e:"",deserializer:e=>e}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{value:n||"",placeholder:"Please enter some words...",onChange:e=>r(e.target.value)}),c.a.createElement("button",{style:{margin:"0 8px"},type:"button",onClick:()=>r("Hello~")},"Reset"),c.a.createElement("button",{type:"button",onClick:()=>r(void 0)},"Clear"))}},"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])(),t=Object(a["a"])(e,2),n=t[0],r=t[1],o=r.toggle,l=r.setLeft,i=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a","".concat(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:l,style:{margin:"0 8px"}},"Toggle False"),c.a.createElement("button",{type:"button",onClick:i},"Toggle True")))}},Axl5:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r);function u(e){var t=Object(r["useState"])(e),n=Object(a["a"])(t,2),c=n[0],u=n[1],o=Object(r["useRef"])(c);o.current=c;var l=Object(r["useCallback"])((()=>o.current),[]);return[c,u,l]}var o=u;t["default"]=()=>{var e=o(0),t=Object(a["a"])(e,3),n=t[0],u=t[1],l=t[2];return Object(r["useEffect"])((()=>{var e=setInterval((()=>{console.log("interval count",l())}),3e3);return()=>{clearInterval(e)}}),[]),c.a.createElement("button",{onClick:()=>u((e=>e+1))},"count: ",n)}},BQeK:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("pYEw");function o(e){var t=()=>new Map(e),n=Object(r["useState"])(t),c=Object(a["a"])(n,2),o=c[0],l=c[1],i=(e,t)=>{l((n=>{var a=new Map(n);return a.set(e,t),a}))},s=e=>{l(new Map(e))},b=e=>{l((t=>{var n=new Map(t);return n.delete(e),n}))},f=()=>l(t()),m=e=>o.get(e);return[o,{set:Object(u["a"])(i),setAll:Object(u["a"])(s),remove:Object(u["a"])(b),reset:Object(u["a"])(f),get:Object(u["a"])(m)}]}var l=o;t["default"]=()=>{var e=l([["msg","hello world"],[123,"number type"]]),t=Object(a["a"])(e,2),n=t[0],r=t[1],u=r.set,o=r.setAll,i=r.remove,s=r.reset,b=r.get;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:()=>u(String(Date.now()),(new Date).toJSON())},"Add"),c.a.createElement("button",{type:"button",onClick:()=>o([["text","this is a new Map"]]),style:{margin:"0 8px"}},"Set new Map"),c.a.createElement("button",{type:"button",onClick:()=>i("msg"),disabled:!b("msg")},"Remove 'msg'"),c.a.createElement("button",{type:"button",onClick:()=>s(),style:{margin:"0 8px"}},"Reset"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("pre",null,JSON.stringify(Array.from(n),null,2))))}},"CyT/":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("iojd"),r=n("ahKI"),c=n("L2hj");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c["a"])(!!e),n=Object(a["a"])(t,2),u=n[0],o=n[1],l=o.toggle,i=o.set,s=Object(r["useMemo"])((()=>{var e=()=>i(!0),t=()=>i(!1);return{toggle:l,set:e=>i(!!e),setTrue:e,setFalse:t}}),[]);return[u,s]}},DnNy:function(e,t,n){"use strict";var a=n("ahKI"),r=(e,t)=>!Object.is(e,t);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=Object(a["useRef"])(),c=Object(a["useRef"])();return t(c.current,e)&&(n.current=c.current,c.current=e),n.current}t["a"]=c},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])("Hello","World"),t=Object(a["a"])(e,2),n=t[0],r=t[1],o=r.toggle,l=r.set,i=r.setLeft,s=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",n),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:()=>l("Hello"),style:{margin:"0 8px"}},"Set Hello"),c.a.createElement("button",{type:"button",onClick:()=>l("World")},"Set World"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 8px"}},"Set Left"),c.a.createElement("button",{type:"button",onClick:s},"Set Right")))}},FBt5:function(e,t,n){"use strict";var a=!1;t["a"]=a},G3cz:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},HgnT:function(e,t,n){"use strict";n.r(t);var a=n("G3cz"),r=n("iojd"),c=n("ahKI"),u=n.n(c),o=n("DnNy"),l=(e,t)=>!e||e.name!==t.name,i=(e,t)=>!e||e.job!==t.job;t["default"]=()=>{var e=Object(c["useState"])({name:"Jack",job:"student"}),t=Object(r["a"])(e,2),n=t[0],s=t[1],b=Object(c["useState"])(""),f=Object(r["a"])(b,2),m=f[0],d=f[1],v=Object(c["useState"])(""),p=Object(r["a"])(v,2),j=p[0],O=p[1],g=Object(o["a"])(n,l),E=Object(o["a"])(n,i);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{margin:"8px 0",border:"1px solid #e8e8e8",padding:8}},u.a.createElement("div",null,"current name: ",n.name),u.a.createElement("div",null,"current job: ",n.job)),u.a.createElement("div",null,"previous name: ",(g||{}).name),u.a.createElement("div",{style:{marginBottom:8}},"previous job: ",(E||{}).job),u.a.createElement("div",{style:{marginTop:8}},u.a.createElement("input",{style:{width:220},value:m,onChange:e=>d(e.target.value),placeholder:"new name"}),u.a.createElement("button",{type:"button",onClick:()=>{s((e=>Object(a["a"])(Object(a["a"])({},e),{},{name:m})))},style:{marginLeft:8}},"update")),u.a.createElement("div",{style:{marginTop:8}},u.a.createElement("input",{style:{width:220},value:j,onChange:e=>O(e.target.value),placeholder:"new job"}),u.a.createElement("button",{type:"button",onClick:()=>{s((e=>Object(a["a"])(Object(a["a"])({},e),{},{job:j})))},style:{marginLeft:8}},"update")))}},KQwp:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("25QV");function o(e){var t=Object(u["a"])(),n=Object(r["useState"])(e),c=Object(a["a"])(n,2),o=c[0],l=c[1],i=Object(r["useCallback"])((e=>{t.current||l(e)}),[]);return[o,i]}var l=o,i=()=>{var e=l(),t=Object(a["a"])(e,2),n=t[0],u=t[1];Object(r["useEffect"])((()=>{setTimeout((()=>{u("data loaded from server")}),5e3)}),[]);var o=n||"Loading...";return c.a.createElement("div",null,o)};t["default"]=()=>{var e=Object(r["useState"])(!0),t=Object(a["a"])(e,2),n=t[0],u=t[1];return c.a.createElement("div",null,c.a.createElement("button",{onClick:()=>u(!1)},"Unmount"),n&&c.a.createElement(i,null))}},L2hj:function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(r["useState"])(e),c=Object(a["a"])(n,2),u=c[0],o=c[1],l=Object(r["useMemo"])((()=>{var n=void 0===t?!e:t,a=()=>o((t=>t===e?n:e)),r=()=>o(e),c=()=>o(n),u=e=>o(e);return{toggle:a,setLeft:r,setRight:c,set:u}}),[]);return[u,l]}t["a"]=c},OCTU:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("sJN1");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],l=Object(u["a"])(n);return console.log(l.current()),Object(r["useEffect"])((()=>{var e=setInterval((()=>{o(l.current+1)}),1e3);return()=>clearInterval(e)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",n))}},Tt9S:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("pYEw");function o(e){var t=()=>new Set(e),n=Object(r["useState"])(t),c=Object(a["a"])(n,2),o=c[0],l=c[1],i=e=>{o.has(e)||l((t=>{var n=new Set(t);return n.add(e),n}))},s=e=>{o.has(e)&&l((t=>{var n=new Set(t);return n.delete(e),n}))},b=()=>l(t());return[o,{add:Object(u["a"])(i),remove:Object(u["a"])(s),reset:Object(u["a"])(b)}]}var l=o;t["default"]=()=>{var e=l(["Hello"]),t=Object(a["a"])(e,2),n=t[0],r=t[1],u=r.add,o=r.remove,i=r.reset;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:()=>u(String(Date.now()))},"Add Timestamp"),c.a.createElement("button",{type:"button",onClick:()=>o("Hello"),disabled:!n.has("Hello"),style:{margin:"0 8px"}},"Remove Hello"),c.a.createElement("button",{type:"button",onClick:()=>i()},"Reset"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("pre",null,JSON.stringify(Array.from(n),null,2))))}},VaEu:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("nnHe");t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo1",{defaultValue:"Hello~"}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{value:n||"",placeholder:"Please enter some words...",onChange:e=>r(e.target.value)}),c.a.createElement("button",{style:{margin:"0 8px"},type:"button",onClick:()=>r("Hello~")},"Reset"),c.a.createElement("button",{type:"button",onClick:()=>r(void 0)},"Clear"))}},VoNs:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("Ys1N");t["default"]=()=>{var e=Object(u["a"])("useCookieStateString"),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement("input",{value:n,placeholder:"Please enter some words...",onChange:e=>r(e.target.value),style:{width:300}})}},YArd:function(e,t,n){"use strict";var a=n("tD2l"),r=n("fzsq"),c="object"==typeof self&&self&&self.Object===Object&&self,u=r["a"]||c||Function("return this")(),o=u,l=function(){return o.Date.now()},i=l,s=/\s/;function b(e){var t=e.length;while(t--&&s.test(e.charAt(t)));return t}var f=b,m=/^\s+/;function d(e){return e?e.slice(0,f(e)+1).replace(m,""):e}var v=d,p=o.Symbol,j=p,O=Object.prototype,g=O.hasOwnProperty,E=O.toString,y=j?j.toStringTag:void 0;function h(e){var t=g.call(e,y),n=e[y];try{e[y]=void 0;var a=!0}catch(c){}var r=E.call(e);return a&&(t?e[y]=n:delete e[y]),r}var C=h,w=Object.prototype,k=w.toString;function S(e){return k.call(e)}var I=S,x="[object Null]",K="[object Undefined]",T=j?j.toStringTag:void 0;function F(e){return null==e?void 0===e?K:x:T&&T in Object(e)?C(e):I(e)}var D=F;function N(e){return null!=e&&"object"==typeof e}var R=N,P="[object Symbol]";function A(e){return"symbol"==typeof e||R(e)&&D(e)==P}var H=A,J=NaN,V=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,M=parseInt;function L(e){if("number"==typeof e)return e;if(H(e))return J;if(Object(a["a"])(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(a["a"])(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=v(e);var n=z.test(e);return n||Y.test(e)?M(e.slice(2),n?2:8):V.test(e)?J:+e}var U=L,B="Expected a function",W=Math.max,Q=Math.min;function G(e,t,n){var r,c,u,o,l,s,b=0,f=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(B);function v(t){var n=r,a=c;return r=c=void 0,b=t,o=e.apply(a,n),o}function p(e){return b=e,l=setTimeout(g,t),f?v(e):o}function j(e){var n=e-s,a=e-b,r=t-n;return m?Q(r,u-a):r}function O(e){var n=e-s,a=e-b;return void 0===s||n>=t||n<0||m&&a>=u}function g(){var e=i();if(O(e))return E(e);l=setTimeout(g,j(e))}function E(e){return l=void 0,d&&r?v(e):(r=c=void 0,o)}function y(){void 0!==l&&clearTimeout(l),b=0,r=s=c=l=void 0}function h(){return void 0===l?o:E(i())}function C(){var e=i(),n=O(e);if(r=arguments,c=this,s=e,n){if(void 0===l)return p(s);if(m)return clearTimeout(l),l=setTimeout(g,t),v(s)}return void 0===l&&(l=setTimeout(g,t)),o}return t=U(t)||0,Object(a["a"])(n)&&(f=!!n.leading,m="maxWait"in n,u=m?W(U(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),C.cancel=y,C.flush=h,C}t["a"]=G},Ys1N:function(e,t,n){"use strict";var a=n("G3cz");function r(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function c(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=n("iojd"),o=n("keS/"),l=n.n(o),i=n("ahKI"),s=n("pYEw"),b=n("cxPF"),f=["defaultValue"];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(i["useState"])((()=>{var n=l.a.get(e);return Object(b["b"])(n)?n:Object(b["a"])(t.defaultValue)?t.defaultValue():t.defaultValue})),r=Object(u["a"])(n,2),o=r[0],m=r[1],d=Object(s["a"])((function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=Object(a["a"])(Object(a["a"])({},t),r),i=(u.defaultValue,c(u,f)),s=Object(b["a"])(n)?n(o):n;m(s),void 0===s?l.a.remove(e):l.a.set(e,s,i)}));return[o,d]}t["a"]=m},aFWa:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("inn8");function o(e,t){var n=Object(r["useState"])(e),c=Object(a["a"])(n,2),o=c[0],l=c[1],i=Object(u["a"])((()=>{l(e)}),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),o}var l=o;t["default"]=()=>{var e=Object(r["useState"])(),t=Object(a["a"])(e,2),n=t[0],u=t[1],o=l(n,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{value:n,onChange:e=>u(e.target.value),placeholder:"Typed value",style:{width:280}}),c.a.createElement("p",{style:{marginTop:16}},"throttledValue: ",o))}},aQ7k:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("Ys1N");function o(){var e=Object(u["a"])("useCookieStateOptions",{defaultValue:"0",path:"/",expires:(()=>new Date(+new Date+1e4))()}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>r((e=>String(Number(e)+1)),{expires:(()=>new Date(+new Date+1e4))()})},"inc + (10s expires)"),c.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>r((e=>String(Number(e)-1)),{expires:(()=>new Date(+new Date+1e4))()})},"dec - (10s expires)"),c.a.createElement("button",{type:"button",onClick:()=>r("0")},"reset"))}},b2g7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("Ys1N");function o(){var e=Object(u["a"])("useCookieStateUpdater",{defaultValue:"0"}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)+1)))},"inc +"),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)-1)))},"dec -"),c.a.createElement("button",{type:"button",onClick:()=>r("0")},"reset"))}},cxPF:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var a=e=>"function"===typeof e,r=e=>"string"===typeof e,c=e=>"undefined"===typeof e},dA01:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),c=n("1DhI"),u=n("oEPf"),o={restoreOnUnmount:!1};function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=Object(a["useRef"])(u["a"]?document.title:"");Object(a["useEffect"])((()=>{document.title=e}),[e]),Object(c["a"])((()=>{t.restoreOnUnmount&&(document.title=n.current)}))}var i=l;t["default"]=()=>(i("Test Page Title"),r.a.createElement("div",null,r.a.createElement("p",null,"Set title of the page.")))},eWij:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("hsQr");function o(e,t){var n=Object(r["useState"])(e),c=Object(a["a"])(n,2),o=c[0],l=c[1],i=Object(u["a"])((()=>{l(e)}),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),o}var l=o;t["default"]=()=>{var e=Object(r["useState"])(),t=Object(a["a"])(e,2),n=t[0],u=t[1],o=l(n,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{value:n,onChange:e=>u(e.target.value),placeholder:"Typed value",style:{width:280}}),c.a.createElement("p",{style:{marginTop:16}},"DebouncedValue: ",o))}},fzsq:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t["a"]=n}).call(this,n("e7Xt"))},h17I:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("rDAX");t["default"]=()=>{var e=Object(u["a"])({hello:""}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>r({hello:"world"})},"set hello"),c.a.createElement("button",{type:"button",onClick:()=>r({foo:"bar"}),style:{margin:"0 8px"}},"set foo")))}},hsQr:function(e,t,n){"use strict";var a=n("YArd"),r=n("ahKI"),c=n("sJN1"),u=n("1DhI"),o=n("cxPF"),l=n("FBt5");function i(e,t){var n;l["a"]&&(Object(o["a"])(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var i=Object(c["a"])(e),s=null!==(n=null===t||void 0===t?void 0:t.wait)&&void 0!==n?n:1e3,b=Object(r["useMemo"])((()=>Object(a["a"])((function(){return i.current(...arguments)}),s,t)),[]);return Object(u["a"])((()=>{b.cancel()})),{run:b,cancel:b.cancel,flush:b.flush}}t["a"]=i},inn8:function(e,t,n){"use strict";var a=n("YArd"),r=n("tD2l"),c="Expected a function";function u(e,t,n){var u=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return Object(r["a"])(n)&&(u="leading"in n?!!n.leading:u,o="trailing"in n?!!n.trailing:o),Object(a["a"])(e,t,{leading:u,maxWait:t,trailing:o})}var o=u,l=n("ahKI"),i=n("sJN1"),s=n("1DhI"),b=n("cxPF"),f=n("FBt5");function m(e,t){var n;f["a"]&&(Object(b["a"])(e)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e)));var a=Object(i["a"])(e),r=null!==(n=null===t||void 0===t?void 0:t.wait)&&void 0!==n?n:1e3,c=Object(l["useMemo"])((()=>o((function(){return a.current(...arguments)}),r,t)),[]);return Object(s["a"])((()=>{c.cancel()})),{run:c,cancel:c.cancel,flush:c.flush}}t["a"]=m},"keS/":function(e,t,n){var a,r;(function(c){var u;if(a=c,r="function"===typeof a?a.call(t,n,t,e):a,void 0===r||(e.exports=r),u=!0,e.exports=c(),u=!0,!u){var o=window.Cookies,l=window.Cookies=c();l.noConflict=function(){return window.Cookies=o,l}}})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(a){function r(){}function c(t,n,c){if("undefined"!==typeof document){c=e({path:"/"},r.defaults,c),"number"===typeof c.expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var u=JSON.stringify(n);/^[\{\[]/.test(u)&&(n=u)}catch(i){}n=a.write?a.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var l in c)c[l]&&(o+="; "+l,!0!==c[l]&&(o+="="+c[l].split(";")[0]));return document.cookie=t+"="+n+o}}function u(e,n){if("undefined"!==typeof document){for(var r={},c=document.cookie?document.cookie.split("; "):[],u=0;u<c.length;u++){var o=c[u].split("="),l=o.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var i=t(o[0]);if(l=(a.read||a)(l,i)||t(l),n)try{l=JSON.parse(l)}catch(s){}if(r[i]=l,e===i)break}catch(s){}}return e?r[e]:r}}return r.set=c,r.get=function(e){return u(e,!1)},r.getJSON=function(e){return u(e,!0)},r.remove=function(t,n){c(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}return n((function(){}))}))},lkYe:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("pYEw"),c=n("783f"),u=n("ahKI"),o=n.n(u);t["default"]=()=>{var e=Object(u["useState"])(0),t=Object(a["a"])(e,2),n=t[0],i=t[1],s=Object(u["useCallback"])((()=>{c["a"].info("Current count is ".concat(n))}),[n]),b=Object(r["a"])((()=>{c["a"].info("Current count is ".concat(n))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"count: ",n),o.a.createElement("button",{type:"button",onClick:()=>{i((e=>e+1))}},"Add Count"),o.a.createElement("p",null,"You can click the button to see the number of sub-component renderings"),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useCallback function:"),o.a.createElement(l,{showCount:s})),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useMemoizedFn function:"),o.a.createElement(l,{showCount:b})))};var l=o.a.memo((e=>{var t=e.showCount,n=Object(u["useRef"])(0);return n.current+=1,o.a.createElement("div",null,o.a.createElement("p",null,"Render Count: ",n.current),o.a.createElement("button",{type:"button",onClick:t},"showParentCount"))}))},nnHe:function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI"),c=n("pYEw"),u=n("rpwH"),o=n("cxPF");function l(e){function t(t){var n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=l.onError,s=void 0===i?e=>{console.error(e)}:i;try{n=e()}catch(g){s(g)}var b=e=>l.serializer?l.serializer(e):JSON.stringify(e),f=e=>l.deserializer?l.deserializer(e):JSON.parse(e);function m(){try{var e,a=null===(e=n)||void 0===e?void 0:e.getItem(t);if(a)return f(a)}catch(r){s(r)}return Object(o["a"])(l.defaultValue)?l.defaultValue():l.defaultValue}var d=Object(r["useState"])(m),v=Object(a["a"])(d,2),p=v[0],j=v[1];Object(u["a"])((()=>{j(m())}),[t]);var O=e=>{var a,r=Object(o["a"])(e)?e(p):e;if(j(r),Object(o["c"])(r))null===(a=n)||void 0===a||a.removeItem(t);else try{var c;null===(c=n)||void 0===c||c.setItem(t,b(r))}catch(u){console.error(u)}};return[p,Object(c["a"])(O)]}return t}var i=n("oEPf"),s=l((()=>i["a"]?localStorage:void 0));t["a"]=s},oEPf:function(e,t,n){"use strict";var a=!("undefined"===typeof window||!window.document||!window.document.createElement);t["a"]=a},pYEw:function(e,t,n){"use strict";var a=n("ahKI"),r=n("cxPF"),c=n("FBt5");function u(e){c["a"]&&(Object(r["a"])(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=Object(a["useRef"])(e);t.current=Object(a["useMemo"])((()=>e),[e]);var n=Object(a["useRef"])();return n.current||(n.current=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.current.apply(this,n)}),n.current}t["a"]=u},"pd+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("nnHe"),o=["a","e","i","o","u"];t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo2",{defaultValue:o}),t=Object(a["a"])(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,null===n||void 0===n?void 0:n.join("-")),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>r([...n,Math.random().toString(36).slice(-1)])},"push random"),c.a.createElement("button",{type:"button",onClick:()=>r(o)},"reset"))}},rDAX:function(e,t,n){"use strict";var a=n("G3cz"),r=n("iojd"),c=n("ahKI"),u=n("cxPF"),o=e=>{var t=Object(c["useState"])(e),n=Object(r["a"])(t,2),o=n[0],l=n[1],i=Object(c["useCallback"])((e=>{l((t=>{var n=Object(u["a"])(e)?e(t):e;return n?Object(a["a"])(Object(a["a"])({},t),n):t}))}),[]);return[o,i]};t["a"]=o},rXjo:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("inn8");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],l=Object(u["a"])((()=>{o(n+1)}),{wait:500}),i=l.run;return c.a.createElement("div",null,c.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),c.a.createElement("button",{type:"button",onClick:i},"Click fast!"))}},rpwH:function(e,t,n){"use strict";var a=n("ahKI"),r=e=>(t,n)=>{var r=Object(a["useRef"])(!1);e((()=>()=>{r.current=!1}),[]),e((()=>{if(r.current)return t();r.current=!0}),n)};t["a"]=r(a["useEffect"])},sJN1:function(e,t,n){"use strict";var a=n("ahKI");function r(e){var t=Object(a["useRef"])(e);return t.current=e,t}t["a"]=r},tD2l:function(e,t,n){"use strict";function a(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}t["a"]=a},tHpm:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("hsQr"),c=n("ahKI"),u=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],l=Object(r["a"])((()=>{o(n+1)}),{wait:500}),i=l.run;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),u.a.createElement("button",{type:"button",onClick:i},"Click fast!"))}},vcr8:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("rpwH");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],l=Object(r["useState"])(0),i=Object(a["a"])(l,2),s=i[0],b=i[1],f=Object(r["useState"])(0),m=Object(a["a"])(f,2),d=m[0],v=m[1];return Object(r["useEffect"])((()=>{b((e=>e+1))}),[n]),Object(u["a"])((()=>(v((e=>e+1)),()=>{})),[n]),c.a.createElement("div",null,c.a.createElement("p",null,"effectCount: ",s),c.a.createElement("p",null,"updateEffectCount: ",d),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>o((e=>e+1))},"reRender")))}},y7Gi:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("1DhI"),c=n("CyT/"),u=n("783f"),o=n("ahKI"),l=n.n(o),i=()=>(Object(r["a"])((()=>{u["a"].info("unmount")})),l.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1].toggle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:r},n?"unmount":"mount"),n&&l.a.createElement(i,null))}},yQWC:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("783f"),o=n("pYEw");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],i=Object(r["useCallback"])((()=>{u["a"].info("Current count is ".concat(n))}),[n]),s=Object(o["a"])((()=>{u["a"].info("Current count is ".concat(n))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",n),c.a.createElement("button",{type:"button",onClick:()=>{l((e=>e+1))}},"Add Count"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("button",{type:"button",onClick:i},"call callbackFn"),c.a.createElement("button",{type:"button",onClick:s,style:{marginLeft:8}},"call memoizedFn")))}},ynmm:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("DnNy"),c=n("ahKI"),u=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(a["a"])(e,2),n=t[0],o=t[1],l=Object(r["a"])(n);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,"counter current value: ",n),u.a.createElement("div",{style:{marginBottom:8}},"counter previous value: ",l),u.a.createElement("button",{type:"button",onClick:()=>o((e=>e+1))},"increase"),u.a.createElement("button",{type:"button",style:{marginLeft:8},onClick:()=>o((e=>e-1))},"decrease"))}},yoie:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("CyT/");t["default"]=()=>{var e=Object(u["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],o=r.toggle,l=r.setTrue,i=r.setFalse;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),c.a.createElement("button",{type:"button",onClick:l},"Set true")))}},zNA3:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),c=n.n(r),u=n("pYEw"),o=e=>{var t=Object(r["useState"])(e),n=Object(a["a"])(t,2),c=n[0],o=n[1],l=Object(u["a"])((()=>{o(e)}));return[c,o,l]},l=o;t["default"]=()=>{var e=l({hello:"",count:0}),t=Object(a["a"])(e,3),n=t[0],r=t[1],u=t[2];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",style:{marginRight:"8px"},onClick:()=>r({hello:"world",count:1})},"set hello and count"),c.a.createElement("button",{type:"button",onClick:u},"resetState")))}}}]);