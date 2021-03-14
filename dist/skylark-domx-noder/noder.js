/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser"],function(e,t,n){var r=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),o=/^\s*<(\w+|!)[^>]*>/,i=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,a=document.createElement("div"),u=document.createElement("table"),c=document.createElement("tbody"),l=document.createElement("tr"),d={tr:c,tbody:u,thead:u,tfoot:u,td:l,th:l,"*":a},s=/^(?:body|html)$/i,f=Array.prototype.map,m=Array.prototype.slice;function h(e,n){var r=function(e){return"function"==typeof e&&(e=e()),f.call(t.isArrayLike(e)?e:[e],e=>("function"==typeof e&&(e=e()),E(e)||C(e)?e:"string"==typeof e&&/\S/.test(e)?document.createTextNode(e):void 0)).filter(e=>e)}(e);return n&&(r=f.call(r,function(e){return e.cloneNode(!0)})),t.flatten(r)}function p(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function v(e,n){if(t.isFunction(e))return e.apply(n,[]);if(t.isArrayLike(e)){for(var r,o=0;o<e.length;o++)t.isFunction(e[o])&&(e[o]=e[o].apply(n,[]),t.isArrayLike(e[o])&&(r=!0));r&&(e=t.flatten(e))}return e}function g(e,t,n){for(var r=e,o=h(t=v(t,e),n),i=0;i<o.length;i++)r.appendChild(o[i]);return this}function y(e,n,r,o){var i;if(i=/svg/i.test(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),t.isHtmlNode(n)?(o=n,n=null,r=null):t.isHtmlNode(r)&&(o=r,r=null),n)for(var a in n)i[a]=n[a];if(r)for(var a in r)i.setAttribute(a,r[a]);return o&&g(o,i),i}function N(e){return!1===e?n.exitFullscreen.apply(document):e?n.requestFullscreen.apply(e):document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}var b=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function w(e,t,n){if(n)return e.parentNode===t;if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function C(e){return e&&3===e.nodeType}function E(e){return e&&1===e.nodeType}function T(e){return e?9==e.nodeType?e:e.ownerDocument:document}function A(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||A(e.parentNode)))}function x(){return x}return t.mixin(x,{active:function(e){var t;e=e||document;try{t=e.activeElement}catch(n){t=e.body}return t||(t=e.body),t.nodeName||(t=e.body),t},after:function(e,t,n){t=v(t,e);var r=(i=e).parentNode;if(r)for(var o=h(t,n),i=i.nextSibling,a=0;a<o.length;a++)i?r.insertBefore(o[a],i):r.appendChild(o[a]);return this},append:g,before:function(e,t,n){t=v(t,e);var r=e,o=r.parentNode;if(o)for(var i=h(t,n),a=0;a<i.length;a++)o.insertBefore(i[a],r);return this},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,t){var n,o=this;return!r||1!==e.nodeType||t?e.cloneNode(t):t?void 0:(n=document.createElement(e.nodeName),each(o.getAttribs(e),function(t){o.setAttrib(n,t.nodeName,o.getAttrib(e,t.nodeName))}),n)},contains:function(e,t){return w(t,e)},contents:function(e){return p(e,"iframe")?e.contentDocument:e.childNodes},createElement:y,createFragment:function(e){if(e=t.trim(e),i.test(e))return[y(RegExp.$1)];var n=o.test(e)&&RegExp.$1;n in d||(n="*");var r=d[n];return r.innerHTML=function(e){for(var t=e.split("/>"),n="",r=0;r<t.length-1;r++){var o=t[r].split("<");n+=t[r]+"></"+o[o.length-1].split(" ")[0]+">"}return n+t[t.length-1]}(""+e),dom=m.call(r.childNodes),dom.forEach(function(e){r.removeChild(e)}),dom},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:function(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this},generateId:function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,r=0;n--;)r+=t.charCodeAt(n);return r.toString(36)},fullscreen:N,focusable:function(e,t){var n,r,o,i,a,u=e.nodeName.toLowerCase();return"area"===u?(r=(n=e.parentNode).name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&(o=$("img[usemap='#"+r+"']")).length>0&&o.is(":visible")):(/^(input|select|textarea|button|object)$/.test(u)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===u&&e.href||t,i&&$(e).is(":visible")&&visible($(e)))},fromPoint:function(e,t){return document.elementFromPoint(e,t)},html:function(e,n){if(void 0===n)return e.innerHTML;if(this.empty(e),n=n||"",t.isString(n)&&(n=n.replace(b,"<$1></$2>")),t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n);return this},isActive:function(e){return e===document.activeElement&&(e.type||e.href)},isChildOf:w,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isEditable:A,isElement:E,isFullscreen:function(e){return N()===e},isInDocument:function(e){return e===document.body||document.body.contains(e)},isInFrame:function(){try{return window.parent!==window.self}catch(e){return!0}},isInput:function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||A(e)},isTextNode:C,isWindow:t.isWindow,nodeName:p,offsetParent:function(e){for(var t=e.offsetParent||document.body;t&&!s.test(t.nodeName)&&"static"==document.defaultView.getComputedStyle(t).position;)t=t.offsetParent;return t},ownerDoc:T,ownerWindow:function(e){var t=T(e);return t.defaultView||t.parentWindow},prepend:function(e,t,n){for(var r=e,o=r.firstChild,i=h(t,n),a=0;a<i.length;a++)o?r.insertBefore(i[a],o):r.appendChild(i[a]);return this},reflow:function(e){return null==el&&(e=document),e.offsetHeight,this},remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,n){t.isArrayLike(n)||(n=[n]);for(var r=0;r<n.length;r++)e.removeChild(n[r]);return this},replace:function(e,t){return t.parentNode.replaceChild(e,t),this},selectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},traverse:function e(t,n){n(t);for(var r=0,o=t.childNodes.length;r<o;r++)e(t.childNodes[r],n);return this},reverse:function(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}},wrapper:function(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild),e.parentNode.insertBefore(n,e),n.appendChild(e)},wrapperInner:function(e,t){var n=m.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this},unwrap:function(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}}),e.attach("domx.noder",x)});
//# sourceMappingURL=sourcemaps/noder.js.map
