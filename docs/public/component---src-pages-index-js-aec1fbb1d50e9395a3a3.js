(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8F7J":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(L,(0,o.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,o.default)({opacity:R?1:0,transition:z?"opacity "+v+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&T,s,f),k={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:E};if(g){var H=g,W=p(g);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),W.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:k,imageVariants:H,generateSources:O}),W.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:k,imageVariants:H,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,x(H),d.default.createElement(L,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},W,{imageVariants:H}))}}))}if(h){var B=h,q=p(h),F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&T)}),q.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:k,imageVariants:B,generateSources:O}),q.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:k,imageVariants:B,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,x(B),d.default.createElement(L,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},q,{imageVariants:B}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}z.propTypes={resolutions:P,sizes:C,fixed:T(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:T(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=z;t.default=V},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),o=a.n(s),d=a("vUet"),c=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,u=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(d.a)(a,"col"),p=[],g=[];return c.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&g.push("order"+l+"-"+r),null!=a&&g.push("offset"+l+"-"+a)})),p.length||p.push(m),o.a.createElement(u,Object(r.a)({},f,{ref:t,className:l.a.apply(void 0,[i].concat(p,g))}))}));u.displayName="Col",t.a=u},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("Bl7J"),s=(a("9eSz"),a("vrFN")),o=(a("8F7J"),a("xXt2")),d=a("7vrA"),c=a("wx14"),u=a("zLVn"),f=a("TSYQ"),m=a.n(f),p=a("vUet"),g=["xl","lg","md","sm","xs"],h=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,l=e.as,s=void 0===l?"div":l,o=Object(u.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(p.a)(a,"row"),f=d+"-cols",h=[];return g.forEach((function(e){var t,a=o[e];delete o[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+f+r+"-"+t)})),n.a.createElement(s,Object(c.a)({ref:t},o,{className:m.a.apply(void 0,[r,d,i&&"no-gutters"].concat(h))}))}));h.displayName="Row",h.defaultProps={noGutters:!1};var b=h,v=a("JI6e"),y=a("cWnB"),E=a("YdCC"),x=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(c.a)({},t,{ref:a,className:m()(t.className,e)}))}))},S=a("Wzyw"),w=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,l=e.as,s=void 0===l?"img":l,o=Object(u.a)(e,["bsPrefix","className","variant","as"]),d=Object(p.a)(a,"card-img");return n.a.createElement(s,Object(c.a)({ref:t,className:m()(i?d+"-"+i:d,r)},o))}));w.displayName="CardImg",w.defaultProps={variant:null};var O=w,N=x("h5"),R=x("h6"),j=Object(E.a)("card-body"),I=Object(E.a)("card-title",{Component:N}),L=Object(E.a)("card-subtitle",{Component:R}),z=Object(E.a)("card-link",{Component:"a"}),P=Object(E.a)("card-text",{Component:"p"}),C=Object(E.a)("card-header"),T=Object(E.a)("card-footer"),V=Object(E.a)("card-img-overlay"),k=n.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.bg,s=e.text,o=e.border,d=e.body,f=e.children,g=e.as,h=void 0===g?"div":g,b=Object(u.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(p.a)(a,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return n.a.createElement(S.a.Provider,{value:y},n.a.createElement(h,Object(c.a)({ref:t},b,{className:m()(i,v,l&&"bg-"+l,s&&"text-"+s,o&&"border-"+o)}),d?n.a.createElement(j,null,f):f))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=O,k.Title=I,k.Subtitle=L,k.Body=j,k.Link=z,k.Text=P,k.Header=C,k.Footer=T,k.ImgOverlay=V;var H=k,W=a("IP2g"),B=a("wHSu"),q=function(){return n.a.createElement(o.a,{fluid:!0,className:"pt-50 text-center testClass"},n.a.createElement(d.a,null,n.a.createElement(b,null,n.a.createElement(v.a,{className:"col-5"},n.a.createElement("h1",null,n.a.createElement(W.a,{className:"mt-4",icon:B.a,size:"6x"}))),n.a.createElement(v.a,{className:"text-left col-7"},n.a.createElement("h1",{className:"mt-4 bigText"},"IR Plan"),n.a.createElement("p",null,"Free, easy Incident Response plan generation for common security threats"),n.a.createElement(i.Link,{to:"/plan/"},n.a.createElement(y.a,{variant:"btn-lg",className:"coolButton"},"Build your custom plan now!"))))))},F=function(){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(b,null,n.a.createElement(v.a,null),n.a.createElement(v.a,null,n.a.createElement(H,{className:"border-0 text-center"},n.a.createElement(H.Body,null,n.a.createElement(H.Title,null,n.a.createElement(W.a,{className:"cardColor",icon:B.c,size:"4x"})),n.a.createElement(H.Subtitle,{className:"mb-2 text-muted"},"Flexible"),n.a.createElement(H.Text,null,"Customize your plan to fit your organization's needs")))),n.a.createElement(v.a,null,n.a.createElement(H,{className:"border-0 text-center"},n.a.createElement(H.Body,null,n.a.createElement(H.Title,null,n.a.createElement(W.a,{className:"cardColor",icon:B.b,size:"4x"})),n.a.createElement(H.Subtitle,{className:"mb-2 text-muted"},"Concise"),n.a.createElement(H.Text,null,"The default plan provides general guidelines in responding to security threats")))),n.a.createElement(v.a,null,n.a.createElement(H,{className:"border-0 text-center"},n.a.createElement(H.Body,null,n.a.createElement(H.Title,null,n.a.createElement(W.a,{className:"cardColor",icon:B.d,size:"4x"})),n.a.createElement(H.Subtitle,{className:"mb-2 text-muted"},"Free"),n.a.createElement(H.Text,null,"Our plan generation is completely free and open source")))),n.a.createElement(v.a,null)))},M=function(){return n.a.createElement(d.a,null,n.a.createElement("p",null,'Create your own concise, flexible, and free incident response plan here, based on our compilation of best practices. Simply input your information and press enter to see the changes in the preview section. Download a copy by clicking the "Download" link for either HTML or Markdown format. For professional assistance with incident response, or with customizing, implementing, or testing your plan, please contact us.'))};t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement(q,null),n.a.createElement(M,null),n.a.createElement(F,null))}},cWnB:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),o=a.n(s),d=a("vUet"),c=a("dbZe"),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,s=e.size,u=e.active,f=e.className,m=e.block,p=e.type,g=e.as,h=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(d.a)(a,"btn"),v=l()(f,b,u&&"active",b+"-"+i,m&&b+"-block",s&&b+"-"+s);if(h.href)return o.a.createElement(c.a,Object(r.a)({},h,{as:g,ref:t,className:l()(v,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:g||(h.type="button");var y=g||"button";return o.a.createElement(y,Object(r.a)({},h,{className:v}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u},xXt2:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("q1tI"),l=a.n(i),s=a("TSYQ"),o=a.n(s),d=a("vUet"),c=l.a.forwardRef((function(e,t){var a,i=e.as,s=void 0===i?"div":i,c=e.className,u=e.fluid,f=e.bsPrefix,m=Object(n.a)(e,["as","className","fluid","bsPrefix"]),p=((a={})[f=Object(d.a)(f,"jumbotron")]=!0,a[f+"-fluid"]=u,a);return l.a.createElement(s,Object(r.a)({ref:t},m,{className:o()(c,p)}))}));c.defaultProps={fluid:!1},c.displayName="Jumbotron",t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-aec1fbb1d50e9395a3a3.js.map