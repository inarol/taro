(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1634:function(e,t,b){"use strict";b.d(t,"a",(function(){return d})),b.d(t,"b",(function(){return s}));var l=b(0),n=b.n(l);function c(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){c(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function u(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var O=n.a.createContext({}),o=function(e){var t=n.a.useContext(O),b=t;return e&&(b="function"==typeof e?e(t):a({},t,{},e)),b},d=function(e){var t=o(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(l.forwardRef)((function(e,t){var b=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,O=u(e,["components","mdxType","originalType","parentName"]),d=o(b),j=l,s=d["".concat(r,".").concat(j)]||d[j]||i[j]||c;return b?n.a.createElement(s,a({ref:t},O,{components:b})):n.a.createElement(s,a({ref:t},O))}));function s(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=b.length,r=new Array(c);r[0]=j;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var O=2;O<c;O++)r[O]=b[O];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,b)}j.displayName="MDXCreateElement"},353:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return a})),b.d(t,"rightToc",(function(){return u})),b.d(t,"default",(function(){return o}));var l=b(1),n=b(9),c=(b(0),b(1634)),r={title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},a={id:"version-2.2.8/apis/media/image/chooseMedia",title:"Taro.chooseMedia(option)",description:"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002",source:"@site/versioned_docs/version-2.2.8/apis/media/image/chooseMedia.md",permalink:"/taro/docs/apis/media/image/chooseMedia",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/apis/media/image/chooseMedia.md",version:"2.2.8",sidebar_label:"chooseMedia"},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ChooseMedia",id:"choosemedia",children:[]},{value:"mediaType",id:"mediatype",children:[]},{value:"sourceType",id:"sourcetype",children:[]},{value:"camera",id:"camera",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],O={rightToc:u};function o(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},O,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"count"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"mediaType"),Object(c.b)("td",null,Object(c.b)("code",null,'("video" | "image")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6587\u4ef6\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"sourceType"),Object(c.b)("td",null,Object(c.b)("code",null,'("album" | "camera")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u548c\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxDuration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u65f6\u95f4\u8303\u56f4\u4e3a 3s \u81f3 30s \u4e4b\u95f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"sizeType"),Object(c.b)("td",null,Object(c.b)("code",null,'("original" | "compressed")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4ec5\u5bf9 mediaType \u4e3a image \u65f6\u6709\u6548\uff0c\u662f\u5426\u538b\u7f29\u6240\u9009\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4ec5\u5728 sourceType \u4e3a camera \u65f6\u751f\u6548\uff0c\u4f7f\u7528\u524d\u7f6e\u6216\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFiles"),Object(c.b)("td",null,Object(c.b)("code",null,"ChooseMedia[]")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6709\u6548\u503c\u6709 image \u3001video")))),Object(c.b)("h3",{id:"choosemedia"},"ChooseMedia"),Object(c.b)("p",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84)")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"thumbTempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u89c6\u9891\u7f29\u7565\u56fe\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")))),Object(c.b)("h3",{id:"mediatype"},"mediaType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"video"),Object(c.b)("td",null,"\u53ea\u80fd\u62cd\u6444\u89c6\u9891\u6216\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),Object(c.b)("tr",null,Object(c.b)("td",null,"image"),Object(c.b)("td",null,"\u53ea\u80fd\u62cd\u6444\u56fe\u7247\u6216\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")))),Object(c.b)("h3",{id:"sourcetype"},"sourceType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"album"),Object(c.b)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444")))),Object(c.b)("h3",{id:"camera"},"camera"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"back"),Object(c.b)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"front"),Object(c.b)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMedia({\n  count: 9,\n  mediaType: ['image','video'],\n  sourceType: ['album', 'camera'],\n  maxDuration: 30,\n  camera: 'back',\n  success: (res) => {\n    console.log(res.tempFiles)\n    console.log(res.type)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.chooseMedia"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0}}]);