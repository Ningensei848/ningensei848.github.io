"use strict";(self.webpackChunkningensei_848_github_io=self.webpackChunkningensei_848_github_io||[]).push([[4554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>E});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,E=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(E,o(o({ref:t},l),{},{components:n})):r.createElement(E,o({ref:t},l))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"netkeiba \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u3066 LOD \u5316\u3059\u308b\uff08\uff14\uff09",date:"2022-03-28",tags:["python","\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0","\u7af6\u99ac"],authors:"kiai",keywords:["python","\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0","\u7af6\u99ac"],image:"https://custom-og-image-generator.vercel.app/api/**netkeiba.com**%20%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6LOD%E5%8C%96%E3%81%99%E3%82%8B.png?theme=light&copyright=Kiai+de+Nantoka&logo=https%3A%2F%2Fimg.icons8.com%2Fglyph-neue%2F64%2F000000%2Fhorse.png&avater=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20794309&author=Kiai&aka=%40Ningensei848&site=%E6%B0%97%E5%90%88%E3%81%A7%E3%81%AA%E3%82%93%E3%81%A8%E3%81%8B&tags=%E7%AB%B6%E9%A6%AC&tags=scraping&tags=Python&tags=LOD"},o=void 0,p={permalink:"/2022/03/28/",editUrl:"https://github.com/ningensei848/ningensei848.github.io/edit/main/content/blogs/2022/03/28.md",source:"@site/content/blogs/2022/03/28.md",title:"netkeiba \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u3066 LOD \u5316\u3059\u308b\uff08\uff14\uff09",description:"JSON-LD \u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3082\u3069\u3046\u306b\u304b\u5b9a\u7fa9\u3057\uff0c\u534a\u4fe1\u534a\u7591\u3060\u3063\u305f API Gateway \u3092\u6d3b\u7528\u3057\u305f\u30b5\u30fc\u30d0\u8ca0\u8377\u56de\u907f \u30ea\u30af\u30a8\u30b9\u30c8\u5236\u9650\u306e\u56de\u907f\u3082\u5b9f\u73fe\u3067\u304d\u305f\uff0e",date:"2022-03-28T00:00:00.000Z",formattedDate:"March 28, 2022",tags:[{label:"python",permalink:"/tags/python"},{label:"\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0",permalink:"/tags/\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0"},{label:"\u7af6\u99ac",permalink:"/tags/\u7af6\u99ac"}],hasTruncateMarker:!0,authors:[{name:"Kiai",title:"@Ningensei848",email:"k.kubokawa@klis.tsukuba.ac.jp",url:"https://twitter.com/Ningensei848",imageURL:"https://avatars.githubusercontent.com/u/20794309",key:"kiai"}],frontMatter:{title:"netkeiba \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u3066 LOD \u5316\u3059\u308b\uff08\uff14\uff09",date:"2022-03-28",tags:["python","\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0","\u7af6\u99ac"],authors:"kiai",keywords:["python","\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0","\u7af6\u99ac"],image:"https://custom-og-image-generator.vercel.app/api/**netkeiba.com**%20%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6LOD%E5%8C%96%E3%81%99%E3%82%8B.png?theme=light&copyright=Kiai+de+Nantoka&logo=https%3A%2F%2Fimg.icons8.com%2Fglyph-neue%2F64%2F000000%2Fhorse.png&avater=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20794309&author=Kiai&aka=%40Ningensei848&site=%E6%B0%97%E5%90%88%E3%81%A7%E3%81%AA%E3%82%93%E3%81%A8%E3%81%8B&tags=%E7%AB%B6%E9%A6%AC&tags=scraping&tags=Python&tags=LOD"},prevItem:{title:"netkeiba \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u3066 LOD \u5316\u3059\u308b\uff08\uff15\uff09",permalink:"/2022/03/30/"},nextItem:{title:"netkeiba \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u3066 LOD \u5316\u3059\u308b\uff08\uff13\uff09",permalink:"/2022/03/23/"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ningensei848/ML4Keiba/blob/main/context.jsonld"},(0,a.kt)("inlineCode",{parentName:"a"},"JSON-LD")," \u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"),"\u3082\u3069\u3046\u306b\u304b\u5b9a\u7fa9\u3057\uff0c\u534a\u4fe1\u534a\u7591\u3060\u3063\u305f API Gateway \u3092\u6d3b\u7528\u3057\u305f",(0,a.kt)("del",{parentName:"p"},"\u30b5\u30fc\u30d0\u8ca0\u8377\u56de\u907f")," \u30ea\u30af\u30a8\u30b9\u30c8\u5236\u9650\u306e\u56de\u907f\u3082\u5b9f\u73fe\u3067\u304d\u305f\uff0e\n\u3053\u308c\u3067\u3088\u3046\u3084\u304f\u30b9\u30af\u30ec\u30d4\u30f3\u30b0\u306b\u3088\u308b\u30c7\u30fc\u30bf\u53ce\u96c6\u304c\u59cb\u3081\u3089\u308c\u308b\uff0e"),(0,a.kt)("p",null,"\u4eca\u56de\u5f97\u305f\u77e5\u898b\u306f\uff0c\u5f8c\u307b\u3069 Zenn \u306b\u307e\u3068\u3081\u308b\u3053\u3068\u3068\u3059\u308b\uff0e"))}u.isMDXComponent=!0}}]);