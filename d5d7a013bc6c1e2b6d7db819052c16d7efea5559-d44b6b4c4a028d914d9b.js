(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+GXu":function(t,e,n){},"1Mdp":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function c(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function s(t,e,n,r,o){return function(t,e,n,r,o){var i=(t-n)/(e-n);if(0===i)return r;if(1===i)return o;for(var a="#",c=1;c<6;c+=2){var s=parseInt(r.substr(c,2),16),u=parseInt(o.substr(c,2),16),l=Math.round((1-i)*s+i*u).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,c(r),c(o))}var u=function(t){function e(e){t.call(this,e);var n=e.height,r=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:o?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,n=e.C,r=e.s,o=(this.props.checked?this.i:this.o)+t-n;e.R||t===n||this.setState({R:!0});var i=Math.min(this.i,Math.max(this.o,o));i!==r&&this.setState({s:i})},e.prototype.S=function(t){var e=this.state,n=e.s,r=e.R,o=e.m,i=this.props.checked,a=(this.i+this.o)/2,c=Date.now()-o;!r||c<250?this.T(t):i?a<n?this.setState({s:this.i}):this.T(t):n<a?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.className,i=t.offColor,a=t.onColor,c=t.offHandleColor,u=t.onHandleColor,l=t.checkedIcon,f=t.uncheckedIcon,h=t.boxShadow,d=t.activeBoxShadow,p=t.height,T=t.width,E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),m=this.state,A=m.s,b=m.R,y=m.M,v={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:p/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:p,width:T,margin:Math.max(0,(this.t-p)/2),position:"relative",background:s(A,this.i,this.o,i,a),borderRadius:p/2,cursor:e?"default":"pointer",WebkitTransition:b?null:"background 0.25s",MozTransition:b?null:"background 0.25s",transition:b?null:"background 0.25s"},g={height:p,width:Math.min(1.5*p,T-(this.t+p)/2+1),position:"relative",opacity:(A-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},_={height:p,width:Math.min(1.5*p,T-(this.t+p)/2+1),position:"absolute",opacity:1-(A-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},w={height:this.t,width:this.t,background:s(A,this.i,this.o,c,u),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+A+"px)",top:Math.max(0,(p-this.t)/2),outline:0,boxShadow:y?d:h,border:0,WebkitTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return r.createElement("div",{className:n,style:v},r.createElement("div",{className:"react-switch-bg",style:S,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},l&&r.createElement("div",{style:g},l),f&&r.createElement("div",{style:_},f)),r.createElement("div",{className:"react-switch-handle",style:w,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),r.createElement("input",o({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},E,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(r.Component);u.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=u},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function f(){u=t(l.map((function(t){return t.props}))),h.canUseDOM?e(u):n&&(u=n(u))}var h=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,l=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(h,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(h,"canUseDOM",s),h}}},CC2r:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=n("TJpk"),a=n.n(i),c=n("Wbzz");function s(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,s=t.title;return o.a.createElement(c.StaticQuery,{query:u,render:function(t){var c=e||t.site.siteMetadata.description;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}})}s.defaultProps={lang:"en",meta:[],keywords:[]};var u="3128451518"},FtgW:function(t,e,n){},Gytx:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<i.length;s++){var u=i[s];if(!c(u))return!1;var l=t[u],f=e[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},JqEL:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l}));var r=function(t){return document.querySelectorAll(t)},o=function(t){return document.querySelector(t)},i=function(t,e){return t.classList.add(e)},a=function(){return o("body")},c=function(t){return i(a(),t)},s=function(t){return function(t,e){return t.classList.remove(e)}(a(),t)},u=function(t){return function(t,e){return t.classList.contains(e)}(a(),t)},l=function(){return document.documentElement.offsetHeight}},TJpk:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),u=n("v1p5"),l=n("hFT/");function f(t){return t&&t.__esModule?t:{default:t}}function h(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var T,E,m,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),b=(T=A,m=E=function(t){function e(){return d(this,e),p(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,s.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=c,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=h(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=h(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var t=T.rewind();return t||(t=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},m);b.renderStatic=b.rewind,e.Helmet=b,e.default=b},Vq1Q:function(t,e,n){},WREK:function(t,e,n){},bmMU:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,s,u,l=r(e),f=r(n);if(l&&f){if((s=e.length)!=n.length)return!1;for(c=s;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=f)return!1;var h=e instanceof Date,d=n instanceof Date;if(h!=d)return!1;if(h&&d)return e.getTime()==n.getTime();var p=e instanceof RegExp,T=n instanceof RegExp;if(p!=T)return!1;if(p&&T)return e.toString()==n.toString();var E=o(e);if((s=E.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,E[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=s;0!=c--;)if(!("_owner"===(u=E[c])&&e.$$typeof||t(e[u],n[u])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(t,e){return t[r[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},hpys:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=(n("rWA+"),function(){return o.a.createElement("a",{href:"https://github.com/ulfrid",className:"github","aria-label":"GitHub"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),c=(n("+GXu"),function(t){var e=t.title,n=t.location,r=t.rootPath,c=n.pathname===r;return o.a.createElement("div",{className:"top"},!c&&o.a.createElement(i.Link,{to:"/",className:"link"},e),o.a.createElement(a,null))}),s=(n("Vq1Q"),function(t){var e=t.title,n=t.location,r=t.rootPath;return n.pathname===r&&o.a.createElement("h1",{className:"home-header"},o.a.createElement(i.Link,{to:"/",className:"link"},e))}),u=n("ohBo"),l=n.n(u),f=n("JqEL"),h=n("WlAH");n("FtgW");var d=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1],i=function(t){var e=function(t){return t?h.d.DARK:h.d.LIGHT}(t);n(t),function(t){switch(t){case h.d.LIGHT:f.b(h.d.LIGHT),f.g(h.d.DARK);break;case h.d.DARK:f.b(h.d.DARK),f.g(h.d.LIGHT)}}(e)};return Object(r.useEffect)((function(){var t=f.f(h.d.DARK);i(t)}),[]),o.a.createElement("div",{className:"switch-container"},o.a.createElement("label",{htmlFor:"normal-switch"},o.a.createElement(l.a,{onChange:i,checked:e,id:"normal-switch",height:24,width:48,checkedIcon:o.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:o.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},p=(n("WREK"),function(){return o.a.createElement("footer",{className:"footer"},"©",o.a.createElement("a",{href:"https://github.com/ulfrid"},"ulfrid"),", Built with"," ",o.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),T=n("p3AD"),E=(n("uE/X"),function(t){var e=t.location,n=t.title,r=t.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{title:n,location:e,rootPath:"/"}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(T.a)(38),padding:Object(T.a)(1.5)+" "+Object(T.a)(3/4)}},o.a.createElement(d,null),o.a.createElement(s,{title:n,location:e,rootPath:"/"}),r,o.a.createElement(p,null)))})},ohBo:function(t,e,n){t.exports=n("1Mdp")},"rWA+":function(t,e,n){},"uE/X":function(t,e,n){},v1p5:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=s(n("q1tI")),a=s(n("YVoz")),c=n("hFT/");function s(t){return t&&t.__esModule?t:{default:t}}var u,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=E(t,c.TAG_NAMES.TITLE),n=E(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=E(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},h=function(t){return E(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},p=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},T=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&v("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===e.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s],l=(0,a.default)({},o[u],r[u]);o[u]=l}return t}),[]).reverse()},E=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},m=(u=Date.now(),function(t){var e=Date.now();e-u>16?(u=e,t(e)):setTimeout((function(){m(t)}),0)}),A=function(t){return clearTimeout(t)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:t.requestAnimationFrame||m,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:t.cancelAnimationFrame||A,v=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,g=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,h=t.title,d=t.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,o),w(h,d);var p={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,i),metaTags:R(c.TAG_NAMES.META,a),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,l),styleTags:R(c.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(T[t]=n),r.length&&(E[t]=p[t].oldTags)})),e&&e(),u(t,T,E)},_=function(t){return Array.isArray(t)?t.join(""):t},w=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),M(c.TAG_NAMES.TITLE,e)},M=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var u=a[s],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var h=i.length-1;h>=0;h--)n.removeAttribute(i[h]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},R=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},P=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=O(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=P(n),i=_(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(e)},toString:function(){return P(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){S&&y(S),t.defer?S=b((function(){g(t,(function(){S=null}))})):(g(t),S=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.scriptTags,l=t.styleTags,f=t.title,h=void 0===f?"":f,d=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,i,r),meta:C(c.TAG_NAMES.META,a,r),noscript:C(c.TAG_NAMES.NOSCRIPT,s,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,l,r),title:C(c.TAG_NAMES.TITLE,{title:h,titleAttributes:d},r)}},e.reducePropsToState=function(t){return{baseTag:p([c.TAG_PROPERTIES.HREF],t),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,t),defer:E(t,c.HELMET_PROPS.DEFER),encode:E(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,t),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:h(t),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=b,e.warn=v}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=d5d7a013bc6c1e2b6d7db819052c16d7efea5559-d44b6b4c4a028d914d9b.js.map