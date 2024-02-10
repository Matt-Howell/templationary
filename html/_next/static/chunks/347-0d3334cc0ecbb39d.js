(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{7741:function(e,t,n){"use strict";n.d(t,{hU:function(){return v},zx:function(){return y}});var a=n(1720),r=n(6734),l=n(2067),i=n(4520),o=n(8387),c=n(5610),s=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,[d,m]=(0,o.k)({strict:!1,name:"ButtonGroupContext"});function f(e){let{children:t,className:n,...r}=e,i=(0,a.isValidElement)(t)?(0,a.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=s("chakra-button__icon",n);return a.default.createElement(l.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:o},i)}function p(e){let{label:t,placement:n,spacing:r="0.5rem",children:i=a.default.createElement(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:u,...d}=e,m=s("chakra-button__spinner",o),f="start"===n?"marginEnd":"marginStart",p=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[f]:t?r:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,f,r]);return a.default.createElement(l.m$.div,{className:m,...d,__css:p},i)}f.displayName="ButtonIcon",p.displayName="ButtonSpinner";var y=(0,l.Gp)((e,t)=>{let n=m(),o=(0,l.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:d,isActive:f,children:y,leftIcon:v,rightIcon:h,loadingText:x,iconSpacing:b="0.5rem",type:E,spinner:_,spinnerPlacement:k="start",className:w,as:N,...C}=(0,i.Lr)(e),S=(0,a.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:G,type:$}=function(e){let[t,n]=(0,a.useState)(!e),r=(0,a.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:r,type:t?"button":void 0}}(N),L={rightIcon:h,leftIcon:v,iconSpacing:b,children:y};return a.default.createElement(l.m$.button,{disabled:c||d,ref:(0,r.qq)(t,G),as:N,type:E??$,"data-active":u(f),"data-loading":u(d),__css:S,className:s("chakra-button",w),...C},d&&"start"===k&&a.default.createElement(p,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:b},_),d?x||a.default.createElement(l.m$.span,{opacity:0},a.default.createElement(g,{...L})):a.default.createElement(g,{...L}),d&&"end"===k&&a.default.createElement(p,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:b},_))});function g(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:l}=e;return a.default.createElement(a.default.Fragment,null,t&&a.default.createElement(f,{marginEnd:l},t),r,n&&a.default.createElement(f,{marginStart:l},n))}y.displayName="Button",(0,l.Gp)(function(e,t){let{size:n,colorScheme:r,variant:i,className:o,spacing:c="0.5rem",isAttached:u,isDisabled:m,...f}=e,p=s("chakra-button__group",o),y=(0,a.useMemo)(()=>({size:n,colorScheme:r,variant:i,isDisabled:m}),[n,r,i,m]),g={display:"inline-flex"};return g=u?{...g,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...g,"& > *:not(style) ~ *:not(style)":{marginStart:c}},a.default.createElement(d,{value:y},a.default.createElement(l.m$.div,{ref:t,role:"group",__css:g,className:p,"data-attached":u?"":void 0,...f}))}).displayName="ButtonGroup";var v=(0,l.Gp)((e,t)=>{let{icon:n,children:r,isRound:l,"aria-label":i,...o}=e,c=n||r,s=(0,a.isValidElement)(c)?(0,a.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return a.default.createElement(y,{padding:"0",borderRadius:l?"full":void 0,ref:t,"aria-label":i,...o},s)});v.displayName="IconButton"},9653:function(e,t,n){"use strict";n.d(t,{qY:function(){return o}});var a=n(1720),r=n(2446);n(640);var l=r.jU?a.useLayoutEffect:a.useEffect;function i(e,t=[]){let n=(0,a.useRef)(e);return l(()=>{n.current=e}),(0,a.useCallback)((...e)=>{var t;return null==(t=n.current)?void 0:t.call(n,...e)},t)}function o(e={}){let{onClose:t,onOpen:n,isOpen:l,id:o}=e,c=i(n),s=i(t),[u,d]=(0,a.useState)(e.defaultIsOpen||!1),[m,f]=function(e,t){let n=void 0!==e;return[n,n&&void 0!==e?e:t]}(l,u),p=function(e,t){let n=(0,a.useId)();return(0,a.useMemo)(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}(o,"disclosure"),y=(0,a.useCallback)(()=>{m||d(!1),null==s||s()},[m,s]),g=(0,a.useCallback)(()=>{m||d(!0),null==c||c()},[m,c]),v=(0,a.useCallback)(()=>{(f?y:g)()},[f,g,y]);return{isOpen:!!f,onOpen:g,onClose:y,onToggle:v,isControlled:m,getButtonProps:(e={})=>({...e,"aria-expanded":f,"aria-controls":p,onClick:(0,r.v0)(e.onClick,v)}),getDisclosureProps:(e={})=>({...e,hidden:!f,id:p})}}},639:function(e,t,n){"use strict";n.d(t,{xu:function(){return m},W2:function(){return y},kC:function(){return g},Ug:function(){return D},X6:function(){return x},rU:function(){return b},DE:function(){return C},HC:function(){return N},MI:function(){return S},Kq:function(){return L},xv:function(){return B},QI:function(){return w},gC:function(){return I},Eq:function(){return R},Uc:function(){return j}});var a=n(1720),r=n(2067);function l(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((n,a)=>(n[a]=t(e[a]),n),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var i=n(5336),o=n(4520),c=n(6076),s=n(2494),u=n(8387),d=n(4031);(0,r.Gp)(function(e,t){let{ratio:n=4/3,children:o,className:c,...s}=e,u=a.Children.only(o),d=(0,i.cx)("chakra-aspect-ratio",c);return a.default.createElement(r.m$.div,{ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:l(n,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...s},u)}).displayName="AspectRatio",(0,r.Gp)(function(e,t){let n=(0,r.mq)("Badge",e),{className:l,...c}=(0,o.Lr)(e);return a.default.createElement(r.m$.span,{ref:t,className:(0,i.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})}).displayName="Badge";var m=(0,r.m$)("div");m.displayName="Box";var f=(0,r.Gp)(function(e,t){let{size:n,centerContent:r=!0,...l}=e;return a.default.createElement(m,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...l})});f.displayName="Square",(0,r.Gp)(function(e,t){let{size:n,...r}=e;return a.default.createElement(f,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle",(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var p={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,r.Gp)(function(e,t){let{axis:n="both",...l}=e;return a.default.createElement(r.m$.div,{ref:t,__css:p[n],...l,position:"absolute"})}),(0,r.Gp)(function(e,t){let n=(0,r.mq)("Code",e),{className:l,...c}=(0,o.Lr)(e);return a.default.createElement(r.m$.code,{ref:t,className:(0,i.cx)("chakra-code",e.className),...c,__css:{display:"inline-block",...n}})}).displayName="Code";var y=(0,r.Gp)(function(e,t){let{className:n,centerContent:l,...c}=(0,o.Lr)(e),s=(0,r.mq)("Container",e);return a.default.createElement(r.m$.div,{ref:t,className:(0,i.cx)("chakra-container",n),...c,__css:{...s,...l&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});y.displayName="Container",(0,r.Gp)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:l,borderTopWidth:c,borderRightWidth:s,borderWidth:u,borderStyle:d,borderColor:m,...f}=(0,r.mq)("Divider",e),{className:p,orientation:y="horizontal",__css:g,...v}=(0,o.Lr)(e);return a.default.createElement(r.m$.hr,{ref:t,"aria-orientation":y,...v,__css:{...f,border:"0",borderColor:m,borderStyle:d,...{vertical:{borderLeftWidth:n||s||u||"1px",height:"100%"},horizontal:{borderBottomWidth:l||c||u||"1px",width:"100%"}}[y],...g},className:(0,i.cx)("chakra-divider",p)})}).displayName="Divider";var g=(0,r.Gp)(function(e,t){let{direction:n,align:l,justify:i,wrap:o,basis:c,grow:s,shrink:u,...d}=e;return a.default.createElement(r.m$.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:l,justifyContent:i,flexWrap:o,flexBasis:c,flexGrow:s,flexShrink:u},...d})});g.displayName="Flex";var v=(0,r.Gp)(function(e,t){let{templateAreas:n,gap:l,rowGap:i,columnGap:o,column:c,row:s,autoFlow:u,autoRows:d,templateRows:m,autoColumns:f,templateColumns:p,...y}=e;return a.default.createElement(r.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:l,gridRowGap:i,gridColumnGap:o,gridAutoColumns:f,gridColumn:c,gridRow:s,gridAutoFlow:u,gridAutoRows:d,gridTemplateRows:m,gridTemplateColumns:p},...y})});function h(e){return l(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}v.displayName="Grid",(0,r.Gp)(function(e,t){let{area:n,colSpan:l,colStart:i,colEnd:o,rowEnd:s,rowSpan:u,rowStart:d,...m}=e,f=(0,c.oA)({gridArea:n,gridColumn:h(l),gridRow:h(u),gridColumnStart:i,gridColumnEnd:o,gridRowStart:d,gridRowEnd:s});return a.default.createElement(r.m$.div,{ref:t,__css:f,...m})}).displayName="GridItem";var x=(0,r.Gp)(function(e,t){let n=(0,r.mq)("Heading",e),{className:l,...c}=(0,o.Lr)(e);return a.default.createElement(r.m$.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:n})});x.displayName="Heading",(0,r.Gp)(function(e,t){let n=(0,r.mq)("Mark",e),l=(0,o.Lr)(e);return a.default.createElement(m,{ref:t,...l,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})}),(0,r.Gp)(function(e,t){let n=(0,r.mq)("Kbd",e),{className:l,...c}=(0,o.Lr)(e);return a.default.createElement(r.m$.kbd,{ref:t,className:(0,i.cx)("chakra-kbd",l),...c,__css:{fontFamily:"mono",...n}})}).displayName="Kbd";var b=(0,r.Gp)(function(e,t){let n=(0,r.mq)("Link",e),{className:l,isExternal:c,...s}=(0,o.Lr)(e);return a.default.createElement(r.m$.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",l),...s,__css:n})});b.displayName="Link",(0,r.Gp)(function(e,t){let{isExternal:n,target:l,rel:o,className:c,...s}=e;return a.default.createElement(r.m$.a,{...s,ref:t,className:(0,i.cx)("chakra-linkbox__overlay",c),rel:n?"noopener noreferrer":o,target:n?"_blank":l,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,r.Gp)(function(e,t){let{className:n,...l}=e;return a.default.createElement(r.m$.div,{ref:t,position:"relative",...l,className:(0,i.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[E,_]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),k=(0,r.Gp)(function(e,t){let n=(0,r.jC)("List",e),{children:l,styleType:i="none",stylePosition:c,spacing:s,...u}=(0,o.Lr)(e),m=(0,d.W)(l);return a.default.createElement(E,{value:n},a.default.createElement(r.m$.ul,{ref:t,listStyleType:i,listStylePosition:c,role:"list",__css:{...n.container,...s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{}},...u},m))});k.displayName="List",(0,r.Gp)((e,t)=>{let{as:n,...r}=e;return a.default.createElement(k,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList";var w=(0,r.Gp)(function(e,t){let{as:n,...r}=e;return a.default.createElement(k,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})});w.displayName="UnorderedList";var N=(0,r.Gp)(function(e,t){let n=_();return a.default.createElement(r.m$.li,{ref:t,...e,__css:n.item})});N.displayName="ListItem";var C=(0,r.Gp)(function(e,t){let n=_();return a.default.createElement(s.JO,{ref:t,role:"presentation",...e,__css:n.icon})});C.displayName="ListIcon";var S=(0,r.Gp)(function(e,t){let{columns:n,spacingX:i,spacingY:o,spacing:c,minChildWidth:s,...u}=e,d=(0,r.Fg)(),m=s?l(s,e=>{let t=(0,r.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(d);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):l(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return a.default.createElement(v,{ref:t,gap:c,columnGap:i,rowGap:o,templateColumns:m,...u})});S.displayName="SimpleGrid",(0,r.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var G="& > *:not(style) ~ *:not(style)",$=e=>a.default.createElement(r.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});$.displayName="StackItem";var L=(0,r.Gp)((e,t)=>{let{isInline:n,direction:o,align:c,justify:s,spacing:u="0.5rem",wrap:m,children:f,divider:p,className:y,shouldWrapChildren:g,...v}=e,h=n?"row":o??"column",x=(0,a.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[G]:l(n,e=>a[e])}})({direction:h,spacing:u}),[h,u]),b=(0,a.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":l(n,e=>a[e])}})({spacing:u,direction:h}),[u,h]),E=!!p,_=!g&&!E,k=(0,a.useMemo)(()=>{let e=(0,d.W)(f);return _?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,i=a.default.createElement($,{key:r},t),o=g?i:t;if(!E)return o;let c=(0,a.cloneElement)(p,{__css:b});return a.default.createElement(a.Fragment,{key:r},o,l?null:c)})},[p,b,E,_,g,f]),w=(0,i.cx)("chakra-stack",y);return a.default.createElement(r.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:s,flexDirection:x.flexDirection,flexWrap:m,className:w,__css:E?{}:{[G]:x[G]},...v},k)});L.displayName="Stack";var D=(0,r.Gp)((e,t)=>a.default.createElement(L,{align:"center",...e,direction:"row",ref:t}));D.displayName="HStack";var I=(0,r.Gp)((e,t)=>a.default.createElement(L,{align:"center",...e,direction:"column",ref:t}));I.displayName="VStack";var B=(0,r.Gp)(function(e,t){let n=(0,r.mq)("Text",e),{className:l,align:s,decoration:u,casing:d,...m}=(0,o.Lr)(e),f=(0,c.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.default.createElement(r.m$.p,{ref:t,className:(0,i.cx)("chakra-text",e.className),...f,...m,__css:n})});function A(e){return"number"==typeof e?`${e}px`:e}B.displayName="Text";var R=(0,r.Gp)(function(e,t){let{spacing:n="0.5rem",spacingX:c,spacingY:s,children:u,justify:d,direction:m,align:f,className:p,shouldWrapChildren:y,...g}=e,v=(0,a.useMemo)(()=>{let{spacingX:e=n,spacingY:t=n}={spacingX:c,spacingY:s};return{"--chakra-wrap-x-spacing":t=>l(e,e=>A((0,o.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>l(t,t=>A((0,o.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:f,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[n,c,s,d,f,m]),h=(0,a.useMemo)(()=>y?a.Children.map(u,(e,t)=>a.default.createElement(j,{key:t},e)):u,[u,y]);return a.default.createElement(r.m$.div,{ref:t,className:(0,i.cx)("chakra-wrap",p),overflow:"hidden",...g},a.default.createElement(r.m$.ul,{className:"chakra-wrap__list",__css:v},h))});R.displayName="Wrap";var j=(0,r.Gp)(function(e,t){let{className:n,...l}=e;return a.default.createElement(r.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",n),...l})});j.displayName="WrapItem"},6076:function(e,t,n){"use strict";function a(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}n.d(t,{oA:function(){return a}})},4031:function(e,t,n){"use strict";n.d(t,{W:function(){return r}});var a=n(1720);function r(e){return a.Children.toArray(e).filter(e=>(0,a.isValidElement)(e))}},6734:function(e,t,n){"use strict";n.d(t,{lq:function(){return r},qq:function(){return l}});var a=n(1720);function r(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function l(...e){return(0,a.useMemo)(()=>r(...e),e)}},640:function(e,t,n){"use strict";var a=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,i,o,c,s,u,d,m=!1;t||(t={}),i=t.debug||!1;try{if(c=a(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(p){i&&console.error("unable to copy using execCommand: ",p),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(f){i&&console.error("unable to copy using clipboardData: ",f),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,l),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return m}},9008:function(e,t,n){e.exports=n(3121)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var a=n(1720),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.default.createContext&&a.default.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function c(e){return function(t){return a.default.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return a.default.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,r=e.attr,l=e.size,c=e.title,s=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.default.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&a.default.createElement("title",null,c),e.children)};return void 0!==l?a.default.createElement(l.Consumer,null,function(e){return t(e)}):t(r)}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);