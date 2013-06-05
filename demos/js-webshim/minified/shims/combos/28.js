webshims.register("dom-extend",function(e,t,r,n,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,r,n,a,i){return i?f.call(e(t)):f.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var n,a=0;null!=(n=r[a]);a++)try{e(n).triggerHandler("remove")}catch(i){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var n=e.isFunction(t);return this.each(function(i){if(r=this,1===r.nodeType)if(n){var o=t.call(r,i,e.prop(r,"value",a,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,a,i){return i||(i=n),e(i)[a?"onTrigger":"on"](t,r),this.on("remove",function(n){n.originalEvent||e(i).off(t,r)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,n){if(t=t.jquery?t[0]:t,!t)return n||{};var i=e.data(t,m);return n!==a&&(i||(i=e.data(t,m,{})),r&&(i[r]=n)),r?i&&i[r]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var n=v(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,r)&&r.push(a)}),this.pushStack(r)}}),e.Tween.propHooks._default&&e.css&&function(){var r=!1;try{r="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(n){t.error(n)}var a=r?function(t,r){return e.css(t,r,!1,"")}:function(t,r){return e.css(t,r,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var r;return null==t.elem[t.prop]&&!u[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(r=a(t.elem,t.prop),r&&"auto"!==r?r:0):u[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):u[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(r){l[r]=e[r],e[r]=function(t,n,i,o,s){var d="val"==o,f=d?h:l[r];if(!t||!u[n]||1!==t.nodeType||!d&&o&&"attr"==r&&e.attrFn[n])return f(t,n,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||i!==!1&&null!==i?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(i===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&i===!0&&(i=n),g=m.set.call(t,i)),"value"==n&&(m.isVal=v)}else g=f(t,n,i,o,s);if((i!==a||"removeAttr"===w)&&p[y]&&p[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,p[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,i,T,d?"val":w,r)})}return g},d[r]=function(e,n,i){c[e]||(c[e]={}),c[e][n]||(c[e][n]={});var o=c[e][n][r],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==r&&"value"==n?function(e){var t=this;return i.isVal?h(t,n,e,!1,0===arguments.length):l[r](t,n,e)}:"prop"==r&&"value"==e&&i.value.apply?function(){var e=l[r](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[r](this,n,e)}};c[e][n][r]=i,i.value===a&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(n.createElement("foobar")),r=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(a&&(l=n.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&r.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(n,i){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+r),a)}),o=null});var i,o=e([]),s=function(t,a){r[t]?r[t].push(a):r[t]=[a],e.isDOMReady&&(i||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(n.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,n){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=n})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var n=r.prop("id");return n||(t++,n="ID-"+t,r.eq(0).prop("id",n)),n}}(),implement:function(e,r){var n=v(e,"implemented")||v(e,"implemented",{});return n[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(n[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,n){var a,i=(e._data(t,"events")||{})[r];i&&i.length>1&&(a=i.pop(),n||(n="bind"),"bind"==n&&i.delegateCount?i.splice(i.delegateCount,0,a):i.unshift(a)),t=null},addShadowDom:function(){var a,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(r).width(),l=e(r).width();if(l==i&&a==o)return;i=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=n.body,a=n.documentElement;s[t]=function(){return Math.max(r["scroll"+e],a["scroll"+e],r["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,n,a){if(r&&n){a=a||{},r.jquery&&(r=r[0]),n.jquery&&(n=n[0]);var i=e.data(r,m)||e.data(r,m,{}),o=e.data(n,m)||e.data(n,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=n,e(r).on("remove",function(t){t.originalEvent||e(n).remove()}),i.hasShadow=n,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=i.shadowData={nativeElement:r,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(r,n){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(i){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,n){"string"==typeof n&&(n=n.split(s)),n.forEach(function(n){t.defineNodeNamesProperty(r,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(r,n,a){return u[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(i){var o=a[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](r,n,o),"*"!=r&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(r,n,o),a[i]=o)}),a.initAttr&&y.content(r,n),a},defineNodeNameProperties:function(e,r,n,a){for(var i in r)!a&&r[i].initAttr&&y.createTmpCache(e),n&&(r[i][n]||(r[i][n]={},["value","set","get"].forEach(function(e){e in r[i]&&(r[i][n][e]=r[i][e],delete r[i][e])}))),r[i]=t.defineNodeNameProperty(e,i,r[i]);return a||y.flushTmpCache(),r},createElement:function(r,n,a){var i;return e.isFunction(n)&&(n={after:n}),y.createTmpCache(r),n.before&&y.createElement(r,n.before),a&&(i=t.defineNodeNameProperties(r,a,!1,!0)),n.after&&y.createElement(r,n.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,r,n,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof r&&(r=r.split(s)),n.initAttr&&y.createTmpCache(e),r.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),n.set&&(a&&(n.set.only=a),p[e][t].push(n.set)),n.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,n,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(r,n,{attr:{set:function(e){this.setAttribute(n,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var n;return r===a?(n=e.attributes[t]||{},r=n.specified?n.value:null,null==r?a:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),a)}},activeLang:function(){var r,n,a=[],i={},s=/:\/\/|^\.*\//,l=function(r,n,a){var i;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(r.loading=!0,i=a.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+n+".js",function(){r.langObj[n]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[n]&&c(r,!0),r.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(r,n,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==n){var a=o[e.module].options;e.langObj[r]||n&&e.langObj[n]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[n],r),u(e.module)):t||l(e,r,a)||l(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),u(e.module))}},d=function(t){return"string"==typeof t&&t!==r?(r=t,n=r.split("-")[0],r==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(r,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),r};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,n,a,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,n,a,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(a,i){if(e.each(r,function(t,r){for(var o=e(t,a).add(i.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],r)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(jQuery,document),webshims.register("mediaelement-jaris",function(e,t,r,n,a,i){"use strict";var o=t.mediaelement,s=r.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in r&&l,p={paused:!0,ended:!1,currentSrc:"",duration:r.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},f=Object.keys(p),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},p,h),v=function(e){try{e.nodeName}catch(r){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},g=function(t,r){r=e.Event(r),r.preventDefault(),e.event.trigger(r,a,t)},y=i.playerPath||t.cfg.basePath+"swf/"+(i.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(i.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(i.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(i.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,r){var n,a;if(null==r)try{n=t.api.api_get("isPlaying")}catch(i){}else n=r;n==t.paused&&(t.paused=!n,a=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,a),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var r,n=t.duration;t.duration=e.duration,n==t.duration||isNaN(t.duration)||t._calledMeta&&2>(r=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},r>50?0:r>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,r){if(r.ended&&(r.ended=!1),r.duration&&!isNaN(r.duration)){var n=t.loaded/t.total;n>.02&&.2>n?b(3,r):n>.2&&(n>.99&&(r.networkState=1),b(4,r)),r._bufferedEnd&&r._bufferedEnd>n&&(r._bufferedStart=r.currentTime||0),r._bufferedEnd=n,r.buffered.length=1,e.event.trigger("progress",a,r._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var r=function(e){var t=!0;try{e.api.api_get("volume")}catch(r){t=!1}return t};return function(n,i){var o=0,s=function(){return o>9?(i.tryedReframeing=0,a):(o++,i.tryedReframeing++,r(i)?(i.wasSwfReady=!0,i.tryedReframeing=0,x(i),E(i)):6>i.tryedReframeing?3>i.tryedReframeing?(i.reframeTimer=setTimeout(s,9),i.shadowElem.css({overflow:"visible"}),setTimeout(function(){i.shadowElem.css({overflow:"hidden"})},1)):(i.shadowElem.css({overflow:"hidden"}),e(i._elem).mediaLoad()):(clearTimeout(i.reframeTimer),t.error("reframing error")),a)};i&&i.api&&(i.tryedReframeing||(i.tryedReframeing=0),clearTimeout(w),clearTimeout(i.reframeTimer),i.shadowElem.removeClass("flashblocker-assumed"),o?i.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var E=function(e){var r,n=e.actionQueue.length,a=0;if(n&&"third"==e.isActive)for(;e.actionQueue.length&&n>a;){a++,r=e.actionQueue.shift();try{e.api[r.fn].apply(e.api,r.args)}catch(i){t.warn(i)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(r){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(l){var k={play:1,playing:1},A=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=A.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(r){var n=t.data(r.target,"mediaelement");if(n){var a=r.originalEvent&&r.originalEvent.type===r.type;a==("third"==n.activating)&&(r.stopImmediatePropagation(),k[r.type]&&n.isActive!=n.activating&&e(r.target).pause())}};N=function(r){e(r).off(C).on(C,S),A.forEach(function(e){t.moveToFirstEvent(r,e)})},N(n)}o.setActive=function(r,n,a){if(a||(a=t.data(r,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var i=t.data(r,"shadowData");a.activating=n,e(r).pause(),a.isActive=n,"third"==n?(i.shadowElement=i.shadowFocusElement=a.shadowElem[0],e(r).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(r).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),i.shadowElement=i.shadowFocusElement=!1),e(r).trigger("mediaelementapichange")}};var _=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(r){if(r){var n=t,a=r.networkState;for(b(0,r),clearTimeout(r._durationChangeTimer);--n>-1;)delete r[e[n]];r.actionQueue=[],r.buffered.length=0,a&&g(r._elem,"emptied")}}}(),P=function(t,r){var n,a=t._elem,i=t.shadowElem;e(a)[r?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||r?i.css({width:a.style.width||(n=e(a).attr("width"))&&n+"px"||e(a).width(),height:a.style.height||(n=e(a).attr("height"))&&n+"px"||e(a).height()}):i.css({width:0,height:0})},D=function(){var t={"":1,auto:1};return function(r){var n=e.attr(r,"preload");return null==n||"none"==n||e.prop(r,"autoplay")?!1:(n=e.prop(r,"preload"),!!(t[n]||"metadata"==n&&e(r).is(".preload-in-doubt, video:not([poster])")))}}(),O={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(O.A,"%26").replace(O.a,"%26").replace(O.e,"%3D").replace(O.q,"%3F"):e};o.createSWF=function(r,n,d){if(!u)return setTimeout(function(){e(r).mediaLoad()},1),a;1>c?c=1:c++,d||(d=t.data(r,"mediaelement")),(e.attr(r,"height")||e.attr(r,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var p,f="audio/rtmp"==n.type||"video/rtmp"==n.type,h=e.extend({},i.vars,{poster:F(e.attr(r,"poster")&&e.prop(r,"poster")||""),source:F(n.streamId||n.srcProp),server:F(n.server||"")}),v=e(r).data("vars")||{},g=e.prop(r,"controls"),b="jarisplayer-"+t.getID(r),E=e.extend({},i.params,e(r).data("params")),x=r.nodeName.toLowerCase(),k=e.extend({},i.attrs,{name:b,id:b},e(r).data("attrs")),A=function(){P(d,e.prop(r,"controls"))};d&&d.swfCreated?(o.setActive(r,"third",d),d.currentSrc=n.srcProp,d.shadowElem.html('<div id="'+b+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,_(d)):(p=e('<div class="polyfill-'+x+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(r,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:x},_elem:{value:r},currentSrc:{value:n.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),P(d,g),p.insertBefore(r),l&&e.extend(d,{volume:e.prop(r,"volume"),muted:e.prop(r,"muted"),paused:e.prop(r,"paused")}),t.addShadowDom(r,p),t.data(r,"mediaelement")||t.data(r,"mediaelement",d),N(r),o.setActive(r,"third",d),e(r).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A).on("remove",function(e){!e.originalEvent&&o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r&&(delete o.jarisEvent[d.id],clearTimeout(w),clearTimeout(d.flashBlock)),p.remove()})),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(D(r)&&d.api.api_preload(),T.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&T.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,d),T[e.type]&&T[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=r),e.extend(h,{id:b,evtId:d.id,controls:""+g,autostart:"false",nodename:x},v),f?h.streamtype="rtmp":"audio/mpeg"==n.type||"audio/mp3"==n.type?(h.type="audio",h.streamtype="file"):"video/youtube"==n.type&&(h.streamtype="youtube"),i.changeSWF(h,r,n,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,h,E,k,function(n){if(n.success){var a=function(){(!n.ref.parentNode&&p[0].parentNode||"none"==n.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(r).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=n.ref,g||e(n.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(a,99),w||(clearTimeout(w),w=setTimeout(function(){a();var r=e(n.ref);r[0].offsetWidth>1&&r[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>r[0].offsetWidth||2>r[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),r=null},8e3))}})};var M=function(e,t,r,n){return n=n||v(e),n?(n.api&&n.api[t]?n.api[t].apply(n.api,r||[]):(n.actionQueue.push({fn:t,args:r}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(r){var n,a={},i=function(e){("audio"!=r||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=v(this);return t?t[e]:l&&n[e].prop._supget?n[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){i(e),delete a[e].writeable,a[e].set=t};o("volume",function(e){var r=v(this);if(r)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),M(this,"api_volume",[e],r),r.volume!=e&&(r.volume=e,g(r._elem,"volumechange")),r=null);else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,M(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||M(this,"api_seek",[e],t);else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),M(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(i),t.onNodeNamesPropertyModify(r,"controls",function(t,n){var a=v(this);e(this)[n?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==r&&P(a,n),M(this,"api_controls",[n],a))}),t.onNodeNamesPropertyModify(r,"preload",function(){var r,n,a;D(this)&&(r=v(this),r?M(this,"api_preload",[],r):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(a=this,n=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){e(a).mediaLoad()},9)))}),n=t.defineNodeNameProperties(r,a,"prop")}),u&&e.cleanData){var j=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,r;if(e&&(r=e.length)&&c)for(t=0;r>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(n){}}return j.apply(this,arguments)}}l||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});