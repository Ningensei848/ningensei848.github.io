"use strict";(self.webpackChunkningensei_848_github_io=self.webpackChunkningensei_848_github_io||[]).push([[6103],{9860:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),c=n(9460),i=n(9058),s=n(727),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")})),n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post"),isNext:!0})))}function E(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:l,date:o,tags:i,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var f=n(6668);function v(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function h(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=h({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function p(e){const t=e.getBoundingClientRect();return t.top===t.bottom?p(e.parentNode):t}function b(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>p(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function L(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,f.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function N(e){const t=(0,a.useRef)(void 0),n=L();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=b(c,{anchorTopOffset:n.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function _(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(_,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const k=a.memo(_);function H(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:c,...i}=e;const s=(0,f.L)(),u=o??s.tableOfContents.minHeadingLevel,d=c??s.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>h({toc:v(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:u,maxHeadingLevel:d});return N((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:u,maxHeadingLevel:d}}),[l,r,u,d])),a.createElement(k,(0,m.Z)({toc:g,className:n,linkClassName:l},i))}const x="tableOfContents_bqdL";function C(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(x,"thin-scrollbar",t)},a.createElement(H,(0,m.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function Z(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:E,toc_max_heading_level:f}=u;return a.createElement(i.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(C,{toc:r,minHeadingLevel:E,maxHeadingLevel:f}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function P(e){const t=e.content;return a.createElement(c.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(E,null),a.createElement(Z,{sidebar:e.sidebar},a.createElement(t,null))))}},727:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7294),l=n(6010),r=n(9460),o=n(5289),c=n(9224),i=n(5048),s=n(1526),m=n(2584);const u={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var d=n(6262),g=n(5281);function E(e){let{editUrl:t,text:n="Edit Request"}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.k.common.editThisPage},a.createElement(d.Z,null),a.createElement("wbr",null),n)}var f=n(7462),v=n(1818);const h="SocialButtons_nedk",p="againstc",b={size:32,round:!0},L=e=>a.createElement(v.Dk,(0,f.Z)({},e,{quote:e.title,hashtag:p}),a.createElement(v.Vq,b)),N=e=>a.createElement(v.B,(0,f.Z)({},e,{hashtags:[p],related:["Cristoforou","ganrim_"]}),a.createElement(v.Zm,b)),_=e=>a.createElement(v.Ni,e,a.createElement(v.zb,b)),k=e=>a.createElement(v.m$,e,a.createElement(v.bd,b)),H=e=>a.createElement(v.pj,e,a.createElement(v.JI,b)),x=e=>a.createElement(v.fm,e,a.createElement(v.b1,b)),C=e=>a.createElement(v.iR,e,a.createElement(v.MP,b)),Z=e=>a.createElement(v.tq,e,a.createElement(v.YG,b)),P=a.memo((function(e){let{href:t,title:n,onHover:l}=e;const r={url:t,title:n};return a.createElement("div",{className:h,onMouseOver:l,onTouchStart:l},a.createElement(L,r),a.createElement(N,r),a.createElement(_,r),a.createElement(k,r),a.createElement(H,r),a.createElement(x,r),a.createElement(C,r),a.createElement(Z,r))})),w=e=>{let{href:t="",title:n=""}=e;const[l,r]=(0,a.useState)(t),[o,c]=(0,a.useState)(n),i=(e=>{const t=(0,a.useRef)(null);return(0,a.useCallback)((n=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{n()}),e)}),[e])})(200);return(0,a.useEffect)((()=>{document&&!n.length&&c(document.title)}),[l]),a.createElement(P,{href:l,title:o,onHover:()=>i((()=>{const{origin:e,pathname:t,search:n}=window.location,a=[e,t,n].join("");a!==l&&r(a)}))})};function y(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,title:o,editUrl:c,hasTruncateMarker:i}=e,d=!t&&i,g=n.length>0;return g||d||c?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&u.blogPostFooterDetailsFull)},g&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":d})},a.createElement(s.Z,{tags:n})),t&&c&&a.createElement("div",{className:"col col--12"},a.createElement("div",{className:(0,l.Z)("row",u.blogPostFooter)},a.createElement("div",{className:"col col--8 margin-vert--sm"},a.createElement(w,null)),a.createElement("div",{className:(0,l.Z)("col","col--4","margin-vert--sm",u.editThisPage)},a.createElement(E,{editUrl:c,text:"\u7de8\u96c6\u3092\u30ea\u30af\u30a8\u30b9\u30c8"})))),d&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":g})},a.createElement(m.Z,{blogPostTitle:o,to:e.permalink}))):null}var I=n(4996);function T(e){let{children:t,className:n}=e;const{withBaseUrl:s}=(0,I.C)(),{isBlogPostPage:m,assets:u,frontMatter:d}=(0,r.C)(),g=m?void 0:"margin-bottom--xl",E=u.image??d.image;return a.createElement(o.Z,{className:(0,l.Z)(g,n)},a.createElement(c.Z,null),E&&a.createElement("meta",{itemProp:"image",content:s(E,{absolute:!0})}),a.createElement(i.Z,null,t),a.createElement(y,null))}}}]);