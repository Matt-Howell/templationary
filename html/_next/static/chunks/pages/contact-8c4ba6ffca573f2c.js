(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3234:function(e,t,n){"use strict";n.d(t,{NI:function(){return y},Yp:function(){return v},lX:function(){return _}});var a=n(1720),r=n(8387),i=n(6734),l=n(2067),o=n(4520),s=n(2494),d=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,u=e=>!!e||void 0;function m(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[p,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,g]=(0,r.k)({strict:!1,name:"FormControlContext"}),y=(0,l.Gp)(function(e,t){let n=(0,l.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:s,htmlProps:u,...m}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:o,...s}=e,d=(0,a.useId)(),u=t||`field-${d}`,m=`${u}-label`,p=`${u}-feedback`,f=`${u}-helptext`,[h,g]=(0,a.useState)(!1),[y,v]=(0,a.useState)(!1),[b,Z]=(0,a.useState)(!1),_=(0,a.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,i.lq)(t,e=>{e&&v(!0)})}),[f]),I=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":c(b),"data-disabled":c(l),"data-invalid":c(r),"data-readonly":c(o),id:e.id??m,htmlFor:e.htmlFor??u}),[u,l,b,r,o,m]),x=(0,a.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,i.lq)(t,e=>{e&&g(!0)}),"aria-live":"polite"}),[p]),E=(0,a.useCallback)((e={},t=null)=>({...e,...s,ref:t,role:"group"}),[s]),N=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!l,isFocused:!!b,onFocus:()=>Z(!0),onBlur:()=>Z(!1),hasFeedbackText:h,setHasFeedbackText:g,hasHelpText:y,setHasHelpText:v,id:u,labelId:m,feedbackId:p,helpTextId:f,htmlProps:s,getHelpTextProps:_,getErrorMessageProps:x,getRootProps:E,getLabelProps:I,getRequiredIndicatorProps:N}}(r),f=d("chakra-form-control",e.className);return a.default.createElement(h,{value:m},a.default.createElement(p,{value:n},a.default.createElement(l.m$.div,{...s({},t),className:f,__css:n.container})))});function v(e){let{isDisabled:t,isInvalid:n,isReadOnly:a,isRequired:r,...i}=function(e){let t=g(),{id:n,disabled:a,readOnly:r,required:i,isRequired:l,isInvalid:o,isReadOnly:s,isDisabled:d,onFocus:c,onBlur:u,...p}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId),{...p,"aria-describedby":f.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:a??d??(null==t?void 0:t.isDisabled),isReadOnly:r??s??(null==t?void 0:t.isReadOnly),isRequired:i??l??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:m(null==t?void 0:t.onFocus,c),onBlur:m(null==t?void 0:t.onBlur,u)}}(e);return{...i,disabled:t,readOnly:a,required:r,"aria-invalid":u(n),"aria-required":u(r),"aria-readonly":u(a)}}y.displayName="FormControl",(0,l.Gp)(function(e,t){let n=g(),r=f(),i=d("chakra-form__helper-text",e.className);return a.default.createElement(l.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:i})}).displayName="FormHelperText";var[b,Z]=(0,r.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,l.Gp)((e,t)=>{let n=(0,l.jC)("FormError",e),r=(0,o.Lr)(e),i=g();return(null==i?void 0:i.isInvalid)?a.default.createElement(b,{value:n},a.default.createElement(l.m$.div,{...null==i?void 0:i.getErrorMessageProps(r,t),className:d("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,l.Gp)((e,t)=>{let n=Z(),r=g();if(!(null==r?void 0:r.isInvalid))return null;let i=d("chakra-form__error-icon",e.className);return a.default.createElement(s.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:i},a.default.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var _=(0,l.Gp)(function(e,t){let n=(0,l.mq)("FormLabel",e),r=(0,o.Lr)(e),{className:i,children:s,requiredIndicator:c=a.default.createElement(I,null),optionalIndicator:u=null,...m}=r,p=g(),f=(null==p?void 0:p.getLabelProps(m,t))??{ref:t,...m};return a.default.createElement(l.m$.label,{...f,className:d("chakra-form__label",r.className),__css:{display:"block",textAlign:"start",...n}},s,(null==p?void 0:p.isRequired)?c:u)});_.displayName="FormLabel";var I=(0,l.Gp)(function(e,t){let n=g(),r=f();if(!(null==n?void 0:n.isRequired))return null;let i=d("chakra-form__required-indicator",e.className);return a.default.createElement(l.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:i})});I.displayName="RequiredIndicator"},979:function(e,t,n){"use strict";n.d(t,{BZ:function(){return f},II:function(){return u},Z8:function(){return I},xW:function(){return b}});var a=n(1720),r=n(3234),i=n(2067),l=n(4520),o=n(5336),s=n(8387),d=n(4031),c=n(6076),u=(0,i.Gp)(function(e,t){let{htmlSize:n,...s}=e,d=(0,i.jC)("Input",s),c=(0,l.Lr)(s),u=(0,r.Yp)(c),m=(0,o.cx)("chakra-input",e.className);return a.default.createElement(i.m$.input,{size:n,...u,__css:d.field,ref:t,className:m})});u.displayName="Input",u.id="Input";var[m,p]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,i.Gp)(function(e,t){let n=(0,i.jC)("Input",e),{children:r,className:s,...u}=(0,l.Lr)(e),p=(0,o.cx)("chakra-input__group",s),f={},h=(0,d.W)(r),g=n.field;h.forEach(e=>{n&&(g&&"InputLeftElement"===e.type.id&&(f.paddingStart=g.height??g.h),g&&"InputRightElement"===e.type.id&&(f.paddingEnd=g.height??g.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))});let y=h.map(t=>{var n,r;let i=(0,c.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,a.cloneElement)(t,i):(0,a.cloneElement)(t,Object.assign(i,f,t.props))});return a.default.createElement(i.m$.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...u},a.default.createElement(m,{value:n},y))});f.displayName="InputGroup";var h={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},g=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),y=(0,i.Gp)(function(e,t){let{placement:n="left",...r}=e,i=h[n]??{},l=p();return a.default.createElement(g,{ref:t,...r,__css:{...l.addon,...i}})});y.displayName="InputAddon";var v=(0,i.Gp)(function(e,t){return a.default.createElement(y,{ref:t,placement:"left",...e,className:(0,o.cx)("chakra-input__left-addon",e.className)})});v.displayName="InputLeftAddon",v.id="InputLeftAddon";var b=(0,i.Gp)(function(e,t){return a.default.createElement(y,{ref:t,placement:"right",...e,className:(0,o.cx)("chakra-input__right-addon",e.className)})});b.displayName="InputRightAddon",b.id="InputRightAddon";var Z=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),_=(0,i.Gp)(function(e,t){let{placement:n="left",...r}=e,i=p(),l=i.field,o={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==l?void 0:l.height)??(null==l?void 0:l.h),height:(null==l?void 0:l.height)??(null==l?void 0:l.h),fontSize:null==l?void 0:l.fontSize,...i.element};return a.default.createElement(Z,{ref:t,__css:o,...r})});_.id="InputElement",_.displayName="InputElement";var I=(0,i.Gp)(function(e,t){let{className:n,...r}=e,i=(0,o.cx)("chakra-input__left-element",n);return a.default.createElement(_,{ref:t,placement:"left",className:i,...r})});I.id="InputLeftElement",I.displayName="InputLeftElement";var x=(0,i.Gp)(function(e,t){let{className:n,...r}=e,i=(0,o.cx)("chakra-input__right-element",n);return a.default.createElement(_,{ref:t,placement:"right",className:i,...r})});x.id="InputRightElement",x.displayName="InputRightElement"},8105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(189)}])},189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(7997),r=n(9008),i=n.n(r),l=n(8502),o=n(639),s=n(8395),d=n(3234),c=n(979),u=n(1720),m=n(2067),p=n(4520),f=(...e)=>e.filter(Boolean).join(" "),h=["h","minH","height","minHeight"],g=(0,m.Gp)((e,t)=>{let n=(0,m.mq)("Textarea",e),{className:a,rows:r,...i}=(0,p.Lr)(e),l=(0,d.Yp)(i),o=r?function(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}(n,h):n;return u.default.createElement(m.m$.textarea,{ref:t,rows:r,...l,className:f("chakra-textarea",a),__css:o})});g.displayName="Textarea";var y=n(7741),v=n(6895),b=n(9583);function Z(){return(0,a.BX)("div",{children:[(0,a.BX)(i(),{children:[(0,a.tZ)("title",{children:"Contact Us - Templationary.com"}),(0,a.tZ)("meta",{name:"description",content:"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}),(0,a.tZ)("meta",{property:"og:type",content:"website"}),(0,a.tZ)("meta",{property:"og:url",content:"https://templationary.com/contact"}),(0,a.tZ)("meta",{property:"og:title",content:"Contact Us - Templationary.com"}),(0,a.tZ)("meta",{property:"og:description",content:"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}),(0,a.tZ)("meta",{property:"og:image",content:"https://templationary.com/social-icon.png"}),(0,a.tZ)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.tZ)("meta",{property:"twitter:url",content:"https://templationary.com/contact"}),(0,a.tZ)("meta",{property:"twitter:title",content:"Contact Us - Templationary.com"}),(0,a.tZ)("meta",{property:"twitter:description",content:"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}),(0,a.tZ)("meta",{property:"twitter:image",content:"https://templationary.com/social-icon.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.tZ)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.tZ)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,a.tZ)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.tZ)("meta",{name:"robots",content:"index, follow"}),(0,a.tZ)("meta",{name:"googlebot",content:"index, follow"}),(0,a.tZ)("meta",{property:"og:locale",content:"en_US"}),(0,a.tZ)("meta",{charSet:"utf-8"}),(0,a.tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,a.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.tZ)("link",{rel:"canonical",href:"https://templationary.com/contact"}),(0,a.tZ)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,a.tZ)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.tZ)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap",rel:"stylesheet"}),(0,a.tZ)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5682997250624118",crossOrigin:"anonymous"}),(0,a.tZ)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-DPLWXNCZTQ"}),(0,a.tZ)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n    \n            gtag('config', 'G-DPLWXNCZTQ');"}})]}),(0,a.BX)(a.HY,{children:[(0,a.tZ)(l.Z,{}),(0,a.BX)(o.xu,{as:"main",children:[(0,a.tZ)(o.xu,{width:"100%",padding:"1rem 0",bg:(0,s.ff)("#f0f5f9","gray.700"),children:(0,a.tZ)(o.W2,{maxW:"5xl",children:(0,a.BX)(o.Kq,{textAlign:"center",align:"center",spacing:{base:2,md:3},py:{base:10,md:14},children:[(0,a.tZ)(o.X6,{fontWeight:600,as:"h1",mb:3,fontFamily:'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:{base:"3xl",sm:"4xl",md:"5xl"},lineHeight:"110%",color:(0,s.ff)("gray.800","white"),children:"Contact Us"}),(0,a.tZ)(o.xv,{lineHeight:1.5,color:(0,s.ff)("gray.500","gray.100"),fontSize:"1.25rem",maxW:"3xl",children:"Have a question, need some help, or are interested in advertising with us? Reach out to us here. We will get back to you within 24 hours!"})]})})}),(0,a.tZ)(o.W2,{pt:5,maxW:"1500px",children:(0,a.BX)("form",{action:"/sendMessage.php",method:"POST",children:[(0,a.BX)(d.NI,{mb:4,id:"first-name",isRequired:!0,children:[(0,a.tZ)(d.lX,{children:"Full name"}),(0,a.tZ)(c.II,{name:"uName",className:"customBack",type:"text",placeholder:"Full name"})]}),(0,a.BX)(d.NI,{mb:4,id:"first-name",isRequired:!0,children:[(0,a.tZ)(d.lX,{children:"Email Address"}),(0,a.tZ)(c.II,{name:"uEmail",className:"customBack",type:"email",placeholder:"Email Address"})]}),(0,a.BX)(d.NI,{mb:4,id:"first-name",isRequired:!0,children:[(0,a.tZ)(d.lX,{children:"Message"}),(0,a.tZ)(g,{name:"uMessage",className:"customBack",placeholder:"Your message..."})]}),(0,a.tZ)(c.II,{name:"uVerif",type:"hidden",value:"true"}),(0,a.tZ)(y.zx,{mt:2,type:"submit",rightIcon:(0,a.tZ)(b.Z1Y,{}),colorScheme:"green",variant:"solid",children:"Send"})]})})]}),(0,a.tZ)(v.Z,{})]})]})}}},function(e){e.O(0,[445,13,617,347,408,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);