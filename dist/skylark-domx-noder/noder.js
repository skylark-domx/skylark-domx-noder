/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-arrays","skylark-langx-strings","skylark-langx-scripter","skylark-domx-browser"],function(e,t,n,r,o,i){var a=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),u=/^\s*<(\w+|!)[^>]*>/,c=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,l=document.createElement("div"),d=document.createElement("table"),s=document.createElement("tbody"),f=document.createElement("tr"),m={tr:s,tbody:d,thead:d,tfoot:d,td:f,th:f,"*":l},p=/^(?:body|html)$/i,h=/^$|^module$|\/(?:java|ecma)script/i,v=Array.prototype.map,g=Array.prototype.slice;function y(e,r){var o=function(e){return"function"==typeof e&&(e=e()),v.call(t.isArrayLike(e)?e:[e],e=>("function"==typeof e&&(e=e()),S(e)||A(e)?e:"string"==typeof e&&/\S/.test(e)?document.createTextNode(e):void 0)).filter(e=>e)}(e);return r&&(o=v.call(o,function(e){return e.cloneNode(!0)})),n.flatten(o)}function N(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function b(e,r){if(t.isFunction(e))return e.apply(r,[]);if(t.isArrayLike(e)){for(var o,i=0;i<e.length;i++)t.isFunction(e[i])&&(e[i]=e[i].apply(r,[]),t.isArrayLike(e[i])&&(o=!0));o&&(e=n.flatten(e))}return e}function w(e,t,n){for(var r=e,o=y(t=b(t,e),n),i=0;i<o.length;i++)r.appendChild(o[i]);return this}function C(e,n,r,o){var i;if(i=/svg/i.test(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),t.isHtmlNode(n)?(o=n,n=null,r=null):t.isHtmlNode(r)&&(o=r,r=null),n)for(var a in n)i[a]=n[a];if(r)for(var a in r)i.setAttribute(a,r[a]);return o&&w(o,i),i}function E(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this}function k(e){return!1===e?i.exitFullscreen.apply(document):e?e[i.support.fullscreen.requestFullscreen]():document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}var x=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function T(e,t,n){if(n)return e.parentNode===t;if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function A(e){return e&&3===e.nodeType}function S(e){return e&&1===e.nodeType}function L(e){return e?9==e.nodeType?e:e.ownerDocument:document}function F(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||F(e.parentNode)))}function D(){return D}return Object.assign(D,{active:function(e){var t;e=e||document;try{t=e.activeElement}catch(n){t=e.body}return t||(t=e.body),t.nodeName||(t=e.body),t},after:function(e,t,n){t=b(t,e);var r=(i=e).parentNode;if(r)for(var o=y(t,n),i=i.nextSibling,a=0;a<o.length;a++)i?r.insertBefore(o[a],i):r.appendChild(o[a]);return this},append:w,before:function(e,t,n){t=b(t,e);var r=e,o=r.parentNode;if(o)for(var i=y(t,n),a=0;a<i.length;a++)o.insertBefore(i[a],r);return this},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,t){var n,r=this;return!a||1!==e.nodeType||t?e.cloneNode(t):t?void 0:(n=document.createElement(e.nodeName),each(r.getAttribs(e),function(t){r.setAttrib(n,t.nodeName,r.getAttrib(e,t.nodeName))}),n)},contains:function(e,t){return T(t,e)},contents:function(e){return N(e,"iframe")?e.contentDocument:e.childNodes},createElement:C,createFragment:function(e){if(e=r.trim(e),c.test(e))return[C(RegExp.$1)];var t=u.test(e)&&RegExp.$1;t in m||(t="*");var n=m[t];return n.innerHTML=function(e){for(var t=e.split("/>"),n="",r=0;r<t.length-1;r++){var o=t[r].split("<");n+=t[r]+"></"+o[o.length-1].split(" ")[0]+">"}return n+t[t.length-1]}(""+e),dom=g.call(n.childNodes),dom.forEach(function(e){n.removeChild(e)}),dom},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:E,generateId:function(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,r=0;n--;)r+=t.charCodeAt(n);return r.toString(36)},fullscreen:k,focusable:function(e,t){var n,r,o,i,a,u=e.nodeName.toLowerCase();return"area"===u?(r=(n=e.parentNode).name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&(o=$("img[usemap='#"+r+"']")).length>0&&o.is(":visible")):(/^(input|select|textarea|button|object)$/.test(u)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===u&&e.href||t,i&&$(e).is(":visible")&&visible($(e)))},fromPoint:function(e,t){return document.elementFromPoint(e,t)},html:function(e,n){var r=function(e,n){if(void 0===n)return e.innerHTML;if(E(e),n=n||"",t.isString(n)&&(n=n.replace(x,"<$1></$2>")),t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n);return this}(e,n);if(void 0!==n){for(var i=e.querySelectorAll("script"),a=0;a<i.length;a++){var u=i[a];h.test(u.type||"")&&o.evaluate(u.textContent,u)}return this}return r},isActive:function(e){return e===document.activeElement&&(e.type||e.href)},isChildOf:T,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isEditable:F,isElement:S,isFullscreen:function(e){return k()===e},isInDocument:function(e){return e===document.body||document.body.contains(e)},isInFrame:function(){try{return window.parent!==window.self}catch(e){return!0}},isInput:function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||F(e)},isTextNode:A,isWindow:langx.isWindow,nodeName:N,offsetParent:function(e){for(var t=e.offsetParent||document.body;t&&!p.test(t.nodeName)&&"static"==document.defaultView.getComputedStyle(t).position;)t=t.offsetParent;return t},ownerDoc:L,ownerWindow:function(e){var t=L(e);return t.defaultView||t.parentWindow},prepend:function(e,t,n){for(var r=e,o=r.firstChild,i=y(t,n),a=0;a<i.length;a++)o?r.insertBefore(i[a],o):r.appendChild(i[a]);return this},reflow:function(e){return e||(e=document),e.offsetHeight,this},remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,n){t.isArrayLike(n)||(n=[n]);for(var r=0;r<n.length;r++)e.removeChild(n[r]);return this},replace:function(e,t){return t.parentNode.replaceChild(e,t),this},selectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},traverse:function e(t,n){n(t);for(var r=0,o=t.childNodes.length;r<o;r++)e(t.childNodes[r],n);return this},reverse:function(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}},wrapper:function(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild),e.parentNode.insertBefore(n,e),n.appendChild(e)},wrapperInner:function(e,t){var n=g.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this},unwrap:function(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}}),e.attach("domx.noder",D)});
//# sourceMappingURL=sourcemaps/noder.js.map
