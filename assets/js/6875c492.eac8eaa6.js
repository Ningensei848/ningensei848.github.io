"use strict";(self.webpackChunkningensei_848_github_io=self.webpackChunkningensei_848_github_io||[]).push([[8610],{9703:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var n=s(5999),a=s(2244),i=s(5893);function l(e){const{metadata:t}=e,{previousPage:s,nextPage:l}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(a.Z,{permalink:s,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,i.jsx)(a.Z,{permalink:l,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var n=s(9460),a=s(727),i=s(5893);function l(e){let{items:t,component:s=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.n,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(7294);var n=s(512),a=s(5999),i=s(8824),l=s(1944),r=s(5281),o=s(3692),c=s(7846),d=s(9703),g=s(197),u=s(9985),h=s(2212),x=s(2503),m=s(5893);function j(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function p(e){let{tag:t}=e;const s=j(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.d,{title:s}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:s,sidebar:n,listMetadata:i}=e;const l=j(t);return(0,m.jsxs)(c.Z,{sidebar:n,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(x.Z,{as:"h1",children:l}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:s}),(0,m.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(l.FG,{className:(0,n.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,m.jsx)(p,{...e}),(0,m.jsx)(b,{...e})]})}},2212:(e,t,s)=>{s.d(t,{Z:()=>h});s(7294);var n=s(512),a=s(5999),i=s(5742),l=s(5893);function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(5281),g=s(9047);function u(e){let{className:t}=e;return(0,l.jsx)(g.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,n.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}},727:(e,t,s)=>{s.d(t,{Z:()=>M});var n=s(7294),a=s(512),i=s(9460),l=s(5289),r=s(9224),o=s(8018),c=s(1526),d=s(2584);const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var u=s(6262),h=s(5281),x=s(5893);function m(e){let{editUrl:t,text:s="Edit Request"}=e;return(0,x.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage,children:[(0,x.jsx)(u.Z,{}),(0,x.jsx)("wbr",{}),s]})}var j=s(1818);const p="SocialButtons_nedk",b="Kiai_De_Nantoka",f={size:32,round:!0},Z=e=>(0,x.jsx)(j.Dk,{...e,quote:e.title,hashtag:b,children:(0,x.jsx)(j.Vq,{...f})}),v=e=>(0,x.jsx)(j.B,{...e,hashtags:[b],related:["elonmusk","TOYOTA_PR"],children:(0,x.jsx)(j.Zm,{...f})}),P=e=>(0,x.jsx)(j.Ni,{...e,children:(0,x.jsx)(j.zb,{...f})}),k=e=>(0,x.jsx)(j.m$,{...e,children:(0,x.jsx)(j.bd,{...f})}),N=e=>(0,x.jsx)(j.pj,{...e,children:(0,x.jsx)(j.JI,{...f})}),T=e=>(0,x.jsx)(j.fm,{...e,children:(0,x.jsx)(j.b1,{...f})}),w=e=>(0,x.jsx)(j.iR,{...e,children:(0,x.jsx)(j.MP,{...f})}),_=e=>(0,x.jsx)(j.tq,{...e,children:(0,x.jsx)(j.YG,{...f})}),F=n.memo((function(e){let{href:t,title:s,onHover:n}=e;const a={url:t,title:s};return(0,x.jsxs)("div",{className:p,onMouseOver:n,onTouchStart:n,children:[(0,x.jsx)(Z,{...a}),(0,x.jsx)(v,{...a}),(0,x.jsx)(P,{...a}),(0,x.jsx)(k,{...a}),(0,x.jsx)(N,{...a}),(0,x.jsx)(T,{...a}),(0,x.jsx)(w,{...a}),(0,x.jsx)(_,{...a})]})})),C=e=>{let{href:t="",title:s=""}=e;const[a,i]=(0,n.useState)(t),[l,r]=(0,n.useState)(s),o=(e=>{const t=(0,n.useRef)(null);return(0,n.useCallback)((s=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{s()}),e)}),[e])})(200);return(0,n.useEffect)((()=>{document&&!s.length&&r(document.title)}),[a]),(0,x.jsx)(F,{href:a,title:l,onHover:()=>o((()=>{const{origin:e,pathname:t,search:s}=window.location,n=[e,t,s].join("");n!==a&&i(n)}))})};function B(){const{metadata:e,isBlogPostPage:t}=(0,i.C)(),{tags:s,title:n,editUrl:l,hasTruncateMarker:r}=e,o=!t&&r,u=s.length>0;return u||o||l?(0,x.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull),children:[u&&(0,x.jsx)("div",{className:(0,a.Z)("col",{"col--9":o}),children:(0,x.jsx)(c.Z,{tags:s})}),t&&l&&(0,x.jsx)("div",{className:"col col--12",children:(0,x.jsxs)("div",{className:(0,a.Z)("row",g.blogPostFooter),children:[(0,x.jsx)("div",{className:"col col--8 margin-vert--sm",children:(0,x.jsx)(C,{})}),(0,x.jsx)("div",{className:(0,a.Z)("col","col--4","margin-vert--sm",g.editThisPage),children:(0,x.jsx)(m,{editUrl:l,text:"\u7de8\u96c6\u3092\u30ea\u30af\u30a8\u30b9\u30c8"})})]})}),o&&(0,x.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,x.jsx)(d.Z,{blogPostTitle:n,to:e.permalink})})]}):null}var E=s(4996);function M(e){let{children:t,className:s}=e;const{withBaseUrl:n}=(0,E.C)(),{isBlogPostPage:c,assets:d,frontMatter:g}=(0,i.C)(),u=c?void 0:"margin-bottom--xl",h=d.image??g.image;return(0,x.jsxs)(l.Z,{className:(0,a.Z)(u,s),children:[(0,x.jsx)(r.Z,{}),h&&(0,x.jsx)("meta",{itemProp:"image",content:n(h,{absolute:!0})}),(0,x.jsx)(o.Z,{children:t}),(0,x.jsx)(B,{})]})}}}]);