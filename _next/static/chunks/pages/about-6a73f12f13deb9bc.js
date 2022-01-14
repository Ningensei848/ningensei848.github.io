(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521,858],{8456:function(a,b,c){"use strict";c.d(b,{Z:function(){return D}});var d=c(3366),e=c(7462),f=c(7294),g=c(6010),h=c(7192),i=c(917),j=c(8216),k=c(3616),l=c(1496),m=c(8979),n=c(6087);function o(a){return(0,m.Z)("MuiCircularProgress",a)}(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=c(5893);const q=["className","color","disableShrink","size","style","thickness","value","variant"];let r=a=>a,s,t,u,v;const w=(0,i.F4)(s||(s=r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),x=(0,i.F4)(t||(t=r`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),y=a=>{const{classes:b,variant:c,color:d,disableShrink:e}=a,f={root:["root",c,`color${(0,j.Z)(d)}`],svg:["svg"],circle:["circle",`circle${(0,j.Z)(c)}`,e&&"circleDisableShrink"]};return(0,h.Z)(f,o,b)},z=(0,l.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(a,b)=>{const{ownerState:c}=a;return[b.root,b[c.variant],b[`color${(0,j.Z)(c.color)}`]]}})(({ownerState:a,theme:b})=>(0,e.Z)({display:"inline-block"},"determinate"===a.variant&&{transition:b.transitions.create("transform")},"inherit"!==a.color&&{color:b.palette[a.color].main}),({ownerState:a})=>"indeterminate"===a.variant&&(0,i.iv)(u||(u=r`
      animation: ${0} 1.4s linear infinite;
    `),w)),A=(0,l.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(a,b)=>b.svg})({display:"block"}),B=(0,l.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(a,b)=>{const{ownerState:c}=a;return[b.circle,b[`circle${(0,j.Z)(c.variant)}`],c.disableShrink&&b.circleDisableShrink]}})(({ownerState:a,theme:b})=>(0,e.Z)({stroke:"currentColor"},"determinate"===a.variant&&{transition:b.transitions.create("stroke-dashoffset")},"indeterminate"===a.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:a})=>"indeterminate"===a.variant&&!a.disableShrink&&(0,i.iv)(v||(v=r`
      animation: ${0} 1.4s ease-in-out infinite;
    `),x)),C=f.forwardRef(function(a,b){const c=(0,k.Z)({props:a,name:"MuiCircularProgress"}),{className:f,color:h="primary",disableShrink:i=!1,size:j=40,style:l,thickness:m=3.6,value:n=0,variant:o="indeterminate"}=c,r=(0,d.Z)(c,q),s=(0,e.Z)({},c,{color:h,disableShrink:i,size:j,thickness:m,value:n,variant:o}),t=y(s),u={},v={},w={};if("determinate"===o){const x=2*Math.PI*((44-m)/2);u.strokeDasharray=x.toFixed(3),w["aria-valuenow"]=Math.round(n),u.strokeDashoffset=`${((100-n)/100*x).toFixed(3)}px`,v.transform="rotate(-90deg)"}return(0,p.jsx)(z,(0,e.Z)({className:(0,g.Z)(t.root,f),style:(0,e.Z)({width:j,height:j},v,l),ownerState:s,ref:b,role:"progressbar"},w,r,{children:(0,p.jsx)(A,{className:t.svg,ownerState:s,viewBox:"22 22 44 44",children:(0,p.jsx)(B,{className:t.circle,style:u,ownerState:s,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})}))});var D=C},4613:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(2144)}])},9858:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return n}});var d=c(4051),e=c.n(d),f=c(5893),g=c.t(f,2),h=c(7294);const i=Object.getPrototypeOf(j).constructor;async function j(a,b){return new i(String(a))(b)}var k=c(8456),l=c(7357);function m(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}var n=function(a){var b=a.content,c=(0,h.useState)(),d=c[0],i=c[1],n=d?d.default:h.Fragment;return((0,h.useEffect)(function(){(function(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){m(f,d,e,g,h,"next",a)}function h(a){m(f,d,e,g,h,"throw",a)}g(void 0)})}})(e().mark(function a(){return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=i,a.next=3,j(b,g);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}},a)}))()},[b]),d)?(0,f.jsx)(l.Z,{component:"article",className:"znc",boxSizing:"border-box",margin:"0 auto",padding:{sm:1},children:(0,f.jsx)(n,{})}):(0,f.jsx)(k.Z,{color:"primary"})}},2144:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return g}});var d=c(5893),e=c(7357),f=c(9858),g=!0;b.default=function(a){var b=a.content;return(0,d.jsx)(e.Z,{m:2,children:(0,d.jsx)(f.default,{content:b})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=4613)}),_N_E=a.O()}])