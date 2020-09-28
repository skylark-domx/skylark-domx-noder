/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var n=t.define,require=t.require,r="function"==typeof n&&n.amd,o=!r&&"undefined"!=typeof exports;if(!r&&!n){var i={};n=t.define=function(e,t,n){"function"==typeof n?(i[e]={factory:n,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var n=t.split("/"),r=e.split("/");n.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?n.pop():n.push(r[o]));return n.join("/")}(t,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:n}},require=t.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var n=[];module.deps.forEach(function(e){n.push(require(e))}),module.exports=module.factory.apply(t,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-noder/noder",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser"],function(e,t,n){var r=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),o=/^\s*<(\w+|!)[^>]*>/,i=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,a=document.createElement("div"),u=document.createElement("table"),l=document.createElement("tbody"),d=document.createElement("tr"),c={tr:l,tbody:u,thead:u,tfoot:u,td:d,th:d,"*":a},s=/^(?:body|html)$/i,f=Array.prototype.map,m=Array.prototype.slice;function p(e,n){return t.isArrayLike(e)||(e=[e]),n&&(e=f.call(e,function(e){return e.cloneNode(!0)})),t.flatten(e)}function h(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function v(e,n){if(t.isFunction(e))return e.apply(n,[]);if(t.isArrayLike(e)){for(var r,o=0;o<e.length;o++)t.isFunction(e[o])&&(e[o]=e[o].apply(n,[]),t.isArrayLike(e[o])&&(r=!0));r&&(e=t.flatten(e))}return e}function y(e,t,n){t=v(t,e);for(var r=e,o=p(t,n),i=0;i<o.length;i++)r.appendChild(o[i]);return this}function g(e,t,n){var r;if(r=/svg/i.test(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),t)for(var o in t)r.setAttribute(o,t[o]);return n&&y(n,r),r}var N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function b(e,t,n){if(n)return e.parentNode===t;if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function w(e){return e?9==e.nodeType?e:e.ownerDocument:document}function E(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||E(e.parentNode)))}function k(){return k}return t.mixin(k,{active:function(e){var t;e=e||document;try{t=e.activeElement}catch(n){t=e.body}t||(t=e.body);t.nodeName||(t=e.body);return t},after:function(e,t,n){t=v(t,e);var r=(i=e).parentNode;if(r)for(var o=p(t,n),i=i.nextSibling,a=0;a<o.length;a++)i?r.insertBefore(o[a],i):r.appendChild(o[a]);return this},append:y,before:function(e,t,n){t=v(t,e);var r=e,o=r.parentNode;if(o)for(var i=p(t,n),a=0;a<i.length;a++)o.insertBefore(i[a],r);return this},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,t){var n,o=this;if(!r||1!==e.nodeType||t)return e.cloneNode(t);if(!t)return n=document.createElement(e.nodeName),each(o.getAttribs(e),function(t){o.setAttrib(n,t.nodeName,o.getAttrib(e,t.nodeName))}),n},contains:function(e,t){return b(t,e)},contents:function(e){if(h(e,"iframe"))return e.contentDocument;return e.childNodes},createElement:g,createFragment:function(e){if(e=t.trim(e),i.test(e))return[g(RegExp.$1)];var n=o.test(e)&&RegExp.$1;n in c||(n="*");var r=c[n];return r.innerHTML=function(e){for(var t=e.split("/>"),n="",r=0;r<t.length-1;r++){var o=t[r].split("<");n+=t[r]+"></"+o[o.length-1].split(" ")[0]+">"}return n+t[t.length-1]}(""+e),dom=m.call(r.childNodes),dom.forEach(function(e){r.removeChild(e)}),dom},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:function(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this},fullScreen:function(e){if(!1===e)n.exitFullScreen.apply(document);else{if(!e)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;n.requestFullScreen.apply(e),e}},focusable:function(e,t){var n,r,o,i,a,u=e.nodeName.toLowerCase();if("area"===u)return n=e.parentNode,r=n.name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&((o=$("img[usemap='#"+r+"']")).length>0&&o.is(":visible"));/^(input|select|textarea|button|object)$/.test(u)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===u&&e.href||t;return i&&$(e).is(":visible")&&visible($(e))},fromPoint:function(e,t){return document.elementFromPoint(e,t)},html:function(e,n){if(void 0===n)return e.innerHTML;if(this.empty(e),n=n||"",t.isString(n)&&(n=n.replace(N,"<$1></$2>")),t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n);return this},isActive:function(e){return e===document.activeElement&&(e.type||e.href)},isChildOf:b,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isEditable:E,isInDocument:function(e){return e===document.body||document.body.contains(e)},isInput:function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||E(e)},isWindow:t.isWindow,nodeName:h,offsetParent:function(e){var t=e.offsetParent||document.body;for(;t&&!s.test(t.nodeName)&&"static"==document.defaultView.getComputedStyle(t).position;)t=t.offsetParent;return t},ownerDoc:w,ownerWindow:function(e){var t=w(e);return t.defaultView||t.parentWindow},prepend:function(e,t,n){for(var r=e,o=r.firstChild,i=p(t,n),a=0;a<i.length;a++)o?r.insertBefore(i[a],o):r.appendChild(i[a]);return this},reflow:function(e){null==el&&(e=document);return e.offsetHeight,this},remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,n){t.isArrayLike(n)||(n=[n]);for(var r=0;r<n.length;r++)e.removeChild(n[r]);return this},replace:function(e,t){return t.parentNode.replaceChild(e,t),this},selectable:function(e,t){if(void 0===e||void 0===e.style)return;e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off"},traverse:function e(t,n){n(t);for(var r=0,o=t.childNodes.length;r<o;r++)e(t.childNodes[r],n);return this},reverse:function(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}},wrapper:function(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild);e.parentNode.insertBefore(n,e),n.appendChild(e)},wrapperInner:function(e,t){var n=m.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this},unwrap:function(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}}),e.attach("domx.noder",k)}),e("skylark-domx-noder/main",["./noder"],function(e){return e}),e("skylark-domx-noder",["skylark-domx-noder/main"],function(e){return e})}(n),!r){var a=require("skylark-langx-ns");o?module.exports=a:t.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-noder.js.map
