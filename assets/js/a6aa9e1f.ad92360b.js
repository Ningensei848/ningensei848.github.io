"use strict";(self.webpackChunkningensei_848_github_io=self.webpackChunkningensei_848_github_io||[]).push([[3089],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),l=a(6010),r=a(2263),o=a(1944),c=a(5281),i=a(9058),m=a(9703),s=a(197),u=a(9985);function E(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:c,permalink:i}=t,m="/"===i?a:c;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:m,description:l}),n.createElement(s.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(i.Z,{sidebar:l},n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:t}))}function d(e){return n.createElement(o.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},n.createElement(E,e),n.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(5999),r=a(2244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(9460),r=a(727);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},727:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(7294),l=a(6010),r=a(9460),o=a(5289),c=a(9224),i=a(5048),m=a(1526),s=a(2584);const u={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var E=a(6262),g=a(5281);function d(e){let{editUrl:t,text:a="Edit Request"}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.k.common.editThisPage},n.createElement(E.Z,null),n.createElement("wbr",null),a)}var p=a(7462),b=a(1818);const h="SocialButtons_nedk",Z="Kiai_De_Nantoka",v={size:32,round:!0},f=e=>n.createElement(b.Dk,(0,p.Z)({},e,{quote:e.title,hashtag:Z}),n.createElement(b.Vq,v)),k=e=>n.createElement(b.B,(0,p.Z)({},e,{hashtags:[Z],related:["elonmusk","TOYOTA_PR"]}),n.createElement(b.Zm,v)),P=e=>n.createElement(b.Ni,e,n.createElement(b.zb,v)),N=e=>n.createElement(b.m$,e,n.createElement(b.bd,v)),_=e=>n.createElement(b.pj,e,n.createElement(b.JI,v)),T=e=>n.createElement(b.fm,e,n.createElement(b.b1,v)),w=e=>n.createElement(b.iR,e,n.createElement(b.MP,v)),F=e=>n.createElement(b.tq,e,n.createElement(b.YG,v)),x=n.memo((function(e){let{href:t,title:a,onHover:l}=e;const r={url:t,title:a};return n.createElement("div",{className:h,onMouseOver:l,onTouchStart:l},n.createElement(f,r),n.createElement(k,r),n.createElement(P,r),n.createElement(N,r),n.createElement(_,r),n.createElement(T,r),n.createElement(w,r),n.createElement(F,r))})),C=e=>{let{href:t="",title:a=""}=e;const[l,r]=(0,n.useState)(t),[o,c]=(0,n.useState)(a),i=(e=>{const t=(0,n.useRef)(null);return(0,n.useCallback)((a=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{a()}),e)}),[e])})(200);return(0,n.useEffect)((()=>{document&&!a.length&&c(document.title)}),[l]),n.createElement(x,{href:l,title:o,onHover:()=>i((()=>{const{origin:e,pathname:t,search:a}=window.location,n=[e,t,a].join("");n!==l&&r(n)}))})};function B(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:c,hasTruncateMarker:i}=e,E=!t&&i,g=a.length>0;return g||E||c?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&u.blogPostFooterDetailsFull)},g&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":E})},n.createElement(m.Z,{tags:a})),t&&c&&n.createElement("div",{className:"col col--12"},n.createElement("div",{className:(0,l.Z)("row",u.blogPostFooter)},n.createElement("div",{className:"col col--8 margin-vert--sm"},n.createElement(C,null)),n.createElement("div",{className:(0,l.Z)("col","col--4","margin-vert--sm",u.editThisPage)},n.createElement(d,{editUrl:c,text:"\u7de8\u96c6\u3092\u30ea\u30af\u30a8\u30b9\u30c8"})))),E&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":g})},n.createElement(s.Z,{blogPostTitle:o,to:e.permalink}))):null}var D=a(4996);function R(e){let{children:t,className:a}=e;const{withBaseUrl:m}=(0,D.C)(),{isBlogPostPage:s,assets:u,frontMatter:E}=(0,r.C)(),g=s?void 0:"margin-bottom--xl",d=u.image??E.image;return n.createElement(o.Z,{className:(0,l.Z)(g,a)},n.createElement(c.Z,null),d&&n.createElement("meta",{itemProp:"image",content:m(d,{absolute:!0})}),n.createElement(i.Z,null,t),n.createElement(B,null))}}}]);