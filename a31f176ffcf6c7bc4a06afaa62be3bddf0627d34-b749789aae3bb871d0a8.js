(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2NuI":function(e,t,r){"use strict";r("pJf4"),r("sC2a");e.exports=function(e,t,r,n,i,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},"5I0T":function(e,t){e.exports=["fullstack","Full stack -websovelluskehitys","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},"6TT9":function(e,t,r){var n,i=r("96Jg"),o=r("DMoL"),a=r("MHQ9"),s={html:{},svg:{}};for(n in s.html=a.invertObject(i.DOMAttributeNames),i.Properties)s.html[n.toLowerCase()]=n;for(n in s.svg=a.invertObject(o.DOMAttributeNames),o.Properties)s.html[n]=n;e.exports={config:s,HTMLDOMPropertyConfig:i,SVGDOMPropertyConfig:o}},"76ZC":function(e,t,r){var n=r("GkXj"),i=r("QIE6"),o={decodeEntities:!0,lowerCaseAttributeNames:!1};e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return n(i(e,o),t)}},"7MhH":function(e,t,r){"use strict";r("Ll4R"),r("sC2a");var n,i,o,a=r("wJvl").isIE,s=/<([a-zA-Z]+[0-9]?)/,l=/<\/head>/i,u=/<\/body>/i,c=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,p=a(),f=a(9);if("function"==typeof window.DOMParser){var m=new window.DOMParser,d=f?"text/xml":"text/html";n=function(e,t){return t&&(e=["<",t,">",e,"</",t,">"].join("")),f&&(e=e.replace(c,"<$1$2$3/>")),m.parseFromString(e,d)}}if("object"==typeof document.implementation){var h=document.implementation.createHTMLDocument(p?"HTML_DOM_PARSER_TITLE":void 0);i=function(e,t){if(t)return h.documentElement.getElementsByTagName(t)[0].innerHTML=e,h;try{return h.documentElement.innerHTML=e,h}catch(r){if(n)return n(e)}}}var g=document.createElement("template");g.content&&(o=function(e){return g.innerHTML=e,g.content.childNodes});var v=i||n;e.exports=function(e){var t,r,i,a,c=e.match(s);switch(c&&c[1]&&(t=c[1].toLowerCase()),t){case"html":if(n)return r=n(e),l.test(e)||(i=r.getElementsByTagName("head")[0])&&i.parentNode.removeChild(i),u.test(e)||(i=r.getElementsByTagName("body")[0])&&i.parentNode.removeChild(i),r.getElementsByTagName("html");break;case"head":if(v)return a=v(e).getElementsByTagName("head"),u.test(e)?a[0].parentNode.childNodes:a;break;case"body":if(v)return a=v(e).getElementsByTagName("body"),l.test(e)?a[0].parentNode.childNodes:a;break;default:if(o)return o(e);if(v)return v(e,"body").getElementsByTagName("body")[0].childNodes}return[]}},"96Jg":function(e,t,r){"use strict";r("klQ5"),r("n7j8");var n=r("A9pt"),i=n.injection.MUST_USE_PROPERTY,o=n.injection.HAS_BOOLEAN_VALUE,a=n.injection.HAS_NUMERIC_VALUE,s=n.injection.HAS_POSITIVE_NUMERIC_VALUE,l=n.injection.HAS_OVERLOADED_BOOLEAN_VALUE,u={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+n.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:o,allowTransparency:0,alt:0,as:0,async:o,autoComplete:0,autoPlay:o,capture:o,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:i|o,cite:0,classID:0,className:0,cols:s,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:o,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:o,defer:o,dir:0,disabled:o,download:l,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:o,formTarget:0,frameBorder:0,headers:0,height:0,hidden:o,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:o,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:i|o,muted:i|o,name:0,nonce:0,noValidate:o,open:o,optimum:0,pattern:0,placeholder:0,playsInline:o,poster:0,preload:0,profile:0,radioGroup:0,readOnly:o,referrerPolicy:0,rel:0,required:o,reversed:o,role:0,rows:s,rowSpan:a,sandbox:0,scope:0,scoped:o,scrolling:0,seamless:o,selected:i|o,shape:0,size:s,sizes:0,span:s,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:a,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:o,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");("number"!==e.type||!1===e.hasAttribute("value")||e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e)&&e.setAttribute("value",""+t)}}};e.exports=u},A9pt:function(e,t,r){"use strict";var n=r("AsAr");r("2NuI");function i(e,t){return(e&t)===t}var o={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,injectDOMPropertyConfig:function(e){var t=o,r=e.Properties||{},a=e.DOMAttributeNamespaces||{},l=e.DOMAttributeNames||{},u=e.DOMPropertyNames||{},c=e.DOMMutationMethods||{};for(var p in e.isCustomAttribute&&s._isCustomAttributeFunctions.push(e.isCustomAttribute),r){s.properties.hasOwnProperty(p)&&n("48",p);var f=p.toLowerCase(),m=r[p],d={attributeName:f,attributeNamespace:null,propertyName:p,mutationMethod:null,mustUseProperty:i(m,t.MUST_USE_PROPERTY),hasBooleanValue:i(m,t.HAS_BOOLEAN_VALUE),hasNumericValue:i(m,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:i(m,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:i(m,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(d.hasBooleanValue+d.hasNumericValue+d.hasOverloadedBooleanValue<=1||n("50",p),l.hasOwnProperty(p)){var h=l[p];d.attributeName=h}a.hasOwnProperty(p)&&(d.attributeNamespace=a[p]),u.hasOwnProperty(p)&&(d.propertyName=u[p]),c.hasOwnProperty(p)&&(d.mutationMethod=c[p]),s.properties[p]=d}}},a=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:a,ATTRIBUTE_NAME_CHAR:a+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<s._isCustomAttributeFunctions.length;t++){if((0,s._isCustomAttributeFunctions[t])(e))return!0}return!1},injection:o};e.exports=s},AsAr:function(e,t,r){"use strict";r("pJf4"),e.exports=function(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);r+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var i=new Error(r);throw i.name="Invariant Violation",i.framesToPop=1,i}},DMoL:function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("JHok");var n="http://www.w3.org/1999/xlink",i="http://www.w3.org/XML/1998/namespace",o={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering",in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlns:0,xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},a={Properties:{},DOMAttributeNamespaces:{xlinkActuate:n,xlinkArcrole:n,xlinkHref:n,xlinkRole:n,xlinkShow:n,xlinkTitle:n,xlinkType:n,xmlBase:i,xmlLang:i,xmlSpace:i},DOMAttributeNames:{}};Object.keys(o).forEach((function(e){a.Properties[e]=0,o[e]&&(a.DOMAttributeNames[e]=o[e])})),e.exports=a},GkXj:function(e,t,r){r("pJf4"),r("sC2a");var n=r("q1tI"),i=r("qpZ2"),o=r("MHQ9");function a(e){return o.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&o.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,r){for(var o,s,l,u,c=[],p="function"==typeof(r=r||{}).replace,f=0,m=t.length;f<m;f++)if(o=t[f],p&&(s=r.replace(o),n.isValidElement(s)))m>1&&(s=n.cloneElement(s,{key:s.key||f})),c.push(s);else if("text"!==o.type){if(l=o.attribs,a(o)||(l=i(o.attribs)),u=null,"script"===o.type||"style"===o.type)o.children[0]&&(l.dangerouslySetInnerHTML={__html:o.children[0].data});else{if("tag"!==o.type)continue;"textarea"===o.name&&o.children[0]?l.defaultValue=o.children[0].data:o.children&&o.children.length&&(u=e(o.children,r))}m>1&&(l.key=f),c.push(n.createElement(o.name,l,u))}else c.push(o.data);return 1===c.length?c[0]:c}},HXzo:function(e,t,r){"use strict";r("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},MHQ9:function(e,t,r){r("HQhv"),r("sc67"),r("sC2a");var n=r("q1tI"),i=/-([a-z])/g,o=/^--[a-zA-Z0-9-]+$|^[^-]+$/;var a=n.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:a,camelCase:function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");return o.test(e)?e:e.toLowerCase().replace(i,(function(e,t){return t.toUpperCase()}))},invertObject:function(e,t){if(!e||"object"!=typeof e)throw new TypeError("First argument must be an object");var r,n,i="function"==typeof t,o={},a={};for(r in e)n=e[r],i&&(o=t(r,n))&&2===o.length?a[o[0]]=o[1]:"string"==typeof n&&(a[n]=r);return a},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}}},QIE6:function(e,t,r){"use strict";r("sC2a"),r("Ll4R");var n=r("7MhH"),i=r("wJvl"),o=i.formatDOM,a=i.isIE(9),s=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string.");if(!e)return[];var t,r=e.match(s);return r&&r[1]&&(t=r[1],a&&(e=e.replace(r[0],""))),o(n(e),null,t)}},UQpn:function(e,t,r){var n=r("yscf");e.exports=function(e,t){if(!e||"string"!=typeof e)return null;for(var r,i,o,a=n("p{"+e+"}").stylesheet.rules[0].declarations,s=null,l="function"==typeof t,u=0,c=a.length;u<c;u++)i=(r=a[u]).property,o=r.value,l?t(i,o,r):o&&(s||(s={}),s[i]=o);return s}},lFjb:function(e,t,r){"use strict";var n=r("P8UN"),i=r("5SQf"),o=r("1Llc"),a=r("kiRH"),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(l||!r("h/qr")(s)),"Array",{lastIndexOf:function(e){if(l)return s.apply(this,arguments)||0;var t=i(this),r=a(t.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,o(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in t&&t[n]===e)return n||0;return-1}})},qpZ2:function(e,t,r){var n=r("A9pt"),i=r("6TT9"),o=r("UQpn"),a=r("MHQ9"),s=i.config,l=i.HTMLDOMPropertyConfig.isCustomAttribute;n.injection.injectDOMPropertyConfig(i.HTMLDOMPropertyConfig),e.exports=function(e){e=e||{};var t,r,i,u={};for(t in e)r=e[t],l(t)?u[t]=r:(i=s.html[t.toLowerCase()])?n.properties.hasOwnProperty(i)&&n.properties[i].hasBooleanValue?u[i]=!0:u[i]=r:(i=s.svg[t])?u[i]=r:a.PRESERVE_CUSTOM_ATTRIBUTES&&(u[t]=r);return null!=e.style&&(u.style=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string.");var t={};return o(e,(function(e,r){e&&r&&(t[a.camelCase(e)]=r)})),t}(e.style)),u}},wJvl:function(e,t,r){"use strict";function n(e){for(var t,r={},n=0,i=e.length;n<i;n++)r[(t=e[n]).name]=t.value;return r}r("sc67"),r("pJf4"),e.exports={formatAttributes:n,formatDOM:function e(t,r,i){r=r||null;for(var o,a,s,l=[],u=0,c=t.length;u<c;u++){switch(o=t[u],s={next:null,prev:l[u-1]||null,parent:r},(a=l[u-1])&&(a.next=s),0!==o.nodeName.indexOf("#")&&(s.name=o.nodeName.toLowerCase(),s.attribs={},o.attributes&&o.attributes.length&&(s.attribs=n(o.attributes))),o.nodeType){case 1:"script"===s.name||"style"===s.name?s.type=s.name:s.type="tag",s.children=e(o.childNodes,s);break;case 3:s.type="text",s.data=o.nodeValue;break;case 8:s.type="comment",s.data=o.nodeValue}l.push(s)}return i&&(l.unshift({name:i.substring(0,i.indexOf(" ")).toLowerCase(),data:i,type:"directive",next:l[0]?l[0]:null,prev:null,parent:r}),l[1]&&(l[1].prev=l[0])),l},isIE:function(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},yscf:function(e,t,r){r("R48M"),r("JHok"),r("MIFh"),r("HXzo"),r("klQ5"),r("sC2a"),r("HQhv"),r("AqHK"),r("lFjb"),r("Ll4R");var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;function i(e){return e?e.replace(/^\s+|\s+$/g,""):""}e.exports=function(e,t){t=t||{};var r=1,o=1;function a(e){var t=e.match(/\n/g);t&&(r+=t.length);var n=e.lastIndexOf("\n");o=~n?e.length-n:o+e.length}function s(){var e={line:r,column:o};return function(t){return t.position=new l(e),h(),t}}function l(e){this.start=e,this.end={line:r,column:o},this.source=t.source}l.prototype.content=e;var u=[];function c(n){var i=new Error(t.source+":"+r+":"+o+": "+n);if(i.reason=n,i.filename=t.source,i.line=r,i.column=o,i.source=e,!t.silent)throw i;u.push(i)}function p(){return d(/^{\s*/)}function f(){return d(/^}/)}function m(){var t,r=[];for(h(),g(r);e.length&&"}"!=e.charAt(0)&&(t=O()||C());)!1!==t&&(r.push(t),g(r));return r}function d(t){var r=t.exec(e);if(r){var n=r[0];return a(n),e=e.slice(n.length),r}}function h(){d(/^\s*/)}function g(e){var t;for(e=e||[];t=v();)!1!==t&&e.push(t);return e}function v(){var t=s();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var r=2;""!=e.charAt(r)&&("*"!=e.charAt(r)||"/"!=e.charAt(r+1));)++r;if(r+=2,""===e.charAt(r-1))return c("End of comment missing");var n=e.slice(2,r-2);return o+=2,a(n),e=e.slice(r),o+=2,t({type:"comment",comment:n})}}function y(){var e=d(/^([^{]+)/);if(e)return i(e[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function k(){var e=s(),t=d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=i(t[0]),!d(/^:\s*/))return c("property missing ':'");var r=d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),o=e({type:"declaration",property:t.replace(n,""),value:r?i(r[0]).replace(n,""):""});return d(/^[;\s]*/),o}}function b(){var e,t=[];if(!p())return c("missing '{'");for(g(t);e=k();)!1!==e&&(t.push(e),g(t));return f()?t:c("missing '}'")}function A(){for(var e,t=[],r=s();e=d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),d(/^,\s*/);if(t.length)return r({type:"keyframe",values:t,declarations:b()})}var E,x=M("import"),w=M("charset"),T=M("namespace");function M(e){var t=new RegExp("^@"+e+"\\s*([^;]+);");return function(){var r=s(),n=d(t);if(n){var i={type:e};return i[e]=n[1].trim(),r(i)}}}function O(){if("@"==e[0])return function(){var e=s();if(t=d(/^@([-\w]+)?keyframes\s*/)){var t,r=t[1];if(!(t=d(/^([-\w]+)\s*/)))return c("@keyframes missing name");var n,i=t[1];if(!p())return c("@keyframes missing '{'");for(var o=g();n=A();)o.push(n),o=o.concat(g());return f()?e({type:"keyframes",name:i,vendor:r,keyframes:o}):c("@keyframes missing '}'")}}()||function(){var e=s(),t=d(/^@media *([^{]+)/);if(t){var r=i(t[1]);if(!p())return c("@media missing '{'");var n=g().concat(m());return f()?e({type:"media",media:r,rules:n}):c("@media missing '}'")}}()||function(){var e=s(),t=d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(t)return e({type:"custom-media",name:i(t[1]),media:i(t[2])})}()||function(){var e=s(),t=d(/^@supports *([^{]+)/);if(t){var r=i(t[1]);if(!p())return c("@supports missing '{'");var n=g().concat(m());return f()?e({type:"supports",supports:r,rules:n}):c("@supports missing '}'")}}()||x()||w()||T()||function(){var e=s(),t=d(/^@([-\w]+)?document *([^{]+)/);if(t){var r=i(t[1]),n=i(t[2]);if(!p())return c("@document missing '{'");var o=g().concat(m());return f()?e({type:"document",document:n,vendor:r,rules:o}):c("@document missing '}'")}}()||function(){var e=s();if(d(/^@page */)){var t=y()||[];if(!p())return c("@page missing '{'");for(var r,n=g();r=k();)n.push(r),n=n.concat(g());return f()?e({type:"page",selectors:t,declarations:n}):c("@page missing '}'")}}()||function(){var e=s();if(d(/^@host\s*/)){if(!p())return c("@host missing '{'");var t=g().concat(m());return f()?e({type:"host",rules:t}):c("@host missing '}'")}}()||function(){var e=s();if(d(/^@font-face\s*/)){if(!p())return c("@font-face missing '{'");for(var t,r=g();t=k();)r.push(t),r=r.concat(g());return f()?e({type:"font-face",declarations:r}):c("@font-face missing '}'")}}()}function C(){var e=s(),t=y();return t?(g(),e({type:"rule",selectors:t,declarations:b()})):c("selector missing")}return function e(t,r){var n=t&&"string"==typeof t.type,i=n?t:r;for(var o in t){var a=t[o];Array.isArray(a)?a.forEach((function(t){e(t,i)})):a&&"object"==typeof a&&e(a,i)}n&&Object.defineProperty(t,"parent",{configurable:!0,writable:!0,enumerable:!1,value:r||null});return t}((E=m(),{type:"stylesheet",stylesheet:{source:t.source,rules:E,parsingErrors:u}}))}}}]);
//# sourceMappingURL=a31f176ffcf6c7bc4a06afaa62be3bddf0627d34-b749789aae3bb871d0a8.js.map