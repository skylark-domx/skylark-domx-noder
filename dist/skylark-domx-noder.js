/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,n){var t=n.define,require=n.require,r="function"==typeof t&&t.amd,o=!r&&"undefined"!=typeof exports;if(!r&&!t){var i={};t=n.define=function(e,n,t){"function"==typeof t?(i[e]={factory:t,deps:n.map(function(n){return function(e,n){if("."!==e[0])return e;var t=n.split("/"),r=e.split("/");t.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?t.pop():t.push(r[o]));return t.join("/")}(n,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:t}},require=n.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(n,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-noder/noder",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser"],function(e,n,t){var r=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),o=/^\s*<(\w+|!)[^>]*>/,i=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,a=document.createElement("div"),u=document.createElement("table"),d=document.createElement("tbody"),l=document.createElement("tr"),c={tr:d,tbody:u,thead:u,tfoot:u,td:l,th:l,"*":a},s=/^(?:body|html)$/i,f=Array.prototype.map,m=Array.prototype.slice;function p(e,t){return n.isArrayLike(e)||(e=[e]),t&&(e=f.call(e,function(e){return e.cloneNode(!0)})),n.flatten(e)}function h(e,n){var t=e.nodeName&&e.nodeName.toLowerCase();return void 0!==n?t===n.toLowerCase():t}function v(e,t){if(n.isFunction(e))return e.apply(t,[]);if(n.isArrayLike(e)){for(var r,o=0;o<e.length;o++)n.isFunction(e[o])&&(e[o]=e[o].apply(t,[]),n.isArrayLike(e[o])&&(r=!0));r&&(e=n.flatten(e))}return e}function y(e,n,t){n=v(n,e);for(var r=e,o=p(n,t),i=0;i<o.length;i++)r.appendChild(o[i]);return this}function g(e,n,t){var r;if(r=/svg/i.test(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),n)for(var o in n)r.setAttribute(o,n[o]);return t&&y(t,r),r}var N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function b(e,n,t){if(t)return e.parentNode===n;if(document.documentElement.contains)return n.contains(e);for(;e;){if(n===e)return!0;e=e.parentNode}return!1}function w(e){return e?9==e.nodeType?e:e.ownerDocument:document}function k(){return k}return n.mixin(k,{active:function(e){var n;e=e||document;try{n=e.activeElement}catch(t){n=e.body}n||(n=e.body);n.nodeName||(n=e.body);return n},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,n){var t,o=this;if(!r||1!==e.nodeType||n)return e.cloneNode(n);if(!n)return t=document.createElement(e.nodeName),each(o.getAttribs(e),function(n){o.setAttrib(t,n.nodeName,o.getAttrib(e,n.nodeName))}),t},contents:function(e){if(h(e,"iframe"))return e.contentDocument;return e.childNodes},createElement:g,createFragment:function(e){if(e=n.trim(e),i.test(e))return[g(RegExp.$1)];var t=o.test(e)&&RegExp.$1;t in c||(t="*");var r=c[t];return r.innerHTML=function(e){for(var n=e.split("/>"),t="",r=0;r<n.length-1;r++){var o=n[r].split("<");t+=n[r]+"></"+o[o.length-1].split(" ")[0]+">"}return t+n[n.length-1]}(""+e),dom=m.call(r.childNodes),dom.forEach(function(e){r.removeChild(e)}),dom},contains:function(e,n){return b(n,e)},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:function(e){for(;e.hasChildNodes();){var n=e.firstChild;e.removeChild(n)}return this},fullScreen:function(e){if(!1===e)t.exitFullScreen.apply(document);else{if(!e)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;t.requestFullScreen.apply(e),e}},focusable:function(e,n){var t,r,o,i,a,u=e.nodeName.toLowerCase();if("area"===u)return t=e.parentNode,r=t.name,!(!e.href||!r||"map"!==t.nodeName.toLowerCase())&&((o=$("img[usemap='#"+r+"']")).length>0&&o.is(":visible"));/^(input|select|textarea|button|object)$/.test(u)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===u&&e.href||n;return i&&$(e).is(":visible")&&visible($(e))},html:function(e,t){if(void 0===t)return e.innerHTML;if(this.empty(e),t=t||"",n.isString(t)&&(t=t.replace(N,"<$1></$2>")),n.isString(t)||n.isNumber(t))e.innerHTML=t;else if(n.isArrayLike(t))for(var r=0;r<t.length;r++)e.appendChild(t[r]);else e.appendChild(t);return this},isChildOf:b,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isInDocument:function(e){return e===document.body||document.body.contains(e)},isWindow:n.isWindow,nodeName:h,offsetParent:function(e){var n=e.offsetParent||document.body;for(;n&&!s.test(n.nodeName)&&"static"==document.defaultView.getComputedStyle(n).position;)n=n.offsetParent;return n},ownerDoc:w,ownerWindow:function(e){var n=w(e);return n.defaultView||n.parentWindow},after:function(e,n,t){n=v(n,e);var r=(i=e).parentNode;if(r)for(var o=p(n,t),i=i.nextSibling,a=0;a<o.length;a++)i?r.insertBefore(o[a],i):r.appendChild(o[a]);return this},before:function(e,n,t){n=v(n,e);var r=e,o=r.parentNode;if(o)for(var i=p(n,t),a=0;a<i.length;a++)o.insertBefore(i[a],r);return this},prepend:function(e,n,t){for(var r=e,o=r.firstChild,i=p(n,t),a=0;a<i.length;a++)o?r.insertBefore(i[a],o):r.appendChild(i[a]);return this},append:y,reflow:function(e){null==el&&(e=document);return e.offsetHeight,this},remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,t){n.isArrayLike(t)||(t=[t]);for(var r=0;r<t.length;r++)e.removeChild(t[r]);return this},replace:function(e,n){return n.parentNode.replaceChild(e,n),this},traverse:function e(n,t){t(n);for(var r=0,o=n.childNodes.length;r<o;r++)e(n.childNodes[r],t);return this},reverse:function(e){for(var n=e.firstChild,t=e.children.length-1;t>0;t--)if(t>0){var r=e.children[t];e.insertBefore(r,n)}},wrapper:function(e,t){n.isString(t)&&(t=this.createFragment(t).firstChild);e.parentNode.insertBefore(t,e),t.appendChild(e)},wrapperInner:function(e,n){var t=m.call(e.childNodes);e.appendChild(n);for(var r=0;r<t.length;r++)n.appendChild(t[r]);return this},unwrap:function(e){var n=e.parentNode;if(n){if(this.isDoc(n.parentNode))return;n.parentNode.insertBefore(e,n)}}}),e.attach("domx.noder",k)}),e("skylark-domx-noder/main",["./noder"],function(e){return e}),e("skylark-domx-noder",["skylark-domx-noder/main"],function(e){return e})}(t),!r){var a=require("skylark-langx/skylark");o?module.exports=a:n.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-noder.js.map
