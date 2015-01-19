/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);
/*
@desc
	Base64 encoder and decoder write by JavaScript. This code was a plugin of 
	jQeury, you must load jQuery library first if you want to use this code.
	 - After encode, you can decode it with PHP, and vice versa
	 - Support Unicode library, but only worked on chinese
	This code was collected from the network, I just rewrite it as the plugin 
	of jQuery, the copyright belongs to original work(s).

@Version	1.1 build 20110323
@Author	Hpyer <coolhpy@163.com>
@Home	http://hpyer.cn/codes/jquery-plugin-base64-encode-and-decode
@Usage
	Use UNICODE library or not: $.base64.is_unicode = false/true;
	Encode: $.base64.encode('$.base64');
	Decode: $.base64.decode('JC5iYXNlNjQ=');
@License	Free
*/

jQuery.base64={is_unicode:false,encode:function(c){if(this.is_unicode){c=this._u2a(c)}var a="";var k,h,f="";var j,g,e,d="";var b=0;while(b<c.length){k=c.charCodeAt(b++);h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a=a+this._keys.charAt(j)+this._keys.charAt(g)+this._keys.charAt(e)+this._keys.charAt(d);k=h=f="";j=g=e=d=""}return a},decode:function(d){var b="";var l,j,g="";var k,h,f,e="";var c=0;if(d.length%4!=0){return""}var a=/[^A-Za-z0-9\+\/\=]/g;if(a.exec(d)){return""}while(c<d.length){k=this._keys.indexOf(d.charAt(c++));h=this._keys.indexOf(d.charAt(c++));f=this._keys.indexOf(d.charAt(c++));e=this._keys.indexOf(d.charAt(c++));l=(k<<2)|(h>>4);j=((h&15)<<4)|(f>>2);g=((f&3)<<6)|e;b=b+String.fromCharCode(l);if(f!=64){b+=String.fromCharCode(j)}if(e!=64){b+=String.fromCharCode(g)}l=j=g="";k=h=f=e=""}if(this.is_unicode){b=this._a2u(b)}return b},_keys:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_unicode:function(){return"00A4,00A7,00A8,00B0,00B1,00B7,00D7,00E0,00E1,00E8,00E9,00EA,00EC,00ED,00F2,00F3,00F7,00F9,00FA,00FC,0101,0113,011B,012B,014D,016B,01CE,01D0,01D2,01D4,01D6,01D8,01DA,01DC,02C7,02C9,0391,0392,0393,0394,0395,0396,0397,0398,0399,039A,039B,039C,039D,039E,039F,03A0,03A1,03A3,03A4,03A5,03A6,03A7,03A8,03A9,03B1,03B2,03B3,03B4,03B5,03B6,03B7,03B8,03B9,03BA,03BB,03BC,03BD,03BE,03BF,03C0,03C1,03C3,03C4,03C5,03C6,03C7,03C8,03C9,0401,0410,0411,0412,0413,0414,0415,0416,0417,0418,0419,041A,041B,041C,041D,041E,041F,0420,0421,0422,0423,0424,0425,0426,0427,0428,0429,042A,042B,042C,042D,042E,042F,0430,0431,0432,0433,0434,0435,0436,0437,0438,0439,043A,043B,043C,043D,043E,043F,0440,0441,0442,0443,0444,0445,0446,0447,0448,0449,044A,044B,044C,044D,044E,044F,0451,2014,2016,2018,2019,201C,201D,2026,2030,2032,2033,203B,2103,2116,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,216A,216B,2190,2191,2192,2193,2208,220F,2211,221A,221D,221E,2220,2225,2227,2228,2229,222A,222B,222E,2234,2235,2236,2237,223D,2248,224C,2260,2261,2264,2265,226E,226F,2299,22A5,2312,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2474,2475,2476,2477,2478,2479,247A,247B,247C,247D,247E,247F,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,248A,248B,248C,248D,248E,248F,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,249A,249B,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,250A,250B,250C,250D,250E,250F,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,251A,251B,251C,251D,251E,251F,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,252A,252B,252C,252D,252E,252F,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,253A,253B,253C,253D,253E,253F,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,254A,254B,25A0,25A1,25B2,25B3,25C6,25C7,25CB,25CE,25CF,2605,2606,2640,2642,3000,3001,3002,3003,3005,3008,3009,300A,300B,300C,300D,300E,300F,3010,3011,3013,3014,3015,3016,3017,3041,3042,3043,3044,3045,3046,3047,3048,3049,304A,304B,304C,304D,304E,304F,3050,3051,3052,3053,3054,3055,3056,3057,3058,3059,305A,305B,305C,305D,305E,305F,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,306A,306B,306C,306D,306E,306F,3070,3071,3072,3073,3074,3075,3076,3077,3078,3079,307A,307B,307C,307D,307E,307F,3080,3081,3082,3083,3084,3085,3086,3087,3088,3089,308A,308B,308C,308D,308E,308F,3090,3091,3092,3093,30A1,30A2,30A3,30A4,30A5,30A6,30A7,30A8,30A9,30AA,30AB,30AC,30AD,30AE,30AF,30B0,30B1,30B2,30B3,30B4,30B5,30B6,30B7,30B8,30B9,30BA,30BB,30BC,30BD,30BE,30BF,30C0,30C1,30C2,30C3,30C4,30C5,30C6,30C7,30C8,30C9,30CA,30CB,30CC,30CD,30CE,30CF,30D0,30D1,30D2,30D3,30D4,30D5,30D6,30D7,30D8,30D9,30DA,30DB,30DC,30DD,30DE,30DF,30E0,30E1,30E2,30E3,30E4,30E5,30E6,30E7,30E8,30E9,30EA,30EB,30EC,30ED,30EE,30EF,30F0,30F1,30F2,30F3,30F4,30F5,30F6,3105,3106,3107,3108,3109,310A,310B,310C,310D,310E,310F,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,311A,311B,311C,311D,311E,311F,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,4E00,4E01,4E03,4E07,4E08,4E09,4E0A,4E0B,4E0C,4E0D,4E0E,4E10,4E11,4E13,4E14,4E15,4E16,4E18,4E19,4E1A,4E1B,4E1C,4E1D,4E1E,4E22,4E24,4E25,4E27,4E28,4E2A,4E2B,4E2C,4E2D,4E30,4E32,4E34,4E36,4E38,4E39,4E3A,4E3B,4E3D,4E3E,4E3F,4E43,4E45,4E47,4E48,4E49,4E4B,4E4C,4E4D,4E4E,4E4F,4E50,4E52,4E53,4E54,4E56,4E58,4E59,4E5C,4E5D,4E5E,4E5F,4E60,4E61,4E66,4E69,4E70,4E71,4E73,4E7E,4E86,4E88,4E89,4E8B,4E8C,4E8D,4E8E,4E8F,4E91,4E92,4E93,4E94,4E95,4E98,4E9A,4E9B,4E9F,4EA0,4EA1,4EA2,4EA4,4EA5,4EA6,4EA7,4EA8,4EA9,4EAB,4EAC,4EAD,4EAE,4EB2,4EB3,4EB5,4EBA,4EBB,4EBF,4EC0,4EC1,4EC2,4EC3,4EC4,4EC5,4EC6,4EC7,4EC9,4ECA,4ECB,4ECD,4ECE,4ED1,4ED3,4ED4,4ED5,4ED6,4ED7,4ED8,4ED9,4EDD,4EDE,4EDF,4EE1,4EE3,4EE4,4EE5,4EE8,4EEA,4EEB,4EEC,4EF0,4EF2,4EF3,4EF5,4EF6,4EF7,4EFB,4EFD,4EFF,4F01,4F09,4F0A,4F0D,4F0E,4F0F,4F10,4F11,4F17,4F18,4F19,4F1A,4F1B,4F1E,4F1F,4F20,4F22,4F24,4F25,4F26,4F27,4F2A,4F2B,4F2F,4F30,4F32,4F34,4F36,4F38,4F3A,4F3C,4F3D,4F43,4F46,4F4D,4F4E,4F4F,4F50,4F51,4F53,4F55,4F57,4F58,4F59,4F5A,4F5B,4F5C,4F5D,4F5E,4F5F,4F60,4F63,4F64,4F65,4F67,4F69,4F6C,4F6F,4F70,4F73,4F74,4F76,4F7B,4F7C,4F7E,4F7F,4F83,4F84,4F88,4F89,4F8B,4F8D,4F8F,4F91,4F94,4F97,4F9B,4F9D,4FA0,4FA3,4FA5,4FA6,4FA7,4FA8,4FA9,4FAA,4FAC,4FAE,4FAF,4FB5,4FBF,4FC3,4FC4,4FC5,4FCA,4FCE,4FCF,4FD0,4FD1,4FD7,4FD8,4FDA,4FDC,4FDD,4FDE,4FDF,4FE1,4FE3,4FE6,4FE8,4FE9,4FEA,4FED,4FEE,4FEF,4FF1,4FF3,4FF8,4FFA,4FFE,500C,500D,500F,5012,5014,5018,5019,501A,501C,501F,5021,5025,5026,5028,5029,502A,502C,502D,502E,503A,503C,503E,5043,5047,5048,504C,504E,504F,5055,505A,505C,5065,506C,5076,5077,507B,507E,507F,5080,5085,5088,508D,50A3,50A5,50A7,50A8,50A9,50AC,50B2,50BA,50BB,50CF,50D6,50DA,50E6,50E7,50EC,50ED,50EE,50F3,50F5,50FB,5106,5107,510B,5112,5121,513F,5140,5141,5143,5144,5145,5146,5148,5149,514B,514D,5151,5154,5155,5156,515A,515C,5162,5165,5168,516B,516C,516D,516E,5170,5171,5173,5174,5175,5176,5177,5178,5179,517B,517C,517D,5180,5181,5182,5185,5188,5189,518C,518D,5192,5195,5196,5197,5199,519B,519C,51A0,51A2,51A4,51A5,51AB,51AC,51AF,51B0,51B1,51B2,51B3,51B5,51B6,51B7,51BB,51BC,51BD,51C0,51C4,51C6,51C7,51C9,51CB,51CC,51CF,51D1,51DB,51DD,51E0,51E1,51E4,51EB,51ED,51EF,51F0,51F3,51F5,51F6,51F8,51F9,51FA,51FB,51FC,51FD,51FF,5200,5201,5202,5203,5206,5207,5208,520A,520D,520E,5211,5212,5216,5217,5218,5219,521A,521B,521D,5220,5224,5228,5229,522B,522D,522E,5230,5233,5236,5237,5238,5239,523A,523B,523D,523F,5240,5241,5242,5243,524A,524C,524D,5250,5251,5254,5256,525C,525E,5261,5265,5267,5269,526A,526F,5272,527D,527F,5281,5282,5288,5290,5293,529B,529D,529E,529F,52A0,52A1,52A2,52A3,52A8,52A9,52AA,52AB,52AC,52AD,52B1,52B2,52B3,52BE,52BF,52C3,52C7,52C9,52CB,52D0,52D2,52D6,52D8,52DF,52E4,52F0,52F9,52FA,52FE,52FF,5300,5305,5306,5308,530D,530F,5310,5315,5316,5317,5319,531A,531D,5320,5321,5323,5326,532A,532E,5339,533A,533B,533E,533F,5341,5343,5345,5347,5348,5349,534A,534E,534F,5351,5352,5353,5355,5356,5357,535A,535C,535E,535F,5360,5361,5362,5363,5364,5366,5367,5369,536B,536E,536F,5370,5371,5373,5374,5375,5377,5378,537A,537F,5382,5384,5385,5386,5389,538B,538C,538D,5395,5398,539A,539D,539F,53A2,53A3,53A5,53A6,53A8,53A9,53AE,53B6,53BB,53BF,53C1,53C2,53C8,53C9,53CA,53CB,53CC,53CD,53D1,53D4,53D6,53D7,53D8,53D9,53DB,53DF,53E0,53E3,53E4,53E5,53E6,53E8,53E9,53EA,53EB,53EC,53ED,53EE,53EF,53F0,53F1,53F2,53F3,53F5,53F6,53F7,53F8,53F9,53FB,53FC,53FD,5401,5403,5404,5406,5408,5409,540A,540C,540D,540E,540F,5410,5411,5412,5413,5415,5416,5417,541B,541D,541E,541F,5420,5421,5423,5426,5427,5428,5429,542B,542C,542D,542E,542F,5431,5432,5434,5435,5438,5439,543B,543C,543E,5440,5443,5446,5448,544A,544B,5450,5452,5453,5454,5455,5456,5457,5458,5459,545B,545C,5462,5464,5466,5468,5471,5472,5473,5475,5476,5477,5478,547B,547C,547D,5480,5482,5484,5486,548B,548C,548E,548F,5490,5492,5494,5495,5496,5499,549A,549B,549D,54A3,54A4,54A6,54A7,54A8,54A9,54AA,54AB,54AC,54AD,54AF,54B1,54B3,54B4,54B8,54BB,54BD,54BF,54C0,54C1,54C2,54C4,54C6,54C7,54C8,54C9,54CC,54CD,54CE,54CF,54D0,54D1,54D2,54D3,54D4,54D5,54D7,54D9,54DA,54DC,54DD,54DE,54DF,54E5,54E6,54E7,54E8,54E9,54EA,54ED,54EE,54F2,54F3,54FA,54FC,54FD,54FF,5501,5506,5507,5509,550F,5510,5511,5514,551B,5520,5522,5523,5524,5527,552A,552C,552E,552F,5530,5531,5533,5537,553C,553E,553F,5541,5543,5544,5546,5549,554A,5550,5555,5556,555C,5561,5564,5565,5566,5567,556A,556C,556D,556E,5575,5576,5577,5578,557B,557C,557E,5580,5581,5582,5583,5584,5587,5588,5589,558A,558B,558F,5591,5594,5598,5599,559C,559D,559F,55A7,55B1,55B3,55B5,55B7,55B9,55BB,55BD,55BE,55C4,55C5,55C9,55CC,55CD,55D1,55D2,55D3,55D4,55D6,55DC,55DD,55DF,55E1,55E3,55E4,55E5,55E6,55E8,55EA,55EB,55EC,55EF,55F2,55F3,55F5,55F7,55FD,55FE,5600,5601,5608,5609,560C,560E,560F,5618,561B,561E,561F,5623,5624,5627,562C,562D,5631,5632,5634,5636,5639,563B,563F,564C,564D,564E,5654,5657,5658,5659,565C,5662,5664,5668,5669,566A,566B,566C,5671,5676,567B,567C,5685,5686,568E,568F,5693,56A3,56AF,56B7,56BC,56CA,56D4,56D7,56DA,56DB,56DD,56DE,56DF,56E0,56E1,56E2,56E4,56EB,56ED,56F0,56F1,56F4,56F5,56F9,56FA,56FD,56FE,56FF,5703,5704,5706,5708,5709,570A,571C,571F,5723,5728,5729,572A,572C,572D,572E,572F,5730,5733,5739,573A,573B,573E,5740,5742,5747,574A,574C,574D,574E,574F,5750,5751,5757,575A,575B,575C,575D,575E,575F,5760,5761,5764,5766,5768,5769,576A,576B,576D,576F,5773,5776,5777,577B,577C,5782,5783,5784,5785,5786,578B,578C,5792,5793,579B,57A0,57A1,57A2,57A3,57A4,57A6,57A7,57A9,57AB,57AD,57AE,57B2,57B4,57B8,57C2,57C3,57CB,57CE,57CF,57D2,57D4,57D5,57D8,57D9,57DA,57DD,57DF,57E0,57E4,57ED,57EF,57F4,57F8,57F9,57FA,57FD,5800,5802,5806,5807,580B,580D,5811,5815,5819,581E,5820,5821,5824,582A,5830,5835,5844,584C,584D,5851,5854,5858,585E,5865,586B,586C,587E,5880,5881,5883,5885,5889,5892,5893,5899,589A,589E,589F,58A8,58A9,58BC,58C1,58C5,58D1,58D5,58E4,58EB,58EC,58EE,58F0,58F3,58F6,58F9,5902,5904,5907,590D,590F,5914,5915,5916,5919,591A,591C,591F,5924,5925,5927,5929,592A,592B,592D,592E,592F,5931,5934,5937,5938,5939,593A,593C,5941,5942,5944,5947,5948,5949,594B,594E,594F,5951,5954,5955,5956,5957,5958,595A,5960,5962,5965,5973,5974,5976,5978,5979,597D,5981,5982,5983,5984,5986,5987,5988,598A,598D,5992,5993,5996,5997,5999,599E,59A3,59A4,59A5,59A8,59A9,59AA,59AB,59AE,59AF,59B2,59B9,59BB,59BE,59C6,59CA,59CB,59D0,59D1,59D2,59D3,59D4,59D7,59D8,59DA,59DC,59DD,59E3,59E5,59E8,59EC,59F9,59FB,59FF,5A01,5A03,5A04,5A05,5A06,5A07,5A08,5A09,5A0C,5A11,5A13,5A18,5A1C,5A1F,5A20,5A23,5A25,5A29,5A31,5A32,5A34,5A36,5A3C,5A40,5A46,5A49,5A4A,5A55,5A5A,5A62,5A67,5A6A,5A74,5A75,5A76,5A77,5A7A,5A7F,5A92,5A9A,5A9B,5AAA,5AB2,5AB3,5AB5,5AB8,5ABE,5AC1,5AC2,5AC9,5ACC,5AD2,5AD4,5AD6,5AD8,5ADC,5AE0,5AE1,5AE3,5AE6,5AE9,5AEB,5AF1,5B09,5B16,5B17,5B32,5B34,5B37,5B40,5B50,5B51,5B53,5B54,5B55,5B57,5B58,5B59,5B5A,5B5B,5B5C,5B5D,5B5F,5B62,5B63,5B64,5B65,5B66,5B69,5B6A,5B6C,5B70,5B71,5B73,5B75,5B7A,5B7D,5B80,5B81,5B83,5B84,5B85,5B87,5B88,5B89,5B8B,5B8C,5B8F,5B93,5B95,5B97,5B98,5B99,5B9A,5B9B,5B9C,5B9D,5B9E,5BA0,5BA1,5BA2,5BA3,5BA4,5BA5,5BA6,5BAA,5BAB,5BB0,5BB3,5BB4,5BB5,5BB6,5BB8,5BB9,5BBD,5BBE,5BBF,5BC2,5BC4,5BC5,5BC6,5BC7,5BCC,5BD0,5BD2,5BD3,5BDD,5BDE,5BDF,5BE1,5BE4,5BE5,5BE8,5BEE,5BF0,5BF8,5BF9,5BFA,5BFB,5BFC,5BFF,5C01,5C04,5C06,5C09,5C0A,5C0F,5C11,5C14,5C15,5C16,5C18,5C1A,5C1C,5C1D,5C22,5C24,5C25,5C27,5C2C,5C31,5C34,5C38,5C39,5C3A,5C3B,5C3C,5C3D,5C3E,5C3F,5C40,5C41,5C42,5C45,5C48,5C49,5C4A,5C4B,5C4E,5C4F,5C50,5C51,5C55,5C59,5C5E,5C60,5C61,5C63,5C65,5C66,5C6E,5C6F,5C71,5C79,5C7A,5C7F,5C81,5C82,5C88,5C8C,5C8D,5C90,5C91,5C94,5C96,5C97,5C98,5C99,5C9A,5C9B,5C9C,5CA2,5CA3,5CA9,5CAB,5CAC,5CAD,5CB1,5CB3,5CB5,5CB7,5CB8,5CBD,5CBF,5CC1,5CC4,5CCB,5CD2,5CD9,5CE1,5CE4,5CE5,5CE6,5CE8,5CEA,5CED,5CF0,5CFB,5D02,5D03,5D06,5D07,5D0E,5D14,5D16,5D1B,5D1E,5D24,5D26,5D27,5D29,5D2D,5D2E,5D34,5D3D,5D3E,5D47,5D4A,5D4B,5D4C,5D58,5D5B,5D5D,5D69,5D6B,5D6C,5D6F,5D74,5D82,5D99,5D9D,5DB7,5DC5,5DCD,5DDB,5DDD,5DDE,5DE1,5DE2,5DE5,5DE6,5DE7,5DE8,5DE9,5DEB,5DEE,5DEF,5DF1,5DF2,5DF3,5DF4,5DF7,5DFD,5DFE,5E01,5E02,5E03,5E05,5E06,5E08,5E0C,5E0F,5E10,5E11,5E14,5E15,5E16,5E18,5E19,5E1A,5E1B,5E1C,5E1D,5E26,5E27,5E2D,5E2E,5E31,5E37,5E38,5E3B,5E3C,5E3D,5E42,5E44,5E45,5E4C,5E54,5E55,5E5B,5E5E,5E61,5E62,5E72,5E73,5E74,5E76,5E78,5E7A,5E7B,5E7C,5E7D,5E7F,5E80,5E84,5E86,5E87,5E8A,5E8B,5E8F,5E90,5E91,5E93,5E94,5E95,5E96,5E97,5E99,5E9A,5E9C,5E9E,5E9F,5EA0,5EA5,5EA6,5EA7,5EAD,5EB3,5EB5,5EB6,5EB7,5EB8,5EB9,5EBE,5EC9,5ECA,5ED1,5ED2,5ED3,5ED6,5EDB,5EE8,5EEA,5EF4,5EF6,5EF7,5EFA,5EFE,5EFF,5F00,5F01,5F02,5F03,5F04,5F08,5F0A,5F0B,5F0F,5F11,5F13,5F15,5F17,5F18,5F1B,5F1F,5F20,5F25,5F26,5F27,5F29,5F2A,5F2D,5F2F,5F31,5F39,5F3A,5F3C,5F40,5F50,5F52,5F53,5F55,5F56,5F57,5F58,5F5D,5F61,5F62,5F64,5F66,5F69,5F6A,5F6C,5F6D,5F70,5F71,5F73,5F77,5F79,5F7B,5F7C,5F80,5F81,5F82,5F84,5F85,5F87,5F88,5F89,5F8A,5F8B,5F8C,5F90,5F92,5F95,5F97,5F98,5F99,5F9C,5FA1,5FA8,5FAA,5FAD,5FAE,5FB5,5FB7,5FBC,5FBD,5FC3,5FC4,5FC5,5FC6,5FC9,5FCC,5FCD,5FCF,5FD0,5FD1,5FD2,5FD6,5FD7,5FD8,5FD9,5FDD,5FE0,5FE1,5FE4,5FE7,5FEA,5FEB,5FED,5FEE,5FF1,5FF5,5FF8,5FFB,5FFD,5FFE,5FFF,6000,6001,6002,6003,6004,6005,6006,600A,600D,600E,600F,6012,6014,6015,6016,6019,601B,601C,601D,6020,6021,6025,6026,6027,6028,6029,602A,602B,602F,6035,603B,603C,603F,6041,6042,6043,604B,604D,6050,6052,6055,6059,605A,605D,6062,6063,6064,6067,6068,6069,606A,606B,606C,606D,606F,6070,6073,6076,6078,6079,607A,607B,607C,607D,607F,6083,6084,6089,608C,608D,6092,6094,6096,609A,609B,609D,609F,60A0,60A3,60A6,60A8,60AB,60AC,60AD,60AF,60B1,60B2,60B4,60B8,60BB,60BC,60C5,60C6,60CA,60CB,60D1,60D5,60D8,60DA,60DC,60DD,60DF,60E0,60E6,60E7,60E8,60E9,60EB,60EC,60ED,60EE,60EF,60F0,60F3,60F4,60F6,60F9,60FA,6100,6101,6106,6108,6109,610D,610E,610F,6115,611A,611F,6120,6123,6124,6126,6127,612B,613F,6148,614A,614C,614E,6151,6155,615D,6162,6167,6168,6170,6175,6177,618B,618E,6194,619D,61A7,61A8,61A9,61AC,61B7,61BE,61C2,61C8,61CA,61CB,61D1,61D2,61D4,61E6,61F5,61FF,6206,6208,620A,620B,620C,620D,620E,620F,6210,6211,6212,6215,6216,6217,6218,621A,621B,621F,6221,6222,6224,6225,622A,622C,622E,6233,6234,6237,623D,623E,623F,6240,6241,6243,6247,6248,6249,624B,624C,624D,624E,6251,6252,6253,6254,6258,625B,6263,6266,6267,6269,626A,626B,626C,626D,626E,626F,6270,6273,6276,6279,627C,627E,627F,6280,6284,6289,628A,6291,6292,6293,6295,6296,6297,6298,629A,629B,629F,62A0,62A1,62A2,62A4,62A5,62A8,62AB,62AC,62B1,62B5,62B9,62BB,62BC,62BD,62BF,62C2,62C4,62C5,62C6,62C7,62C8,62C9,62CA,62CC,62CD,62CE,62D0,62D2,62D3,62D4,62D6,62D7,62D8,62D9,62DA,62DB,62DC,62DF,62E2,62E3,62E5,62E6,62E7,62E8,62E9,62EC,62ED,62EE,62EF,62F1,62F3,62F4,62F6,62F7,62FC,62FD,62FE,62FF,6301,6302,6307,6308,6309,630E,6311,6316,631A,631B,631D,631E,631F,6320,6321,6322,6323,6324,6325,6328,632A,632B,632F,6332,6339,633A,633D,6342,6343,6345,6346,6349,634B,634C,634D,634E,634F,6350,6355,635E,635F,6361,6362,6363,6367,6369,636D,636E,6371,6376,6377,637A,637B,6380,6382,6387,6388,6389,638A,638C,638E,638F,6390,6392,6396,6398,63A0,63A2,63A3,63A5,63A7,63A8,63A9,63AA,63AC,63AD,63AE,63B0,63B3,63B4,63B7,63B8,63BA,63BC,63BE,63C4,63C6,63C9,63CD,63CE,63CF,63D0,63D2,63D6,63DE,63E0,63E1,63E3,63E9,63EA,63ED,63F2,63F4,63F6,63F8,63FD,63FF,6400,6401,6402,6405,640B,640C,640F,6410,6413,6414,641B,641C,641E,6420,6421,6426,642A,642C,642D,6434,643A,643D,643F,6441,6444,6445,6446,6447,6448,644A,6452,6454,6458,645E,6467,6469,646D,6478,6479,647A,6482,6484,6485,6487,6491,6492,6495,6496,6499,649E,64A4,64A9,64AC,64AD,64AE,64B0,64B5,64B7,64B8,64BA,64BC,64C0,64C2,64C5,64CD,64CE,64D0,64D2,64D7,64D8,64DE,64E2,64E4,64E6,6500,6509,6512,6518,6525,652B,652E,652F,6534,6535,6536,6538,6539,653B,653E,653F,6545,6548,6549,654C,654F,6551,6555,6556,6559,655B,655D,655E,6562,6563,6566,656B,656C,6570,6572,6574,6577,6587,658B,658C,6590,6591,6593,6597,6599,659B,659C,659F,65A1,65A4,65A5,65A7,65A9,65AB,65AD,65AF,65B0,65B9,65BC,65BD,65C1,65C3,65C4,65C5,65C6,65CB,65CC,65CE,65CF,65D2,65D6,65D7,65E0,65E2,65E5,65E6,65E7,65E8,65E9,65EC,65ED,65EE,65EF,65F0,65F1,65F6,65F7,65FA,6600,6602,6603,6606,660A,660C,660E,660F,6613,6614,6615,6619,661D,661F,6620,6625,6627,6628,662D,662F,6631,6634,6635,6636,663C,663E,6641,6643,664B,664C,664F,6652,6653,6654,6655,6656,6657,665A,665F,6661,6664,6666,6668,666E,666F,6670,6674,6676,6677,667A,667E,6682,6684,6687,668C,6691,6696,6697,669D,66A7,66A8,66AE,66B4,66B9,66BE,66D9,66DB,66DC,66DD,66E6,66E9,66F0,66F2,66F3,66F4,66F7,66F9,66FC,66FE,66FF,6700,6708,6709,670A,670B,670D,6710,6714,6715,6717,671B,671D,671F,6726,6728,672A,672B,672C,672D,672F,6731,6734,6735,673A,673D,6740,6742,6743,6746,6748,6749,674C,674E,674F,6750,6751,6753,6756,675C,675E,675F,6760,6761,6765,6768,6769,676A,676D,676F,6770,6772,6773,6775,6777,677C,677E,677F,6781,6784,6787,6789,678B,6790,6795,6797,6798,679A,679C,679D,679E,67A2,67A3,67A5,67A7,67A8,67AA,67AB,67AD,67AF,67B0,67B3,67B5,67B6,67B7,67B8,67C1,67C3,67C4,67CF,67D0,67D1,67D2,67D3,67D4,67D8,67D9,67DA,67DC,67DD,67DE,67E0,67E2,67E5,67E9,67EC,67EF,67F0,67F1,67F3,67F4,67FD,67FF,6800,6805,6807,6808,6809,680A,680B,680C,680E,680F,6811,6813,6816,6817,681D,6821,6829,682A,6832,6833,6837,6838,6839,683C,683D,683E,6840,6841,6842,6843,6844,6845,6846,6848,6849,684A,684C,684E,6850,6851,6853,6854,6855,6860,6861,6862,6863,6864,6865,6866,6867,6868,6869,686B,6874,6876,6877,6881,6883,6885,6886,688F,6893,6897,68A2,68A6,68A7,68A8,68AD,68AF,68B0,68B3,68B5,68C0,68C2,68C9,68CB,68CD,68D2,68D5,68D8,68DA,68E0,68E3,68EE,68F0,68F1,68F5,68F9,68FA,68FC,6901,6905,690B,690D,690E,6910,6912,691F,6920,6924,692D,6930,6934,6939,693D,693F,6942,6954,6957,695A,695D,695E,6960,6963,6966,696B,696E,6971,6977,6978,6979,697C,6980,6982,6984,6986,6987,6988,6989,698D,6994,6995,6998,699B,699C,69A7,69A8,69AB,69AD,69B1,69B4,69B7,69BB,69C1,69CA,69CC,69CE,69D0,69D4,69DB,69DF,69E0,69ED,69F2,69FD,69FF,6A0A,6A17,6A18,6A1F,6A21,6A28,6A2A,6A2F,6A31,6A35,6A3D,6A3E,6A44,6A47,6A50,6A58,6A59,6A5B,6A61,6A65,6A71,6A79,6A7C,6A80,6A84,6A8E,6A90,6A91,6A97,6AA0,6AA9,6AAB,6AAC,6B20,6B21,6B22,6B23,6B24,6B27,6B32,6B37,6B39,6B3A,6B3E,6B43,6B46,6B47,6B49,6B4C,6B59,6B62,6B63,6B64,6B65,6B66,6B67,6B6A,6B79,6B7B,6B7C,6B81,6B82,6B83,6B84,6B86,6B87,6B89,6B8A,6B8B,6B8D,6B92,6B93,6B96,6B9A,6B9B,6BA1,6BAA,6BB3,6BB4,6BB5,6BB7,6BBF,6BC1,6BC2,6BC5,6BCB,6BCD,6BCF,6BD2,6BD3,6BD4,6BD5,6BD6,6BD7,6BD9,6BDB,6BE1,6BEA,6BEB,6BEF,6BF3,6BF5,6BF9,6BFD,6C05,6C06,6C07,6C0D,6C0F,6C10,6C11,6C13,6C14,6C15,6C16,6C18,6C19,6C1A,6C1B,6C1F,6C21,6C22,6C24,6C26,6C27,6C28,6C29,6C2A,6C2E,6C2F,6C30,6C32,6C34,6C35,6C38,6C3D,6C40,6C41,6C42,6C46,6C47,6C49,6C4A,6C50,6C54,6C55,6C57,6C5B,6C5C,6C5D,6C5E,6C5F,6C60,6C61,6C64,6C68,6C69,6C6A,6C70,6C72,6C74,6C76,6C79,6C7D,6C7E,6C81,6C82,6C83,6C85,6C86,6C88,6C89,6C8C,6C8F,6C90,6C93,6C94,6C99,6C9B,6C9F,6CA1,6CA3,6CA4,6CA5,6CA6,6CA7,6CA9,6CAA,6CAB,6CAD,6CAE,6CB1,6CB2,6CB3,6CB8,6CB9,6CBB,6CBC,6CBD,6CBE,6CBF,6CC4,6CC5,6CC9,6CCA,6CCC,6CD0,6CD3,6CD4,6CD5,6CD6,6CD7,6CDB,6CDE,6CE0,6CE1,6CE2,6CE3,6CE5,6CE8,6CEA,6CEB,6CEE,6CEF,6CF0,6CF1,6CF3,6CF5,6CF6,6CF7,6CF8,6CFA,6CFB,6CFC,6CFD,6CFE,6D01,6D04,6D07,6D0B,6D0C,6D0E,6D12,6D17,6D19,6D1A,6D1B,6D1E,6D25,6D27,6D2A,6D2B,6D2E,6D31,6D32,6D33,6D35,6D39,6D3B,6D3C,6D3D,6D3E,6D41,6D43,6D45,6D46,6D47,6D48,6D4A,6D4B,6D4D,6D4E,6D4F,6D51,6D52,6D53,6D54,6D59,6D5A,6D5C,6D5E,6D60,6D63,6D66,6D69,6D6A,6D6E,6D6F,6D74,6D77,6D78,6D7C,6D82,6D85,6D88,6D89,6D8C,6D8E,6D91,6D93,6D94,6D95,6D9B,6D9D,6D9E,6D9F,6DA0,6DA1,6DA3,6DA4,6DA6,6DA7,6DA8,6DA9,6DAA,6DAB,6DAE,6DAF,6DB2,6DB5,6DB8,6DBF,6DC0,6DC4,6DC5,6DC6,6DC7,6DCB,6DCC,6DD1,6DD6,6DD8,6DD9,6DDD,6DDE,6DE0,6DE1,6DE4,6DE6,6DEB,6DEC,6DEE,6DF1,6DF3,6DF7,6DF9,6DFB,6DFC,6E05,6E0A,6E0C,6E0D,6E0E,6E10,6E11,6E14,6E16,6E17,6E1A,6E1D,6E20,6E21,6E23,6E24,6E25,6E29,6E2B,6E2D,6E2F,6E32,6E34,6E38,6E3A,6E43,6E44,6E4D,6E4E,6E53,6E54,6E56,6E58,6E5B,6E5F,6E6B,6E6E,6E7E,6E7F,6E83,6E85,6E86,6E89,6E8F,6E90,6E98,6E9C,6E9F,6EA2,6EA5,6EA7,6EAA,6EAF,6EB1,6EB2,6EB4,6EB6,6EB7,6EBA,6EBB,6EBD,6EC1,6EC2,6EC7,6ECB,6ECF,6ED1,6ED3,6ED4,6ED5,6ED7,6EDA,6EDE,6EDF,6EE0,6EE1,6EE2,6EE4,6EE5,6EE6,6EE8,6EE9,6EF4,6EF9,6F02,6F06,6F09,6F0F,6F13,6F14,6F15,6F20,6F24,6F29,6F2A,6F2B,6F2D,6F2F,6F31,6F33,6F36,6F3E,6F46,6F47,6F4B,6F4D,6F58,6F5C,6F5E,6F62,6F66,6F6D,6F6E,6F72,6F74,6F78,6F7A,6F7C,6F84,6F88,6F89,6F8C,6F8D,6F8E,6F9C,6FA1,6FA7,6FB3,6FB6,6FB9,6FC0,6FC2,6FC9,6FD1,6FD2,6FDE,6FE0,6FE1,6FEE,6FEF,7011,701A,701B,7023,7035,7039,704C,704F,705E,706B,706C,706D,706F,7070,7075,7076,7078,707C,707E,707F,7080,7085,7089,708A,708E,7092,7094,7095,7096,7099,709C,709D,70AB,70AC,70AD,70AE,70AF,70B1,70B3,70B7,70B8,70B9,70BB,70BC,70BD,70C0,70C1,70C2,70C3,70C8,70CA,70D8,70D9,70DB,70DF,70E4,70E6,70E7,70E8,70E9,70EB,70EC,70ED,70EF,70F7,70F9,70FD,7109,710A,7110,7113,7115,7116,7118,7119,711A,7126,712F,7130,7131,7136,7145,714A,714C,714E,715C,715E,7164,7166,7167,7168,716E,7172,7173,7178,717A,717D,7184,718A,718F,7194,7198,7199,719F,71A0,71A8,71AC,71B3,71B5,71B9,71C3,71CE,71D4,71D5,71E0,71E5,71E7,71EE,71F9,7206,721D,7228,722A,722C,7230,7231,7235,7236,7237,7238,7239,723B,723D,723F,7247,7248,724C,724D,7252,7256,7259,725B,725D,725F,7261,7262,7266,7267,7269,726E,726F,7272,7275,7279,727A,727E,727F,7280,7281,7284,728A,728B,728D,728F,7292,729F,72AC,72AD,72AF,72B0,72B4,72B6,72B7,72B8,72B9,72C1,72C2,72C3,72C4,72C8,72CD,72CE,72D0,72D2,72D7,72D9,72DE,72E0,72E1,72E8,72E9,72EC,72ED,72EE,72EF,72F0,72F1,72F2,72F3,72F4,72F7,72F8,72FA,72FB,72FC,7301,7303,730A,730E,7313,7315,7316,7317,731B,731C,731D,731E,7321,7322,7325,7329,732A,732B,732C,732E,7331,7334,7337,7338,7339,733E,733F,734D,7350,7352,7357,7360,736C,736D,736F,737E,7384,7387,7389,738B,738E,7391,7396,739B,739F,73A2,73A9,73AB,73AE,73AF,73B0,73B2,73B3,73B7,73BA,73BB,73C0,73C2,73C8,73C9,73CA,73CD,73CF,73D0,73D1,73D9,73DE,73E0,73E5,73E7,73E9,73ED,73F2,7403,7405,7406,7409,740A,740F,7410,741A,741B,7422,7425,7426,7428,742A,742C,742E,7430,7433,7434,7435,7436,743C,7441,7455,7457,7459,745A,745B,745C,745E,745F,746D,7470,7476,7477,747E,7480,7481,7483,7487,748B,748E,7490,749C,749E,74A7,74A8,74A9,74BA,74D2,74DC,74DE,74E0,74E2,74E3,74E4,74E6,74EE,74EF,74F4,74F6,74F7,74FF,7504,750D,750F,7511,7513,7518,7519,751A,751C,751F,7525,7528,7529,752B,752C,752D,752F,7530,7531,7532,7533,7535,7537,7538,753A,753B,753E,7540,7545,7548,754B,754C,754E,754F,7554,7559,755A,755B,755C,7565,7566,756A,7572,7574,7578,7579,757F,7583,7586,758B,758F,7591,7592,7594,7596,7597,7599,759A,759D,759F,75A0,75A1,75A3,75A4,75A5,75AB,75AC,75AE,75AF,75B0,75B1,75B2,75B3,75B4,75B5,75B8,75B9,75BC,75BD,75BE,75C2,75C3,75C4,75C5,75C7,75C8,75C9,75CA,75CD,75D2,75D4,75D5,75D6,75D8,75DB,75DE,75E2,75E3,75E4,75E6,75E7,75E8,75EA,75EB,75F0,75F1,75F4,75F9,75FC,75FF,7600,7601,7603,7605,760A,760C,7610,7615,7617,7618,7619,761B,761F,7620,7622,7624,7625,7626,7629,762A,762B,762D,7630,7633,7634,7635,7638,763C,763E,763F,7640,7643,764C,764D,7654,7656,765C,765E,7663,766B,766F,7678,767B,767D,767E,7682,7684,7686,7687,7688,768B,768E,7691,7693,7696,7699,76A4,76AE,76B1,76B2,76B4,76BF,76C2,76C5,76C6,76C8,76CA,76CD,76CE,76CF,76D0,76D1,76D2,76D4,76D6,76D7,76D8,76DB,76DF,76E5,76EE,76EF,76F1,76F2,76F4,76F8,76F9,76FC,76FE,7701,7704,7707,7708,7709,770B,770D,7719,771A,771F,7720,7722,7726,7728,7729,772D,772F,7735,7736,7737,7738,773A,773C,7740,7741,7743,7747,7750,7751,775A,775B,7761,7762,7763,7765,7766,7768,776B,776C,7779,777D,777E,777F,7780,7784,7785,778C,778D,778E,7791,7792,779F,77A0,77A2,77A5,77A7,77A9,77AA,77AC,77B0,77B3,77B5,77BB,77BD,77BF,77CD,77D7,77DB,77DC,77E2,77E3,77E5,77E7,77E9,77EB,77EC,77ED,77EE,77F3,77F6,77F8,77FD,77FE,77FF,7800,7801,7802,7809,780C,780D,7811,7812,7814,7816,7817,7818,781A,781C,781D,781F,7823,7825,7826,7827,7829,782C,782D,7830,7834,7837,7838,7839,783A,783B,783C,783E,7840,7845,7847,784C,784E,7850,7852,7855,7856,7857,785D,786A,786B,786C,786D,786E,7877,787C,7887,7889,788C,788D,788E,7891,7893,7897,7898,789A,789B,789C,789F,78A1,78A3,78A5,78A7,78B0,78B1,78B2,78B3,78B4,78B9,78BE,78C1,78C5,78C9,78CA,78CB,78D0,78D4,78D5,78D9,78E8,78EC,78F2,78F4,78F7,78FA,7901,7905,7913,791E,7924,7934,793A,793B,793C,793E,7940,7941,7946,7948,7949,7953,7956,7957,795A,795B,795C,795D,795E,795F,7960,7962,7965,7967,7968,796D,796F,7977,7978,797A,7980,7981,7984,7985,798A,798F,799A,79A7,79B3,79B9,79BA,79BB,79BD,79BE,79C0,79C1,79C3,79C6,79C9,79CB,79CD,79D1,79D2,79D5,79D8,79DF,79E3,79E4,79E6,79E7,79E9,79EB,79ED,79EF,79F0,79F8,79FB,79FD,7A00,7A02,7A03,7A06,7A0B,7A0D,7A0E,7A14,7A17,7A1A,7A1E,7A20,7A23,7A33,7A37,7A39,7A3B,7A3C,7A3D,7A3F,7A46,7A51,7A57,7A70,7A74,7A76,7A77,7A78,7A79,7A7A,7A7F,7A80,7A81,7A83,7A84,7A86,7A88,7A8D,7A91,7A92,7A95,7A96,7A97,7A98,7A9C,7A9D,7A9F,7AA0,7AA5,7AA6,7AA8,7AAC,7AAD,7AB3,7ABF,7ACB,7AD6,7AD9,7ADE,7ADF,7AE0,7AE3,7AE5,7AE6,7AED,7AEF,7AF9,7AFA,7AFD,7AFF,7B03,7B04,7B06,7B08,7B0A,7B0B,7B0F,7B11,7B14,7B15,7B19,7B1B,7B1E,7B20,7B24,7B25,7B26,7B28,7B2A,7B2B,7B2C,7B2E,7B31,7B33,7B38,7B3A,7B3C,7B3E,7B45,7B47,7B49,7B4B,7B4C,7B4F,7B50,7B51,7B52,7B54,7B56,7B58,7B5A,7B5B,7B5D,7B60,7B62,7B6E,7B71,7B72,7B75,7B77,7B79,7B7B,7B7E,7B80,7B85,7B8D,7B90,7B94,7B95,7B97,7B9C,7B9D,7BA1,7BA2,7BA6,7BA7,7BA8,7BA9,7BAA,7BAB,7BAC,7BAD,7BB1,7BB4,7BB8,7BC1,7BC6,7BC7,7BCC,7BD1,7BD3,7BD9,7BDA,7BDD,7BE1,7BE5,7BE6,7BEA,7BEE,7BF1,7BF7,7BFC,7BFE,7C07,7C0B,7C0C,7C0F,7C16,7C1F,7C26,7C27,7C2A,7C38,7C3F,7C40,7C41,7C4D,7C73,7C74,7C7B,7C7C,7C7D,7C89,7C91,7C92,7C95,7C97,7C98,7C9C,7C9D,7C9E,7C9F,7CA2,7CA4,7CA5,7CAA,7CAE,7CB1,7CB2,7CB3,7CB9,7CBC,7CBD,7CBE,7CC1,7CC5,7CC7,7CC8,7CCA,7CCC,7CCD,7CD5,7CD6,7CD7,7CD9,7CDC,7CDF,7CE0,7CE8,7CEF,7CF8,7CFB,7D0A,7D20,7D22,7D27,7D2B,7D2F,7D6E,7D77,7DA6,7DAE,7E3B,7E41,7E47,7E82,7E9B,7E9F,7EA0,7EA1,7EA2,7EA3,7EA4,7EA5,7EA6,7EA7,7EA8,7EA9,7EAA,7EAB,7EAC,7EAD,7EAF,7EB0,7EB1,7EB2,7EB3,7EB5,7EB6,7EB7,7EB8,7EB9,7EBA,7EBD,7EBE,7EBF,7EC0,7EC1,7EC2,7EC3,7EC4,7EC5,7EC6,7EC7,7EC8,7EC9,7ECA,7ECB,7ECC,7ECD,7ECE,7ECF,7ED0,7ED1,7ED2,7ED3,7ED4,7ED5,7ED7,7ED8,7ED9,7EDA,7EDB,7EDC,7EDD,7EDE,7EDF,7EE0,7EE1,7EE2,7EE3,7EE5,7EE6,7EE7,7EE8,7EE9,7EEA,7EEB,7EED,7EEE,7EEF,7EF0,7EF1,7EF2,7EF3,7EF4,7EF5,7EF6,7EF7,7EF8,7EFA,7EFB,7EFC,7EFD,7EFE,7EFF,7F00,7F01,7F02,7F03,7F04,7F05,7F06,7F07,7F08,7F09,7F0B,7F0C,7F0D,7F0E,7F0F,7F11,7F12,7F13,7F14,7F15,7F16,7F17,7F18,7F19,7F1A,7F1B,7F1C,7F1D,7F1F,7F20,7F21,7F22,7F23,7F24,7F25,7F26,7F27,7F28,7F29,7F2A,7F2B,7F2C,7F2D,7F2E,7F2F,7F30,7F31,7F32,7F33,7F34,7F35,7F36,7F38,7F3A,7F42,7F44,7F45,7F50,7F51,7F54,7F55,7F57,7F58,7F5A,7F5F,7F61,7F62,7F68,7F69,7F6A,7F6E,7F71,7F72,7F74,7F79,7F7E,7F81,7F8A,7F8C,7F8E,7F94,7F9A,7F9D,7F9E,7F9F,7FA1,7FA4,7FA7,7FAF,7FB0,7FB2,7FB8,7FB9,7FBC,7FBD,7FBF,7FC1,7FC5,7FCA,7FCC,7FCE,7FD4,7FD5,7FD8,7FDF,7FE0,7FE1,7FE5,7FE6,7FE9,7FEE,7FF0,7FF1,7FF3,7FFB,7FFC,8000,8001,8003,8004,8005,8006,800B,800C,800D,8010,8012,8014,8015,8016,8017,8018,8019,801C,8020,8022,8025,8026,8027,8028,8029,802A,8031,8033,8035,8036,8037,8038,803B,803D,803F,8042,8043,8046,804A,804B,804C,804D,8052,8054,8058,805A,8069,806A,8071,807F,8080,8083,8084,8086,8087,8089,808B,808C,8093,8096,8098,809A,809B,809C,809D,809F,80A0,80A1,80A2,80A4,80A5,80A9,80AA,80AB,80AD,80AE,80AF,80B1,80B2,80B4,80B7,80BA,80BC,80BD,80BE,80BF,80C0,80C1,80C2,80C3,80C4,80C6,80CC,80CD,80CE,80D6,80D7,80D9,80DA,80DB,80DC,80DD,80DE,80E1,80E4,80E5,80E7,80E8,80E9,80EA,80EB,80EC,80ED,80EF,80F0,80F1,80F2,80F3,80F4,80F6,80F8,80FA,80FC,80FD,8102,8106,8109,810A,810D,810E,810F,8110,8111,8112,8113,8114,8116,8118,811A,811E,812C,812F,8131,8132,8136,8138,813E,8146,8148,814A,814B,814C,8150,8151,8153,8154,8155,8159,815A,8160,8165,8167,8169,816D,816E,8170,8171,8174,8179,817A,817B,817C,817D,817E,817F,8180,8182,8188,818A,818F,8191,8198,819B,819C,819D,81A3,81A6,81A8,81AA,81B3,81BA,81BB,81C0,81C1,81C2,81C3,81C6,81CA,81CC,81E3,81E7,81EA,81EC,81ED,81F3,81F4,81FB,81FC,81FE,8200,8201,8202,8204,8205,8206,820C,820D,8210,8212,8214,821B,821C,821E,821F,8221,8222,8223,8228,822A,822B,822C,822D,822F,8230,8231,8233,8234,8235,8236,8237,8238,8239,823B,823E,8244,8247,8249,824B,824F,8258,825A,825F,8268,826E,826F,8270,8272,8273,8274,8279,827A,827D,827E,827F,8282,8284,8288,828A,828B,828D,828E,828F,8291,8292,8297,8298,8299,829C,829D,829F,82A1,82A4,82A5,82A6,82A8,82A9,82AA,82AB,82AC,82AD,82AE,82AF,82B0,82B1,82B3,82B4,82B7,82B8,82B9,82BD,82BE,82C1,82C4,82C7,82C8,82CA,82CB,82CC,82CD,82CE,82CF,82D1,82D2,82D3,82D4,82D5,82D7,82D8,82DB,82DC,82DE,82DF,82E0,82E1,82E3,82E4,82E5,82E6,82EB,82EF,82F1,82F4,82F7,82F9,82FB,8301,8302,8303,8304,8305,8306,8307,8308,8309,830C,830E,830F,8311,8314,8315,8317,831A,831B,831C,8327,8328,832B,832C,832D,832F,8331,8333,8334,8335,8336,8338,8339,833A,833C,8340,8343,8346,8347,8349,834F,8350,8351,8352,8354,835A,835B,835C,835E,835F,8360,8361,8363,8364,8365,8366,8367,8368,8369,836A,836B,836C,836D,836E,836F,8377,8378,837B,837C,837D,8385,8386,8389,838E,8392,8393,8398,839B,839C,839E,83A0,83A8,83A9,83AA,83AB,83B0,83B1,83B2,83B3,83B4,83B6,83B7,83B8,83B9,83BA,83BC,83BD,83C0,83C1,83C5,83C7,83CA,83CC,83CF,83D4,83D6,83D8,83DC,83DD,83DF,83E0,83E1,83E5,83E9,83EA,83F0,83F1,83F2,83F8,83F9,83FD,8401,8403,8404,8406,840B,840C,840D,840E,840F,8411,8418,841C,841D,8424,8425,8426,8427,8428,8431,8438,843C,843D,8446,8451,8457,8459,845A,845B,845C,8461,8463,8469,846B,846C,846D,8471,8473,8475,8476,8478,847A,8482,8487,8488,8489,848B,848C,848E,8497,8499,849C,84A1,84AF,84B2,84B4,84B8,84B9,84BA,84BD,84BF,84C1,84C4,84C9,84CA,84CD,84D0,84D1,84D3,84D6,84DD,84DF,84E0,84E3,84E5,84E6,84EC,84F0,84FC,84FF,850C,8511,8513,8517,851A,851F,8521,852B,852C,8537,8538,8539,853A,853B,853C,853D,8543,8548,8549,854A,8556,8559,855E,8564,8568,8572,8574,8579,857A,857B,857E,8584,8585,8587,858F,859B,859C,85A4,85A8,85AA,85AE,85AF,85B0,85B7,85B9,85C1,85C9,85CF,85D0,85D3,85D5,85DC,85E4,85E9,85FB,85FF,8605,8611,8616,8627,8629,8638,863C,864D,864E,864F,8650,8651,8654,865A,865E,8662,866B,866C,866E,8671,8679,867A,867B,867C,867D,867E,867F,8680,8681,8682,868A,868B,868C,868D,8693,8695,869C,869D,86A3,86A4,86A7,86A8,86A9,86AA,86AC,86AF,86B0,86B1,86B4,86B5,86B6,86BA,86C0,86C4,86C6,86C7,86C9,86CA,86CB,86CE,86CF,86D0,86D1,86D4,86D8,86D9,86DB,86DE,86DF,86E4,86E9,86ED,86EE,86F0,86F1,86F2,86F3,86F4,86F8,86F9,86FE,8700,8702,8703,8707,8708,8709,870A,870D,8712,8713,8715,8717,8718,871A,871C,871E,8721,8722,8723,8725,8729,872E,8731,8734,8737,873B,873E,873F,8747,8748,8749,874C,874E,8753,8757,8759,8760,8763,8764,8765,876E,8770,8774,8776,877B,877C,877D,877E,8782,8783,8785,8788,878B,878D,8793,8797,879F,87A8,87AB,87AC,87AD,87AF,87B3,87B5,87BA,87BD,87C0,87C6,87CA,87CB,87D1,87D2,87D3,87DB,87E0,87E5,87EA,87EE,87F9,87FE,8803,880A,8813,8815,8816,881B,8821,8822,8832,8839,883C,8840,8844,8845,884C,884D,8854,8857,8859,8861,8862,8863,8864,8865,8868,8869,886B,886C,886E,8870,8872,8877,887D,887E,887F,8881,8882,8884,8885,8888,888B,888D,8892,8896,889C,88A2,88A4,88AB,88AD,88B1,88B7,88BC,88C1,88C2,88C5,88C6,88C9,88CE,88D2,88D4,88D5,88D8,88D9,88DF,88E2,88E3,88E4,88E5,88E8,88F0,88F1,88F3,88F4,88F8,88F9,88FC,88FE,8902,890A,8910,8912,8913,8919,891A,891B,8921,8925,892A,892B,8930,8934,8936,8941,8944,895E,895F,8966,897B,897F,8981,8983,8986,89C1,89C2,89C4,89C5,89C6,89C7,89C8,89C9,89CA,89CB,89CC,89CE,89CF,89D0,89D1,89D2,89D6,89DA,89DC,89DE,89E3,89E5,89E6,89EB,89EF,89F3,8A00,8A07,8A3E,8A48,8A79,8A89,8A8A,8A93,8B07,8B26,8B66,8B6C,8BA0,8BA1,8BA2,8BA3,8BA4,8BA5,8BA6,8BA7,8BA8,8BA9,8BAA,8BAB,8BAD,8BAE,8BAF,8BB0,8BB2,8BB3,8BB4,8BB5,8BB6,8BB7,8BB8,8BB9,8BBA,8BBC,8BBD,8BBE,8BBF,8BC0,8BC1,8BC2,8BC3,8BC4,8BC5,8BC6,8BC8,8BC9,8BCA,8BCB,8BCC,8BCD,8BCE,8BCF,8BD1,8BD2,8BD3,8BD4,8BD5,8BD6,8BD7,8BD8,8BD9,8BDA,8BDB,8BDC,8BDD,8BDE,8BDF,8BE0,8BE1,8BE2,8BE3,8BE4,8BE5,8BE6,8BE7,8BE8,8BE9,8BEB,8BEC,8BED,8BEE,8BEF,8BF0,8BF1,8BF2,8BF3,8BF4,8BF5,8BF6,8BF7,8BF8,8BF9,8BFA,8BFB,8BFC,8BFD,8BFE,8BFF,8C00,8C01,8C02,8C03,8C04,8C05,8C06,8C07,8C08,8C0A,8C0B,8C0C,8C0D,8C0E,8C0F,8C10,8C11,8C12,8C13,8C14,8C15,8C16,8C17,8C18,8C19,8C1A,8C1B,8C1C,8C1D,8C1F,8C20,8C21,8C22,8C23,8C24,8C25,8C26,8C27,8C28,8C29,8C2A,8C2B,8C2C,8C2D,8C2E,8C2F,8C30,8C31,8C32,8C33,8C34,8C35,8C36,8C37,8C41,8C46,8C47,8C49,8C4C,8C55,8C5A,8C61,8C62,8C6A,8C6B,8C73,8C78,8C79,8C7A,8C82,8C85,8C89,8C8A,8C8C,8C94,8C98,8D1D,8D1E,8D1F,8D21,8D22,8D23,8D24,8D25,8D26,8D27,8D28,8D29,8D2A,8D2B,8D2C,8D2D,8D2E,8D2F,8D30,8D31,8D32,8D33,8D34,8D35,8D36,8D37,8D38,8D39,8D3A,8D3B,8D3C,8D3D,8D3E,8D3F,8D40,8D41,8D42,8D43,8D44,8D45,8D46,8D47,8D48,8D49,8D4A,8D4B,8D4C,8D4D,8D4E,8D4F,8D50,8D53,8D54,8D55,8D56,8D58,8D59,8D5A,8D5B,8D5C,8D5D,8D5E,8D60,8D61,8D62,8D63,8D64,8D66,8D67,8D6B,8D6D,8D70,8D73,8D74,8D75,8D76,8D77,8D81,8D84,8D85,8D8A,8D8B,8D91,8D94,8D9F,8DA3,8DB1,8DB3,8DB4,8DB5,8DB8,8DBA,8DBC,8DBE,8DBF,8DC3,8DC4,8DC6,8DCB,8DCC,8DCE,8DCF,8DD1,8DD6,8DD7,8DDA,8DDB,8DDD,8DDE,8DDF,8DE3,8DE4,8DE8,8DEA,8DEB,8DEC,8DEF,8DF3,8DF5,8DF7,8DF8,8DF9,8DFA,8DFB,8DFD,8E05,8E09,8E0A,8E0C,8E0F,8E14,8E1D,8E1E,8E1F,8E22,8E23,8E29,8E2A,8E2C,8E2E,8E2F,8E31,8E35,8E39,8E3A,8E3D,8E40,8E41,8E42,8E44,8E47,8E48,8E49,8E4A,8E4B,8E51,8E52,8E59,8E66,8E69,8E6C,8E6D,8E6F,8E70,8E72,8E74,8E76,8E7C,8E7F,8E81,8E85,8E87,8E8F,8E90,8E94,8E9C,8E9E,8EAB,8EAC,8EAF,8EB2,8EBA,8ECE,8F66,8F67,8F68,8F69,8F6B,8F6C,8F6D,8F6E,8F6F,8F70,8F71,8F72,8F73,8F74,8F75,8F76,8F77,8F78,8F79,8F7A,8F7B,8F7C,8F7D,8F7E,8F7F,8F81,8F82,8F83,8F84,8F85,8F86,8F87,8F88,8F89,8F8A,8F8B,8F8D,8F8E,8F8F,8F90,8F91,8F93,8F94,8F95,8F96,8F97,8F98,8F99,8F9A,8F9B,8F9C,8F9E,8F9F,8FA3,8FA8,8FA9,8FAB,8FB0,8FB1,8FB6,8FB9,8FBD,8FBE,8FC1,8FC2,8FC4,8FC5,8FC7,8FC8,8FCE,8FD0,8FD1,8FD3,8FD4,8FD5,8FD8,8FD9,8FDB,8FDC,8FDD,8FDE,8FDF,8FE2,8FE4,8FE5,8FE6,8FE8,8FE9,8FEA,8FEB,8FED,8FEE,8FF0,8FF3,8FF7,8FF8,8FF9,8FFD,9000,9001,9002,9003,9004,9005,9006,9009,900A,900B,900D,900F,9010,9011,9012,9014,9016,9017,901A,901B,901D,901E,901F,9020,9021,9022,9026,902D,902E,902F,9035,9036,9038,903B,903C,903E,9041,9042,9044,9047,904D,904F,9050,9051,9052,9053,9057,9058,905B,9062,9063,9065,9068,906D,906E,9074,9075,907D,907F,9080,9082,9083,9088,908B,9091,9093,9095,9097,9099,909B,909D,90A1,90A2,90A3,90A6,90AA,90AC,90AE,90AF,90B0,90B1,90B3,90B4,90B5,90B6,90B8,90B9,90BA,90BB,90BE,90C1,90C4,90C5,90C7,90CA,90CE,90CF,90D0,90D1,90D3,90D7,90DB,90DC,90DD,90E1,90E2,90E6,90E7,90E8,90EB,90ED,90EF,90F4,90F8,90FD,90FE,9102,9104,9119,911E,9122,9123,912F,9131,9139,9143,9146,9149,914A,914B,914C,914D,914E,914F,9150,9152,9157,915A,915D,915E,9161,9162,9163,9164,9165,9169,916A,916C,916E,916F,9170,9171,9172,9174,9175,9176,9177,9178,9179,917D,917E,917F,9185,9187,9189,918B,918C,918D,9190,9191,9192,919A,919B,91A2,91A3,91AA,91AD,91AE,91AF,91B4,91B5,91BA,91C7,91C9,91CA,91CC,91CD,91CE,91CF,91D1,91DC,9274,928E,92AE,92C8,933E,936A,938F,93CA,93D6,943E,946B,9485,9486,9487,9488,9489,948A,948B,948C,948D,948E,948F,9490,9492,9493,9494,9495,9497,9499,949A,949B,949C,949D,949E,949F,94A0,94A1,94A2,94A3,94A4,94A5,94A6,94A7,94A8,94A9,94AA,94AB,94AC,94AD,94AE,94AF,94B0,94B1,94B2,94B3,94B4,94B5,94B6,94B7,94B8,94B9,94BA,94BB,94BC,94BD,94BE,94BF,94C0,94C1,94C2,94C3,94C4,94C5,94C6,94C8,94C9,94CA,94CB,94CC,94CD,94CE,94D0,94D1,94D2,94D5,94D6,94D7,94D8,94D9,94DB,94DC,94DD,94DE,94DF,94E0,94E1,94E2,94E3,94E4,94E5,94E7,94E8,94E9,94EA,94EB,94EC,94ED,94EE,94EF,94F0,94F1,94F2,94F3,94F4,94F5,94F6,94F7,94F8,94F9,94FA,94FC,94FD,94FE,94FF,9500,9501,9502,9503,9504,9505,9506,9507,9508,9509,950A,950B,950C,950D,950E,950F,9510,9511,9512,9513,9514,9515,9516,9517,9518,9519,951A,951B,951D,951E,951F,9521,9522,9523,9524,9525,9526,9528,9529,952A,952B,952C,952D,952E,952F,9530,9531,9532,9534,9535,9536,9537,9538,9539,953A,953B,953C,953E,953F,9540,9541,9542,9544,9545,9546,9547,9549,954A,954C,954D,954E,954F,9550,9551,9552,9553,9554,9556,9557,9558,9559,955B,955C,955D,955E,955F,9561,9562,9563,9564,9565,9566,9567,9568,9569,956A,956B,956C,956D,956F,9570,9571,9572,9573,9576,957F,95E8,95E9,95EA,95EB,95ED,95EE,95EF,95F0,95F1,95F2,95F3,95F4,95F5,95F6,95F7,95F8,95F9,95FA,95FB,95FC,95FD,95FE,9600,9601,9602,9603,9604,9605,9606,9608,9609,960A,960B,960C,960D,960E,960F,9610,9611,9612,9614,9615,9616,9617,9619,961A,961C,961D,961F,9621,9622,962A,962E,9631,9632,9633,9634,9635,9636,963B,963C,963D,963F,9640,9642,9644,9645,9646,9647,9648,9649,964B,964C,964D,9650,9654,9655,965B,965F,9661,9662,9664,9667,9668,9669,966A,966C,9672,9674,9675,9676,9677,9685,9686,9688,968B,968D,968F,9690,9694,9697,9698,9699,969C,96A7,96B0,96B3,96B6,96B9,96BC,96BD,96BE,96C0,96C1,96C4,96C5,96C6,96C7,96C9,96CC,96CD,96CE,96CF,96D2,96D5,96E0,96E8,96E9,96EA,96EF,96F3,96F6,96F7,96F9,96FE,9700,9701,9704,9706,9707,9708,9709,970D,970E,970F,9713,9716,971C,971E,972A,972D,9730,9732,9738,9739,973E,9752,9753,9756,9759,975B,975E,9760,9761,9762,9765,9769,9773,9774,9776,977C,9785,978B,978D,9791,9792,9794,9798,97A0,97A3,97AB,97AD,97AF,97B2,97B4,97E6,97E7,97E9,97EA,97EB,97EC,97ED,97F3,97F5,97F6,9875,9876,9877,9878,9879,987A,987B,987C,987D,987E,987F,9880,9881,9882,9883,9884,9885,9886,9887,9888,9889,988A,988C,988D,988F,9890,9891,9893,9894,9896,9897,9898,989A,989B,989C,989D,989E,989F,98A0,98A1,98A2,98A4,98A5,98A6,98A7,98CE,98D1,98D2,98D3,98D5,98D8,98D9,98DA,98DE,98DF,98E7,98E8,990D,9910,992E,9954,9955,9963,9965,9967,9968,9969,996A,996B,996C,996D,996E,996F,9970,9971,9972,9974,9975,9976,9977,997A,997C,997D,997F,9980,9981,9984,9985,9986,9987,9988,998A,998B,998D,998F,9990,9991,9992,9993,9994,9995,9996,9997,9998,9999,99A5,99A8,9A6C,9A6D,9A6E,9A6F,9A70,9A71,9A73,9A74,9A75,9A76,9A77,9A78,9A79,9A7A,9A7B,9A7C,9A7D,9A7E,9A7F,9A80,9A81,9A82,9A84,9A85,9A86,9A87,9A88,9A8A,9A8B,9A8C,9A8F,9A90,9A91,9A92,9A93,9A96,9A97,9A98,9A9A,9A9B,9A9C,9A9D,9A9E,9A9F,9AA0,9AA1,9AA2,9AA3,9AA4,9AA5,9AA7,9AA8,9AB0,9AB1,9AB6,9AB7,9AB8,9ABA,9ABC,9AC0,9AC1,9AC2,9AC5,9ACB,9ACC,9AD1,9AD3,9AD8,9ADF,9AE1,9AE6,9AEB,9AED,9AEF,9AF9,9AFB,9B03,9B08,9B0F,9B13,9B1F,9B23,9B2F,9B32,9B3B,9B3C,9B41,9B42,9B43,9B44,9B45,9B47,9B48,9B49,9B4D,9B4F,9B51,9B54,9C7C,9C7F,9C81,9C82,9C85,9C86,9C87,9C88,9C8B,9C8D,9C8E,9C90,9C91,9C92,9C94,9C95,9C9A,9C9B,9C9C,9C9E,9C9F,9CA0,9CA1,9CA2,9CA3,9CA4,9CA5,9CA6,9CA7,9CA8,9CA9,9CAB,9CAD,9CAE,9CB0,9CB1,9CB2,9CB3,9CB4,9CB5,9CB6,9CB7,9CB8,9CBA,9CBB,9CBC,9CBD,9CC3,9CC4,9CC5,9CC6,9CC7,9CCA,9CCB,9CCC,9CCD,9CCE,9CCF,9CD0,9CD3,9CD4,9CD5,9CD6,9CD7,9CD8,9CD9,9CDC,9CDD,9CDE,9CDF,9CE2,9E1F,9E20,9E21,9E22,9E23,9E25,9E26,9E28,9E29,9E2A,9E2B,9E2C,9E2D,9E2F,9E31,9E32,9E33,9E35,9E36,9E37,9E38,9E39,9E3A,9E3D,9E3E,9E3F,9E41,9E42,9E43,9E44,9E45,9E46,9E47,9E48,9E49,9E4A,9E4B,9E4C,9E4E,9E4F,9E51,9E55,9E57,9E58,9E5A,9E5B,9E5C,9E5E,9E63,9E64,9E66,9E67,9E68,9E69,9E6A,9E6B,9E6C,9E6D,9E70,9E71,9E73,9E7E,9E7F,9E82,9E87,9E88,9E8B,9E92,9E93,9E9D,9E9F,9EA6,9EB4,9EB8,9EBB,9EBD,9EBE,9EC4,9EC9,9ECD,9ECE,9ECF,9ED1,9ED4,9ED8,9EDB,9EDC,9EDD,9EDF,9EE0,9EE2,9EE5,9EE7,9EE9,9EEA,9EEF,9EF9,9EFB,9EFC,9EFE,9F0B,9F0D,9F0E,9F10,9F13,9F17,9F19,9F20,9F22,9F2C,9F2F,9F37,9F39,9F3B,9F3D,9F3E,9F44,9F50,9F51,9F7F,9F80,9F83,9F84,9F85,9F86,9F87,9F88,9F89,9F8A,9F8B,9F8C,9F99,9F9A,9F9B,9F9F,9FA0,FF01,FF02,FF03,FF04,FF05,FF06,FF07,FF08,FF09,FF0A,FF0B,FF0C,FF0D,FF0E,FF0F,FF10,FF11,FF12,FF13,FF14,FF15,FF16,FF17,FF18,FF19,FF1A,FF1B,FF1C,FF1D,FF1E,FF1F,FF20,FF21,FF22,FF23,FF24,FF25,FF26,FF27,FF28,FF29,FF2A,FF2B,FF2C,FF2D,FF2E,FF2F,FF30,FF31,FF32,FF33,FF34,FF35,FF36,FF37,FF38,FF39,FF3A,FF3B,FF3C,FF3D,FF3E,FF3F,FF40,FF41,FF42,FF43,FF44,FF45,FF46,FF47,FF48,FF49,FF4A,FF4B,FF4C,FF4D,FF4E,FF4F,FF50,FF51,FF52,FF53,FF54,FF55,FF56,FF57,FF58,FF59,FF5A,FF5B,FF5C,FF5D,FF5E,FFE0,FFE1,FFE3,FFE5"},_ansicode:function(){return"A1E8,A1EC,A1A7,A1E3,A1C0,A1A4,A1C1,A8A4,A8A2,A8A8,A8A6,A8BA,A8AC,A8AA,A8B0,A8AE,A1C2,A8B4,A8B2,A8B9,A8A1,A8A5,A8A7,A8A9,A8AD,A8B1,A8A3,A8AB,A8AF,A8B3,A8B5,A8B6,A8B7,A8B8,A1A6,A1A5,A6A1,A6A2,A6A3,A6A4,A6A5,A6A6,A6A7,A6A8,A6A9,A6AA,A6AB,A6AC,A6AD,A6AE,A6AF,A6B0,A6B1,A6B2,A6B3,A6B4,A6B5,A6B6,A6B7,A6B8,A6C1,A6C2,A6C3,A6C4,A6C5,A6C6,A6C7,A6C8,A6C9,A6CA,A6CB,A6CC,A6CD,A6CE,A6CF,A6D0,A6D1,A6D2,A6D3,A6D4,A6D5,A6D6,A6D7,A6D8,A7A7,A7A1,A7A2,A7A3,A7A4,A7A5,A7A6,A7A8,A7A9,A7AA,A7AB,A7AC,A7AD,A7AE,A7AF,A7B0,A7B1,A7B2,A7B3,A7B4,A7B5,A7B6,A7B7,A7B8,A7B9,A7BA,A7BB,A7BC,A7BD,A7BE,A7BF,A7C0,A7C1,A7D1,A7D2,A7D3,A7D4,A7D5,A7D6,A7D8,A7D9,A7DA,A7DB,A7DC,A7DD,A7DE,A7DF,A7E0,A7E1,A7E2,A7E3,A7E4,A7E5,A7E6,A7E7,A7E8,A7E9,A7EA,A7EB,A7EC,A7ED,A7EE,A7EF,A7F0,A7F1,A7D7,A1AA,A1AC,A1AE,A1AF,A1B0,A1B1,A1AD,A1EB,A1E4,A1E5,A1F9,A1E6,A1ED,A2F1,A2F2,A2F3,A2F4,A2F5,A2F6,A2F7,A2F8,A2F9,A2FA,A2FB,A2FC,A1FB,A1FC,A1FA,A1FD,A1CA,A1C7,A1C6,A1CC,A1D8,A1DE,A1CF,A1CE,A1C4,A1C5,A1C9,A1C8,A1D2,A1D3,A1E0,A1DF,A1C3,A1CB,A1D7,A1D6,A1D5,A1D9,A1D4,A1DC,A1DD,A1DA,A1DB,A1D1,A1CD,A1D0,A2D9,A2DA,A2DB,A2DC,A2DD,A2DE,A2DF,A2E0,A2E1,A2E2,A2C5,A2C6,A2C7,A2C8,A2C9,A2CA,A2CB,A2CC,A2CD,A2CE,A2CF,A2D0,A2D1,A2D2,A2D3,A2D4,A2D5,A2D6,A2D7,A2D8,A2B1,A2B2,A2B3,A2B4,A2B5,A2B6,A2B7,A2B8,A2B9,A2BA,A2BB,A2BC,A2BD,A2BE,A2BF,A2C0,A2C1,A2C2,A2C3,A2C4,A9A4,A9A5,A9A6,A9A7,A9A8,A9A9,A9AA,A9AB,A9AC,A9AD,A9AE,A9AF,A9B0,A9B1,A9B2,A9B3,A9B4,A9B5,A9B6,A9B7,A9B8,A9B9,A9BA,A9BB,A9BC,A9BD,A9BE,A9BF,A9C0,A9C1,A9C2,A9C3,A9C4,A9C5,A9C6,A9C7,A9C8,A9C9,A9CA,A9CB,A9CC,A9CD,A9CE,A9CF,A9D0,A9D1,A9D2,A9D3,A9D4,A9D5,A9D6,A9D7,A9D8,A9D9,A9DA,A9DB,A9DC,A9DD,A9DE,A9DF,A9E0,A9E1,A9E2,A9E3,A9E4,A9E5,A9E6,A9E7,A9E8,A9E9,A9EA,A9EB,A9EC,A9ED,A9EE,A9EF,A1F6,A1F5,A1F8,A1F7,A1F4,A1F3,A1F0,A1F2,A1F1,A1EF,A1EE,A1E2,A1E1,A1A1,A1A2,A1A3,A1A8,A1A9,A1B4,A1B5,A1B6,A1B7,A1B8,A1B9,A1BA,A1BB,A1BE,A1BF,A1FE,A1B2,A1B3,A1BC,A1BD,A4A1,A4A2,A4A3,A4A4,A4A5,A4A6,A4A7,A4A8,A4A9,A4AA,A4AB,A4AC,A4AD,A4AE,A4AF,A4B0,A4B1,A4B2,A4B3,A4B4,A4B5,A4B6,A4B7,A4B8,A4B9,A4BA,A4BB,A4BC,A4BD,A4BE,A4BF,A4C0,A4C1,A4C2,A4C3,A4C4,A4C5,A4C6,A4C7,A4C8,A4C9,A4CA,A4CB,A4CC,A4CD,A4CE,A4CF,A4D0,A4D1,A4D2,A4D3,A4D4,A4D5,A4D6,A4D7,A4D8,A4D9,A4DA,A4DB,A4DC,A4DD,A4DE,A4DF,A4E0,A4E1,A4E2,A4E3,A4E4,A4E5,A4E6,A4E7,A4E8,A4E9,A4EA,A4EB,A4EC,A4ED,A4EE,A4EF,A4F0,A4F1,A4F2,A4F3,A5A1,A5A2,A5A3,A5A4,A5A5,A5A6,A5A7,A5A8,A5A9,A5AA,A5AB,A5AC,A5AD,A5AE,A5AF,A5B0,A5B1,A5B2,A5B3,A5B4,A5B5,A5B6,A5B7,A5B8,A5B9,A5BA,A5BB,A5BC,A5BD,A5BE,A5BF,A5C0,A5C1,A5C2,A5C3,A5C4,A5C5,A5C6,A5C7,A5C8,A5C9,A5CA,A5CB,A5CC,A5CD,A5CE,A5CF,A5D0,A5D1,A5D2,A5D3,A5D4,A5D5,A5D6,A5D7,A5D8,A5D9,A5DA,A5DB,A5DC,A5DD,A5DE,A5DF,A5E0,A5E1,A5E2,A5E3,A5E4,A5E5,A5E6,A5E7,A5E8,A5E9,A5EA,A5EB,A5EC,A5ED,A5EE,A5EF,A5F0,A5F1,A5F2,A5F3,A5F4,A5F5,A5F6,A8C5,A8C6,A8C7,A8C8,A8C9,A8CA,A8CB,A8CC,A8CD,A8CE,A8CF,A8D0,A8D1,A8D2,A8D3,A8D4,A8D5,A8D6,A8D7,A8D8,A8D9,A8DA,A8DB,A8DC,A8DD,A8DE,A8DF,A8E0,A8E1,A8E2,A8E3,A8E4,A8E5,A8E6,A8E7,A8E8,A8E9,A2E5,A2E6,A2E7,A2E8,A2E9,A2EA,A2EB,A2EC,A2ED,A2EE,D2BB,B6A1,C6DF,CDF2,D5C9,C8FD,C9CF,CFC2,D8A2,B2BB,D3EB,D8A4,B3F3,D7A8,C7D2,D8A7,CAC0,C7F0,B1FB,D2B5,B4D4,B6AB,CBBF,D8A9,B6AA,C1BD,D1CF,C9A5,D8AD,B8F6,D1BE,E3DC,D6D0,B7E1,B4AE,C1D9,D8BC,CDE8,B5A4,CEAA,D6F7,C0F6,BED9,D8AF,C4CB,BEC3,D8B1,C3B4,D2E5,D6AE,CEDA,D5A7,BAF5,B7A6,C0D6,C6B9,C5D2,C7C7,B9D4,B3CB,D2D2,D8BF,BEC5,C6F2,D2B2,CFB0,CFE7,CAE9,D8C0,C2F2,C2D2,C8E9,C7AC,C1CB,D3E8,D5F9,CAC2,B6FE,D8A1,D3DA,BFF7,D4C6,BBA5,D8C1,CEE5,BEAE,D8A8,D1C7,D0A9,D8BD,D9EF,CDF6,BFBA,BDBB,BAA5,D2E0,B2FA,BAE0,C4B6,CFED,BEA9,CDA4,C1C1,C7D7,D9F1,D9F4,C8CB,D8E9,D2DA,CAB2,C8CA,D8EC,D8EA,D8C6,BDF6,C6CD,B3F0,D8EB,BDF1,BDE9,C8D4,B4D3,C2D8,B2D6,D7D0,CACB,CBFB,D5CC,B8B6,CFC9,D9DA,D8F0,C7AA,D8EE,B4FA,C1EE,D2D4,D8ED,D2C7,D8EF,C3C7,D1F6,D6D9,D8F2,D8F5,BCFE,BCDB,C8CE,B7DD,B7C2,C6F3,D8F8,D2C1,CEE9,BCBF,B7FC,B7A5,D0DD,D6DA,D3C5,BBEF,BBE1,D8F1,C9A1,CEB0,B4AB,D8F3,C9CB,D8F6,C2D7,D8F7,CEB1,D8F9,B2AE,B9C0,D9A3,B0E9,C1E6,C9EC,CBC5,CBC6,D9A4,B5E8,B5AB,CEBB,B5CD,D7A1,D7F4,D3D3,CCE5,BACE,D9A2,D9DC,D3E0,D8FD,B7F0,D7F7,D8FE,D8FA,D9A1,C4E3,D3B6,D8F4,D9DD,D8FB,C5E5,C0D0,D1F0,B0DB,BCD1,D9A6,D9A5,D9AC,D9AE,D9AB,CAB9,D9A9,D6B6,B3DE,D9A8,C0FD,CACC,D9AA,D9A7,D9B0,B6B1,B9A9,D2C0,CFC0,C2C2,BDC4,D5EC,B2E0,C7C8,BFEB,D9AD,D9AF,CEEA,BAEE,C7D6,B1E3,B4D9,B6ED,D9B4,BFA1,D9DE,C7CE,C0FE,D9B8,CBD7,B7FD,D9B5,D9B7,B1A3,D3E1,D9B9,D0C5,D9B6,D9B1,D9B2,C1A9,D9B3,BCF3,D0DE,B8A9,BEE3,D9BD,D9BA,B0B3,D9C2,D9C4,B1B6,D9BF,B5B9,BEF3,CCC8,BAF2,D2D0,D9C3,BDE8,B3AB,D9C5,BEEB,D9C6,D9BB,C4DF,D9BE,D9C1,D9C0,D5AE,D6B5,C7E3,D9C8,BCD9,D9CA,D9BC,D9CB,C6AB,D9C9,D7F6,CDA3,BDA1,D9CC,C5BC,CDB5,D9CD,D9C7,B3A5,BFFE,B8B5,C0FC,B0F8,B4F6,D9CE,D9CF,B4A2,D9D0,B4DF,B0C1,D9D1,C9B5,CFF1,D9D2,C1C5,D9D6,C9AE,D9D5,D9D4,D9D7,CBDB,BDA9,C6A7,D9D3,D9D8,D9D9,C8E5,C0DC,B6F9,D8A3,D4CA,D4AA,D0D6,B3E4,D5D7,CFC8,B9E2,BFCB,C3E2,B6D2,CDC3,D9EE,D9F0,B5B3,B6B5,BEA4,C8EB,C8AB,B0CB,B9AB,C1F9,D9E2,C0BC,B9B2,B9D8,D0CB,B1F8,C6E4,BEDF,B5E4,D7C8,D1F8,BCE6,CADE,BCBD,D9E6,D8E7,C4DA,B8D4,C8BD,B2E1,D4D9,C3B0,C3E1,DAA2,C8DF,D0B4,BEFC,C5A9,B9DA,DAA3,D4A9,DAA4,D9FB,B6AC,B7EB,B1F9,D9FC,B3E5,BEF6,BFF6,D2B1,C0E4,B6B3,D9FE,D9FD,BEBB,C6E0,D7BC,DAA1,C1B9,B5F2,C1E8,BCF5,B4D5,C1DD,C4FD,BCB8,B7B2,B7EF,D9EC,C6BE,BFAD,BBCB,B5CA,DBC9,D0D7,CDB9,B0BC,B3F6,BBF7,DBCA,BAAF,D4E4,B5B6,B5F3,D8D6,C8D0,B7D6,C7D0,D8D7,BFAF,DBBB,D8D8,D0CC,BBAE,EBBE,C1D0,C1F5,D4F2,B8D5,B4B4,B3F5,C9BE,C5D0,C5D9,C0FB,B1F0,D8D9,B9CE,B5BD,D8DA,D6C6,CBA2,C8AF,C9B2,B4CC,BFCC,B9F4,D8DB,D8DC,B6E7,BCC1,CCEA,CFF7,D8DD,C7B0,B9D0,BDA3,CCDE,C6CA,D8E0,D8DE,D8DF,B0FE,BEE7,CAA3,BCF4,B8B1,B8EE,D8E2,BDCB,D8E4,D8E3,C5FC,D8E5,D8E6,C1A6,C8B0,B0EC,B9A6,BCD3,CEF1,DBBD,C1D3,B6AF,D6FA,C5AC,BDD9,DBBE,DBBF,C0F8,BEA2,C0CD,DBC0,CAC6,B2AA,D3C2,C3E3,D1AB,DBC2,C0D5,DBC3,BFB1,C4BC,C7DA,DBC4,D9E8,C9D7,B9B4,CEF0,D4C8,B0FC,B4D2,D0D9,D9E9,DECB,D9EB,D8B0,BBAF,B1B1,B3D7,D8CE,D4D1,BDB3,BFEF,CFBB,D8D0,B7CB,D8D1,C6A5,C7F8,D2BD,D8D2,C4E4,CAAE,C7A7,D8A6,C9FD,CEE7,BBDC,B0EB,BBAA,D0AD,B1B0,D7E4,D7BF,B5A5,C2F4,C4CF,B2A9,B2B7,B1E5,DFB2,D5BC,BFA8,C2AC,D8D5,C2B1,D8D4,CED4,DAE0,CEC0,D8B4,C3AE,D3A1,CEA3,BCB4,C8B4,C2D1,BEED,D0B6,DAE1,C7E4,B3A7,B6F2,CCFC,C0FA,C0F7,D1B9,D1E1,D8C7,B2DE,C0E5,BAF1,D8C8,D4AD,CFE1,D8C9,D8CA,CFC3,B3F8,BEC7,D8CB,DBCC,C8A5,CFD8,C8FE,B2CE,D3D6,B2E6,BCB0,D3D1,CBAB,B7B4,B7A2,CAE5,C8A1,CADC,B1E4,D0F0,C5D1,DBC5,B5FE,BFDA,B9C5,BEE4,C1ED,DFB6,DFB5,D6BB,BDD0,D5D9,B0C8,B6A3,BFC9,CCA8,DFB3,CAB7,D3D2,D8CF,D2B6,BAC5,CBBE,CCBE,DFB7,B5F0,DFB4,D3F5,B3D4,B8F7,DFBA,BACF,BCAA,B5F5,CDAC,C3FB,BAF3,C0F4,CDC2,CFF2,DFB8,CFC5,C2C0,DFB9,C2F0,BEFD,C1DF,CDCC,D2F7,B7CD,DFC1,DFC4,B7F1,B0C9,B6D6,B7D4,BAAC,CCFD,BFD4,CBB1,C6F4,D6A8,DFC5,CEE2,B3B3,CEFC,B4B5,CEC7,BAF0,CEE1,D1BD,DFC0,B4F4,B3CA,B8E6,DFBB,C4C5,DFBC,DFBD,DFBE,C5BB,DFBF,DFC2,D4B1,DFC3,C7BA,CED8,C4D8,DFCA,DFCF,D6DC,DFC9,DFDA,CEB6,BAC7,DFCE,DFC8,C5DE,C9EB,BAF4,C3FC,BED7,DFC6,DFCD,C5D8,D5A6,BACD,BECC,D3BD,B8C0,D6E4,DFC7,B9BE,BFA7,C1FC,DFCB,DFCC,DFD0,DFDB,DFE5,DFD7,DFD6,D7C9,DFE3,DFE4,E5EB,D2A7,DFD2,BFA9,D4DB,BFC8,DFD4,CFCC,DFDD,D1CA,DFDE,B0A7,C6B7,DFD3,BAE5,B6DF,CDDB,B9FE,D4D5,DFDF,CFEC,B0A5,DFE7,DFD1,D1C6,DFD5,DFD8,DFD9,DFDC,BBA9,DFE0,DFE1,DFE2,DFE6,DFE8,D3B4,B8E7,C5B6,DFEA,C9DA,C1A8,C4C4,BFDE,CFF8,D5DC,DFEE,B2B8,BADF,DFEC,DBC1,D1E4,CBF4,B4BD,B0A6,DFF1,CCC6,DFF2,DFED,DFE9,DFEB,DFEF,DFF0,BBBD,DFF3,DFF4,BBA3,CADB,CEA8,E0A7,B3AA,E0A6,E0A1,DFFE,CDD9,DFFC,DFFA,BFD0,D7C4,C9CC,DFF8,B0A1,DFFD,DFFB,E0A2,E0A8,B7C8,C6A1,C9B6,C0B2,DFF5,C5BE,D8C4,DFF9,C4F6,E0A3,E0A4,E0A5,D0A5,E0B4,CCE4,E0B1,BFA6,E0AF,CEB9,E0AB,C9C6,C0AE,E0AE,BAED,BAB0,E0A9,DFF6,E0B3,E0B8,B4AD,E0B9,CFB2,BAC8,E0B0,D0FA,E0AC,D4FB,DFF7,C5E7,E0AD,D3F7,E0B6,E0B7,E0C4,D0E1,E0BC,E0C9,E0CA,E0BE,E0AA,C9A4,E0C1,E0B2,CAC8,E0C3,E0B5,CECB,CBC3,E0CD,E0C6,E0C2,E0CB,E0BA,E0BF,E0C0,E0C5,E0C7,E0C8,E0CC,E0BB,CBD4,E0D5,E0D6,E0D2,E0D0,BCCE,E0D1,B8C2,D8C5,D0EA,C2EF,E0CF,E0BD,E0D4,E0D3,E0D7,E0DC,E0D8,D6F6,B3B0,D7EC,CBBB,E0DA,CEFB,BAD9,E0E1,E0DD,D2AD,E0E2,E0DB,E0D9,E0DF,E0E0,E0DE,E0E4,C6F7,D8AC,D4EB,E0E6,CAC9,E0E5,B8C1,E0E7,E0E8,E0E9,E0E3,BABF,CCE7,E0EA,CFF9,E0EB,C8C2,BDC0,C4D2,E0EC,E0ED,C7F4,CBC4,E0EE,BBD8,D8B6,D2F2,E0EF,CDC5,B6DA,E0F1,D4B0,C0A7,B4D1,CEA7,E0F0,E0F2,B9CC,B9FA,CDBC,E0F3,C6D4,E0F4,D4B2,C8A6,E0F6,E0F5,E0F7,CDC1,CAA5,D4DA,DBD7,DBD9,DBD8,B9E7,DBDC,DBDD,B5D8,DBDA,DBDB,B3A1,DBDF,BBF8,D6B7,DBE0,BEF9,B7BB,DBD0,CCAE,BFB2,BBB5,D7F8,BFD3,BFE9,BCE1,CCB3,DBDE,B0D3,CEEB,B7D8,D7B9,C6C2,C0A4,CCB9,DBE7,DBE1,C6BA,DBE3,DBE8,C5F7,DBEA,DBE9,BFC0,DBE6,DBE5,B4B9,C0AC,C2A2,DBE2,DBE4,D0CD,DBED,C0DD,DBF2,B6E2,DBF3,DBD2,B9B8,D4AB,DBEC,BFD1,DBF0,DBD1,B5E6,DBEB,BFE5,DBEE,DBF1,DBF9,B9A1,B0A3,C2F1,B3C7,DBEF,DBF8,C6D2,DBF4,DBF5,DBF7,DBF6,DBFE,D3F2,B2BA,DBFD,DCA4,DBFB,DBFA,DBFC,C5E0,BBF9,DCA3,DCA5,CCC3,B6D1,DDC0,DCA1,DCA2,C7B5,B6E9,DCA7,DCA6,DCA9,B1A4,B5CC,BFB0,D1DF,B6C2,DCA8,CBFA,EBF3,CBDC,CBFE,CCC1,C8FB,DCAA,CCEE,DCAB,DBD3,DCAF,DCAC,BEB3,CAFB,DCAD,C9CA,C4B9,C7BD,DCAE,D4F6,D0E6,C4AB,B6D5,DBD4,B1DA,DBD5,DBD6,BABE,C8C0,CABF,C8C9,D7B3,C9F9,BFC7,BAF8,D2BC,E2BA,B4A6,B1B8,B8B4,CFC4,D9E7,CFA6,CDE2,D9ED,B6E0,D2B9,B9BB,E2B9,E2B7,B4F3,CCEC,CCAB,B7F2,D8B2,D1EB,BABB,CAA7,CDB7,D2C4,BFE4,BCD0,B6E1,DEC5,DEC6,DBBC,D1D9,C6E6,C4CE,B7EE,B7DC,BFFC,D7E0,C6F5,B1BC,DEC8,BDB1,CCD7,DECA,DEC9,B5EC,C9DD,B0C2,C5AE,C5AB,C4CC,BCE9,CBFD,BAC3,E5F9,C8E7,E5FA,CDFD,D7B1,B8BE,C2E8,C8D1,E5FB,B6CA,BCCB,D1FD,E6A1,C3EE,E6A4,E5FE,E6A5,CDD7,B7C1,E5FC,E5FD,E6A3,C4DD,E6A8,E6A7,C3C3,C6DE,E6AA,C4B7,E6A2,CABC,BDE3,B9C3,E6A6,D0D5,CEAF,E6A9,E6B0,D2A6,BDAA,E6AD,E6AF,C0D1,D2CC,BCA7,E6B1,D2F6,D7CB,CDFE,CDDE,C2A6,E6AB,E6AC,BDBF,E6AE,E6B3,E6B2,E6B6,E6B8,C4EF,C4C8,BEEA,C9EF,E6B7,B6F0,C3E4,D3E9,E6B4,E6B5,C8A2,E6BD,E6B9,C6C5,CDF1,E6BB,E6BC,BBE9,E6BE,E6BA,C0B7,D3A4,E6BF,C9F4,E6C3,E6C4,D0F6,C3BD,C3C4,E6C2,E6C1,E6C7,CFB1,EBF4,E6CA,E6C5,BCDE,C9A9,BCB5,CFD3,E6C8,E6C9,E6CE,E6D0,E6D1,E6CB,B5D5,E6CC,E6CF,C4DB,E6C6,E6CD,E6D2,E6D4,E6D3,E6D5,D9F8,E6D6,E6D7,D7D3,E6DD,E6DE,BFD7,D4D0,D7D6,B4E6,CBEF,E6DA,D8C3,D7CE,D0A2,C3CF,E6DF,BCBE,B9C2,E6DB,D1A7,BAA2,C2CF,D8AB,CAEB,E5EE,E6DC,B7F5,C8E6,C4F5,E5B2,C4FE,CBFC,E5B3,D5AC,D3EE,CAD8,B0B2,CBCE,CDEA,BAEA,E5B5,E5B4,D7DA,B9D9,D6E6,B6A8,CDF0,D2CB,B1A6,CAB5,B3E8,C9F3,BFCD,D0FB,CAD2,E5B6,BBC2,CFDC,B9AC,D4D7,BAA6,D1E7,CFFC,BCD2,E5B7,C8DD,BFED,B1F6,CBDE,BCC5,BCC4,D2FA,C3DC,BFDC,B8BB,C3C2,BAAE,D4A2,C7DE,C4AF,B2EC,B9D1,E5BB,C1C8,D5AF,E5BC,E5BE,B4E7,B6D4,CBC2,D1B0,B5BC,CAD9,B7E2,C9E4,BDAB,CEBE,D7F0,D0A1,C9D9,B6FB,E6D8,BCE2,B3BE,C9D0,E6D9,B3A2,DECC,D3C8,DECD,D2A2,DECE,BECD,DECF,CAAC,D2FC,B3DF,E5EA,C4E1,BEA1,CEB2,C4F2,BED6,C6A8,B2E3,BED3,C7FC,CCEB,BDEC,CEDD,CABA,C6C1,E5EC,D0BC,D5B9,E5ED,CAF4,CDC0,C2C5,E5EF,C2C4,E5F0,E5F8,CDCD,C9BD,D2D9,E1A8,D3EC,CBEA,C6F1,E1AC,E1A7,E1A9,E1AA,E1AF,B2ED,E1AB,B8DA,E1AD,E1AE,E1B0,B5BA,E1B1,E1B3,E1B8,D1D2,E1B6,E1B5,C1EB,E1B7,D4C0,E1B2,E1BA,B0B6,E1B4,BFF9,E1B9,E1BB,E1BE,E1BC,D6C5,CFBF,E1BD,E1BF,C2CD,B6EB,D3F8,C7CD,B7E5,BEFE,E1C0,E1C1,E1C7,B3E7,C6E9,B4DE,D1C2,E1C8,E1C6,E1C5,E1C3,E1C2,B1C0,D5B8,E1C4,E1CB,E1CC,E1CA,EFFA,E1D3,E1D2,C7B6,E1C9,E1CE,E1D0,E1D4,E1D1,E1CD,E1CF,E1D5,E1D6,E1D7,E1D8,E1DA,E1DB,CEA1,E7DD,B4A8,D6DD,D1B2,B3B2,B9A4,D7F3,C7C9,BEDE,B9AE,CED7,B2EE,DBCF,BCBA,D2D1,CBC8,B0CD,CFEF,D9E3,BDED,B1D2,CAD0,B2BC,CBA7,B7AB,CAA6,CFA3,E0F8,D5CA,E0FB,E0FA,C5C1,CCFB,C1B1,E0F9,D6E3,B2AF,D6C4,B5DB,B4F8,D6A1,CFAF,B0EF,E0FC,E1A1,B3A3,E0FD,E0FE,C3B1,C3DD,E1A2,B7F9,BBCF,E1A3,C4BB,E1A4,E1A5,E1A6,B4B1,B8C9,C6BD,C4EA,B2A2,D0D2,E7DB,BBC3,D3D7,D3C4,B9E3,E2CF,D7AF,C7EC,B1D3,B4B2,E2D1,D0F2,C2AE,E2D0,BFE2,D3A6,B5D7,E2D2,B5EA,C3ED,B8FD,B8AE,C5D3,B7CF,E2D4,E2D3,B6C8,D7F9,CDA5,E2D8,E2D6,CAFC,BFB5,D3B9,E2D5,E2D7,C1AE,C0C8,E2DB,E2DA,C0AA,C1CE,E2DC,E2DD,E2DE,DBC8,D1D3,CDA2,BDA8,DEC3,D8A5,BFAA,DBCD,D2EC,C6FA,C5AA,DEC4,B1D7,DFAE,CABD,DFB1,B9AD,D2FD,B8A5,BAEB,B3DA,B5DC,D5C5,C3D6,CFD2,BBA1,E5F3,E5F2,E5F4,CDE4,C8F5,B5AF,C7BF,E5F6,ECB0,E5E6,B9E9,B5B1,C2BC,E5E8,E5E7,E5E9,D2CD,E1EA,D0CE,CDAE,D1E5,B2CA,B1EB,B1F2,C5ED,D5C3,D3B0,E1DC,E1DD,D2DB,B3B9,B1CB,CDF9,D5F7,E1DE,BEB6,B4FD,E1DF,BADC,E1E0,BBB2,C2C9,E1E1,D0EC,CDBD,E1E2,B5C3,C5C7,E1E3,E1E4,D3F9,E1E5,D1AD,E1E6,CEA2,E1E7,B5C2,E1E8,BBD5,D0C4,E2E0,B1D8,D2E4,E2E1,BCC9,C8CC,E2E3,ECFE,ECFD,DFAF,E2E2,D6BE,CDFC,C3A6,E3C3,D6D2,E2E7,E2E8,D3C7,E2EC,BFEC,E2ED,E2E5,B3C0,C4EE,E2EE,D0C3,BAF6,E2E9,B7DE,BBB3,CCAC,CBCB,E2E4,E2E6,E2EA,E2EB,E2F7,E2F4,D4F5,E2F3,C5AD,D5FA,C5C2,B2C0,E2EF,E2F2,C1AF,CBBC,B5A1,E2F9,BCB1,E2F1,D0D4,D4B9,E2F5,B9D6,E2F6,C7D3,E2F0,D7DC,EDA1,E2F8,EDA5,E2FE,CAD1,C1B5,BBD0,BFD6,BAE3,CBA1,EDA6,EDA3,EDA2,BBD6,EDA7,D0F4,EDA4,BADE,B6F7,E3A1,B6B2,CCF1,B9A7,CFA2,C7A1,BFD2,B6F1,E2FA,E2FB,E2FD,E2FC,C4D5,E3A2,D3C1,E3A7,C7C4,CFA4,E3A9,BAB7,E3A8,BBDA,E3A3,E3A4,E3AA,E3A6,CEF2,D3C6,BBBC,D4C3,C4FA,EDA8,D0FC,E3A5,C3F5,E3AD,B1AF,E3B2,BCC2,E3AC,B5BF,C7E9,E3B0,BEAA,CDEF,BBF3,CCE8,E3AF,E3B1,CFA7,E3AE,CEA9,BBDD,B5EB,BEE5,B2D2,B3CD,B1B9,E3AB,B2D1,B5AC,B9DF,B6E8,CFEB,E3B7,BBCC,C8C7,D0CA,E3B8,B3EE,EDA9,D3FA,D3E4,EDAA,E3B9,D2E2,E3B5,D3DE,B8D0,E3B3,E3B6,B7DF,E3B4,C0A2,E3BA,D4B8,B4C8,E3BB,BBC5,C9F7,C9E5,C4BD,EDAB,C2FD,BBDB,BFAE,CEBF,E3BC,BFB6,B1EF,D4F7,E3BE,EDAD,E3BF,BAA9,EDAC,E3BD,E3C0,BAB6,B6AE,D0B8,B0C3,EDAE,EDAF,C0C1,E3C1,C5B3,E3C2,DCB2,EDB0,B8EA,CEEC,EAA7,D0E7,CAF9,C8D6,CFB7,B3C9,CED2,BDE4,E3DE,BBF2,EAA8,D5BD,C6DD,EAA9,EAAA,EAAC,EAAB,EAAE,EAAD,BDD8,EAAF,C2BE,B4C1,B4F7,BBA7,ECE6,ECE5,B7BF,CBF9,B1E2,ECE7,C9C8,ECE8,ECE9,CAD6,DED0,B2C5,D4FA,C6CB,B0C7,B4F2,C8D3,CDD0,BFB8,BFDB,C7A4,D6B4,C0A9,DED1,C9A8,D1EF,C5A4,B0E7,B3B6,C8C5,B0E2,B7F6,C5FA,B6F3,D5D2,B3D0,BCBC,B3AD,BEF1,B0D1,D2D6,CAE3,D7A5,CDB6,B6B6,BFB9,D5DB,B8A7,C5D7,DED2,BFD9,C2D5,C7C0,BBA4,B1A8,C5EA,C5FB,CCA7,B1A7,B5D6,C4A8,DED3,D1BA,B3E9,C3F2,B7F7,D6F4,B5A3,B2F0,C4B4,C4E9,C0AD,DED4,B0E8,C5C4,C1E0,B9D5,BEDC,CDD8,B0CE,CDCF,DED6,BED0,D7BE,DED5,D5D0,B0DD,C4E2,C2A3,BCF0,D3B5,C0B9,C5A1,B2A6,D4F1,C0A8,CAC3,DED7,D5FC,B9B0,C8AD,CBA9,DED9,BFBD,C6B4,D7A7,CAB0,C4C3,B3D6,B9D2,D6B8,EAFC,B0B4,BFE6,CCF4,CDDA,D6BF,C2CE,CECE,CCA2,D0AE,C4D3,B5B2,DED8,D5F5,BCB7,BBD3,B0A4,C5B2,B4EC,D5F1,EAFD,DEDA,CDA6,CDEC,CEE6,DEDC,CDB1,C0A6,D7BD,DEDB,B0C6,BAB4,C9D3,C4F3,BEE8,B2B6,C0CC,CBF0,BCF1,BBBB,B5B7,C5F5,DEE6,DEE3,BEDD,DEDF,B4B7,BDDD,DEE0,C4ED,CFC6,B5E0,B6DE,CADA,B5F4,DEE5,D5C6,DEE1,CCCD,C6FE,C5C5,D2B4,BEF2,C2D3,CCBD,B3B8,BDD3,BFD8,CDC6,D1DA,B4EB,DEE4,DEDD,DEE7,EAFE,C2B0,DEE2,D6C0,B5A7,B2F4,DEE8,DEF2,DEED,DEF1,C8E0,D7E1,DEEF,C3E8,CCE1,B2E5,D2BE,DEEE,DEEB,CED5,B4A7,BFAB,BEBE,BDD2,DEE9,D4AE,DEDE,DEEA,C0BF,DEEC,B2F3,B8E9,C2A7,BDC1,DEF5,DEF8,B2AB,B4A4,B4EA,C9A6,DEF6,CBD1,B8E3,DEF7,DEFA,DEF9,CCC2,B0E1,B4EE,E5BA,D0AF,B2EB,EBA1,DEF4,C9E3,DEF3,B0DA,D2A1,B1F7,CCAF,DEF0,CBA4,D5AA,DEFB,B4DD,C4A6,DEFD,C3FE,C4A1,DFA1,C1CC,DEFC,BEEF,C6B2,B3C5,C8F6,CBBA,DEFE,DFA4,D7B2,B3B7,C1C3,C7CB,B2A5,B4E9,D7AB,C4EC,DFA2,DFA3,DFA5,BAB3,DFA6,C0DE,C9C3,B2D9,C7E6,DFA7,C7DC,DFA8,EBA2,CBD3,DFAA,DFA9,B2C1,C5CA,DFAB,D4DC,C8C1,DFAC,BEF0,DFAD,D6A7,EAB7,EBB6,CAD5,D8FC,B8C4,B9A5,B7C5,D5FE,B9CA,D0A7,F4CD,B5D0,C3F4,BEC8,EBB7,B0BD,BDCC,C1B2,B1D6,B3A8,B8D2,C9A2,B6D8,EBB8,BEB4,CAFD,C7C3,D5FB,B7F3,CEC4,D5AB,B1F3,ECB3,B0DF,ECB5,B6B7,C1CF,F5FA,D0B1,D5E5,CED3,BDEF,B3E2,B8AB,D5B6,EDBD,B6CF,CBB9,D0C2,B7BD,ECB6,CAA9,C5D4,ECB9,ECB8,C2C3,ECB7,D0FD,ECBA,ECBB,D7E5,ECBC,ECBD,C6EC,CEDE,BCC8,C8D5,B5A9,BEC9,D6BC,D4E7,D1AE,D0F1,EAB8,EAB9,EABA,BAB5,CAB1,BFF5,CDFA,EAC0,B0BA,EABE,C0A5,EABB,B2FD,C3F7,BBE8,D2D7,CEF4,EABF,EABC,EAC3,D0C7,D3B3,B4BA,C3C1,D7F2,D5D1,CAC7,EAC5,EAC4,EAC7,EAC6,D6E7,CFD4,EACB,BBCE,BDFA,C9CE,EACC,C9B9,CFFE,EACA,D4CE,EACD,EACF,CDED,EAC9,EACE,CEEE,BBDE,B3BF,C6D5,BEB0,CEFA,C7E7,BEA7,EAD0,D6C7,C1C0,D4DD,EAD1,CFBE,EAD2,CAEE,C5AF,B0B5,EAD4,EAD3,F4DF,C4BA,B1A9,E5DF,EAD5,CAEF,EAD6,EAD7,C6D8,EAD8,EAD9,D4BB,C7FA,D2B7,B8FC,EAC2,B2DC,C2FC,D4F8,CCE6,D7EE,D4C2,D3D0,EBC3,C5F3,B7FE,EBD4,CBB7,EBDE,C0CA,CDFB,B3AF,C6DA,EBFC,C4BE,CEB4,C4A9,B1BE,D4FD,CAF5,D6EC,C6D3,B6E4,BBFA,D0E0,C9B1,D4D3,C8A8,B8CB,E8BE,C9BC,E8BB,C0EE,D0D3,B2C4,B4E5,E8BC,D5C8,B6C5,E8BD,CAF8,B8DC,CCF5,C0B4,D1EE,E8BF,E8C2,BABC,B1AD,BDDC,EABD,E8C3,E8C6,E8CB,E8CC,CBC9,B0E5,BCAB,B9B9,E8C1,CDF7,E8CA,CEF6,D5ED,C1D6,E8C4,C3B6,B9FB,D6A6,E8C8,CAE0,D4E6,E8C0,E8C5,E8C7,C7B9,B7E3,E8C9,BFDD,E8D2,E8D7,E8D5,BCDC,BCCF,E8DB,E8DE,E8DA,B1FA,B0D8,C4B3,B8CC,C6E2,C8BE,C8E1,E8CF,E8D4,E8D6,B9F1,E8D8,D7F5,C4FB,E8DC,B2E9,E8D1,BCED,BFC2,E8CD,D6F9,C1F8,B2F1,E8DF,CAC1,E8D9,D5A4,B1EA,D5BB,E8CE,E8D0,B6B0,E8D3,E8DD,C0B8,CAF7,CBA8,C6DC,C0F5,E8E9,D0A3,E8F2,D6EA,E8E0,E8E1,D1F9,BACB,B8F9,B8F1,D4D4,E8EF,E8EE,E8EC,B9F0,CCD2,E8E6,CEA6,BFF2,B0B8,E8F1,E8F0,D7C0,E8E4,CDA9,C9A3,BBB8,BDDB,E8EA,E8E2,E8E3,E8E5,B5B5,E8E7,C7C5,E8EB,E8ED,BDB0,D7AE,E8F8,E8F5,CDB0,E8F6,C1BA,E8E8,C3B7,B0F0,E8F4,E8F7,B9A3,C9D2,C3CE,CEE0,C0E6,CBF3,CCDD,D0B5,CAE1,E8F3,BCEC,E8F9,C3DE,C6E5,B9F7,B0F4,D7D8,BCAC,C5EF,CCC4,E9A6,C9AD,E9A2,C0E2,BFC3,E8FE,B9D7,E8FB,E9A4,D2CE,E9A3,D6B2,D7B5,E9A7,BDB7,E8FC,E8FD,E9A1,CDD6,D2AC,E9B2,E9A9,B4AA,B4BB,E9AB,D0A8,E9A5,B3FE,E9AC,C0E3,E9AA,E9B9,E9B8,E9AE,E8FA,E9A8,BFAC,E9B1,E9BA,C2A5,E9AF,B8C5,E9AD,D3DC,E9B4,E9B5,E9B7,E9C7,C0C6,E9C5,E9B0,E9BB,B0F1,E9BC,D5A5,E9BE,E9BF,E9C1,C1F1,C8B6,E9BD,E9C2,E9C3,E9B3,E9B6,BBB1,E9C0,BCF7,E9C4,E9C6,E9CA,E9CE,B2DB,E9C8,B7AE,E9CB,E9CC,D5C1,C4A3,E9D8,BAE1,E9C9,D3A3,E9D4,E9D7,E9D0,E9CF,C7C1,E9D2,E9D9,B3C8,E9D3,CFF0,E9CD,B3F7,E9D6,E9DA,CCB4,CFAD,E9D5,E9DC,E9DB,E9DE,E9D1,E9DD,E9DF,C3CA,C7B7,B4CE,BBB6,D0C0,ECA3,C5B7,D3FB,ECA4,ECA5,C6DB,BFEE,ECA6,ECA7,D0AA,C7B8,B8E8,ECA8,D6B9,D5FD,B4CB,B2BD,CEE4,C6E7,CDE1,B4F5,CBC0,BCDF,E9E2,E9E3,D1EA,E9E5,B4F9,E9E4,D1B3,CAE2,B2D0,E9E8,E9E6,E9E7,D6B3,E9E9,E9EA,E9EB,E9EC,ECAF,C5B9,B6CE,D2F3,B5EE,BBD9,ECB1,D2E3,CEE3,C4B8,C3BF,B6BE,D8B9,B1C8,B1CF,B1D1,C5FE,B1D0,C3AB,D5B1,EBA4,BAC1,CCBA,EBA5,EBA7,EBA8,EBA6,EBA9,EBAB,EBAA,EBAC,CACF,D8B5,C3F1,C3A5,C6F8,EBAD,C4CA,EBAE,EBAF,EBB0,B7D5,B7FA,EBB1,C7E2,EBB3,BAA4,D1F5,B0B1,EBB2,EBB4,B5AA,C2C8,C7E8,EBB5,CBAE,E3DF,D3C0,D9DB,CDA1,D6AD,C7F3,D9E0,BBE3,BABA,E3E2,CFAB,E3E0,C9C7,BAB9,D1B4,E3E1,C8EA,B9AF,BDAD,B3D8,CEDB,CCC0,E3E8,E3E9,CDF4,CCAD,BCB3,E3EA,E3EB,D0DA,C6FB,B7DA,C7DF,D2CA,CED6,E3E4,E3EC,C9F2,B3C1,E3E7,C6E3,E3E5,EDB3,E3E6,C9B3,C5E6,B9B5,C3BB,E3E3,C5BD,C1A4,C2D9,B2D7,E3ED,BBA6,C4AD,E3F0,BEDA,E3FB,E3F5,BAD3,B7D0,D3CD,D6CE,D5D3,B9C1,D5B4,D1D8,D0B9,C7F6,C8AA,B2B4,C3DA,E3EE,E3FC,E3EF,B7A8,E3F7,E3F4,B7BA,C5A2,E3F6,C5DD,B2A8,C6FC,C4E0,D7A2,C0E1,E3F9,E3FA,E3FD,CCA9,E3F3,D3BE,B1C3,EDB4,E3F1,E3F2,E3F8,D0BA,C6C3,D4F3,E3FE,BDE0,E4A7,E4A6,D1F3,E4A3,E4A9,C8F7,CFB4,E4A8,E4AE,C2E5,B6B4,BDF2,E4A2,BAE9,E4AA,E4AC,B6FD,D6DE,E4B2,E4AD,E4A1,BBEE,CDDD,C7A2,C5C9,C1F7,E4A4,C7B3,BDAC,BDBD,E4A5,D7C7,B2E2,E4AB,BCC3,E4AF,BBEB,E4B0,C5A8,E4B1,D5E3,BFA3,E4BA,E4B7,E4BB,E4BD,C6D6,BAC6,C0CB,B8A1,E4B4,D4A1,BAA3,BDFE,E4BC,CDBF,C4F9,CFFB,C9E6,D3BF,CFD1,E4B3,E4B8,E4B9,CCE9,CCCE,C0D4,E4B5,C1B0,E4B6,CED0,BBC1,B5D3,C8F3,BDA7,D5C7,C9AC,B8A2,E4CA,E4CC,D1C4,D2BA,BAAD,BAD4,E4C3,B5ED,D7CD,E4C0,CFFD,E4BF,C1DC,CCCA,CAE7,C4D7,CCD4,E4C8,E4C7,E4C1,E4C4,B5AD,D3D9,E4C6,D2F9,B4E3,BBB4,C9EE,B4BE,BBEC,D1CD,CCED,EDB5,C7E5,D4A8,E4CB,D7D5,E4C2,BDA5,E4C5,D3E6,E4C9,C9F8,E4BE,D3E5,C7FE,B6C9,D4FC,B2B3,E4D7,CEC2,E4CD,CEBC,B8DB,E4D6,BFCA,D3CE,C3EC,C5C8,E4D8,CDC4,E4CF,E4D4,E4D5,BAFE,CFE6,D5BF,E4D2,E4D0,E4CE,CDE5,CAAA,C0A3,BDA6,E4D3,B8C8,E4E7,D4B4,E4DB,C1EF,E4E9,D2E7,E4DF,E4E0,CFAA,CBDD,E4DA,E4D1,E4E5,C8DC,E4E3,C4E7,E4E2,E4E1,B3FC,E4E8,B5E1,D7CC,E4E6,BBAC,D7D2,CCCF,EBF8,E4E4,B9F6,D6CD,E4D9,E4DC,C2FA,E4DE,C2CB,C0C4,C2D0,B1F5,CCB2,B5CE,E4EF,C6AF,C6E1,E4F5,C2A9,C0EC,D1DD,E4EE,C4AE,E4ED,E4F6,E4F4,C2FE,E4DD,E4F0,CAFE,D5C4,E4F1,D1FA,E4EB,E4EC,E4F2,CEAB,C5CB,C7B1,C2BA,E4EA,C1CA,CCB6,B3B1,E4FB,E4F3,E4FA,E4FD,E4FC,B3CE,B3BA,E4F7,E4F9,E4F8,C5EC,C0BD,D4E8,E5A2,B0C4,E5A4,E5A3,BCA4,E5A5,E5A1,E4FE,B1F4,E5A8,E5A9,E5A6,E5A7,E5AA,C6D9,E5AB,E5AD,E5AC,E5AF,E5AE,B9E0,E5B0,E5B1,BBF0,ECE1,C3F0,B5C6,BBD2,C1E9,D4EE,BEC4,D7C6,D4D6,B2D3,ECBE,EAC1,C2AF,B4B6,D1D7,B3B4,C8B2,BFBB,ECC0,D6CB,ECBF,ECC1,ECC5,BEE6,CCBF,C5DA,BEBC,ECC6,B1FE,ECC4,D5A8,B5E3,ECC2,C1B6,B3E3,ECC3,CBB8,C0C3,CCFE,C1D2,ECC8,BAE6,C0D3,D6F2,D1CC,BFBE,B7B3,C9D5,ECC7,BBE2,CCCC,BDFD,C8C8,CFA9,CDE9,C5EB,B7E9,D1C9,BAB8,ECC9,ECCA,BBC0,ECCB,ECE2,B1BA,B7D9,BDB9,ECCC,D1E6,ECCD,C8BB,ECD1,ECD3,BBCD,BCE5,ECCF,C9B7,C3BA,ECE3,D5D5,ECD0,D6F3,ECD2,ECCE,ECD4,ECD5,C9BF,CFA8,D0DC,D1AC,C8DB,ECD6,CEF5,CAEC,ECDA,ECD9,B0BE,ECD7,ECD8,ECE4,C8BC,C1C7,ECDC,D1E0,ECDB,D4EF,ECDD,DBC6,ECDE,B1AC,ECDF,ECE0,D7A6,C5C0,EBBC,B0AE,BEF4,B8B8,D2AF,B0D6,B5F9,D8B3,CBAC,E3DD,C6AC,B0E6,C5C6,EBB9,EBBA,EBBB,D1C0,C5A3,EAF2,C4B2,C4B5,C0CE,EAF3,C4C1,CEEF,EAF0,EAF4,C9FC,C7A3,CCD8,CEFE,EAF5,EAF6,CFAC,C0E7,EAF7,B6BF,EAF8,EAF9,EAFA,EAFB,EAF1,C8AE,E1EB,B7B8,E1EC,E1ED,D7B4,E1EE,E1EF,D3CC,E1F1,BFF1,E1F0,B5D2,B1B7,E1F3,E1F2,BAFC,E1F4,B9B7,BED1,C4FC,BADD,BDC6,E1F5,E1F7,B6C0,CFC1,CAA8,E1F6,D5F8,D3FC,E1F8,E1FC,E1F9,E1FA,C0EA,E1FE,E2A1,C0C7,E1FB,E1FD,E2A5,C1D4,E2A3,E2A8,B2FE,E2A2,C3CD,B2C2,E2A7,E2A6,E2A4,E2A9,E2AB,D0C9,D6ED,C3A8,E2AC,CFD7,E2AE,BAEF,E9E0,E2AD,E2AA,BBAB,D4B3,E2B0,E2AF,E9E1,E2B1,E2B2,E2B3,CCA1,E2B4,E2B5,D0FE,C2CA,D3F1,CDF5,E7E0,E7E1,BEC1,C2EA,E7E4,E7E3,CDE6,C3B5,E7E2,BBB7,CFD6,C1E1,E7E9,E7E8,E7F4,B2A3,E7EA,E7E6,E7EC,E7EB,C9BA,D5E4,E7E5,B7A9,E7E7,E7EE,E7F3,D6E9,E7ED,E7F2,E7F1,B0E0,E7F5,C7F2,C0C5,C0ED,C1F0,E7F0,E7F6,CBF6,E8A2,E8A1,D7C1,E7FA,E7F9,E7FB,E7F7,E7FE,E7FD,E7FC,C1D5,C7D9,C5FD,C5C3,C7ED,E8A3,E8A6,E8A5,E8A7,BAF7,E7F8,E8A4,C8F0,C9AA,E8A9,B9E5,D1FE,E8A8,E8AA,E8AD,E8AE,C1A7,E8AF,E8B0,E8AC,E8B4,E8AB,E8B1,E8B5,E8B2,E8B3,E8B7,E8B6,B9CF,F0AC,F0AD,C6B0,B0EA,C8BF,CDDF,CECD,EAB1,EAB2,C6BF,B4C9,EAB3,D5E7,DDF9,EAB4,EAB5,EAB6,B8CA,DFB0,C9F5,CCF0,C9FA,C9FB,D3C3,CBA6,B8A6,F0AE,B1C2,E5B8,CCEF,D3C9,BCD7,C9EA,B5E7,C4D0,B5E9,EEAE,BBAD,E7DE,EEAF,B3A9,EEB2,EEB1,BDE7,EEB0,CEB7,C5CF,C1F4,DBCE,EEB3,D0F3,C2D4,C6E8,B7AC,EEB4,B3EB,BBFB,EEB5,E7DC,EEB6,BDAE,F1E2,CAE8,D2C9,F0DA,F0DB,F0DC,C1C6,B8ED,BECE,F0DE,C5B1,F0DD,D1F1,F0E0,B0CC,BDEA,D2DF,F0DF,B4AF,B7E8,F0E6,F0E5,C6A3,F0E1,F0E2,B4C3,F0E3,D5EE,CCDB,BED2,BCB2,F0E8,F0E7,F0E4,B2A1,D6A2,D3B8,BEB7,C8AC,F0EA,D1F7,D6CC,BADB,F0E9,B6BB,CDB4,C6A6,C1A1,F0EB,F0EE,F0ED,F0F0,F0EC,BBBE,F0EF,CCB5,F0F2,B3D5,B1D4,F0F3,F0F4,F0F6,B4E1,F0F1,F0F7,F0FA,F0F8,F0F5,F0FD,F0F9,F0FC,F0FE,F1A1,CEC1,F1A4,F1A3,C1F6,F0FB,CADD,B4F1,B1F1,CCB1,F1A6,F1A7,F1AC,D5CE,F1A9,C8B3,F1A2,F1AB,F1A8,F1A5,F1AA,B0A9,F1AD,F1AF,F1B1,F1B0,F1AE,D1A2,F1B2,F1B3,B9EF,B5C7,B0D7,B0D9,D4ED,B5C4,BDD4,BBCA,F0A7,B8DE,F0A8,B0A8,F0A9,CDEE,F0AA,F0AB,C6A4,D6E5,F1E4,F1E5,C3F3,D3DB,D6D1,C5E8,D3AF,D2E6,EEC1,B0BB,D5B5,D1CE,BCE0,BAD0,BFF8,B8C7,B5C1,C5CC,CAA2,C3CB,EEC2,C4BF,B6A2,EDEC,C3A4,D6B1,CFE0,EDEF,C5CE,B6DC,CAA1,EDED,EDF0,EDF1,C3BC,BFB4,EDEE,EDF4,EDF2,D5E6,C3DF,EDF3,EDF6,D5A3,D1A3,EDF5,C3D0,EDF7,BFF4,BEEC,EDF8,CCF7,D1DB,D7C5,D5F6,EDFC,EDFB,EDF9,EDFA,EDFD,BEA6,CBAF,EEA1,B6BD,EEA2,C4C0,EDFE,BDDE,B2C7,B6C3,EEA5,D8BA,EEA3,EEA6,C3E9,B3F2,EEA7,EEA4,CFB9,EEA8,C2F7,EEA9,EEAA,DEAB,C6B3,C7C6,D6F5,B5C9,CBB2,EEAB,CDAB,EEAC,D5B0,EEAD,F6C4,DBC7,B4A3,C3AC,F1E6,CAB8,D2D3,D6AA,EFF2,BED8,BDC3,EFF3,B6CC,B0AB,CAAF,EDB6,EDB7,CEF9,B7AF,BFF3,EDB8,C2EB,C9B0,EDB9,C6F6,BFB3,EDBC,C5F8,D1D0,D7A9,EDBA,EDBB,D1E2,EDBF,EDC0,EDC4,EDC8,EDC6,EDCE,D5E8,EDC9,EDC7,EDBE,C5E9,C6C6,C9E9,D4D2,EDC1,EDC2,EDC3,EDC5,C0F9,B4A1,B9E8,EDD0,EDD1,EDCA,EDCF,CEF8,CBB6,EDCC,EDCD,CFF5,EDD2,C1F2,D3B2,EDCB,C8B7,BCEF,C5F0,EDD6,B5EF,C2B5,B0AD,CBE9,B1AE,EDD4,CDEB,B5E2,EDD5,EDD3,EDD7,B5FA,EDD8,EDD9,EDDC,B1CC,C5F6,BCEE,EDDA,CCBC,B2EA,EDDB,C4EB,B4C5,B0F5,EDDF,C0DA,B4E8,C5CD,EDDD,BFC4,EDDE,C4A5,EDE0,EDE1,EDE3,C1D7,BBC7,BDB8,EDE2,EDE4,EDE6,EDE5,EDE7,CABE,ECEA,C0F1,C9E7,ECEB,C6EE,ECEC,C6ED,ECED,ECF0,D7E6,ECF3,ECF1,ECEE,ECEF,D7A3,C9F1,CBEE,ECF4,ECF2,CFE9,ECF6,C6B1,BCC0,ECF5,B5BB,BBF6,ECF7,D9F7,BDFB,C2BB,ECF8,ECF9,B8A3,ECFA,ECFB,ECFC,D3ED,D8AE,C0EB,C7DD,BACC,D0E3,CBBD,CDBA,B8D1,B1FC,C7EF,D6D6,BFC6,C3EB,EFF5,C3D8,D7E2,EFF7,B3D3,C7D8,D1ED,D6C8,EFF8,EFF6,BBFD,B3C6,BDD5,D2C6,BBE0,CFA1,EFFC,EFFB,EFF9,B3CC,C9D4,CBB0,EFFE,B0DE,D6C9,EFFD,B3ED,F6D5,CEC8,F0A2,F0A1,B5BE,BCDA,BBFC,B8E5,C4C2,F0A3,CBEB,F0A6,D1A8,BEBF,C7EE,F1B6,F1B7,BFD5,B4A9,F1B8,CDBB,C7D4,D5AD,F1B9,F1BA,C7CF,D2A4,D6CF,F1BB,BDD1,B4B0,BEBD,B4DC,CED1,BFDF,F1BD,BFFA,F1BC,F1BF,F1BE,F1C0,F1C1,C1FE,C1A2,CAFA,D5BE,BEBA,BEB9,D5C2,BFA2,CDAF,F1B5,BDDF,B6CB,D6F1,F3C3,F3C4,B8CD,F3C6,F3C7,B0CA,F3C5,F3C9,CBF1,F3CB,D0A6,B1CA,F3C8,F3CF,B5D1,F3D7,F3D2,F3D4,F3D3,B7FB,B1BF,F3CE,F3CA,B5DA,F3D0,F3D1,F3D5,F3CD,BCE3,C1FD,F3D6,F3DA,F3CC,B5C8,BDEE,F3DC,B7A4,BFF0,D6FE,CDB2,B4F0,B2DF,F3D8,F3D9,C9B8,F3DD,F3DE,F3E1,F3DF,F3E3,F3E2,F3DB,BFEA,B3EF,F3E0,C7A9,BCF2,F3EB,B9BF,F3E4,B2AD,BBFE,CBE3,F3ED,F3E9,B9DC,F3EE,F3E5,F3E6,F3EA,C2E1,F3EC,F3EF,F3E8,BCFD,CFE4,F3F0,F3E7,F3F2,D7AD,C6AA,F3F3,F3F1,C2A8,B8DD,F3F5,F3F4,B4DB,F3F6,F3F7,F3F8,C0BA,C0E9,C5F1,F3FB,F3FA,B4D8,F3FE,F3F9,F3FC,F3FD,F4A1,F4A3,BBC9,F4A2,F4A4,B2BE,F4A6,F4A5,BCAE,C3D7,D9E1,C0E0,F4CC,D7D1,B7DB,F4CE,C1A3,C6C9,B4D6,D5B3,F4D0,F4CF,F4D1,CBDA,F4D2,D4C1,D6E0,B7E0,C1B8,C1BB,F4D3,BEAC,B4E2,F4D4,F4D5,BEAB,F4D6,F4DB,F4D7,F4DA,BAFD,F4D8,F4D9,B8E2,CCC7,F4DC,B2DA,C3D3,D4E3,BFB7,F4DD,C5B4,F4E9,CFB5,CEC9,CBD8,CBF7,BDF4,D7CF,C0DB,D0F5,F4EA,F4EB,F4EC,F7E3,B7B1,F4ED,D7EB,F4EE,E6F9,BEC0,E6FA,BAEC,E6FB,CFCB,E6FC,D4BC,BCB6,E6FD,E6FE,BCCD,C8D2,CEB3,E7A1,B4BF,E7A2,C9B4,B8D9,C4C9,D7DD,C2DA,B7D7,D6BD,CEC6,B7C4,C5A6,E7A3,CFDF,E7A4,E7A5,E7A6,C1B7,D7E9,C9F0,CFB8,D6AF,D6D5,E7A7,B0ED,E7A8,E7A9,C9DC,D2EF,BEAD,E7AA,B0F3,C8DE,BDE1,E7AB,C8C6,E7AC,BBE6,B8F8,D1A4,E7AD,C2E7,BEF8,BDCA,CDB3,E7AE,E7AF,BEEE,D0E5,CBE7,CCD0,BCCC,E7B0,BCA8,D0F7,E7B1,D0F8,E7B2,E7B3,B4C2,E7B4,E7B5,C9FE,CEAC,C3E0,E7B7,B1C1,B3F1,E7B8,E7B9,D7DB,D5C0,E7BA,C2CC,D7BA,E7BB,E7BC,E7BD,BCEA,C3E5,C0C2,E7BE,E7BF,BCA9,E7C0,E7C1,E7B6,B6D0,E7C2,E7C3,E7C4,BBBA,B5DE,C2C6,B1E0,E7C5,D4B5,E7C6,B8BF,E7C8,E7C7,B7EC,E7C9,B2F8,E7CA,E7CB,E7CC,E7CD,E7CE,E7CF,E7D0,D3A7,CBF5,E7D1,E7D2,E7D3,E7D4,C9C9,E7D5,E7D6,E7D7,E7D8,E7D9,BDC9,E7DA,F3BE,B8D7,C8B1,F3BF,F3C0,F3C1,B9DE,CDF8,D8E8,BAB1,C2DE,EEB7,B7A3,EEB9,EEB8,B0D5,EEBB,D5D6,D7EF,D6C3,EEBD,CAF0,EEBC,EEBE,EEC0,EEBF,D1F2,C7BC,C3C0,B8E1,C1E7,F4C6,D0DF,F4C7,CFDB,C8BA,F4C8,F4C9,F4CA,F4CB,D9FA,B8FE,E5F1,D3F0,F4E0,CECC,B3E1,F1B4,D2EE,F4E1,CFE8,F4E2,C7CC,B5D4,B4E4,F4E4,F4E3,F4E5,F4E6,F4E7,BAB2,B0BF,F4E8,B7AD,D2ED,D2AB,C0CF,BFBC,EBA3,D5DF,EAC8,F1F3,B6F8,CBA3,C4CD,F1E7,F1E8,B8FB,F1E9,BAC4,D4C5,B0D2,F1EA,F1EB,F1EC,F1ED,F1EE,F1EF,F1F1,F1F0,C5D5,F1F2,B6FA,F1F4,D2AE,DEC7,CBCA,B3DC,B5A2,B9A2,C4F4,F1F5,F1F6,C1C4,C1FB,D6B0,F1F7,F1F8,C1AA,C6B8,BEDB,F1F9,B4CF,F1FA,EDB2,EDB1,CBE0,D2DE,CBC1,D5D8,C8E2,C0DF,BCA1,EBC1,D0A4,D6E2,B6C7,B8D8,EBC0,B8CE,EBBF,B3A6,B9C9,D6AB,B7F4,B7CA,BCE7,B7BE,EBC6,EBC7,B0B9,BFCF,EBC5,D3FD,EBC8,EBC9,B7CE,EBC2,EBC4,C9F6,D6D7,D5CD,D0B2,EBCF,CEB8,EBD0,B5A8,B1B3,EBD2,CCA5,C5D6,EBD3,EBD1,C5DF,EBCE,CAA4,EBD5,B0FB,BAFA,D8B7,F1E3,EBCA,EBCB,EBCC,EBCD,EBD6,E6C0,EBD9,BFE8,D2C8,EBD7,EBDC,B8EC,EBD8,BDBA,D0D8,B0B7,EBDD,C4DC,D6AC,B4E0,C2F6,BCB9,EBDA,EBDB,D4E0,C6EA,C4D4,EBDF,C5A7,D9F5,B2B1,EBE4,BDC5,EBE2,EBE3,B8AC,CDD1,EBE5,EBE1,C1B3,C6A2,CCF3,EBE6,C0B0,D2B8,EBE7,B8AF,B8AD,EBE8,C7BB,CDF3,EBEA,EBEB,EBED,D0C8,EBF2,EBEE,EBF1,C8F9,D1FC,EBEC,EBE9,B8B9,CFD9,C4E5,EBEF,EBF0,CCDA,CDC8,B0F2,EBF6,EBF5,B2B2,B8E0,EBF7,B1EC,CCC5,C4A4,CFA5,EBF9,ECA2,C5F2,EBFA,C9C5,E2DF,EBFE,CDCE,ECA1,B1DB,D3B7,D2DC,EBFD,EBFB,B3BC,EAB0,D7D4,F4AB,B3F4,D6C1,D6C2,D5E9,BECA,F4A7,D2A8,F4A8,F4A9,F4AA,BECB,D3DF,C9E0,C9E1,F3C2,CAE6,CCF2,E2B6,CBB4,CEE8,D6DB,F4AD,F4AE,F4AF,F4B2,BABD,F4B3,B0E3,F4B0,F4B1,BDA2,B2D5,F4B6,F4B7,B6E6,B2B0,CFCF,F4B4,B4AC,F4B5,F4B8,F4B9,CDA7,F4BA,F4BB,F4BC,CBD2,F4BD,F4BE,F4BF,F4DE,C1BC,BCE8,C9AB,D1DE,E5F5,DCB3,D2D5,DCB4,B0AC,DCB5,BDDA,DCB9,D8C2,DCB7,D3F3,C9D6,DCBA,DCB6,DCBB,C3A2,DCBC,DCC5,DCBD,CEDF,D6A5,DCCF,DCCD,DCD2,BDE6,C2AB,DCB8,DCCB,DCCE,DCBE,B7D2,B0C5,DCC7,D0BE,DCC1,BBA8,B7BC,DCCC,DCC6,DCBF,C7DB,D1BF,DCC0,DCCA,DCD0,CEAD,DCC2,DCC3,DCC8,DCC9,B2D4,DCD1,CBD5,D4B7,DCDB,DCDF,CCA6,DCE6,C3E7,DCDC,BFC1,DCD9,B0FA,B9B6,DCE5,DCD3,DCC4,DCD6,C8F4,BFE0,C9BB,B1BD,D3A2,DCDA,DCD5,C6BB,DCDE,D7C2,C3AF,B7B6,C7D1,C3A9,DCE2,DCD8,DCEB,DCD4,DCDD,BEA5,DCD7,DCE0,DCE3,DCE4,DCF8,DCE1,DDA2,DCE7,BCEB,B4C4,C3A3,B2E7,DCFA,DCF2,DCEF,DCFC,DCEE,D2F0,B2E8,C8D7,C8E3,DCFB,DCED,DCF7,DCF5,BEA3,DCF4,B2DD,DCF3,BCF6,DCE8,BBC4,C0F3,BCD4,DCE9,DCEA,DCF1,DCF6,DCF9,B5B4,C8D9,BBE7,DCFE,DCFD,D3AB,DDA1,DDA3,DDA5,D2F1,DDA4,DDA6,DDA7,D2A9,BAC9,DDA9,DDB6,DDB1,DDB4,DDB0,C6CE,C0F2,C9AF,DCEC,DDAE,DDB7,DCF0,DDAF,DDB8,DDAC,DDB9,DDB3,DDAD,C4AA,DDA8,C0B3,C1AB,DDAA,DDAB,DDB2,BBF1,DDB5,D3A8,DDBA,DDBB,C3A7,DDD2,DDBC,DDD1,B9BD,BED5,BEFA,BACA,DDCA,DDC5,DDBF,B2CB,DDC3,DDCB,B2A4,DDD5,DDBE,C6D0,DDD0,DDD4,C1E2,B7C6,DDCE,DDCF,DDC4,DDBD,DDCD,CCD1,DDC9,DDC2,C3C8,C6BC,CEAE,DDCC,DDC8,DDC1,DDC6,C2DC,D3A9,D3AA,DDD3,CFF4,C8F8,DDE6,DDC7,DDE0,C2E4,DDE1,DDD7,D6F8,DDD9,DDD8,B8F0,DDD6,C6CF,B6AD,DDE2,BAF9,D4E1,DDE7,B4D0,DDDA,BFFB,DDE3,DDDF,DDDD,B5D9,DDDB,DDDC,DDDE,BDAF,DDE4,DDE5,DDF5,C3C9,CBE2,DDF2,D8E1,C6D1,DDF4,D5F4,DDF3,DDF0,DDEC,DDEF,DDE8,D0EE,C8D8,DDEE,DDE9,DDEA,CBF2,DDED,B1CD,C0B6,BCBB,DDF1,DDF7,DDF6,DDEB,C5EE,DDFB,DEA4,DEA3,DDF8,C3EF,C2FB,D5E1,CEB5,DDFD,B2CC,C4E8,CADF,C7BE,DDFA,DDFC,DDFE,DEA2,B0AA,B1CE,DEAC,DEA6,BDB6,C8EF,DEA1,DEA5,DEA9,DEA8,DEA7,DEAD,D4CC,DEB3,DEAA,DEAE,C0D9,B1A1,DEB6,DEB1,DEB2,D1A6,DEB5,DEAF,DEB0,D0BD,DEB4,CAED,DEB9,DEB8,DEB7,DEBB,BDE5,B2D8,C3EA,DEBA,C5BA,DEBC,CCD9,B7AA,D4E5,DEBD,DEBF,C4A2,DEC1,DEBE,DEC0,D5BA,DEC2,F2AE,BBA2,C2B2,C5B0,C2C7,F2AF,D0E9,D3DD,EBBD,B3E6,F2B0,F2B1,CAAD,BAE7,F2B3,F2B5,F2B4,CBE4,CFBA,F2B2,CAB4,D2CF,C2EC,CEC3,F2B8,B0F6,F2B7,F2BE,B2CF,D1C1,F2BA,F2BC,D4E9,F2BB,F2B6,F2BF,F2BD,F2B9,F2C7,F2C4,F2C6,F2CA,F2C2,F2C0,F2C5,D6FB,F2C1,C7F9,C9DF,F2C8,B9C6,B5B0,F2C3,F2C9,F2D0,F2D6,BBD7,F2D5,CDDC,D6EB,F2D2,F2D4,B8F2,F2CB,F2CE,C2F9,D5DD,F2CC,F2CD,F2CF,F2D3,F2D9,D3BC,B6EA,CAF1,B7E4,F2D7,F2D8,F2DA,F2DD,F2DB,F2DC,D1D1,F2D1,CDC9,CECF,D6A9,F2E3,C3DB,F2E0,C0AF,F2EC,F2DE,F2E1,F2E8,F2E2,F2E7,F2E6,F2E9,F2DF,F2E4,F2EA,D3AC,F2E5,B2F5,F2F2,D0AB,F2F5,BBC8,F2F9,F2F0,F2F6,F2F8,F2FA,F2F3,F2F1,BAFB,B5FB,F2EF,F2F7,F2ED,F2EE,F2EB,F3A6,F3A3,F3A2,F2F4,C8DA,F2FB,F3A5,C3F8,F2FD,F3A7,F3A9,F3A4,F2FC,F3AB,F3AA,C2DD,F3AE,F3B0,F3A1,F3B1,F3AC,F3AF,F2FE,F3AD,F3B2,F3B4,F3A8,F3B3,F3B5,D0B7,F3B8,D9F9,F3B9,F3B7,C8E4,F3B6,F3BA,F3BB,B4C0,EEC3,F3BC,F3BD,D1AA,F4AC,D0C6,D0D0,D1DC,CFCE,BDD6,D1C3,BAE2,E1E9,D2C2,F1C2,B2B9,B1ED,F1C3,C9C0,B3C4,D9F2,CBA5,F1C4,D6D4,F1C5,F4C0,F1C6,D4AC,F1C7,B0C0,F4C1,F4C2,B4FC,C5DB,CCBB,D0E4,CDE0,F1C8,D9F3,B1BB,CFAE,B8A4,F1CA,F1CB,B2C3,C1D1,D7B0,F1C9,F1CC,F1CE,D9F6,D2E1,D4A3,F4C3,C8B9,F4C4,F1CD,F1CF,BFE3,F1D0,F1D4,F1D6,F1D1,C9D1,C5E1,C2E3,B9FC,F1D3,F1D5,B9D3,F1DB,BAD6,B0FD,F1D9,F1D8,F1D2,F1DA,F1D7,C8EC,CDCA,F1DD,E5BD,F1DC,F1DE,F1DF,CFE5,F4C5,BDF3,F1E0,F1E1,CEF7,D2AA,F1FB,B8B2,BCFB,B9DB,B9E6,C3D9,CAD3,EAE8,C0C0,BEF5,EAE9,EAEA,EAEB,EAEC,EAED,EAEE,EAEF,BDC7,F5FB,F5FD,F5FE,F5FC,BDE2,F6A1,B4A5,F6A2,F6A3,ECB2,D1D4,D9EA,F6A4,EEBA,D5B2,D3FE,CCDC,CAC4,E5C0,F6A5,BEAF,C6A9,DAA5,BCC6,B6A9,B8BC,C8CF,BCA5,DAA6,DAA7,CCD6,C8C3,DAA8,C6FD,D1B5,D2E9,D1B6,BCC7,BDB2,BBE4,DAA9,DAAA,D1C8,DAAB,D0ED,B6EF,C2DB,CBCF,B7ED,C9E8,B7C3,BEF7,D6A4,DAAC,DAAD,C6C0,D7E7,CAB6,D5A9,CBDF,D5EF,DAAE,D6DF,B4CA,DAB0,DAAF,D2EB,DAB1,DAB2,DAB3,CAD4,DAB4,CAAB,DAB5,DAB6,B3CF,D6EF,DAB7,BBB0,B5AE,DAB8,DAB9,B9EE,D1AF,D2E8,DABA,B8C3,CFEA,B2EF,DABB,DABC,BDEB,CEDC,D3EF,DABD,CEF3,DABE,D3D5,BBE5,DABF,CBB5,CBD0,DAC0,C7EB,D6EE,DAC1,C5B5,B6C1,DAC2,B7CC,BFCE,DAC3,DAC4,CBAD,DAC5,B5F7,DAC6,C1C2,D7BB,DAC7,CCB8,D2EA,C4B1,DAC8,B5FD,BBD1,DAC9,D0B3,DACA,DACB,CEBD,DACC,DACD,DACE,B2F7,DAD1,DACF,D1E8,DAD0,C3D5,DAD2,DAD3,DAD4,DAD5,D0BB,D2A5,B0F9,DAD6,C7AB,DAD7,BDF7,C3A1,DAD8,DAD9,C3FD,CCB7,DADA,DADB,C0BE,C6D7,DADC,DADD,C7B4,DADE,DADF,B9C8,BBED,B6B9,F4F8,F4F9,CDE3,F5B9,EBE0,CFF3,BBBF,BAC0,D4A5,E1D9,F5F4,B1AA,B2F2,F5F5,F5F7,BAD1,F5F6,C3B2,F5F9,F5F8,B1B4,D5EA,B8BA,B9B1,B2C6,D4F0,CFCD,B0DC,D5CB,BBF5,D6CA,B7B7,CCB0,C6B6,B1E1,B9BA,D6FC,B9E1,B7A1,BCFA,EADA,EADB,CCF9,B9F3,EADC,B4FB,C3B3,B7D1,BAD8,EADD,D4F4,EADE,BCD6,BBDF,EADF,C1DE,C2B8,D4DF,D7CA,EAE0,EAE1,EAE4,EAE2,EAE3,C9DE,B8B3,B6C4,EAE5,CAEA,C9CD,B4CD,E2D9,C5E2,EAE6,C0B5,D7B8,EAE7,D7AC,C8FC,D8D3,D8CD,D4DE,D4F9,C9C4,D3AE,B8D3,B3E0,C9E2,F4F6,BAD5,F4F7,D7DF,F4F1,B8B0,D5D4,B8CF,C6F0,B3C3,F4F2,B3AC,D4BD,C7F7,F4F4,F4F3,CCCB,C8A4,F4F5,D7E3,C5BF,F5C0,F5BB,F5C3,F5C2,D6BA,F5C1,D4BE,F5C4,F5CC,B0CF,B5F8,F5C9,F5CA,C5DC,F5C5,F5C6,F5C7,F5CB,BEE0,F5C8,B8FA,F5D0,F5D3,BFE7,B9F2,F5BC,F5CD,C2B7,CCF8,BCF9,F5CE,F5CF,F5D1,B6E5,F5D2,F5D5,F5BD,F5D4,D3BB,B3EC,CCA4,F5D6,F5D7,BEE1,F5D8,CCDF,F5DB,B2C8,D7D9,F5D9,F5DA,F5DC,F5E2,F5E0,F5DF,F5DD,F5E1,F5DE,F5E4,F5E5,CCE3,E5BF,B5B8,F5E3,F5E8,CCA3,F5E6,F5E7,F5BE,B1C4,F5BF,B5C5,B2E4,F5EC,F5E9,B6D7,F5ED,F5EA,F5EB,B4DA,D4EA,F5EE,B3F9,F5EF,F5F1,F5F0,F5F2,F5F3,C9ED,B9AA,C7FB,B6E3,CCC9,EAA6,B3B5,D4FE,B9EC,D0F9,E9ED,D7AA,E9EE,C2D6,C8ED,BAE4,E9EF,E9F0,E9F1,D6E1,E9F2,E9F3,E9F5,E9F4,E9F6,E9F7,C7E1,E9F8,D4D8,E9F9,BDCE,E9FA,E9FB,BDCF,E9FC,B8A8,C1BE,E9FD,B1B2,BBD4,B9F5,E9FE,EAA1,EAA2,EAA3,B7F8,BCAD,CAE4,E0CE,D4AF,CFBD,D5B7,EAA4,D5DE,EAA5,D0C1,B9BC,B4C7,B1D9,C0B1,B1E6,B1E7,B1E8,B3BD,C8E8,E5C1,B1DF,C1C9,B4EF,C7A8,D3D8,C6F9,D1B8,B9FD,C2F5,D3AD,D4CB,BDFC,E5C2,B7B5,E5C3,BBB9,D5E2,BDF8,D4B6,CEA5,C1AC,B3D9,CCF6,E5C6,E5C4,E5C8,E5CA,E5C7,B5CF,C6C8,B5FC,E5C5,CAF6,E5C9,C3D4,B1C5,BCA3,D7B7,CDCB,CBCD,CACA,CCD3,E5CC,E5CB,C4E6,D1A1,D1B7,E5CD,E5D0,CDB8,D6F0,E5CF,B5DD,CDBE,E5D1,B6BA,CDA8,B9E4,CAC5,B3D1,CBD9,D4EC,E5D2,B7EA,E5CE,E5D5,B4FE,E5D6,E5D3,E5D4,D2DD,C2DF,B1C6,D3E2,B6DD,CBEC,E5D7,D3F6,B1E9,B6F4,E5DA,E5D8,E5D9,B5C0,D2C5,E5DC,E5DE,E5DD,C7B2,D2A3,E5DB,D4E2,D5DA,E5E0,D7F1,E5E1,B1DC,D1FB,E5E2,E5E4,E5E3,E5E5,D2D8,B5CB,E7DF,DAF5,DAF8,DAF6,DAF7,DAFA,D0CF,C4C7,B0EE,D0B0,DAF9,D3CA,BAAA,DBA2,C7F1,DAFC,DAFB,C9DB,DAFD,DBA1,D7DE,DAFE,C1DA,DBA5,D3F4,DBA7,DBA4,DBA8,BDBC,C0C9,DBA3,DBA6,D6A3,DBA9,DBAD,DBAE,DBAC,BAC2,BFA4,DBAB,DBAA,D4C7,B2BF,DBAF,B9F9,DBB0,B3BB,B5A6,B6BC,DBB1,B6F5,DBB2,B1C9,DBB4,DBB3,DBB5,DBB7,DBB6,DBB8,DBB9,DBBA,D3CF,F4FA,C7F5,D7C3,C5E4,F4FC,F4FD,F4FB,BEC6,D0EF,B7D3,D4CD,CCAA,F5A2,F5A1,BAA8,F4FE,CBD6,F5A4,C0D2,B3EA,CDAA,F5A5,F5A3,BDB4,F5A8,F5A9,BDCD,C3B8,BFE1,CBE1,F5AA,F5A6,F5A7,C4F0,F5AC,B4BC,D7ED,B4D7,F5AB,F5AE,F5AD,F5AF,D0D1,C3D1,C8A9,F5B0,F5B1,F5B2,F5B3,F5B4,F5B5,F5B7,F5B6,F5B8,B2C9,D3D4,CACD,C0EF,D6D8,D2B0,C1BF,BDF0,B8AA,BCF8,F6C6,F6C7,F6C8,F6C9,F6CA,F6CC,F6CB,F7E9,F6CD,F6CE,EEC4,EEC5,EEC6,D5EB,B6A4,EEC8,EEC7,EEC9,EECA,C7A5,EECB,EECC,B7B0,B5F6,EECD,EECF,EECE,B8C6,EED0,EED1,EED2,B6DB,B3AE,D6D3,C4C6,B1B5,B8D6,EED3,EED4,D4BF,C7D5,BEFB,CED9,B9B3,EED6,EED5,EED8,EED7,C5A5,EED9,EEDA,C7AE,EEDB,C7AF,EEDC,B2A7,EEDD,EEDE,EEDF,EEE0,EEE1,D7EA,EEE2,EEE3,BCD8,EEE4,D3CB,CCFA,B2AC,C1E5,EEE5,C7A6,C3AD,EEE6,EEE7,EEE8,EEE9,EEEA,EEEB,EEEC,EEED,EEEE,EEEF,EEF0,EEF1,EEF2,EEF4,EEF3,EEF5,CDAD,C2C1,EEF6,EEF7,EEF8,D5A1,EEF9,CFB3,EEFA,EEFB,EEFC,EEFD,EFA1,EEFE,EFA2,B8F5,C3FA,EFA3,EFA4,BDC2,D2BF,B2F9,EFA5,EFA6,EFA7,D2F8,EFA8,D6FD,EFA9,C6CC,EFAA,EFAB,C1B4,EFAC,CFFA,CBF8,EFAE,EFAD,B3FA,B9F8,EFAF,EFB0,D0E2,EFB1,EFB2,B7E6,D0BF,EFB3,EFB4,EFB5,C8F1,CCE0,EFB6,EFB7,EFB8,EFB9,EFBA,D5E0,EFBB,B4ED,C3AA,EFBC,EFBD,EFBE,EFBF,CEFD,EFC0,C2E0,B4B8,D7B6,BDF5,CFC7,EFC3,EFC1,EFC2,EFC4,B6A7,BCFC,BEE2,C3CC,EFC5,EFC6,EFC7,EFCF,EFC8,EFC9,EFCA,C7C2,EFF1,B6CD,EFCB,EFCC,EFCD,B6C6,C3BE,EFCE,EFD0,EFD1,EFD2,D5F2,EFD3,C4F7,EFD4,C4F8,EFD5,EFD6,B8E4,B0F7,EFD7,EFD8,EFD9,EFDA,EFDB,EFDC,EFDD,EFDE,BEB5,EFE1,EFDF,EFE0,EFE2,EFE3,C1CD,EFE4,EFE5,EFE6,EFE7,EFE8,EFE9,EFEA,EFEB,EFEC,C0D8,EFED,C1AD,EFEE,EFEF,EFF0,CFE2,B3A4,C3C5,E3C5,C9C1,E3C6,B1D5,CECA,B4B3,C8F2,E3C7,CFD0,E3C8,BCE4,E3C9,E3CA,C3C6,D5A2,C4D6,B9EB,CEC5,E3CB,C3F6,E3CC,B7A7,B8F3,BAD2,E3CD,E3CE,D4C4,E3CF,E3D0,D1CB,E3D1,E3D2,E3D3,E3D4,D1D6,E3D5,B2FB,C0BB,E3D6,C0AB,E3D7,E3D8,E3D9,E3DA,E3DB,B8B7,DAE2,B6D3,DAE4,DAE3,DAE6,C8EE,DAE5,B7C0,D1F4,D2F5,D5F3,BDD7,D7E8,DAE8,DAE7,B0A2,CDD3,DAE9,B8BD,BCCA,C2BD,C2A4,B3C2,DAEA,C2AA,C4B0,BDB5,CFDE,DAEB,C9C2,B1DD,DAEC,B6B8,D4BA,B3FD,DAED,D4C9,CFD5,C5E3,DAEE,DAEF,DAF0,C1EA,CCD5,CFDD,D3E7,C2A1,DAF1,CBE5,DAF2,CBE6,D2FE,B8F4,DAF3,B0AF,CFB6,D5CF,CBED,DAF4,E3C4,C1A5,F6BF,F6C0,F6C1,C4D1,C8B8,D1E3,D0DB,D1C5,BCAF,B9CD,EFF4,B4C6,D3BA,F6C2,B3FB,F6C3,B5F1,F6C5,D3EA,F6A7,D1A9,F6A9,F6A8,C1E3,C0D7,B1A2,CEED,D0E8,F6AB,CFF6,F6AA,D5F0,F6AC,C3B9,BBF4,F6AE,F6AD,C4DE,C1D8,CBAA,CFBC,F6AF,F6B0,F6B1,C2B6,B0D4,C5F9,F6B2,C7E0,F6A6,BEB8,BEB2,B5E5,B7C7,BFBF,C3D2,C3E6,D8CC,B8EF,BDF9,D1A5,B0D0,F7B0,F7B1,D0AC,B0B0,F7B2,F7B3,F7B4,C7CA,BECF,F7B7,F7B6,B1DE,F7B5,F7B8,F7B9,CEA4,C8CD,BAAB,E8B8,E8B9,E8BA,BEC2,D2F4,D4CF,C9D8,D2B3,B6A5,C7EA,F1FC,CFEE,CBB3,D0EB,E7EF,CDE7,B9CB,B6D9,F1FD,B0E4,CBCC,F1FE,D4A4,C2AD,C1EC,C6C4,BEB1,F2A1,BCD5,F2A2,F2A3,F2A4,D2C3,C6B5,CDC7,F2A5,D3B1,BFC5,CCE2,F2A6,F2A7,D1D5,B6EE,F2A8,F2A9,B5DF,F2AA,F2AB,B2FC,F2AC,F2AD,C8A7,B7E7,ECA9,ECAA,ECAB,ECAC,C6AE,ECAD,ECAE,B7C9,CAB3,E2B8,F7CF,F7D0,B2CD,F7D1,F7D3,F7D2,E2BB,BCA2,E2BC,E2BD,E2BE,E2BF,E2C0,E2C1,B7B9,D2FB,BDA4,CACE,B1A5,CBC7,E2C2,B6FC,C8C4,E2C3,BDC8,B1FD,E2C4,B6F6,E2C5,C4D9,E2C6,CFDA,B9DD,E2C7,C0A1,E2C8,B2F6,E2C9,C1F3,E2CA,E2CB,C2F8,E2CC,E2CD,E2CE,CAD7,D8B8,D9E5,CFE3,F0A5,DCB0,C2ED,D4A6,CDD4,D1B1,B3DB,C7FD,B2B5,C2BF,E6E0,CABB,E6E1,E6E2,BED4,E6E3,D7A4,CDD5,E6E5,BCDD,E6E4,E6E6,E6E7,C2EE,BDBE,E6E8,C2E6,BAA7,E6E9,E6EA,B3D2,D1E9,BFA5,E6EB,C6EF,E6EC,E6ED,E6EE,C6AD,E6EF,C9A7,E6F0,E6F1,E6F2,E5B9,E6F3,E6F4,C2E2,E6F5,E6F6,D6E8,E6F7,E6F8,B9C7,F7BB,F7BA,F7BE,F7BC,BAA1,F7BF,F7C0,F7C2,F7C1,F7C4,F7C3,F7C5,F7C6,F7C7,CBE8,B8DF,F7D4,F7D5,F7D6,F7D8,F7DA,F7D7,F7DB,F7D9,D7D7,F7DC,F7DD,F7DE,F7DF,F7E0,DBCB,D8AA,E5F7,B9ED,BFFD,BBEA,F7C9,C6C7,F7C8,F7CA,F7CC,F7CB,F7CD,CEBA,F7CE,C4A7,D3E3,F6CF,C2B3,F6D0,F6D1,F6D2,F6D3,F6D4,F6D6,B1AB,F6D7,F6D8,F6D9,F6DA,F6DB,F6DC,F6DD,F6DE,CFCA,F6DF,F6E0,F6E1,F6E2,F6E3,F6E4,C0F0,F6E5,F6E6,F6E7,F6E8,F6E9,F6EA,F6EB,F6EC,F6ED,F6EE,F6EF,F6F0,F6F1,F6F2,F6F3,F6F4,BEA8,F6F5,F6F6,F6F7,F6F8,C8FA,F6F9,F6FA,F6FB,F6FC,F6FD,F6FE,F7A1,F7A2,F7A3,F7A4,F7A5,F7A6,F7A7,F7A8,B1EE,F7A9,F7AA,F7AB,F7AC,F7AD,C1DB,F7AE,F7AF,C4F1,F0AF,BCA6,F0B0,C3F9,C5B8,D1BB,F0B1,F0B2,F0B3,F0B4,F0B5,D1BC,D1EC,F0B7,F0B6,D4A7,CDD2,F0B8,F0BA,F0B9,F0BB,F0BC,B8EB,F0BD,BAE8,F0BE,F0BF,BEE9,F0C0,B6EC,F0C1,F0C2,F0C3,F0C4,C8B5,F0C5,F0C6,F0C7,C5F4,F0C8,F0C9,F0CA,F7BD,F0CB,F0CC,F0CD,F0CE,F0CF,BAD7,F0D0,F0D1,F0D2,F0D3,F0D4,F0D5,F0D6,F0D8,D3A5,F0D7,F0D9,F5BA,C2B9,F7E4,F7E5,F7E6,F7E7,F7E8,C2B4,F7EA,F7EB,C2F3,F4F0,F4EF,C2E9,F7E1,F7E2,BBC6,D9E4,CAF2,C0E8,F0A4,BADA,C7AD,C4AC,F7EC,F7ED,F7EE,F7F0,F7EF,F7F1,F7F4,F7F3,F7F2,F7F5,F7F6,EDE9,EDEA,EDEB,F6BC,F6BD,F6BE,B6A6,D8BE,B9C4,D8BB,DCB1,CAF3,F7F7,F7F8,F7F9,F7FB,F7FA,B1C7,F7FC,F7FD,F7FE,C6EB,ECB4,B3DD,F6B3,F6B4,C1E4,F6B5,F6B6,F6B7,F6B8,F6B9,F6BA,C8A3,F6BB,C1FA,B9A8,EDE8,B9EA,D9DF,A3A1,A3A2,A3A3,A1E7,A3A5,A3A6,A3A7,A3A8,A3A9,A3AA,A3AB,A3AC,A3AD,A3AE,A3AF,A3B0,A3B1,A3B2,A3B3,A3B4,A3B5,A3B6,A3B7,A3B8,A3B9,A3BA,A3BB,A3BC,A3BD,A3BE,A3BF,A3C0,A3C1,A3C2,A3C3,A3C4,A3C5,A3C6,A3C7,A3C8,A3C9,A3CA,A3CB,A3CC,A3CD,A3CE,A3CF,A3D0,A3D1,A3D2,A3D3,A3D4,A3D5,A3D6,A3D7,A3D8,A3D9,A3DA,A3DB,A3DC,A3DD,A3DE,A3DF,A3E0,A3E1,A3E2,A3E3,A3E4,A3E5,A3E6,A3E7,A3E8,A3E9,A3EA,A3EB,A3EC,A3ED,A3EE,A3EF,A3F0,A3F1,A3F2,A3F3,A3F4,A3F5,A3F6,A3F7,A3F8,A3F9,A3FA,A3FB,A3FC,A3FD,A1AB,A1E9,A1EA,A3FE,A3A4"},_u2a_char:function(c){var a=c.toString(16);a="000"+a.toUpperCase();a=a.substr(a.length-4);var b=this._unicode().indexOf(a);if(b!=-1){a=this._ansicode().substr(b,4)}return parseInt(a,16)},_a2u_char:function(c){var a=c.toString(16);a="000"+a.toUpperCase();a=a.substr(a.length-4);var b=this._ansicode().indexOf(a);if(b!=-1){a=this._unicode().substr(b,4)}return parseInt(a,16)},_u2a:function(g){var c=g.length;var a="";for(var d=0;d<c;d++){var f=g.charCodeAt(d);if(f<0){f+=65536}if(f>127){f=this._u2a_char(f)}if(f>255){var b=f&65280;b=b>>8;var e=f&255;a+=String.fromCharCode(b)+String.fromCharCode(e)}else{a+=String.fromCharCode(f)}}return a},_a2u:function(e){var b=e.length;var a="";var f;for(var c=0;c<b;c++){var d=e.charCodeAt(c);if(d>127){f=this._a2u_char((d<<8)+e.charCodeAt(++c))}else{f=d}a+=String.fromCharCode(f)}return a}};
/*
Shameless port of a shameless port
@defunkt => @janl => @aq
 
See http://github.com/defunkt/mustache for more info.
*/
 
;(function($) {

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

var Mustache;

(function (exports) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exports; // CommonJS
  } else if (typeof define === "function") {
    define(exports); // AMD
  } else {
    Mustache = exports; // <script>
  }
}((function () {

  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.7.0";
  exports.tags = ["{{", "}}"];

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Writer = Writer;

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  exports.escape = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = exports.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var fn = compileTokens(tokens);
    var self = this;

    return function (view, partials) {
      if (partials) {
        if (typeof partials === "function") {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return fn(self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  Writer.prototype._section = function (name, context, text, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(this, context.push(value[i]));
        }

        return buffer;
      }

      return value ? callback(this, context.push(value)) : "";
    case "function":
      var self = this;
      var scopedRender = function (template) {
        return self.render(template, context);
      };

      return value.call(context.view, text, scopedRender) || "";
    default:
      if (value) {
        return callback(this, context);
      }
    }

    return "";
  };

  Writer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0)) {
      return callback(this, context);
    }

    return "";
  };

  Writer.prototype._partial = function (name, context) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    var fn = this._partialCache[name];

    return fn ? fn(context) : "";
  };

  Writer.prototype._name = function (name, context) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    return (value == null) ? "" : String(value);
  };

  Writer.prototype._escaped = function (name, context) {
    return exports.escape(this._name(name, context));
  };

  /**
   * Calculates the bounds of the section represented by the given `token` in
   * the original template by drilling down into nested sections to find the
   * last token that is part of that section. Returns an array of [start, end].
   */
  function sectionBounds(token) {
    var start = token[3];
    var end = start;

    var tokens;
    while ((tokens = token[4]) && tokens.length) {
      token = tokens[tokens.length - 1];
      end = token[3];
    }

    return [start, end];
  }

  /**
   * Low-level function that compiles the given `tokens` into a function
   * that accepts three arguments: a Writer, a Context, and the template.
   */
  function compileTokens(tokens) {
    var subRenders = {};

    function subRender(i, tokens, template) {
      if (!subRenders[i]) {
        var fn = compileTokens(tokens);
        subRenders[i] = function (writer, context) {
          return fn(writer, context, template);
        };
      }

      return subRenders[i];
    }

    return function (writer, context, template) {
      var buffer = "";
      var token, sectionText;

      for (var i = 0, len = tokens.length; i < len; ++i) {
        token = tokens[i];

        switch (token[0]) {
        case "#":
          sectionText = template.slice.apply(template, sectionBounds(token));
          buffer += writer._section(token[1], context, sectionText, subRender(i, token[4], template));
          break;
        case "^":
          buffer += writer._inverted(token[1], context, subRender(i, token[4], template));
          break;
        case ">":
          buffer += writer._partial(token[1], context);
          break;
        case "&":
          buffer += writer._name(token[1], context);
          break;
        case "name":
          buffer += writer._escaped(token[1], context);
          break;
        case "text":
          buffer += token[1];
          break;
        }
      }

      return buffer;
    };
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have a fifth item: an array that contains
   * all tokens in that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];
    var token, section;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case "#":
      case "^":
        token[4] = [];
        sections.push(token);
        collector.push(token);
        collector = token[4];
        break;
      case "/":
        if (sections.length === 0) {
          throw new Error("Unopened section: " + token[1]);
        }

        section = sections.pop();

        if (section[1] !== token[1]) {
          throw new Error("Unclosed section: " + section[1]);
        }

        if (sections.length > 0) {
          collector = sections[sections.length - 1][4];
        } else {
          collector = tree;
        }
        break;
      default:
        collector.push(token);
      }
    }

    // Make sure there were no open sections when we're done.
    section = sections.pop();

    if (section) {
      throw new Error("Unclosed section: " + section[1]);
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var token, lastToken;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      if (lastToken && lastToken[0] === "text" && token[0] === "text") {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
        tokens.splice(i--, 1); // Remove this token from the array.
      } else {
        lastToken = token;
      }
    }
  }

  function escapeTags(tags) {
    if (tags.length !== 2) {
      throw new Error("Invalid tags: " + tags.join(" "));
    }

    return [
      new RegExp(escapeRe(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRe(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  exports.parse = function (template, tags) {
    tags = tags || exports.tags;

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var tokens = [],      // Buffer to hold the tokens
        spaces = [],      // Indices of whitespace tokens on the current line
        hasTag = false,   // Is there a {{tag}} on the current line?
        nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr;

    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(["text", chr, start, start + 1]);
          start += 1;

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      start = scanner.pos;

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = "&";
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error("Unclosed tag at " + scanner.pos);
      }

      tokens.push([type, value, start, scanner.pos]);

      if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      }

      // Set the tags for the next time around.
      if (type === "=") {
        tags = value.split(spaceRe);
        tagRes = escapeTags(tags);
      }
    }

    squashTokens(tokens);

    return nestTokens(tokens);
  };

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default writer.
  var _writer = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  exports.clearCache = function () {
    return _writer.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  exports.compile = function (template, tags) {
    return _writer.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  exports.compilePartial = function (name, template, tags) {
    return _writer.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  exports.compileTokens = function (tokens, template) {
    return _writer.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  exports.render = function (template, view, partials) {
    return _writer.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = exports.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  return exports;

}())));

  $.mustache = function (template, view, partials) {
    return Mustache.render(template, view, partials);
  };

  $.fn.mustache = function (view, partials) {
    return $(this).map(function (i, elm) {
      var template = $(elm).html().trim();
      var output = $.mustache(template, view, partials);
      return $(output).get();
    });
  };

})(jQuery);

/*! qTip2 v2.0.0 | http://craigsworks.com/projects/qtip2/ | Licensed MIT, GPL */
(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function P(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(w,function(){this.sanitize&&this.sanitize(e)}),e}function H(u,a,m,g){function U(e){var t=0,n,r=a,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||a,i.pop()]}function z(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||R.event||o,F.trigger(i,[y].concat(t||[])),!i.isDefaultPrevented()}function W(){var e=a.style.widget;F.toggleClass("ui-helper-reset "+T,e).toggleClass(k,a.style.def&&!e),q.content&&q.content.toggleClass(T+"-content",e),q.titlebar&&q.titlebar.toggleClass(T+"-header",e),q.button&&q.button.toggleClass(x+"-icon",!e)}function X(e){q.title&&(q.titlebar.remove(),q.titlebar=q.title=q.button=o,e!==s&&y.reposition())}function V(){var e=a.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";q.button&&q.button.remove(),e.jquery?q.button=e:q.button=r("<a />",{"class":"ui-state-default ui-tooltip-close "+(a.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),q.button.appendTo(q.titlebar).attr("role","button").click(function(e){return F.hasClass(N)||y.hide(e),s}),y.redraw()}function J(){var e=H+"-title";q.titlebar&&X(),q.titlebar=r("<div />",{"class":x+"-titlebar "+(a.style.widget?"ui-widget-header":"")}).append(q.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(q.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),a.content.title.button?V():y.rendered&&y.redraw()}function K(e){var t=q.button,n=q.title;if(!y.rendered)return s;e?(n||J(),V()):t.remove()}function Q(e,t){var n=q.title;if(!y.rendered||!e)return s;r.isFunction(e)&&(e=e.call(u,R.event,y));if(e===s||!e&&e!=="")return X(s);e.jquery&&e.length>0?n.empty().append(e.css({display:"block"})):n.html(e),y.redraw(),t!==s&&y.rendered&&F[0].offsetWidth>0&&y.reposition(R.event)}function G(e,t){function o(e){function a(n){n&&(delete u[n.src],clearTimeout(y.timers.img[n.src]),r(n).unbind(I)),r.isEmptyObject(u)&&(y.redraw(),t!==s&&y.reposition(R.event),e())}var o,u={};if((o=i.find("img[src]:not([height]):not([width])")).length===0)return a();o.each(function(e,t){if(u[t.src]!==n)return;var i=0,s=3;(function o(){if(t.height||t.width||i>s)return a(t);i+=1,y.timers.img[t.src]=setTimeout(o,700)})(),r(t).bind("error"+I+" load"+I,function(){a(this)}),u[t.src]=t})}var i=q.content;return!y.rendered||!e?s:(r.isFunction(e)&&(e=e.call(u,R.event,y)||""),e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),y.rendered<0?F.queue("fx",o):(j=0,o(r.noop)),y)}function Y(){function c(e){if(F.hasClass(N))return s;clearTimeout(y.timers.show),clearTimeout(y.timers.hide);var t=function(){y.toggle(i,e)};a.show.delay>0?y.timers.show=setTimeout(t,a.show.delay):t()}function h(e){if(F.hasClass(N)||B||j)return s;var t=r(e.relatedTarget||e.target),i=t.closest(C)[0]===F[0],u=t[0]===o.show[0];clearTimeout(y.timers.show),clearTimeout(y.timers.hide);if(n.target==="mouse"&&i||a.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(i||u)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(f){}return}a.hide.delay>0?y.timers.hide=setTimeout(function(){y.hide(e)},a.hide.delay):y.hide(e)}function p(e){if(F.hasClass(N))return s;clearTimeout(y.timers.inactive),y.timers.inactive=setTimeout(function(){y.hide(e)},a.hide.inactive)}function d(e){y.rendered&&F[0].offsetWidth>0&&y.reposition(e)}var n=a.position,o={show:a.show.target,hide:a.hide.target,viewport:r(n.viewport),document:r(t),body:r(t.body),window:r(e)},f={show:r.trim(""+a.show.event).split(" "),hide:r.trim(""+a.hide.event).split(" ")},l=r.browser.msie&&parseInt(r.browser.version,10)===6;F.bind("mouseenter"+I+" mouseleave"+I,function(e){var t=e.type==="mouseenter";t&&y.focus(e),F.toggleClass(A,t)}),/mouse(out|leave)/i.test(a.hide.event)&&a.hide.leave==="window"&&o.window.bind("mouseout"+I+" blur"+I,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&y.hide(e)}),a.hide.fixed?(o.hide=o.hide.add(F),F.bind("mouseover"+I,function(){F.hasClass(N)||clearTimeout(y.timers.hide)})):/mouse(over|enter)/i.test(a.show.event)&&o.hide.bind("mouseleave"+I,function(e){clearTimeout(y.timers.show)}),(""+a.hide.event).indexOf("unfocus")>-1&&n.container.closest("html").bind("mousedown"+I,function(e){var t=r(e.target),n=y.rendered&&!F.hasClass(N)&&F[0].offsetWidth>0,i=t.parents(C).filter(F[0]).length>0;t[0]!==u[0]&&t[0]!==F[0]&&!i&&!u.has(t[0]).length&&!t.attr("disabled")&&y.hide(e)}),"number"==typeof a.hide.inactive&&(o.show.bind("qtip-"+m+"-inactive",p),r.each(b.inactiveEvents,function(e,t){o.hide.add(q.tooltip).bind(t+I+"-inactive",p)})),r.each(f.hide,function(e,t){var n=r.inArray(t,f.show),i=r(o.hide);n>-1&&i.add(o.show).length===i.length||t==="unfocus"?(o.show.bind(t+I,function(e){F[0].offsetWidth>0?h(e):c(e)}),delete f.show[n]):o.hide.bind(t+I,h)}),r.each(f.show,function(e,t){o.show.bind(t+I,c)}),"number"==typeof a.hide.distance&&o.show.add(F).bind("mousemove"+I,function(e){var t=R.origin||{},n=a.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&y.hide(e)}),n.target==="mouse"&&(o.show.bind("mousemove"+I,function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),n.adjust.mouse&&(a.hide.event&&(F.bind("mouseleave"+I,function(e){(e.relatedTarget||e.target)!==o.show[0]&&y.hide(e)}),q.target.bind("mouseenter"+I+" mouseleave"+I,function(e){R.onTarget=e.type==="mouseenter"})),o.document.bind("mousemove"+I,function(e){y.rendered&&R.onTarget&&!F.hasClass(N)&&F[0].offsetWidth>0&&y.reposition(e||E)}))),(n.adjust.resize||o.viewport.length)&&(r.event.special.resize?o.viewport:o.window).bind("resize"+I,d),(o.viewport.length||l&&F.css("position")==="fixed")&&o.viewport.bind("scroll"+I,d)}function Z(){var n=[a.show.target[0],a.hide.target[0],y.rendered&&q.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],e,t];y.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(I):a.show.target.unbind(I+"-create")}var y=this,O=t.body,H=x+"-"+m,B=0,j=0,F=r(),I=".qtip-"+m,q,R;y.id=m,y.rendered=s,y.destroyed=s,y.elements=q={target:u},y.timers={img:{}},y.options=a,y.checks={},y.plugins={},y.cache=R={event:{},target:r(),disabled:s,attr:g,onTarget:s,lastClass:""},y.checks.builtin={"^id$":function(e,t,n){var o=n===i?b.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(F[0].id=u,q.content[0].id=u+"-content",q.title[0].id=u+"-title")},"^content.text$":function(e,t,n){G(n)},"^content.title.text$":function(e,t,n){if(!n)return X();!q.title&&n&&J(),Q(n)},"^content.title.button$":function(e,t,n){K(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new w.Corner(n))},"^position.container$":function(e,t,n){y.rendered&&F.appendTo(n)},"^show.ready$":function(){y.rendered?y.toggle(i):y.render(1)},"^style.classes$":function(e,t,n){F.attr("class",x+" qtip "+n)},"^style.widget|content.title":W,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){F[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=a.position;F.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Z(),Y()}},r.extend(y,{render:function(e){if(y.rendered)return y;var t=a.content.text,n=a.content.title.text,o=a.position;return r.attr(u[0],"aria-describedby",H),F=q.tooltip=r("<div/>",{id:H,"class":x+" qtip "+k+" "+a.style.classes+" "+x+"-pos-"+a.position.my.abbrev(),width:a.style.width||"",height:a.style.height||"",tracking:o.target==="mouse"&&o.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":H+"-content","aria-hidden":i}).toggleClass(N,R.disabled).data("qtip",y).appendTo(a.position.container).append(q.content=r("<div />",{"class":x+"-content",id:H+"-content","aria-atomic":i})),y.rendered=-1,j=1,B=1,n&&(J(),r.isFunction(n)||Q(n,s)),r.isFunction(t)||G(t,s),y.rendered=i,W(),r.each(a.events,function(e,t){r.isFunction(t)&&F.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(w,function(){this.initialize==="render"&&this(y)}),Y(),F.queue("fx",function(t){z("render"),j=0,B=0,y.redraw(),(a.show.ready||e)&&y.toggle(i,R.event,s),t()}),y},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:F.outerHeight(s),width:F.outerWidth(s)};break;case"offset":t=w.offset(F,a.position.container);break;default:n=U(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function p(e,t){var n,r,i;for(n in c)for(r in c[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),c[n][r].apply(y,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,u=/^content\.(title|attr)|style/i,f=s,l=s,c=y.checks,h;return"string"==typeof e?(h=e,e={},e[h]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=U(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f,l=u.test(t)||l}),P(a),B=j=1,r.each(e,p),B=j=0,y.rendered&&F[0].offsetWidth>0&&(f&&y.reposition(a.position.target==="mouse"?o:R.event),l&&y.redraw()),y},toggle:function(e,n){function b(){e?(r.browser.msie&&F[0].style.removeAttribute("filter"),F.css("overflow",""),"string"==typeof u.autofocus&&r(u.autofocus,F).focus(),u.target.trigger("qtip-"+m+"-inactive")):F.css({display:"",visibility:"",opacity:"",left:"",top:""}),z(e?"visible":"hidden")}if(!y.rendered)return e?y.render(1):y;var o=e?"show":"hide",u=a[o],f=a[e?"hide":"show"],l=a.position,c=a.content,h=F[0].offsetWidth>0,p=e||u.target.length===1,d=!n||u.target.length<2||R.target[0]===n.target,v,g;(typeof e).search("boolean|number")&&(e=!h);if(!F.is(":animated")&&h===e&&d)return y;if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(R.event.type)&&a.show.target.add(n.target).length===a.show.target.length&&F.has(n.relatedTarget).length)return y;R.event=r.extend({},n)}return z(o,[90])?(r.attr(F[0],"aria-hidden",!e),e?(R.origin=r.extend({},E),y.focus(n),r.isFunction(c.text)&&G(c.text,s),r.isFunction(c.title.text)&&Q(c.title.text,s),!_&&l.target==="mouse"&&l.adjust.mouse&&(r(t).bind("mousemove.qtip",function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),_=i),y.reposition(n,arguments[2]),!u.solo||r(C,u.solo).not(F).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(y.timers.show),delete R.origin,_&&!r(C+'[tracking="true"]:visible',u.solo).not(F).length&&(r(t).unbind("mousemove.qtip"),_=s),y.blur(n)),u.effect===s||p===s?(F[o](),b.call(F)):r.isFunction(u.effect)?(F.stop(1,1),u.effect.call(F,y),F.queue("fx",function(e){b(),e()})):F.fadeTo(90,e?1:0,b),e&&u.target.trigger("qtip-"+m+"-inactive"),y):y},show:function(e){return y.toggle(i,e)},hide:function(e){return y.toggle(s,e)},focus:function(e){if(!y.rendered)return y;var t=r(C),n=parseInt(F[0].style.zIndex,10),i=b.zindex+t.length,s=r.extend({},e),o;return F.hasClass(L)||z("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+L).qtip("blur",s)),F.addClass(L)[0].style.zIndex=i),y},blur:function(e){return F.removeClass(L),z("blur",[F.css("zIndex")],e),y},reposition:function(n,i){if(!y.rendered||B)return y;B=1;var o=a.position.target,u=a.position,f=u.my,l=u.at,m=u.adjust,g=m.method.split(" "),b=F.outerWidth(s),S=F.outerHeight(s),x=0,T=0,N=F.css("position")==="fixed",C=u.viewport,k={left:0,top:0},L=u.container,A=F[0].offsetWidth>0,O,M,_;if(r.isArray(o)&&o.length===2)l={x:h,y:c},k={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||R.event.pageX))l={x:h,y:c},n=(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:E&&E.pageX&&(m.mouse||!n||!n.pageX)?{pageX:E.pageX,pageY:E.pageY}:!m.mouse&&R.origin&&R.origin.pageX&&a.show.distance?R.origin:n:R.event)||n||R.event||E||{},k={top:n.pageY,left:n.pageX};else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?R.target=r(n.target):o!=="event"&&(R.target=r(o.jquery?o:q.target)),o=R.target,o=r(o).eq(0);if(o.length===0)return y;o[0]===t||o[0]===e?(x=w.iOS?e.innerWidth:o.width(),T=w.iOS?e.innerHeight:o.height(),o[0]===e&&(k={top:(C||o).scrollTop(),left:(C||o).scrollLeft()})):w.imagemap&&o.is("area")?O=w.imagemap(y,o,l,w.viewport?g:s):w.svg&&typeof o[0].xmlbase=="string"?O=w.svg(y,o,l,w.viewport?g:s):(x=o.outerWidth(s),T=o.outerHeight(s),k=w.offset(o,L)),O&&(x=O.width,T=O.height,M=O.offset,k=O.position);if(w.iOS>3.1&&w.iOS<4.1||w.iOS>=4.3&&w.iOS<4.33||!w.iOS&&N)_=r(e),k.left-=_.scrollLeft(),k.top-=_.scrollTop();k.left+=l.x===d?x:l.x===v?x/2:0,k.top+=l.y===p?T:l.y===v?T/2:0}return k.left+=m.x+(f.x===d?-b:f.x===v?-b/2:0),k.top+=m.y+(f.y===p?-S:f.y===v?-S/2:0),w.viewport?(k.adjusted=w.viewport(y,k,u,x,T,b,S),M&&k.adjusted.left&&(k.left+=M.left),M&&k.adjusted.top&&(k.top+=M.top)):k.adjusted={left:0,top:0},z("move",[k,C.elem||C],n)?(delete k.adjusted,i===s||!A||isNaN(k.left)||isNaN(k.top)||o==="mouse"||!r.isFunction(u.effect)?F.css(k):r.isFunction(u.effect)&&(u.effect.call(F,y,r.extend({},k)),F.queue(function(e){r(this).css({opacity:"",height:""}),r.browser.msie&&this.style.removeAttribute("filter"),e()})),B=0,y):y},redraw:function(){if(y.rendered<1||j)return y;var e=a.style,t=a.position.container,n,r,i,s;return j=1,z("redraw"),e.height&&F.css(l,e.height),e.width?F.css(f,e.width):(F.css(f,"").appendTo(D),r=F.width(),r%2<1&&(r+=1),i=F.css("max-width")||"",s=F.css("min-width")||"",n=(i+s).indexOf("%")>-1?t.width()/100:0,i=(i.indexOf("%")>-1?n:1)*parseInt(i,10)||r,s=(s.indexOf("%")>-1?n:1)*parseInt(s,10)||0,r=i+s?Math.min(Math.max(r,s),i):r,F.css(f,Math.round(r)).appendTo(t)),z("redrawn"),j=0,y},disable:function(e){return"boolean"!=typeof e&&(e=!F.hasClass(N)&&!R.disabled),y.rendered?(F.toggleClass(N,e),r.attr(F[0],"aria-disabled",e)):R.disabled=!!e,y},enable:function(){return y.disable(s)},destroy:function(){var e=u[0],t=r.attr(e,M),n=u.data("qtip");y.destroyed=i,y.rendered&&(F.stop(1,0).remove(),r.each(y.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(y.timers.show),clearTimeout(y.timers.hide),Z();if(!n||y===n)r.removeData(e,"qtip"),a.suppress&&t&&(r.attr(e,"title",t),u.removeAttr(M)),u.removeAttr("aria-describedby");return u.unbind(".qtip-"+m),delete S[y.id],u}})}function B(e,n){var u,a,f,l,c,h=r(this),p=r(t.body),d=this===t?p:h,v=h.metadata?h.metadata(n.metadata):o,m=n.metadata.type==="html5"&&v?v[n.metadata.name]:o,g=h.data(n.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}l=r.extend(i,{},b.defaults,n,typeof g=="object"?P(g):o,P(m||v)),a=l.position,l.id=e;if("boolean"==typeof l.content.text){f=h.attr(l.content.attr);if(l.content.attr===s||!f)return s;l.content.text=f}a.container.length||(a.container=p),a.target===s&&(a.target=d),l.show.target===s&&(l.show.target=d),l.show.solo===i&&(l.show.solo=a.container.closest("body")),l.hide.target===s&&(l.hide.target=d),l.position.viewport===i&&(l.position.viewport=a.container),a.container=a.container.eq(0),a.at=new w.Corner(a.at),a.my=new w.Corner(a.my);if(r.data(this,"qtip"))if(l.overwrite)h.qtip("destroy");else if(l.overwrite===s)return s;return l.suppress&&(c=r.attr(this,"title"))&&r(this).removeAttr("title").attr(M,c).attr("title",""),u=new H(h,l,e,!!f),r.data(this,"qtip",u),h.bind("remove.qtip-"+e+" removeqtip.qtip-"+e,function(){u.destroy()}),u}function j(e){var t=this,n=e.elements.tooltip,o=e.options.content.ajax,u=b.defaults.content.ajax,a=".qtip-ajax",f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,l=i,c=s,h;e.checks.ajax={"^content.ajax":function(e,r,i){r==="ajax"&&(o=i),r==="once"?t.init():o&&o.url?t.load():n.unbind(a)}},r.extend(t,{init:function(){return o&&o.url&&n.unbind(a)[o.once?"one":"bind"]("tooltipshow"+a,t.load),t},load:function(n){function g(){var t;if(e.destroyed)return;l=s,v&&(c=i,e.show(n.originalEvent)),(t=u.complete||o.complete)&&r.isFunction(t)&&t.apply(o.context||e,arguments)}function y(t,n,i){var s;if(e.destroyed)return;d&&"string"==typeof t&&(t=r("<div/>").append(t.replace(f,"")).find(d)),(s=u.success||o.success)&&r.isFunction(s)?s.call(o.context||e,t,n,i):e.set("content.text",t)}function b(t,n,r){if(e.destroyed||t.status===0)return;e.set("content.text",n+": "+r)}if(c){c=s;return}var a=o.url.lastIndexOf(" "),p=o.url,d,v=!o.loading&&l;if(v)try{n.preventDefault()}catch(m){}else if(n&&n.isDefaultPrevented())return t;h&&h.abort&&h.abort(),a>-1&&(d=p.substr(a),p=p.substr(0,a)),h=r.ajax(r.extend({error:u.error||b,context:e},o,{url:p,success:y,complete:g}))},destroy:function(){h&&h.abort&&h.abort(),e.destroyed=i}}),t.init()}function F(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function I(e,t){function A(e){var t=E.is(":visible");E.show(),e(),E.toggle(t)}function O(){x.width=g.height,x.height=g.width}function M(){x.width=g.width,x.height=g.height}function _(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=P(l,l.x),C[l.y]+=P(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function D(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new w.Corner(o):t.string||(m.corner=new w.Corner(t),m.corner.fixed=i),S.corner=new w.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function P(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:E,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return A(function(){u=(n?o(n):o(b.content)||o(i)||o(E))||0}),u}function H(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,i=r.browser.mozilla,s=i?"-moz-":r.browser.webkit?"-webkit-":"",o="border-radius-"+e.y+e.x,u="border-"+e.y+"-"+e.x+"-radius",a=function(e){return parseInt(n.css(e),10)||parseInt(E.css(e),10)},f;return A(function(){f=a(u)||a(s+u)||a(s+o)||a(o)||0}),f}function B(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,w=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=w?y:b.content;A(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(E,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(E,l,"color")||E.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function j(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function I(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,E=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C=".qtip-tip",k=!!(r("<canvas />")[0]||{}).getContext,L;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=D()&&(k||r.browser.msie);return e&&(m.create(),m.update(),E.unbind(C).bind("tooltipmove"+C,_),k||E.bind("tooltipredraw tooltipredrawn",function(e){e.type==="tooltipredraw"?(L=b.tip.html(),b.tip.html("")):b.tip.html(L)})),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"ui-tooltip-tip"}).css({width:e,height:t}).prependTo(E),k?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=I("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click mousedown",function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,L=Math.round,A,_,D,H,q;e||(e=S.corner||m.corner),C===s?C=e:(C=new w.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),A=C.precedance,e.precedance===u?O():M(),b.tip.css({width:l=x.width,height:y=x.height}),B(e),T.border!=="transparent"?(N=P(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=F(C,l,y),m.size=q=j(e),n.css(q),e.precedance===a?H=[L(C.x===h?N:C.x===d?q.width-l-N:(q.width-l)/2),L(C.y===c?q.height-y:0)]:H=[L(C.x===h?q.width-l:0),L(C.y===c?N:C.y===p?q.height-y-N:(q.height-y)/2)],k?(f.attr(q),_=f[0].getContext("2d"),_.restore(),_.save(),_.clearRect(0,0,3e3,3e3),_.fillStyle=T.fill,_.strokeStyle=T.border,_.lineWidth=N*2,_.lineJoin="miter",_.miterLimit=100,_.translate(H[0],H[1]),_.beginPath(),_.moveTo(D[0][0],D[0][1]),_.lineTo(D[1][0],D[1][1]),_.lineTo(D[2][0],D[2][1]),_.closePath(),N&&(E.css("background-clip")==="border-box"&&(_.strokeStyle=T.fill,_.stroke()),_.strokeStyle=T.border,_.stroke()),_.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",H[2]=N&&/^(r|b)/i.test(e.string())?parseFloat(r.browser.version,10)===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:H[0],top:H[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(I("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=j(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=P(e,r),u=P(e,r,b.content),d=H(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){b.tip&&b.tip.remove(),b.tip=!1,E.unbind(C)}}),m.init()}function q(n){function y(){m=r(v,f).not("[disabled]").map(function(){return typeof this.focus=="function"?this:null})}function b(e){m.length<1&&e.length?e.not("body").blur():m.first().focus()}function E(e){var t=r(e.target),n=t.closest(".qtip"),i;i=n.length<1?s:parseInt(n[0].style.zIndex,10)>parseInt(f[0].style.zIndex,10),!i&&r(e.target).closest(C)[0]!==f[0]&&b(t)}var o=this,u=n.options.show.modal,a=n.elements,f=a.tooltip,l="#qtip-overlay",c=".qtipmodal",h=c+n.id,p="is-modal-qtip",d=r(t.body),v=w.modal.focusable.join(","),m={},g;n.checks.modal={"^show.modal.(on|blur)$":function(){o.init(),a.overlay.toggle(f.is(":visible"))},"^content.text$":function(){y()}},r.extend(o,{init:function(){return u.on?(g=o.create(),f.attr(p,i).css("z-index",w.modal.zindex+r(C+"["+p+"]").length).unbind(c).unbind(h).bind("tooltipshow"+c+" tooltiphide"+c,function(e,t,n){var i=e.originalEvent;if(e.target===f[0])if(i&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(i.type)&&r(i.relatedTarget).closest(g[0]).length)try{e.preventDefault()}catch(s){}else(!i||i&&!i.solo)&&o[e.type.replace("tooltip","")](e,n)}).bind("tooltipfocus"+c,function(e){if(e.isDefaultPrevented()||e.target!==f[0])return;var t=r(C).filter("["+p+"]"),n=w.modal.zindex+t.length,i=parseInt(f[0].style.zIndex,10);g[0].style.zIndex=n-2,t.each(function(){this.style.zIndex>i&&(this.style.zIndex-=1)}),t.end().filter("."+L).qtip("blur",e.originalEvent),f.addClass(L)[0].style.zIndex=n;try{e.preventDefault()}catch(s){}}).bind("tooltiphide"+c,function(e){e.target===f[0]&&r("["+p+"]").filter(":visible").not(f).last().qtip("focus",e)}),u.escape&&r(t).unbind(h).bind("keydown"+h,function(e){e.keyCode===27&&f.hasClass(L)&&n.hide(e)}),u.blur&&a.overlay.unbind(h).bind("click"+h,function(e){f.hasClass(L)&&n.hide(e)}),y(),o):o},create:function(){function n(){g.css({height:r(e).height(),width:r(e).width()})}var t=r(l);return t.length?a.overlay=t.insertAfter(r(C).last()):(g=a.overlay=r("<div />",{id:l.substr(1),html:"<div></div>",mousedown:function(){return s}}).hide().insertAfter(r(C).last()),r(e).unbind(c).bind("resize"+c,n),n(),g)},toggle:function(e,t,n){if(e&&e.isDefaultPrevented())return o;var a=u.effect,l=t?"show":"hide",c=g.is(":visible"),v=r("["+p+"]").filter(":visible").not(f),m;return g||(g=o.create()),g.is(":animated")&&c===t||!t&&v.length?o:(t?(g.css({left:0,top:0}),g.toggleClass("blurs",u.blur),u.stealfocus!==s&&(d.bind("focusin"+h,E),b(r("body :focus")))):d.unbind("focusin"+h),g.stop(i,s),r.isFunction(a)?a.call(g,t):a===s?g[l]():g.fadeTo(parseInt(n,10)||90,t?1:0,function(){t||r(this).hide()}),t||g.queue(function(e){g.css({left:"",top:""}),e()}),o)},show:function(e,t){return o.toggle(e,i,t)},hide:function(e,t){return o.toggle(e,s,t)},destroy:function(){var e=g;return e&&(e=r("["+p+"]").not(f).length<1,e?(a.overlay.remove(),r(t).unbind(c)):a.overlay.unbind(c+n.id),d.undelegate("*","focusin"+h)),f.removeAttr(p).unbind(c)}}),o.init()}function R(e){var t=this,n=e.elements,i=n.tooltip,s=".bgiframe-"+e.id;r.extend(t,{init:function(){n.bgiframe=r('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),n.bgiframe.appendTo(i),i.bind("tooltipmove"+s,t.adjust)},adjust:function(){var t=e.get("dimensions"),r=e.plugins.tip,s=n.tip,o,u;u=parseInt(i.css("border-left-width"),10)||0,u={left:-u,top:-u},r&&s&&(o=r.corner.precedance==="x"?["width","left"]:["height","top"],u[o[1]]-=s[o[0]]()),n.bgiframe.css(u).css(t)},destroy:function(){n.bgiframe.remove(),i.unbind(s)}}),t.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b,w,E,S={},x="ui-tooltip",T="ui-widget",N="ui-state-disabled",C="div.qtip."+x,k=x+"-default",L=x+"-focus",A=x+"-hover",O="_replacedByqTip",M="oldtitle",_,D;D=r("<div/>",{id:"qtip-rcontainer"}),r(function(){D.appendTo(t.body)}),b=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=P(r.extend(i,{},e)),b.bind.call(this,h,c)},b.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||S[h]?b.nextid++:S[h]=h,l=".qtip-"+h+"-create",c=B.call(this,h,e);if(c===s)return i;u=c.options,r.each(w,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"},c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},w=b.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,t){function f(e,t){n.left+=t*e.scrollLeft(),n.top+=t*e.scrollTop()}var n=e.offset(),i=e.closest("body")[0],s=t,o,u,a;if(s){do s.css("position")!=="static"&&(u=s.position(),n.left-=u.left+(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("marginLeft"),10)||0),n.top-=u.top+(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0),!o&&(a=s.css("overflow"))!=="hidden"&&a!=="visible"&&(o=s));while((s=r(s[0].offsetParent)).length);o&&o[0]!==i&&f(o,1)}return n},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,M):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(M,t))}return r.fn["attr"+O].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+O].apply(this,arguments);return e||i.filter("["+M+"]").attr("title",function(){return r.attr(this,M)}).removeAttr(M),i}}},r.each(w.fn,function(e,t){if(!t||r.fn[e+O])return i;var n=r.fn[e+O]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+O]=r.cleanData,r.cleanData=function(e){for(var t=0,i;(i=e[t])!==n;t++)try{r(i).triggerHandler("removeqtip")}catch(s){}r["cleanData"+O](e)}),b.version="@VERSION",b.nextid=0,b.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),b.zindex=15e3,b.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,resize:i,method:"flip flip"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}},w.svg=function(e,n,i,s){var o=r(t),u=n[0],a={width:0,height:0,position:{top:1e10,left:1e10}},f,l,c,h,p;while(!u.getBBox)u=u.parentNode;if(u.getBBox&&u.parentNode){f=u.getBBox(),l=u.getScreenCTM(),c=u.farthestViewportElement||u;if(!c.createSVGPoint)return a;h=c.createSVGPoint(),h.x=f.x,h.y=f.y,p=h.matrixTransform(l),a.position.left=p.x,a.position.top=p.y,h.x+=f.width,h.y+=f.height,p=h.matrixTransform(l),a.width=p.x-a.position.left,a.height=p.y-a.position.top,a.position.left+=o.scrollLeft(),a.position.top+=o.scrollTop()}return a},w.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new j(e)},w.ajax.initialize="render",w.ajax.sanitize=function(e){var t=e.content,n;t&&"ajax"in t&&(n=t.ajax,typeof n!="object"&&(n=e.content.ajax={url:n}),"boolean"!=typeof n.once&&n.once&&(n.once=!!n.once))},r.extend(i,b.defaults,{content:{ajax:{loading:i,once:i}}}),w.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new I(e)},w.tip.initialize="render",w.tip.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,b.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}}),w.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new q(e)},w.modal.initialize="render",w.modal.sanitize=function(e){e.show&&(typeof e.show.modal!="object"?e.show.modal={on:!!e.show.modal}:typeof e.show.modal.on=="undefined"&&(e.show.modal.on=i))},w.modal.zindex=b.zindex-200,w.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],r.extend(i,b.defaults,{show:{modal:{on:s,effect:i,blur:i,stealfocus:i,escape:i}}}),w.viewport=function(n,r,i,s,o,m,b){function j(e,t,n,i,s,o,u,a,f){var l=r[s],c=S[e],h=T[e],p=n===y,d=-O.offset[s]+A.offset[s]+A["scroll"+s],m=c===s?f:c===o?-f:-f/2,b=h===s?a:h===o?-a:-a/2,w=_&&_.size?_.size[u]||0:0,E=_&&_.corner&&_.corner.precedance===e&&!p?w:0,x=d-l+E,N=l+f-A[u]-d+E,C=m-(S.precedance===e||c===S[t]?b:0)-(h===v?a/2:0);return p?(E=_&&_.corner&&_.corner.precedance===t?w:0,C=(c===s?1:-1)*m-E,r[s]+=x>0?x:N>0?-N:0,r[s]=Math.max(-O.offset[s]+A.offset[s]+(E&&_.corner[e]===v?_.offset:0),l-C,Math.min(Math.max(-O.offset[s]+A.offset[s]+A[u],l+C),r[s]))):(i*=n===g?2:0,x>0&&(c!==s||N>0)?(r[s]-=C+i,H["invert"+e](s)):N>0&&(c!==o||x>0)&&(r[s]-=(c===v?-C:C)+i,H["invert"+e](o)),r[s]<d&&-r[s]>N&&(r[s]=l,H=S.clone())),r[s]-l}var w=i.target,E=n.elements.tooltip,S=i.my,T=i.at,N=i.adjust,C=N.method.split(" "),k=C[0],L=C[1]||C[0],A=i.viewport,O=i.container,M=n.cache,_=n.plugins.tip,D={left:0,top:0},P,H,B;if(!A.jquery||w[0]===e||w[0]===t.body||N.method==="none")return D;P=E.css("position")==="fixed",A={elem:A,height:A[(A[0]===e?"h":"outerH")+"eight"](),width:A[(A[0]===e?"w":"outerW")+"idth"](),scrollleft:P?0:A.scrollLeft(),scrolltop:P?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},O={elem:O,scrollLeft:O.scrollLeft(),scrollTop:O.scrollTop(),offset:O.offset()||{left:0,top:0}};if(k!=="shift"||L!=="shift")H=S.clone();return D={left:k!=="none"?j(u,a,k,N.x,h,d,f,s,m):0,top:L!=="none"?j(a,u,L,N.y,c,p,l,o,b):0},H&&M.lastClass!==(B=x+"-pos-"+H.abbrev())&&E.removeClass(n.cache.lastClass).addClass(n.cache.lastClass=B),D},w.imagemap=function(e,t,n,i){function E(e,t,n){var r=0,i=1,s=1,o=0,u=0,a=e.width,f=e.height;while(a>0&&f>0&&i>0&&s>0){a=Math.floor(a/2),f=Math.floor(f/2),n.x===h?i=a:n.x===d?i=e.width-a:i+=Math.floor(a/2),n.y===c?s=f:n.y===p?s=e.height-f:s+=Math.floor(f/2),r=t.length;while(r--){if(t.length<2)break;o=t[r][0]-e.position.left,u=t[r][1]-e.position.top,(n.x===h&&o>=i||n.x===d&&o<=i||n.x===v&&(o<i||o>e.width-i)||n.y===c&&u>=s||n.y===p&&u<=s||n.y===v&&(u<s||u>e.height-s))&&t.splice(r,1)}}return{left:t[0][0],top:t[0][1]}}t.jquery||(t=r(t));var s=e.cache.areas={},o=(t[0].shape||t.attr("shape")).toLowerCase(),u=t[0].coords||t.attr("coords"),a=u.split(","),f=[],l=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=l.offset(),g={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w;m.left+=Math.ceil((l.outerWidth()-l.width())/2),m.top+=Math.ceil((l.outerHeight()-l.height())/2);if(o==="poly"){y=a.length;while(y--)b=[parseInt(a[--y],10),parseInt(a[y+1],10)],b[0]>g.position.right&&(g.position.right=b[0]),b[0]<g.position.left&&(g.position.left=b[0]),b[1]>g.position.bottom&&(g.position.bottom=b[1]),b[1]<g.position.top&&(g.position.top=b[1]),f.push(b)}else{y=-1;while(y++<a.length)f.push(parseInt(a[y],10))}switch(o){case"rect":g={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}};break;case"circle":g={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}};break;case"poly":g.width=Math.abs(g.position.right-g.position.left),g.height=Math.abs(g.position.bottom-g.position.top),n.abbrev()==="c"?g.position={left:g.position.left+g.width/2,top:g.position.top+g.height/2}:(s[n+u]||(g.position=E(g,f.slice(),n),i&&(i[0]==="flip"||i[1]==="flip")&&(g.offset=E(g,f.slice(),{x:n.x===h?d:n.x===d?h:v,y:n.y===c?p:n.y===p?c:v}),g.offset.left-=g.position.left,g.offset.top-=g.position.top),s[n+u]=g),g=s[n+u]),g.width=g.height=0}return g.position.left+=m.left,g.position.top+=m.top,g},w.bgiframe=function(e){var t=r.browser,n=e.plugins.bgiframe;return r("select, object").length<1||!t.msie||(""+t.version).charAt(0)!=="6"?s:"object"==typeof n?n:e.plugins.bgiframe=new R(e)},w.bgiframe.initialize="render"})})(window,document);
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(o,q){var l={},m=l.lib={},n=m.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),j=m.WordArray=n.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=q?e:4*a.length},toString:function(a){return(a||r).stringify(this)},concat:function(a){var e=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)e[d+b>>>2]|=(c[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<c.length)for(b=0;b<a;b+=4)e[d+b>>>2]=c[b>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=o.ceil(e/4)},clone:function(){var a=
n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*o.random()|0);return j.create(e,a)}}),k=l.enc={},r=k.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var b=e[d>>>2]>>>24-8*(d%4)&255;c.push((b>>>4).toString(16));c.push((b&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return j.create(c,b/2)}},p=k.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return j.create(c,b)}},h=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},b=m.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=j.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,i=d/(4*f),i=a?o.ceil(i):o.max((i|0)-this._minBufferSize,0),a=i*f,d=o.min(4*a,d);if(a){for(var h=0;h<a;h+=f)this._doProcessBlock(c,h);h=c.splice(0,a);b.sigBytes-=d}return j.create(h,d)},clone:function(){var a=n.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});m.Hasher=b.extend({init:function(){this.reset()},
reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return f.HMAC.create(a,c).finalize(b)}}});var f=l.algo={};return l}(Math);
(function(o){function q(b,f,a,e,c,d,g){b=b+(f&a|~f&e)+c+g;return(b<<d|b>>>32-d)+f}function l(b,f,a,e,c,d,g){b=b+(f&e|a&~e)+c+g;return(b<<d|b>>>32-d)+f}function m(b,f,a,e,c,d,g){b=b+(f^a^e)+c+g;return(b<<d|b>>>32-d)+f}function n(b,f,a,e,c,d,g){b=b+(a^(f|~e))+c+g;return(b<<d|b>>>32-d)+f}var j=CryptoJS,k=j.lib,r=k.WordArray,k=k.Hasher,p=j.algo,h=[];(function(){for(var b=0;64>b;b++)h[b]=4294967296*o.abs(o.sin(b+1))|0})();p=p.MD5=k.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,
2562383102,271733878])},_doProcessBlock:function(b,f){for(var a=0;16>a;a++){var e=f+a,c=b[e];b[e]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}for(var e=this._hash.words,c=e[0],d=e[1],g=e[2],i=e[3],a=0;64>a;a+=4)16>a?(c=q(c,d,g,i,b[f+a],7,h[a]),i=q(i,c,d,g,b[f+a+1],12,h[a+1]),g=q(g,i,c,d,b[f+a+2],17,h[a+2]),d=q(d,g,i,c,b[f+a+3],22,h[a+3])):32>a?(c=l(c,d,g,i,b[f+(a+1)%16],5,h[a]),i=l(i,c,d,g,b[f+(a+6)%16],9,h[a+1]),g=l(g,i,c,d,b[f+(a+11)%16],14,h[a+2]),d=l(d,g,i,c,b[f+a%16],20,h[a+3])):48>a?(c=
m(c,d,g,i,b[f+(3*a+5)%16],4,h[a]),i=m(i,c,d,g,b[f+(3*a+8)%16],11,h[a+1]),g=m(g,i,c,d,b[f+(3*a+11)%16],16,h[a+2]),d=m(d,g,i,c,b[f+(3*a+14)%16],23,h[a+3])):(c=n(c,d,g,i,b[f+3*a%16],6,h[a]),i=n(i,c,d,g,b[f+(3*a+7)%16],10,h[a+1]),g=n(g,i,c,d,b[f+(3*a+14)%16],15,h[a+2]),d=n(d,g,i,c,b[f+(3*a+5)%16],21,h[a+3]));e[0]=e[0]+c|0;e[1]=e[1]+d|0;e[2]=e[2]+g|0;e[3]=e[3]+i|0},_doFinalize:function(){var b=this._data,f=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;f[e>>>5]|=128<<24-e%32;f[(e+64>>>9<<4)+14]=(a<<8|a>>>
24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(f.length+1);this._process();b=this._hash.words;for(f=0;4>f;f++)a=b[f],b[f]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360}});j.MD5=k._createHelper(p);j.HmacMD5=k._createHmacHelper(p)})(Math);

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

var Mustache;

(function (exports) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exports; // CommonJS
  } else if (typeof define === "function") {
    define(exports); // AMD
  } else {
    Mustache = exports; // <script>
  }
}((function () {

  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.7.0";
  exports.tags = ["{{", "}}"];

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Writer = Writer;

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  exports.escape = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = exports.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var fn = compileTokens(tokens);
    var self = this;

    return function (view, partials) {
      if (partials) {
        if (typeof partials === "function") {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return fn(self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  Writer.prototype._section = function (name, context, text, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(this, context.push(value[i]));
        }

        return buffer;
      }

      return value ? callback(this, context.push(value)) : "";
    case "function":
      var self = this;
      var scopedRender = function (template) {
        return self.render(template, context);
      };

      return value.call(context.view, text, scopedRender) || "";
    default:
      if (value) {
        return callback(this, context);
      }
    }

    return "";
  };

  Writer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0)) {
      return callback(this, context);
    }

    return "";
  };

  Writer.prototype._partial = function (name, context) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    var fn = this._partialCache[name];

    return fn ? fn(context) : "";
  };

  Writer.prototype._name = function (name, context) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    return (value == null) ? "" : String(value);
  };

  Writer.prototype._escaped = function (name, context) {
    return exports.escape(this._name(name, context));
  };

  /**
   * Calculates the bounds of the section represented by the given `token` in
   * the original template by drilling down into nested sections to find the
   * last token that is part of that section. Returns an array of [start, end].
   */
  function sectionBounds(token) {
    var start = token[3];
    var end = start;

    var tokens;
    while ((tokens = token[4]) && tokens.length) {
      token = tokens[tokens.length - 1];
      end = token[3];
    }

    return [start, end];
  }

  /**
   * Low-level function that compiles the given `tokens` into a function
   * that accepts three arguments: a Writer, a Context, and the template.
   */
  function compileTokens(tokens) {
    var subRenders = {};

    function subRender(i, tokens, template) {
      if (!subRenders[i]) {
        var fn = compileTokens(tokens);
        subRenders[i] = function (writer, context) {
          return fn(writer, context, template);
        };
      }

      return subRenders[i];
    }

    return function (writer, context, template) {
      var buffer = "";
      var token, sectionText;

      for (var i = 0, len = tokens.length; i < len; ++i) {
        token = tokens[i];

        switch (token[0]) {
        case "#":
          sectionText = template.slice.apply(template, sectionBounds(token));
          buffer += writer._section(token[1], context, sectionText, subRender(i, token[4], template));
          break;
        case "^":
          buffer += writer._inverted(token[1], context, subRender(i, token[4], template));
          break;
        case ">":
          buffer += writer._partial(token[1], context);
          break;
        case "&":
          buffer += writer._name(token[1], context);
          break;
        case "name":
          buffer += writer._escaped(token[1], context);
          break;
        case "text":
          buffer += token[1];
          break;
        }
      }

      return buffer;
    };
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have a fifth item: an array that contains
   * all tokens in that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];
    var token, section;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case "#":
      case "^":
        token[4] = [];
        sections.push(token);
        collector.push(token);
        collector = token[4];
        break;
      case "/":
        if (sections.length === 0) {
          throw new Error("Unopened section: " + token[1]);
        }

        section = sections.pop();

        if (section[1] !== token[1]) {
          throw new Error("Unclosed section: " + section[1]);
        }

        if (sections.length > 0) {
          collector = sections[sections.length - 1][4];
        } else {
          collector = tree;
        }
        break;
      default:
        collector.push(token);
      }
    }

    // Make sure there were no open sections when we're done.
    section = sections.pop();

    if (section) {
      throw new Error("Unclosed section: " + section[1]);
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var token, lastToken;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      if (lastToken && lastToken[0] === "text" && token[0] === "text") {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
        tokens.splice(i--, 1); // Remove this token from the array.
      } else {
        lastToken = token;
      }
    }
  }

  function escapeTags(tags) {
    if (tags.length !== 2) {
      throw new Error("Invalid tags: " + tags.join(" "));
    }

    return [
      new RegExp(escapeRe(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRe(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  exports.parse = function (template, tags) {
    tags = tags || exports.tags;

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var tokens = [],      // Buffer to hold the tokens
        spaces = [],      // Indices of whitespace tokens on the current line
        hasTag = false,   // Is there a {{tag}} on the current line?
        nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr;

    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(["text", chr, start, start + 1]);
          start += 1;

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      start = scanner.pos;

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = "&";
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error("Unclosed tag at " + scanner.pos);
      }

      tokens.push([type, value, start, scanner.pos]);

      if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      }

      // Set the tags for the next time around.
      if (type === "=") {
        tags = value.split(spaceRe);
        tagRes = escapeTags(tags);
      }
    }

    squashTokens(tokens);

    return nestTokens(tokens);
  };

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default writer.
  var _writer = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  exports.clearCache = function () {
    return _writer.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  exports.compile = function (template, tags) {
    return _writer.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  exports.compilePartial = function (name, template, tags) {
    return _writer.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  exports.compileTokens = function (tokens, template) {
    return _writer.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  exports.render = function (template, view, partials) {
    return _writer.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = exports.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  return exports;

}())));

/***

    P R O C E S S I N G . J S - 1.4.1
    a port of the Processing visualization language

    Processing.js is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.

    http://processingjs.org

***/

(function(window, document, Math, undef) {
  var nop = function() {};
  var debug = function() {
    if ("console" in window) return function(msg) {
      window.console.log("Processing.js: " + msg)
    };
    return nop
  }();
  var ajax = function(url) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    if (xhr.overrideMimeType) xhr.overrideMimeType("text/plain");
    xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
    xhr.send(null);
    if (xhr.status !== 200 && xhr.status !== 0) throw "XMLHttpRequest failed, status code " + xhr.status;
    return xhr.responseText
  };
  var isDOMPresent = "document" in this && !("fake" in this.document);
  document.head = document.head || document.getElementsByTagName("head")[0];

  function setupTypedArray(name, fallback) {
    if (name in window) return window[name];
    if (typeof window[fallback] === "function") return window[fallback];
    return function(obj) {
      if (obj instanceof Array) return obj;
      if (typeof obj === "number") {
        var arr = [];
        arr.length = obj;
        return arr
      }
    }
  }
  if (document.documentMode >= 9 && !document.doctype) throw "The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";
  var Float32Array = setupTypedArray("Float32Array", "WebGLFloatArray"),
    Int32Array = setupTypedArray("Int32Array", "WebGLIntArray"),
    Uint16Array = setupTypedArray("Uint16Array", "WebGLUnsignedShortArray"),
    Uint8Array = setupTypedArray("Uint8Array", "WebGLUnsignedByteArray");
  var PConstants = {
    X: 0,
    Y: 1,
    Z: 2,
    R: 3,
    G: 4,
    B: 5,
    A: 6,
    U: 7,
    V: 8,
    NX: 9,
    NY: 10,
    NZ: 11,
    EDGE: 12,
    SR: 13,
    SG: 14,
    SB: 15,
    SA: 16,
    SW: 17,
    TX: 18,
    TY: 19,
    TZ: 20,
    VX: 21,
    VY: 22,
    VZ: 23,
    VW: 24,
    AR: 25,
    AG: 26,
    AB: 27,
    DR: 3,
    DG: 4,
    DB: 5,
    DA: 6,
    SPR: 28,
    SPG: 29,
    SPB: 30,
    SHINE: 31,
    ER: 32,
    EG: 33,
    EB: 34,
    BEEN_LIT: 35,
    VERTEX_FIELD_COUNT: 36,
    P2D: 1,
    JAVA2D: 1,
    WEBGL: 2,
    P3D: 2,
    OPENGL: 2,
    PDF: 0,
    DXF: 0,
    OTHER: 0,
    WINDOWS: 1,
    MAXOSX: 2,
    LINUX: 3,
    EPSILON: 1.0E-4,
    MAX_FLOAT: 3.4028235E38,
    MIN_FLOAT: -3.4028235E38,
    MAX_INT: 2147483647,
    MIN_INT: -2147483648,
    PI: Math.PI,
    TWO_PI: 2 * Math.PI,
    HALF_PI: Math.PI / 2,
    THIRD_PI: Math.PI / 3,
    QUARTER_PI: Math.PI / 4,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    WHITESPACE: " \t\n\r\u000c\u00a0",
    RGB: 1,
    ARGB: 2,
    HSB: 3,
    ALPHA: 4,
    CMYK: 5,
    TIFF: 0,
    TARGA: 1,
    JPEG: 2,
    GIF: 3,
    BLUR: 11,
    GRAY: 12,
    INVERT: 13,
    OPAQUE: 14,
    POSTERIZE: 15,
    THRESHOLD: 16,
    ERODE: 17,
    DILATE: 18,
    REPLACE: 0,
    BLEND: 1 << 0,
    ADD: 1 << 1,
    SUBTRACT: 1 << 2,
    LIGHTEST: 1 << 3,
    DARKEST: 1 << 4,
    DIFFERENCE: 1 << 5,
    EXCLUSION: 1 << 6,
    MULTIPLY: 1 << 7,
    SCREEN: 1 << 8,
    OVERLAY: 1 << 9,
    HARD_LIGHT: 1 << 10,
    SOFT_LIGHT: 1 << 11,
    DODGE: 1 << 12,
    BURN: 1 << 13,
    ALPHA_MASK: 4278190080,
    RED_MASK: 16711680,
    GREEN_MASK: 65280,
    BLUE_MASK: 255,
    CUSTOM: 0,
    ORTHOGRAPHIC: 2,
    PERSPECTIVE: 3,
    POINT: 2,
    POINTS: 2,
    LINE: 4,
    LINES: 4,
    TRIANGLE: 8,
    TRIANGLES: 9,
    TRIANGLE_STRIP: 10,
    TRIANGLE_FAN: 11,
    QUAD: 16,
    QUADS: 16,
    QUAD_STRIP: 17,
    POLYGON: 20,
    PATH: 21,
    RECT: 30,
    ELLIPSE: 31,
    ARC: 32,
    SPHERE: 40,
    BOX: 41,
    GROUP: 0,
    PRIMITIVE: 1,
    GEOMETRY: 3,
    VERTEX: 0,
    BEZIER_VERTEX: 1,
    CURVE_VERTEX: 2,
    BREAK: 3,
    CLOSESHAPE: 4,
    OPEN: 1,
    CLOSE: 2,
    CORNER: 0,
    CORNERS: 1,
    RADIUS: 2,
    CENTER_RADIUS: 2,
    CENTER: 3,
    DIAMETER: 3,
    CENTER_DIAMETER: 3,
    BASELINE: 0,
    TOP: 101,
    BOTTOM: 102,
    NORMAL: 1,
    NORMALIZED: 1,
    IMAGE: 2,
    MODEL: 4,
    SHAPE: 5,
    SQUARE: "butt",
    ROUND: "round",
    PROJECT: "square",
    MITER: "miter",
    BEVEL: "bevel",
    AMBIENT: 0,
    DIRECTIONAL: 1,
    SPOT: 3,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 10,
    RETURN: 13,
    ESC: 27,
    DELETE: 127,
    CODED: 65535,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    CAPSLK: 20,
    PGUP: 33,
    PGDN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLK: 144,
    META: 157,
    INSERT: 155,
    ARROW: "default",
    CROSS: "crosshair",
    HAND: "pointer",
    MOVE: "move",
    TEXT: "text",
    WAIT: "wait",
    NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",
    DISABLE_OPENGL_2X_SMOOTH: 1,
    ENABLE_OPENGL_2X_SMOOTH: -1,
    ENABLE_OPENGL_4X_SMOOTH: 2,
    ENABLE_NATIVE_FONTS: 3,
    DISABLE_DEPTH_TEST: 4,
    ENABLE_DEPTH_TEST: -4,
    ENABLE_DEPTH_SORT: 5,
    DISABLE_DEPTH_SORT: -5,
    DISABLE_OPENGL_ERROR_REPORT: 6,
    ENABLE_OPENGL_ERROR_REPORT: -6,
    ENABLE_ACCURATE_TEXTURES: 7,
    DISABLE_ACCURATE_TEXTURES: -7,
    HINT_COUNT: 10,
    SINCOS_LENGTH: 720,
    PRECISIONB: 15,
    PRECISIONF: 1 << 15,
    PREC_MAXVAL: (1 << 15) - 1,
    PREC_ALPHA_SHIFT: 24 - 15,
    PREC_RED_SHIFT: 16 - 15,
    NORMAL_MODE_AUTO: 0,
    NORMAL_MODE_SHAPE: 1,
    NORMAL_MODE_VERTEX: 2,
    MAX_LIGHTS: 8
  };

  function virtHashCode(obj) {
    if (typeof obj === "string") {
      var hash = 0;
      for (var i = 0; i < obj.length; ++i) hash = hash * 31 + obj.charCodeAt(i) & 4294967295;
      return hash
    }
    if (typeof obj !== "object") return obj & 4294967295;
    if (obj.hashCode instanceof Function) return obj.hashCode();
    if (obj.$id === undef) obj.$id = Math.floor(Math.random() * 65536) - 32768 << 16 | Math.floor(Math.random() * 65536);
    return obj.$id
  }
  function virtEquals(obj, other) {
    if (obj === null || other === null) return obj === null && other === null;
    if (typeof obj === "string") return obj === other;
    if (typeof obj !== "object") return obj === other;
    if (obj.equals instanceof Function) return obj.equals(other);
    return obj === other
  }
  var ObjectIterator = function(obj) {
    if (obj.iterator instanceof
    Function) return obj.iterator();
    if (obj instanceof Array) {
      var index = -1;
      this.hasNext = function() {
        return ++index < obj.length
      };
      this.next = function() {
        return obj[index]
      }
    } else throw "Unable to iterate: " + obj;
  };
  var ArrayList = function() {
    function Iterator(array) {
      var index = 0;
      this.hasNext = function() {
        return index < array.length
      };
      this.next = function() {
        return array[index++]
      };
      this.remove = function() {
        array.splice(index, 1)
      }
    }
    function ArrayList(a) {
      var array;
      if (a instanceof ArrayList) array = a.toArray();
      else {
        array = [];
        if (typeof a === "number") array.length = a > 0 ? a : 0
      }
      this.get = function(i) {
        return array[i]
      };
      this.contains = function(item) {
        return this.indexOf(item) > -1
      };
      this.indexOf = function(item) {
        for (var i = 0, len = array.length; i < len; ++i) if (virtEquals(item, array[i])) return i;
        return -1
      };
      this.lastIndexOf = function(item) {
        for (var i = array.length - 1; i >= 0; --i) if (virtEquals(item, array[i])) return i;
        return -1
      };
      this.add = function() {
        if (arguments.length === 1) array.push(arguments[0]);
        else if (arguments.length === 2) {
          var arg0 = arguments[0];
          if (typeof arg0 === "number") if (arg0 >= 0 && arg0 <= array.length) array.splice(arg0, 0, arguments[1]);
          else throw arg0 + " is not a valid index";
          else throw typeof arg0 + " is not a number";
        } else throw "Please use the proper number of parameters.";
      };
      this.addAll = function(arg1, arg2) {
        var it;
        if (typeof arg1 === "number") {
          if (arg1 < 0 || arg1 > array.length) throw "Index out of bounds for addAll: " + arg1 + " greater or equal than " + array.length;
          it = new ObjectIterator(arg2);
          while (it.hasNext()) array.splice(arg1++, 0, it.next())
        } else {
          it = new ObjectIterator(arg1);
          while (it.hasNext()) array.push(it.next())
        }
      };
      this.set = function() {
        if (arguments.length === 2) {
          var arg0 = arguments[0];
          if (typeof arg0 === "number") if (arg0 >= 0 && arg0 < array.length) array.splice(arg0, 1, arguments[1]);
          else throw arg0 + " is not a valid index.";
          else throw typeof arg0 + " is not a number";
        } else throw "Please use the proper number of parameters.";
      };
      this.size = function() {
        return array.length
      };
      this.clear = function() {
        array.length = 0
      };
      this.remove = function(item) {
        if (typeof item === "number") return array.splice(item, 1)[0];
        item = this.indexOf(item);
        if (item > -1) {
          array.splice(item, 1);
          return true
        }
        return false
      };
      this.removeAll = function(c) {
        var i, x, item, newList = new ArrayList;
        newList.addAll(this);
        this.clear();
        for (i = 0, x = 0; i < newList.size(); i++) {
          item = newList.get(i);
          if (!c.contains(item)) this.add(x++, item)
        }
        if (this.size() < newList.size()) return true;
        return false
      };
      this.isEmpty = function() {
        return !array.length
      };
      this.clone = function() {
        return new ArrayList(this)
      };
      this.toArray = function() {
        return array.slice(0)
      };
      this.iterator = function() {
        return new Iterator(array)
      }
    }
    return ArrayList
  }();
  var HashMap = function() {
    function HashMap() {
      if (arguments.length === 1 && arguments[0] instanceof HashMap) return arguments[0].clone();
      var initialCapacity = arguments.length > 0 ? arguments[0] : 16;
      var loadFactor = arguments.length > 1 ? arguments[1] : 0.75;
      var buckets = [];
      buckets.length = initialCapacity;
      var count = 0;
      var hashMap = this;

      function getBucketIndex(key) {
        var index = virtHashCode(key) % buckets.length;
        return index < 0 ? buckets.length + index : index
      }
      function ensureLoad() {
        if (count <= loadFactor * buckets.length) return;
        var allEntries = [];
        for (var i = 0; i < buckets.length; ++i) if (buckets[i] !== undef) allEntries = allEntries.concat(buckets[i]);
        var newBucketsLength = buckets.length * 2;
        buckets = [];
        buckets.length = newBucketsLength;
        for (var j = 0; j < allEntries.length; ++j) {
          var index = getBucketIndex(allEntries[j].key);
          var bucket = buckets[index];
          if (bucket === undef) buckets[index] = bucket = [];
          bucket.push(allEntries[j])
        }
      }
      function Iterator(conversion, removeItem) {
        var bucketIndex = 0;
        var itemIndex = -1;
        var endOfBuckets = false;
        var currentItem;

        function findNext() {
          while (!endOfBuckets) {
            ++itemIndex;
            if (bucketIndex >= buckets.length) endOfBuckets = true;
            else if (buckets[bucketIndex] === undef || itemIndex >= buckets[bucketIndex].length) {
              itemIndex = -1;
              ++bucketIndex
            } else return
          }
        }
        this.hasNext = function() {
          return !endOfBuckets
        };
        this.next = function() {
          currentItem = conversion(buckets[bucketIndex][itemIndex]);
          findNext();
          return currentItem
        };
        this.remove = function() {
          if (currentItem !== undef) {
            removeItem(currentItem);
            --itemIndex;
            findNext()
          }
        };
        findNext()
      }
      function Set(conversion, isIn, removeItem) {
        this.clear = function() {
          hashMap.clear()
        };
        this.contains = function(o) {
          return isIn(o)
        };
        this.containsAll = function(o) {
          var it = o.iterator();
          while (it.hasNext()) if (!this.contains(it.next())) return false;
          return true
        };
        this.isEmpty = function() {
          return hashMap.isEmpty()
        };
        this.iterator = function() {
          return new Iterator(conversion, removeItem)
        };
        this.remove = function(o) {
          if (this.contains(o)) {
            removeItem(o);
            return true
          }
          return false
        };
        this.removeAll = function(c) {
          var it = c.iterator();
          var changed = false;
          while (it.hasNext()) {
            var item = it.next();
            if (this.contains(item)) {
              removeItem(item);
              changed = true
            }
          }
          return true
        };
        this.retainAll = function(c) {
          var it = this.iterator();
          var toRemove = [];
          while (it.hasNext()) {
            var entry = it.next();
            if (!c.contains(entry)) toRemove.push(entry)
          }
          for (var i = 0; i < toRemove.length; ++i) removeItem(toRemove[i]);
          return toRemove.length > 0
        };
        this.size = function() {
          return hashMap.size()
        };
        this.toArray = function() {
          var result = [];
          var it = this.iterator();
          while (it.hasNext()) result.push(it.next());
          return result
        }
      }
      function Entry(pair) {
        this._isIn = function(map) {
          return map === hashMap && pair.removed === undef
        };
        this.equals = function(o) {
          return virtEquals(pair.key, o.getKey())
        };
        this.getKey = function() {
          return pair.key
        };
        this.getValue = function() {
          return pair.value
        };
        this.hashCode = function(o) {
          return virtHashCode(pair.key)
        };
        this.setValue = function(value) {
          var old = pair.value;
          pair.value = value;
          return old
        }
      }
      this.clear = function() {
        count = 0;
        buckets = [];
        buckets.length = initialCapacity
      };
      this.clone = function() {
        var map = new HashMap;
        map.putAll(this);
        return map
      };
      this.containsKey = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return false;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) return true;
        return false
      };
      this.containsValue = function(value) {
        for (var i = 0; i < buckets.length; ++i) {
          var bucket = buckets[i];
          if (bucket === undef) continue;
          for (var j = 0; j < bucket.length; ++j) if (virtEquals(bucket[j].value, value)) return true
        }
        return false
      };
      this.entrySet = function() {
        return new Set(function(pair) {
          return new Entry(pair)
        },


        function(pair) {
          return pair instanceof Entry && pair._isIn(hashMap)
        },


        function(pair) {
          return hashMap.remove(pair.getKey())
        })
      };
      this.get = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return null;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) return bucket[i].value;
        return null
      };
      this.isEmpty = function() {
        return count === 0
      };
      this.keySet = function() {
        return new Set(function(pair) {
          return pair.key
        },


        function(key) {
          return hashMap.containsKey(key)
        },


        function(key) {
          return hashMap.remove(key)
        })
      };
      this.values = function() {
        return new Set(function(pair) {
          return pair.value
        },


        function(value) {
          return hashMap.containsValue(value)
        },

        function(value) {
          return hashMap.removeByValue(value)
        })
      };
      this.put = function(key, value) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) {
          ++count;
          buckets[index] = [{
            key: key,
            value: value
          }];
          ensureLoad();
          return null
        }
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) {
          var previous = bucket[i].value;
          bucket[i].value = value;
          return previous
        }++count;
        bucket.push({
          key: key,
          value: value
        });
        ensureLoad();
        return null
      };
      this.putAll = function(m) {
        var it = m.entrySet().iterator();
        while (it.hasNext()) {
          var entry = it.next();
          this.put(entry.getKey(), entry.getValue())
        }
      };
      this.remove = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return null;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) {
          --count;
          var previous = bucket[i].value;
          bucket[i].removed = true;
          if (bucket.length > 1) bucket.splice(i, 1);
          else buckets[index] = undef;
          return previous
        }
        return null
      };
      this.removeByValue = function(value) {
        var bucket, i, ilen, pair;
        for (bucket in buckets) if (buckets.hasOwnProperty(bucket)) for (i = 0, ilen = buckets[bucket].length; i < ilen; i++) {
          pair = buckets[bucket][i];
          if (pair.value === value) {
            buckets[bucket].splice(i, 1);
            return true
          }
        }
        return false
      };
      this.size = function() {
        return count
      }
    }
    return HashMap
  }();
  var PVector = function() {
    function PVector(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0
    }
    PVector.dist = function(v1, v2) {
      return v1.dist(v2)
    };
    PVector.dot = function(v1, v2) {
      return v1.dot(v2)
    };
    PVector.cross = function(v1, v2) {
      return v1.cross(v2)
    };
    PVector.angleBetween = function(v1, v2) {
      return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()))
    };
    PVector.prototype = {
      set: function(v, y, z) {
        if (arguments.length === 1) this.set(v.x || v[0] || 0, v.y || v[1] || 0, v.z || v[2] || 0);
        else {
          this.x = v;
          this.y = y;
          this.z = z
        }
      },
      get: function() {
        return new PVector(this.x, this.y, this.z)
      },
      mag: function() {
        var x = this.x,
          y = this.y,
          z = this.z;
        return Math.sqrt(x * x + y * y + z * z)
      },
      add: function(v, y, z) {
        if (arguments.length === 1) {
          this.x += v.x;
          this.y += v.y;
          this.z += v.z
        } else {
          this.x += v;
          this.y += y;
          this.z += z
        }
      },
      sub: function(v, y, z) {
        if (arguments.length === 1) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= v.z
        } else {
          this.x -= v;
          this.y -= y;
          this.z -= z
        }
      },
      mult: function(v) {
        if (typeof v === "number") {
          this.x *= v;
          this.y *= v;
          this.z *= v
        } else {
          this.x *= v.x;
          this.y *= v.y;
          this.z *= v.z
        }
      },
      div: function(v) {
        if (typeof v === "number") {
          this.x /= v;
          this.y /= v;
          this.z /= v
        } else {
          this.x /= v.x;
          this.y /= v.y;
          this.z /= v.z
        }
      },
      dist: function(v) {
        var dx = this.x - v.x,
          dy = this.y - v.y,
          dz = this.z - v.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz)
      },
      dot: function(v, y, z) {
        if (arguments.length === 1) return this.x * v.x + this.y * v.y + this.z * v.z;
        return this.x * v + this.y * y + this.z * z
      },
      cross: function(v) {
        var x = this.x,
          y = this.y,
          z = this.z;
        return new PVector(y * v.z - v.y * z, z * v.x - v.z * x, x * v.y - v.x * y)
      },
      normalize: function() {
        var m = this.mag();
        if (m > 0) this.div(m)
      },
      limit: function(high) {
        if (this.mag() > high) {
          this.normalize();
          this.mult(high)
        }
      },
      heading2D: function() {
        return -Math.atan2(-this.y, this.x)
      },
      toString: function() {
        return "[" + this.x + ", " + this.y + ", " + this.z + "]"
      },
      array: function() {
        return [this.x, this.y, this.z]
      }
    };

    function createPVectorMethod(method) {
      return function(v1, v2) {
        var v = v1.get();
        v[method](v2);
        return v
      }
    }
    for (var method in PVector.prototype) if (PVector.prototype.hasOwnProperty(method) && !PVector.hasOwnProperty(method)) PVector[method] = createPVectorMethod(method);
    return PVector
  }();

  function DefaultScope() {}
  DefaultScope.prototype = PConstants;
  var defaultScope = new DefaultScope;
  defaultScope.ArrayList = ArrayList;
  defaultScope.HashMap = HashMap;
  defaultScope.PVector = PVector;
  defaultScope.ObjectIterator = ObjectIterator;
  defaultScope.PConstants = PConstants;
  defaultScope.defineProperty = function(obj, name, desc) {
    if ("defineProperty" in Object) Object.defineProperty(obj, name, desc);
    else {
      if (desc.hasOwnProperty("get")) obj.__defineGetter__(name, desc.get);
      if (desc.hasOwnProperty("set")) obj.__defineSetter__(name, desc.set)
    }
  };

  function overloadBaseClassFunction(object, name, basefn) {
    if (!object.hasOwnProperty(name) || typeof object[name] !== "function") {
      object[name] = basefn;
      return
    }
    var fn = object[name];
    if ("$overloads" in fn) {
      fn.$defaultOverload = basefn;
      return
    }
    if (! ("$overloads" in basefn) && fn.length === basefn.length) return;
    var overloads, defaultOverload;
    if ("$overloads" in basefn) {
      overloads = basefn.$overloads.slice(0);
      overloads[fn.length] = fn;
      defaultOverload = basefn.$defaultOverload
    } else {
      overloads = [];
      overloads[basefn.length] = basefn;
      overloads[fn.length] = fn;
      defaultOverload = fn
    }
    var hubfn = function() {
      var fn = hubfn.$overloads[arguments.length] || ("$methodArgsIndex" in hubfn && arguments.length > hubfn.$methodArgsIndex ? hubfn.$overloads[hubfn.$methodArgsIndex] : null) || hubfn.$defaultOverload;
      return fn.apply(this, arguments)
    };
    hubfn.$overloads = overloads;
    if ("$methodArgsIndex" in basefn) hubfn.$methodArgsIndex = basefn.$methodArgsIndex;
    hubfn.$defaultOverload = defaultOverload;
    hubfn.name = name;
    object[name] = hubfn
  }
  function extendClass(subClass, baseClass) {
    function extendGetterSetter(propertyName) {
      defaultScope.defineProperty(subClass, propertyName, {
        get: function() {
          return baseClass[propertyName]
        },
        set: function(v) {
          baseClass[propertyName] = v
        },
        enumerable: true
      })
    }
    var properties = [];
    for (var propertyName in baseClass) if (typeof baseClass[propertyName] === "function") overloadBaseClassFunction(subClass, propertyName, baseClass[propertyName]);
    else if (propertyName.charAt(0) !== "$" && !(propertyName in subClass)) properties.push(propertyName);
    while (properties.length > 0) extendGetterSetter(properties.shift());
    subClass.$super = baseClass
  }
  defaultScope.extendClassChain = function(base) {
    var path = [base];
    for (var self = base.$upcast; self; self = self.$upcast) {
      extendClass(self, base);
      path.push(self);
      base = self
    }
    while (path.length > 0) path.pop().$self = base
  };
  defaultScope.extendStaticMembers = function(derived, base) {
    extendClass(derived, base)
  };
  defaultScope.extendInterfaceMembers = function(derived, base) {
    extendClass(derived, base)
  };
  defaultScope.addMethod = function(object, name, fn, hasMethodArgs) {
    var existingfn = object[name];
    if (existingfn || hasMethodArgs) {
      var args = fn.length;
      if ("$overloads" in existingfn) existingfn.$overloads[args] = fn;
      else {
        var hubfn = function() {
          var fn = hubfn.$overloads[arguments.length] || ("$methodArgsIndex" in hubfn && arguments.length > hubfn.$methodArgsIndex ? hubfn.$overloads[hubfn.$methodArgsIndex] : null) || hubfn.$defaultOverload;
          return fn.apply(this, arguments)
        };
        var overloads = [];
        if (existingfn) overloads[existingfn.length] = existingfn;
        overloads[args] = fn;
        hubfn.$overloads = overloads;
        hubfn.$defaultOverload = existingfn || fn;
        if (hasMethodArgs) hubfn.$methodArgsIndex = args;
        hubfn.name = name;
        object[name] = hubfn
      }
    } else object[name] = fn
  };

  function isNumericalJavaType(type) {
    if (typeof type !== "string") return false;
    return ["byte", "int", "char", "color", "float", "long", "double"].indexOf(type) !== -1
  }
  defaultScope.createJavaArray = function(type, bounds) {
    var result = null,
      defaultValue = null;
    if (typeof type === "string") if (type === "boolean") defaultValue = false;
    else if (isNumericalJavaType(type)) defaultValue = 0;
    if (typeof bounds[0] === "number") {
      var itemsCount = 0 | bounds[0];
      if (bounds.length <= 1) {
        result = [];
        result.length = itemsCount;
        for (var i = 0; i < itemsCount; ++i) result[i] = defaultValue
      } else {
        result = [];
        var newBounds = bounds.slice(1);
        for (var j = 0; j < itemsCount; ++j) result.push(defaultScope.createJavaArray(type, newBounds))
      }
    }
    return result
  };
  var colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  (function(Processing) {
    var unsupportedP5 = ("open() createOutput() createInput() BufferedReader selectFolder() " + "dataPath() createWriter() selectOutput() beginRecord() " + "saveStream() endRecord() selectInput() saveBytes() createReader() " + "beginRaw() endRaw() PrintWriter delay()").split(" "),
      count = unsupportedP5.length,
      prettyName, p5Name;

    function createUnsupportedFunc(n) {
      return function() {
        throw "Processing.js does not support " + n + ".";
      }
    }
    while (count--) {
      prettyName = unsupportedP5[count];
      p5Name = prettyName.replace("()", "");
      Processing[p5Name] = createUnsupportedFunc(prettyName)
    }
  })(defaultScope);
  defaultScope.defineProperty(defaultScope, "screenWidth", {
    get: function() {
      return window.innerWidth
    }
  });
  defaultScope.defineProperty(defaultScope, "screenHeight", {
    get: function() {
      return window.innerHeight
    }
  });
  defaultScope.defineProperty(defaultScope, "online", {
    get: function() {
      return true
    }
  });
  var processingInstances = [];
  var processingInstanceIds = {};
  var removeInstance = function(id) {
    processingInstances.splice(processingInstanceIds[id], 1);
    delete processingInstanceIds[id]
  };
  var addInstance = function(processing) {
    if (processing.externals.canvas.id === undef || !processing.externals.canvas.id.length) processing.externals.canvas.id = "__processing" + processingInstances.length;
    processingInstanceIds[processing.externals.canvas.id] = processingInstances.length;
    processingInstances.push(processing)
  };

  function computeFontMetrics(pfont) {
    var emQuad = 250,
      correctionFactor = pfont.size / emQuad,
      canvas = document.createElement("canvas");
    canvas.width = 2 * emQuad;
    canvas.height = 2 * emQuad;
    canvas.style.opacity = 0;
    var cfmFont = pfont.getCSSDefinition(emQuad + "px", "normal"),
      ctx = canvas.getContext("2d");
    ctx.font = cfmFont;
    var protrusions = "dbflkhyjqpg";
    canvas.width = ctx.measureText(protrusions).width;
    ctx.font = cfmFont;
    var leadDiv = document.createElement("div");
    leadDiv.style.position = "absolute";
    leadDiv.style.opacity = 0;
    leadDiv.style.fontFamily = '"' + pfont.name + '"';
    leadDiv.style.fontSize = emQuad + "px";
    leadDiv.innerHTML = protrusions + "<br/>" + protrusions;
    document.body.appendChild(leadDiv);
    var w = canvas.width,
      h = canvas.height,
      baseline = h / 2;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "black";
    ctx.fillText(protrusions, 0, baseline);
    var pixelData = ctx.getImageData(0, 0, w, h).data;
    var i = 0,
      w4 = w * 4,
      len = pixelData.length;
    while (++i < len && pixelData[i] === 255) nop();
    var ascent = Math.round(i / w4);
    i = len - 1;
    while (--i > 0 && pixelData[i] === 255) nop();
    var descent = Math.round(i / w4);
    pfont.ascent = correctionFactor * (baseline - ascent);
    pfont.descent = correctionFactor * (descent - baseline);
    if (document.defaultView.getComputedStyle) {
      var leadDivHeight = document.defaultView.getComputedStyle(leadDiv, null).getPropertyValue("height");
      leadDivHeight = correctionFactor * leadDivHeight.replace("px", "");
      if (leadDivHeight >= pfont.size * 2) pfont.leading = Math.round(leadDivHeight / 2)
    }
    document.body.removeChild(leadDiv);
    if (pfont.caching) return ctx
  }
  function PFont(name, size) {
    if (name === undef) name = "";
    this.name = name;
    if (size === undef) size = 0;
    this.size = size;
    this.glyph = false;
    this.ascent = 0;
    this.descent = 0;
    this.leading = 1.2 * size;
    var illegalIndicator = name.indexOf(" Italic Bold");
    if (illegalIndicator !== -1) name = name.substring(0, illegalIndicator);
    this.style = "normal";
    var italicsIndicator = name.indexOf(" Italic");
    if (italicsIndicator !== -1) {
      name = name.substring(0, italicsIndicator);
      this.style = "italic"
    }
    this.weight = "normal";
    var boldIndicator = name.indexOf(" Bold");
    if (boldIndicator !== -1) {
      name = name.substring(0, boldIndicator);
      this.weight = "bold"
    }
    this.family = "sans-serif";
    if (name !== undef) switch (name) {
    case "sans-serif":
    case "serif":
    case "monospace":
    case "fantasy":
    case "cursive":
      this.family = name;
      break;
    default:
      this.family = '"' + name + '", sans-serif';
      break
    }
    this.context2d = computeFontMetrics(this);
    this.css = this.getCSSDefinition();
    if (this.context2d) this.context2d.font = this.css
  }
  PFont.prototype.caching = true;
  PFont.prototype.getCSSDefinition = function(fontSize, lineHeight) {
    if (fontSize === undef) fontSize = this.size + "px";
    if (lineHeight === undef) lineHeight = this.leading + "px";
    var components = [this.style, "normal", this.weight, fontSize + "/" + lineHeight, this.family];
    return components.join(" ")
  };
  PFont.prototype.measureTextWidth = function(string) {
    return this.context2d.measureText(string).width
  };
  PFont.prototype.measureTextWidthFallback = function(string) {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    ctx.font = this.css;
    return ctx.measureText(string).width
  };
  PFont.PFontCache = {
    length: 0
  };
  PFont.get = function(fontName, fontSize) {
    fontSize = (fontSize * 10 + 0.5 | 0) / 10;
    var cache = PFont.PFontCache,
      idx = fontName + "/" + fontSize;
    if (!cache[idx]) {
      cache[idx] = new PFont(fontName, fontSize);
      cache.length++;
      if (cache.length === 50) {
        PFont.prototype.measureTextWidth = PFont.prototype.measureTextWidthFallback;
        PFont.prototype.caching = false;
        var entry;
        for (entry in cache) if (entry !== "length") cache[entry].context2d = null;
        return new PFont(fontName, fontSize)
      }
      if (cache.length === 400) {
        PFont.PFontCache = {};
        PFont.get = PFont.getFallback;
        return new PFont(fontName, fontSize)
      }
    }
    return cache[idx]
  };
  PFont.getFallback = function(fontName, fontSize) {
    return new PFont(fontName, fontSize)
  };
  PFont.list = function() {
    return ["sans-serif", "serif", "monospace", "fantasy", "cursive"]
  };
  PFont.preloading = {
    template: {},
    initialized: false,
    initialize: function() {
      var generateTinyFont = function() {
        var encoded = "#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm" + "7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3" + "AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG" + "9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3" + "#yld0xg32QAB77#E777773B#E3C#I#Q77773E#" + "Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#" + "E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#" + "Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#";
        var expand = function(input) {
          return "AAAAAAAA".substr(~~input ? 7 - input : 6)
        };
        return encoded.replace(/[#237]/g, expand)
      };
      var fontface = document.createElement("style");
      fontface.setAttribute("type", "text/css");
      fontface.innerHTML = "@font-face {\n" + '  font-family: "PjsEmptyFont";' + "\n" + "  src: url('data:application/x-font-ttf;base64," + generateTinyFont() + "')\n" + "       format('truetype');\n" + "}";
      document.head.appendChild(fontface);
      var element = document.createElement("span");
      element.style.cssText = 'position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
      element.innerHTML = "AAAAAAAA";
      document.body.appendChild(element);
      this.template = element;
      this.initialized = true
    },
    getElementWidth: function(element) {
      return document.defaultView.getComputedStyle(element, "").getPropertyValue("width")
    },
    timeAttempted: 0,
    pending: function(intervallength) {
      if (!this.initialized) this.initialize();
      var element, computedWidthFont, computedWidthRef = this.getElementWidth(this.template);
      for (var i = 0; i < this.fontList.length; i++) {
        element = this.fontList[i];
        computedWidthFont = this.getElementWidth(element);
        if (this.timeAttempted < 4E3 && computedWidthFont === computedWidthRef) {
          this.timeAttempted += intervallength;
          return true
        } else {
          document.body.removeChild(element);
          this.fontList.splice(i--, 1);
          this.timeAttempted = 0
        }
      }
      if (this.fontList.length === 0) return false;
      return true
    },
    fontList: [],
    addedList: {},
    add: function(fontSrc) {
      if (!this.initialized) this.initialize();
      var fontName = typeof fontSrc === "object" ? fontSrc.fontFace : fontSrc,
      fontUrl = typeof fontSrc === "object" ? fontSrc.url : fontSrc;
      if (this.addedList[fontName]) return;
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = "@font-face{\n  font-family: '" + fontName + "';\n  src:  url('" + fontUrl + "');\n}\n";
      document.head.appendChild(style);
      this.addedList[fontName] = true;
      var element = document.createElement("span");
      element.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;";
      element.style.fontFamily = '"' + fontName + '", "PjsEmptyFont", fantasy';
      element.innerHTML = "AAAAAAAA";
      document.body.appendChild(element);
      this.fontList.push(element)
    }
  };
  defaultScope.PFont = PFont;
  var Processing = this.Processing = function(aCanvas, aCode) {
    if (! (this instanceof
    Processing)) throw "called Processing constructor as if it were a function: missing 'new'.";
    var curElement, pgraphicsMode = aCanvas === undef && aCode === undef;
    if (pgraphicsMode) curElement = document.createElement("canvas");
    else curElement = typeof aCanvas === "string" ? document.getElementById(aCanvas) : aCanvas;
    if (! (curElement instanceof HTMLCanvasElement)) throw "called Processing constructor without passing canvas element reference or id.";

    function unimplemented(s) {
      Processing.debug("Unimplemented - " + s)
    }
    var p = this;
    p.externals = {
      canvas: curElement,
      context: undef,
      sketch: undef
    };
    p.name = "Processing.js Instance";
    p.use3DContext = false;
    p.focused = false;
    p.breakShape = false;
    p.glyphTable = {};
    p.pmouseX = 0;
    p.pmouseY = 0;
    p.mouseX = 0;
    p.mouseY = 0;
    p.mouseButton = 0;
    p.mouseScroll = 0;
    p.mouseClicked = undef;
    p.mouseDragged = undef;
    p.mouseMoved = undef;
    p.mousePressed = undef;
    p.mouseReleased = undef;
    p.mouseScrolled = undef;
    p.mouseOver = undef;
    p.mouseOut = undef;
    p.touchStart = undef;
    p.touchEnd = undef;
    p.touchMove = undef;
    p.touchCancel = undef;
    p.key = undef;
    p.keyCode = undef;
    p.keyPressed = nop;
    p.keyReleased = nop;
    p.keyTyped = nop;
    p.draw = undef;
    p.setup = undef;
    p.__mousePressed = false;
    p.__keyPressed = false;
    p.__frameRate = 60;
    p.frameCount = 0;
    p.width = 100;
    p.height = 100;
    var curContext, curSketch, drawing, online = true,
      doFill = true,
      fillStyle = [1, 1, 1, 1],
      currentFillColor = 4294967295,
      isFillDirty = true,
      doStroke = true,
      strokeStyle = [0, 0, 0, 1],
      currentStrokeColor = 4278190080,
      isStrokeDirty = true,
      lineWidth = 1,
      loopStarted = false,
      renderSmooth = false,
      doLoop = true,
      looping = 0,
      curRectMode = 0,
      curEllipseMode = 3,
      normalX = 0,
      normalY = 0,
      normalZ = 0,
      normalMode = 0,
      curFrameRate = 60,
      curMsPerFrame = 1E3 / curFrameRate,
      curCursor = 'default',
      oldCursor = curElement.style.cursor,
      curShape = 20,
      curShapeCount = 0,
      curvePoints = [],
      curTightness = 0,
      curveDet = 20,
      curveInited = false,
      backgroundObj = -3355444,
      bezDetail = 20,
      colorModeA = 255,
      colorModeX = 255,
      colorModeY = 255,
      colorModeZ = 255,
      pathOpen = false,
      mouseDragging = false,
      pmouseXLastFrame = 0,
      pmouseYLastFrame = 0,
      curColorMode = 1,
      curTint = null,
      curTint3d = null,
      getLoaded = false,
      start = Date.now(),
      timeSinceLastFPS = start,
      framesSinceLastFPS = 0,
      textcanvas, curveBasisMatrix, curveToBezierMatrix, curveDrawMatrix, bezierDrawMatrix, bezierBasisInverse, bezierBasisMatrix, curContextCache = {
      attributes: {},
      locations: {}
    },
      programObject3D, programObject2D, programObjectUnlitShape, boxBuffer, boxNormBuffer, boxOutlineBuffer, rectBuffer, rectNormBuffer, sphereBuffer, lineBuffer, fillBuffer, fillColorBuffer, strokeColorBuffer, pointBuffer, shapeTexVBO, canTex, textTex, curTexture = {
      width: 0,
      height: 0
    },
      curTextureMode = 2,
      usingTexture = false,
      textBuffer, textureBuffer, indexBuffer, horizontalTextAlignment = 37,
      verticalTextAlignment = 0,
      textMode = 4,
      curFontName = "Arial",
      curTextSize = 12,
      curTextAscent = 9,
      curTextDescent = 2,
      curTextLeading = 14,
      curTextFont = PFont.get(curFontName, curTextSize),
      originalContext, proxyContext = null,
      isContextReplaced = false,
      setPixelsCached, maxPixelsCached = 1E3,
      pressedKeysMap = [],
      lastPressedKeyCode = null,
      codedKeys = [16,
      17, 18, 20, 33, 34, 35, 36, 37, 38, 39, 40, 144, 155, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 157];
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(curElement, null)["paddingLeft"], 10) || 0;
      stylePaddingTop = parseInt(document.defaultView.getComputedStyle(curElement, null)["paddingTop"], 10) || 0;
      styleBorderLeft = parseInt(document.defaultView.getComputedStyle(curElement, null)["borderLeftWidth"], 10) || 0;
      styleBorderTop = parseInt(document.defaultView.getComputedStyle(curElement, null)["borderTopWidth"], 10) || 0
    }
    var lightCount = 0;
    var sphereDetailV = 0,
      sphereDetailU = 0,
      sphereX = [],
      sphereY = [],
      sphereZ = [],
      sinLUT = new Float32Array(720),
      cosLUT = new Float32Array(720),
      sphereVerts, sphereNorms;
    var cam, cameraInv, modelView, modelViewInv, userMatrixStack, userReverseMatrixStack, inverseCopy, projection, manipulatingCamera = false,
      frustumMode = false,
      cameraFOV = 60 * (Math.PI / 180),
      cameraX = p.width / 2,
      cameraY = p.height / 2,
      cameraZ = cameraY / Math.tan(cameraFOV / 2),
      cameraNear = cameraZ / 10,
      cameraFar = cameraZ * 10,
      cameraAspect = p.width / p.height;
    var vertArray = [],
      curveVertArray = [],
      curveVertCount = 0,
      isCurve = false,
      isBezier = false,
      firstVert = true;
    var curShapeMode = 0;
    var styleArray = [];
    var boxVerts = new Float32Array([0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5,
      0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);
    var boxOutlineVerts = new Float32Array([0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
    var boxNorms = new Float32Array([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0,
      0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
    var rectVerts = new Float32Array([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]);
    var rectNorms = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    var vertexShaderSrcUnlitShape = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec4 aColor;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform float uPointSize;" + "void main(void) {" + "  vFrontColor = aColor;" + "  gl_PointSize = uPointSize;" + "  gl_Position = uProjection * uView * vec4(aVertex, 1.0);" + "}";
    var fragmentShaderSrcUnlitShape = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "uniform bool uSmooth;" + "void main(void){" + "  if(uSmooth == true){" + "    float dist = distance(gl_PointCoord, vec2(0.5));" + "    if(dist > 0.5){" + "      discard;" + "    }" + "  }" + "  gl_FragColor = vFrontColor;" + "}";
    var vertexShaderSrc2D = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec2 aTextureCoord;" + "uniform vec4 uColor;" + "uniform mat4 uModel;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform float uPointSize;" + "varying vec2 vTextureCoord;" + "void main(void) {" + "  gl_PointSize = uPointSize;" + "  vFrontColor = uColor;" + "  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);" + "  vTextureCoord = aTextureCoord;" + "}";
    var fragmentShaderSrc2D = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "varying vec2 vTextureCoord;" + "uniform sampler2D uSampler;" + "uniform int uIsDrawingText;" + "uniform bool uSmooth;" + "void main(void){" + "  if(uSmooth == true){" + "    float dist = distance(gl_PointCoord, vec2(0.5));" + "    if(dist > 0.5){" + "      discard;" + "    }" + "  }" + "  if(uIsDrawingText == 1){" + "    float alpha = texture2D(uSampler, vTextureCoord).a;" + "    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);" + "  }" + "  else{" + "    gl_FragColor = vFrontColor;" + "  }" + "}";
    var webglMaxTempsWorkaround = /Windows/.test(navigator.userAgent);
    var vertexShaderSrc3D = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec3 aNormal;" + "attribute vec4 aColor;" + "attribute vec2 aTexture;" + "varying   vec2 vTexture;" + "uniform vec4 uColor;" + "uniform bool uUsingMat;" + "uniform vec3 uSpecular;" + "uniform vec3 uMaterialEmissive;" + "uniform vec3 uMaterialAmbient;" + "uniform vec3 uMaterialSpecular;" + "uniform float uShininess;" + "uniform mat4 uModel;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform mat4 uNormalTransform;" + "uniform int uLightCount;" + "uniform vec3 uFalloff;" + "struct Light {" + "  int type;" + "  vec3 color;" + "  vec3 position;" + "  vec3 direction;" + "  float angle;" + "  vec3 halfVector;" + "  float concentration;" + "};" + "uniform Light uLights0;" + "uniform Light uLights1;" + "uniform Light uLights2;" + "uniform Light uLights3;" + "uniform Light uLights4;" + "uniform Light uLights5;" + "uniform Light uLights6;" + "uniform Light uLights7;" + "Light getLight(int index){" + "  if(index == 0) return uLights0;" + "  if(index == 1) return uLights1;" + "  if(index == 2) return uLights2;" + "  if(index == 3) return uLights3;" + "  if(index == 4) return uLights4;" + "  if(index == 5) return uLights5;" + "  if(index == 6) return uLights6;" + "  return uLights7;" + "}" + "void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {" + "  float d = length( light.position - ecPos );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));" + "  totalAmbient += light.color * attenuation;" + "}" + "void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float powerFactor = 0.0;" + "  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));" + "  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));" + "  if( nDotVP != 0.0 ){" + "    powerFactor = pow( nDotVH, uShininess );" + "  }" + "  col += light.color * nDotVP;" + "  spec += uSpecular * powerFactor;" + "}" + "void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float powerFactor;" + "   vec3 VP = light.position - ecPos;" + "  float d = length( VP ); " + "  VP = normalize( VP );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));" + "  float nDotVP = max( 0.0, dot( vertNormal, VP ));" + "  vec3 halfVector = normalize( VP - normalize(ecPos) );" + "  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));" + "  if( nDotVP == 0.0 ) {" + "    powerFactor = 0.0;" + "  }" + "  else {" + "    powerFactor = pow( nDotHV, uShininess );" + "  }" + "  spec += uSpecular * powerFactor * attenuation;" + "  col += light.color * nDotVP * attenuation;" + "}" + "void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float spotAttenuation;" + "  float powerFactor = 0.0;" + "  vec3 VP = light.position - ecPos;" + "  vec3 ldir = normalize( -light.direction );" + "  float d = length( VP );" + "  VP = normalize( VP );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );" + "  float spotDot = dot( VP, ldir );" + (webglMaxTempsWorkaround ? "  spotAttenuation = 1.0; " : "  if( spotDot > cos( light.angle ) ) {" + "    spotAttenuation = pow( spotDot, light.concentration );" + "  }" + "  else{" + "    spotAttenuation = 0.0;" + "  }" + "  attenuation *= spotAttenuation;" + "") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );" + "  vec3 halfVector = normalize( VP - normalize(ecPos) );" + "  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );" + "  if( nDotVP != 0.0 ) {" + "    powerFactor = pow( nDotHV, uShininess );" + "  }" + "  spec += uSpecular * powerFactor * attenuation;" + "  col += light.color * nDotVP * attenuation;" + "}" + "void main(void) {" + "  vec3 finalAmbient = vec3( 0.0 );" + "  vec3 finalDiffuse = vec3( 0.0 );" + "  vec3 finalSpecular = vec3( 0.0 );" + "  vec4 col = uColor;" + "  if ( uColor[0] == -1.0 ){" + "    col = aColor;" + "  }" + "  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));" + "  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);" + "  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;" + "  if( uLightCount == 0 ) {" + "    vFrontColor = col + vec4(uMaterialSpecular, 1.0);" + "  }" + "  else {" + "    for( int i = 0; i < 8; i++ ) {" + "      Light l = getLight(i);" + "      if( i >= uLightCount ){" + "        break;" + "      }" + "      if( l.type == 0 ) {" + "        AmbientLight( finalAmbient, ecPos, l );" + "      }" + "      else if( l.type == 1 ) {" + "        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "      else if( l.type == 2 ) {" + "        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "      else {" + "        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "    }" + "   if( uUsingMat == false ) {" + "     vFrontColor = vec4(" + "       vec3( col ) * finalAmbient +" + "       vec3( col ) * finalDiffuse +" + "       vec3( col ) * finalSpecular," + "       col[3] );" + "   }" + "   else{" + "     vFrontColor = vec4( " + "       uMaterialEmissive + " + "       (vec3(col) * uMaterialAmbient * finalAmbient ) + " + "       (vec3(col) * finalDiffuse) + " + "       (uMaterialSpecular * finalSpecular), " + "       col[3] );" + "    }" + "  }" + "  vTexture.xy = aTexture.xy;" + "  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );" + "}";
    var fragmentShaderSrc3D = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "uniform sampler2D uSampler;" + "uniform bool uUsingTexture;" + "varying vec2 vTexture;" + "void main(void){" + "  if( uUsingTexture ){" + "    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;" + "  }" + "  else{" + "    gl_FragColor = vFrontColor;" + "  }" + "}";

    function uniformf(cacheId, programObj, varName, varValue) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== null) if (varValue.length === 4) curContext.uniform4fv(varLocation, varValue);
      else if (varValue.length === 3) curContext.uniform3fv(varLocation, varValue);
      else if (varValue.length === 2) curContext.uniform2fv(varLocation, varValue);
      else curContext.uniform1f(varLocation, varValue)
    }
    function uniformi(cacheId, programObj, varName, varValue) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== null) if (varValue.length === 4) curContext.uniform4iv(varLocation, varValue);
      else if (varValue.length === 3) curContext.uniform3iv(varLocation, varValue);
      else if (varValue.length === 2) curContext.uniform2iv(varLocation, varValue);
      else curContext.uniform1i(varLocation, varValue)
    }
    function uniformMatrix(cacheId, programObj, varName, transpose, matrix) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== -1) if (matrix.length === 16) curContext.uniformMatrix4fv(varLocation, transpose, matrix);
      else if (matrix.length === 9) curContext.uniformMatrix3fv(varLocation, transpose, matrix);
      else curContext.uniformMatrix2fv(varLocation, transpose, matrix)
    }
    function vertexAttribPointer(cacheId, programObj, varName, size, VBO) {
      var varLocation = curContextCache.attributes[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getAttribLocation(programObj, varName);
        curContextCache.attributes[cacheId] = varLocation
      }
      if (varLocation !== -1) {
        curContext.bindBuffer(curContext.ARRAY_BUFFER, VBO);
        curContext.vertexAttribPointer(varLocation, size, curContext.FLOAT, false, 0, 0);
        curContext.enableVertexAttribArray(varLocation)
      }
    }
    function disableVertexAttribPointer(cacheId, programObj, varName) {
      var varLocation = curContextCache.attributes[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getAttribLocation(programObj, varName);
        curContextCache.attributes[cacheId] = varLocation
      }
      if (varLocation !== -1) curContext.disableVertexAttribArray(varLocation)
    }
    var createProgramObject = function(curContext, vetexShaderSource, fragmentShaderSource) {
      var vertexShaderObject = curContext.createShader(curContext.VERTEX_SHADER);
      curContext.shaderSource(vertexShaderObject, vetexShaderSource);
      curContext.compileShader(vertexShaderObject);
      if (!curContext.getShaderParameter(vertexShaderObject, curContext.COMPILE_STATUS)) throw curContext.getShaderInfoLog(vertexShaderObject);
      var fragmentShaderObject = curContext.createShader(curContext.FRAGMENT_SHADER);
      curContext.shaderSource(fragmentShaderObject, fragmentShaderSource);
      curContext.compileShader(fragmentShaderObject);
      if (!curContext.getShaderParameter(fragmentShaderObject, curContext.COMPILE_STATUS)) throw curContext.getShaderInfoLog(fragmentShaderObject);
      var programObject = curContext.createProgram();
      curContext.attachShader(programObject, vertexShaderObject);
      curContext.attachShader(programObject, fragmentShaderObject);
      curContext.linkProgram(programObject);
      if (!curContext.getProgramParameter(programObject, curContext.LINK_STATUS)) throw "Error linking shaders.";
      return programObject
    };
    var imageModeCorner = function(x, y, w, h, whAreSizes) {
      return {
        x: x,
        y: y,
        w: w,
        h: h
      }
    };
    var imageModeConvert = imageModeCorner;
    var imageModeCorners = function(x, y, w, h, whAreSizes) {
      return {
        x: x,
        y: y,
        w: whAreSizes ? w : w - x,
        h: whAreSizes ? h : h - y
      }
    };
    var imageModeCenter = function(x, y, w, h, whAreSizes) {
      return {
        x: x - w / 2,
        y: y - h / 2,
        w: w,
        h: h
      }
    };
    var DrawingShared = function() {};
    var Drawing2D = function() {};
    var Drawing3D = function() {};
    var DrawingPre = function() {};
    Drawing2D.prototype = new DrawingShared;
    Drawing2D.prototype.constructor = Drawing2D;
    Drawing3D.prototype = new DrawingShared;
    Drawing3D.prototype.constructor = Drawing3D;
    DrawingPre.prototype = new DrawingShared;
    DrawingPre.prototype.constructor = DrawingPre;
    DrawingShared.prototype.a3DOnlyFunction = nop;
    var charMap = {};
    var Char = p.Character = function(chr) {
      if (typeof chr === "string" && chr.length === 1) this.code = chr.charCodeAt(0);
      else if (typeof chr === "number") this.code = chr;
      else if (chr instanceof Char) this.code = chr;
      else this.code = NaN;
      return charMap[this.code] === undef ? charMap[this.code] = this : charMap[this.code]
    };
    Char.prototype.toString = function() {
      return String.fromCharCode(this.code)
    };
    Char.prototype.valueOf = function() {
      return this.code
    };
    var PShape = p.PShape = function(family) {
      this.family = family || 0;
      this.visible = true;
      this.style = true;
      this.children = [];
      this.nameTable = [];
      this.params = [];
      this.name = "";
      this.image = null;
      this.matrix = null;
      this.kind = null;
      this.close = null;
      this.width = null;
      this.height = null;
      this.parent = null
    };
    PShape.prototype = {
      isVisible: function() {
        return this.visible
      },
      setVisible: function(visible) {
        this.visible = visible
      },
      disableStyle: function() {
        this.style = false;
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].disableStyle()
      },
      enableStyle: function() {
        this.style = true;
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].enableStyle()
      },
      getFamily: function() {
        return this.family
      },
      getWidth: function() {
        return this.width
      },
      getHeight: function() {
        return this.height
      },
      setName: function(name) {
        this.name = name
      },
      getName: function() {
        return this.name
      },
      draw: function(renderContext) {
        renderContext = renderContext || p;
        if (this.visible) {
          this.pre(renderContext);
          this.drawImpl(renderContext);
          this.post(renderContext)
        }
      },
      drawImpl: function(renderContext) {
        if (this.family === 0) this.drawGroup(renderContext);
        else if (this.family === 1) this.drawPrimitive(renderContext);
        else if (this.family === 3) this.drawGeometry(renderContext);
        else if (this.family === 21) this.drawPath(renderContext)
      },
      drawPath: function(renderContext) {
        var i, j;
        if (this.vertices.length === 0) return;
        renderContext.beginShape();
        if (this.vertexCodes.length === 0) if (this.vertices[0].length === 2) for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i][0], this.vertices[i][1]);
        else for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i][0], this.vertices[i][1], this.vertices[i][2]);
        else {
          var index = 0;
          if (this.vertices[0].length === 2) for (i = 0, j = this.vertexCodes.length; i < j; i++) if (this.vertexCodes[i] === 0) {
            renderContext.vertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index]["moveTo"]);
            renderContext.breakShape = false;
            index++
          } else if (this.vertexCodes[i] === 1) {
            renderContext.bezierVertex(this.vertices[index + 0][0], this.vertices[index + 0][1], this.vertices[index + 1][0], this.vertices[index + 1][1], this.vertices[index + 2][0], this.vertices[index + 2][1]);
            index += 3
          } else if (this.vertexCodes[i] === 2) {
            renderContext.curveVertex(this.vertices[index][0], this.vertices[index][1]);
            index++
          } else {
            if (this.vertexCodes[i] === 3) renderContext.breakShape = true
          } else for (i = 0, j = this.vertexCodes.length; i < j; i++) if (this.vertexCodes[i] === 0) {
            renderContext.vertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index][2]);
            if (this.vertices[index]["moveTo"] === true) vertArray[vertArray.length - 1]["moveTo"] = true;
            else if (this.vertices[index]["moveTo"] === false) vertArray[vertArray.length - 1]["moveTo"] = false;
            renderContext.breakShape = false
          } else if (this.vertexCodes[i] === 1) {
            renderContext.bezierVertex(this.vertices[index + 0][0], this.vertices[index + 0][1], this.vertices[index + 0][2], this.vertices[index + 1][0], this.vertices[index + 1][1], this.vertices[index + 1][2], this.vertices[index + 2][0], this.vertices[index + 2][1], this.vertices[index + 2][2]);
            index += 3
          } else if (this.vertexCodes[i] === 2) {
            renderContext.curveVertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index][2]);
            index++
          } else if (this.vertexCodes[i] === 3) renderContext.breakShape = true
        }
        renderContext.endShape(this.close ? 2 : 1)
      },
      drawGeometry: function(renderContext) {
        var i, j;
        renderContext.beginShape(this.kind);
        if (this.style) for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i]);
        else for (i = 0, j = this.vertices.length; i < j; i++) {
          var vert = this.vertices[i];
          if (vert[2] === 0) renderContext.vertex(vert[0], vert[1]);
          else renderContext.vertex(vert[0], vert[1], vert[2])
        }
        renderContext.endShape()
      },
      drawGroup: function(renderContext) {
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].draw(renderContext)
      },
      drawPrimitive: function(renderContext) {
        if (this.kind === 2) renderContext.point(this.params[0], this.params[1]);
        else if (this.kind === 4) if (this.params.length === 4) renderContext.line(this.params[0], this.params[1], this.params[2], this.params[3]);
        else renderContext.line(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
        else if (this.kind === 8) renderContext.triangle(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
        else if (this.kind === 16) renderContext.quad(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5], this.params[6], this.params[7]);
        else if (this.kind === 30) if (this.image !== null) {
          var imMode = imageModeConvert;
          renderContext.imageMode(0);
          renderContext.image(this.image, this.params[0], this.params[1], this.params[2], this.params[3]);
          imageModeConvert = imMode
        } else {
          var rcMode = curRectMode;
          renderContext.rectMode(0);
          renderContext.rect(this.params[0], this.params[1], this.params[2], this.params[3]);
          curRectMode = rcMode
        } else if (this.kind === 31) {
          var elMode = curEllipseMode;
          renderContext.ellipseMode(0);
          renderContext.ellipse(this.params[0], this.params[1], this.params[2], this.params[3]);
          curEllipseMode = elMode
        } else if (this.kind === 32) {
          var eMode = curEllipseMode;
          renderContext.ellipseMode(0);
          renderContext.arc(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
          curEllipseMode = eMode
        } else if (this.kind === 41) if (this.params.length === 1) renderContext.box(this.params[0]);
        else renderContext.box(this.params[0], this.params[1], this.params[2]);
        else if (this.kind === 40) renderContext.sphere(this.params[0])
      },
      pre: function(renderContext) {
        if (this.matrix) {
          renderContext.pushMatrix();
          renderContext.transform(this.matrix)
        }
        if (this.style) {
          renderContext.pushStyle();
          this.styles(renderContext)
        }
      },
      post: function(renderContext) {
        if (this.matrix) renderContext.popMatrix();
        if (this.style) renderContext.popStyle()
      },
      styles: function(renderContext) {
        if (this.stroke) {
          renderContext.stroke(this.strokeColor);
          renderContext.strokeWeight(this.strokeWeight);
          renderContext.strokeCap(this.strokeCap);
          renderContext.strokeJoin(this.strokeJoin)
        } else renderContext.noStroke();
        if (this.fill) renderContext.fill(this.fillColor);
        else renderContext.noFill()
      },
      getChild: function(child) {
        var i, j;
        if (typeof child === "number") return this.children[child];
        var found;
        if (child === "" || this.name === child) return this;
        if (this.nameTable.length > 0) {
          for (i = 0, j = this.nameTable.length; i < j || found; i++) if (this.nameTable[i].getName === child) {
            found = this.nameTable[i];
            break
          }
          if (found) return found
        }
        for (i = 0, j = this.children.length; i < j; i++) {
          found = this.children[i].getChild(child);
          if (found) return found
        }
        return null
      },
      getChildCount: function() {
        return this.children.length
      },
      addChild: function(child) {
        this.children.push(child);
        child.parent = this;
        if (child.getName() !== null) this.addName(child.getName(), child)
      },
      addName: function(name, shape) {
        if (this.parent !== null) this.parent.addName(name, shape);
        else this.nameTable.push([name, shape])
      },
      translate: function() {
        if (arguments.length === 2) {
          this.checkMatrix(2);
          this.matrix.translate(arguments[0], arguments[1])
        } else {
          this.checkMatrix(3);
          this.matrix.translate(arguments[0], arguments[1], 0)
        }
      },
      checkMatrix: function(dimensions) {
        if (this.matrix === null) if (dimensions === 2) this.matrix = new p.PMatrix2D;
        else this.matrix = new p.PMatrix3D;
        else if (dimensions === 3 && this.matrix instanceof p.PMatrix2D) this.matrix = new p.PMatrix3D
      },
      rotateX: function(angle) {
        this.rotate(angle, 1, 0, 0)
      },
      rotateY: function(angle) {
        this.rotate(angle, 0, 1, 0)
      },
      rotateZ: function(angle) {
        this.rotate(angle, 0, 0, 1)
      },
      rotate: function() {
        if (arguments.length === 1) {
          this.checkMatrix(2);
          this.matrix.rotate(arguments[0])
        } else {
          this.checkMatrix(3);
          this.matrix.rotate(arguments[0], arguments[1], arguments[2], arguments[3])
        }
      },
      scale: function() {
        if (arguments.length === 2) {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0], arguments[1])
        } else if (arguments.length === 3) {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0], arguments[1], arguments[2])
        } else {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0])
        }
      },
      resetMatrix: function() {
        this.checkMatrix(2);
        this.matrix.reset()
      },
      applyMatrix: function(matrix) {
        if (arguments.length === 1) this.applyMatrix(matrix.elements[0], matrix.elements[1], 0, matrix.elements[2], matrix.elements[3], matrix.elements[4], 0, matrix.elements[5], 0, 0, 1, 0, 0, 0, 0, 1);
        else if (arguments.length === 6) {
          this.checkMatrix(2);
          this.matrix.apply(arguments[0], arguments[1], arguments[2], 0, arguments[3], arguments[4], arguments[5], 0, 0, 0, 1, 0, 0, 0, 0, 1)
        } else if (arguments.length === 16) {
          this.checkMatrix(3);
          this.matrix.apply(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15])
        }
      }
    };
    var PShapeSVG = p.PShapeSVG = function() {
      p.PShape.call(this);
      if (arguments.length === 1) {
        this.element = arguments[0];
        this.vertexCodes = [];
        this.vertices = [];
        this.opacity = 1;
        this.stroke = false;
        this.strokeColor = 4278190080;
        this.strokeWeight = 1;
        this.strokeCap = 'butt';
        this.strokeJoin = 'miter';
        this.strokeGradient = null;
        this.strokeGradientPaint = null;
        this.strokeName = null;
        this.strokeOpacity = 1;
        this.fill = true;
        this.fillColor = 4278190080;
        this.fillGradient = null;
        this.fillGradientPaint = null;
        this.fillName = null;
        this.fillOpacity = 1;
        if (this.element.getName() !== "svg") throw "root is not <svg>, it's <" + this.element.getName() + ">";
      } else if (arguments.length === 2) if (typeof arguments[1] === "string") {
        if (arguments[1].indexOf(".svg") > -1) {
          this.element = new p.XMLElement(p, arguments[1]);
          this.vertexCodes = [];
          this.vertices = [];
          this.opacity = 1;
          this.stroke = false;
          this.strokeColor = 4278190080;
          this.strokeWeight = 1;
          this.strokeCap = 'butt';
          this.strokeJoin = 'miter';
          this.strokeGradient = "";
          this.strokeGradientPaint = "";
          this.strokeName = "";
          this.strokeOpacity = 1;
          this.fill = true;
          this.fillColor = 4278190080;
          this.fillGradient = null;
          this.fillGradientPaint = null;
          this.fillOpacity = 1
        }
      } else if (arguments[0]) {
        this.element = arguments[1];
        this.vertexCodes = arguments[0].vertexCodes.slice();
        this.vertices = arguments[0].vertices.slice();
        this.stroke = arguments[0].stroke;
        this.strokeColor = arguments[0].strokeColor;
        this.strokeWeight = arguments[0].strokeWeight;
        this.strokeCap = arguments[0].strokeCap;
        this.strokeJoin = arguments[0].strokeJoin;
        this.strokeGradient = arguments[0].strokeGradient;
        this.strokeGradientPaint = arguments[0].strokeGradientPaint;
        this.strokeName = arguments[0].strokeName;
        this.fill = arguments[0].fill;
        this.fillColor = arguments[0].fillColor;
        this.fillGradient = arguments[0].fillGradient;
        this.fillGradientPaint = arguments[0].fillGradientPaint;
        this.fillName = arguments[0].fillName;
        this.strokeOpacity = arguments[0].strokeOpacity;
        this.fillOpacity = arguments[0].fillOpacity;
        this.opacity = arguments[0].opacity
      }
      this.name = this.element.getStringAttribute("id");
      var displayStr = this.element.getStringAttribute("display", "inline");
      this.visible = displayStr !== "none";
      var str = this.element.getAttribute("transform");
      if (str) this.matrix = this.parseMatrix(str);
      var viewBoxStr = this.element.getStringAttribute("viewBox");
      if (viewBoxStr !== null) {
        var viewBox = viewBoxStr.split(" ");
        this.width = viewBox[2];
        this.height = viewBox[3]
      }
      var unitWidth = this.element.getStringAttribute("width");
      var unitHeight = this.element.getStringAttribute("height");
      if (unitWidth !== null) {
        this.width = this.parseUnitSize(unitWidth);
        this.height = this.parseUnitSize(unitHeight)
      } else if (this.width === 0 || this.height === 0) {
        this.width = 1;
        this.height = 1;
        throw "The width and/or height is not " + "readable in the <svg> tag of this file.";
      }
      this.parseColors(this.element);
      this.parseChildren(this.element)
    };
    PShapeSVG.prototype = new PShape;
    PShapeSVG.prototype.parseMatrix = function() {
      function getCoords(s) {
        var m = [];
        s.replace(/\((.*?)\)/, function() {
          return function(all, params) {
            m = params.replace(/,+/g, " ").split(/\s+/)
          }
        }());
        return m
      }
      return function(str) {
        this.checkMatrix(2);
        var pieces = [];
        str.replace(/\s*(\w+)\((.*?)\)/g, function(all) {
          pieces.push(p.trim(all))
        });
        if (pieces.length === 0) return null;
        for (var i = 0, j = pieces.length; i < j; i++) {
          var m = getCoords(pieces[i]);
          if (pieces[i].indexOf("matrix") !== -1) this.matrix.set(m[0], m[2], m[4], m[1], m[3], m[5]);
          else if (pieces[i].indexOf("translate") !== -1) {
            var tx = m[0];
            var ty = m.length === 2 ? m[1] : 0;
            this.matrix.translate(tx, ty)
          } else if (pieces[i].indexOf("scale") !== -1) {
            var sx = m[0];
            var sy = m.length === 2 ? m[1] : m[0];
            this.matrix.scale(sx, sy)
          } else if (pieces[i].indexOf("rotate") !== -1) {
            var angle = m[0];
            if (m.length === 1) this.matrix.rotate(p.radians(angle));
            else if (m.length === 3) {
              this.matrix.translate(m[1], m[2]);
              this.matrix.rotate(p.radians(m[0]));
              this.matrix.translate(-m[1], -m[2])
            }
          } else if (pieces[i].indexOf("skewX") !== -1) this.matrix.skewX(parseFloat(m[0]));
          else if (pieces[i].indexOf("skewY") !== -1) this.matrix.skewY(m[0]);
          else if (pieces[i].indexOf("shearX") !== -1) this.matrix.shearX(m[0]);
          else if (pieces[i].indexOf("shearY") !== -1) this.matrix.shearY(m[0])
        }
        return this.matrix
      }
    }();
    PShapeSVG.prototype.parseChildren = function(element) {
      var newelement = element.getChildren();
      var children = new p.PShape;
      for (var i = 0, j = newelement.length; i < j; i++) {
        var kid = this.parseChild(newelement[i]);
        if (kid) children.addChild(kid)
      }
      this.children.push(children)
    };
    PShapeSVG.prototype.getName = function() {
      return this.name
    };
    PShapeSVG.prototype.parseChild = function(elem) {
      var name = elem.getName();
      var shape;
      if (name === "g") shape = new PShapeSVG(this, elem);
      else if (name === "defs") shape = new PShapeSVG(this, elem);
      else if (name === "line") {
        shape = new PShapeSVG(this, elem);
        shape.parseLine()
      } else if (name === "circle") {
        shape = new PShapeSVG(this, elem);
        shape.parseEllipse(true)
      } else if (name === "ellipse") {
        shape = new PShapeSVG(this, elem);
        shape.parseEllipse(false)
      } else if (name === "rect") {
        shape = new PShapeSVG(this, elem);
        shape.parseRect()
      } else if (name === "polygon") {
        shape = new PShapeSVG(this, elem);
        shape.parsePoly(true)
      } else if (name === "polyline") {
        shape = new PShapeSVG(this, elem);
        shape.parsePoly(false)
      } else if (name === "path") {
        shape = new PShapeSVG(this, elem);
        shape.parsePath()
      } else if (name === "radialGradient") unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient");
      else if (name === "linearGradient") unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient");
      else if (name === "text") unimplemented("PShapeSVG.prototype.parseChild, name = text");
      else if (name === "filter") unimplemented("PShapeSVG.prototype.parseChild, name = filter");
      else if (name === "mask") unimplemented("PShapeSVG.prototype.parseChild, name = mask");
      else nop();
      return shape
    };
    PShapeSVG.prototype.parsePath = function() {
      this.family = 21;
      this.kind = 0;
      var pathDataChars = [];
      var c;
      var pathData = p.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g, " "));
      if (pathData === null) return;
      pathData = p.__toCharArray(pathData);
      var cx = 0,
        cy = 0,
        ctrlX = 0,
        ctrlY = 0,
        ctrlX1 = 0,
        ctrlX2 = 0,
        ctrlY1 = 0,
        ctrlY2 = 0,
        endX = 0,
        endY = 0,
        ppx = 0,
        ppy = 0,
        px = 0,
        py = 0,
        i = 0,
        valOf = 0;
      var str = "";
      var tmpArray = [];
      var flag = false;
      var lastInstruction;
      var command;
      var j, k;
      while (i < pathData.length) {
        valOf = pathData[i].valueOf();
        if (valOf >= 65 && valOf <= 90 || valOf >= 97 && valOf <= 122) {
          j = i;
          i++;
          if (i < pathData.length) {
            tmpArray = [];
            valOf = pathData[i].valueOf();
            while (! (valOf >= 65 && valOf <= 90 || valOf >= 97 && valOf <= 100 || valOf >= 102 && valOf <= 122) && flag === false) {
              if (valOf === 32) {
                if (str !== "") {
                  tmpArray.push(parseFloat(str));
                  str = ""
                }
                i++
              } else if (valOf === 45) if (pathData[i - 1].valueOf() === 101) {
                str += pathData[i].toString();
                i++
              } else {
                if (str !== "") tmpArray.push(parseFloat(str));
                str = pathData[i].toString();
                i++
              } else {
                str += pathData[i].toString();
                i++
              }
              if (i === pathData.length) flag = true;
              else valOf = pathData[i].valueOf()
            }
          }
          if (str !== "") {
            tmpArray.push(parseFloat(str));
            str = ""
          }
          command = pathData[j];
          valOf = command.valueOf();
          if (valOf === 77) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) {
              cx = tmpArray[0];
              cy = tmpArray[1];
              this.parsePathMoveto(cx, cy);
              if (tmpArray.length > 2) for (j = 2, k = tmpArray.length; j < k; j += 2) {
                cx = tmpArray[j];
                cy = tmpArray[j + 1];
                this.parsePathLineto(cx, cy)
              }
            }
          } else if (valOf === 109) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) {
              cx += tmpArray[0];
              cy += tmpArray[1];
              this.parsePathMoveto(cx, cy);
              if (tmpArray.length > 2) for (j = 2, k = tmpArray.length; j < k; j += 2) {
                cx += tmpArray[j];
                cy += tmpArray[j + 1];
                this.parsePathLineto(cx, cy)
              }
            }
          } else if (valOf === 76) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              cx = tmpArray[j];
              cy = tmpArray[j + 1];
              this.parsePathLineto(cx, cy)
            }
          } else if (valOf === 108) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              cx += tmpArray[j];
              cy += tmpArray[j + 1];
              this.parsePathLineto(cx, cy)
            }
          } else if (valOf === 72) for (j = 0, k = tmpArray.length; j < k; j++) {
            cx = tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 104) for (j = 0, k = tmpArray.length; j < k; j++) {
            cx += tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 86) for (j = 0, k = tmpArray.length; j < k; j++) {
            cy = tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 118) for (j = 0, k = tmpArray.length; j < k; j++) {
            cy += tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 67) {
            if (tmpArray.length >= 6 && tmpArray.length % 6 === 0) for (j = 0, k = tmpArray.length; j < k; j += 6) {
              ctrlX1 = tmpArray[j];
              ctrlY1 = tmpArray[j + 1];
              ctrlX2 = tmpArray[j + 2];
              ctrlY2 = tmpArray[j + 3];
              endX = tmpArray[j + 4];
              endY = tmpArray[j + 5];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 99) {
            if (tmpArray.length >= 6 && tmpArray.length % 6 === 0) for (j = 0, k = tmpArray.length; j < k; j += 6) {
              ctrlX1 = cx + tmpArray[j];
              ctrlY1 = cy + tmpArray[j + 1];
              ctrlX2 = cx + tmpArray[j + 2];
              ctrlY2 = cy + tmpArray[j + 3];
              endX = cx + tmpArray[j + 4];
              endY = cy + tmpArray[j + 5];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 83) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              if (lastInstruction.toLowerCase() === "c" || lastInstruction.toLowerCase() === "s") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX1 = px + (px - ppx);
                ctrlY1 = py + (py - ppy)
              } else {
                ctrlX1 = this.vertices[this.vertices.length - 1][0];
                ctrlY1 = this.vertices[this.vertices.length - 1][1]
              }
              ctrlX2 = tmpArray[j];
              ctrlY2 = tmpArray[j + 1];
              endX = tmpArray[j + 2];
              endY = tmpArray[j + 3];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 115) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              if (lastInstruction.toLowerCase() === "c" || lastInstruction.toLowerCase() === "s") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX1 = px + (px - ppx);
                ctrlY1 = py + (py - ppy)
              } else {
                ctrlX1 = this.vertices[this.vertices.length - 1][0];
                ctrlY1 = this.vertices[this.vertices.length - 1][1]
              }
              ctrlX2 = cx + tmpArray[j];
              ctrlY2 = cy + tmpArray[j + 1];
              endX = cx + tmpArray[j + 2];
              endY = cy + tmpArray[j + 3];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 81) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              ctrlX = tmpArray[j];
              ctrlY = tmpArray[j + 1];
              endX = tmpArray[j + 2];
              endY = tmpArray[j + 3];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 113) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              ctrlX = cx + tmpArray[j];
              ctrlY = cy + tmpArray[j + 1];
              endX = cx + tmpArray[j + 2];
              endY = cy + tmpArray[j + 3];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 84) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              if (lastInstruction.toLowerCase() === "q" || lastInstruction.toLowerCase() === "t") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX = px + (px - ppx);
                ctrlY = py + (py - ppy)
              } else {
                ctrlX = cx;
                ctrlY = cy
              }
              endX = tmpArray[j];
              endY = tmpArray[j + 1];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 116) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              if (lastInstruction.toLowerCase() === "q" || lastInstruction.toLowerCase() === "t") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX = px + (px - ppx);
                ctrlY = py + (py - ppy)
              } else {
                ctrlX = cx;
                ctrlY = cy
              }
              endX = cx + tmpArray[j];
              endY = cy + tmpArray[j + 1];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 90 || valOf === 122) this.close = true;
          lastInstruction = command.toString()
        } else i++
      }
    };
    PShapeSVG.prototype.parsePathQuadto = function(x1, y1, cx, cy, x2, y2) {
      if (this.vertices.length > 0) {
        this.parsePathCode(1);
        this.parsePathVertex(x1 + (cx - x1) * 2 / 3, y1 + (cy - y1) * 2 / 3);
        this.parsePathVertex(x2 + (cx - x2) * 2 / 3, y2 + (cy - y2) * 2 / 3);
        this.parsePathVertex(x2, y2)
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathCurveto = function(x1, y1, x2, y2, x3, y3) {
      if (this.vertices.length > 0) {
        this.parsePathCode(1);
        this.parsePathVertex(x1, y1);
        this.parsePathVertex(x2, y2);
        this.parsePathVertex(x3, y3)
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathLineto = function(px, py) {
      if (this.vertices.length > 0) {
        this.parsePathCode(0);
        this.parsePathVertex(px, py);
        this.vertices[this.vertices.length - 1]["moveTo"] = false
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathMoveto = function(px, py) {
      if (this.vertices.length > 0) this.parsePathCode(3);
      this.parsePathCode(0);
      this.parsePathVertex(px, py);
      this.vertices[this.vertices.length - 1]["moveTo"] = true
    };
    PShapeSVG.prototype.parsePathVertex = function(x, y) {
      var verts = [];
      verts[0] = x;
      verts[1] = y;
      this.vertices.push(verts)
    };
    PShapeSVG.prototype.parsePathCode = function(what) {
      this.vertexCodes.push(what)
    };
    PShapeSVG.prototype.parsePoly = function(val) {
      this.family = 21;
      this.close = val;
      var pointsAttr = p.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g, " "));
      if (pointsAttr !== null) {
        var pointsBuffer = pointsAttr.split(" ");
        if (pointsBuffer.length % 2 === 0) for (var i = 0, j = pointsBuffer.length; i < j; i++) {
          var verts = [];
          verts[0] = pointsBuffer[i];
          verts[1] = pointsBuffer[++i];
          this.vertices.push(verts)
        } else throw "Error parsing polygon points: odd number of coordinates provided";
      }
    };
    PShapeSVG.prototype.parseRect = function() {
      this.kind = 30;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("x");
      this.params[1] = this.element.getFloatAttribute("y");
      this.params[2] = this.element.getFloatAttribute("width");
      this.params[3] = this.element.getFloatAttribute("height");
      if (this.params[2] < 0 || this.params[3] < 0) throw "svg error: negative width or height found while parsing <rect>";
    };
    PShapeSVG.prototype.parseEllipse = function(val) {
      this.kind = 31;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("cx") | 0;
      this.params[1] = this.element.getFloatAttribute("cy") | 0;
      var rx, ry;
      if (val) {
        rx = ry = this.element.getFloatAttribute("r");
        if (rx < 0) throw "svg error: negative radius found while parsing <circle>";
      } else {
        rx = this.element.getFloatAttribute("rx");
        ry = this.element.getFloatAttribute("ry");
        if (rx < 0 || ry < 0) throw "svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";
      }
      this.params[0] -= rx;
      this.params[1] -= ry;
      this.params[2] = rx * 2;
      this.params[3] = ry * 2
    };
    PShapeSVG.prototype.parseLine = function() {
      this.kind = 4;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("x1");
      this.params[1] = this.element.getFloatAttribute("y1");
      this.params[2] = this.element.getFloatAttribute("x2");
      this.params[3] = this.element.getFloatAttribute("y2")
    };
    PShapeSVG.prototype.parseColors = function(element) {
      if (element.hasAttribute("opacity")) this.setOpacity(element.getAttribute("opacity"));
      if (element.hasAttribute("stroke")) this.setStroke(element.getAttribute("stroke"));
      if (element.hasAttribute("stroke-width")) this.setStrokeWeight(element.getAttribute("stroke-width"));
      if (element.hasAttribute("stroke-linejoin")) this.setStrokeJoin(element.getAttribute("stroke-linejoin"));
      if (element.hasAttribute("stroke-linecap")) this.setStrokeCap(element.getStringAttribute("stroke-linecap"));
      if (element.hasAttribute("fill")) this.setFill(element.getStringAttribute("fill"));
      if (element.hasAttribute("style")) {
        var styleText = element.getStringAttribute("style");
        var styleTokens = styleText.toString().split(";");
        for (var i = 0, j = styleTokens.length; i < j; i++) {
          var tokens = p.trim(styleTokens[i].split(":"));
          if (tokens[0] === "fill") this.setFill(tokens[1]);
          else if (tokens[0] === "fill-opacity") this.setFillOpacity(tokens[1]);
          else if (tokens[0] === "stroke") this.setStroke(tokens[1]);
          else if (tokens[0] === "stroke-width") this.setStrokeWeight(tokens[1]);
          else if (tokens[0] === "stroke-linecap") this.setStrokeCap(tokens[1]);
          else if (tokens[0] === "stroke-linejoin") this.setStrokeJoin(tokens[1]);
          else if (tokens[0] === "stroke-opacity") this.setStrokeOpacity(tokens[1]);
          else if (tokens[0] === "opacity") this.setOpacity(tokens[1])
        }
      }
    };
    PShapeSVG.prototype.setFillOpacity = function(opacityText) {
      this.fillOpacity = parseFloat(opacityText);
      this.fillColor = this.fillOpacity * 255 << 24 | this.fillColor & 16777215
    };
    PShapeSVG.prototype.setFill = function(fillText) {
      var opacityMask = this.fillColor & 4278190080;
      if (fillText === "none") this.fill = false;
      else if (fillText.indexOf("#") === 0) {
        this.fill = true;
        if (fillText.length === 4) fillText = fillText.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3");
        this.fillColor = opacityMask | parseInt(fillText.substring(1), 16) & 16777215
      } else if (fillText.indexOf("rgb") === 0) {
        this.fill = true;
        this.fillColor = opacityMask | this.parseRGB(fillText)
      } else if (fillText.indexOf("url(#") === 0) this.fillName = fillText.substring(5, fillText.length - 1);
      else if (colors[fillText]) {
        this.fill = true;
        this.fillColor = opacityMask | parseInt(colors[fillText].substring(1), 16) & 16777215
      }
    };
    PShapeSVG.prototype.setOpacity = function(opacity) {
      this.strokeColor = parseFloat(opacity) * 255 << 24 | this.strokeColor & 16777215;
      this.fillColor = parseFloat(opacity) * 255 << 24 | this.fillColor & 16777215
    };
    PShapeSVG.prototype.setStroke = function(strokeText) {
      var opacityMask = this.strokeColor & 4278190080;
      if (strokeText === "none") this.stroke = false;
      else if (strokeText.charAt(0) === "#") {
        this.stroke = true;
        if (strokeText.length === 4) strokeText = strokeText.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3");
        this.strokeColor = opacityMask | parseInt(strokeText.substring(1), 16) & 16777215
      } else if (strokeText.indexOf("rgb") === 0) {
        this.stroke = true;
        this.strokeColor = opacityMask | this.parseRGB(strokeText)
      } else if (strokeText.indexOf("url(#") === 0) this.strokeName = strokeText.substring(5, strokeText.length - 1);
      else if (colors[strokeText]) {
        this.stroke = true;
        this.strokeColor = opacityMask | parseInt(colors[strokeText].substring(1), 16) & 16777215
      }
    };
    PShapeSVG.prototype.setStrokeWeight = function(weight) {
      this.strokeWeight = this.parseUnitSize(weight)
    };
    PShapeSVG.prototype.setStrokeJoin = function(linejoin) {
      if (linejoin === "miter") this.strokeJoin = 'miter';
      else if (linejoin === "round") this.strokeJoin = 'round';
      else if (linejoin === "bevel") this.strokeJoin = 'bevel'
    };
    PShapeSVG.prototype.setStrokeCap = function(linecap) {
      if (linecap === "butt") this.strokeCap = 'butt';
      else if (linecap === "round") this.strokeCap = 'round';
      else if (linecap === "square") this.strokeCap = 'square'
    };
    PShapeSVG.prototype.setStrokeOpacity = function(opacityText) {
      this.strokeOpacity = parseFloat(opacityText);
      this.strokeColor = this.strokeOpacity * 255 << 24 | this.strokeColor & 16777215
    };
    PShapeSVG.prototype.parseRGB = function(color) {
      var sub = color.substring(color.indexOf("(") + 1, color.indexOf(")"));
      var values = sub.split(", ");
      return values[0] << 16 | values[1] << 8 | values[2]
    };
    PShapeSVG.prototype.parseUnitSize = function(text) {
      var len = text.length - 2;
      if (len < 0) return text;
      if (text.indexOf("pt") === len) return parseFloat(text.substring(0, len)) * 1.25;
      if (text.indexOf("pc") === len) return parseFloat(text.substring(0, len)) * 15;
      if (text.indexOf("mm") === len) return parseFloat(text.substring(0, len)) * 3.543307;
      if (text.indexOf("cm") === len) return parseFloat(text.substring(0, len)) * 35.43307;
      if (text.indexOf("in") === len) return parseFloat(text.substring(0, len)) * 90;
      if (text.indexOf("px") === len) return parseFloat(text.substring(0, len));
      return parseFloat(text)
    };
    p.shape = function(shape, x, y, width, height) {
      if (arguments.length >= 1 && arguments[0] !== null) if (shape.isVisible()) {
        p.pushMatrix();
        if (curShapeMode === 3) if (arguments.length === 5) {
          p.translate(x - width / 2, y - height / 2);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else if (arguments.length === 3) p.translate(x - shape.getWidth() / 2, -shape.getHeight() / 2);
        else p.translate(-shape.getWidth() / 2, -shape.getHeight() / 2);
        else if (curShapeMode === 0) if (arguments.length === 5) {
          p.translate(x, y);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else {
          if (arguments.length === 3) p.translate(x, y)
        } else if (curShapeMode === 1) if (arguments.length === 5) {
          width -= x;
          height -= y;
          p.translate(x, y);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else if (arguments.length === 3) p.translate(x, y);
        shape.draw(p);
        if (arguments.length === 1 && curShapeMode === 3 || arguments.length > 1) p.popMatrix()
      }
    };
    p.shapeMode = function(mode) {
      curShapeMode = mode
    };
    p.loadShape = function(filename) {
      if (arguments.length === 1) if (filename.indexOf(".svg") > -1) return new PShapeSVG(null, filename);
      return null
    };
    var XMLAttribute = function(fname, n, nameSpace, v, t) {
      this.fullName = fname || "";
      this.name = n || "";
      this.namespace = nameSpace || "";
      this.value = v;
      this.type = t
    };
    XMLAttribute.prototype = {
      getName: function() {
        return this.name
      },
      getFullName: function() {
        return this.fullName
      },
      getNamespace: function() {
        return this.namespace
      },
      getValue: function() {
        return this.value
      },
      getType: function() {
        return this.type
      },
      setValue: function(newval) {
        this.value = newval
      }
    };
    var XMLElement = p.XMLElement = function(selector, uri, sysid, line) {
      this.attributes = [];
      this.children = [];
      this.fullName = null;
      this.name = null;
      this.namespace = "";
      this.content = null;
      this.parent = null;
      this.lineNr = "";
      this.systemID = "";
      this.type = "ELEMENT";
      if (selector) if (typeof selector === "string") if (uri === undef && selector.indexOf("<") > -1) this.parse(selector);
      else {
        this.fullName = selector;
        this.namespace = uri;
        this.systemId = sysid;
        this.lineNr = line
      } else this.parse(uri)
    };
    XMLElement.prototype = {
      parse: function(textstring) {
        var xmlDoc;
        try {
          var extension = textstring.substring(textstring.length - 4);
          if (extension === ".xml" || extension === ".svg") textstring = ajax(textstring);
          xmlDoc = (new DOMParser).parseFromString(textstring, "text/xml");
          var elements = xmlDoc.documentElement;
          if (elements) this.parseChildrenRecursive(null, elements);
          else throw "Error loading document";
          return this
        } catch(e) {
          throw e;
        }
      },
      parseChildrenRecursive: function(parent, elementpath) {
        var xmlelement, xmlattribute, tmpattrib, l, m, child;
        if (!parent) {
          this.fullName = elementpath.localName;
          this.name = elementpath.nodeName;
          xmlelement = this
        } else {
          xmlelement = new XMLElement(elementpath.nodeName);
          xmlelement.parent = parent
        }
        if (elementpath.nodeType === 3 && elementpath.textContent !== "") return this.createPCDataElement(elementpath.textContent);
        if (elementpath.nodeType === 4) return this.createCDataElement(elementpath.textContent);
        if (elementpath.attributes) for (l = 0, m = elementpath.attributes.length; l < m; l++) {
          tmpattrib = elementpath.attributes[l];
          xmlattribute = new XMLAttribute(tmpattrib.getname, tmpattrib.nodeName, tmpattrib.namespaceURI, tmpattrib.nodeValue, tmpattrib.nodeType);
          xmlelement.attributes.push(xmlattribute)
        }
        if (elementpath.childNodes) for (l = 0, m = elementpath.childNodes.length; l < m; l++) {
          var node = elementpath.childNodes[l];
          child = xmlelement.parseChildrenRecursive(xmlelement, node);
          if (child !== null) xmlelement.children.push(child)
        }
        return xmlelement
      },
      createElement: function(fullname, namespaceuri, sysid, line) {
        if (sysid === undef) return new XMLElement(fullname, namespaceuri);
        return new XMLElement(fullname, namespaceuri, sysid, line)
      },
      createPCDataElement: function(content, isCDATA) {
        if (content.replace(/^\s+$/g, "") === "") return null;
        var pcdata = new XMLElement;
        pcdata.type = "TEXT";
        pcdata.content = content;
        return pcdata
      },
      createCDataElement: function(content) {
        var cdata = this.createPCDataElement(content);
        if (cdata === null) return null;
        cdata.type = "CDATA";
        var htmlentities = {
          "<": "&lt;",
          ">": "&gt;",
          "'": "&apos;",
          '"': "&quot;"
        },
          entity;
        for (entity in htmlentities) if (!Object.hasOwnProperty(htmlentities, entity)) content = content.replace(new RegExp(entity, "g"), htmlentities[entity]);
        cdata.cdata = content;
        return cdata
      },
      hasAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0]) !== null;
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]) !== null
      },
      equals: function(other) {
        if (! (other instanceof XMLElement)) return false;
        var i, j;
        if (this.fullName !== other.fullName) return false;
        if (this.attributes.length !== other.getAttributeCount()) return false;
        if (this.attributes.length !== other.attributes.length) return false;
        var attr_name, attr_ns, attr_value, attr_type, attr_other;
        for (i = 0, j = this.attributes.length; i < j; i++) {
          attr_name = this.attributes[i].getName();
          attr_ns = this.attributes[i].getNamespace();
          attr_other = other.findAttribute(attr_name, attr_ns);
          if (attr_other === null) return false;
          if (this.attributes[i].getValue() !== attr_other.getValue()) return false;
          if (this.attributes[i].getType() !== attr_other.getType()) return false
        }
        if (this.children.length !== other.getChildCount()) return false;
        if (this.children.length > 0) {
          var child1, child2;
          for (i = 0, j = this.children.length; i < j; i++) {
            child1 = this.getChild(i);
            child2 = other.getChild(i);
            if (!child1.equals(child2)) return false
          }
          return true
        }
        return this.content === other.content
      },
      getContent: function() {
        if (this.type === "TEXT" || this.type === "CDATA") return this.content;
        var children = this.children;
        if (children.length === 1 && (children[0].type === "TEXT" || children[0].type === "CDATA")) return children[0].content;
        return null
      },
      getAttribute: function() {
        var attribute;
        if (arguments.length === 2) {
          attribute = this.findAttribute(arguments[0]);
          if (attribute) return attribute.getValue();
          return arguments[1]
        } else if (arguments.length === 1) {
          attribute = this.findAttribute(arguments[0]);
          if (attribute) return attribute.getValue();
          return null
        } else if (arguments.length === 3) {
          attribute = this.findAttribute(arguments[0], arguments[1]);
          if (attribute) return attribute.getValue();
          return arguments[2]
        }
      },
      getStringAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0]);
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getString: function(attributeName) {
        return this.getStringAttribute(attributeName)
      },
      getFloatAttribute: function() {
        if (arguments.length === 1) return parseFloat(this.getAttribute(arguments[0], 0));
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getFloat: function(attributeName) {
        return this.getFloatAttribute(attributeName)
      },
      getIntAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0], 0);
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getInt: function(attributeName) {
        return this.getIntAttribute(attributeName)
      },
      hasChildren: function() {
        return this.children.length > 0
      },
      addChild: function(child) {
        if (child !== null) {
          child.parent = this;
          this.children.push(child)
        }
      },
      insertChild: function(child, index) {
        if (child) {
          if (child.getLocalName() === null && !this.hasChildren()) {
            var lastChild = this.children[this.children.length - 1];
            if (lastChild.getLocalName() === null) {
              lastChild.setContent(lastChild.getContent() + child.getContent());
              return
            }
          }
          child.parent = this;
          this.children.splice(index, 0, child)
        }
      },
      getChild: function(selector) {
        if (typeof selector === "number") return this.children[selector];
        if (selector.indexOf("/") !== -1) return this.getChildRecursive(selector.split("/"), 0);
        var kid, kidName;
        for (var i = 0, j = this.getChildCount(); i < j; i++) {
          kid = this.getChild(i);
          kidName = kid.getName();
          if (kidName !== null && kidName === selector) return kid
        }
        return null
      },
      getChildren: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] === "number") return this.getChild(arguments[0]);
          if (arguments[0].indexOf("/") !== -1) return this.getChildrenRecursive(arguments[0].split("/"), 0);
          var matches = [];
          var kid, kidName;
          for (var i = 0, j = this.getChildCount(); i < j; i++) {
            kid = this.getChild(i);
            kidName = kid.getName();
            if (kidName !== null && kidName === arguments[0]) matches.push(kid)
          }
          return matches
        }
        return this.children
      },
      getChildCount: function() {
        return this.children.length
      },
      getChildRecursive: function(items, offset) {
        if (offset === items.length) return this;
        var kid, kidName, matchName = items[offset];
        for (var i = 0, j = this.getChildCount(); i < j; i++) {
          kid = this.getChild(i);
          kidName = kid.getName();
          if (kidName !== null && kidName === matchName) return kid.getChildRecursive(items, offset + 1)
        }
        return null
      },
      getChildrenRecursive: function(items, offset) {
        if (offset === items.length - 1) return this.getChildren(items[offset]);
        var matches = this.getChildren(items[offset]);
        var kidMatches = [];
        for (var i = 0; i < matches.length; i++) kidMatches = kidMatches.concat(matches[i].getChildrenRecursive(items, offset + 1));
        return kidMatches
      },
      isLeaf: function() {
        return !this.hasChildren()
      },
      listChildren: function() {
        var arr = [];
        for (var i = 0, j = this.children.length; i < j; i++) arr.push(this.getChild(i).getName());
        return arr
      },
      removeAttribute: function(name, namespace) {
        this.namespace = namespace || "";
        for (var i = 0, j = this.attributes.length; i < j; i++) if (this.attributes[i].getName() === name && this.attributes[i].getNamespace() === this.namespace) {
          this.attributes.splice(i, 1);
          break
        }
      },
      removeChild: function(child) {
        if (child) for (var i = 0, j = this.children.length; i < j; i++) if (this.children[i].equals(child)) {
          this.children.splice(i, 1);
          break
        }
      },
      removeChildAtIndex: function(index) {
        if (this.children.length > index) this.children.splice(index, 1)
      },
      findAttribute: function(name, namespace) {
        this.namespace = namespace || "";
        for (var i = 0, j = this.attributes.length; i < j; i++) if (this.attributes[i].getName() === name && this.attributes[i].getNamespace() === this.namespace) return this.attributes[i];
        return null
      },
      setAttribute: function() {
        var attr;
        if (arguments.length === 3) {
          var index = arguments[0].indexOf(":");
          var name = arguments[0].substring(index + 1);
          attr = this.findAttribute(name, arguments[1]);
          if (attr) attr.setValue(arguments[2]);
          else {
            attr = new XMLAttribute(arguments[0], name, arguments[1], arguments[2], "CDATA");
            this.attributes.push(attr)
          }
        } else {
          attr = this.findAttribute(arguments[0]);
          if (attr) attr.setValue(arguments[1]);
          else {
            attr = new XMLAttribute(arguments[0], arguments[0], null, arguments[1], "CDATA");
            this.attributes.push(attr)
          }
        }
      },
      setString: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setInt: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setFloat: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setContent: function(content) {
        if (this.children.length > 0) Processing.debug("Tried to set content for XMLElement with children");
        this.content = content
      },
      setName: function() {
        if (arguments.length === 1) {
          this.name = arguments[0];
          this.fullName = arguments[0];
          this.namespace = null
        } else {
          var index = arguments[0].indexOf(":");
          if (arguments[1] === null || index < 0) this.name = arguments[0];
          else this.name = arguments[0].substring(index + 1);
          this.fullName = arguments[0];
          this.namespace = arguments[1]
        }
      },
      getName: function() {
        return this.fullName
      },
      getLocalName: function() {
        return this.name
      },
      getAttributeCount: function() {
        return this.attributes.length
      },
      toString: function() {
        if (this.type === "TEXT") return this.content;
        if (this.type === "CDATA") return this.cdata;
        var tagstring = this.fullName;
        var xmlstring = "<" + tagstring;
        var a, c;
        for (a = 0; a < this.attributes.length; a++) {
          var attr = this.attributes[a];
          xmlstring += " " + attr.getName() + "=" + '"' + attr.getValue() + '"'
        }
        if (this.children.length === 0) if (this.content === "") xmlstring += "/>";
        else xmlstring += ">" + this.content + "</" + tagstring + ">";
        else {
          xmlstring += ">";
          for (c = 0; c < this.children.length; c++) xmlstring += this.children[c].toString();
          xmlstring += "</" + tagstring + ">"
        }
        return xmlstring
      }
    };
    XMLElement.parse = function(xmlstring) {
      var element = new XMLElement;
      element.parse(xmlstring);
      return element
    };
    var XML = p.XML = p.XMLElement;
    p.loadXML = function(uri) {
      return new XML(p, uri)
    };
    var printMatrixHelper = function(elements) {
      var big = 0;
      for (var i = 0; i < elements.length; i++) if (i !== 0) big = Math.max(big, Math.abs(elements[i]));
      else big = Math.abs(elements[i]);
      var digits = (big + "").indexOf(".");
      if (digits === 0) digits = 1;
      else if (digits === -1) digits = (big + "").length;
      return digits
    };
    var PMatrix2D = p.PMatrix2D = function() {
      if (arguments.length === 0) this.reset();
      else if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) this.set(arguments[0].array());
      else if (arguments.length === 6) this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    };
    PMatrix2D.prototype = {
      set: function() {
        if (arguments.length === 6) {
          var a = arguments;
          this.set([a[0], a[1], a[2], a[3], a[4], a[5]])
        } else if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) this.elements = arguments[0].array();
        else if (arguments.length === 1 && arguments[0] instanceof Array) this.elements = arguments[0].slice()
      },
      get: function() {
        var outgoing = new PMatrix2D;
        outgoing.set(this.elements);
        return outgoing
      },
      reset: function() {
        this.set([1, 0, 0, 0, 1, 0])
      },
      array: function array() {
        return this.elements.slice()
      },
      translate: function(tx, ty) {
        this.elements[2] = tx * this.elements[0] + ty * this.elements[1] + this.elements[2];
        this.elements[5] = tx * this.elements[3] + ty * this.elements[4] + this.elements[5]
      },
      invTranslate: function(tx, ty) {
        this.translate(-tx, -ty)
      },
      transpose: function() {},
      mult: function(source, target) {
        var x, y;
        if (source instanceof
        PVector) {
          x = source.x;
          y = source.y;
          if (!target) target = new PVector
        } else if (source instanceof Array) {
          x = source[0];
          y = source[1];
          if (!target) target = []
        }
        if (target instanceof Array) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2];
          target[1] = this.elements[3] * x + this.elements[4] * y + this.elements[5]
        } else if (target instanceof PVector) {
          target.x = this.elements[0] * x + this.elements[1] * y + this.elements[2];
          target.y = this.elements[3] * x + this.elements[4] * y + this.elements[5];
          target.z = 0
        }
        return target
      },
      multX: function(x, y) {
        return x * this.elements[0] + y * this.elements[1] + this.elements[2]
      },
      multY: function(x, y) {
        return x * this.elements[3] + y * this.elements[4] + this.elements[5]
      },
      skewX: function(angle) {
        this.apply(1, 0, 1, angle, 0, 0)
      },
      skewY: function(angle) {
        this.apply(1, 0, 1, 0, angle, 0)
      },
      shearX: function(angle) {
        this.apply(1, 0, 1, Math.tan(angle), 0, 0)
      },
      shearY: function(angle) {
        this.apply(1, 0, 1, 0, Math.tan(angle), 0)
      },
      determinant: function() {
        return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
      },
      invert: function() {
        var d = this.determinant();
        if (Math.abs(d) > -2147483648) {
          var old00 = this.elements[0];
          var old01 = this.elements[1];
          var old02 = this.elements[2];
          var old10 = this.elements[3];
          var old11 = this.elements[4];
          var old12 = this.elements[5];
          this.elements[0] = old11 / d;
          this.elements[3] = -old10 / d;
          this.elements[1] = -old01 / d;
          this.elements[4] = old00 / d;
          this.elements[2] = (old01 * old12 - old11 * old02) / d;
          this.elements[5] = (old10 * old02 - old00 * old12) / d;
          return true
        }
        return false
      },
      scale: function(sx, sy) {
        if (sx && !sy) sy = sx;
        if (sx && sy) {
          this.elements[0] *= sx;
          this.elements[1] *= sy;
          this.elements[3] *= sx;
          this.elements[4] *= sy
        }
      },
      invScale: function(sx, sy) {
        if (sx && !sy) sy = sx;
        this.scale(1 / sx, 1 / sy)
      },
      apply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) source = arguments[0].array();
        else if (arguments.length === 6) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, this.elements[2], 0, 0, this.elements[5]];
        var e = 0;
        for (var row = 0; row < 2; row++) for (var col = 0; col < 3; col++, e++) result[e] += this.elements[row * 3 + 0] * source[col + 0] + this.elements[row * 3 + 1] * source[col + 3];
        this.elements = result.slice()
      },
      preApply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) source = arguments[0].array();
        else if (arguments.length === 6) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, source[2], 0, 0, source[5]];
        result[2] = source[2] + this.elements[2] * source[0] + this.elements[5] * source[1];
        result[5] = source[5] + this.elements[2] * source[3] + this.elements[5] * source[4];
        result[0] = this.elements[0] * source[0] + this.elements[3] * source[1];
        result[3] = this.elements[0] * source[3] + this.elements[3] * source[4];
        result[1] = this.elements[1] * source[0] + this.elements[4] * source[1];
        result[4] = this.elements[1] * source[3] + this.elements[4] * source[4];
        this.elements = result.slice()
      },
      rotate: function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        var temp1 = this.elements[0];
        var temp2 = this.elements[1];
        this.elements[0] = c * temp1 + s * temp2;
        this.elements[1] = -s * temp1 + c * temp2;
        temp1 = this.elements[3];
        temp2 = this.elements[4];
        this.elements[3] = c * temp1 + s * temp2;
        this.elements[4] = -s * temp1 + c * temp2
      },
      rotateZ: function(angle) {
        this.rotate(angle)
      },
      invRotateZ: function(angle) {
        this.rotateZ(angle - Math.PI)
      },
      print: function() {
        var digits = printMatrixHelper(this.elements);
        var output = "" + p.nfs(this.elements[0], digits, 4) + " " + p.nfs(this.elements[1], digits, 4) + " " + p.nfs(this.elements[2], digits, 4) + "\n" + p.nfs(this.elements[3], digits, 4) + " " + p.nfs(this.elements[4], digits, 4) + " " + p.nfs(this.elements[5], digits, 4) + "\n\n";
        p.println(output)
      }
    };
    var PMatrix3D = p.PMatrix3D = function() {
      this.reset()
    };
    PMatrix3D.prototype = {
      set: function() {
        if (arguments.length === 16) this.elements = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) this.elements = arguments[0].array();
        else if (arguments.length === 1 && arguments[0] instanceof Array) this.elements = arguments[0].slice()
      },
      get: function() {
        var outgoing = new PMatrix3D;
        outgoing.set(this.elements);
        return outgoing
      },
      reset: function() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      array: function array() {
        return this.elements.slice()
      },
      translate: function(tx, ty, tz) {
        if (tz === undef) tz = 0;
        this.elements[3] += tx * this.elements[0] + ty * this.elements[1] + tz * this.elements[2];
        this.elements[7] += tx * this.elements[4] + ty * this.elements[5] + tz * this.elements[6];
        this.elements[11] += tx * this.elements[8] + ty * this.elements[9] + tz * this.elements[10];
        this.elements[15] += tx * this.elements[12] + ty * this.elements[13] + tz * this.elements[14]
      },
      transpose: function() {
        var temp = this.elements[4];
        this.elements[4] = this.elements[1];
        this.elements[1] = temp;
        temp = this.elements[8];
        this.elements[8] = this.elements[2];
        this.elements[2] = temp;
        temp = this.elements[6];
        this.elements[6] = this.elements[9];
        this.elements[9] = temp;
        temp = this.elements[3];
        this.elements[3] = this.elements[12];
        this.elements[12] = temp;
        temp = this.elements[7];
        this.elements[7] = this.elements[13];
        this.elements[13] = temp;
        temp = this.elements[11];
        this.elements[11] = this.elements[14];
        this.elements[14] = temp
      },
      mult: function(source, target) {
        var x, y, z, w;
        if (source instanceof
        PVector) {
          x = source.x;
          y = source.y;
          z = source.z;
          w = 1;
          if (!target) target = new PVector
        } else if (source instanceof Array) {
          x = source[0];
          y = source[1];
          z = source[2];
          w = source[3] || 1;
          if (!target || target.length !== 3 && target.length !== 4) target = [0, 0, 0]
        }
        if (target instanceof Array) if (target.length === 3) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
          target[1] = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
          target[2] = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11]
        } else if (target.length === 4) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3] * w;
          target[1] = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7] * w;
          target[2] = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11] * w;
          target[3] = this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15] * w
        }
        if (target instanceof PVector) {
          target.x = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
          target.y = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
          target.z = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11]
        }
        return target
      },
      preApply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) source = arguments[0].array();
        else if (arguments.length === 16) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var e = 0;
        for (var row = 0; row < 4; row++) for (var col = 0; col < 4; col++, e++) result[e] += this.elements[col + 0] * source[row * 4 + 0] + this.elements[col + 4] * source[row * 4 + 1] + this.elements[col + 8] * source[row * 4 + 2] + this.elements[col + 12] * source[row * 4 + 3];
        this.elements = result.slice()
      },
      apply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) source = arguments[0].array();
        else if (arguments.length === 16) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var e = 0;
        for (var row = 0; row < 4; row++) for (var col = 0; col < 4; col++, e++) result[e] += this.elements[row * 4 + 0] * source[col + 0] + this.elements[row * 4 + 1] * source[col + 4] + this.elements[row * 4 + 2] * source[col + 8] + this.elements[row * 4 + 3] * source[col + 12];
        this.elements = result.slice()
      },
      rotate: function(angle, v0, v1, v2) {
        if (!v1) this.rotateZ(angle);
        else {
          var c = p.cos(angle);
          var s = p.sin(angle);
          var t = 1 - c;
          this.apply(t * v0 * v0 + c, t * v0 * v1 - s * v2, t * v0 * v2 + s * v1, 0, t * v0 * v1 + s * v2, t * v1 * v1 + c, t * v1 * v2 - s * v0, 0, t * v0 * v2 - s * v1, t * v1 * v2 + s * v0, t * v2 * v2 + c, 0, 0, 0, 0, 1)
        }
      },
      invApply: function() {
        if (inverseCopy === undef) inverseCopy = new PMatrix3D;
        var a = arguments;
        inverseCopy.set(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
        if (!inverseCopy.invert()) return false;
        this.preApply(inverseCopy);
        return true
      },
      rotateX: function(angle) {
        var c = p.cos(angle);
        var s = p.sin(angle);
        this.apply([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1])
      },
      rotateY: function(angle) {
        var c = p.cos(angle);
        var s = p.sin(angle);
        this.apply([c,
          0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1])
      },
      rotateZ: function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        this.apply([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      },
      scale: function(sx, sy, sz) {
        if (sx && !sy && !sz) sy = sz = sx;
        else if (sx && sy && !sz) sz = 1;
        if (sx && sy && sz) {
          this.elements[0] *= sx;
          this.elements[1] *= sy;
          this.elements[2] *= sz;
          this.elements[4] *= sx;
          this.elements[5] *= sy;
          this.elements[6] *= sz;
          this.elements[8] *= sx;
          this.elements[9] *= sy;
          this.elements[10] *= sz;
          this.elements[12] *= sx;
          this.elements[13] *= sy;
          this.elements[14] *= sz
        }
      },
      skewX: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, t, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      skewY: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, 0, 0, 0, t, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      shearX: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, t, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      shearY: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, 0, 0, 0, t, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      multX: function(x, y, z, w) {
        if (!z) return this.elements[0] * x + this.elements[1] * y + this.elements[3];
        if (!w) return this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
        return this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3] * w
      },
      multY: function(x, y, z, w) {
        if (!z) return this.elements[4] * x + this.elements[5] * y + this.elements[7];
        if (!w) return this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
        return this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7] * w
      },
      multZ: function(x, y, z, w) {
        if (!w) return this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11];
        return this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11] * w
      },
      multW: function(x, y, z, w) {
        if (!w) return this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15];
        return this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15] * w
      },
      invert: function() {
        var fA0 = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4];
        var fA1 = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4];
        var fA2 = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4];
        var fA3 = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5];
        var fA4 = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5];
        var fA5 = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6];
        var fB0 = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12];
        var fB1 = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12];
        var fB2 = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12];
        var fB3 = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13];
        var fB4 = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13];
        var fB5 = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14];
        var fDet = fA0 * fB5 - fA1 * fB4 + fA2 * fB3 + fA3 * fB2 - fA4 * fB1 + fA5 * fB0;
        if (Math.abs(fDet) <= 1.0E-9) return false;
        var kInv = [];
        kInv[0] = +this.elements[5] * fB5 - this.elements[6] * fB4 + this.elements[7] * fB3;
        kInv[4] = -this.elements[4] * fB5 + this.elements[6] * fB2 - this.elements[7] * fB1;
        kInv[8] = +this.elements[4] * fB4 - this.elements[5] * fB2 + this.elements[7] * fB0;
        kInv[12] = -this.elements[4] * fB3 + this.elements[5] * fB1 - this.elements[6] * fB0;
        kInv[1] = -this.elements[1] * fB5 + this.elements[2] * fB4 - this.elements[3] * fB3;
        kInv[5] = +this.elements[0] * fB5 - this.elements[2] * fB2 + this.elements[3] * fB1;
        kInv[9] = -this.elements[0] * fB4 + this.elements[1] * fB2 - this.elements[3] * fB0;
        kInv[13] = +this.elements[0] * fB3 - this.elements[1] * fB1 + this.elements[2] * fB0;
        kInv[2] = +this.elements[13] * fA5 - this.elements[14] * fA4 + this.elements[15] * fA3;
        kInv[6] = -this.elements[12] * fA5 + this.elements[14] * fA2 - this.elements[15] * fA1;
        kInv[10] = +this.elements[12] * fA4 - this.elements[13] * fA2 + this.elements[15] * fA0;
        kInv[14] = -this.elements[12] * fA3 + this.elements[13] * fA1 - this.elements[14] * fA0;
        kInv[3] = -this.elements[9] * fA5 + this.elements[10] * fA4 - this.elements[11] * fA3;
        kInv[7] = +this.elements[8] * fA5 - this.elements[10] * fA2 + this.elements[11] * fA1;
        kInv[11] = -this.elements[8] * fA4 + this.elements[9] * fA2 - this.elements[11] * fA0;
        kInv[15] = +this.elements[8] * fA3 - this.elements[9] * fA1 + this.elements[10] * fA0;
        var fInvDet = 1 / fDet;
        kInv[0] *= fInvDet;
        kInv[1] *= fInvDet;
        kInv[2] *= fInvDet;
        kInv[3] *= fInvDet;
        kInv[4] *= fInvDet;
        kInv[5] *= fInvDet;
        kInv[6] *= fInvDet;
        kInv[7] *= fInvDet;
        kInv[8] *= fInvDet;
        kInv[9] *= fInvDet;
        kInv[10] *= fInvDet;
        kInv[11] *= fInvDet;
        kInv[12] *= fInvDet;
        kInv[13] *= fInvDet;
        kInv[14] *= fInvDet;
        kInv[15] *= fInvDet;
        this.elements = kInv.slice();
        return true
      },
      toString: function() {
        var str = "";
        for (var i = 0; i < 15; i++) str += this.elements[i] + ", ";
        str += this.elements[15];
        return str
      },
      print: function() {
        var digits = printMatrixHelper(this.elements);
        var output = "" + p.nfs(this.elements[0], digits, 4) + " " + p.nfs(this.elements[1], digits, 4) + " " + p.nfs(this.elements[2], digits, 4) + " " + p.nfs(this.elements[3], digits, 4) + "\n" + p.nfs(this.elements[4], digits, 4) + " " + p.nfs(this.elements[5], digits, 4) + " " + p.nfs(this.elements[6], digits, 4) + " " + p.nfs(this.elements[7], digits, 4) + "\n" + p.nfs(this.elements[8], digits, 4) + " " + p.nfs(this.elements[9], digits, 4) + " " + p.nfs(this.elements[10], digits, 4) + " " + p.nfs(this.elements[11], digits, 4) + "\n" + p.nfs(this.elements[12], digits, 4) + " " + p.nfs(this.elements[13], digits, 4) + " " + p.nfs(this.elements[14], digits, 4) + " " + p.nfs(this.elements[15], digits, 4) + "\n\n";
        p.println(output)
      },
      invTranslate: function(tx, ty, tz) {
        this.preApply(1, 0, 0, -tx, 0, 1, 0, -ty, 0, 0, 1, -tz, 0, 0, 0, 1)
      },
      invRotateX: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1])
      },
      invRotateY: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1])
      },
      invRotateZ: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      },
      invScale: function(x, y, z) {
        this.preApply([1 / x, 0, 0, 0, 0, 1 / y, 0, 0, 0, 0, 1 / z, 0, 0, 0, 0, 1])
      }
    };
    var PMatrixStack = p.PMatrixStack = function() {
      this.matrixStack = []
    };
    PMatrixStack.prototype.load = function() {
      var tmpMatrix = drawing.$newPMatrix();
      if (arguments.length === 1) tmpMatrix.set(arguments[0]);
      else tmpMatrix.set(arguments);
      this.matrixStack.push(tmpMatrix)
    };
    Drawing2D.prototype.$newPMatrix = function() {
      return new PMatrix2D
    };
    Drawing3D.prototype.$newPMatrix = function() {
      return new PMatrix3D
    };
    PMatrixStack.prototype.push = function() {
      this.matrixStack.push(this.peek())
    };
    PMatrixStack.prototype.pop = function() {
      return this.matrixStack.pop()
    };
    PMatrixStack.prototype.peek = function() {
      var tmpMatrix = drawing.$newPMatrix();
      tmpMatrix.set(this.matrixStack[this.matrixStack.length - 1]);
      return tmpMatrix
    };
    PMatrixStack.prototype.mult = function(matrix) {
      this.matrixStack[this.matrixStack.length - 1].apply(matrix)
    };
    p.split = function(str, delim) {
      return str.split(delim)
    };
    p.splitTokens = function(str, tokens) {
      if (tokens === undef) return str.split(/\s+/g);
      var chars = tokens.split(/()/g),
        buffer = "",
        len = str.length,
        i, c, tokenized = [];
      for (i = 0; i < len; i++) {
        c = str[i];
        if (chars.indexOf(c) > -1) {
          if (buffer !== "") tokenized.push(buffer);
          buffer = ""
        } else buffer += c
      }
      if (buffer !== "") tokenized.push(buffer);
      return tokenized
    };
    p.append = function(array, element) {
      array[array.length] = element;
      return array
    };
    p.concat = function(array1, array2) {
      return array1.concat(array2)
    };
    p.sort = function(array, numElem) {
      var ret = [];
      if (array.length > 0) {
        var elemsToCopy = numElem > 0 ? numElem : array.length;
        for (var i = 0; i < elemsToCopy; i++) ret.push(array[i]);
        if (typeof array[0] === "string") ret.sort();
        else ret.sort(function(a, b) {
          return a - b
        });
        if (numElem > 0) for (var j = ret.length; j < array.length; j++) ret.push(array[j])
      }
      return ret
    };
    p.splice = function(array, value, index) {
      if (value.length === 0) return array;
      if (value instanceof Array) for (var i = 0, j = index; i < value.length; j++, i++) array.splice(j, 0, value[i]);
      else array.splice(index, 0, value);
      return array
    };
    p.subset = function(array, offset, length) {
      var end = length !== undef ? offset + length : array.length;
      return array.slice(offset, end)
    };
    p.join = function(array, seperator) {
      return array.join(seperator)
    };
    p.shorten = function(ary) {
      var newary = [];
      var len = ary.length;
      for (var i = 0; i < len; i++) newary[i] = ary[i];
      newary.pop();
      return newary
    };
    p.expand = function(ary, targetSize) {
      var temp = ary.slice(0),
        newSize = targetSize || ary.length * 2;
      temp.length = newSize;
      return temp
    };
    p.arrayCopy = function() {
      var src, srcPos = 0,
        dest, destPos = 0,
        length;
      if (arguments.length === 2) {
        src = arguments[0];
        dest = arguments[1];
        length = src.length
      } else if (arguments.length === 3) {
        src = arguments[0];
        dest = arguments[1];
        length = arguments[2]
      } else if (arguments.length === 5) {
        src = arguments[0];
        srcPos = arguments[1];
        dest = arguments[2];
        destPos = arguments[3];
        length = arguments[4]
      }
      for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++) if (dest[j] !== undef) dest[j] = src[i];
      else throw "array index out of bounds exception";
    };
    p.reverse = function(array) {
      return array.reverse()
    };
    p.mix = function(a, b, f) {
      return a + ((b - a) * f >> 8)
    };
    p.peg = function(n) {
      return n < 0 ? 0 : n > 255 ? 255 : n
    };
    p.modes = function() {
      var ALPHA_MASK = 4278190080,
        RED_MASK = 16711680,
        GREEN_MASK = 65280,
        BLUE_MASK = 255,
        min = Math.min,
        max = Math.max;

      function applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb) {
        var a = min(((c1 & 4278190080) >>> 24) + f, 255) << 24;
        var r = ar + ((cr - ar) * f >> 8);
        r = (r < 0 ? 0 : r > 255 ? 255 : r) << 16;
        var g = ag + ((cg - ag) * f >> 8);
        g = (g < 0 ? 0 : g > 255 ? 255 : g) << 8;
        var b = ab + ((cb - ab) * f >> 8);
        b = b < 0 ? 0 : b > 255 ? 255 : b;
        return a | r | g | b
      }
      return {
        replace: function(c1, c2) {
          return c2
        },
        blend: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = c1 & RED_MASK,
            ag = c1 & GREEN_MASK,
            ab = c1 & BLUE_MASK,
            br = c2 & RED_MASK,
            bg = c2 & GREEN_MASK,
            bb = c2 & BLUE_MASK;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | ar + ((br - ar) * f >> 8) & RED_MASK | ag + ((bg - ag) * f >> 8) & GREEN_MASK | ab + ((bb - ab) * f >> 8) & BLUE_MASK
        },
        add: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | min((c1 & RED_MASK) + ((c2 & RED_MASK) >> 8) * f, RED_MASK) & RED_MASK | min((c1 & GREEN_MASK) + ((c2 & GREEN_MASK) >> 8) * f, GREEN_MASK) & GREEN_MASK | min((c1 & BLUE_MASK) + ((c2 & BLUE_MASK) * f >> 8), BLUE_MASK)
        },
        subtract: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | max((c1 & RED_MASK) - ((c2 & RED_MASK) >> 8) * f, GREEN_MASK) & RED_MASK | max((c1 & GREEN_MASK) - ((c2 & GREEN_MASK) >> 8) * f, BLUE_MASK) & GREEN_MASK | max((c1 & BLUE_MASK) - ((c2 & BLUE_MASK) * f >> 8), 0)
        },
        lightest: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | max(c1 & RED_MASK, ((c2 & RED_MASK) >> 8) * f) & RED_MASK | max(c1 & GREEN_MASK, ((c2 & GREEN_MASK) >> 8) * f) & GREEN_MASK | max(c1 & BLUE_MASK, (c2 & BLUE_MASK) * f >> 8)
        },
        darkest: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = c1 & RED_MASK,
            ag = c1 & GREEN_MASK,
            ab = c1 & BLUE_MASK,
            br = min(c1 & RED_MASK, ((c2 & RED_MASK) >> 8) * f),
            bg = min(c1 & GREEN_MASK, ((c2 & GREEN_MASK) >> 8) * f),
            bb = min(c1 & BLUE_MASK, (c2 & BLUE_MASK) * f >> 8);
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | ar + ((br - ar) * f >> 8) & RED_MASK | ag + ((bg - ag) * f >> 8) & GREEN_MASK | ab + ((bb - ab) * f >> 8) & BLUE_MASK
        },
        difference: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar > br ? ar - br : br - ar,
          cg = ag > bg ? ag - bg : bg - ag,
          cb = ab > bb ? ab - bb : bb - ab;
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        exclusion: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar + br - (ar * br >> 7),
            cg = ag + bg - (ag * bg >> 7),
            cb = ab + bb - (ab * bb >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        multiply: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar * br >> 8,
            cg = ag * bg >> 8,
            cb = ab * bb >> 8;
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        screen: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = 255 - ((255 - ar) * (255 - br) >> 8),
            cg = 255 - ((255 - ag) * (255 - bg) >> 8),
            cb = 255 - ((255 - ab) * (255 - bb) >> 8);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        hard_light: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = br < 128 ? ar * br >> 7 : 255 - ((255 - ar) * (255 - br) >> 7),
          cg = bg < 128 ? ag * bg >> 7 : 255 - ((255 - ag) * (255 - bg) >> 7),
          cb = bb < 128 ? ab * bb >> 7 : 255 - ((255 - ab) * (255 - bb) >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        soft_light: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = (ar * br >> 7) + (ar * ar >> 8) - (ar * ar * br >> 15),
            cg = (ag * bg >> 7) + (ag * ag >> 8) - (ag * ag * bg >> 15),
            cb = (ab * bb >> 7) + (ab * ab >> 8) - (ab * ab * bb >> 15);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        overlay: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar < 128 ? ar * br >> 7 : 255 - ((255 - ar) * (255 - br) >> 7),
          cg = ag < 128 ? ag * bg >> 7 : 255 - ((255 - ag) * (255 - bg) >> 7),
          cb = ab < 128 ? ab * bb >> 7 : 255 - ((255 - ab) * (255 - bb) >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        dodge: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK;
          var cr = 255;
          if (br !== 255) {
            cr = (ar << 8) / (255 - br);
            cr = cr < 0 ? 0 : cr > 255 ? 255 : cr
          }
          var cg = 255;
          if (bg !== 255) {
            cg = (ag << 8) / (255 - bg);
            cg = cg < 0 ? 0 : cg > 255 ? 255 : cg
          }
          var cb = 255;
          if (bb !== 255) {
            cb = (ab << 8) / (255 - bb);
            cb = cb < 0 ? 0 : cb > 255 ? 255 : cb
          }
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        burn: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK;
          var cr = 0;
          if (br !== 0) {
            cr = (255 - ar << 8) / br;
            cr = 255 - (cr < 0 ? 0 : cr > 255 ? 255 : cr)
          }
          var cg = 0;
          if (bg !== 0) {
            cg = (255 - ag << 8) / bg;
            cg = 255 - (cg < 0 ? 0 : cg > 255 ? 255 : cg)
          }
          var cb = 0;
          if (bb !== 0) {
            cb = (255 - ab << 8) / bb;
            cb = 255 - (cb < 0 ? 0 : cb > 255 ? 255 : cb)
          }
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        }
      }
    }();

    function color$4(aValue1, aValue2, aValue3, aValue4) {
      var r, g, b, a;
      if (curColorMode === 3) {
        var rgb = p.color.toRGB(aValue1, aValue2, aValue3);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2]
      } else {
        r = Math.round(255 * (aValue1 / colorModeX));
        g = Math.round(255 * (aValue2 / colorModeY));
        b = Math.round(255 * (aValue3 / colorModeZ))
      }
      a = Math.round(255 * (aValue4 / colorModeA));
      r = r < 0 ? 0 : r;
      g = g < 0 ? 0 : g;
      b = b < 0 ? 0 : b;
      a = a < 0 ? 0 : a;
      r = r > 255 ? 255 : r;
      g = g > 255 ? 255 : g;
      b = b > 255 ? 255 : b;
      a = a > 255 ? 255 : a;
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    }
    function color$2(aValue1, aValue2) {
      var a;
      if (aValue1 & 4278190080) {
        a = Math.round(255 * (aValue2 / colorModeA));
        a = a > 255 ? 255 : a;
        a = a < 0 ? 0 : a;
        return aValue1 - (aValue1 & 4278190080) + (a << 24 & 4278190080)
      }
      if (curColorMode === 1) return color$4(aValue1, aValue1, aValue1, aValue2);
      if (curColorMode === 3) return color$4(0, 0, aValue1 / colorModeX * colorModeZ, aValue2)
    }
    function color$1(aValue1) {
      if (aValue1 <= colorModeX && aValue1 >= 0) {
        if (curColorMode === 1) return color$4(aValue1, aValue1, aValue1, colorModeA);
        if (curColorMode === 3) return color$4(0, 0, aValue1 / colorModeX * colorModeZ, colorModeA)
      }
      if (aValue1) {
        if (aValue1 > 2147483647) aValue1 -= 4294967296;
        return aValue1
      }
    }
    p.color = function(aValue1, aValue2, aValue3, aValue4) {
      if (aValue1 !== undef && aValue2 !== undef && aValue3 !== undef && aValue4 !== undef) return color$4(aValue1, aValue2, aValue3, aValue4);
      if (aValue1 !== undef && aValue2 !== undef && aValue3 !== undef) return color$4(aValue1, aValue2, aValue3, colorModeA);
      if (aValue1 !== undef && aValue2 !== undef) return color$2(aValue1, aValue2);
      if (typeof aValue1 === "number") return color$1(aValue1);
      return color$4(colorModeX, colorModeY, colorModeZ, colorModeA)
    };
    p.color.toString = function(colorInt) {
      return "rgba(" + ((colorInt >> 16) & 255) + "," + ((colorInt >> 8) & 255) + "," + (colorInt & 255) + "," + ((colorInt >> 24) & 255) / 255 + ")"
    };
    p.color.toInt = function(r, g, b, a) {
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    };
    p.color.toArray = function(colorInt) {
      return [(colorInt >> 16) & 255, (colorInt >> 8) & 255, colorInt & 255, (colorInt >> 24) & 255]
    };
    p.color.toGLArray = function(colorInt) {
      return [((colorInt & 16711680) >>> 16) / 255, ((colorInt >> 8) & 255) / 255, (colorInt & 255) / 255, ((colorInt >> 24) & 255) / 255]
    };
    p.color.toRGB = function(h, s, b) {
      h = h > colorModeX ? colorModeX : h;
      s = s > colorModeY ? colorModeY : s;
      b = b > colorModeZ ? colorModeZ : b;
      h = h / colorModeX * 360;
      s = s / colorModeY * 100;
      b = b / colorModeZ * 100;
      var br = Math.round(b / 100 * 255);
      if (s === 0) return [br, br, br];
      var hue = h % 360;
      var f = hue % 60;
      var p = Math.round(b * (100 - s) / 1E4 * 255);
      var q = Math.round(b * (6E3 - s * f) / 6E5 * 255);
      var t = Math.round(b * (6E3 - s * (60 - f)) / 6E5 * 255);
      switch (Math.floor(hue / 60)) {
      case 0:
        return [br, t, p];
      case 1:
        return [q, br, p];
      case 2:
        return [p, br, t];
      case 3:
        return [p, q, br];
      case 4:
        return [t, p, br];
      case 5:
        return [br, p, q]
      }
    };

    function colorToHSB(colorInt) {
      var red, green, blue;
      red = ((colorInt >> 16) & 255) / 255;
      green = ((colorInt >> 8) & 255) / 255;
      blue = (colorInt & 255) / 255;
      var max = p.max(p.max(red, green), blue),
        min = p.min(p.min(red, green), blue),
        hue, saturation;
      if (min === max) return [0, 0, max * colorModeZ];
      saturation = (max - min) / max;
      if (red === max) hue = (green - blue) / (max - min);
      else if (green === max) hue = 2 + (blue - red) / (max - min);
      else hue = 4 + (red - green) / (max - min);
      hue /= 6;
      if (hue < 0) hue += 1;
      else if (hue > 1) hue -= 1;
      return [hue * colorModeX, saturation * colorModeY, max * colorModeZ]
    }
    p.brightness = function(colInt) {
      return colorToHSB(colInt)[2]
    };
    p.saturation = function(colInt) {
      return colorToHSB(colInt)[1]
    };
    p.hue = function(colInt) {
      return colorToHSB(colInt)[0]
    };
    p.red = function(aColor) {
      return ((aColor >> 16) & 255) / 255 * colorModeX
    };
    p.green = function(aColor) {
      return ((aColor & 65280) >>> 8) / 255 * colorModeY
    };
    p.blue = function(aColor) {
      return (aColor & 255) / 255 * colorModeZ
    };
    p.alpha = function(aColor) {
      return ((aColor >> 24) & 255) / 255 * colorModeA
    };
    p.lerpColor = function(c1, c2, amt) {
      var r, g, b, a, r1, g1, b1, a1, r2, g2, b2, a2;
      var hsb1, hsb2, rgb, h, s;
      var colorBits1 = p.color(c1);
      var colorBits2 = p.color(c2);
      if (curColorMode === 3) {
        hsb1 = colorToHSB(colorBits1);
        a1 = ((colorBits1 >> 24) & 255) / colorModeA;
        hsb2 = colorToHSB(colorBits2);
        a2 = ((colorBits2 & 4278190080) >>> 24) / colorModeA;
        h = p.lerp(hsb1[0], hsb2[0], amt);
        s = p.lerp(hsb1[1], hsb2[1], amt);
        b = p.lerp(hsb1[2], hsb2[2], amt);
        rgb = p.color.toRGB(h, s, b);
        a = p.lerp(a1, a2, amt) * colorModeA;
        return a << 24 & 4278190080 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255
      }
      r1 = (colorBits1 >> 16) & 255;
      g1 = (colorBits1 >> 8) & 255;
      b1 = colorBits1 & 255;
      a1 = ((colorBits1 >> 24) & 255) / colorModeA;
      r2 = (colorBits2 & 16711680) >>> 16;
      g2 = (colorBits2 >> 8) & 255;
      b2 = colorBits2 & 255;
      a2 = ((colorBits2 >> 24) & 255) / colorModeA;
      r = p.lerp(r1, r2, amt) | 0;
      g = p.lerp(g1, g2, amt) | 0;
      b = p.lerp(b1, b2, amt) | 0;
      a = p.lerp(a1, a2, amt) * colorModeA;
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    };
    p.colorMode = function() {
      curColorMode = arguments[0];
      if (arguments.length > 1) {
        colorModeX = arguments[1];
        colorModeY = arguments[2] || arguments[1];
        colorModeZ = arguments[3] || arguments[1];
        colorModeA = arguments[4] || arguments[1]
      }
    };
    p.blendColor = function(c1, c2, mode) {
      if (mode === 0) return p.modes.replace(c1, c2);
      else if (mode === 1) return p.modes.blend(c1, c2);
      else if (mode === 2) return p.modes.add(c1, c2);
      else if (mode === 4) return p.modes.subtract(c1, c2);
      else if (mode === 8) return p.modes.lightest(c1, c2);
      else if (mode === 16) return p.modes.darkest(c1, c2);
      else if (mode === 32) return p.modes.difference(c1, c2);
      else if (mode === 64) return p.modes.exclusion(c1, c2);
      else if (mode === 128) return p.modes.multiply(c1, c2);
      else if (mode === 256) return p.modes.screen(c1, c2);
      else if (mode === 1024) return p.modes.hard_light(c1, c2);
      else if (mode === 2048) return p.modes.soft_light(c1, c2);
      else if (mode === 512) return p.modes.overlay(c1, c2);
      else if (mode === 4096) return p.modes.dodge(c1, c2);
      else if (mode === 8192) return p.modes.burn(c1, c2)
    };

    function saveContext() {
      curContext.save()
    }
    function restoreContext() {
      curContext.restore();
      isStrokeDirty = true;
      isFillDirty = true
    }
    p.printMatrix = function() {
      modelView.print()
    };
    Drawing2D.prototype.translate = function(x, y) {
      modelView.translate(x, y);
      modelViewInv.invTranslate(x, y);
      curContext.translate(x, y)
    };
    Drawing3D.prototype.translate = function(x, y, z) {
      modelView.translate(x, y, z);
      modelViewInv.invTranslate(x, y, z)
    };
    Drawing2D.prototype.scale = function(x, y) {
      modelView.scale(x, y);
      modelViewInv.invScale(x, y);
      curContext.scale(x, y || x)
    };
    Drawing3D.prototype.scale = function(x, y, z) {
      modelView.scale(x, y, z);
      modelViewInv.invScale(x, y, z)
    };
    Drawing2D.prototype.transform = function(pmatrix) {
      var e = pmatrix.array();
      curContext.transform(e[0], e[3], e[1], e[4], e[2], e[5])
    };
    Drawing3D.prototype.transformm = function(pmatrix3d) {
      throw "p.transform is currently not supported in 3D mode";
    };
    Drawing2D.prototype.pushMatrix = function() {
      userMatrixStack.load(modelView);
      userReverseMatrixStack.load(modelViewInv);
      saveContext()
    };
    Drawing3D.prototype.pushMatrix = function() {
      userMatrixStack.load(modelView);
      userReverseMatrixStack.load(modelViewInv)
    };
    Drawing2D.prototype.popMatrix = function() {
      modelView.set(userMatrixStack.pop());
      modelViewInv.set(userReverseMatrixStack.pop());
      restoreContext()
    };
    Drawing3D.prototype.popMatrix = function() {
      modelView.set(userMatrixStack.pop());
      modelViewInv.set(userReverseMatrixStack.pop())
    };
    Drawing2D.prototype.resetMatrix = function() {
      modelView.reset();
      modelViewInv.reset();
      curContext.setTransform(1, 0, 0, 1, 0, 0)
    };
    Drawing3D.prototype.resetMatrix = function() {
      modelView.reset();
      modelViewInv.reset()
    };
    DrawingShared.prototype.applyMatrix = function() {
      var a = arguments;
      modelView.apply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
      modelViewInv.invApply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
    };
    Drawing2D.prototype.applyMatrix = function() {
      var a = arguments;
      for (var cnt = a.length; cnt < 16; cnt++) a[cnt] = 0;
      a[10] = a[15] = 1;
      DrawingShared.prototype.applyMatrix.apply(this, a)
    };
    p.rotateX = function(angleInRadians) {
      modelView.rotateX(angleInRadians);
      modelViewInv.invRotateX(angleInRadians)
    };
    Drawing2D.prototype.rotateZ = function() {
      throw "rotateZ() is not supported in 2D mode. Use rotate(float) instead.";
    };
    Drawing3D.prototype.rotateZ = function(angleInRadians) {
      modelView.rotateZ(angleInRadians);
      modelViewInv.invRotateZ(angleInRadians)
    };
    p.rotateY = function(angleInRadians) {
      modelView.rotateY(angleInRadians);
      modelViewInv.invRotateY(angleInRadians)
    };
    Drawing2D.prototype.rotate = function(angleInRadians) {
      modelView.rotateZ(angleInRadians);
      modelViewInv.invRotateZ(angleInRadians);
      curContext.rotate(angleInRadians)
    };
    Drawing3D.prototype.rotate = function(angleInRadians) {
      p.rotateZ(angleInRadians)
    };
    Drawing2D.prototype.shearX = function(angleInRadians) {
      modelView.shearX(angleInRadians);
      curContext.transform(1, 0, angleInRadians, 1, 0, 0)
    };
    Drawing3D.prototype.shearX = function(angleInRadians) {
      modelView.shearX(angleInRadians)
    };
    Drawing2D.prototype.shearY = function(angleInRadians) {
      modelView.shearY(angleInRadians);
      curContext.transform(1, angleInRadians, 0, 1, 0, 0)
    };
    Drawing3D.prototype.shearY = function(angleInRadians) {
      modelView.shearY(angleInRadians)
    };
    p.pushStyle = function() {
      saveContext();
      p.pushMatrix();
      var newState = {
        "doFill": doFill,
        "currentFillColor": currentFillColor,
        "doStroke": doStroke,
        "currentStrokeColor": currentStrokeColor,
        "curTint": curTint,
        "curRectMode": curRectMode,
        "curColorMode": curColorMode,
        "colorModeX": colorModeX,
        "colorModeZ": colorModeZ,
        "colorModeY": colorModeY,
        "colorModeA": colorModeA,
        "curTextFont": curTextFont,
        "horizontalTextAlignment": horizontalTextAlignment,
        "verticalTextAlignment": verticalTextAlignment,
        "textMode": textMode,
        "curFontName": curFontName,
        "curTextSize": curTextSize,
        "curTextAscent": curTextAscent,
        "curTextDescent": curTextDescent,
        "curTextLeading": curTextLeading
      };
      styleArray.push(newState)
    };
    p.popStyle = function() {
      var oldState = styleArray.pop();
      if (oldState) {
        restoreContext();
        p.popMatrix();
        doFill = oldState.doFill;
        currentFillColor = oldState.currentFillColor;
        doStroke = oldState.doStroke;
        currentStrokeColor = oldState.currentStrokeColor;
        curTint = oldState.curTint;
        curRectMode = oldState.curRectMode;
        curColorMode = oldState.curColorMode;
        colorModeX = oldState.colorModeX;
        colorModeZ = oldState.colorModeZ;
        colorModeY = oldState.colorModeY;
        colorModeA = oldState.colorModeA;
        curTextFont = oldState.curTextFont;
        curFontName = oldState.curFontName;
        curTextSize = oldState.curTextSize;
        horizontalTextAlignment = oldState.horizontalTextAlignment;
        verticalTextAlignment = oldState.verticalTextAlignment;
        textMode = oldState.textMode;
        curTextAscent = oldState.curTextAscent;
        curTextDescent = oldState.curTextDescent;
        curTextLeading = oldState.curTextLeading
      } else throw "Too many popStyle() without enough pushStyle()";
    };
    p.year = function() {
      return (new Date).getFullYear()
    };
    p.month = function() {
      return (new Date).getMonth() + 1
    };
    p.day = function() {
      return (new Date).getDate()
    };
    p.hour = function() {
      return (new Date).getHours()
    };
    p.minute = function() {
      return (new Date).getMinutes()
    };
    p.second = function() {
      return (new Date).getSeconds()
    };
    p.millis = function() {
      return Date.now() - start
    };

    function redrawHelper() {
      var sec = (Date.now() - timeSinceLastFPS) / 1E3;
      framesSinceLastFPS++;
      var fps = framesSinceLastFPS / sec;
      if (sec > 0.5) {
        timeSinceLastFPS = Date.now();
        framesSinceLastFPS = 0;
        p.__frameRate = fps
      }
      p.frameCount++
    }
    Drawing2D.prototype.redraw = function() {
      redrawHelper();
      curContext.lineWidth = lineWidth;
      var pmouseXLastEvent = p.pmouseX,
        pmouseYLastEvent = p.pmouseY;
      p.pmouseX = pmouseXLastFrame;
      p.pmouseY = pmouseYLastFrame;
      saveContext();
      p.draw();
      restoreContext();
      pmouseXLastFrame = p.mouseX;
      pmouseYLastFrame = p.mouseY;
      p.pmouseX = pmouseXLastEvent;
      p.pmouseY = pmouseYLastEvent
    };
    Drawing3D.prototype.redraw = function() {
      redrawHelper();
      var pmouseXLastEvent = p.pmouseX,
        pmouseYLastEvent = p.pmouseY;
      p.pmouseX = pmouseXLastFrame;
      p.pmouseY = pmouseYLastFrame;
      curContext.clear(curContext.DEPTH_BUFFER_BIT);
      curContextCache = {
        attributes: {},
        locations: {}
      };
      p.noLights();
      p.lightFalloff(1, 0, 0);
      p.shininess(1);
      p.ambient(255, 255, 255);
      p.specular(0, 0, 0);
      p.emissive(0, 0, 0);
      p.camera();
      p.draw();
      pmouseXLastFrame = p.mouseX;
      pmouseYLastFrame = p.mouseY;
      p.pmouseX = pmouseXLastEvent;
      p.pmouseY = pmouseYLastEvent
    };
    p.noLoop = function() {
      doLoop = false;
      loopStarted = false;
      clearInterval(looping);
      curSketch.onPause()
    };
    p.loop = function() {
      if (loopStarted) return;
      timeSinceLastFPS = Date.now();
      framesSinceLastFPS = 0;
      looping = window.setInterval(function() {
        try {
          curSketch.onFrameStart();
          p.redraw();
          curSketch.onFrameEnd()
        } catch(e_loop) {
          window.clearInterval(looping);
          throw e_loop;
        }
      },
      curMsPerFrame);
      doLoop = true;
      loopStarted = true;
      curSketch.onLoop()
    };
    p.frameRate = function(aRate) {
      curFrameRate = aRate;
      curMsPerFrame = 1E3 / curFrameRate;
      if (doLoop) {
        p.noLoop();
        p.loop()
      }
    };
    var eventHandlers = [];

    function attachEventHandler(elem, type, fn) {
      if (elem.addEventListener) elem.addEventListener(type, fn, false);
      else elem.attachEvent("on" + type, fn);
      eventHandlers.push({
        elem: elem,
        type: type,
        fn: fn
      })
    }
    function detachEventHandler(eventHandler) {
      var elem = eventHandler.elem,
        type = eventHandler.type,
        fn = eventHandler.fn;
      if (elem.removeEventListener) elem.removeEventListener(type, fn, false);
      else if (elem.detachEvent) elem.detachEvent("on" + type, fn)
    }
    p.exit = function() {
      window.clearInterval(looping);
      removeInstance(p.externals.canvas.id);
      delete curElement.onmousedown;
      for (var lib in Processing.lib) if (Processing.lib.hasOwnProperty(lib)) if (Processing.lib[lib].hasOwnProperty("detach")) Processing.lib[lib].detach(p);
      var i = eventHandlers.length;
      while (i--) detachEventHandler(eventHandlers[i]);
      curSketch.onExit()
    };
    p.cursor = function() {
      if (arguments.length > 1 || arguments.length === 1 && arguments[0] instanceof p.PImage) {
        var image = arguments[0],
          x, y;
        if (arguments.length >= 3) {
          x = arguments[1];
          y = arguments[2];
          if (x < 0 || y < 0 || y >= image.height || x >= image.width) throw "x and y must be non-negative and less than the dimensions of the image";
        } else {
          x = image.width >>> 1;
          y = image.height >>> 1
        }
        var imageDataURL = image.toDataURL();
        var style = 'url("' + imageDataURL + '") ' + x + " " + y + ", default";
        curCursor = curElement.style.cursor = style
      } else if (arguments.length === 1) {
        var mode = arguments[0];
        curCursor = curElement.style.cursor = mode
      } else curCursor = curElement.style.cursor = oldCursor
    };
    p.noCursor = function() {
      curCursor = curElement.style.cursor = PConstants.NOCURSOR
    };
    p.link = function(href, target) {
      if (target !== undef) window.open(href, target);
      else window.location = href
    };
    p.beginDraw = nop;
    p.endDraw = nop;
    Drawing2D.prototype.toImageData = function(x, y, w, h) {
      x = x !== undef ? x : 0;
      y = y !== undef ? y : 0;
      w = w !== undef ? w : p.width;
      h = h !== undef ? h : p.height;
      return curContext.getImageData(x, y, w, h)
    };
    Drawing3D.prototype.toImageData = function(x, y, w, h) {
      x = x !== undef ? x : 0;
      y = y !== undef ? y : 0;
      w = w !== undef ? w : p.width;
      h = h !== undef ? h : p.height;
      var c = document.createElement("canvas"),
        ctx = c.getContext("2d"),
        obj = ctx.createImageData(w, h),
        uBuff = new Uint8Array(w * h * 4);
      curContext.readPixels(x, y, w, h, curContext.RGBA, curContext.UNSIGNED_BYTE, uBuff);
      for (var i = 0, ul = uBuff.length, obj_data = obj.data; i < ul; i++) obj_data[i] = uBuff[(h - 1 - Math.floor(i / 4 / w)) * w * 4 + i % (w * 4)];
      return obj
    };
    p.status = function(text) {
      window.status = text
    };
    p.binary = function(num, numBits) {
      var bit;
      if (numBits > 0) bit = numBits;
      else if (num instanceof Char) {
        bit = 16;
        num |= 0
      } else {
        bit = 32;
        while (bit > 1 && !(num >>> bit - 1 & 1)) bit--
      }
      var result = "";
      while (bit > 0) result += num >>> --bit & 1 ? "1" : "0";
      return result
    };
    p.unbinary = function(binaryString) {
      var i = binaryString.length - 1,
        mask = 1,
        result = 0;
      while (i >= 0) {
        var ch = binaryString[i--];
        if (ch !== "0" && ch !== "1") throw "the value passed into unbinary was not an 8 bit binary number";
        if (ch === "1") result += mask;
        mask <<= 1
      }
      return result
    };

    function nfCoreScalar(value, plus, minus, leftDigits, rightDigits, group) {
      var sign = value < 0 ? minus : plus;
      var autoDetectDecimals = rightDigits === 0;
      var rightDigitsOfDefault = rightDigits === undef || rightDigits < 0 ? 0 : rightDigits;
      var absValue = Math.abs(value);
      if (autoDetectDecimals) {
        rightDigitsOfDefault = 1;
        absValue *= 10;
        while (Math.abs(Math.round(absValue) - absValue) > 1.0E-6 && rightDigitsOfDefault < 7) {
          ++rightDigitsOfDefault;
          absValue *= 10
        }
      } else if (rightDigitsOfDefault !== 0) absValue *= Math.pow(10, rightDigitsOfDefault);
      var number, doubled = absValue * 2;
      if (Math.floor(absValue) === absValue) number = absValue;
      else if (Math.floor(doubled) === doubled) {
        var floored = Math.floor(absValue);
        number = floored + floored % 2
      } else number = Math.round(absValue);
      var buffer = "";
      var totalDigits = leftDigits + rightDigitsOfDefault;
      while (totalDigits > 0 || number > 0) {
        totalDigits--;
        buffer = "" + number % 10 + buffer;
        number = Math.floor(number / 10)
      }
      if (group !== undef) {
        var i = buffer.length - 3 - rightDigitsOfDefault;
        while (i > 0) {
          buffer = buffer.substring(0, i) + group + buffer.substring(i);
          i -= 3
        }
      }
      if (rightDigitsOfDefault > 0) return sign + buffer.substring(0, buffer.length - rightDigitsOfDefault) + "." + buffer.substring(buffer.length - rightDigitsOfDefault, buffer.length);
      return sign + buffer
    }
    function nfCore(value, plus, minus, leftDigits, rightDigits, group) {
      if (value instanceof Array) {
        var arr = [];
        for (var i = 0, len = value.length; i < len; i++) arr.push(nfCoreScalar(value[i], plus, minus, leftDigits, rightDigits, group));
        return arr
      }
      return nfCoreScalar(value, plus, minus, leftDigits, rightDigits, group)
    }
    p.nf = function(value, leftDigits, rightDigits) {
      return nfCore(value, "", "-", leftDigits, rightDigits)
    };
    p.nfs = function(value, leftDigits, rightDigits) {
      return nfCore(value, " ", "-", leftDigits, rightDigits)
    };
    p.nfp = function(value, leftDigits, rightDigits) {
      return nfCore(value, "+", "-", leftDigits, rightDigits)
    };
    p.nfc = function(value, leftDigits, rightDigits) {
      return nfCore(value, "", "-", leftDigits, rightDigits, ",")
    };
    var decimalToHex = function(d, padding) {
      padding = padding === undef || padding === null ? padding = 8 : padding;
      if (d < 0) d = 4294967295 + d + 1;
      var hex = Number(d).toString(16).toUpperCase();
      while (hex.length < padding) hex = "0" + hex;
      if (hex.length >= padding) hex = hex.substring(hex.length - padding, hex.length);
      return hex
    };
    p.hex = function(value, len) {
      if (arguments.length === 1) if (value instanceof Char) len = 4;
      else len = 8;
      return decimalToHex(value, len)
    };

    function unhexScalar(hex) {
      var value = parseInt("0x" + hex, 16);
      if (value > 2147483647) value -= 4294967296;
      return value
    }
    p.unhex = function(hex) {
      if (hex instanceof Array) {
        var arr = [];
        for (var i = 0; i < hex.length; i++) arr.push(unhexScalar(hex[i]));
        return arr
      }
      return unhexScalar(hex)
    };
    p.loadStrings = function(filename) {
      if (localStorage[filename]) return localStorage[filename].split("\n");
      var filecontent = ajax(filename);
      if (typeof filecontent !== "string" || filecontent === "") return [];
      filecontent = filecontent.replace(/(\r\n?)/g, "\n").replace(/\n$/, "");
      return filecontent.split("\n")
    };
    p.saveStrings = function(filename, strings) {
      localStorage[filename] = strings.join("\n")
    };
    p.loadBytes = function(url) {
      var string = ajax(url);
      var ret = [];
      for (var i = 0; i < string.length; i++) ret.push(string.charCodeAt(i));
      return ret
    };

    function removeFirstArgument(args) {
      return Array.prototype.slice.call(args, 1)
    }
    p.matchAll = function(aString, aRegExp) {
      var results = [],
        latest;
      var regexp = new RegExp(aRegExp, "g");
      while ((latest = regexp.exec(aString)) !== null) {
        results.push(latest);
        if (latest[0].length === 0)++regexp.lastIndex
      }
      return results.length > 0 ? results : null
    };
    p.__contains = function(subject, subStr) {
      if (typeof subject !== "string") return subject.contains.apply(subject, removeFirstArgument(arguments));
      return subject !== null && subStr !== null && typeof subStr === "string" && subject.indexOf(subStr) > -1
    };
    p.__replaceAll = function(subject, regex, replacement) {
      if (typeof subject !== "string") return subject.replaceAll.apply(subject, removeFirstArgument(arguments));
      return subject.replace(new RegExp(regex, "g"), replacement)
    };
    p.__replaceFirst = function(subject, regex, replacement) {
      if (typeof subject !== "string") return subject.replaceFirst.apply(subject, removeFirstArgument(arguments));
      return subject.replace(new RegExp(regex, ""), replacement)
    };
    p.__replace = function(subject, what, replacement) {
      if (typeof subject !== "string") return subject.replace.apply(subject, removeFirstArgument(arguments));
      if (what instanceof RegExp) return subject.replace(what, replacement);
      if (typeof what !== "string") what = what.toString();
      if (what === "") return subject;
      var i = subject.indexOf(what);
      if (i < 0) return subject;
      var j = 0,
        result = "";
      do {
        result += subject.substring(j, i) + replacement;
        j = i + what.length
      } while ((i = subject.indexOf(what, j)) >= 0);
      return result + subject.substring(j)
    };
    p.__equals = function(subject, other) {
      if (subject.equals instanceof
      Function) return subject.equals.apply(subject, removeFirstArgument(arguments));
      return subject.valueOf() === other.valueOf()
    };
    p.__equalsIgnoreCase = function(subject, other) {
      if (typeof subject !== "string") return subject.equalsIgnoreCase.apply(subject, removeFirstArgument(arguments));
      return subject.toLowerCase() === other.toLowerCase()
    };
    p.__toCharArray = function(subject) {
      if (typeof subject !== "string") return subject.toCharArray.apply(subject, removeFirstArgument(arguments));
      var chars = [];
      for (var i = 0, len = subject.length; i < len; ++i) chars[i] = new Char(subject.charAt(i));
      return chars
    };
    p.__split = function(subject, regex, limit) {
      if (typeof subject !== "string") return subject.split.apply(subject, removeFirstArgument(arguments));
      var pattern = new RegExp(regex);
      if (limit === undef || limit < 1) return subject.split(pattern);
      var result = [],
        currSubject = subject,
        pos;
      while ((pos = currSubject.search(pattern)) !== -1 && result.length < limit - 1) {
        var match = pattern.exec(currSubject).toString();
        result.push(currSubject.substring(0, pos));
        currSubject = currSubject.substring(pos + match.length)
      }
      if (pos !== -1 || currSubject !== "") result.push(currSubject);
      return result
    };
    p.__codePointAt = function(subject, idx) {
      var code = subject.charCodeAt(idx),
        hi, low;
      if (55296 <= code && code <= 56319) {
        hi = code;
        low = subject.charCodeAt(idx + 1);
        return (hi - 55296) * 1024 + (low - 56320) + 65536
      }
      return code
    };
    p.match = function(str, regexp) {
      return str.match(regexp)
    };
    p.__matches = function(str, regexp) {
      return (new RegExp(regexp)).test(str)
    };
    p.__startsWith = function(subject, prefix, toffset) {
      if (typeof subject !== "string") return subject.startsWith.apply(subject, removeFirstArgument(arguments));
      toffset = toffset || 0;
      if (toffset < 0 || toffset > subject.length) return false;
      return prefix === "" || prefix === subject ? true : subject.indexOf(prefix) === toffset
    };
    p.__endsWith = function(subject, suffix) {
      if (typeof subject !== "string") return subject.endsWith.apply(subject, removeFirstArgument(arguments));
      var suffixLen = suffix ? suffix.length : 0;
      return suffix === "" || suffix === subject ? true : subject.indexOf(suffix) === subject.length - suffixLen
    };
    p.__hashCode = function(subject) {
      if (subject.hashCode instanceof
      Function) return subject.hashCode.apply(subject, removeFirstArgument(arguments));
      return virtHashCode(subject)
    };
    p.__printStackTrace = function(subject) {
      p.println("Exception: " + subject.toString())
    };
    var logBuffer = [];
    p.println = function(message) {
      var bufferLen = logBuffer.length;
      if (bufferLen) {
        Processing.logger.log(logBuffer.join(""));
        logBuffer.length = 0
      }
      if (arguments.length === 0 && bufferLen === 0) Processing.logger.log("");
      else if (arguments.length !== 0) Processing.logger.log(message)
    };
    p.print = function(message) {
      logBuffer.push(message)
    };
    p.str = function(val) {
      if (val instanceof Array) {
        var arr = [];
        for (var i = 0; i < val.length; i++) arr.push(val[i].toString() + "");
        return arr
      }
      return val.toString() + ""
    };
    p.trim = function(str) {
      if (str instanceof Array) {
        var arr = [];
        for (var i = 0; i < str.length; i++) arr.push(str[i].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, ""));
        return arr
      }
      return str.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, "")
    };

    function booleanScalar(val) {
      if (typeof val === "number") return val !== 0;
      if (typeof val === "boolean") return val;
      if (typeof val === "string") return val.toLowerCase() === "true";
      if (val instanceof Char) return val.code === 49 || val.code === 84 || val.code === 116
    }
    p.parseBoolean = function(val) {
      if (val instanceof Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) ret.push(booleanScalar(val[i]));
        return ret
      }
      return booleanScalar(val)
    };
    p.parseByte = function(what) {
      if (what instanceof Array) {
        var bytes = [];
        for (var i = 0; i < what.length; i++) bytes.push(0 - (what[i] & 128) | what[i] & 127);
        return bytes
      }
      return 0 - (what & 128) | what & 127
    };
    p.parseChar = function(key) {
      if (typeof key === "number") return new Char(String.fromCharCode(key & 65535));
      if (key instanceof Array) {
        var ret = [];
        for (var i = 0; i < key.length; i++) ret.push(new Char(String.fromCharCode(key[i] & 65535)));
        return ret
      }
      throw "char() may receive only one argument of type int, byte, int[], or byte[].";
    };

    function floatScalar(val) {
      if (typeof val === "number") return val;
      if (typeof val === "boolean") return val ? 1 : 0;
      if (typeof val === "string") return parseFloat(val);
      if (val instanceof Char) return val.code
    }
    p.parseFloat = function(val) {
      if (val instanceof
      Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) ret.push(floatScalar(val[i]));
        return ret
      }
      return floatScalar(val)
    };

    function intScalar(val, radix) {
      if (typeof val === "number") return val & 4294967295;
      if (typeof val === "boolean") return val ? 1 : 0;
      if (typeof val === "string") {
        var number = parseInt(val, radix || 10);
        return number & 4294967295
      }
      if (val instanceof Char) return val.code
    }
    p.parseInt = function(val, radix) {
      if (val instanceof Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) if (typeof val[i] === "string" && !/^\s*[+\-]?\d+\s*$/.test(val[i])) ret.push(0);
        else ret.push(intScalar(val[i], radix));
        return ret
      }
      return intScalar(val, radix)
    };
    p.__int_cast = function(val) {
      return 0 | val
    };
    p.__instanceof = function(obj, type) {
      if (typeof type !== "function") throw "Function is expected as type argument for instanceof operator";
      if (typeof obj === "string") return type === Object || type === String;
      if (obj instanceof type) return true;
      if (typeof obj !== "object" || obj === null) return false;
      var objType = obj.constructor;
      if (type.$isInterface) {
        var interfaces = [];
        while (objType) {
          if (objType.$interfaces) interfaces = interfaces.concat(objType.$interfaces);
          objType = objType.$base
        }
        while (interfaces.length > 0) {
          var i = interfaces.shift();
          if (i === type) return true;
          if (i.$interfaces) interfaces = interfaces.concat(i.$interfaces)
        }
        return false
      }
      while (objType.hasOwnProperty("$base")) {
        objType = objType.$base;
        if (objType === type) return true
      }
      return false
    };
    p.abs = Math.abs;
    p.ceil = Math.ceil;
    p.constrain = function(aNumber, aMin, aMax) {
      return aNumber > aMax ? aMax : aNumber < aMin ? aMin : aNumber
    };
    p.dist = function() {
      var dx, dy, dz;
      if (arguments.length === 4) {
        dx = arguments[0] - arguments[2];
        dy = arguments[1] - arguments[3];
        return Math.sqrt(dx * dx + dy * dy)
      }
      if (arguments.length === 6) {
        dx = arguments[0] - arguments[3];
        dy = arguments[1] - arguments[4];
        dz = arguments[2] - arguments[5];
        return Math.sqrt(dx * dx + dy * dy + dz * dz)
      }
    };
    p.exp = Math.exp;
    p.floor = Math.floor;
    p.lerp = function(value1, value2, amt) {
      return (value2 - value1) * amt + value1
    };
    p.log = Math.log;
    p.mag = function(a, b, c) {
      if (c) return Math.sqrt(a * a + b * b + c * c);
      return Math.sqrt(a * a + b * b)
    };
    p.map = function(value, istart, istop, ostart, ostop) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
    };
    p.max = function() {
      if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
      var numbers = arguments.length === 1 ? arguments[0] : arguments;
      if (! ("length" in numbers && numbers.length > 0)) throw "Non-empty array is expected";
      var max = numbers[0],
        count = numbers.length;
      for (var i = 1; i < count; ++i) if (max < numbers[i]) max = numbers[i];
      return max
    };
    p.min = function() {
      if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
      var numbers = arguments.length === 1 ? arguments[0] : arguments;
      if (! ("length" in numbers && numbers.length > 0)) throw "Non-empty array is expected";
      var min = numbers[0],
        count = numbers.length;
      for (var i = 1; i < count; ++i) if (min > numbers[i]) min = numbers[i];
      return min
    };
    p.norm = function(aNumber, low, high) {
      return (aNumber - low) / (high - low)
    };
    p.pow = Math.pow;
    p.round = Math.round;
    p.sq = function(aNumber) {
      return aNumber * aNumber
    };
    p.sqrt = Math.sqrt;
    p.acos = Math.acos;
    p.asin = Math.asin;
    p.atan = Math.atan;
    p.atan2 = Math.atan2;
    p.cos = Math.cos;
    p.degrees = function(aAngle) {
      return aAngle * 180 / Math.PI
    };
    p.radians = function(aAngle) {
      return aAngle / 180 * Math.PI
    };
    p.sin = Math.sin;
    p.tan = Math.tan;
    var currentRandom = Math.random;
    p.random = function() {
      if (arguments.length === 0) return currentRandom();
      if (arguments.length === 1) return currentRandom() * arguments[0];
      var aMin = arguments[0],
        aMax = arguments[1];
      return currentRandom() * (aMax - aMin) + aMin
    };

    function Marsaglia(i1, i2) {
      var z = i1 || 362436069,
        w = i2 || 521288629;
      var nextInt = function() {
        z = 36969 * (z & 65535) + (z >>> 16) & 4294967295;
        w = 18E3 * (w & 65535) + (w >>> 16) & 4294967295;
        return ((z & 65535) << 16 | w & 65535) & 4294967295
      };
      this.nextDouble = function() {
        var i = nextInt() / 4294967296;
        return i < 0 ? 1 + i : i
      };
      this.nextInt = nextInt
    }
    Marsaglia.createRandomized = function() {
      var now = new Date;
      return new Marsaglia(now / 6E4 & 4294967295, now & 4294967295)
    };
    p.randomSeed = function(seed) {
      currentRandom = (new Marsaglia(seed)).nextDouble
    };
    p.Random = function(seed) {
      var haveNextNextGaussian = false,
        nextNextGaussian, random;
      this.nextGaussian = function() {
        if (haveNextNextGaussian) {
          haveNextNextGaussian = false;
          return nextNextGaussian
        }
        var v1, v2, s;
        do {
          v1 = 2 * random() - 1;
          v2 = 2 * random() - 1;
          s = v1 * v1 + v2 * v2
        } while (s >= 1 || s === 0);
        var multiplier = Math.sqrt(-2 * Math.log(s) / s);
        nextNextGaussian = v2 * multiplier;
        haveNextNextGaussian = true;
        return v1 * multiplier
      };
      random = seed === undef ? Math.random : (new Marsaglia(seed)).nextDouble
    };

    function PerlinNoise(seed) {
      var rnd = seed !== undef ? new Marsaglia(seed) : Marsaglia.createRandomized();
      var i, j;
      var perm = new Uint8Array(512);
      for (i = 0; i < 256; ++i) perm[i] = i;
      for (i = 0; i < 256; ++i) {
        var t = perm[j = rnd.nextInt() & 255];
        perm[j] = perm[i];
        perm[i] = t
      }
      for (i = 0; i < 256; ++i) perm[i + 256] = perm[i];

      function grad3d(i, x, y, z) {
        var h = i & 15;
        var u = h < 8 ? x : y,
        v = h < 4 ? y : h === 12 || h === 14 ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
      }
      function grad2d(i, x, y) {
        var v = (i & 1) === 0 ? x : y;
        return (i & 2) === 0 ? -v : v
      }
      function grad1d(i, x) {
        return (i & 1) === 0 ? -x : x
      }
      function lerp(t, a, b) {
        return a + t * (b - a)
      }
      this.noise3d = function(x, y, z) {
        var X = Math.floor(x) & 255,
          Y = Math.floor(y) & 255,
          Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        var fx = (3 - 2 * x) * x * x,
          fy = (3 - 2 * y) * y * y,
          fz = (3 - 2 * z) * z * z;
        var p0 = perm[X] + Y,
          p00 = perm[p0] + Z,
          p01 = perm[p0 + 1] + Z,
          p1 = perm[X + 1] + Y,
          p10 = perm[p1] + Z,
          p11 = perm[p1 + 1] + Z;
        return lerp(fz, lerp(fy, lerp(fx, grad3d(perm[p00], x, y, z), grad3d(perm[p10], x - 1, y, z)), lerp(fx, grad3d(perm[p01], x, y - 1, z), grad3d(perm[p11], x - 1, y - 1, z))), lerp(fy, lerp(fx, grad3d(perm[p00 + 1], x, y, z - 1), grad3d(perm[p10 + 1], x - 1, y, z - 1)), lerp(fx, grad3d(perm[p01 + 1], x, y - 1, z - 1), grad3d(perm[p11 + 1], x - 1, y - 1, z - 1))))
      };
      this.noise2d = function(x, y) {
        var X = Math.floor(x) & 255,
          Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        var fx = (3 - 2 * x) * x * x,
          fy = (3 - 2 * y) * y * y;
        var p0 = perm[X] + Y,
          p1 = perm[X + 1] + Y;
        return lerp(fy, lerp(fx, grad2d(perm[p0], x, y), grad2d(perm[p1], x - 1, y)), lerp(fx, grad2d(perm[p0 + 1], x, y - 1), grad2d(perm[p1 + 1], x - 1, y - 1)))
      };
      this.noise1d = function(x) {
        var X = Math.floor(x) & 255;
        x -= Math.floor(x);
        var fx = (3 - 2 * x) * x * x;
        return lerp(fx, grad1d(perm[X], x), grad1d(perm[X + 1], x - 1))
      }
    }
    var noiseProfile = {
      generator: undef,
      octaves: 4,
      fallout: 0.5,
      seed: undef
    };
    p.noise = function(x, y, z) {
      if (noiseProfile.generator === undef) noiseProfile.generator = new PerlinNoise(noiseProfile.seed);
      var generator = noiseProfile.generator;
      var effect = 1,
        k = 1,
        sum = 0;
      for (var i = 0; i < noiseProfile.octaves; ++i) {
        effect *= noiseProfile.fallout;
        switch (arguments.length) {
        case 1:
          sum += effect * (1 + generator.noise1d(k * x)) / 2;
          break;
        case 2:
          sum += effect * (1 + generator.noise2d(k * x, k * y)) / 2;
          break;
        case 3:
          sum += effect * (1 + generator.noise3d(k * x, k * y, k * z)) / 2;
          break
        }
        k *= 2
      }
      return sum
    };
    p.noiseDetail = function(octaves, fallout) {
      noiseProfile.octaves = octaves;
      if (fallout !== undef) noiseProfile.fallout = fallout
    };
    p.noiseSeed = function(seed) {
      noiseProfile.seed = seed;
      noiseProfile.generator = undef
    };
    DrawingShared.prototype.size = function(aWidth, aHeight, aMode) {
      if (doStroke) p.stroke(0);
      if (doFill) p.fill(255);
      var savedProperties = {
        fillStyle: curContext.fillStyle,
        strokeStyle: curContext.strokeStyle,
        lineCap: curContext.lineCap,
        lineJoin: curContext.lineJoin
      };
      if (curElement.style.length > 0) {
        curElement.style.removeProperty("width");
        curElement.style.removeProperty("height")
      }
      curElement.width = p.width = aWidth || 100;
      curElement.height = p.height = aHeight || 100;
      for (var prop in savedProperties) if (savedProperties.hasOwnProperty(prop)) curContext[prop] = savedProperties[prop];
      p.textFont(curTextFont);
      p.background();
      maxPixelsCached = Math.max(1E3, aWidth * aHeight * 0.05);
      p.externals.context = curContext;
      for (var i = 0; i < 720; i++) {
        sinLUT[i] = p.sin(i * (Math.PI / 180) * 0.5);
        cosLUT[i] = p.cos(i * (Math.PI / 180) * 0.5)
      }
    };
    Drawing2D.prototype.size = function(aWidth, aHeight, aMode) {
      if (curContext === undef) {
        curContext = curElement.getContext("2d");
        userMatrixStack = new PMatrixStack;
        userReverseMatrixStack = new PMatrixStack;
        modelView = new PMatrix2D;
        modelViewInv = new PMatrix2D
      }
      DrawingShared.prototype.size.apply(this, arguments)
    };
    Drawing3D.prototype.size = function() {
      var size3DCalled = false;
      return function size(aWidth, aHeight, aMode) {
        if (size3DCalled) throw "Multiple calls to size() for 3D renders are not allowed.";
        size3DCalled = true;

        function getGLContext(canvas) {
          var ctxNames = ["experimental-webgl", "webgl", "webkit-3d"],
            gl;
          for (var i = 0, l = ctxNames.length; i < l; i++) {
            gl = canvas.getContext(ctxNames[i], {
              antialias: false,
              preserveDrawingBuffer: true
            });
            if (gl) break
          }
          return gl
        }
        try {
          curElement.width = p.width = aWidth || 100;
          curElement.height = p.height = aHeight || 100;
          curContext = getGLContext(curElement);
          canTex = curContext.createTexture();
          textTex = curContext.createTexture()
        } catch(e_size) {
          Processing.debug(e_size)
        }
        if (!curContext) throw "WebGL context is not supported on this browser.";
        curContext.viewport(0, 0, curElement.width, curElement.height);
        curContext.enable(curContext.DEPTH_TEST);
        curContext.enable(curContext.BLEND);
        curContext.blendFunc(curContext.SRC_ALPHA, curContext.ONE_MINUS_SRC_ALPHA);
        programObject2D = createProgramObject(curContext, vertexShaderSrc2D, fragmentShaderSrc2D);
        programObjectUnlitShape = createProgramObject(curContext, vertexShaderSrcUnlitShape, fragmentShaderSrcUnlitShape);
        p.strokeWeight(1);
        programObject3D = createProgramObject(curContext, vertexShaderSrc3D, fragmentShaderSrc3D);
        curContext.useProgram(programObject3D);
        uniformi("usingTexture3d", programObject3D, "usingTexture", usingTexture);
        p.lightFalloff(1, 0, 0);
        p.shininess(1);
        p.ambient(255, 255, 255);
        p.specular(0, 0, 0);
        p.emissive(0, 0, 0);
        boxBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxVerts, curContext.STATIC_DRAW);
        boxNormBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxNormBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxNorms, curContext.STATIC_DRAW);
        boxOutlineBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxOutlineBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxOutlineVerts, curContext.STATIC_DRAW);
        rectBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, rectBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, rectVerts, curContext.STATIC_DRAW);
        rectNormBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, rectNormBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, rectNorms, curContext.STATIC_DRAW);
        sphereBuffer = curContext.createBuffer();
        lineBuffer = curContext.createBuffer();
        fillBuffer = curContext.createBuffer();
        fillColorBuffer = curContext.createBuffer();
        strokeColorBuffer = curContext.createBuffer();
        shapeTexVBO = curContext.createBuffer();
        pointBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, pointBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([0, 0, 0]), curContext.STATIC_DRAW);
        textBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, textBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0]), curContext.STATIC_DRAW);
        textureBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, textureBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), curContext.STATIC_DRAW);
        indexBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ELEMENT_ARRAY_BUFFER, indexBuffer);
        curContext.bufferData(curContext.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 2, 3, 0]), curContext.STATIC_DRAW);
        cam = new PMatrix3D;
        cameraInv = new PMatrix3D;
        modelView = new PMatrix3D;
        modelViewInv = new PMatrix3D;
        projection = new PMatrix3D;
        p.camera();
        p.perspective();
        userMatrixStack = new PMatrixStack;
        userReverseMatrixStack = new PMatrixStack;
        curveBasisMatrix = new PMatrix3D;
        curveToBezierMatrix = new PMatrix3D;
        curveDrawMatrix = new PMatrix3D;
        bezierDrawMatrix = new PMatrix3D;
        bezierBasisInverse = new PMatrix3D;
        bezierBasisMatrix = new PMatrix3D;
        bezierBasisMatrix.set(-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0);
        DrawingShared.prototype.size.apply(this, arguments)
      }
    }();
    Drawing2D.prototype.ambientLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.ambientLight = function(r, g, b, x, y, z) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      var pos = new PVector(x, y, z);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.mult(pos, pos);
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 0);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.directionalLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.directionalLight = function(r, g, b, nx, ny, nz) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      curContext.useProgram(programObject3D);
      var mvm = new PMatrix3D;
      mvm.scale(1, -1, 1);
      mvm.apply(modelView.array());
      mvm = mvm.array();
      var dir = [mvm[0] * nx + mvm[4] * ny + mvm[8] * nz, mvm[1] * nx + mvm[5] * ny + mvm[9] * nz, mvm[2] * nx + mvm[6] * ny + mvm[10] * nz];
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", dir);
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 1);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.lightFalloff = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.lightFalloff = function(constant, linear, quadratic) {
      curContext.useProgram(programObject3D);
      uniformf("uFalloff3d", programObject3D, "uFalloff", [constant, linear, quadratic])
    };
    Drawing2D.prototype.lightSpecular = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.lightSpecular = function(r, g, b) {
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uSpecular3d", programObject3D, "uSpecular", normalizedCol)
    };
    p.lights = function() {
      p.ambientLight(128, 128, 128);
      p.directionalLight(128, 128, 128, 0, 0, -1);
      p.lightFalloff(1, 0, 0);
      p.lightSpecular(0, 0, 0)
    };
    Drawing2D.prototype.pointLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.pointLight = function(r, g, b, x, y, z) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      var pos = new PVector(x, y, z);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.mult(pos, pos);
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 2);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.noLights = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.noLights = function() {
      lightCount = 0;
      curContext.useProgram(programObject3D);
      uniformi("uLightCount3d", programObject3D, "uLightCount", lightCount)
    };
    Drawing2D.prototype.spotLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.spotLight = function(r, g, b, x, y, z, nx, ny, nz, angle, concentration) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      curContext.useProgram(programObject3D);
      var pos = new PVector(x, y, z);
      var mvm = new PMatrix3D;
      mvm.scale(1, -1, 1);
      mvm.apply(modelView.array());
      mvm.mult(pos, pos);
      mvm = mvm.array();
      var dir = [mvm[0] * nx + mvm[4] * ny + mvm[8] * nz, mvm[1] *
        nx + mvm[5] * ny + mvm[9] * nz, mvm[2] * nx + mvm[6] * ny + mvm[10] * nz];
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformf("uLights.direction.3d." + lightCount, programObject3D, "uLights" + lightCount + ".direction", dir);
      uniformf("uLights.concentration.3d." + lightCount, programObject3D, "uLights" + lightCount + ".concentration", concentration);
      uniformf("uLights.angle.3d." + lightCount, programObject3D, "uLights" + lightCount + ".angle", angle);
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 3);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.beginCamera = function() {
      throw "beginCamera() is not available in 2D mode";
    };
    Drawing3D.prototype.beginCamera = function() {
      if (manipulatingCamera) throw "You cannot call beginCamera() again before calling endCamera()";
      manipulatingCamera = true;
      modelView = cameraInv;
      modelViewInv = cam
    };
    Drawing2D.prototype.endCamera = function() {
      throw "endCamera() is not available in 2D mode";
    };
    Drawing3D.prototype.endCamera = function() {
      if (!manipulatingCamera) throw "You cannot call endCamera() before calling beginCamera()";
      modelView.set(cam);
      modelViewInv.set(cameraInv);
      manipulatingCamera = false
    };
    p.camera = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
      if (eyeX === undef) {
        cameraX = p.width / 2;
        cameraY = p.height / 2;
        cameraZ = cameraY / Math.tan(cameraFOV / 2);
        eyeX = cameraX;
        eyeY = cameraY;
        eyeZ = cameraZ;
        centerX = cameraX;
        centerY = cameraY;
        centerZ = 0;
        upX = 0;
        upY = 1;
        upZ = 0
      }
      var z = new PVector(eyeX - centerX, eyeY - centerY, eyeZ - centerZ);
      var y = new PVector(upX, upY, upZ);
      z.normalize();
      var x = PVector.cross(y, z);
      y = PVector.cross(z, x);
      x.normalize();
      y.normalize();
      var xX = x.x,
        xY = x.y,
        xZ = x.z;
      var yX = y.x,
        yY = y.y,
        yZ = y.z;
      var zX = z.x,
        zY = z.y,
        zZ = z.z;
      cam.set(xX, xY, xZ, 0, yX, yY, yZ, 0, zX, zY, zZ, 0, 0, 0, 0, 1);
      cam.translate(-eyeX, -eyeY, -eyeZ);
      cameraInv.reset();
      cameraInv.invApply(xX, xY, xZ, 0, yX, yY, yZ, 0, zX, zY, zZ, 0, 0, 0, 0, 1);
      cameraInv.translate(eyeX, eyeY, eyeZ);
      modelView.set(cam);
      modelViewInv.set(cameraInv)
    };
    p.perspective = function(fov, aspect, near, far) {
      if (arguments.length === 0) {
        cameraY = curElement.height / 2;
        cameraZ = cameraY / Math.tan(cameraFOV / 2);
        cameraNear = cameraZ / 10;
        cameraFar = cameraZ * 10;
        cameraAspect = p.width / p.height;
        fov = cameraFOV;
        aspect = cameraAspect;
        near = cameraNear;
        far = cameraFar
      }
      var yMax, yMin, xMax, xMin;
      yMax = near * Math.tan(fov / 2);
      yMin = -yMax;
      xMax = yMax * aspect;
      xMin = yMin * aspect;
      p.frustum(xMin, xMax, yMin, yMax, near, far)
    };
    Drawing2D.prototype.frustum = function() {
      throw "Processing.js: frustum() is not supported in 2D mode";
    };
    Drawing3D.prototype.frustum = function(left, right, bottom, top, near, far) {
      frustumMode = true;
      projection = new PMatrix3D;
      projection.set(2 * near / (right - left), 0, (right + left) / (right - left), 0, 0, 2 * near / (top - bottom), (top + bottom) / (top - bottom), 0, 0, 0, -(far + near) / (far - near), -(2 * far * near) / (far - near), 0, 0, -1, 0);
      var proj = new PMatrix3D;
      proj.set(projection);
      proj.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("projection2d", programObject2D, "uProjection", false, proj.array());
      curContext.useProgram(programObject3D);
      uniformMatrix("projection3d", programObject3D, "uProjection", false, proj.array());
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uProjectionUS", programObjectUnlitShape, "uProjection", false, proj.array())
    };
    p.ortho = function(left, right, bottom, top, near, far) {
      if (arguments.length === 0) {
        left = 0;
        right = p.width;
        bottom = 0;
        top = p.height;
        near = -10;
        far = 10
      }
      var x = 2 / (right - left);
      var y = 2 / (top - bottom);
      var z = -2 / (far - near);
      var tx = -(right + left) / (right - left);
      var ty = -(top + bottom) / (top - bottom);
      var tz = -(far + near) / (far - near);
      projection = new PMatrix3D;
      projection.set(x, 0, 0, tx, 0, y, 0, ty, 0, 0, z, tz, 0, 0, 0, 1);
      var proj = new PMatrix3D;
      proj.set(projection);
      proj.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("projection2d", programObject2D, "uProjection", false, proj.array());
      curContext.useProgram(programObject3D);
      uniformMatrix("projection3d", programObject3D, "uProjection", false, proj.array());
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uProjectionUS", programObjectUnlitShape, "uProjection", false, proj.array());
      frustumMode = false
    };
    p.printProjection = function() {
      projection.print()
    };
    p.printCamera = function() {
      cam.print()
    };
    Drawing2D.prototype.box = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.box = function(w, h, d) {
      if (!h || !d) h = d = w;
      var model = new PMatrix3D;
      model.scale(w, h, d);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (doFill) {
        curContext.useProgram(programObject3D);
        uniformMatrix("model3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("view3d", programObject3D, "uView", false, view.array());
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("color3d", programObject3D, "uColor", fillStyle);
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, boxNormBuffer)
        } else disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
        vertexAttribPointer("aVertex3d", programObject3D, "aVertex", 3, boxBuffer);
        disableVertexAttribPointer("aColor3d", programObject3D, "aColor");
        disableVertexAttribPointer("aTexture3d", programObject3D, "aTexture");
        curContext.drawArrays(curContext.TRIANGLES, 0, boxVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("vertex2d", programObject2D, "aVertex", 3, boxOutlineBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.LINES, 0, boxOutlineVerts.length / 3)
      }
    };
    var initSphere = function() {
      var i;
      sphereVerts = [];
      for (i = 0; i < sphereDetailU; i++) {
        sphereVerts.push(0);
        sphereVerts.push(-1);
        sphereVerts.push(0);
        sphereVerts.push(sphereX[i]);
        sphereVerts.push(sphereY[i]);
        sphereVerts.push(sphereZ[i])
      }
      sphereVerts.push(0);
      sphereVerts.push(-1);
      sphereVerts.push(0);
      sphereVerts.push(sphereX[0]);
      sphereVerts.push(sphereY[0]);
      sphereVerts.push(sphereZ[0]);
      var v1, v11, v2;
      var voff = 0;
      for (i = 2; i < sphereDetailV; i++) {
        v1 = v11 = voff;
        voff += sphereDetailU;
        v2 = voff;
        for (var j = 0; j < sphereDetailU; j++) {
          sphereVerts.push(sphereX[v1]);
          sphereVerts.push(sphereY[v1]);
          sphereVerts.push(sphereZ[v1++]);
          sphereVerts.push(sphereX[v2]);
          sphereVerts.push(sphereY[v2]);
          sphereVerts.push(sphereZ[v2++])
        }
        v1 = v11;
        v2 = voff;
        sphereVerts.push(sphereX[v1]);
        sphereVerts.push(sphereY[v1]);
        sphereVerts.push(sphereZ[v1]);
        sphereVerts.push(sphereX[v2]);
        sphereVerts.push(sphereY[v2]);
        sphereVerts.push(sphereZ[v2])
      }
      for (i = 0; i < sphereDetailU; i++) {
        v2 = voff + i;
        sphereVerts.push(sphereX[v2]);
        sphereVerts.push(sphereY[v2]);
        sphereVerts.push(sphereZ[v2]);
        sphereVerts.push(0);
        sphereVerts.push(1);
        sphereVerts.push(0)
      }
      sphereVerts.push(sphereX[voff]);
      sphereVerts.push(sphereY[voff]);
      sphereVerts.push(sphereZ[voff]);
      sphereVerts.push(0);
      sphereVerts.push(1);
      sphereVerts.push(0);
      curContext.bindBuffer(curContext.ARRAY_BUFFER, sphereBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(sphereVerts), curContext.STATIC_DRAW)
    };
    p.sphereDetail = function(ures, vres) {
      var i;
      if (arguments.length === 1) ures = vres = arguments[0];
      if (ures < 3) ures = 3;
      if (vres < 2) vres = 2;
      if (ures === sphereDetailU && vres === sphereDetailV) return;
      var delta = 720 / ures;
      var cx = new Float32Array(ures);
      var cz = new Float32Array(ures);
      for (i = 0; i < ures; i++) {
        cx[i] = cosLUT[i * delta % 720 | 0];
        cz[i] = sinLUT[i * delta % 720 | 0]
      }
      var vertCount = ures * (vres - 1) + 2;
      var currVert = 0;
      sphereX = new Float32Array(vertCount);
      sphereY = new Float32Array(vertCount);
      sphereZ = new Float32Array(vertCount);
      var angle_step = 720 * 0.5 / vres;
      var angle = angle_step;
      for (i = 1; i < vres; i++) {
        var curradius = sinLUT[angle % 720 | 0];
        var currY = -cosLUT[angle % 720 | 0];
        for (var j = 0; j < ures; j++) {
          sphereX[currVert] = cx[j] * curradius;
          sphereY[currVert] = currY;
          sphereZ[currVert++] = cz[j] * curradius
        }
        angle += angle_step
      }
      sphereDetailU = ures;
      sphereDetailV = vres;
      initSphere()
    };
    Drawing2D.prototype.sphere = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.sphere = function() {
      var sRad = arguments[0];
      if (sphereDetailU < 3 || sphereDetailV < 2) p.sphereDetail(30);
      var model = new PMatrix3D;
      model.scale(sRad, sRad, sRad);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (doFill) {
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, sphereBuffer)
        } else disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
        curContext.useProgram(programObject3D);
        disableVertexAttribPointer("aTexture3d", programObject3D, "aTexture");
        uniformMatrix("uModel3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("uView3d", programObject3D, "uView", false, view.array());
        vertexAttribPointer("aVertex3d", programObject3D, "aVertex", 3, sphereBuffer);
        disableVertexAttribPointer("aColor3d", programObject3D, "aColor");
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("uColor3d", programObject3D, "uColor", fillStyle);
        curContext.drawArrays(curContext.TRIANGLE_STRIP, 0, sphereVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, sphereBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText", programObject2D, "uIsDrawingText", false);
        curContext.drawArrays(curContext.LINE_STRIP, 0, sphereVerts.length / 3)
      }
    };
    p.modelX = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var ox = ci[0] * ax + ci[1] * ay + ci[2] * az + ci[3] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? ox / ow : ox
    };
    p.modelY = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oy = ci[4] * ax + ci[5] * ay + ci[6] * az + ci[7] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? oy / ow : oy
    };
    p.modelZ = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oz = ci[8] * ax + ci[9] * ay + ci[10] * az + ci[11] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? oz / ow : oz
    };
    Drawing2D.prototype.ambient = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.ambient = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialAmbient3d", programObject3D, "uMaterialAmbient", p.color.toGLArray(col).slice(0, 3))
    };
    Drawing2D.prototype.emissive = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.emissive = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialEmissive3d", programObject3D, "uMaterialEmissive", p.color.toGLArray(col).slice(0, 3))
    };
    Drawing2D.prototype.shininess = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.shininess = function(shine) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      uniformf("uShininess3d", programObject3D, "uShininess", shine)
    };
    Drawing2D.prototype.specular = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.specular = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialSpecular3d", programObject3D, "uMaterialSpecular", p.color.toGLArray(col).slice(0, 3))
    };
    p.screenX = function(x, y, z) {
      var mv = modelView.array();
      if (mv.length === 16) {
        var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
        var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
        var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
        var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
        var pj = projection.array();
        var ox = pj[0] * ax + pj[1] * ay + pj[2] * az + pj[3] * aw;
        var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
        if (ow !== 0) ox /= ow;
        return p.width * (1 + ox) / 2
      }
      return modelView.multX(x, y)
    };
    p.screenY = function screenY(x, y, z) {
      var mv = modelView.array();
      if (mv.length === 16) {
        var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
        var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
        var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
        var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
        var pj = projection.array();
        var oy = pj[4] * ax + pj[5] * ay + pj[6] * az + pj[7] * aw;
        var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
        if (ow !== 0) oy /= ow;
        return p.height * (1 + oy) / 2
      }
      return modelView.multY(x, y)
    };
    p.screenZ = function screenZ(x, y, z) {
      var mv = modelView.array();
      if (mv.length !== 16) return 0;
      var pj = projection.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oz = pj[8] * ax + pj[9] * ay + pj[10] * az + pj[11] * aw;
      var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
      if (ow !== 0) oz /= ow;
      return (oz + 1) / 2
    };
    DrawingShared.prototype.fill = function() {
      var color = p.color(arguments[0], arguments[1], arguments[2], arguments[3]);
      if (color === currentFillColor && doFill) return;
      doFill = true;
      currentFillColor = color
    };
    Drawing2D.prototype.fill = function() {
      DrawingShared.prototype.fill.apply(this, arguments);
      isFillDirty = true
    };
    Drawing3D.prototype.fill = function() {
      DrawingShared.prototype.fill.apply(this, arguments);
      fillStyle = p.color.toGLArray(currentFillColor)
    };

    function executeContextFill() {
      if (doFill) {
        if (isFillDirty) {
          curContext.fillStyle = p.color.toString(currentFillColor);
          isFillDirty = false
        }
        curContext.fill()
      }
    }
    p.noFill = function() {
      doFill = false
    };
    DrawingShared.prototype.stroke = function() {
      var color = p.color(arguments[0], arguments[1], arguments[2], arguments[3]);
      if (color === currentStrokeColor && doStroke) return;
      doStroke = true;
      currentStrokeColor = color
    };
    Drawing2D.prototype.stroke = function() {
      DrawingShared.prototype.stroke.apply(this, arguments);
      isStrokeDirty = true
    };
    Drawing3D.prototype.stroke = function() {
      DrawingShared.prototype.stroke.apply(this, arguments);
      strokeStyle = p.color.toGLArray(currentStrokeColor)
    };

    function executeContextStroke() {
      if (doStroke) {
        if (isStrokeDirty) {
          curContext.strokeStyle = p.color.toString(currentStrokeColor);
          isStrokeDirty = false
        }
        curContext.stroke()
      }
    }
    p.noStroke = function() {
      doStroke = false
    };
    DrawingShared.prototype.strokeWeight = function(w) {
      lineWidth = w
    };
    Drawing2D.prototype.strokeWeight = function(w) {
      DrawingShared.prototype.strokeWeight.apply(this, arguments);
      curContext.lineWidth = w
    };
    Drawing3D.prototype.strokeWeight = function(w) {
      DrawingShared.prototype.strokeWeight.apply(this, arguments);
      curContext.useProgram(programObject2D);
      uniformf("pointSize2d", programObject2D, "uPointSize", w);
      curContext.useProgram(programObjectUnlitShape);
      uniformf("pointSizeUnlitShape", programObjectUnlitShape, "uPointSize", w);
      curContext.lineWidth(w)
    };
    p.strokeCap = function(value) {
      drawing.$ensureContext().lineCap = value
    };
    p.strokeJoin = function(value) {
      drawing.$ensureContext().lineJoin = value
    };
    Drawing2D.prototype.smooth = function() {
      renderSmooth = true;
      var style = curElement.style;
      style.setProperty("image-rendering", "optimizeQuality", "important");
      style.setProperty("-ms-interpolation-mode", "bicubic", "important");
      if (curContext.hasOwnProperty("mozImageSmoothingEnabled")) curContext.mozImageSmoothingEnabled = true
    };
    Drawing3D.prototype.smooth = function() {
      renderSmooth = true
    };
    Drawing2D.prototype.noSmooth = function() {
      renderSmooth = false;
      var style = curElement.style;
      style.setProperty("image-rendering", "optimizeSpeed", "important");
      style.setProperty("image-rendering", "-moz-crisp-edges", "important");
      style.setProperty("image-rendering", "-webkit-optimize-contrast", "important");
      style.setProperty("image-rendering", "optimize-contrast", "important");
      style.setProperty("-ms-interpolation-mode", "nearest-neighbor", "important");
      if (curContext.hasOwnProperty("mozImageSmoothingEnabled")) curContext.mozImageSmoothingEnabled = false
    };
    Drawing3D.prototype.noSmooth = function() {
      renderSmooth = false
    };
    Drawing2D.prototype.point = function(x, y) {
      if (!doStroke) return;
      x = Math.round(x);
      y = Math.round(y);
      curContext.fillStyle = p.color.toString(currentStrokeColor);
      isFillDirty = true;
      if (lineWidth > 1) {
        curContext.beginPath();
        curContext.arc(x, y, lineWidth / 2, 0, 6.283185307179586, false);
        curContext.fill()
      } else curContext.fillRect(x, y, 1, 1)
    };
    Drawing3D.prototype.point = function(x, y, z) {
      var model = new PMatrix3D;
      model.translate(x, y, z || 0);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
      uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
      if (lineWidth > 0 && doStroke) {
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        uniformi("uSmooth2d", programObject2D, "uSmooth", renderSmooth);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, pointBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.POINTS, 0, 1)
      }
    };
    p.beginShape = function(type) {
      curShape = type;
      curvePoints = [];
      vertArray = []
    };
    Drawing2D.prototype.vertex = function(x, y, moveTo) {
      var vert = [];
      if (firstVert) firstVert = false;
      vert["isVert"] = true;
      vert[0] = x;
      vert[1] = y;
      vert[2] = 0;
      vert[3] = 0;
      vert[4] = 0;
      vert[5] = currentFillColor;
      vert[6] = currentStrokeColor;
      vertArray.push(vert);
      if (moveTo) vertArray[vertArray.length - 1]["moveTo"] = moveTo
    };
    Drawing3D.prototype.vertex = function(x, y, z, u, v) {
      var vert = [];
      if (firstVert) firstVert = false;
      vert["isVert"] = true;
      if (v === undef && usingTexture) {
        v = u;
        u = z;
        z = 0
      }
      if (u !== undef && v !== undef) {
        if (curTextureMode === 2) {
          u /= curTexture.width;
          v /= curTexture.height
        }
        u = u > 1 ? 1 : u;
        u = u < 0 ? 0 : u;
        v = v > 1 ? 1 : v;
        v = v < 0 ? 0 : v
      }
      vert[0] = x;
      vert[1] = y;
      vert[2] = z || 0;
      vert[3] = u || 0;
      vert[4] = v || 0;
      vert[5] = fillStyle[0];
      vert[6] = fillStyle[1];
      vert[7] = fillStyle[2];
      vert[8] = fillStyle[3];
      vert[9] = strokeStyle[0];
      vert[10] = strokeStyle[1];
      vert[11] = strokeStyle[2];
      vert[12] = strokeStyle[3];
      vert[13] = normalX;
      vert[14] = normalY;
      vert[15] = normalZ;
      vertArray.push(vert)
    };
    var point3D = function(vArray, cArray) {
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uViewUS", programObjectUnlitShape, "uView", false, view.array());
      uniformi("uSmoothUS", programObjectUnlitShape, "uSmooth", renderSmooth);
      vertexAttribPointer("aVertexUS", programObjectUnlitShape, "aVertex", 3, pointBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      vertexAttribPointer("aColorUS", programObjectUnlitShape, "aColor", 4, fillColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      curContext.drawArrays(curContext.POINTS, 0, vArray.length / 3)
    };
    var line3D = function(vArray, mode, cArray) {
      var ctxMode;
      if (mode === "LINES") ctxMode = curContext.LINES;
      else if (mode === "LINE_LOOP") ctxMode = curContext.LINE_LOOP;
      else ctxMode = curContext.LINE_STRIP;
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uViewUS", programObjectUnlitShape, "uView", false, view.array());
      vertexAttribPointer("aVertexUS", programObjectUnlitShape, "aVertex", 3, lineBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      vertexAttribPointer("aColorUS", programObjectUnlitShape, "aColor", 4, strokeColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      curContext.drawArrays(ctxMode, 0, vArray.length / 3)
    };
    var fill3D = function(vArray, mode, cArray, tArray) {
      var ctxMode;
      if (mode === "TRIANGLES") ctxMode = curContext.TRIANGLES;
      else if (mode === "TRIANGLE_FAN") ctxMode = curContext.TRIANGLE_FAN;
      else ctxMode = curContext.TRIANGLE_STRIP;
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject3D);
      uniformMatrix("model3d", programObject3D, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      uniformMatrix("view3d", programObject3D, "uView", false, view.array());
      curContext.enable(curContext.POLYGON_OFFSET_FILL);
      curContext.polygonOffset(1, 1);
      uniformf("color3d", programObject3D, "uColor", [-1, 0, 0, 0]);
      vertexAttribPointer("vertex3d", programObject3D, "aVertex", 3, fillBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      if (usingTexture && curTint !== null) curTint3d(cArray);
      vertexAttribPointer("aColor3d", programObject3D, "aColor", 4, fillColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
      if (usingTexture) {
        uniformi("uUsingTexture3d", programObject3D, "uUsingTexture", usingTexture);
        vertexAttribPointer("aTexture3d", programObject3D, "aTexture", 2, shapeTexVBO);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(tArray), curContext.STREAM_DRAW)
      }
      curContext.drawArrays(ctxMode, 0, vArray.length / 3);
      curContext.disable(curContext.POLYGON_OFFSET_FILL)
    };

    function fillStrokeClose() {
      executeContextFill();
      executeContextStroke();
      curContext.closePath()
    }
    Drawing2D.prototype.endShape = function(mode) {
      if (vertArray.length === 0) return;
      var closeShape = mode === 2;
      if (closeShape) vertArray.push(vertArray[0]);
      var lineVertArray = [];
      var fillVertArray = [];
      var colorVertArray = [];
      var strokeVertArray = [];
      var texVertArray = [];
      var cachedVertArray;
      firstVert = true;
      var i, j, k;
      var vertArrayLength = vertArray.length;
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 0; j < 3; j++) fillVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        texVertArray.push(cachedVertArray[3]);
        texVertArray.push(cachedVertArray[4])
      }
      if (isCurve && (curShape === 20 || curShape === undef)) {
        if (vertArrayLength > 3) {
          var b = [],
            s = 1 - curTightness;
          curContext.beginPath();
          curContext.moveTo(vertArray[1][0], vertArray[1][1]);
          for (i = 1; i + 2 < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            b[0] = [cachedVertArray[0], cachedVertArray[1]];
            b[1] = [cachedVertArray[0] + (s * vertArray[i + 1][0] - s * vertArray[i - 1][0]) / 6, cachedVertArray[1] + (s * vertArray[i + 1][1] - s * vertArray[i - 1][1]) / 6];
            b[2] = [vertArray[i + 1][0] + (s * vertArray[i][0] - s * vertArray[i + 2][0]) / 6, vertArray[i + 1][1] + (s * vertArray[i][1] - s * vertArray[i + 2][1]) / 6];
            b[3] = [vertArray[i + 1][0], vertArray[i + 1][1]];
            curContext.bezierCurveTo(b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1])
          }
          fillStrokeClose()
        }
      } else if (isBezier && (curShape === 20 || curShape === undef)) {
        curContext.beginPath();
        for (i = 0; i < vertArrayLength; i++) {
          cachedVertArray = vertArray[i];
          if (vertArray[i]["isVert"]) if (vertArray[i]["moveTo"]) curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.bezierCurveTo(vertArray[i][0], vertArray[i][1], vertArray[i][2], vertArray[i][3], vertArray[i][4], vertArray[i][5])
        }
        fillStrokeClose()
      } else if (curShape === 2) for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        if (doStroke) p.stroke(cachedVertArray[6]);
        p.point(cachedVertArray[0], cachedVertArray[1])
      } else if (curShape === 4) for (i = 0; i + 1 < vertArrayLength; i += 2) {
        cachedVertArray = vertArray[i];
        if (doStroke) p.stroke(vertArray[i + 1][6]);
        p.line(cachedVertArray[0], cachedVertArray[1], vertArray[i + 1][0], vertArray[i + 1][1])
      } else if (curShape === 9) for (i = 0; i + 2 < vertArrayLength; i += 3) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
        curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1]);
        curContext.lineTo(vertArray[i + 2][0], vertArray[i + 2][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doFill) {
          p.fill(vertArray[i + 2][5]);
          executeContextFill()
        }
        if (doStroke) {
          p.stroke(vertArray[i + 2][6]);
          executeContextStroke()
        }
        curContext.closePath()
      } else if (curShape === 10) for (i = 0; i + 1 < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(vertArray[i + 1][0], vertArray[i + 1][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doStroke) p.stroke(vertArray[i + 1][6]);
        if (doFill) p.fill(vertArray[i + 1][5]);
        if (i + 2 < vertArrayLength) {
          curContext.lineTo(vertArray[i + 2][0], vertArray[i + 2][1]);
          if (doStroke) p.stroke(vertArray[i + 2][6]);
          if (doFill) p.fill(vertArray[i + 2][5])
        }
        fillStrokeClose()
      } else if (curShape === 11) {
        if (vertArrayLength > 2) {
          curContext.beginPath();
          curContext.moveTo(vertArray[0][0], vertArray[0][1]);
          curContext.lineTo(vertArray[1][0], vertArray[1][1]);
          curContext.lineTo(vertArray[2][0], vertArray[2][1]);
          if (doFill) {
            p.fill(vertArray[2][5]);
            executeContextFill()
          }
          if (doStroke) {
            p.stroke(vertArray[2][6]);
            executeContextStroke()
          }
          curContext.closePath();
          for (i = 3; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            curContext.beginPath();
            curContext.moveTo(vertArray[0][0], vertArray[0][1]);
            curContext.lineTo(vertArray[i - 1][0], vertArray[i - 1][1]);
            curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
            if (doFill) {
              p.fill(cachedVertArray[5]);
              executeContextFill()
            }
            if (doStroke) {
              p.stroke(cachedVertArray[6]);
              executeContextStroke()
            }
            curContext.closePath()
          }
        }
      } else if (curShape === 16) for (i = 0; i + 3 < vertArrayLength; i += 4) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
        for (j = 1; j < 4; j++) curContext.lineTo(vertArray[i + j][0], vertArray[i + j][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doFill) {
          p.fill(vertArray[i + 3][5]);
          executeContextFill()
        }
        if (doStroke) {
          p.stroke(vertArray[i + 3][6]);
          executeContextStroke()
        }
        curContext.closePath()
      } else if (curShape === 17) {
        if (vertArrayLength > 3) for (i = 0; i + 1 < vertArrayLength; i += 2) {
          cachedVertArray = vertArray[i];
          curContext.beginPath();
          if (i + 3 < vertArrayLength) {
            curContext.moveTo(vertArray[i + 2][0], vertArray[i + 2][1]);
            curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
            curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1]);
            curContext.lineTo(vertArray[i + 3][0], vertArray[i + 3][1]);
            if (doFill) p.fill(vertArray[i + 3][5]);
            if (doStroke) p.stroke(vertArray[i + 3][6])
          } else {
            curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
            curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1])
          }
          fillStrokeClose()
        }
      } else {
        curContext.beginPath();
        curContext.moveTo(vertArray[0][0], vertArray[0][1]);
        for (i = 1; i < vertArrayLength; i++) {
          cachedVertArray = vertArray[i];
          if (cachedVertArray["isVert"]) if (cachedVertArray["moveTo"]) curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.lineTo(cachedVertArray[0], cachedVertArray[1])
        }
        fillStrokeClose()
      }
      isCurve = false;
      isBezier = false;
      curveVertArray = [];
      curveVertCount = 0;
      if (closeShape) vertArray.pop()
    };
    Drawing3D.prototype.endShape = function(mode) {
      if (vertArray.length === 0) return;
      var closeShape = mode === 2;
      var lineVertArray = [];
      var fillVertArray = [];
      var colorVertArray = [];
      var strokeVertArray = [];
      var texVertArray = [];
      var cachedVertArray;
      firstVert = true;
      var i, j, k;
      var vertArrayLength = vertArray.length;
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 0; j < 3; j++) fillVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        texVertArray.push(cachedVertArray[3]);
        texVertArray.push(cachedVertArray[4])
      }
      if (closeShape) {
        fillVertArray.push(vertArray[0][0]);
        fillVertArray.push(vertArray[0][1]);
        fillVertArray.push(vertArray[0][2]);
        for (i = 5; i < 9; i++) colorVertArray.push(vertArray[0][i]);
        for (i = 9; i < 13; i++) strokeVertArray.push(vertArray[0][i]);
        texVertArray.push(vertArray[0][3]);
        texVertArray.push(vertArray[0][4])
      }
      if (isCurve && (curShape === 20 || curShape === undef)) {
        lineVertArray = fillVertArray;
        if (doStroke) line3D(lineVertArray, null, strokeVertArray);
        if (doFill) fill3D(fillVertArray, null, colorVertArray)
      } else if (isBezier && (curShape === 20 || curShape === undef)) {
        lineVertArray = fillVertArray;
        lineVertArray.splice(lineVertArray.length - 3);
        strokeVertArray.splice(strokeVertArray.length - 4);
        if (doStroke) line3D(lineVertArray, null, strokeVertArray);
        if (doFill) fill3D(fillVertArray, "TRIANGLES", colorVertArray)
      } else {
        if (curShape === 2) {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
          }
          point3D(lineVertArray, strokeVertArray)
        } else if (curShape === 4) {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
          }
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
          }
          line3D(lineVertArray, "LINES", strokeVertArray)
        } else if (curShape === 9) {
          if (vertArrayLength > 2) for (i = 0; i + 2 < vertArrayLength; i += 3) {
            fillVertArray = [];
            texVertArray = [];
            lineVertArray = [];
            colorVertArray = [];
            strokeVertArray = [];
            for (j = 0; j < 3; j++) for (k = 0; k < 3; k++) {
              lineVertArray.push(vertArray[i + j][k]);
              fillVertArray.push(vertArray[i + j][k])
            }
            for (j = 0; j < 3; j++) for (k = 3; k < 5; k++) texVertArray.push(vertArray[i + j][k]);
            for (j = 0; j < 3; j++) for (k = 5; k < 9; k++) {
              colorVertArray.push(vertArray[i + j][k]);
              strokeVertArray.push(vertArray[i + j][k + 4])
            }
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLES", colorVertArray, texVertArray)
          }
        } else if (curShape === 10) {
          if (vertArrayLength > 2) for (i = 0; i + 2 < vertArrayLength; i++) {
            lineVertArray = [];
            fillVertArray = [];
            strokeVertArray = [];
            colorVertArray = [];
            texVertArray = [];
            for (j = 0; j < 3; j++) for (k = 0; k < 3; k++) {
              lineVertArray.push(vertArray[i + j][k]);
              fillVertArray.push(vertArray[i + j][k])
            }
            for (j = 0; j < 3; j++) for (k = 3; k < 5; k++) texVertArray.push(vertArray[i + j][k]);
            for (j = 0; j < 3; j++) for (k = 5; k < 9; k++) {
              strokeVertArray.push(vertArray[i + j][k + 4]);
              colorVertArray.push(vertArray[i + j][k])
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_STRIP", colorVertArray, texVertArray);
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray)
          }
        } else if (curShape === 11) {
          if (vertArrayLength > 2) {
            for (i = 0; i < 3; i++) {
              cachedVertArray = vertArray[i];
              for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
            }
            for (i = 0; i < 3; i++) {
              cachedVertArray = vertArray[i];
              for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
            }
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
            for (i = 2; i + 1 < vertArrayLength; i++) {
              lineVertArray = [];
              strokeVertArray = [];
              lineVertArray.push(vertArray[0][0]);
              lineVertArray.push(vertArray[0][1]);
              lineVertArray.push(vertArray[0][2]);
              strokeVertArray.push(vertArray[0][9]);
              strokeVertArray.push(vertArray[0][10]);
              strokeVertArray.push(vertArray[0][11]);
              strokeVertArray.push(vertArray[0][12]);
              for (j = 0; j < 2; j++) for (k = 0; k < 3; k++) lineVertArray.push(vertArray[i + j][k]);
              for (j = 0; j < 2; j++) for (k = 9; k < 13; k++) strokeVertArray.push(vertArray[i + j][k]);
              if (doStroke) line3D(lineVertArray, "LINE_STRIP", strokeVertArray)
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray, texVertArray)
          }
        } else if (curShape === 16) for (i = 0; i + 3 < vertArrayLength; i += 4) {
          lineVertArray = [];
          for (j = 0; j < 4; j++) {
            cachedVertArray = vertArray[i + j];
            for (k = 0; k < 3; k++) lineVertArray.push(cachedVertArray[k])
          }
          if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
          if (doFill) {
            fillVertArray = [];
            colorVertArray = [];
            texVertArray = [];
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 1][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 1][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 3][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 3][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 2][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 2][j]);
            if (usingTexture) {
              texVertArray.push(vertArray[i + 0][3]);
              texVertArray.push(vertArray[i + 0][4]);
              texVertArray.push(vertArray[i + 1][3]);
              texVertArray.push(vertArray[i + 1][4]);
              texVertArray.push(vertArray[i + 3][3]);
              texVertArray.push(vertArray[i + 3][4]);
              texVertArray.push(vertArray[i + 2][3]);
              texVertArray.push(vertArray[i + 2][4])
            }
            fill3D(fillVertArray, "TRIANGLE_STRIP", colorVertArray, texVertArray)
          }
        } else if (curShape === 17) {
          var tempArray = [];
          if (vertArrayLength > 3) {
            for (i = 0; i < 2; i++) {
              cachedVertArray = vertArray[i];
              for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
            }
            for (i = 0; i < 2; i++) {
              cachedVertArray = vertArray[i];
              for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
            }
            line3D(lineVertArray, "LINE_STRIP", strokeVertArray);
            if (vertArrayLength > 4 && vertArrayLength % 2 > 0) {
              tempArray = fillVertArray.splice(fillVertArray.length - 3);
              vertArray.pop()
            }
            for (i = 0; i + 3 < vertArrayLength; i += 2) {
              lineVertArray = [];
              strokeVertArray = [];
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 1][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 3][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 2][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 0][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 1][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 3][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 2][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 0][j]);
              if (doStroke) line3D(lineVertArray, "LINE_STRIP", strokeVertArray)
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_LIST", colorVertArray, texVertArray)
          }
        } else if (vertArrayLength === 1) {
          for (j = 0; j < 3; j++) lineVertArray.push(vertArray[0][j]);
          for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[0][j]);
          point3D(lineVertArray, strokeVertArray)
        } else {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j]);
            for (j = 5; j < 9; j++) strokeVertArray.push(cachedVertArray[j])
          }
          if (doStroke && closeShape) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
          else if (doStroke && !closeShape) line3D(lineVertArray, "LINE_STRIP", strokeVertArray);
          if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray, texVertArray)
        }
        usingTexture = false;
        curContext.useProgram(programObject3D);
        uniformi("usingTexture3d", programObject3D, "uUsingTexture", usingTexture)
      }
      isCurve = false;
      isBezier = false;
      curveVertArray = [];
      curveVertCount = 0
    };
    var splineForward = function(segments, matrix) {
      var f = 1 / segments;
      var ff = f * f;
      var fff = ff * f;
      matrix.set(0, 0, 0, 1, fff, ff, f, 0, 6 * fff, 2 * ff, 0, 0, 6 * fff, 0, 0, 0)
    };
    var curveInit = function() {
      if (!curveDrawMatrix) {
        curveBasisMatrix = new PMatrix3D;
        curveDrawMatrix = new PMatrix3D;
        curveInited = true
      }
      var s = curTightness;
      curveBasisMatrix.set((s - 1) / 2, (s + 3) / 2, (-3 - s) / 2, (1 - s) / 2, 1 - s, (-5 - s) / 2, s + 2, (s - 1) / 2, (s - 1) / 2, 0, (1 - s) / 2, 0, 0, 1, 0, 0);
      splineForward(curveDet, curveDrawMatrix);
      if (!bezierBasisInverse) curveToBezierMatrix = new PMatrix3D;
      curveToBezierMatrix.set(curveBasisMatrix);
      curveToBezierMatrix.preApply(bezierBasisInverse);
      curveDrawMatrix.apply(curveBasisMatrix)
    };
    Drawing2D.prototype.bezierVertex = function() {
      isBezier = true;
      var vert = [];
      if (firstVert) throw "vertex() must be used at least once before calling bezierVertex()";
      for (var i = 0; i < arguments.length; i++) vert[i] = arguments[i];
      vertArray.push(vert);
      vertArray[vertArray.length - 1]["isVert"] = false
    };
    Drawing3D.prototype.bezierVertex = function() {
      isBezier = true;
      var vert = [];
      if (firstVert) throw "vertex() must be used at least once before calling bezierVertex()";
      if (arguments.length === 9) {
        if (bezierDrawMatrix === undef) bezierDrawMatrix = new PMatrix3D;
        var lastPoint = vertArray.length - 1;
        splineForward(bezDetail, bezierDrawMatrix);
        bezierDrawMatrix.apply(bezierBasisMatrix);
        var draw = bezierDrawMatrix.array();
        var x1 = vertArray[lastPoint][0],
          y1 = vertArray[lastPoint][1],
          z1 = vertArray[lastPoint][2];
        var xplot1 = draw[4] * x1 + draw[5] * arguments[0] + draw[6] * arguments[3] + draw[7] * arguments[6];
        var xplot2 = draw[8] * x1 + draw[9] * arguments[0] + draw[10] * arguments[3] + draw[11] * arguments[6];
        var xplot3 = draw[12] * x1 + draw[13] * arguments[0] + draw[14] * arguments[3] + draw[15] * arguments[6];
        var yplot1 = draw[4] * y1 + draw[5] * arguments[1] + draw[6] * arguments[4] + draw[7] * arguments[7];
        var yplot2 = draw[8] * y1 + draw[9] * arguments[1] + draw[10] * arguments[4] + draw[11] * arguments[7];
        var yplot3 = draw[12] * y1 + draw[13] * arguments[1] + draw[14] * arguments[4] + draw[15] * arguments[7];
        var zplot1 = draw[4] * z1 + draw[5] * arguments[2] + draw[6] * arguments[5] + draw[7] * arguments[8];
        var zplot2 = draw[8] * z1 + draw[9] * arguments[2] + draw[10] * arguments[5] + draw[11] * arguments[8];
        var zplot3 = draw[12] * z1 + draw[13] * arguments[2] + draw[14] * arguments[5] + draw[15] * arguments[8];
        for (var j = 0; j < bezDetail; j++) {
          x1 += xplot1;
          xplot1 += xplot2;
          xplot2 += xplot3;
          y1 += yplot1;
          yplot1 += yplot2;
          yplot2 += yplot3;
          z1 += zplot1;
          zplot1 += zplot2;
          zplot2 += zplot3;
          p.vertex(x1, y1, z1)
        }
        p.vertex(arguments[6], arguments[7], arguments[8])
      }
    };
    p.texture = function(pimage) {
      var curContext = drawing.$ensureContext();
      if (pimage.__texture) curContext.bindTexture(curContext.TEXTURE_2D, pimage.__texture);
      else if (pimage.localName === "canvas") {
        curContext.bindTexture(curContext.TEXTURE_2D, canTex);
        curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, pimage);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR);
        curContext.generateMipmap(curContext.TEXTURE_2D);
        curTexture.width = pimage.width;
        curTexture.height = pimage.height
      } else {
        var texture = curContext.createTexture(),
          cvs = document.createElement("canvas"),
          cvsTextureCtx = cvs.getContext("2d"),
          pot;
        if (pimage.width & pimage.width - 1 === 0) cvs.width = pimage.width;
        else {
          pot = 1;
          while (pot < pimage.width) pot *= 2;
          cvs.width = pot
        }
        if (pimage.height & pimage.height - 1 === 0) cvs.height = pimage.height;
        else {
          pot = 1;
          while (pot < pimage.height) pot *= 2;
          cvs.height = pot
        }
        cvsTextureCtx.drawImage(pimage.sourceImg, 0, 0, pimage.width, pimage.height, 0, 0, cvs.width, cvs.height);
        curContext.bindTexture(curContext.TEXTURE_2D, texture);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR_MIPMAP_LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_T, curContext.CLAMP_TO_EDGE);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_S, curContext.CLAMP_TO_EDGE);
        curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, cvs);
        curContext.generateMipmap(curContext.TEXTURE_2D);
        pimage.__texture = texture;
        curTexture.width = pimage.width;
        curTexture.height = pimage.height
      }
      usingTexture = true;
      curContext.useProgram(programObject3D);
      uniformi("usingTexture3d", programObject3D, "uUsingTexture", usingTexture)
    };
    p.textureMode = function(mode) {
      curTextureMode = mode
    };
    var curveVertexSegment = function(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
      var x0 = x2;
      var y0 = y2;
      var z0 = z2;
      var draw = curveDrawMatrix.array();
      var xplot1 = draw[4] * x1 + draw[5] * x2 + draw[6] * x3 + draw[7] * x4;
      var xplot2 = draw[8] * x1 + draw[9] * x2 + draw[10] * x3 + draw[11] * x4;
      var xplot3 = draw[12] * x1 + draw[13] * x2 + draw[14] * x3 + draw[15] * x4;
      var yplot1 = draw[4] * y1 + draw[5] * y2 + draw[6] * y3 + draw[7] * y4;
      var yplot2 = draw[8] * y1 + draw[9] * y2 + draw[10] * y3 + draw[11] * y4;
      var yplot3 = draw[12] * y1 + draw[13] * y2 + draw[14] * y3 + draw[15] * y4;
      var zplot1 = draw[4] * z1 + draw[5] * z2 + draw[6] * z3 + draw[7] * z4;
      var zplot2 = draw[8] * z1 + draw[9] * z2 + draw[10] * z3 + draw[11] * z4;
      var zplot3 = draw[12] * z1 + draw[13] * z2 + draw[14] * z3 + draw[15] * z4;
      p.vertex(x0, y0, z0);
      for (var j = 0; j < curveDet; j++) {
        x0 += xplot1;
        xplot1 += xplot2;
        xplot2 += xplot3;
        y0 += yplot1;
        yplot1 += yplot2;
        yplot2 += yplot3;
        z0 += zplot1;
        zplot1 += zplot2;
        zplot2 += zplot3;
        p.vertex(x0, y0, z0)
      }
    };
    Drawing2D.prototype.curveVertex = function(x, y) {
      isCurve = true;
      p.vertex(x, y)
    };
    Drawing3D.prototype.curveVertex = function(x, y, z) {
      isCurve = true;
      if (!curveInited) curveInit();
      var vert = [];
      vert[0] = x;
      vert[1] = y;
      vert[2] = z;
      curveVertArray.push(vert);
      curveVertCount++;
      if (curveVertCount > 3) curveVertexSegment(curveVertArray[curveVertCount - 4][0], curveVertArray[curveVertCount - 4][1], curveVertArray[curveVertCount - 4][2], curveVertArray[curveVertCount - 3][0], curveVertArray[curveVertCount - 3][1], curveVertArray[curveVertCount - 3][2], curveVertArray[curveVertCount - 2][0], curveVertArray[curveVertCount - 2][1], curveVertArray[curveVertCount - 2][2], curveVertArray[curveVertCount - 1][0], curveVertArray[curveVertCount - 1][1], curveVertArray[curveVertCount - 1][2])
    };
    Drawing2D.prototype.curve = function(x1, y1, x2, y2, x3, y3, x4, y4) {
      p.beginShape();
      p.curveVertex(x1, y1);
      p.curveVertex(x2, y2);
      p.curveVertex(x3, y3);
      p.curveVertex(x4, y4);
      p.endShape()
    };
    Drawing3D.prototype.curve = function(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
      if (z4 !== undef) {
        p.beginShape();
        p.curveVertex(x1, y1, z1);
        p.curveVertex(x2, y2, z2);
        p.curveVertex(x3, y3, z3);
        p.curveVertex(x4, y4, z4);
        p.endShape();
        return
      }
      p.beginShape();
      p.curveVertex(x1, y1);
      p.curveVertex(z1, x2);
      p.curveVertex(y2, z2);
      p.curveVertex(x3, y3);
      p.endShape()
    };
    p.curveTightness = function(tightness) {
      curTightness = tightness
    };
    p.curveDetail = function(detail) {
      curveDet = detail;
      curveInit()
    };
    p.rectMode = function(aRectMode) {
      curRectMode = aRectMode
    };
    p.imageMode = function(mode) {
      switch (mode) {
      case 0:
        imageModeConvert = imageModeCorner;
        break;
      case 1:
        imageModeConvert = imageModeCorners;
        break;
      case 3:
        imageModeConvert = imageModeCenter;
        break;
      default:
        throw "Invalid imageMode";
      }
    };
    p.ellipseMode = function(aEllipseMode) {
      curEllipseMode = aEllipseMode
    };
    p.arc = function(x, y, width, height, start, stop) {
      if (width <= 0 || stop < start) return;
      if (curEllipseMode === 1) {
        width = width - x;
        height = height - y
      } else if (curEllipseMode === 2) {
        x = x - width;
        y = y - height;
        width = width * 2;
        height = height * 2
      } else if (curEllipseMode === 3) {
        x = x - width / 2;
        y = y - height / 2
      }
      while (start < 0) {
        start += 6.283185307179586;
        stop += 6.283185307179586
      }
      if (stop - start > 6.283185307179586) {
        start = 0;
        stop = 6.283185307179586
      }
      var hr = width / 2,
        vr = height / 2,
        centerX = x + hr,
        centerY = y + vr,
        startLUT = 0 | 0.5 + start * p.RAD_TO_DEG * 2,
        stopLUT = 0 | 0.5 + stop * p.RAD_TO_DEG * 2,
        i, j;
      if (doFill) {
        var savedStroke = doStroke;
        doStroke = false;
        p.beginShape();
        p.vertex(centerX, centerY);
        for (i = startLUT; i <= stopLUT; i++) {
          j = i % 720;
          p.vertex(centerX + cosLUT[j] * hr, centerY + sinLUT[j] * vr)
        }
        p.endShape(2);
        doStroke = savedStroke
      }
      if (doStroke) {
        var savedFill = doFill;
        doFill = false;
        p.beginShape();
        for (i = startLUT; i <= stopLUT; i++) {
          j = i % 720;
          p.vertex(centerX + cosLUT[j] * hr, centerY + sinLUT[j] * vr)
        }
        p.endShape();
        doFill = savedFill
      }
    };
    Drawing2D.prototype.line = function(x1, y1, x2, y2) {
      if (!doStroke) return;
      x1 = Math.round(x1);
      x2 = Math.round(x2);
      y1 = Math.round(y1);
      y2 = Math.round(y2);
      if (x1 === x2 && y1 === y2) {
        p.point(x1, y1);
        return
      }
      var swap = undef,
        lineCap = undef,
        drawCrisp = true,
        currentModelView = modelView.array(),
        identityMatrix = [1, 0, 0, 0, 1, 0];
      for (var i = 0; i < 6 && drawCrisp; i++) drawCrisp = currentModelView[i] === identityMatrix[i];
      if (drawCrisp) {
        if (x1 === x2) {
          if (y1 > y2) {
            swap = y1;
            y1 = y2;
            y2 = swap
          }
          y2++;
          if (lineWidth % 2 === 1) curContext.translate(0.5, 0)
        } else if (y1 === y2) {
          if (x1 > x2) {
            swap = x1;
            x1 = x2;
            x2 = swap
          }
          x2++;
          if (lineWidth % 2 === 1) curContext.translate(0, 0.5)
        }
        if (lineWidth === 1) {
          lineCap = curContext.lineCap;
          curContext.lineCap = "butt"
        }
      }
      curContext.beginPath();
      curContext.moveTo(x1 || 0, y1 || 0);
      curContext.lineTo(x2 || 0, y2 || 0);
      executeContextStroke();
      if (drawCrisp) {
        if (x1 === x2 && lineWidth % 2 === 1) curContext.translate(-0.5, 0);
        else if (y1 === y2 && lineWidth % 2 === 1) curContext.translate(0, -0.5);
        if (lineWidth === 1) curContext.lineCap = lineCap
      }
    };
    Drawing3D.prototype.line = function(x1, y1, z1, x2, y2, z2) {
      if (y2 === undef || z2 === undef) {
        z2 = 0;
        y2 = x2;
        x2 = z1;
        z1 = 0
      }
      if (x1 === x2 && y1 === y2 && z1 === z2) {
        p.point(x1, y1, z1);
        return
      }
      var lineVerts = [x1, y1, z1, x2, y2, z2];
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, lineBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(lineVerts), curContext.STREAM_DRAW);
        curContext.drawArrays(curContext.LINES, 0, 2)
      }
    };
    Drawing2D.prototype.bezier = function() {
      if (arguments.length !== 8) throw "You must use 8 parameters for bezier() in 2D mode";
      p.beginShape();
      p.vertex(arguments[0], arguments[1]);
      p.bezierVertex(arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
      p.endShape()
    };
    Drawing3D.prototype.bezier = function() {
      if (arguments.length !== 12) throw "You must use 12 parameters for bezier() in 3D mode";
      p.beginShape();
      p.vertex(arguments[0], arguments[1], arguments[2]);
      p.bezierVertex(arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
      p.endShape()
    };
    p.bezierDetail = function(detail) {
      bezDetail = detail
    };
    p.bezierPoint = function(a, b, c, d, t) {
      return (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d
    };
    p.bezierTangent = function(a, b, c, d, t) {
      return 3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b)
    };
    p.curvePoint = function(a, b, c, d, t) {
      return 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t)
    };
    p.curveTangent = function(a, b, c, d, t) {
      return 0.5 * (-a + c + 2 * (2 * a - 5 * b + 4 * c - d) * t + 3 * (-a + 3 * b - 3 * c + d) * t * t)
    };
    p.triangle = function(x1, y1, x2, y2, x3, y3) {
      p.beginShape(9);
      p.vertex(x1, y1, 0);
      p.vertex(x2, y2, 0);
      p.vertex(x3, y3, 0);
      p.endShape()
    };
    p.quad = function(x1, y1, x2, y2, x3, y3, x4, y4) {
      p.beginShape(16);
      p.vertex(x1, y1, 0);
      p.vertex(x2, y2, 0);
      p.vertex(x3, y3, 0);
      p.vertex(x4, y4, 0);
      p.endShape()
    };
    var roundedRect$2d = function(x, y, width, height, tl, tr, br, bl) {
      if (bl === undef) {
        tr = tl;
        br = tl;
        bl = tl
      }
      var halfWidth = width / 2,
        halfHeight = height / 2;
      if (tl > halfWidth || tl > halfHeight) tl = Math.min(halfWidth, halfHeight);
      if (tr > halfWidth || tr > halfHeight) tr = Math.min(halfWidth, halfHeight);
      if (br > halfWidth || br > halfHeight) br = Math.min(halfWidth, halfHeight);
      if (bl > halfWidth || bl > halfHeight) bl = Math.min(halfWidth, halfHeight);
      if (!doFill || doStroke) curContext.translate(0.5, 0.5);
      curContext.beginPath();
      curContext.moveTo(x + tl, y);
      curContext.lineTo(x + width - tr, y);
      curContext.quadraticCurveTo(x + width, y, x + width, y + tr);
      curContext.lineTo(x + width, y + height - br);
      curContext.quadraticCurveTo(x + width, y + height, x + width - br, y + height);
      curContext.lineTo(x + bl, y + height);
      curContext.quadraticCurveTo(x, y + height, x, y + height - bl);
      curContext.lineTo(x, y + tl);
      curContext.quadraticCurveTo(x, y, x + tl, y);
      if (!doFill || doStroke) curContext.translate(-0.5, -0.5);
      executeContextFill();
      executeContextStroke()
    };
    Drawing2D.prototype.rect = function(x, y, width, height, tl, tr, br, bl) {
      if (!width && !height) return;
      if (curRectMode === 1) {
        width -= x;
        height -= y
      } else if (curRectMode === 2) {
        width *= 2;
        height *= 2;
        x -= width / 2;
        y -= height / 2
      } else if (curRectMode === 3) {
        x -= width / 2;
        y -= height / 2
      }
      x = Math.round(x);
      y = Math.round(y);
      width = Math.round(width);
      height = Math.round(height);
      if (tl !== undef) {
        roundedRect$2d(x, y, width, height, tl, tr, br, bl);
        return
      }
      if (doStroke && lineWidth % 2 === 1) curContext.translate(0.5, 0.5);
      curContext.beginPath();
      curContext.rect(x, y, width, height);
      executeContextFill();
      executeContextStroke();
      if (doStroke && lineWidth % 2 === 1) curContext.translate(-0.5, -0.5)
    };
    Drawing3D.prototype.rect = function(x, y, width, height, tl, tr, br, bl) {
      if (tl !== undef) throw "rect() with rounded corners is not supported in 3D mode";
      if (curRectMode === 1) {
        width -= x;
        height -= y
      } else if (curRectMode === 2) {
        width *= 2;
        height *= 2;
        x -= width / 2;
        y -= height / 2
      } else if (curRectMode === 3) {
        x -= width / 2;
        y -= height / 2
      }
      var model = new PMatrix3D;
      model.translate(x, y, 0);
      model.scale(width, height, 1);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, rectBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.LINE_LOOP, 0, rectVerts.length / 3)
      }
      if (doFill) {
        curContext.useProgram(programObject3D);
        uniformMatrix("uModel3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("uView3d", programObject3D, "uView", false, view.array());
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("color3d", programObject3D, "uColor", fillStyle);
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, rectNormBuffer)
        } else disableVertexAttribPointer("normal3d", programObject3D, "aNormal");
        vertexAttribPointer("vertex3d", programObject3D, "aVertex", 3, rectBuffer);
        curContext.drawArrays(curContext.TRIANGLE_FAN, 0, rectVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
    };
    Drawing2D.prototype.ellipse = function(x, y, width, height) {
      x = x || 0;
      y = y || 0;
      if (width <= 0 && height <= 0) return;
      if (curEllipseMode === 2) {
        width *= 2;
        height *= 2
      } else if (curEllipseMode === 1) {
        width = width - x;
        height = height - y;
        x += width / 2;
        y += height / 2
      } else if (curEllipseMode === 0) {
        x += width / 2;
        y += height / 2
      }
      if (width === height) {
        curContext.beginPath();
        curContext.arc(x, y, width / 2, 0, 6.283185307179586, false);
        executeContextFill();
        executeContextStroke()
      } else {
        var w = width / 2,
          h = height / 2,
          C = 0.5522847498307933,
          c_x = C * w,
          c_y = C * h;
        p.beginShape();
        p.vertex(x + w, y);
        p.bezierVertex(x + w, y - c_y, x + c_x, y - h, x, y - h);
        p.bezierVertex(x - c_x, y - h, x - w, y - c_y, x - w, y);
        p.bezierVertex(x - w, y + c_y, x - c_x, y + h, x, y + h);
        p.bezierVertex(x + c_x, y + h, x + w, y + c_y, x + w, y);
        p.endShape()
      }
    };
    Drawing3D.prototype.ellipse = function(x, y, width, height) {
      x = x || 0;
      y = y || 0;
      if (width <= 0 && height <= 0) return;
      if (curEllipseMode === 2) {
        width *= 2;
        height *= 2
      } else if (curEllipseMode === 1) {
        width = width - x;
        height = height - y;
        x += width / 2;
        y += height / 2
      } else if (curEllipseMode === 0) {
        x += width / 2;
        y += height / 2
      }
      var w = width / 2,
        h = height / 2,
        C = 0.5522847498307933,
        c_x = C * w,
        c_y = C * h;
      p.beginShape();
      p.vertex(x + w, y);
      p.bezierVertex(x + w, y - c_y, 0, x + c_x, y - h, 0, x, y - h, 0);
      p.bezierVertex(x - c_x, y - h, 0, x - w, y - c_y, 0, x - w, y, 0);
      p.bezierVertex(x - w, y + c_y, 0, x - c_x, y + h, 0, x, y + h, 0);
      p.bezierVertex(x + c_x, y + h, 0, x + w, y + c_y, 0, x + w, y, 0);
      p.endShape();
      if (doFill) {
        var xAv = 0,
          yAv = 0,
          i, j;
        for (i = 0; i < vertArray.length; i++) {
          xAv += vertArray[i][0];
          yAv += vertArray[i][1]
        }
        xAv /= vertArray.length;
        yAv /= vertArray.length;
        var vert = [],
          fillVertArray = [],
          colorVertArray = [];
        vert[0] = xAv;
        vert[1] = yAv;
        vert[2] = 0;
        vert[3] = 0;
        vert[4] = 0;
        vert[5] = fillStyle[0];
        vert[6] = fillStyle[1];
        vert[7] = fillStyle[2];
        vert[8] = fillStyle[3];
        vert[9] = strokeStyle[0];
        vert[10] = strokeStyle[1];
        vert[11] = strokeStyle[2];
        vert[12] = strokeStyle[3];
        vert[13] = normalX;
        vert[14] = normalY;
        vert[15] = normalZ;
        vertArray.unshift(vert);
        for (i = 0; i < vertArray.length; i++) {
          for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i][j]);
          for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i][j])
        }
        fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray)
      }
    };
    p.normal = function(nx, ny, nz) {
      if (arguments.length !== 3 || !(typeof nx === "number" && typeof ny === "number" && typeof nz === "number")) throw "normal() requires three numeric arguments.";
      normalX = nx;
      normalY = ny;
      normalZ = nz;
      if (curShape !== 0) if (normalMode === 0) normalMode = 1;
      else if (normalMode === 1) normalMode = 2
    };
    p.save = function(file, img) {
      if (img !== undef) return window.open(img.toDataURL(), "_blank");
      return window.open(p.externals.canvas.toDataURL(), "_blank")
    };
    var saveNumber = 0;
    p.saveFrame = function(file) {
      if (file === undef) file = "screen-####.png";
      var frameFilename = file.replace(/#+/, function(all) {
        var s = "" + saveNumber++;
        while (s.length < all.length) s = "0" + s;
        return s
      });
      p.save(frameFilename)
    };
    var utilityContext2d = document.createElement("canvas").getContext("2d");
    var canvasDataCache = [undef, undef, undef];

    function getCanvasData(obj, w, h) {
      var canvasData = canvasDataCache.shift();
      if (canvasData === undef) {
        canvasData = {};
        canvasData.canvas = document.createElement("canvas");
        canvasData.context = canvasData.canvas.getContext("2d")
      }
      canvasDataCache.push(canvasData);
      var canvas = canvasData.canvas,
        context = canvasData.context,
        width = w || obj.width,
        height = h || obj.height;
      canvas.width = width;
      canvas.height = height;
      if (!obj) context.clearRect(0, 0, width, height);
      else if ("data" in obj) context.putImageData(obj, 0, 0);
      else {
        context.clearRect(0, 0, width, height);
        context.drawImage(obj, 0, 0, width, height)
      }
      return canvasData
    }
    function buildPixelsObject(pImage) {
      return {
        getLength: function(aImg) {
          return function() {
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get length.";
            else return aImg.imageData.data.length ? aImg.imageData.data.length / 4 : 0
          }
        }(pImage),
        getPixel: function(aImg) {
          return function(i) {
            var offset = i * 4,
              data = aImg.imageData.data;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
            return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
          }
        }(pImage),
        setPixel: function(aImg) {
          return function(i, c) {
            var offset = i * 4,
              data = aImg.imageData.data;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot set pixel.";
            data[offset + 0] = (c >> 16) & 255;
            data[offset + 1] = (c >> 8) & 255;
            data[offset + 2] = c & 255;
            data[offset + 3] = (c >> 24) & 255;
            aImg.__isDirty = true
          }
        }(pImage),
        toArray: function(aImg) {
          return function() {
            var arr = [],
              data = aImg.imageData.data,
              length = aImg.width * aImg.height;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
            for (var i = 0, offset = 0; i < length; i++, offset += 4) arr.push((data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255);
            return arr
          }
        }(pImage),
        set: function(aImg) {
          return function(arr) {
            var offset, data, c;
            if (this.isRemote) throw "Image is loaded remotely. Cannot set pixels.";
            data = aImg.imageData.data;
            for (var i = 0, aL = arr.length; i < aL; i++) {
              c = arr[i];
              offset = i * 4;
              data[offset + 0] = (c >> 16) & 255;
              data[offset + 1] = (c >> 8) & 255;
              data[offset + 2] = c & 255;
              data[offset + 3] = (c >> 24) & 255
            }
            aImg.__isDirty = true
          }
        }(pImage)
      }
    }
    var PImage = function(aWidth, aHeight, aFormat) {
      this.__isDirty = false;
      if (aWidth instanceof HTMLImageElement) this.fromHTMLImageData(aWidth);
      else if (aHeight || aFormat) {
        this.width = aWidth || 1;
        this.height = aHeight || 1;
        var canvas = this.sourceImg = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        var imageData = this.imageData = canvas.getContext("2d").createImageData(this.width, this.height);
        this.format = aFormat === 2 || aFormat === 4 ? aFormat : 1;
        if (this.format === 1) for (var i = 3, data = this.imageData.data, len = data.length; i < len; i += 4) data[i] = 255;
        this.__isDirty = true;
        this.updatePixels()
      } else {
        this.width = 0;
        this.height = 0;
        this.imageData = utilityContext2d.createImageData(1, 1);
        this.format = 2
      }
      this.pixels = buildPixelsObject(this)
    };
    PImage.prototype = {
      __isPImage: true,
      updatePixels: function() {
        var canvas = this.sourceImg;
        if (canvas && canvas instanceof HTMLCanvasElement && this.__isDirty) canvas.getContext("2d").putImageData(this.imageData, 0, 0);
        this.__isDirty = false
      },
      fromHTMLImageData: function(htmlImg) {
        var canvasData = getCanvasData(htmlImg);
        try {
          var imageData = canvasData.context.getImageData(0, 0, htmlImg.width, htmlImg.height);
          this.fromImageData(imageData)
        } catch(e) {
          if (htmlImg.width && htmlImg.height) {
            this.isRemote = true;
            this.width = htmlImg.width;
            this.height = htmlImg.height
          }
        }
        this.sourceImg = htmlImg
      },
      "get": function(x, y, w, h) {
        if (!arguments.length) return p.get(this);
        if (arguments.length === 2) return p.get(x, y, this);
        if (arguments.length === 4) return p.get(x, y, w, h, this)
      },
      "set": function(x, y, c) {
        p.set(x, y, c, this);
        this.__isDirty = true
      },
      blend: function(srcImg, x, y, width, height, dx, dy, dwidth, dheight, MODE) {
        if (arguments.length === 9) p.blend(this, srcImg, x, y, width, height, dx, dy, dwidth, dheight, this);
        else if (arguments.length === 10) p.blend(srcImg, x, y, width, height, dx, dy, dwidth, dheight, MODE, this);
        delete this.sourceImg
      },
      copy: function(srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
        if (arguments.length === 8) p.blend(this, srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, 0, this);
        else if (arguments.length === 9) p.blend(srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, dheight, 0, this);
        delete this.sourceImg
      },
      filter: function(mode, param) {
        if (arguments.length === 2) p.filter(mode, param, this);
        else if (arguments.length === 1) p.filter(mode, null, this);
        delete this.sourceImg
      },
      save: function(file) {
        p.save(file, this)
      },
      resize: function(w, h) {
        if (this.isRemote) throw "Image is loaded remotely. Cannot resize.";
        if (this.width !== 0 || this.height !== 0) {
          if (w === 0 && h !== 0) w = Math.floor(this.width / this.height * h);
          else if (h === 0 && w !== 0) h = Math.floor(this.height / this.width * w);
          var canvas = getCanvasData(this.imageData).canvas;
          var imageData = getCanvasData(canvas, w, h).context.getImageData(0, 0, w, h);
          this.fromImageData(imageData)
        }
      },
      mask: function(mask) {
        var obj = this.toImageData(),
          i, size;
        if (mask instanceof PImage || mask.__isPImage) if (mask.width === this.width && mask.height === this.height) {
          mask = mask.toImageData();
          for (i = 2, size = this.width * this.height * 4; i < size; i += 4) obj.data[i + 1] = mask.data[i]
        } else throw "mask must have the same dimensions as PImage.";
        else if (mask instanceof
        Array) if (this.width * this.height === mask.length) for (i = 0, size = mask.length; i < size; ++i) obj.data[i * 4 + 3] = mask[i];
        else throw "mask array must be the same length as PImage pixels array.";
        this.fromImageData(obj)
      },
      loadPixels: nop,
      toImageData: function() {
        if (this.isRemote) return this.sourceImg;
        if (!this.__isDirty) return this.imageData;
        var canvasData = getCanvasData(this.sourceImg);
        return canvasData.context.getImageData(0, 0, this.width, this.height)
      },
      toDataURL: function() {
        if (this.isRemote) throw "Image is loaded remotely. Cannot create dataURI.";
        var canvasData = getCanvasData(this.imageData);
        return canvasData.canvas.toDataURL()
      },
      fromImageData: function(canvasImg) {
        var w = canvasImg.width,
          h = canvasImg.height,
          canvas = document.createElement("canvas"),
          ctx = canvas.getContext("2d");
        this.width = canvas.width = w;
        this.height = canvas.height = h;
        ctx.putImageData(canvasImg, 0, 0);
        this.format = 2;
        this.imageData = canvasImg;
        this.sourceImg = canvas
      }
    };
    p.PImage = PImage;
    p.createImage = function(w, h, mode) {
      return new PImage(w, h, mode)
    };
    p.loadImage = function(file, type, callback) {
      if (type) file = file + "." + type;
      var pimg;
      if (curSketch.imageCache.images[file]) {
        pimg = new PImage(curSketch.imageCache.images[file]);
        pimg.loaded = true;
        return pimg
      }
      pimg = new PImage;
      var img = document.createElement("img");
      pimg.sourceImg = img;
      img.onload = function(aImage, aPImage, aCallback) {
        var image = aImage;
        var pimg = aPImage;
        var callback = aCallback;
        return function() {
          pimg.fromHTMLImageData(image);
          pimg.loaded = true;
          if (callback) callback()
        }
      }(img, pimg, callback);
      img.src = file;
      return pimg
    };
    p.requestImage = p.loadImage;

    function get$2(x, y) {
      var data;
      if (x >= p.width || x < 0 || y < 0 || y >= p.height) return 0;
      if (isContextReplaced) {
        var offset = ((0 | x) + p.width * (0 | y)) * 4;
        data = p.imageData.data;
        return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
      }
      data = p.toImageData(0 | x, 0 | y, 1, 1).data;
      return (data[3] & 255) << 24 | (data[0] & 255) << 16 | (data[1] & 255) << 8 | data[2] & 255
    }
    function get$3(x, y, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot get x,y.";
      var offset = y * img.width * 4 + x * 4,
        data = img.imageData.data;
      return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
    }
    function get$4(x, y, w, h) {
      var c = new PImage(w, h, 2);
      c.fromImageData(p.toImageData(x, y, w, h));
      return c
    }
    function get$5(x, y, w, h, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot get x,y,w,h.";
      var c = new PImage(w, h, 2),
        cData = c.imageData.data,
        imgWidth = img.width,
        imgHeight = img.height,
        imgData = img.imageData.data;
      var startRow = Math.max(0, -y),
        startColumn = Math.max(0, -x),
        stopRow = Math.min(h, imgHeight - y),
        stopColumn = Math.min(w, imgWidth - x);
      for (var i = startRow; i < stopRow; ++i) {
        var sourceOffset = ((y + i) * imgWidth + (x + startColumn)) * 4;
        var targetOffset = (i * w + startColumn) * 4;
        for (var j = startColumn; j < stopColumn; ++j) {
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++]
        }
      }
      c.__isDirty = true;
      return c
    }
    p.get = function(x, y, w, h, img) {
      if (img !== undefined) return get$5(x, y, w, h, img);
      if (h !== undefined) return get$4(x, y, w, h);
      if (w !== undefined) return get$3(x, y, w);
      if (y !== undefined) return get$2(x, y);
      if (x !== undefined) return get$5(0, 0, x.width, x.height, x);
      return get$4(0, 0, p.width, p.height)
    };
    p.createGraphics = function(w, h, render) {
      var pg = new Processing;
      pg.size(w, h, render);
      pg.background(0, 0);
      return pg
    };

    function resetContext() {
      if (isContextReplaced) {
        curContext = originalContext;
        isContextReplaced = false;
        p.updatePixels()
      }
    }

    function SetPixelContextWrapper() {
      function wrapFunction(newContext, name) {
        function wrapper() {
          resetContext();
          curContext[name].apply(curContext, arguments)
        }
        newContext[name] = wrapper
      }
      function wrapProperty(newContext, name) {
        function getter() {
          resetContext();
          return curContext[name]
        }
        function setter(value) {
          resetContext();
          curContext[name] = value
        }
        p.defineProperty(newContext, name, {
          get: getter,
          set: setter
        })
      }
      for (var n in curContext) if (typeof curContext[n] === "function") wrapFunction(this, n);
      else wrapProperty(this, n)
    }
    function replaceContext() {
      if (isContextReplaced) return;
      p.loadPixels();
      if (proxyContext === null) {
        originalContext = curContext;
        proxyContext = new SetPixelContextWrapper
      }
      isContextReplaced = true;
      curContext = proxyContext;
      setPixelsCached = 0
    }
    function set$3(x, y, c) {
      if (x < p.width && x >= 0 && y >= 0 && y < p.height) {
        replaceContext();
        p.pixels.setPixel((0 | x) + p.width * (0 | y), c);
        if (++setPixelsCached > maxPixelsCached) resetContext()
      }
    }
    function set$4(x, y, obj, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot set x,y.";
      var c = p.color.toArray(obj);
      var offset = y * img.width * 4 + x * 4;
      var data = img.imageData.data;
      data[offset] = c[0];
      data[offset + 1] = c[1];
      data[offset + 2] = c[2];
      data[offset + 3] = c[3]
    }
    p.set = function(x, y, obj, img) {
      var color, oldFill;
      if (arguments.length === 3) if (typeof obj === "number") set$3(x, y, obj);
      else {
        if (obj instanceof PImage || obj.__isPImage) p.image(obj, x, y)
      } else if (arguments.length === 4) set$4(x, y, obj, img)
    };
    p.imageData = {};
    p.pixels = {
      getLength: function() {
        return p.imageData.data.length ? p.imageData.data.length / 4 : 0
      },
      getPixel: function(i) {
        var offset = i * 4,
          data = p.imageData.data;
        return data[offset + 3] << 24 & 4278190080 | data[offset + 0] << 16 & 16711680 | data[offset + 1] << 8 & 65280 | data[offset + 2] & 255
      },
      setPixel: function(i, c) {
        var offset = i * 4,
          data = p.imageData.data;
        data[offset + 0] = (c & 16711680) >>> 16;
        data[offset + 1] = (c & 65280) >>> 8;
        data[offset + 2] = c & 255;
        data[offset + 3] = (c & 4278190080) >>> 24
      },
      toArray: function() {
        var arr = [],
          length = p.imageData.width * p.imageData.height,
          data = p.imageData.data;
        for (var i = 0, offset = 0; i < length; i++, offset += 4) arr.push(data[offset + 3] << 24 & 4278190080 | data[offset + 0] << 16 & 16711680 | data[offset + 1] << 8 & 65280 | data[offset + 2] & 255);
        return arr
      },
      set: function(arr) {
        for (var i = 0, aL = arr.length; i < aL; i++) this.setPixel(i, arr[i])
      }
    };
    p.loadPixels = function() {
      p.imageData = drawing.$ensureContext().getImageData(0, 0, p.width, p.height)
    };
    p.updatePixels = function() {
      if (p.imageData) drawing.$ensureContext().putImageData(p.imageData, 0, 0)
    };
    p.hint = function(which) {
      var curContext = drawing.$ensureContext();
      if (which === 4) {
        curContext.disable(curContext.DEPTH_TEST);
        curContext.depthMask(false);
        curContext.clear(curContext.DEPTH_BUFFER_BIT)
      } else if (which === -4) {
        curContext.enable(curContext.DEPTH_TEST);
        curContext.depthMask(true)
      } else if (which === -1 || which === 2) renderSmooth = true;
      else if (which === 1) renderSmooth = false
    };
    var backgroundHelper = function(arg1, arg2, arg3, arg4) {
      var obj;
      if (arg1 instanceof PImage || arg1.__isPImage) {
        obj = arg1;
        if (!obj.loaded) throw "Error using image in background(): PImage not loaded.";
        if (obj.width !== p.width || obj.height !== p.height) throw "Background image must be the same dimensions as the canvas.";
      } else obj = p.color(arg1, arg2, arg3, arg4);
      backgroundObj = obj
    };
    Drawing2D.prototype.background = function(arg1, arg2, arg3, arg4) {
      if (arg1 !== undef) backgroundHelper(arg1, arg2, arg3, arg4);
      if (backgroundObj instanceof PImage || backgroundObj.__isPImage) {
        saveContext();
        curContext.setTransform(1, 0, 0, 1, 0, 0);
        p.image(backgroundObj, 0, 0);
        restoreContext()
      } else {
        saveContext();
        curContext.setTransform(1, 0, 0, 1, 0, 0);
        if (p.alpha(backgroundObj) !== colorModeA) curContext.clearRect(0, 0, p.width, p.height);
        curContext.fillStyle = p.color.toString(backgroundObj);
        curContext.fillRect(0, 0, p.width, p.height);
        isFillDirty = true;
        restoreContext()
      }
    };
    Drawing3D.prototype.background = function(arg1, arg2, arg3, arg4) {
      if (arguments.length > 0) backgroundHelper(arg1, arg2, arg3, arg4);
      var c = p.color.toGLArray(backgroundObj);
      curContext.clearColor(c[0], c[1], c[2], c[3]);
      curContext.clear(curContext.COLOR_BUFFER_BIT | curContext.DEPTH_BUFFER_BIT)
    };
    Drawing2D.prototype.image = function(img, x, y, w, h) {
      x = Math.round(x);
      y = Math.round(y);
      if (img.width > 0) {
        var wid = w || img.width;
        var hgt = h || img.height;
        var bounds = imageModeConvert(x || 0, y || 0, w || img.width, h || img.height, arguments.length < 4);
        var fastImage = !!img.sourceImg && curTint === null;
        if (fastImage) {
          var htmlElement = img.sourceImg;
          if (img.__isDirty) img.updatePixels();
          curContext.drawImage(htmlElement, 0, 0, htmlElement.width, htmlElement.height, bounds.x, bounds.y, bounds.w, bounds.h)
        } else {
          var obj = img.toImageData();
          if (curTint !== null) {
            curTint(obj);
            img.__isDirty = true
          }
          curContext.drawImage(getCanvasData(obj).canvas, 0, 0, img.width, img.height, bounds.x, bounds.y, bounds.w, bounds.h)
        }
      }
    };
    Drawing3D.prototype.image = function(img, x, y, w, h) {
      if (img.width > 0) {
        x = Math.round(x);
        y = Math.round(y);
        w = w || img.width;
        h = h || img.height;
        p.beginShape(p.QUADS);
        p.texture(img);
        p.vertex(x, y, 0, 0, 0);
        p.vertex(x, y + h, 0, 0, h);
        p.vertex(x + w, y + h, 0, w, h);
        p.vertex(x + w, y, 0, w, 0);
        p.endShape()
      }
    };
    p.tint = function(a1, a2, a3, a4) {
      var tintColor = p.color(a1, a2, a3, a4);
      var r = p.red(tintColor) / colorModeX;
      var g = p.green(tintColor) / colorModeY;
      var b = p.blue(tintColor) / colorModeZ;
      var a = p.alpha(tintColor) / colorModeA;
      curTint = function(obj) {
        var data = obj.data,
          length = 4 * obj.width * obj.height;
        for (var i = 0; i < length;) {
          data[i++] *= r;
          data[i++] *= g;
          data[i++] *= b;
          data[i++] *= a
        }
      };
      curTint3d = function(data) {
        for (var i = 0; i < data.length;) {
          data[i++] = r;
          data[i++] = g;
          data[i++] = b;
          data[i++] = a
        }
      }
    };
    p.noTint = function() {
      curTint = null;
      curTint3d = null
    };
    p.copy = function(src, sx, sy, sw, sh, dx, dy, dw, dh) {
      if (dh === undef) {
        dh = dw;
        dw = dy;
        dy = dx;
        dx = sh;
        sh = sw;
        sw = sy;
        sy = sx;
        sx = src;
        src = p
      }
      p.blend(src, sx, sy, sw, sh, dx, dy, dw, dh, 0)
    };
    p.blend = function(src, sx, sy, sw, sh, dx, dy, dw, dh, mode, pimgdest) {
      if (src.isRemote) throw "Image is loaded remotely. Cannot blend image.";
      if (mode === undef) {
        mode = dh;
        dh = dw;
        dw = dy;
        dy = dx;
        dx = sh;
        sh = sw;
        sw = sy;
        sy = sx;
        sx = src;
        src = p
      }
      var sx2 = sx + sw,
        sy2 = sy + sh,
        dx2 = dx + dw,
        dy2 = dy + dh,
        dest = pimgdest || p;
      if (pimgdest === undef || mode === undef) p.loadPixels();
      src.loadPixels();
      if (src === p && p.intersect(sx, sy, sx2, sy2, dx, dy, dx2, dy2)) p.blit_resize(p.get(sx, sy, sx2 - sx, sy2 - sy), 0, 0, sx2 - sx - 1, sy2 - sy - 1, dest.imageData.data, dest.width, dest.height, dx, dy, dx2, dy2, mode);
      else p.blit_resize(src, sx, sy, sx2, sy2, dest.imageData.data, dest.width, dest.height, dx, dy, dx2, dy2, mode);
      if (pimgdest === undef) p.updatePixels()
    };
    var buildBlurKernel = function(r) {
      var radius = p.floor(r * 3.5),
        i, radiusi;
      radius = radius < 1 ? 1 : radius < 248 ? radius : 248;
      if (p.shared.blurRadius !== radius) {
        p.shared.blurRadius = radius;
        p.shared.blurKernelSize = 1 + (p.shared.blurRadius << 1);
        p.shared.blurKernel = new Float32Array(p.shared.blurKernelSize);
        var sharedBlurKernal = p.shared.blurKernel;
        var sharedBlurKernelSize = p.shared.blurKernelSize;
        var sharedBlurRadius = p.shared.blurRadius;
        for (i = 0; i < sharedBlurKernelSize; i++) sharedBlurKernal[i] = 0;
        var radiusiSquared = (radius - 1) * (radius - 1);
        for (i = 1; i < radius; i++) sharedBlurKernal[radius + i] = sharedBlurKernal[radiusi] = radiusiSquared;
        sharedBlurKernal[radius] = radius * radius
      }
    };
    var blurARGB = function(r, aImg) {
      var sum, cr, cg, cb, ca, c, m;
      var read, ri, ym, ymi, bk0;
      var wh = aImg.pixels.getLength();
      var r2 = new Float32Array(wh);
      var g2 = new Float32Array(wh);
      var b2 = new Float32Array(wh);
      var a2 = new Float32Array(wh);
      var yi = 0;
      var x, y, i, offset;
      buildBlurKernel(r);
      var aImgHeight = aImg.height;
      var aImgWidth = aImg.width;
      var sharedBlurKernelSize = p.shared.blurKernelSize;
      var sharedBlurRadius = p.shared.blurRadius;
      var sharedBlurKernal = p.shared.blurKernel;
      var pix = aImg.imageData.data;
      for (y = 0; y < aImgHeight; y++) {
        for (x = 0; x < aImgWidth; x++) {
          cb = cg = cr = ca = sum = 0;
          read = x - sharedBlurRadius;
          if (read < 0) {
            bk0 = -read;
            read = 0
          } else {
            if (read >= aImgWidth) break;
            bk0 = 0
          }
          for (i = bk0; i < sharedBlurKernelSize; i++) {
            if (read >= aImgWidth) break;
            offset = (read + yi) * 4;
            m = sharedBlurKernal[i];
            ca += m * pix[offset + 3];
            cr += m * pix[offset];
            cg += m * pix[offset + 1];
            cb += m * pix[offset + 2];
            sum += m;
            read++
          }
          ri = yi + x;
          a2[ri] = ca / sum;
          r2[ri] = cr / sum;
          g2[ri] = cg / sum;
          b2[ri] = cb / sum
        }
        yi += aImgWidth
      }
      yi = 0;
      ym = -sharedBlurRadius;
      ymi = ym * aImgWidth;
      for (y = 0; y < aImgHeight; y++) {
        for (x = 0; x < aImgWidth; x++) {
          cb = cg = cr = ca = sum = 0;
          if (ym < 0) {
            bk0 = ri = -ym;
            read = x
          } else {
            if (ym >= aImgHeight) break;
            bk0 = 0;
            ri = ym;
            read = x + ymi
          }
          for (i = bk0; i < sharedBlurKernelSize; i++) {
            if (ri >= aImgHeight) break;
            m = sharedBlurKernal[i];
            ca += m * a2[read];
            cr += m * r2[read];
            cg += m * g2[read];
            cb += m * b2[read];
            sum += m;
            ri++;
            read += aImgWidth
          }
          offset = (x + yi) * 4;
          pix[offset] = cr / sum;
          pix[offset + 1] = cg / sum;
          pix[offset + 2] = cb / sum;
          pix[offset + 3] = ca / sum
        }
        yi += aImgWidth;
        ymi += aImgWidth;
        ym++
      }
    };
    var dilate = function(isInverted, aImg) {
      var currIdx = 0;
      var maxIdx = aImg.pixels.getLength();
      var out = new Int32Array(maxIdx);
      var currRowIdx, maxRowIdx, colOrig, colOut, currLum;
      var idxRight, idxLeft, idxUp, idxDown, colRight, colLeft, colUp, colDown, lumRight, lumLeft, lumUp, lumDown;
      if (!isInverted) while (currIdx < maxIdx) {
        currRowIdx = currIdx;
        maxRowIdx = currIdx + aImg.width;
        while (currIdx < maxRowIdx) {
          colOrig = colOut = aImg.pixels.getPixel(currIdx);
          idxLeft = currIdx - 1;
          idxRight = currIdx + 1;
          idxUp = currIdx - aImg.width;
          idxDown = currIdx + aImg.width;
          if (idxLeft < currRowIdx) idxLeft = currIdx;
          if (idxRight >= maxRowIdx) idxRight = currIdx;
          if (idxUp < 0) idxUp = 0;
          if (idxDown >= maxIdx) idxDown = currIdx;
          colUp = aImg.pixels.getPixel(idxUp);
          colLeft = aImg.pixels.getPixel(idxLeft);
          colDown = aImg.pixels.getPixel(idxDown);
          colRight = aImg.pixels.getPixel(idxRight);
          currLum = 77 * (colOrig >> 16 & 255) + 151 * (colOrig >> 8 & 255) + 28 * (colOrig & 255);
          lumLeft = 77 * (colLeft >> 16 & 255) + 151 * (colLeft >> 8 & 255) + 28 * (colLeft & 255);
          lumRight = 77 * (colRight >> 16 & 255) + 151 * (colRight >> 8 & 255) + 28 * (colRight & 255);
          lumUp = 77 * (colUp >> 16 & 255) + 151 * (colUp >> 8 & 255) + 28 * (colUp & 255);
          lumDown = 77 * (colDown >> 16 & 255) + 151 * (colDown >> 8 & 255) + 28 * (colDown & 255);
          if (lumLeft > currLum) {
            colOut = colLeft;
            currLum = lumLeft
          }
          if (lumRight > currLum) {
            colOut = colRight;
            currLum = lumRight
          }
          if (lumUp > currLum) {
            colOut = colUp;
            currLum = lumUp
          }
          if (lumDown > currLum) {
            colOut = colDown;
            currLum = lumDown
          }
          out[currIdx++] = colOut
        }
      } else while (currIdx < maxIdx) {
        currRowIdx = currIdx;
        maxRowIdx = currIdx + aImg.width;
        while (currIdx < maxRowIdx) {
          colOrig = colOut = aImg.pixels.getPixel(currIdx);
          idxLeft = currIdx - 1;
          idxRight = currIdx + 1;
          idxUp = currIdx - aImg.width;
          idxDown = currIdx + aImg.width;
          if (idxLeft < currRowIdx) idxLeft = currIdx;
          if (idxRight >= maxRowIdx) idxRight = currIdx;
          if (idxUp < 0) idxUp = 0;
          if (idxDown >= maxIdx) idxDown = currIdx;
          colUp = aImg.pixels.getPixel(idxUp);
          colLeft = aImg.pixels.getPixel(idxLeft);
          colDown = aImg.pixels.getPixel(idxDown);
          colRight = aImg.pixels.getPixel(idxRight);
          currLum = 77 * (colOrig >> 16 & 255) + 151 * (colOrig >> 8 & 255) + 28 * (colOrig & 255);
          lumLeft = 77 * (colLeft >> 16 & 255) + 151 * (colLeft >> 8 & 255) + 28 * (colLeft & 255);
          lumRight = 77 * (colRight >> 16 & 255) + 151 * (colRight >> 8 & 255) + 28 * (colRight & 255);
          lumUp = 77 * (colUp >> 16 & 255) + 151 * (colUp >> 8 & 255) + 28 * (colUp & 255);
          lumDown = 77 * (colDown >> 16 & 255) + 151 * (colDown >> 8 & 255) + 28 * (colDown & 255);
          if (lumLeft < currLum) {
            colOut = colLeft;
            currLum = lumLeft
          }
          if (lumRight < currLum) {
            colOut = colRight;
            currLum = lumRight
          }
          if (lumUp < currLum) {
            colOut = colUp;
            currLum = lumUp
          }
          if (lumDown < currLum) {
            colOut = colDown;
            currLum = lumDown
          }
          out[currIdx++] = colOut
        }
      }
      aImg.pixels.set(out)
    };
    p.filter = function(kind, param, aImg) {
      var img, col, lum, i;
      if (arguments.length === 3) {
        aImg.loadPixels();
        img = aImg
      } else {
        p.loadPixels();
        img = p
      }
      if (param === undef) param = null;
      if (img.isRemote) throw "Image is loaded remotely. Cannot filter image.";
      var imglen = img.pixels.getLength();
      switch (kind) {
      case 11:
        var radius = param || 1;
        blurARGB(radius, img);
        break;
      case 12:
        if (img.format === 4) {
          for (i = 0; i < imglen; i++) {
            col = 255 - img.pixels.getPixel(i);
            img.pixels.setPixel(i, 4278190080 | col << 16 | col << 8 | col)
          }
          img.format = 1
        } else for (i = 0; i < imglen; i++) {
          col = img.pixels.getPixel(i);
          lum = 77 * (col >> 16 & 255) + 151 * (col >> 8 & 255) + 28 * (col & 255) >> 8;
          img.pixels.setPixel(i, col & 4278190080 | lum << 16 | lum << 8 | lum)
        }
        break;
      case 13:
        for (i = 0; i < imglen; i++) img.pixels.setPixel(i, img.pixels.getPixel(i) ^ 16777215);
        break;
      case 15:
        if (param === null) throw "Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
        var levels = p.floor(param);
        if (levels < 2 || levels > 255) throw "Levels must be between 2 and 255 for filter(POSTERIZE, levels)";
        var levels1 = levels - 1;
        for (i = 0; i < imglen; i++) {
          var rlevel = img.pixels.getPixel(i) >> 16 & 255;
          var glevel = img.pixels.getPixel(i) >> 8 & 255;
          var blevel = img.pixels.getPixel(i) & 255;
          rlevel = (rlevel * levels >> 8) * 255 / levels1;
          glevel = (glevel * levels >> 8) * 255 / levels1;
          blevel = (blevel * levels >> 8) * 255 / levels1;
          img.pixels.setPixel(i, 4278190080 & img.pixels.getPixel(i) | rlevel << 16 | glevel << 8 | blevel)
        }
        break;
      case 14:
        for (i = 0; i < imglen; i++) img.pixels.setPixel(i, img.pixels.getPixel(i) | 4278190080);
        img.format = 1;
        break;
      case 16:
        if (param === null) param = 0.5;
        if (param < 0 || param > 1) throw "Level must be between 0 and 1 for filter(THRESHOLD, level)";
        var thresh = p.floor(param * 255);
        for (i = 0; i < imglen; i++) {
          var max = p.max((img.pixels.getPixel(i) & 16711680) >> 16, p.max((img.pixels.getPixel(i) & 65280) >> 8, img.pixels.getPixel(i) & 255));
          img.pixels.setPixel(i, img.pixels.getPixel(i) & 4278190080 | (max < thresh ? 0 : 16777215))
        }
        break;
      case 17:
        dilate(true, img);
        break;
      case 18:
        dilate(false, img);
        break
      }
      img.updatePixels()
    };
    p.shared = {
      fracU: 0,
      ifU: 0,
      fracV: 0,
      ifV: 0,
      u1: 0,
      u2: 0,
      v1: 0,
      v2: 0,
      sX: 0,
      sY: 0,
      iw: 0,
      iw1: 0,
      ih1: 0,
      ul: 0,
      ll: 0,
      ur: 0,
      lr: 0,
      cUL: 0,
      cLL: 0,
      cUR: 0,
      cLR: 0,
      srcXOffset: 0,
      srcYOffset: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      srcBuffer: null,
      blurRadius: 0,
      blurKernelSize: 0,
      blurKernel: null
    };
    p.intersect = function(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2) {
      var sw = sx2 - sx1 + 1;
      var sh = sy2 - sy1 + 1;
      var dw = dx2 - dx1 + 1;
      var dh = dy2 - dy1 + 1;
      if (dx1 < sx1) {
        dw += dx1 - sx1;
        if (dw > sw) dw = sw
      } else {
        var w = sw + sx1 - dx1;
        if (dw > w) dw = w
      }
      if (dy1 < sy1) {
        dh += dy1 - sy1;
        if (dh > sh) dh = sh
      } else {
        var h = sh + sy1 - dy1;
        if (dh > h) dh = h
      }
      return ! (dw <= 0 || dh <= 0)
    };
    var blendFuncs = {};
    blendFuncs[1] = p.modes.blend;
    blendFuncs[2] = p.modes.add;
    blendFuncs[4] = p.modes.subtract;
    blendFuncs[8] = p.modes.lightest;
    blendFuncs[16] = p.modes.darkest;
    blendFuncs[0] = p.modes.replace;
    blendFuncs[32] = p.modes.difference;
    blendFuncs[64] = p.modes.exclusion;
    blendFuncs[128] = p.modes.multiply;
    blendFuncs[256] = p.modes.screen;
    blendFuncs[512] = p.modes.overlay;
    blendFuncs[1024] = p.modes.hard_light;
    blendFuncs[2048] = p.modes.soft_light;
    blendFuncs[4096] = p.modes.dodge;
    blendFuncs[8192] = p.modes.burn;
    p.blit_resize = function(img, srcX1, srcY1, srcX2, srcY2, destPixels, screenW, screenH, destX1, destY1, destX2, destY2, mode) {
      var x, y;
      if (srcX1 < 0) srcX1 = 0;
      if (srcY1 < 0) srcY1 = 0;
      if (srcX2 >= img.width) srcX2 = img.width - 1;
      if (srcY2 >= img.height) srcY2 = img.height - 1;
      var srcW = srcX2 - srcX1;
      var srcH = srcY2 - srcY1;
      var destW = destX2 - destX1;
      var destH = destY2 - destY1;
      if (destW <= 0 || destH <= 0 || srcW <= 0 || srcH <= 0 || destX1 >= screenW || destY1 >= screenH || srcX1 >= img.width || srcY1 >= img.height) return;
      var dx = Math.floor(srcW / destW * 32768);
      var dy = Math.floor(srcH / destH * 32768);
      var pshared = p.shared;
      pshared.srcXOffset = Math.floor(destX1 < 0 ? -destX1 * dx : srcX1 * 32768);
      pshared.srcYOffset = Math.floor(destY1 < 0 ? -destY1 * dy : srcY1 * 32768);
      if (destX1 < 0) {
        destW += destX1;
        destX1 = 0
      }
      if (destY1 < 0) {
        destH += destY1;
        destY1 = 0
      }
      destW = Math.min(destW, screenW - destX1);
      destH = Math.min(destH, screenH - destY1);
      var destOffset = destY1 * screenW + destX1;
      var destColor;
      pshared.srcBuffer = img.imageData.data;
      pshared.iw = img.width;
      pshared.iw1 = img.width - 1;
      pshared.ih1 = img.height - 1;
      var filterBilinear = p.filter_bilinear,
        filterNewScanline = p.filter_new_scanline,
        blendFunc = blendFuncs[mode],
        blendedColor, idx, cULoffset, cURoffset, cLLoffset, cLRoffset, ALPHA_MASK = 4278190080,
        RED_MASK = 16711680,
        GREEN_MASK = 65280,
        BLUE_MASK = 255,
        PREC_MAXVAL = 32767,
        PRECISIONB = 15,
        PREC_RED_SHIFT = 1,
        PREC_ALPHA_SHIFT = 9,
        srcBuffer = pshared.srcBuffer,
        min = Math.min;
      for (y = 0; y < destH; y++) {
        pshared.sX = pshared.srcXOffset;
        pshared.fracV = pshared.srcYOffset & PREC_MAXVAL;
        pshared.ifV = PREC_MAXVAL - pshared.fracV;
        pshared.v1 = (pshared.srcYOffset >> PRECISIONB) * pshared.iw;
        pshared.v2 = min((pshared.srcYOffset >> PRECISIONB) + 1, pshared.ih1) * pshared.iw;
        for (x = 0; x < destW; x++) {
          idx = (destOffset + x) * 4;
          destColor = destPixels[idx + 3] << 24 & ALPHA_MASK | destPixels[idx] << 16 & RED_MASK | destPixels[idx + 1] << 8 & GREEN_MASK | destPixels[idx + 2] & BLUE_MASK;
          pshared.fracU = pshared.sX & PREC_MAXVAL;
          pshared.ifU = PREC_MAXVAL - pshared.fracU;
          pshared.ul = pshared.ifU * pshared.ifV >> PRECISIONB;
          pshared.ll = pshared.ifU * pshared.fracV >> PRECISIONB;
          pshared.ur = pshared.fracU * pshared.ifV >> PRECISIONB;
          pshared.lr = pshared.fracU * pshared.fracV >> PRECISIONB;
          pshared.u1 = pshared.sX >> PRECISIONB;
          pshared.u2 = min(pshared.u1 + 1, pshared.iw1);
          cULoffset = (pshared.v1 + pshared.u1) * 4;
          cURoffset = (pshared.v1 + pshared.u2) * 4;
          cLLoffset = (pshared.v2 + pshared.u1) * 4;
          cLRoffset = (pshared.v2 + pshared.u2) * 4;
          pshared.cUL = srcBuffer[cULoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cULoffset] << 16 & RED_MASK | srcBuffer[cULoffset + 1] << 8 & GREEN_MASK | srcBuffer[cULoffset + 2] & BLUE_MASK;
          pshared.cUR = srcBuffer[cURoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cURoffset] << 16 & RED_MASK | srcBuffer[cURoffset + 1] << 8 & GREEN_MASK | srcBuffer[cURoffset + 2] & BLUE_MASK;
          pshared.cLL = srcBuffer[cLLoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cLLoffset] << 16 & RED_MASK | srcBuffer[cLLoffset + 1] << 8 & GREEN_MASK | srcBuffer[cLLoffset + 2] & BLUE_MASK;
          pshared.cLR = srcBuffer[cLRoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cLRoffset] << 16 & RED_MASK | srcBuffer[cLRoffset + 1] << 8 & GREEN_MASK | srcBuffer[cLRoffset + 2] & BLUE_MASK;
          pshared.r = pshared.ul * ((pshared.cUL & RED_MASK) >> 16) + pshared.ll * ((pshared.cLL & RED_MASK) >> 16) + pshared.ur * ((pshared.cUR & RED_MASK) >> 16) + pshared.lr * ((pshared.cLR & RED_MASK) >> 16) << PREC_RED_SHIFT & RED_MASK;
          pshared.g = pshared.ul * (pshared.cUL & GREEN_MASK) + pshared.ll * (pshared.cLL & GREEN_MASK) + pshared.ur * (pshared.cUR & GREEN_MASK) + pshared.lr * (pshared.cLR & GREEN_MASK) >>> PRECISIONB & GREEN_MASK;
          pshared.b = pshared.ul * (pshared.cUL & BLUE_MASK) + pshared.ll * (pshared.cLL & BLUE_MASK) + pshared.ur * (pshared.cUR & BLUE_MASK) + pshared.lr * (pshared.cLR & BLUE_MASK) >>> PRECISIONB;
          pshared.a = pshared.ul * ((pshared.cUL & ALPHA_MASK) >>> 24) + pshared.ll * ((pshared.cLL & ALPHA_MASK) >>> 24) + pshared.ur * ((pshared.cUR & ALPHA_MASK) >>> 24) + pshared.lr * ((pshared.cLR & ALPHA_MASK) >>> 24) << PREC_ALPHA_SHIFT & ALPHA_MASK;
          blendedColor = blendFunc(destColor, pshared.a | pshared.r | pshared.g | pshared.b);
          destPixels[idx] = (blendedColor & RED_MASK) >>> 16;
          destPixels[idx + 1] = (blendedColor & GREEN_MASK) >>> 8;
          destPixels[idx + 2] = blendedColor & BLUE_MASK;
          destPixels[idx + 3] = (blendedColor & ALPHA_MASK) >>> 24;
          pshared.sX += dx
        }
        destOffset += screenW;
        pshared.srcYOffset += dy
      }
    };
    p.loadFont = function(name, size) {
      if (name === undef) throw "font name required in loadFont.";
      if (name.indexOf(".svg") === -1) {
        if (size === undef) size = curTextFont.size;
        return PFont.get(name, size)
      }
      var font = p.loadGlyphs(name);
      return {
        name: name,
        css: "12px sans-serif",
        glyph: true,
        units_per_em: font.units_per_em,
        horiz_adv_x: 1 / font.units_per_em * font.horiz_adv_x,
        ascent: font.ascent,
        descent: font.descent,
        width: function(str) {
          var width = 0;
          var len = str.length;
          for (var i = 0; i < len; i++) try {
            width += parseFloat(p.glyphLook(p.glyphTable[name], str[i]).horiz_adv_x)
          } catch(e) {
            Processing.debug(e)
          }
          return width / p.glyphTable[name].units_per_em
        }
      }
    };
    p.createFont = function(name, size) {
      return p.loadFont(name, size)
    };
    p.textFont = function(pfont, size) {
      if (size !== undef) {
        if (!pfont.glyph) pfont = PFont.get(pfont.name, size);
        curTextSize = size
      }
      curTextFont = pfont;
      curFontName = curTextFont.name;
      curTextAscent = curTextFont.ascent;
      curTextDescent = curTextFont.descent;
      curTextLeading = curTextFont.leading;
      var curContext = drawing.$ensureContext();
      curContext.font = curTextFont.css
    };
    p.textSize = function(size) {
      curTextFont = PFont.get(curFontName, size);
      curTextSize = size;
      curTextAscent = curTextFont.ascent;
      curTextDescent = curTextFont.descent;
      curTextLeading = curTextFont.leading;
      var curContext = drawing.$ensureContext();
      curContext.font = curTextFont.css
    };
    p.textAscent = function() {
      return curTextAscent
    };
    p.textDescent = function() {
      return curTextDescent
    };
    p.textLeading = function(leading) {
      curTextLeading = leading
    };
    p.textAlign = function(xalign, yalign) {
      horizontalTextAlignment = xalign;
      verticalTextAlignment = yalign || 0
    };

    function toP5String(obj) {
      if (obj instanceof String) return obj;
      if (typeof obj === "number") {
        if (obj === (0 | obj)) return obj.toString();
        return p.nf(obj, 0, 3)
      }
      if (obj === null || obj === undef) return "";
      return obj.toString()
    }
    Drawing2D.prototype.textWidth = function(str) {
      var lines = toP5String(str).split(/\r?\n/g),
        width = 0;
      var i, linesCount = lines.length;
      curContext.font = curTextFont.css;
      for (i = 0; i < linesCount; ++i) width = Math.max(width, curTextFont.measureTextWidth(lines[i]));
      return width | 0
    };
    Drawing3D.prototype.textWidth = function(str) {
      var lines = toP5String(str).split(/\r?\n/g),
        width = 0;
      var i, linesCount = lines.length;
      if (textcanvas === undef) textcanvas = document.createElement("canvas");
      var textContext = textcanvas.getContext("2d");
      textContext.font = curTextFont.css;
      for (i = 0; i < linesCount; ++i) width = Math.max(width, textContext.measureText(lines[i]).width);
      return width | 0
    };
    p.glyphLook = function(font, chr) {
      try {
        switch (chr) {
        case "1":
          return font.one;
        case "2":
          return font.two;
        case "3":
          return font.three;
        case "4":
          return font.four;
        case "5":
          return font.five;
        case "6":
          return font.six;
        case "7":
          return font.seven;
        case "8":
          return font.eight;
        case "9":
          return font.nine;
        case "0":
          return font.zero;
        case " ":
          return font.space;
        case "$":
          return font.dollar;
        case "!":
          return font.exclam;
        case '"':
          return font.quotedbl;
        case "#":
          return font.numbersign;
        case "%":
          return font.percent;
        case "&":
          return font.ampersand;
        case "'":
          return font.quotesingle;
        case "(":
          return font.parenleft;
        case ")":
          return font.parenright;
        case "*":
          return font.asterisk;
        case "+":
          return font.plus;
        case ",":
          return font.comma;
        case "-":
          return font.hyphen;
        case ".":
          return font.period;
        case "/":
          return font.slash;
        case "_":
          return font.underscore;
        case ":":
          return font.colon;
        case ";":
          return font.semicolon;
        case "<":
          return font.less;
        case "=":
          return font.equal;
        case ">":
          return font.greater;
        case "?":
          return font.question;
        case "@":
          return font.at;
        case "[":
          return font.bracketleft;
        case "\\":
          return font.backslash;
        case "]":
          return font.bracketright;
        case "^":
          return font.asciicircum;
        case "`":
          return font.grave;
        case "{":
          return font.braceleft;
        case "|":
          return font.bar;
        case "}":
          return font.braceright;
        case "~":
          return font.asciitilde;
        default:
          return font[chr]
        }
      } catch(e) {
        Processing.debug(e)
      }
    };
    Drawing2D.prototype.text$line = function(str, x, y, z, align) {
      var textWidth = 0,
        xOffset = 0;
      if (!curTextFont.glyph) {
        if (str && "fillText" in curContext) {
          if (isFillDirty) {
            curContext.fillStyle = p.color.toString(currentFillColor);
            isFillDirty = false
          }
          if (align === 39 || align === 3) {
            textWidth = curTextFont.measureTextWidth(str);
            if (align === 39) xOffset = -textWidth;
            else xOffset = -textWidth / 2
          }
          curContext.fillText(str, x + xOffset, y)
        }
      } else {
        var font = p.glyphTable[curFontName];
        saveContext();
        curContext.translate(x, y + curTextSize);
        if (align === 39 || align === 3) {
          textWidth = font.width(str);
          if (align === 39) xOffset = -textWidth;
          else xOffset = -textWidth / 2
        }
        var upem = font.units_per_em,
          newScale = 1 / upem * curTextSize;
        curContext.scale(newScale, newScale);
        for (var i = 0, len = str.length; i < len; i++) try {
          p.glyphLook(font, str[i]).draw()
        } catch(e) {
          Processing.debug(e)
        }
        restoreContext()
      }
    };
    Drawing3D.prototype.text$line = function(str, x, y, z, align) {
      if (textcanvas === undef) textcanvas = document.createElement("canvas");
      var oldContext = curContext;
      curContext = textcanvas.getContext("2d");
      curContext.font = curTextFont.css;
      var textWidth = curTextFont.measureTextWidth(str);
      textcanvas.width = textWidth;
      textcanvas.height = curTextSize;
      curContext = textcanvas.getContext("2d");
      curContext.font = curTextFont.css;
      curContext.textBaseline = "top";
      Drawing2D.prototype.text$line(str, 0, 0, 0, 37);
      var aspect = textcanvas.width / textcanvas.height;
      curContext = oldContext;
      curContext.bindTexture(curContext.TEXTURE_2D, textTex);
      curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, textcanvas);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_T, curContext.CLAMP_TO_EDGE);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_S, curContext.CLAMP_TO_EDGE);
      var xOffset = 0;
      if (align === 39) xOffset = -textWidth;
      else if (align === 3) xOffset = -textWidth / 2;
      var model = new PMatrix3D;
      var scalefactor = curTextSize * 0.5;
      model.translate(x + xOffset - scalefactor / 2, y - scalefactor, z);
      model.scale(-aspect * scalefactor, -scalefactor, scalefactor);
      model.translate(-1, -1, -1);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject2D);
      vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, textBuffer);
      vertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord", 2, textureBuffer);
      uniformi("uSampler2d", programObject2D, "uSampler", [0]);
      uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", true);
      uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
      uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
      uniformf("uColor2d", programObject2D, "uColor", fillStyle);
      curContext.bindBuffer(curContext.ELEMENT_ARRAY_BUFFER, indexBuffer);
      curContext.drawElements(curContext.TRIANGLES, 6, curContext.UNSIGNED_SHORT, 0)
    };

    function text$4(str, x, y, z) {
      var lines, linesCount;
      if (str.indexOf("\n") < 0) {
        lines = [str];
        linesCount = 1
      } else {
        lines = str.split(/\r?\n/g);
        linesCount = lines.length
      }
      var yOffset = 0;
      if (verticalTextAlignment === 101) yOffset = curTextAscent + curTextDescent;
      else if (verticalTextAlignment === 3) yOffset = curTextAscent / 2 - (linesCount - 1) * curTextLeading / 2;
      else if (verticalTextAlignment === 102) yOffset = -(curTextDescent + (linesCount - 1) * curTextLeading);
      for (var i = 0; i < linesCount; ++i) {
        var line = lines[i];
        drawing.text$line(line, x, y + yOffset, z, horizontalTextAlignment);
        yOffset += curTextLeading
      }
    }
    function text$6(str, x, y, width, height, z) {
      if (str.length === 0 || width === 0 || height === 0) return;
      if (curTextSize > height) return;
      var spaceMark = -1;
      var start = 0;
      var lineWidth = 0;
      var drawCommands = [];
      for (var charPos = 0, len = str.length; charPos < len; charPos++) {
        var currentChar = str[charPos];
        var spaceChar = currentChar === " ";
        var letterWidth = curTextFont.measureTextWidth(currentChar);
        if (currentChar !== "\n" && lineWidth + letterWidth <= width) {
          if (spaceChar) spaceMark = charPos;
          lineWidth += letterWidth
        } else {
          if (spaceMark + 1 === start) if (charPos > 0) spaceMark = charPos;
          else return;
          if (currentChar === "\n") {
            drawCommands.push({
              text: str.substring(start, charPos),
              width: lineWidth
            });
            start = charPos + 1
          } else {
            drawCommands.push({
              text: str.substring(start, spaceMark + 1),
              width: lineWidth
            });
            start = spaceMark + 1
          }
          lineWidth = 0;
          charPos = start - 1
        }
      }
      if (start < len) drawCommands.push({
        text: str.substring(start),
        width: lineWidth
      });
      var xOffset = 1,
        yOffset = curTextAscent;
      if (horizontalTextAlignment === 3) xOffset = width / 2;
      else if (horizontalTextAlignment === 39) xOffset = width;
      var linesCount = drawCommands.length,
        visibleLines = Math.min(linesCount, Math.floor(height / curTextLeading));
      if (verticalTextAlignment === 101) yOffset = curTextAscent + curTextDescent;
      else if (verticalTextAlignment === 3) yOffset = height / 2 - curTextLeading * (visibleLines / 2 - 1);
      else if (verticalTextAlignment === 102) yOffset = curTextDescent + curTextLeading;
      var command, drawCommand, leading;
      for (command = 0; command < linesCount; command++) {
        leading = command * curTextLeading;
        if (yOffset + leading > height - curTextDescent) break;
        drawCommand = drawCommands[command];
        drawing.text$line(drawCommand.text, x + xOffset, y + yOffset + leading, z, horizontalTextAlignment)
      }
    }
    p.text = function() {
      if (textMode === 5) return;
      if (arguments.length === 3) text$4(toP5String(arguments[0]), arguments[1], arguments[2], 0);
      else if (arguments.length === 4) text$4(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3]);
      else if (arguments.length === 5) text$6(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], 0);
      else if (arguments.length === 6) text$6(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    };
    p.textMode = function(mode) {
      textMode = mode
    };
    p.loadGlyphs = function(url) {
      var x, y, cx, cy, nx, ny, d, a, lastCom, lenC, horiz_adv_x, getXY = "[0-9\\-]+",
        path;
      var regex = function(needle, hay) {
        var i = 0,
          results = [],
          latest, regexp = new RegExp(needle, "g");
        latest = results[i] = regexp.exec(hay);
        while (latest) {
          i++;
          latest = results[i] = regexp.exec(hay)
        }
        return results
      };
      var buildPath = function(d) {
        var c = regex("[A-Za-z][0-9\\- ]+|Z", d);
        var beforePathDraw = function() {
          saveContext();
          return drawing.$ensureContext()
        };
        var afterPathDraw = function() {
          executeContextFill();
          executeContextStroke();
          restoreContext()
        };
        path = "return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";
        x = 0;
        y = 0;
        cx = 0;
        cy = 0;
        nx = 0;
        ny = 0;
        d = 0;
        a = 0;
        lastCom = "";
        lenC = c.length - 1;
        for (var j = 0; j < lenC; j++) {
          var com = c[j][0],
            xy = regex(getXY, com);
          switch (com[0]) {
          case "M":
            x = parseFloat(xy[0][0]);
            y = parseFloat(xy[1][0]);
            path += "curContext.moveTo(" + x + "," + -y + ");";
            break;
          case "L":
            x = parseFloat(xy[0][0]);
            y = parseFloat(xy[1][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "H":
            x = parseFloat(xy[0][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "V":
            y = parseFloat(xy[0][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "T":
            nx = parseFloat(xy[0][0]);
            ny = parseFloat(xy[1][0]);
            if (lastCom === "Q" || lastCom === "T") {
              d = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(cy - y, 2));
              a = Math.PI + Math.atan2(cx - x, cy - y);
              cx = x + Math.sin(a) * d;
              cy = y + Math.cos(a) * d
            } else {
              cx = x;
              cy = y
            }
            path += "curContext.quadraticCurveTo(" + cx + "," + -cy + "," + nx + "," + -ny + ");";
            x = nx;
            y = ny;
            break;
          case "Q":
            cx = parseFloat(xy[0][0]);
            cy = parseFloat(xy[1][0]);
            nx = parseFloat(xy[2][0]);
            ny = parseFloat(xy[3][0]);
            path += "curContext.quadraticCurveTo(" + cx + "," + -cy + "," + nx + "," + -ny + ");";
            x = nx;
            y = ny;
            break;
          case "Z":
            path += "curContext.closePath();";
            break
          }
          lastCom = com[0]
        }
        path += "afterPathDraw();";
        path += "curContext.translate(" + horiz_adv_x + ",0);";
        path += "}}";
        return (new Function("beforePathDraw", "afterPathDraw", path))(beforePathDraw, afterPathDraw)
      };
      var parseSVGFont = function(svg) {
        var font = svg.getElementsByTagName("font");
        p.glyphTable[url].horiz_adv_x = font[0].getAttribute("horiz-adv-x");
        var font_face = svg.getElementsByTagName("font-face")[0];
        p.glyphTable[url].units_per_em = parseFloat(font_face.getAttribute("units-per-em"));
        p.glyphTable[url].ascent = parseFloat(font_face.getAttribute("ascent"));
        p.glyphTable[url].descent = parseFloat(font_face.getAttribute("descent"));
        var glyph = svg.getElementsByTagName("glyph"),
          len = glyph.length;
        for (var i = 0; i < len; i++) {
          var unicode = glyph[i].getAttribute("unicode");
          var name = glyph[i].getAttribute("glyph-name");
          horiz_adv_x = glyph[i].getAttribute("horiz-adv-x");
          if (horiz_adv_x === null) horiz_adv_x = p.glyphTable[url].horiz_adv_x;
          d = glyph[i].getAttribute("d");
          if (d !== undef) {
            path = buildPath(d);
            p.glyphTable[url][name] = {
              name: name,
              unicode: unicode,
              horiz_adv_x: horiz_adv_x,
              draw: path.draw
            }
          }
        }
      };
      var loadXML = function() {
        var xmlDoc;
        try {
          xmlDoc = document.implementation.createDocument("", "", null)
        } catch(e_fx_op) {
          Processing.debug(e_fx_op.message);
          return
        }
        try {
          xmlDoc.async = false;
          xmlDoc.load(url);
          parseSVGFont(xmlDoc.getElementsByTagName("svg")[0])
        } catch(e_sf_ch) {
          Processing.debug(e_sf_ch);
          try {
            var xmlhttp = new window.XMLHttpRequest;
            xmlhttp.open("GET", url, false);
            xmlhttp.send(null);
            parseSVGFont(xmlhttp.responseXML.documentElement)
          } catch(e) {
            Processing.debug(e_sf_ch)
          }
        }
      };
      p.glyphTable[url] = {};
      loadXML(url);
      return p.glyphTable[url]
    };
    p.param = function(name) {
      var attributeName = "data-processing-" + name;
      if (curElement.hasAttribute(attributeName)) return curElement.getAttribute(attributeName);
      for (var i = 0, len = curElement.childNodes.length; i < len; ++i) {
        var item = curElement.childNodes.item(i);
        if (item.nodeType !== 1 || item.tagName.toLowerCase() !== "param") continue;
        if (item.getAttribute("name") === name) return item.getAttribute("value")
      }
      if (curSketch.params.hasOwnProperty(name)) return curSketch.params[name];
      return null
    };

    function wireDimensionalFunctions(mode) {
      if (mode === "3D") drawing = new Drawing3D;
      else if (mode === "2D") drawing = new Drawing2D;
      else drawing = new DrawingPre;
      for (var i in DrawingPre.prototype) if (DrawingPre.prototype.hasOwnProperty(i) && i.indexOf("$") < 0) p[i] = drawing[i];
      drawing.$init()
    }
    function createDrawingPreFunction(name) {
      return function() {
        wireDimensionalFunctions("2D");
        return drawing[name].apply(this, arguments)
      }
    }
    DrawingPre.prototype.translate = createDrawingPreFunction("translate");
    DrawingPre.prototype.transform = createDrawingPreFunction("transform");
    DrawingPre.prototype.scale = createDrawingPreFunction("scale");
    DrawingPre.prototype.pushMatrix = createDrawingPreFunction("pushMatrix");
    DrawingPre.prototype.popMatrix = createDrawingPreFunction("popMatrix");
    DrawingPre.prototype.resetMatrix = createDrawingPreFunction("resetMatrix");
    DrawingPre.prototype.applyMatrix = createDrawingPreFunction("applyMatrix");
    DrawingPre.prototype.rotate = createDrawingPreFunction("rotate");
    DrawingPre.prototype.rotateZ = createDrawingPreFunction("rotateZ");
    DrawingPre.prototype.shearX = createDrawingPreFunction("shearX");
    DrawingPre.prototype.shearY = createDrawingPreFunction("shearY");
    DrawingPre.prototype.redraw = createDrawingPreFunction("redraw");
    DrawingPre.prototype.toImageData = createDrawingPreFunction("toImageData");
    DrawingPre.prototype.ambientLight = createDrawingPreFunction("ambientLight");
    DrawingPre.prototype.directionalLight = createDrawingPreFunction("directionalLight");
    DrawingPre.prototype.lightFalloff = createDrawingPreFunction("lightFalloff");
    DrawingPre.prototype.lightSpecular = createDrawingPreFunction("lightSpecular");
    DrawingPre.prototype.pointLight = createDrawingPreFunction("pointLight");
    DrawingPre.prototype.noLights = createDrawingPreFunction("noLights");
    DrawingPre.prototype.spotLight = createDrawingPreFunction("spotLight");
    DrawingPre.prototype.beginCamera = createDrawingPreFunction("beginCamera");
    DrawingPre.prototype.endCamera = createDrawingPreFunction("endCamera");
    DrawingPre.prototype.frustum = createDrawingPreFunction("frustum");
    DrawingPre.prototype.box = createDrawingPreFunction("box");
    DrawingPre.prototype.sphere = createDrawingPreFunction("sphere");
    DrawingPre.prototype.ambient = createDrawingPreFunction("ambient");
    DrawingPre.prototype.emissive = createDrawingPreFunction("emissive");
    DrawingPre.prototype.shininess = createDrawingPreFunction("shininess");
    DrawingPre.prototype.specular = createDrawingPreFunction("specular");
    DrawingPre.prototype.fill = createDrawingPreFunction("fill");
    DrawingPre.prototype.stroke = createDrawingPreFunction("stroke");
    DrawingPre.prototype.strokeWeight = createDrawingPreFunction("strokeWeight");
    DrawingPre.prototype.smooth = createDrawingPreFunction("smooth");
    DrawingPre.prototype.noSmooth = createDrawingPreFunction("noSmooth");
    DrawingPre.prototype.point = createDrawingPreFunction("point");
    DrawingPre.prototype.vertex = createDrawingPreFunction("vertex");
    DrawingPre.prototype.endShape = createDrawingPreFunction("endShape");
    DrawingPre.prototype.bezierVertex = createDrawingPreFunction("bezierVertex");
    DrawingPre.prototype.curveVertex = createDrawingPreFunction("curveVertex");
    DrawingPre.prototype.curve = createDrawingPreFunction("curve");
    DrawingPre.prototype.line = createDrawingPreFunction("line");
    DrawingPre.prototype.bezier = createDrawingPreFunction("bezier");
    DrawingPre.prototype.rect = createDrawingPreFunction("rect");
    DrawingPre.prototype.ellipse = createDrawingPreFunction("ellipse");
    DrawingPre.prototype.background = createDrawingPreFunction("background");
    DrawingPre.prototype.image = createDrawingPreFunction("image");
    DrawingPre.prototype.textWidth = createDrawingPreFunction("textWidth");
    DrawingPre.prototype.text$line = createDrawingPreFunction("text$line");
    DrawingPre.prototype.$ensureContext = createDrawingPreFunction("$ensureContext");
    DrawingPre.prototype.$newPMatrix = createDrawingPreFunction("$newPMatrix");
    DrawingPre.prototype.size = function(aWidth, aHeight, aMode) {
      wireDimensionalFunctions(aMode === 2 ? "3D" : "2D");
      p.size(aWidth, aHeight, aMode)
    };
    DrawingPre.prototype.$init = nop;
    Drawing2D.prototype.$init = function() {
      p.size(p.width, p.height);
      curContext.lineCap = "round";
      p.noSmooth();
      p.disableContextMenu()
    };
    Drawing3D.prototype.$init = function() {
      p.use3DContext = true;
      p.disableContextMenu()
    };
    DrawingShared.prototype.$ensureContext = function() {
      return curContext
    };

    function calculateOffset(curElement, event) {
      var element = curElement,
        offsetX = 0,
        offsetY = 0;
      p.pmouseX = p.mouseX;
      p.pmouseY = p.mouseY;
      if (element.offsetParent) {
        do {
          offsetX += element.offsetLeft;
          offsetY += element.offsetTop
        } while ( !! (element = element.offsetParent))
      }
      element = curElement;
      do {
        offsetX -= element.scrollLeft || 0;
        offsetY -= element.scrollTop || 0
      } while ( !! (element = element.parentNode));
      offsetX += stylePaddingLeft;
      offsetY += stylePaddingTop;
      offsetX += styleBorderLeft;
      offsetY += styleBorderTop;
      offsetX += window.pageXOffset;
      offsetY += window.pageYOffset;
      return {
        "X": offsetX,
        "Y": offsetY
      }
    }
    function updateMousePosition(curElement, event) {
      var offset = calculateOffset(curElement, event);
      p.mouseX = event.pageX - offset.X;
      p.mouseY = event.pageY - offset.Y
    }
    function addTouchEventOffset(t) {
      var offset = calculateOffset(t.changedTouches[0].target, t.changedTouches[0]),
        i;
      for (i = 0; i < t.touches.length; i++) {
        var touch = t.touches[i];
        touch.offsetX = touch.pageX - offset.X;
        touch.offsetY = touch.pageY - offset.Y
      }
      for (i = 0; i < t.targetTouches.length; i++) {
        var targetTouch = t.targetTouches[i];
        targetTouch.offsetX = targetTouch.pageX - offset.X;
        targetTouch.offsetY = targetTouch.pageY - offset.Y
      }
      for (i = 0; i < t.changedTouches.length; i++) {
        var changedTouch = t.changedTouches[i];
        changedTouch.offsetX = changedTouch.pageX - offset.X;
        changedTouch.offsetY = changedTouch.pageY - offset.Y
      }
      return t
    }
    attachEventHandler(curElement, "touchstart", function(t) {
      curElement.setAttribute("style", "-webkit-user-select: none");
      curElement.setAttribute("onclick", "void(0)");
      curElement.setAttribute("style", "-webkit-tap-highlight-color:rgba(0,0,0,0)");
      for (var i = 0, ehl = eventHandlers.length; i < ehl; i++) {
        var type = eventHandlers[i].type;
        if (type === "mouseout" || type === "mousemove" || type === "mousedown" || type === "mouseup" || type === "DOMMouseScroll" || type === "mousewheel" || type === "touchstart") detachEventHandler(eventHandlers[i])
      }
      if (p.touchStart !== undef || p.touchMove !== undef || p.touchEnd !== undef || p.touchCancel !== undef) {
        attachEventHandler(curElement, "touchstart", function(t) {
          if (p.touchStart !== undef) {
            t = addTouchEventOffset(t);
            p.touchStart(t)
          }
        });
        attachEventHandler(curElement, "touchmove", function(t) {
          if (p.touchMove !== undef) {
            t.preventDefault();
            t = addTouchEventOffset(t);
            p.touchMove(t)
          }
        });
        attachEventHandler(curElement, "touchend", function(t) {
          if (p.touchEnd !== undef) {
            t = addTouchEventOffset(t);
            p.touchEnd(t)
          }
        });
        attachEventHandler(curElement, "touchcancel", function(t) {
          if (p.touchCancel !== undef) {
            t = addTouchEventOffset(t);
            p.touchCancel(t)
          }
        })
      } else {
        attachEventHandler(curElement, "touchstart", function(e) {
          updateMousePosition(curElement, e.touches[0]);
          p.__mousePressed = true;
          p.mouseDragging = false;
          p.mouseButton = 37;
          if (typeof p.mousePressed === "function") p.mousePressed()
        });
        attachEventHandler(curElement, "touchmove", function(e) {
          e.preventDefault();
          updateMousePosition(curElement, e.touches[0]);
          if (typeof p.mouseMoved === "function" && !p.__mousePressed) p.mouseMoved();
          if (typeof p.mouseDragged === "function" && p.__mousePressed) {
            p.mouseDragged();
            p.mouseDragging = true
          }
        });
        attachEventHandler(curElement, "touchend", function(e) {
          p.__mousePressed = false;
          if (typeof p.mouseClicked === "function" && !p.mouseDragging) p.mouseClicked();
          if (typeof p.mouseReleased === "function") p.mouseReleased()
        })
      }
      curElement.dispatchEvent(t)
    });
    (function() {
      var enabled = true,
        contextMenu = function(e) {
        e.preventDefault();
        e.stopPropagation()
      };
      p.disableContextMenu = function() {
        if (!enabled) return;
        attachEventHandler(curElement, "contextmenu", contextMenu);
        enabled = false
      };
      p.enableContextMenu = function() {
        if (enabled) return;
        detachEventHandler({
          elem: curElement,
          type: "contextmenu",
          fn: contextMenu
        });
        enabled = true
      }
    })();
    attachEventHandler(curElement, "mousemove", function(e) {
      updateMousePosition(curElement, e);
      if (typeof p.mouseMoved === "function" && !p.__mousePressed) p.mouseMoved();
      if (typeof p.mouseDragged === "function" && p.__mousePressed) {
        p.mouseDragged();
        p.mouseDragging = true
      }
    });
    attachEventHandler(curElement, "mouseout", function(e) {
      if (typeof p.mouseOut === "function") p.mouseOut()
    });
    attachEventHandler(curElement, "mouseover", function(e) {
      updateMousePosition(curElement, e);
      if (typeof p.mouseOver === "function") p.mouseOver()
    });
    curElement.onmousedown = function() {
      curElement.focus();
      return false
    };
    attachEventHandler(curElement, "mousedown", function(e) {
      p.__mousePressed = true;
      p.mouseDragging = false;
      switch (e.which) {
      case 1:
        p.mouseButton = 37;
        break;
      case 2:
        p.mouseButton = 3;
        break;
      case 3:
        p.mouseButton = 39;
        break
      }
      if (typeof p.mousePressed === "function") p.mousePressed()
    });
    attachEventHandler(curElement, "mouseup", function(e) {
      p.__mousePressed = false;
      if (typeof p.mouseClicked === "function" && !p.mouseDragging) p.mouseClicked();
      if (typeof p.mouseReleased === "function") p.mouseReleased()
    });
    var mouseWheelHandler = function(e) {
      var delta = 0;
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta
      } else if (e.detail) delta = -e.detail / 3;
      p.mouseScroll = delta;
      if (delta && typeof p.mouseScrolled === "function") p.mouseScrolled()
    };
    attachEventHandler(document, "DOMMouseScroll", mouseWheelHandler);
    attachEventHandler(document, "mousewheel", mouseWheelHandler);
    if (!curElement.getAttribute("tabindex")) curElement.setAttribute("tabindex", 0);

    function getKeyCode(e) {
      var code = e.which || e.keyCode;
      switch (code) {
      case 13:
        return 10;
      case 91:
      case 93:
      case 224:
        return 157;
      case 57392:
        return 17;
      case 46:
        return 127;
      case 45:
        return 155
      }
      return code
    }
    function getKeyChar(e) {
      var c = e.which || e.keyCode;
      var anyShiftPressed = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
      switch (c) {
      case 13:
        c = anyShiftPressed ? 13 : 10;
        break;
      case 8:
        c = anyShiftPressed ? 127 : 8;
        break
      }
      return new Char(c)
    }
    function suppressKeyEvent(e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      else if (typeof e.stopPropagation === "function") e.stopPropagation();
      return false
    }
    function updateKeyPressed() {
      var ch;
      for (ch in pressedKeysMap) if (pressedKeysMap.hasOwnProperty(ch)) {
        p.__keyPressed = true;
        return
      }
      p.__keyPressed = false
    }
    function resetKeyPressed() {
      p.__keyPressed = false;
      pressedKeysMap = [];
      lastPressedKeyCode = null
    }
    function simulateKeyTyped(code, c) {
      pressedKeysMap[code] = c;
      lastPressedKeyCode = null;
      p.key = c;
      p.keyCode = code;
      p.keyPressed();
      p.keyCode = 0;
      p.keyTyped();
      updateKeyPressed()
    }
    function handleKeydown(e) {
      var code = getKeyCode(e);
      if (code === 127) {
        simulateKeyTyped(code, new Char(127));
        return
      }
      if (codedKeys.indexOf(code) < 0) {
        lastPressedKeyCode = code;
        return
      }
      var c = new Char(65535);
      p.key = c;
      p.keyCode = code;
      pressedKeysMap[code] = c;
      p.keyPressed();
      lastPressedKeyCode = null;
      updateKeyPressed();
      return suppressKeyEvent(e)
    }
    function handleKeypress(e) {
      if (lastPressedKeyCode === null) return;
      var code = lastPressedKeyCode,
        c = getKeyChar(e);
      simulateKeyTyped(code, c);
      return suppressKeyEvent(e)
    }
    function handleKeyup(e) {
      var code = getKeyCode(e),
        c = pressedKeysMap[code];
      if (c === undef) return;
      p.key = c;
      p.keyCode = code;
      p.keyReleased();
      delete pressedKeysMap[code];
      updateKeyPressed()
    }
    if (!pgraphicsMode) {
      if (aCode instanceof Processing.Sketch) curSketch = aCode;
      else if (typeof aCode === "function") curSketch = new Processing.Sketch(aCode);
      else if (!aCode) curSketch = new Processing.Sketch(function() {});
      else curSketch = Processing.compile(aCode);
      p.externals.sketch = curSketch;
      wireDimensionalFunctions();
      curElement.onfocus = function() {
        p.focused = true
      };
      curElement.onblur = function() {
        p.focused = false;
        if (!curSketch.options.globalKeyEvents) resetKeyPressed()
      };
      if (curSketch.options.pauseOnBlur) {
        attachEventHandler(window, "focus", function() {
          if (doLoop) p.loop()
        });
        attachEventHandler(window, "blur", function() {
          if (doLoop && loopStarted) {
            p.noLoop();
            doLoop = true
          }
          resetKeyPressed()
        })
      }
      var keyTrigger = curSketch.options.globalKeyEvents ? window : curElement;
      attachEventHandler(keyTrigger, "keydown", handleKeydown);
      attachEventHandler(keyTrigger, "keypress", handleKeypress);
      attachEventHandler(keyTrigger, "keyup", handleKeyup);
      for (var i in Processing.lib) if (Processing.lib.hasOwnProperty(i)) if (Processing.lib[i].hasOwnProperty("attach")) Processing.lib[i].attach(p);
      else if (Processing.lib[i] instanceof Function) Processing.lib[i].call(this);
      var retryInterval = 100;
      var executeSketch = function(processing) {
        if (! (curSketch.imageCache.pending || PFont.preloading.pending(retryInterval))) {
          if (window.opera) {
            var link, element, operaCache = curSketch.imageCache.operaCache;
            for (link in operaCache) if (operaCache.hasOwnProperty(link)) {
              element = operaCache[link];
              if (element !== null) document.body.removeChild(element);
              delete operaCache[link]
            }
          }
          curSketch.attach(processing, defaultScope);
          curSketch.onLoad(processing);
          if (processing.setup) {
            processing.setup();
            processing.resetMatrix();
            curSketch.onSetup()
          }
          resetContext();
          if (processing.draw) if (!doLoop) processing.redraw();
          else processing.loop()
        } else window.setTimeout(function() {
          executeSketch(processing)
        },
        retryInterval)
      };
      addInstance(this);
      executeSketch(p)
    } else {
      curSketch = new Processing.Sketch;
      wireDimensionalFunctions();
      p.size = function(w, h, render) {
        if (render && render === 2) wireDimensionalFunctions("3D");
        else wireDimensionalFunctions("2D");
        p.size(w, h, render)
      }
    }
  };
  Processing.debug = debug;
  Processing.prototype = defaultScope;

  function getGlobalMembers() {
    var names = ["abs", "acos", "alpha", "ambient", "ambientLight", "append",
      "applyMatrix", "arc", "arrayCopy", "asin", "atan", "atan2", "background", "beginCamera", "beginDraw", "beginShape", "bezier", "bezierDetail", "bezierPoint", "bezierTangent", "bezierVertex", "binary", "blend", "blendColor", "blit_resize", "blue", "box", "breakShape", "brightness", "camera", "ceil", "Character", "color", "colorMode", "concat", "constrain", "copy", "cos", "createFont", "createGraphics", "createImage", "cursor", "curve", "curveDetail", "curvePoint", "curveTangent", "curveTightness", "curveVertex", "day", "degrees", "directionalLight",
      "disableContextMenu", "dist", "draw", "ellipse", "ellipseMode", "emissive", "enableContextMenu", "endCamera", "endDraw", "endShape", "exit", "exp", "expand", "externals", "fill", "filter", "floor", "focused", "frameCount", "frameRate", "frustum", "get", "glyphLook", "glyphTable", "green", "height", "hex", "hint", "hour", "hue", "image", "imageMode", "intersect", "join", "key", "keyCode", "keyPressed", "keyReleased", "keyTyped", "lerp", "lerpColor", "lightFalloff", "lights", "lightSpecular", "line", "link", "loadBytes", "loadFont", "loadGlyphs",
      "loadImage", "loadPixels", "loadShape", "loadXML", "loadStrings", "log", "loop", "mag", "map", "match", "matchAll", "max", "millis", "min", "minute", "mix", "modelX", "modelY", "modelZ", "modes", "month", "mouseButton", "mouseClicked", "mouseDragged", "mouseMoved", "mouseOut", "mouseOver", "mousePressed", "mouseReleased", "mouseScroll", "mouseScrolled", "mouseX", "mouseY", "name", "nf", "nfc", "nfp", "nfs", "noCursor", "noFill", "noise", "noiseDetail", "noiseSeed", "noLights", "noLoop", "norm", "normal", "noSmooth", "noStroke", "noTint", "ortho",
      "param", "parseBoolean", "parseByte", "parseChar", "parseFloat", "parseInt", "peg", "perspective", "PImage", "pixels", "PMatrix2D", "PMatrix3D", "PMatrixStack", "pmouseX", "pmouseY", "point", "pointLight", "popMatrix", "popStyle", "pow", "print", "printCamera", "println", "printMatrix", "printProjection", "PShape", "PShapeSVG", "pushMatrix", "pushStyle", "quad", "radians", "random", "Random", "randomSeed", "rect", "rectMode", "red", "redraw", "requestImage", "resetMatrix", "reverse", "rotate", "rotateX", "rotateY", "rotateZ", "round", "saturation",
      "save", "saveFrame", "saveStrings", "scale", "screenX", "screenY", "screenZ", "second", "set", "setup", "shape", "shapeMode", "shared", "shearX", "shearY", "shininess", "shorten", "sin", "size", "smooth", "sort", "specular", "sphere", "sphereDetail", "splice", "split", "splitTokens", "spotLight", "sq", "sqrt", "status", "str", "stroke", "strokeCap", "strokeJoin", "strokeWeight", "subset", "tan", "text", "textAlign", "textAscent", "textDescent", "textFont", "textLeading", "textMode", "textSize", "texture", "textureMode", "textWidth", "tint", "toImageData",
      "touchCancel", "touchEnd", "touchMove", "touchStart", "translate", "transform", "triangle", "trim", "unbinary", "unhex", "updatePixels", "use3DContext", "vertex", "width", "XMLElement", "XML", "year", "__contains", "__equals", "__equalsIgnoreCase", "__frameRate", "__hashCode", "__int_cast", "__instanceof", "__keyPressed", "__mousePressed", "__printStackTrace", "__replace", "__replaceAll", "__replaceFirst", "__toCharArray", "__split", "__codePointAt", "__startsWith", "__endsWith", "__matches"];
    var members = {};
    var i, l;
    for (i = 0, l = names.length; i < l; ++i) members[names[i]] = null;
    for (var lib in Processing.lib) if (Processing.lib.hasOwnProperty(lib)) if (Processing.lib[lib].exports) {
      var exportedNames = Processing.lib[lib].exports;
      for (i = 0, l = exportedNames.length; i < l; ++i) members[exportedNames[i]] = null
    }
    return members
  }
  function parseProcessing(code) {
    var globalMembers = getGlobalMembers();

    function splitToAtoms(code) {
      var atoms = [];
      var items = code.split(/([\{\[\(\)\]\}])/);
      var result = items[0];
      var stack = [];
      for (var i = 1; i < items.length; i += 2) {
        var item = items[i];
        if (item === "[" || item === "{" || item === "(") {
          stack.push(result);
          result = item
        } else if (item === "]" || item === "}" || item === ")") {
          var kind = item === "}" ? "A" : item === ")" ? "B" : "C";
          var index = atoms.length;
          atoms.push(result + item);
          result = stack.pop() + '"' + kind + (index + 1) + '"'
        }
        result += items[i + 1]
      }
      atoms.unshift(result);
      return atoms
    }
    function injectStrings(code, strings) {
      return code.replace(/'(\d+)'/g, function(all, index) {
        var val = strings[index];
        if (val.charAt(0) === "/") return val;
        return /^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(val) ? "(new $p.Character(" + val + "))" : val
      })
    }
    function trimSpaces(string) {
      var m1 = /^\s*/.exec(string),
        result;
      if (m1[0].length === string.length) result = {
        left: m1[0],
        middle: "",
        right: ""
      };
      else {
        var m2 = /\s*$/.exec(string);
        result = {
          left: m1[0],
          middle: string.substring(m1[0].length, m2.index),
          right: m2[0]
        }
      }
      result.untrim = function(t) {
        return this.left + t + this.right
      };
      return result
    }
    function trim(string) {
      return string.replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function appendToLookupTable(table, array) {
      for (var i = 0, l = array.length; i < l; ++i) table[array[i]] = null;
      return table
    }
    function isLookupTableEmpty(table) {
      for (var i in table) if (table.hasOwnProperty(i)) return false;
      return true
    }
    function getAtomIndex(templ) {
      return templ.substring(2, templ.length - 1)
    }
    var codeWoExtraCr = code.replace(/\r\n?|\n\r/g, "\n");
    var strings = [];
    var codeWoStrings = codeWoExtraCr.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g, function(all, quoted, aposed, regexCtx, prefix, regex, singleComment, comment) {
      var index;
      if (quoted || aposed) {
        index = strings.length;
        strings.push(all);
        return "'" + index + "'"
      }
      if (regexCtx) {
        index = strings.length;
        strings.push(regex);
        return prefix + "'" + index + "'"
      }
      return comment !== "" ? " " : "\n"
    });
    codeWoStrings = codeWoStrings.replace(/__x([0-9A-F]{4})/g, function(all, hexCode) {
      return "__x005F_x" + hexCode
    });
    codeWoStrings = codeWoStrings.replace(/\$/g, "__x0024");
    var genericsWereRemoved;
    var codeWoGenerics = codeWoStrings;
    var replaceFunc = function(all, before, types, after) {
      if ( !! before || !!after) return all;
      genericsWereRemoved = true;
      return ""
    };
    do {
      genericsWereRemoved = false;
      codeWoGenerics = codeWoGenerics.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g, replaceFunc)
    } while (genericsWereRemoved);
    var atoms = splitToAtoms(codeWoGenerics);
    var replaceContext;
    var declaredClasses = {},
      currentClassId, classIdSeed = 0;

    function addAtom(text, type) {
      var lastIndex = atoms.length;
      atoms.push(text);
      return '"' + type + lastIndex + '"'
    }
    function generateClassId() {
      return "class" + ++classIdSeed
    }
    function appendClass(class_, classId, scopeId) {
      class_.classId = classId;
      class_.scopeId = scopeId;
      declaredClasses[classId] = class_
    }
    var transformClassBody, transformInterfaceBody, transformStatementsBlock, transformStatements, transformMain, transformExpression;
    var classesRegex = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g;
    var methodsRegex = /\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g;
    var fieldTest = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/;
    var cstrsRegex = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g;
    var attrAndTypeRegex = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/;
    var functionsRegex = /\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;

    function extractClassesAndMethods(code) {
      var s = code;
      s = s.replace(classesRegex, function(all) {
        return addAtom(all, "E")
      });
      s = s.replace(methodsRegex, function(all) {
        return addAtom(all, "D")
      });
      s = s.replace(functionsRegex, function(all) {
        return addAtom(all, "H")
      });
      return s
    }
    function extractConstructors(code, className) {
      var result = code.replace(cstrsRegex, function(all, attr, name, params, throws_, body) {
        if (name !== className) return all;
        return addAtom(all, "G")
      });
      return result
    }
    function AstParam(name) {
      this.name = name
    }
    AstParam.prototype.toString = function() {
      return this.name
    };

    function AstParams(params, methodArgsParam) {
      this.params = params;
      this.methodArgsParam = methodArgsParam
    }
    AstParams.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.params.length; i < l; ++i) names.push(this.params[i].name);
      return names
    };
    AstParams.prototype.prependMethodArgs = function(body) {
      if (!this.methodArgsParam) return body;
      return "{\nvar " + this.methodArgsParam.name + " = Array.prototype.slice.call(arguments, " + this.params.length + ");\n" + body.substring(1)
    };
    AstParams.prototype.toString = function() {
      if (this.params.length === 0) return "()";
      var result = "(";
      for (var i = 0, l = this.params.length; i < l; ++i) result += this.params[i] + ", ";
      return result.substring(0, result.length - 2) + ")"
    };

    function transformParams(params) {
      var paramsWoPars = trim(params.substring(1, params.length - 1));
      var result = [],
        methodArgsParam = null;
      if (paramsWoPars !== "") {
        var paramList = paramsWoPars.split(",");
        for (var i = 0; i < paramList.length; ++i) {
          var param = /\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(paramList[i]);
          if (i === paramList.length - 1 && paramList[i].indexOf("...") >= 0) {
            methodArgsParam = new AstParam(param[1]);
            break
          }
          result.push(new AstParam(param[1]))
        }
      }
      return new AstParams(result, methodArgsParam)
    }
    function preExpressionTransform(expr) {
      var s = expr;
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g, function(all, type, init) {
        return init
      });
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g, function(all, type, init) {
        return addAtom(all, "F")
      });
      s = s.replace(functionsRegex, function(all) {
        return addAtom(all, "H")
      });
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g, function(all, type, index) {
        var args = index.replace(/"C(\d+)"/g, function(all, j) {
          return atoms[j]
        }).replace(/\[\s*\]/g, "[null]").replace(/\s*\]\s*\[\s*/g, ", ");
        var arrayInitializer = "{" + args.substring(1, args.length - 1) + "}";
        var createArrayArgs = "('" + type + "', " + addAtom(arrayInitializer, "A") + ")";
        return "$p.createJavaArray" + addAtom(createArrayArgs, "B")
      });
      s = s.replace(/(\.\s*length)\s*"B\d+"/g, "$1");
      s = s.replace(/#([0-9A-Fa-f]{6})\b/g, function(all, digits) {
        return "0xFF" + digits
      });
      s = s.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g, function(all, index, next) {
        var atom = atoms[index];
        if (!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(atom)) return all;
        if (/^\(\s*int\s*\)$/.test(atom)) return "(int)" + next;
        var indexParts = atom.split(/"C(\d+)"/g);
        if (indexParts.length > 1) if (!/^\[\s*\]$/.test(atoms[indexParts[1]])) return all;
        return "" + next
      });
      s = s.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g, function(all, arg) {
        var trimmed = trimSpaces(arg);
        return trimmed.untrim("__int_cast(" + trimmed.middle + ")")
      });
      s = s.replace(/\bsuper(\s*"B\d+")/g, "$$superCstr$1").replace(/\bsuper(\s*\.)/g, "$$super$1");
      s = s.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/, function(all, numberWo0, intPart) {
        if (numberWo0 === intPart) return all;
        return intPart === "" ? "0" + numberWo0 : numberWo0
      });
      s = s.replace(/\b(\.?\d+\.?)[fF]\b/g, "$1");
      s = s.replace(/([^\s])%([^=\s])/g, "$1 % $2");
      s = s.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g, "__$1");
      s = s.replace(/\b(boolean|byte|char|float|int)\s*"B/g, function(all, name) {
        return "parse" + name.substring(0, 1).toUpperCase() + name.substring(1) + '"B'
      });
      s = s.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g, function(all, indexOrLength, index, atomIndex, equalsPart, rightSide) {
        if (index) {
          var atom = atoms[atomIndex];
          if (equalsPart) return "pixels.setPixel" + addAtom("(" + atom.substring(1, atom.length - 1) + "," + rightSide + ")", "B");
          return "pixels.getPixel" + addAtom("(" + atom.substring(1, atom.length - 1) + ")", "B")
        }
        if (indexOrLength) return "pixels.getLength" + addAtom("()", "B");
        if (equalsPart) return "pixels.set" + addAtom("(" + rightSide + ")", "B");
        return "pixels.toArray" + addAtom("()", "B")
      });
      var repeatJavaReplacement;

      function replacePrototypeMethods(all, subject, method, atomIndex) {
        var atom = atoms[atomIndex];
        repeatJavaReplacement = true;
        var trimmed = trimSpaces(atom.substring(1, atom.length - 1));
        return "__" + method + (trimmed.middle === "" ? addAtom("(" + subject.replace(/\.\s*$/, "") + ")", "B") : addAtom("(" + subject.replace(/\.\s*$/, "") + "," + trimmed.middle + ")", "B"))
      }
      do {
        repeatJavaReplacement = false;
        s = s.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g, replacePrototypeMethods)
      } while (repeatJavaReplacement);

      function replaceInstanceof(all, subject, type) {
        repeatJavaReplacement = true;
        return "__instanceof" + addAtom("(" + subject + ", " + type + ")", "B")
      }
      do {
        repeatJavaReplacement = false;
        s = s.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g, replaceInstanceof)
      } while (repeatJavaReplacement);
      s = s.replace(/\bthis(\s*"B\d+")/g, "$$constr$1");
      return s
    }
    function AstInlineClass(baseInterfaceName, body) {
      this.baseInterfaceName = baseInterfaceName;
      this.body = body;
      body.owner = this
    }
    AstInlineClass.prototype.toString = function() {
      return "new (" + this.body + ")"
    };

    function transformInlineClass(class_) {
      var m = (new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/)).exec(class_);
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      var uniqueClassName = m[1] + "$" + newClassId;
      var inlineClass = new AstInlineClass(uniqueClassName, transformClassBody(atoms[m[2]], uniqueClassName, "", "implements " + m[1]));
      appendClass(inlineClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return inlineClass
    }

    function AstFunction(name, params, body) {
      this.name = name;
      this.params = params;
      this.body = body
    }
    AstFunction.prototype.toString = function() {
      var oldContext = replaceContext;
      var names = appendToLookupTable({
        "this": null
      },
      this.params.getNames());
      replaceContext = function(subject) {
        return names.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var result = "function";
      if (this.name) result += " " + this.name;
      var body = this.params.prependMethodArgs(this.body.toString());
      result += this.params + " " + body;
      replaceContext = oldContext;
      return result
    };

    function transformFunction(class_) {
      var m = (new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/)).exec(class_);
      return new AstFunction(m[1] !== "function" ? m[1] : null, transformParams(atoms[m[2]]), transformStatementsBlock(atoms[m[3]]))
    }
    function AstInlineObject(members) {
      this.members = members
    }
    AstInlineObject.prototype.toString = function() {
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return subject.name === "this" ? "this" : oldContext(subject)
      };
      var result = "";
      for (var i = 0, l = this.members.length; i < l; ++i) {
        if (this.members[i].label) result += this.members[i].label + ": ";
        result += this.members[i].value.toString() + ", "
      }
      replaceContext = oldContext;
      return result.substring(0, result.length - 2)
    };

    function transformInlineObject(obj) {
      var members = obj.split(",");
      for (var i = 0; i < members.length; ++i) {
        var label = members[i].indexOf(":");
        if (label < 0) members[i] = {
          value: transformExpression(members[i])
        };
        else members[i] = {
          label: trim(members[i].substring(0, label)),
          value: transformExpression(trim(members[i].substring(label + 1)))
        }
      }
      return new AstInlineObject(members)
    }

    function expandExpression(expr) {
      if (expr.charAt(0) === "(" || expr.charAt(0) === "[") return expr.charAt(0) + expandExpression(expr.substring(1, expr.length - 1)) + expr.charAt(expr.length - 1);
      if (expr.charAt(0) === "{") {
        if (/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(expr)) return "{" + addAtom(expr.substring(1, expr.length - 1), "I") + "}";
        return "[" + expandExpression(expr.substring(1, expr.length - 1)) + "]"
      }
      var trimmed = trimSpaces(expr);
      var result = preExpressionTransform(trimmed.middle);
      result = result.replace(/"[ABC](\d+)"/g, function(all, index) {
        return expandExpression(atoms[index])
      });
      return trimmed.untrim(result)
    }
    function replaceContextInVars(expr) {
      return expr.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g, function(all, memberAccessSign, identifier, suffix, subMember, callSign) {
        if (memberAccessSign) return all;
        var subject = {
          name: identifier,
          member: subMember,
          callSign: !!callSign
        };
        return replaceContext(subject) + (suffix === undef ? "" : suffix)
      })
    }
    function AstExpression(expr, transforms) {
      this.expr = expr;
      this.transforms = transforms
    }
    AstExpression.prototype.toString = function() {
      var transforms = this.transforms;
      var expr = replaceContextInVars(this.expr);
      return expr.replace(/"!(\d+)"/g, function(all, index) {
        return transforms[index].toString()
      })
    };
    transformExpression = function(expr) {
      var transforms = [];
      var s = expandExpression(expr);
      s = s.replace(/"H(\d+)"/g, function(all, index) {
        transforms.push(transformFunction(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      s = s.replace(/"F(\d+)"/g, function(all, index) {
        transforms.push(transformInlineClass(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      s = s.replace(/"I(\d+)"/g, function(all, index) {
        transforms.push(transformInlineObject(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      return new AstExpression(s, transforms)
    };

    function AstVarDefinition(name, value, isDefault) {
      this.name = name;
      this.value = value;
      this.isDefault = isDefault
    }
    AstVarDefinition.prototype.toString = function() {
      return this.name + " = " + this.value
    };

    function transformVarDefinition(def, defaultTypeValue) {
      var eqIndex = def.indexOf("=");
      var name, value, isDefault;
      if (eqIndex < 0) {
        name = def;
        value = defaultTypeValue;
        isDefault = true
      } else {
        name = def.substring(0, eqIndex);
        value = transformExpression(def.substring(eqIndex + 1));
        isDefault = false
      }
      return new AstVarDefinition(trim(name.replace(/(\s*"C\d+")+/g, "")), value, isDefault)
    }
    function getDefaultValueForType(type) {
      if (type === "int" || type === "float") return "0";
      if (type === "boolean") return "false";
      if (type === "color") return "0x00000000";
      return "null"
    }
    function AstVar(definitions, varType) {
      this.definitions = definitions;
      this.varType = varType
    }
    AstVar.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.definitions.length; i < l; ++i) names.push(this.definitions[i].name);
      return names
    };
    AstVar.prototype.toString = function() {
      return "var " + this.definitions.join(",")
    };

    function AstStatement(expression) {
      this.expression = expression
    }
    AstStatement.prototype.toString = function() {
      return this.expression.toString()
    };

    function transformStatement(statement) {
      if (fieldTest.test(statement)) {
        var attrAndType = attrAndTypeRegex.exec(statement);
        var definitions = statement.substring(attrAndType[0].length).split(",");
        var defaultTypeValue = getDefaultValueForType(attrAndType[2]);
        for (var i = 0; i < definitions.length; ++i) definitions[i] = transformVarDefinition(definitions[i], defaultTypeValue);
        return new AstVar(definitions, attrAndType[2])
      }
      return new AstStatement(transformExpression(statement))
    }
    function AstForExpression(initStatement, condition, step) {
      this.initStatement = initStatement;
      this.condition = condition;
      this.step = step
    }
    AstForExpression.prototype.toString = function() {
      return "(" + this.initStatement + "; " + this.condition + "; " + this.step + ")"
    };

    function AstForInExpression(initStatement, container) {
      this.initStatement = initStatement;
      this.container = container
    }
    AstForInExpression.prototype.toString = function() {
      var init = this.initStatement.toString();
      if (init.indexOf("=") >= 0) init = init.substring(0, init.indexOf("="));
      return "(" + init + " in " + this.container + ")"
    };

    function AstForEachExpression(initStatement, container) {
      this.initStatement = initStatement;
      this.container = container
    }
    AstForEachExpression.iteratorId = 0;
    AstForEachExpression.prototype.toString = function() {
      var init = this.initStatement.toString();
      var iterator = "$it" + AstForEachExpression.iteratorId++;
      var variableName = init.replace(/^\s*var\s*/, "").split("=")[0];
      var initIteratorAndVariable = "var " + iterator + " = new $p.ObjectIterator(" + this.container + "), " + variableName + " = void(0)";
      var nextIterationCondition = iterator + ".hasNext() && ((" + variableName + " = " + iterator + ".next()) || true)";
      return "(" + initIteratorAndVariable + "; " + nextIterationCondition + ";)"
    };

    function transformForExpression(expr) {
      var content;
      if (/\bin\b/.test(expr)) {
        content = expr.substring(1, expr.length - 1).split(/\bin\b/g);
        return new AstForInExpression(transformStatement(trim(content[0])), transformExpression(content[1]))
      }
      if (expr.indexOf(":") >= 0 && expr.indexOf(";") < 0) {
        content = expr.substring(1, expr.length - 1).split(":");
        return new AstForEachExpression(transformStatement(trim(content[0])), transformExpression(content[1]))
      }
      content = expr.substring(1, expr.length - 1).split(";");
      return new AstForExpression(transformStatement(trim(content[0])), transformExpression(content[1]), transformExpression(content[2]))
    }

    function sortByWeight(array) {
      array.sort(function(a, b) {
        return b.weight - a.weight
      })
    }
    function AstInnerInterface(name, body, isStatic) {
      this.name = name;
      this.body = body;
      this.isStatic = isStatic;
      body.owner = this
    }
    AstInnerInterface.prototype.toString = function() {
      return "" + this.body
    };

    function AstInnerClass(name, body, isStatic) {
      this.name = name;
      this.body = body;
      this.isStatic = isStatic;
      body.owner = this
    }
    AstInnerClass.prototype.toString = function() {
      return "" + this.body
    };

    function transformInnerClass(class_) {
      var m = classesRegex.exec(class_);
      classesRegex.lastIndex = 0;
      var isStatic = m[1].indexOf("static") >= 0;
      var body = atoms[getAtomIndex(m[6])],
        innerClass;
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      if (m[2] === "interface") innerClass = new AstInnerInterface(m[3], transformInterfaceBody(body, m[3], m[4]), isStatic);
      else innerClass = new AstInnerClass(m[3], transformClassBody(body, m[3], m[4], m[5]), isStatic);
      appendClass(innerClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return innerClass
    }
    function AstClassMethod(name, params, body, isStatic) {
      this.name = name;
      this.params = params;
      this.body = body;
      this.isStatic = isStatic
    }
    AstClassMethod.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var body = this.params.prependMethodArgs(this.body.toString());
      var result = "function " + this.methodId + this.params + " " + body + "\n";
      replaceContext = oldContext;
      return result
    };

    function transformClassMethod(method) {
      var m = methodsRegex.exec(method);
      methodsRegex.lastIndex = 0;
      var isStatic = m[1].indexOf("static") >= 0;
      var body = m[6] !== ";" ? atoms[getAtomIndex(m[6])] : "{}";
      return new AstClassMethod(m[3], transformParams(atoms[getAtomIndex(m[4])]), transformStatementsBlock(body), isStatic)
    }
    function AstClassField(definitions, fieldType, isStatic) {
      this.definitions = definitions;
      this.fieldType = fieldType;
      this.isStatic = isStatic
    }
    AstClassField.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.definitions.length; i < l; ++i) names.push(this.definitions[i].name);
      return names
    };
    AstClassField.prototype.toString = function() {
      var thisPrefix = replaceContext({
        name: "[this]"
      });
      if (this.isStatic) {
        var className = this.owner.name;
        var staticDeclarations = [];
        for (var i = 0, l = this.definitions.length; i < l; ++i) {
          var definition = this.definitions[i];
          var name = definition.name,
            staticName = className + "." + name;
          var declaration = "if(" + staticName + " === void(0)) {\n" + " " + staticName + " = " + definition.value + "; }\n" + "$p.defineProperty(" + thisPrefix + ", " + "'" + name + "', { get: function(){return " + staticName + ";}, " + "set: function(val){" + staticName + " = val;} });\n";
          staticDeclarations.push(declaration)
        }
        return staticDeclarations.join("")
      }
      return thisPrefix + "." + this.definitions.join("; " + thisPrefix + ".")
    };

    function transformClassField(statement) {
      var attrAndType = attrAndTypeRegex.exec(statement);
      var isStatic = attrAndType[1].indexOf("static") >= 0;
      var definitions = statement.substring(attrAndType[0].length).split(/,\s*/g);
      var defaultTypeValue = getDefaultValueForType(attrAndType[2]);
      for (var i = 0; i < definitions.length; ++i) definitions[i] = transformVarDefinition(definitions[i], defaultTypeValue);
      return new AstClassField(definitions, attrAndType[2], isStatic)
    }
    function AstConstructor(params, body) {
      this.params = params;
      this.body = body
    }
    AstConstructor.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var prefix = "function $constr_" + this.params.params.length + this.params.toString();
      var body = this.params.prependMethodArgs(this.body.toString());
      if (!/\$(superCstr|constr)\b/.test(body)) body = "{\n$superCstr();\n" + body.substring(1);
      replaceContext = oldContext;
      return prefix + body + "\n"
    };

    function transformConstructor(cstr) {
      var m = (new RegExp(/"B(\d+)"\s*"A(\d+)"/)).exec(cstr);
      var params = transformParams(atoms[m[1]]);
      return new AstConstructor(params, transformStatementsBlock(atoms[m[2]]))
    }
    function AstInterfaceBody(name, interfacesNames, methodsNames, fields, innerClasses, misc) {
      var i, l;
      this.name = name;
      this.interfacesNames = interfacesNames;
      this.methodsNames = methodsNames;
      this.fields = fields;
      this.innerClasses = innerClasses;
      this.misc = misc;
      for (i = 0, l = fields.length; i < l; ++i) fields[i].owner = this
    }
    AstInterfaceBody.prototype.getMembers = function(classFields, classMethods, classInners) {
      if (this.owner.base) this.owner.base.body.getMembers(classFields, classMethods, classInners);
      var i, j, l, m;
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var fieldNames = this.fields[i].getNames();
        for (j = 0, m = fieldNames.length; j < m; ++j) classFields[fieldNames[j]] = this.fields[i]
      }
      for (i = 0, l = this.methodsNames.length; i < l; ++i) {
        var methodName = this.methodsNames[i];
        classMethods[methodName] = true
      }
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        classInners[innerClass.name] = innerClass
      }
    };
    AstInterfaceBody.prototype.toString = function() {
      function getScopeLevel(p) {
        var i = 0;
        while (p) {
          ++i;
          p = p.scope
        }
        return i
      }
      var scopeLevel = getScopeLevel(this.owner);
      var className = this.name;
      var staticDefinitions = "";
      var metadata = "";
      var thisClassFields = {},
        thisClassMethods = {},
        thisClassInners = {};
      this.getMembers(thisClassFields, thisClassMethods, thisClassInners);
      var i, l, j, m;
      if (this.owner.interfaces) {
        var resolvedInterfaces = [],
          resolvedInterface;
        for (i = 0, l = this.interfacesNames.length; i < l; ++i) {
          if (!this.owner.interfaces[i]) continue;
          resolvedInterface = replaceContext({
            name: this.interfacesNames[i]
          });
          resolvedInterfaces.push(resolvedInterface);
          staticDefinitions += "$p.extendInterfaceMembers(" + className + ", " + resolvedInterface + ");\n"
        }
        metadata += className + ".$interfaces = [" + resolvedInterfaces.join(", ") + "];\n"
      }
      metadata += className + ".$isInterface = true;\n";
      metadata += className + ".$methods = ['" + this.methodsNames.join("', '") + "'];\n";
      sortByWeight(this.innerClasses);
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        if (innerClass.isStatic) staticDefinitions += className + "." + innerClass.name + " = " + innerClass + ";\n"
      }
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var field = this.fields[i];
        if (field.isStatic) staticDefinitions += className + "." + field.definitions.join(";\n" + className + ".") + ";\n"
      }
      return "(function() {\n" + "function " + className + "() { throw 'Unable to create the interface'; }\n" + staticDefinitions + metadata + "return " + className + ";\n" + "})()"
    };
    transformInterfaceBody = function(body, name, baseInterfaces) {
      var declarations = body.substring(1, body.length - 1);
      declarations = extractClassesAndMethods(declarations);
      declarations = extractConstructors(declarations, name);
      var methodsNames = [],
        classes = [];
      declarations = declarations.replace(/"([DE])(\d+)"/g, function(all, type, index) {
        if (type === "D") methodsNames.push(index);
        else if (type === "E") classes.push(index);
        return ""
      });
      var fields = declarations.split(/;(?:\s*;)*/g);
      var baseInterfaceNames;
      var i, l;
      if (baseInterfaces !== undef) baseInterfaceNames = baseInterfaces.replace(/^\s*extends\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g);
      for (i = 0, l = methodsNames.length; i < l; ++i) {
        var method = transformClassMethod(atoms[methodsNames[i]]);
        methodsNames[i] = method.name
      }
      for (i = 0, l = fields.length - 1; i < l; ++i) {
        var field = trimSpaces(fields[i]);
        fields[i] = transformClassField(field.middle)
      }
      var tail = fields.pop();
      for (i = 0, l = classes.length; i < l; ++i) classes[i] = transformInnerClass(atoms[classes[i]]);
      return new AstInterfaceBody(name, baseInterfaceNames, methodsNames, fields, classes, {
        tail: tail
      })
    };

    function AstClassBody(name, baseClassName, interfacesNames, functions, methods, fields, cstrs, innerClasses, misc) {
      var i, l;
      this.name = name;
      this.baseClassName = baseClassName;
      this.interfacesNames = interfacesNames;
      this.functions = functions;
      this.methods = methods;
      this.fields = fields;
      this.cstrs = cstrs;
      this.innerClasses = innerClasses;
      this.misc = misc;
      for (i = 0, l = fields.length; i < l; ++i) fields[i].owner = this
    }
    AstClassBody.prototype.getMembers = function(classFields, classMethods, classInners) {
      if (this.owner.base) this.owner.base.body.getMembers(classFields, classMethods, classInners);
      var i, j, l, m;
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var fieldNames = this.fields[i].getNames();
        for (j = 0, m = fieldNames.length; j < m; ++j) classFields[fieldNames[j]] = this.fields[i]
      }
      for (i = 0, l = this.methods.length; i < l; ++i) {
        var method = this.methods[i];
        classMethods[method.name] = method
      }
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        classInners[innerClass.name] = innerClass
      }
    };
    AstClassBody.prototype.toString = function() {
      function getScopeLevel(p) {
        var i = 0;
        while (p) {
          ++i;
          p = p.scope
        }
        return i
      }
      var scopeLevel = getScopeLevel(this.owner);
      var selfId = "$this_" + scopeLevel;
      var className = this.name;
      var result = "var " + selfId + " = this;\n";
      var staticDefinitions = "";
      var metadata = "";
      var thisClassFields = {},
        thisClassMethods = {},
        thisClassInners = {};
      this.getMembers(thisClassFields, thisClassMethods, thisClassInners);
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        var name = subject.name;
        if (name === "this") return subject.callSign || !subject.member ? selfId + ".$self" : selfId;
        if (thisClassFields.hasOwnProperty(name)) return thisClassFields[name].isStatic ? className + "." + name : selfId + "." + name;
        if (thisClassInners.hasOwnProperty(name)) return selfId + "." + name;
        if (thisClassMethods.hasOwnProperty(name)) return thisClassMethods[name].isStatic ? className + "." + name : selfId + ".$self." + name;
        return oldContext(subject)
      };
      var resolvedBaseClassName;
      if (this.baseClassName) {
        resolvedBaseClassName = oldContext({
          name: this.baseClassName
        });
        result += "var $super = { $upcast: " + selfId + " };\n";
        result += "function $superCstr(){" + resolvedBaseClassName + ".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n";
        metadata += className + ".$base = " + resolvedBaseClassName + ";\n"
      } else result += "function $superCstr(){$p.extendClassChain(" + selfId + ")}\n";
      if (this.owner.base) staticDefinitions += "$p.extendStaticMembers(" + className + ", " + resolvedBaseClassName + ");\n";
      var i, l, j, m;
      if (this.owner.interfaces) {
        var resolvedInterfaces = [],
          resolvedInterface;
        for (i = 0, l = this.interfacesNames.length; i < l; ++i) {
          if (!this.owner.interfaces[i]) continue;
          resolvedInterface = oldContext({
            name: this.interfacesNames[i]
          });
          resolvedInterfaces.push(resolvedInterface);
          staticDefinitions += "$p.extendInterfaceMembers(" + className + ", " + resolvedInterface + ");\n"
        }
        metadata += className + ".$interfaces = [" + resolvedInterfaces.join(", ") + "];\n"
      }
      if (this.functions.length > 0) result += this.functions.join("\n") + "\n";
      sortByWeight(this.innerClasses);
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        if (innerClass.isStatic) {
          staticDefinitions += className + "." + innerClass.name + " = " + innerClass + ";\n";
          result += selfId + "." + innerClass.name + " = " + className + "." + innerClass.name + ";\n"
        } else result += selfId + "." + innerClass.name + " = " + innerClass + ";\n"
      }
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var field = this.fields[i];
        if (field.isStatic) {
          staticDefinitions += className + "." + field.definitions.join(";\n" + className + ".") + ";\n";
          for (j = 0, m = field.definitions.length; j < m; ++j) {
            var fieldName = field.definitions[j].name,
              staticName = className + "." + fieldName;
            result += "$p.defineProperty(" + selfId + ", '" + fieldName + "', {" + "get: function(){return " + staticName + "}, " + "set: function(val){" + staticName + " = val}});\n"
          }
        } else result += selfId + "." + field.definitions.join(";\n" + selfId + ".") + ";\n"
      }
      var methodOverloads = {};
      for (i = 0, l = this.methods.length; i < l; ++i) {
        var method = this.methods[i];
        var overload = methodOverloads[method.name];
        var methodId = method.name + "$" + method.params.params.length;
        var hasMethodArgs = !!method.params.methodArgsParam;
        if (overload) {
          ++overload;
          methodId += "_" + overload
        } else overload = 1;
        method.methodId = methodId;
        methodOverloads[method.name] = overload;
        if (method.isStatic) {
          staticDefinitions += method;
          staticDefinitions += "$p.addMethod(" + className + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n";
          result += "$p.addMethod(" + selfId + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n"
        } else {
          result += method;
          result += "$p.addMethod(" + selfId + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n"
        }
      }
      result += trim(this.misc.tail);
      if (this.cstrs.length > 0) result += this.cstrs.join("\n") + "\n";
      result += "function $constr() {\n";
      var cstrsIfs = [];
      for (i = 0, l = this.cstrs.length; i < l; ++i) {
        var paramsLength = this.cstrs[i].params.params.length;
        var methodArgsPresent = !!this.cstrs[i].params.methodArgsParam;
        cstrsIfs.push("if(arguments.length " + (methodArgsPresent ? ">=" : "===") + " " + paramsLength + ") { " + "$constr_" + paramsLength + ".apply(" + selfId + ", arguments); }")
      }
      if (cstrsIfs.length > 0) result += cstrsIfs.join(" else ") + " else ";
      result += "$superCstr();\n}\n";
      result += "$constr.apply(null, arguments);\n";
      replaceContext = oldContext;
      return "(function() {\n" + "function " + className + "() {\n" + result + "}\n" + staticDefinitions + metadata + "return " + className + ";\n" + "})()"
    };
    transformClassBody = function(body, name, baseName, interfaces) {
      var declarations = body.substring(1, body.length - 1);
      declarations = extractClassesAndMethods(declarations);
      declarations = extractConstructors(declarations, name);
      var methods = [],
        classes = [],
        cstrs = [],
        functions = [];
      declarations = declarations.replace(/"([DEGH])(\d+)"/g, function(all, type, index) {
        if (type === "D") methods.push(index);
        else if (type === "E") classes.push(index);
        else if (type === "H") functions.push(index);
        else cstrs.push(index);
        return ""
      });
      var fields = declarations.replace(/^(?:\s*;)+/, "").split(/;(?:\s*;)*/g);
      var baseClassName, interfacesNames;
      var i;
      if (baseName !== undef) baseClassName = baseName.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g, "$1");
      if (interfaces !== undef) interfacesNames = interfaces.replace(/^\s*implements\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g);
      for (i = 0; i < functions.length; ++i) functions[i] = transformFunction(atoms[functions[i]]);
      for (i = 0; i < methods.length; ++i) methods[i] = transformClassMethod(atoms[methods[i]]);
      for (i = 0; i < fields.length - 1; ++i) {
        var field = trimSpaces(fields[i]);
        fields[i] = transformClassField(field.middle)
      }
      var tail = fields.pop();
      for (i = 0; i < cstrs.length; ++i) cstrs[i] = transformConstructor(atoms[cstrs[i]]);
      for (i = 0; i < classes.length; ++i) classes[i] = transformInnerClass(atoms[classes[i]]);
      return new AstClassBody(name, baseClassName, interfacesNames, functions, methods, fields, cstrs, classes, {
        tail: tail
      })
    };

    function AstInterface(name, body) {
      this.name = name;
      this.body = body;
      body.owner = this
    }
    AstInterface.prototype.toString = function() {
      return "var " + this.name + " = " + this.body + ";\n" + "$p." + this.name + " = " + this.name + ";\n"
    };

    function AstClass(name, body) {
      this.name = name;
      this.body = body;
      body.owner = this
    }
    AstClass.prototype.toString = function() {
      return "var " + this.name + " = " + this.body + ";\n" + "$p." + this.name + " = " + this.name + ";\n"
    };

    function transformGlobalClass(class_) {
      var m = classesRegex.exec(class_);
      classesRegex.lastIndex = 0;
      var body = atoms[getAtomIndex(m[6])];
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      var globalClass;
      if (m[2] === "interface") globalClass = new AstInterface(m[3], transformInterfaceBody(body, m[3], m[4]));
      else globalClass = new AstClass(m[3], transformClassBody(body, m[3], m[4], m[5]));
      appendClass(globalClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return globalClass
    }
    function AstMethod(name, params, body) {
      this.name = name;
      this.params = params;
      this.body = body
    }
    AstMethod.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var body = this.params.prependMethodArgs(this.body.toString());
      var result = "function " + this.name + this.params + " " + body + "\n" + "$p." + this.name + " = " + this.name + ";";
      replaceContext = oldContext;
      return result
    };

    function transformGlobalMethod(method) {
      var m = methodsRegex.exec(method);
      var result = methodsRegex.lastIndex = 0;
      return new AstMethod(m[3], transformParams(atoms[getAtomIndex(m[4])]), transformStatementsBlock(atoms[getAtomIndex(m[6])]))
    }
    function preStatementsTransform(statements) {
      var s = statements;
      s = s.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g, "$1");
      return s
    }
    function AstForStatement(argument, misc) {
      this.argument = argument;
      this.misc = misc
    }
    AstForStatement.prototype.toString = function() {
      return this.misc.prefix + this.argument.toString()
    };

    function AstCatchStatement(argument, misc) {
      this.argument = argument;
      this.misc = misc
    }
    AstCatchStatement.prototype.toString = function() {
      return this.misc.prefix + this.argument.toString()
    };

    function AstPrefixStatement(name, argument, misc) {
      this.name = name;
      this.argument = argument;
      this.misc = misc
    }
    AstPrefixStatement.prototype.toString = function() {
      var result = this.misc.prefix;
      if (this.argument !== undef) result += this.argument.toString();
      return result
    };

    function AstSwitchCase(expr) {
      this.expr = expr
    }
    AstSwitchCase.prototype.toString = function() {
      return "case " + this.expr + ":"
    };

    function AstLabel(label) {
      this.label = label
    }
    AstLabel.prototype.toString = function() {
      return this.label
    };
    transformStatements = function(statements, transformMethod, transformClass) {
      var nextStatement = new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g);
      var res = [];
      statements = preStatementsTransform(statements);
      var lastIndex = 0,
        m, space;
      while ((m = nextStatement.exec(statements)) !== null) {
        if (m[1] !== undef) {
          var i = statements.lastIndexOf('"B', nextStatement.lastIndex);
          var statementsPrefix = statements.substring(lastIndex, i);
          if (m[1] === "for") res.push(new AstForStatement(transformForExpression(atoms[m[2]]), {
            prefix: statementsPrefix
          }));
          else if (m[1] === "catch") res.push(new AstCatchStatement(transformParams(atoms[m[2]]), {
            prefix: statementsPrefix
          }));
          else res.push(new AstPrefixStatement(m[1], transformExpression(atoms[m[2]]), {
            prefix: statementsPrefix
          }))
        } else if (m[3] !== undef) res.push(new AstPrefixStatement(m[3], undef, {
          prefix: statements.substring(lastIndex, nextStatement.lastIndex)
        }));
        else if (m[4] !== undef) {
          space = statements.substring(lastIndex, nextStatement.lastIndex - m[4].length);
          if (trim(space).length !== 0) continue;
          res.push(space);
          var kind = m[4].charAt(1),
            atomIndex = m[5];
          if (kind === "D") res.push(transformMethod(atoms[atomIndex]));
          else if (kind === "E") res.push(transformClass(atoms[atomIndex]));
          else if (kind === "H") res.push(transformFunction(atoms[atomIndex]));
          else res.push(transformStatementsBlock(atoms[atomIndex]))
        } else if (m[6] !== undef) res.push(new AstSwitchCase(transformExpression(trim(m[7]))));
        else if (m[8] !== undef) {
          space = statements.substring(lastIndex, nextStatement.lastIndex - m[8].length);
          if (trim(space).length !== 0) continue;
          res.push(new AstLabel(statements.substring(lastIndex, nextStatement.lastIndex)))
        } else {
          var statement = trimSpaces(statements.substring(lastIndex, nextStatement.lastIndex - 1));
          res.push(statement.left);
          res.push(transformStatement(statement.middle));
          res.push(statement.right + ";")
        }
        lastIndex = nextStatement.lastIndex
      }
      var statementsTail = trimSpaces(statements.substring(lastIndex));
      res.push(statementsTail.left);
      if (statementsTail.middle !== "") {
        res.push(transformStatement(statementsTail.middle));
        res.push(";" + statementsTail.right)
      }
      return res
    };

    function getLocalNames(statements) {
      var localNames = [];
      for (var i = 0, l = statements.length; i < l; ++i) {
        var statement = statements[i];
        if (statement instanceof AstVar) localNames = localNames.concat(statement.getNames());
        else if (statement instanceof AstForStatement && statement.argument.initStatement instanceof AstVar) localNames = localNames.concat(statement.argument.initStatement.getNames());
        else if (statement instanceof AstInnerInterface || statement instanceof AstInnerClass || statement instanceof AstInterface || statement instanceof AstClass || statement instanceof AstMethod || statement instanceof AstFunction) localNames.push(statement.name)
      }
      return appendToLookupTable({},
      localNames)
    }
    function AstStatementsBlock(statements) {
      this.statements = statements
    }
    AstStatementsBlock.prototype.toString = function() {
      var localNames = getLocalNames(this.statements);
      var oldContext = replaceContext;
      if (!isLookupTableEmpty(localNames)) replaceContext = function(subject) {
        return localNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var result = "{\n" + this.statements.join("") + "\n}";
      replaceContext = oldContext;
      return result
    };
    transformStatementsBlock = function(block) {
      var content = trimSpaces(block.substring(1, block.length - 1));
      return new AstStatementsBlock(transformStatements(content.middle))
    };

    function AstRoot(statements) {
      this.statements = statements
    }
    AstRoot.prototype.toString = function() {
      var classes = [],
        otherStatements = [],
        statement;
      for (var i = 0, len = this.statements.length; i < len; ++i) {
        statement = this.statements[i];
        if (statement instanceof AstClass || statement instanceof AstInterface) classes.push(statement);
        else otherStatements.push(statement)
      }
      sortByWeight(classes);
      var localNames = getLocalNames(this.statements);
      replaceContext = function(subject) {
        var name = subject.name;
        if (localNames.hasOwnProperty(name)) return name;
        if (globalMembers.hasOwnProperty(name) || PConstants.hasOwnProperty(name) || defaultScope.hasOwnProperty(name)) return "$p." + name;
        return name
      };
      var result = "// this code was autogenerated from PJS\n" + "(function($p) {\n" + classes.join("") + "\n" + otherStatements.join("") + "\n})";
      replaceContext = null;
      return result
    };
    transformMain = function() {
      var statements = extractClassesAndMethods(atoms[0]);
      statements = statements.replace(/\bimport\s+[^;]+;/g, "");
      return new AstRoot(transformStatements(statements, transformGlobalMethod, transformGlobalClass))
    };

    function generateMetadata(ast) {
      var globalScope = {};
      var id, class_;
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        var scopeId = class_.scopeId,
          name = class_.name;
        if (scopeId) {
          var scope = declaredClasses[scopeId];
          class_.scope = scope;
          if (scope.inScope === undef) scope.inScope = {};
          scope.inScope[name] = class_
        } else globalScope[name] = class_
      }
      function findInScopes(class_, name) {
        var parts = name.split(".");
        var currentScope = class_.scope,
          found;
        while (currentScope) {
          if (currentScope.hasOwnProperty(parts[0])) {
            found = currentScope[parts[0]];
            break
          }
          currentScope = currentScope.scope
        }
        if (found === undef) found = globalScope[parts[0]];
        for (var i = 1, l = parts.length; i < l && found; ++i) found = found.inScope[parts[i]];
        return found
      }
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        var baseClassName = class_.body.baseClassName;
        if (baseClassName) {
          var parent = findInScopes(class_, baseClassName);
          if (parent) {
            class_.base = parent;
            if (!parent.derived) parent.derived = [];
            parent.derived.push(class_)
          }
        }
        var interfacesNames = class_.body.interfacesNames,
          interfaces = [],
          i, l;
        if (interfacesNames && interfacesNames.length > 0) {
          for (i = 0, l = interfacesNames.length; i < l; ++i) {
            var interface_ = findInScopes(class_, interfacesNames[i]);
            interfaces.push(interface_);
            if (!interface_) continue;
            if (!interface_.derived) interface_.derived = [];
            interface_.derived.push(class_)
          }
          if (interfaces.length > 0) class_.interfaces = interfaces
        }
      }
    }
    function setWeight(ast) {
      var queue = [],
        tocheck = {};
      var id, scopeId, class_;
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        if (!class_.inScope && !class_.derived) {
          queue.push(id);
          class_.weight = 0
        } else {
          var dependsOn = [];
          if (class_.inScope) for (scopeId in class_.inScope) if (class_.inScope.hasOwnProperty(scopeId)) dependsOn.push(class_.inScope[scopeId]);
          if (class_.derived) dependsOn = dependsOn.concat(class_.derived);
          tocheck[id] = dependsOn
        }
      }
      function removeDependentAndCheck(targetId, from) {
        var dependsOn = tocheck[targetId];
        if (!dependsOn) return false;
        var i = dependsOn.indexOf(from);
        if (i < 0) return false;
        dependsOn.splice(i, 1);
        if (dependsOn.length > 0) return false;
        delete tocheck[targetId];
        return true
      }
      while (queue.length > 0) {
        id = queue.shift();
        class_ = declaredClasses[id];
        if (class_.scopeId && removeDependentAndCheck(class_.scopeId, class_)) {
          queue.push(class_.scopeId);
          declaredClasses[class_.scopeId].weight = class_.weight + 1
        }
        if (class_.base && removeDependentAndCheck(class_.base.classId, class_)) {
          queue.push(class_.base.classId);
          class_.base.weight = class_.weight + 1
        }
        if (class_.interfaces) {
          var i, l;
          for (i = 0, l = class_.interfaces.length; i < l; ++i) {
            if (!class_.interfaces[i] || !removeDependentAndCheck(class_.interfaces[i].classId, class_)) continue;
            queue.push(class_.interfaces[i].classId);
            class_.interfaces[i].weight = class_.weight + 1
          }
        }
      }
    }
    var transformed = transformMain();
    generateMetadata(transformed);
    setWeight(transformed);
    var redendered = transformed.toString();
    redendered = redendered.replace(/\s*\n(?:[\t ]*\n)+/g, "\n\n");
    redendered = redendered.replace(/__x([0-9A-F]{4})/g, function(all, hexCode) {
      return String.fromCharCode(parseInt(hexCode, 16))
    });
    return injectStrings(redendered, strings)
  }

  function preprocessCode(aCode, sketch) {
    var dm = (new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g)).exec(aCode);
    if (dm && dm.length === 2) {
      var jsonItems = [],
        directives = dm.splice(1, 2)[0].replace(/\{([\s\S]*?)\}/g, function() {
        return function(all, item) {
          jsonItems.push(item);
          return "{" + (jsonItems.length - 1) + "}"
        }
      }()).replace("\n", "").replace("\r", "").split(";");
      var clean = function(s) {
        return s.replace(/^\s*["']?/, "").replace(/["']?\s*$/, "")
      };
      for (var i = 0, dl = directives.length; i < dl; i++) {
        var pair = directives[i].split("=");
        if (pair && pair.length === 2) {
          var key = clean(pair[0]),
            value = clean(pair[1]),
            list = [];
          if (key === "preload") {
            list = value.split(",");
            for (var j = 0, jl = list.length; j < jl; j++) {
              var imageName = clean(list[j]);
              sketch.imageCache.add(imageName)
            }
          } else if (key === "font") {
            list = value.split(",");
            for (var x = 0, xl = list.length; x < xl; x++) {
              var fontName = clean(list[x]),
                index = /^\{(\d*?)\}$/.exec(fontName);
              PFont.preloading.add(index ? JSON.parse("{" + jsonItems[index[1]] + "}") : fontName)
            }
          } else if (key === "pauseOnBlur") sketch.options.pauseOnBlur = value === "true";
          else if (key === "globalKeyEvents") sketch.options.globalKeyEvents = value === "true";
          else if (key.substring(0, 6) === "param-") sketch.params[key.substring(6)] = value;
          else sketch.options[key] = value
        }
      }
    }
    return aCode
  }
  Processing.compile = function(pdeCode) {
    var sketch = new Processing.Sketch;
    var code = preprocessCode(pdeCode, sketch);
    var compiledPde = parseProcessing(code);
    sketch.sourceCode = compiledPde;
    return sketch
  };
  var tinylogLite = function() {
    var tinylogLite = {},
      undef = "undefined",
      func = "function",
      False = !1,
      True = !0,
      logLimit = 512,
      log = "log";
    if (typeof tinylog !== undef && typeof tinylog[log] === func) tinylogLite[log] = tinylog[log];
    else if (typeof document !== undef && !document.fake)(function() {
      var doc = document,
        $div = "div",
        $style = "style",
        $title = "title",
        containerStyles = {
        zIndex: 1E4,
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "15%",
        fontFamily: "sans-serif",
        color: "#ccc",
        backgroundColor: "black"
      },
        outputStyles = {
        position: "relative",
        fontFamily: "monospace",
        overflow: "auto",
        height: "100%",
        paddingTop: "5px"
      },
        resizerStyles = {
        height: "5px",
        marginTop: "-5px",
        cursor: "n-resize",
        backgroundColor: "darkgrey"
      },
        closeButtonStyles = {
        position: "absolute",
        top: "5px",
        right: "20px",
        color: "#111",
        MozBorderRadius: "4px",
        webkitBorderRadius: "4px",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "normal",
        textAlign: "center",
        padding: "3px 5px",
        backgroundColor: "#333",
        fontSize: "12px"
      },
        entryStyles = {
        minHeight: "16px"
      },
        entryTextStyles = {
        fontSize: "12px",
        margin: "0 8px 0 8px",
        maxWidth: "100%",
        whiteSpace: "pre-wrap",
        overflow: "auto"
      },
        view = doc.defaultView,
        docElem = doc.documentElement,
        docElemStyle = docElem[$style],
        setStyles = function() {
        var i = arguments.length,
          elemStyle, styles, style;
        while (i--) {
          styles = arguments[i--];
          elemStyle = arguments[i][$style];
          for (style in styles) if (styles.hasOwnProperty(style)) elemStyle[style] = styles[style]
        }
      },
        observer = function(obj, event, handler) {
        if (obj.addEventListener) obj.addEventListener(event, handler, False);
        else if (obj.attachEvent) obj.attachEvent("on" + event, handler);
        return [obj, event, handler]
      },
        unobserve = function(obj, event, handler) {
        if (obj.removeEventListener) obj.removeEventListener(event, handler, False);
        else if (obj.detachEvent) obj.detachEvent("on" + event, handler)
      },
        clearChildren = function(node) {
        var children = node.childNodes,
          child = children.length;
        while (child--) node.removeChild(children.item(0))
      },
        append = function(to, elem) {
        return to.appendChild(elem)
      },
        createElement = function(localName) {
        return doc.createElement(localName)
      },
        createTextNode = function(text) {
        return doc.createTextNode(text)
      },
        createLog = tinylogLite[log] = function(message) {
        var uninit, originalPadding = docElemStyle.paddingBottom,
          container = createElement($div),
          containerStyle = container[$style],
          resizer = append(container, createElement($div)),
          output = append(container, createElement($div)),
          closeButton = append(container, createElement($div)),
          resizingLog = False,
          previousHeight = False,
          previousScrollTop = False,
          messages = 0,
          updateSafetyMargin = function() {
          docElemStyle.paddingBottom = container.clientHeight + "px"
        },
          setContainerHeight = function(height) {
          var viewHeight = view.innerHeight,
            resizerHeight = resizer.clientHeight;
          if (height < 0) height = 0;
          else if (height + resizerHeight > viewHeight) height = viewHeight - resizerHeight;
          containerStyle.height = height / viewHeight * 100 + "%";
          updateSafetyMargin()
        },
          observers = [observer(doc, "mousemove", function(evt) {
          if (resizingLog) {
            setContainerHeight(view.innerHeight - evt.clientY);
            output.scrollTop = previousScrollTop
          }
        }), observer(doc, "mouseup", function() {
          if (resizingLog) resizingLog = previousScrollTop = False
        }), observer(resizer, "dblclick", function(evt) {
          evt.preventDefault();
          if (previousHeight) {
            setContainerHeight(previousHeight);
            previousHeight = False
          } else {
            previousHeight = container.clientHeight;
            containerStyle.height = "0px"
          }
        }), observer(resizer, "mousedown", function(evt) {
          evt.preventDefault();
          resizingLog = True;
          previousScrollTop = output.scrollTop
        }), observer(resizer, "contextmenu", function() {
          resizingLog = False
        }), observer(closeButton, "click", function() {
          uninit()
        })];
        uninit = function() {
          var i = observers.length;
          while (i--) unobserve.apply(tinylogLite, observers[i]);
          docElem.removeChild(container);
          docElemStyle.paddingBottom = originalPadding;
          clearChildren(output);
          clearChildren(container);
          tinylogLite[log] = createLog
        };
        setStyles(container, containerStyles, output, outputStyles, resizer, resizerStyles, closeButton, closeButtonStyles);
        closeButton[$title] = "Close Log";
        append(closeButton, createTextNode("\u2716"));
        resizer[$title] = "Double-click to toggle log minimization";
        docElem.insertBefore(container, docElem.firstChild);
        tinylogLite[log] = function(message) {
          if (messages === logLimit) output.removeChild(output.firstChild);
          else messages++;
          var entry = append(output, createElement($div)),
            entryText = append(entry, createElement($div));
          entry[$title] = (new Date).toLocaleTimeString();
          setStyles(entry, entryStyles, entryText, entryTextStyles);
          append(entryText, createTextNode(message));
          output.scrollTop = output.scrollHeight
        };
        tinylogLite[log](message);
        updateSafetyMargin()
      }
    })();
    else if (typeof print === func) tinylogLite[log] = print;
    return tinylogLite
  }();
  Processing.logger = tinylogLite;
  Processing.version = "1.4.1";
  Processing.lib = {};
  Processing.registerLibrary = function(name, desc) {
    Processing.lib[name] = desc;
    if (desc.hasOwnProperty("init")) desc.init(defaultScope)
  };
  Processing.instances = processingInstances;
  Processing.getInstanceById = function(name) {
    return processingInstances[processingInstanceIds[name]]
  };
  Processing.Sketch = function(attachFunction) {
    this.attachFunction = attachFunction;
    this.options = {
      pauseOnBlur: false,
      globalKeyEvents: false
    };
    this.onLoad = nop;
    this.onSetup = nop;
    this.onPause = nop;
    this.onLoop = nop;
    this.onFrameStart = nop;
    this.onFrameEnd = nop;
    this.onExit = nop;
    this.params = {};
    this.imageCache = {
      pending: 0,
      images: {},
      operaCache: {},
      add: function(href, img) {
        if (this.images[href]) return;
        if (!isDOMPresent) this.images[href] = null;
        if (!img) {
          img = new Image;
          img.onload = function(owner) {
            return function() {
              owner.pending--
            }
          }(this);
          this.pending++;
          img.src = href
        }
        this.images[href] = img;
        if (window.opera) {
          var div = document.createElement("div");
          div.appendChild(img);
          div.style.position = "absolute";
          div.style.opacity = 0;
          div.style.width = "1px";
          div.style.height = "1px";
          if (!this.operaCache[href]) {
            document.body.appendChild(div);
            this.operaCache[href] = div
          }
        }
      }
    };
    this.sourceCode = undefined;
    this.attach = function(processing) {
      if (typeof this.attachFunction === "function") this.attachFunction(processing);
      else if (this.sourceCode) {
        var func = (new Function("return (" + this.sourceCode + ");"))();
        func(processing);
        this.attachFunction = func
      } else throw "Unable to attach sketch to the processing instance";
    };
    this.toString = function() {
      var i;
      var code = "((function(Sketch) {\n";
      code += "var sketch = new Sketch(\n" + this.sourceCode + ");\n";
      for (i in this.options) if (this.options.hasOwnProperty(i)) {
        var value = this.options[i];
        code += "sketch.options." + i + " = " + (typeof value === "string" ? '"' + value + '"' : "" + value) + ";\n"
      }
      for (i in this.imageCache) if (this.options.hasOwnProperty(i)) code += 'sketch.imageCache.add("' + i + '");\n';
      code += "return sketch;\n})(Processing.Sketch))";
      return code
    }
  };
  var loadSketchFromSources = function(canvas, sources) {
    var code = [],
      errors = [],
      sourcesCount = sources.length,
      loaded = 0;

    function ajaxAsync(url, callback) {
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var error;
          if (xhr.status !== 200 && xhr.status !== 0) error = "Invalid XHR status " + xhr.status;
          else if (xhr.responseText === "") if ("withCredentials" in new XMLHttpRequest && (new XMLHttpRequest).withCredentials === false && window.location.protocol === "file:") error = "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.";
          else error = "File is empty.";
          callback(xhr.responseText, error)
        }
      };
      xhr.open("GET", url, true);
      if (xhr.overrideMimeType) xhr.overrideMimeType("application/json");
      xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
      xhr.send(null)
    }
    function loadBlock(index, filename) {
      function callback(block, error) {
        code[index] = block;
        ++loaded;
        if (error) errors.push(filename + " ==> " + error);
        if (loaded === sourcesCount) if (errors.length === 0) try {
          return new Processing(canvas, code.join("\n"))
        } catch(e) {
          throw "Processing.js: Unable to execute pjs sketch: " + e;
        } else throw "Processing.js: Unable to load pjs sketch files: " + errors.join("\n");
      }
      if (filename.charAt(0) === "#") {
        var scriptElement = document.getElementById(filename.substring(1));
        if (scriptElement) callback(scriptElement.text || scriptElement.textContent);
        else callback("", "Unable to load pjs sketch: element with id '" + filename.substring(1) + "' was not found");
        return
      }
      ajaxAsync(filename, callback)
    }
    for (var i = 0; i < sourcesCount; ++i) loadBlock(i, sources[i])
  };
  var init = function() {
    document.removeEventListener("DOMContentLoaded", init, false);
    processingInstances = [];
    var canvas = document.getElementsByTagName("canvas"),
      filenames;
    for (var i = 0, l = canvas.length; i < l; i++) {
      var processingSources = canvas[i].getAttribute("data-processing-sources");
      if (processingSources === null) {
        processingSources = canvas[i].getAttribute("data-src");
        if (processingSources === null) processingSources = canvas[i].getAttribute("datasrc")
      }
      if (processingSources) {
        filenames = processingSources.split(/\s+/g);
        for (var j = 0; j < filenames.length;) if (filenames[j]) j++;
        else filenames.splice(j, 1);
        loadSketchFromSources(canvas[i], filenames)
      }
    }
    var s, last, source, instance, nodelist = document.getElementsByTagName("script"),
      scripts = [];
    for (s = nodelist.length - 1; s >= 0; s--) scripts.push(nodelist[s]);
    for (s = 0, last = scripts.length; s < last; s++) {
      var script = scripts[s];
      if (!script.getAttribute) continue;
      var type = script.getAttribute("type");
      if (type && (type.toLowerCase() === "text/processing" || type.toLowerCase() === "application/processing")) {
        var target = script.getAttribute("data-processing-target");
        canvas = undef;
        if (target) canvas = document.getElementById(target);
        else {
          var nextSibling = script.nextSibling;
          while (nextSibling && nextSibling.nodeType !== 1) nextSibling = nextSibling.nextSibling;
          if (nextSibling && nextSibling.nodeName.toLowerCase() === "canvas") canvas = nextSibling
        }
        if (canvas) {
          if (script.getAttribute("src")) {
            filenames = script.getAttribute("src").split(/\s+/);
            loadSketchFromSources(canvas, filenames);
            continue
          }
          source = script.textContent || script.text;
          instance = new Processing(canvas, source)
        }
      }
    }
  };
  Processing.reload = function() {
    if (processingInstances.length > 0) for (var i = processingInstances.length - 1; i >= 0; i--) if (processingInstances[i]) processingInstances[i].exit();
    init()
  };
  Processing.loadSketchFromSources = loadSketchFromSources;
  Processing.disableInit = function() {
    if (isDOMPresent) document.removeEventListener("DOMContentLoaded", init, false)
  };
  if (isDOMPresent) {
    window["Processing"] = Processing;
    document.addEventListener("DOMContentLoaded", init, false)
  } else this.Processing = Processing
})(window, window.document, Math);


var EXCHANGE = 0;
var QUEUE = 1;
var PRODUCER = 2;
var CONSUMER = 3;

var exchange_types = {
    direct: 0,
    fanout: 1,
    topic: 2 
};
var PLAYER = true;

// from http://stackoverflow.com/a/105074/342013
function GUID () {
    var S4 = function () {        
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };

    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}

function randomQueueName() {
    return "sim.gen-" + jQuery.base64.encode(CryptoJS.MD5(GUID()).words.join()).substr(0, 12);
}

function getProcessing() {
    return Processing.getInstanceById("Simulator");
}

function bindJavascript(pjs) {
    pjs.bindJavascript(this);
}

function newExchange(name, type) {
    return {
        name: name,
        vhost: "/",
        type: type,
        durable: true,
        auto_delete: false,
        internal: false,
        arguments: []
    };
}

function newQueue(name) {
    return {
        name: name,
        vhost: "/",
        durable: true,
        auto_delete: false,
        arguments: []
    };
}

function newBinding(source, destination, destination_type, routing_key) {
    return {
        source: source,
        vhost: "/",
        destination: destination,
        destination_type: destination_type,
        routing_key: routing_key,
        arguments: []
    };
}


function processBindings(pjs, source, bindings) {
    var ret = [];
    var es = bindings.entrySet().iterator();
    while (es.hasNext()) {
        var me = es.next();
        var destinations = me.getValue();
        for (var i = 0; i < destinations.size(); i++) {
            var dest = destinations.get(i);
            ret.push(newBinding(
                source, 
                dest.getLabel(), 
                pjs.nodeTypeToString(dest.getType()),
                me.getKey()
            ));
        }
    }
    return ret;
}

function buildExport() {
    var pjs = getProcessing();
    var nodes = pjs.getNodes();
    var toExport = {
        exchanges: [],
        queues: [],
        bindings: []
    };

    for (var i = 0; i < nodes.length; i++) {        
        if (nodes[i] != null && (nodes[i].getType() == EXCHANGE || nodes[i].getType() == QUEUE)) {
            var nodeName = nodes[i].getLabel();
            var nodeType = pjs.nodeTypeToString(nodes[i].getType());
            switch(nodes[i].getType()) {
                case EXCHANGE:
                toExport["exchanges"].push(newExchange(nodeName, nodes[i].getExchangeTypeString()));
                toExport["bindings"] = toExport["bindings"].concat(processBindings(pjs, nodeName, nodes[i].getAllBindings()));
                break;
                case QUEUE:
                toExport["queues"].push(newQueue(nodeName));
                break;
                default:
                console.log("ignoring: ", pjs.nodeTypeToString(nodes[i].getType()));
            }
        }
    }

    return toExport;
}

function importNodes(nodes) {
    var sections = 5;
    var pjs = getProcessing();
    var imp_exchanges = {};
    var imp_queues = {};

    jQuery.each(nodes["exchanges"], function(k, v) {
        var x = (pjs.width/sections) * 2; // 2 is the exchange section;
        var y = ((pjs.height-50)/nodes["exchanges"].length+1) * (k+1);
        imp_exchanges[v["name"]] = pjs.addNodeByType(EXCHANGE, v["name"], x, y);
        imp_exchanges[v["name"]].setExchangeType(exchange_types[v["type"]]);
    });

    jQuery.each(nodes["queues"], function(k, v) {
        var x = (pjs.width/sections) * 3; // 3 is the queue section;
        var y = ((pjs.height-50)/nodes["queues"].length+1) * (k+1);
        imp_queues[v["name"]] = pjs.addNodeByType(QUEUE, v["name"], x, y);
        pjs.bindToAnonExchange(imp_queues[v["name"]]);
    });

    jQuery.each(nodes["bindings"], function(k, v) {        
        var destination = v.destination_type == "queue" ? imp_queues[v.destination] : imp_exchanges[v.destination];
        var source = imp_exchanges[v.source];
        var routing_key = v.routing_key;
        var binding = pjs.addConnection(destination, source);
        binding.updateBindingKey(routing_key);
    });

    return nodes["exchanges"].length + nodes["queues"].length + nodes["bindings"].length;
}

function getResultMessage(msg) {
    return '<span id="result-msg" class="label label-success" style="float: right;">' + msg +'</span>';
}

function displayResultMessage(msg) {
    jQuery("#btn-toolbar").append(getResultMessage(msg));
    setTimeout(function () {
        jQuery("#result-msg").remove();
    }, 5000);
}

function getDefinitions() {
    jQuery.getJSON('/definitions', function (data) {
        var nb = importNodes(data);

        if (nb > 0) {
            displayResultMessage("Success");
        } else {
            displayResultMessage("Nothing to import");
        }
    });
}

function postDefinitions() {
    var definitions = buildExport();
    jQuery.ajax('/definitions', {
        data: JSON.stringify(definitions),
        contentType: 'application/json',
        type: 'POST',
        success: function (data) {
            displayResultMessage("Success");
        }
    });
}

function processPublish(node) {
    if (node.outgoing.size() > 0) {
        var payload = node.msg ? node.msg.payload : null;
        var routingKey = node.msg ? node.msg.routingKey : null;
        return {
            to: node.outgoing.get(0).getLabel(), 
            payload: payload,
            routing_key: routingKey
        };
    } else {
        return null;
    }    
}

function processConsume(node) {
    if (node.outgoing.size() > 0) {
        return node.outgoing.get(0).getLabel();   
    } else {
        return null;
    }
}

function exportToPlayer() {
    var pjs = getProcessing();
    var nodes = pjs.getNodes();
    var toExport = {
        exchanges: [],
        queues: [],
        bindings: [],
        producers: [],
        consumers: []
    };

    for (var i = 0; i < nodes.length; i++) {        
        if (nodes[i] != null) {
            var nodeName = nodes[i].getLabel();
            var nodeType = pjs.nodeTypeToString(nodes[i].getType());
            var nodeX = nodes[i].x;
            var nodeY = nodes[i].y;            
            switch(nodes[i].getType()) {
                case EXCHANGE:
                toExport["exchanges"].push({name: nodeName, type: nodes[i].getExchangeType(), x: nodeX, y: nodeY});
                toExport["bindings"] = toExport["bindings"].concat(processBindings(pjs, nodeName, nodes[i].getAllBindings()));
                break;
                case QUEUE:
                toExport["queues"].push({name: nodeName, x: nodeX, y: nodeY});
                break;
                case PRODUCER:
                toExport["producers"].push({name: nodeName, x: nodeX, y: nodeY, interval: nodes[i].intervalSeconds, publish: processPublish(nodes[i])});
                break;
                case CONSUMER:
                toExport["consumers"].push({name: nodeName, x: nodeX, y: nodeY, consume: processConsume(nodes[i])});
                break;
                default:
                console.log("ignoring: ", pjs.nodeTypeToString(nodes[i].getType()));
            }
        }
    }

    toExport.advanced_mode = pjs.getAdvancedMode();

    return toExport;
}

var withPTimeouts = {};

function withProcessing() {
    var id = arguments[0];
    var callback = arguments[1];
    var args = Array.prototype.slice.call(arguments, 2);        
    var pjs = Processing.getInstanceById(id);

    if (typeof withPTimeouts[id] != 'undefined') {
        clearTimeout(withPTimeouts[id]);
    }

    if(pjs != null) {
        args.unshift(pjs);
        callback.apply(null, args);
        return;
    }

    if (typeof withPTimeouts[id] == 'undefined') {
        var the_args = Array.prototype.slice.call(arguments);
        withPTimeouts[id] = setTimeout(function () {
            withProcessing.apply(null, the_args);
        }, 250);
    }
}

function publishMsgWithInterval(pjs, seconds, uuid, payload, routingKey, isPlayer) {
    var interval = setInterval(function () {
        pjs.publishMessage(uuid, payload, routingKey);
    }, seconds * 1000);
    if (isPlayer) {
        pjs.publishMessage(uuid, payload, routingKey);
    }
    pjs.setProducerInterval(uuid, interval, seconds);
}

function loadIntoPlayer(pjs, data) {
    var nodes = JSON.parse(data);
    var imp_exchanges = {};
    var imp_queues = {};
    var imp_producers = {};
    var imp_consumers = {};

    jQuery.each(nodes["exchanges"], function(k, v) {
        imp_exchanges[v["name"]] = pjs.addNodeByType(EXCHANGE, v["name"], v['x'], v['y']);
        imp_exchanges[v["name"]].setExchangeType(v["type"]);
    });

    jQuery.each(nodes["queues"], function(k, v) {
        imp_queues[v["name"]] = pjs.addNodeByType(QUEUE, v["name"], v['x'], v['y']);
        pjs.bindToAnonExchange(imp_queues[v["name"]]);
    });

    jQuery.each(nodes["bindings"], function(k, v) {        
        var destination = v.destination_type == "queue" ? imp_queues[v.destination] : imp_exchanges[v.destination];
        var source = imp_exchanges[v.source];
        var routing_key = v.routing_key;
        var binding = pjs.addConnection(destination, source);
        binding.updateBindingKey(routing_key);
    });

    jQuery.each(nodes['producers'], function(k, v) {
        imp_producers[v["name"]] = pjs.addNodeByType(PRODUCER, v["name"], v['x'], v['y']);
        if (v['publish']) {
            var from = imp_producers[v['name']];
            var to = imp_exchanges[v['publish']['to']];
            pjs.addConnection(from, to);
        }

        if (v['interval'] > 0) {
            publishMsgWithInterval(pjs, v['interval'], v['name'], v['publish']['payload'], v['publish']['routing_key'], PLAYER);
        }
    });

    jQuery.each(nodes['consumers'], function(k, v) {
        imp_consumers[v["name"]] = pjs.addNodeByType(CONSUMER, v["name"], v['x'], v['y']);
        if (v['consume']) {
            var from = imp_consumers[v['name']];
            var to = imp_queues[v['consume']];
            pjs.addConnection(from, to);
        }
    });

    pjs.toggleAdvancedMode(nodes.advanced_mode);
}

function show_message(consumer_id, msg) {
    jQuery("#msg-log").append('<pre>Consumer: ' + consumer_id + ' got msg:  ' + msg  + '</pre>');
    jQuery("#msg-log").scrollTop($("#msg-log")[0].scrollHeight);
}

function stopRendering(pjs) {
    console.log("stopRendering");
    pjs.stopRendering();    
}

function startRendering(pjs, pId) {
    console.log("startRendering");
    pjs.startRendering(pId);
}

function initSimulator(id) {
    jQuery(window).focus(function() {
        withProcessing(id, startRendering, id);
    });
    
    jQuery(window).blur(function() {
        withProcessing(id, stopRendering);
    });

    // withProcessing(id, bindJavascript);
}
function reset_form(id) {
    jQuery(id).each(function () {
        this.reset();
    });
}

function disable_form(id) {
    jQuery(id).find(':input:not(:disabled)').prop('disabled', true);
}

function enable_form(id){
    jQuery(id).find(':input:disabled').prop('disabled', false);
}

function init_form(id, submit_callback) {
    disable_form(id);
    jQuery(id).submit(submit_callback);
}

function show_form() {
    if (arguments.length == 0) return;

    ids = Array.prototype.slice.call(arguments);

    jQuery("#inspector-msg").addClass("hidden");
    jQuery('form').each(function (i, el) {
        var el =  jQuery(el);
        if (ids.indexOf('#' + el.attr('id')) != -1) {
            el.removeClass('hidden');
        } else {
            if (!el.hasClass('hidden')) {
                el.addClass('hidden');
            }
        }
    });
}

function disable_button(selector) {
    jQuery(selector).attr('disabled', 'disabled');
    jQuery(selector).addClass('disabled');
}

function enable_button(selector) {
    jQuery(selector).removeAttr('disabled');
    jQuery(selector).removeClass('disabled');
}

function handle_edit_producer_form() {
    var uuid = jQuery('#edit_producer_id').val();
    var name = jQuery('#edit_producer_name').val();
    var pjs = getProcessing();
    pjs.editProducer(uuid, name);
    return false;
}

function handle_producer_delete() {
    var producer_id = jQuery('#edit_producer_id').val();
    var pjs = getProcessing();
    pjs.deleteNode(producer_id);
    reset_form("#edit_producer_form");
    disable_form("#edit_producer_form");
    reset_form("#new_message_form");
    disable_form("#new_message_form");
    return false;
}

function handle_edit_consumer_form() {
    var uuid = jQuery('#edit_consumer_id').val();
    var name = jQuery('#edit_consumer_name').val();
    var pjs = getProcessing();
    pjs.editConsumer(uuid, name);
    return false;
}

function handle_consumer_delete() {
    var consumer_id = jQuery('#edit_consumer_id').val();
    var pjs = getProcessing();
    pjs.deleteNode(consumer_id);
    reset_form("#edit_consumer_form");
    disable_form("#edit_consumer_form");
    return false;
}

function handle_new_message_form() {
    var uuid = jQuery('#new_message_producer_id').val();
    var payload = jQuery('#new_message_producer_payload').val();
    var routing_key = jQuery('#new_message_producer_routing_key').val();
    var seconds = parseInt(jQuery('#new_message_producer_seconds').val(), 10);
    var pjs = getProcessing();

    var interval = null;

    if (seconds > 0) {
        pjs.stopPublisher(uuid);
        publishMsgWithInterval(pjs, seconds, uuid, payload, routing_key, !PLAYER);
        enable_button('#new_message_stop');
    } else {
        disable_button('#new_message_stop');
    }

    pjs.publishMessage(uuid, payload, routing_key);

    return false;
}

function handle_binding_form() {
    var binding_id = jQuery('#binding_id').val();
    var bk = jQuery.trim(jQuery('#binding_key').val());
    var pjs = getProcessing();
    pjs.updateBindingKey(binding_id, bk);
    return false;
}

function handle_queue_form() {
    var uuid = jQuery('#queue_id').val();
    var name = jQuery.trim(jQuery('#queue_name').val());
    var pjs = getProcessing();
    pjs.editQueue(uuid, name);
    jQuery('#queue_id').val(name);
    return false;
}

function handle_queue_delete() {
    var queue_id = jQuery('#queue_id').val();
    var pjs = getProcessing();
    pjs.deleteNode(queue_id);
    reset_form("#queue_form");
    disable_form("#queue_form");
    return false;
}

function handle_queue_unbind() {
    var binding_id = jQuery('#binding_id').val();
    var pjs = getProcessing();
    pjs.removeBinding(binding_id);
    reset_form("#bindings_form");
    disable_form("#bindings_form");
    return false;
}

function handle_exchange_form() {
    var uuid = jQuery('#exchange_id').val();
    var name = jQuery.trim(jQuery('#exchange_name').val());
    var type = jQuery('#exchange_type').val();
    var pjs = getProcessing();
    pjs.editExchange(uuid, name, type);
    jQuery('#exchange_id').val(name);
    return false;
}

function handle_exchange_delete() {
    var exchange_id = jQuery('#exchange_id').val();
    var pjs = getProcessing();
    pjs.deleteNode(exchange_id);
    reset_form("#exchange_form");
    disable_form("#exchange_form");
    return false;
}

function handle_stop_publisher_btn() {
    var uuid = jQuery('#new_message_producer_id').val();
    var pjs = getProcessing();
    pjs.stopPublisher(uuid);
    disable_button('#new_message_stop');
    jQuery('#new_message_producer_seconds').val(null);
}

function handle_advanced_mode_btn() {
    jQuery('#advanced_mode').toggleClass('btn-inverse');
    var current = jQuery('#advanced_mode').text();
    var text = current  == 'Advanced Mode' ? 'Basic Mode' : 'Advanced Mode';
    jQuery('#advanced_mode').text(text);

    var pjs = getProcessing();
    pjs.toggleAdvancedMode(current == 'Advanced Mode');

    return false;
}

function handle_import_btn() {
    getDefinitions();
    return false;
}

function handle_export_btn() {
    postDefinitions();
    return false;
}

function display_export_json() {
    var exp = exportToPlayer(),
        json_string;

    if (jQuery('#pretty-print').is(':checked')) {
        json_string = JSON.stringify(exp, null, 2);
    } else {
        json_string = JSON.stringify(exp);
    }

    jQuery('#player-modal-code').html('<pre>' + json_string + '</pre>');
}

function handle_pretty_print_checkbox() {
    display_export_json();
}

function handle_export_player_btn() {
    display_export_json();
    jQuery('#player-modal').modal('show');
    return false;
}

jQuery(document).ready(function() {
    init_form('#edit_producer_form', handle_edit_producer_form);
    init_form('#edit_consumer_form', handle_edit_consumer_form);
    init_form('#new_message_form', handle_new_message_form);
    init_form('#bindings_form', handle_binding_form);
    init_form('#queue_form', handle_queue_form);
    init_form('#exchange_form', handle_exchange_form);

    jQuery("#new_message_stop").click(handle_stop_publisher_btn);

    jQuery("#advanced_mode").click(handle_advanced_mode_btn);
    jQuery('#import').click(handle_import_btn);
    jQuery('#export').click(handle_export_btn);
    jQuery('#export-player').click(handle_export_player_btn);
    jQuery('#pretty-print').change(handle_pretty_print_checkbox);

    jQuery('#binding_delete').click(handle_queue_unbind);
    jQuery('#consumer_delete').click(handle_consumer_delete);
    jQuery('#producer_delete').click(handle_producer_delete);
    jQuery('#queue_delete').click(handle_queue_delete);
    jQuery('#exchange_delete').click(handle_exchange_delete);
});