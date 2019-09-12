/**
 * skylark-domx-ndoer - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var n=t.define,r=t.require,o="function"==typeof n&&n.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!n){var a={};n=t.define=function(e,t,n){"function"==typeof n?(a[e]={factory:n,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var n=t.split("/"),r=e.split("/");n.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?n.pop():n.push(r[o]));return n.join("/")}(t,e)}),resolved:!1,exports:null},r(e)):a[e]={factory:null,resolved:!0,exports:n}},r=t.require=function(e){if(!a.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var n=a[e];if(!n.resolved){var o=[];n.deps.forEach(function(e){o.push(r(e))}),n.exports=n.factory.apply(t,o)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,t){e("skylark-domx-ndoer/noder",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-styler"],function(e,t,n,r){var o=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),i=/^\s*<(\w+|!)[^>]*>/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=document.createElement("div"),u=document.createElement("table"),l=document.createElement("tbody"),c=document.createElement("tr"),s={tr:l,tbody:u,thead:u,tfoot:u,td:c,th:c,"*":d},f=/^(?:body|html)$/i,m=Array.prototype.map,p=Array.prototype.slice;function h(e,n){return t.isArrayLike(e)||(e=[e]),n&&(e=m.call(e,function(e){return e.cloneNode(!0)})),t.flatten(e)}function v(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function y(e,n){if(t.isFunction(e))return e.apply(n,[]);if(t.isArrayLike(e)){for(var r,o=0;o<e.length;o++)t.isFunction(e[o])&&(e[o]=e[o].apply(n,[]),t.isArrayLike(e[o])&&(r=!0));r&&(e=t.flatten(e))}return e}function b(e,t,n){t=y(t,e);for(var r=e,o=h(t,n),i=0;i<o.length;i++)r.appendChild(o[i]);return this}function N(e,t,n){var r=document.createElement(e);if(t)for(var o in t)r.setAttribute(o,t[o]);return n&&b(n,r),r}var g=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function k(e,t,n){if(n)return e.parentNode===t;if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function x(e){return e?9==e.nodeType?e:e.ownerDocument:document}function C(){return C}return t.mixin(C,{active:function(e){var t;e=e||document;try{t=e.activeElement}catch(n){t=e.body}t||(t=e.body);t.nodeName||(t=e.body);return t},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,t){var n,r=this;if(!o||1!==e.nodeType||t)return e.cloneNode(t);if(!t)return n=document.createElement(e.nodeName),each(r.getAttribs(e),function(t){r.setAttrib(n,t.nodeName,r.getAttrib(e,t.nodeName))}),n},contents:function(e){if(v(e,"iframe"))return e.contentDocument;return e.childNodes},createElement:N,createFragment:function(e){if(e=t.trim(e),a.test(e))return[N(RegExp.$1)];var n=i.test(e)&&RegExp.$1;n in s||(n="*");var r=s[n];return r.innerHTML=""+e,dom=p.call(r.childNodes),dom.forEach(function(e){r.removeChild(e)}),dom},contains:function(e,t){return k(t,e)},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:function(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this},fullScreen:function(e){if(!1===e)n.exitFullScreen.apply(document);else{if(!e)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;n.requestFullScreen.apply(e),e}},focusable:function(e,t){var n,r,o,i,a,d=e.nodeName.toLowerCase();if("area"===d)return n=e.parentNode,r=n.name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&((o=$("img[usemap='#"+r+"']")).length>0&&o.is(":visible"));/^(input|select|textarea|button|object)$/.test(d)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===d&&e.href||t;return i&&$(e).is(":visible")&&visible($(e))},html:function(e,n){if(void 0===n)return e.innerHTML;if(this.empty(e),n=n||"",t.isString(n)&&(n=n.replace(g,"<$1></$2>")),t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n)},isChildOf:k,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isInDocument:function(e){return e===document.body||document.body.contains(e)},isWindow:t.isWindow,nodeName:v,offsetParent:function(e){var t=e.offsetParent||document.body;for(;t&&!f.test(t.nodeName)&&"static"==r.css(t,"position");)t=t.offsetParent;return t},ownerDoc:x,ownerWindow:function(e){var t=x(e);return t.defaultView||t.parentWindow},after:function(e,t,n){t=y(t,e);var r=(i=e).parentNode;if(r)for(var o=h(t,n),i=i.nextSibling,a=0;a<o.length;a++)i?r.insertBefore(o[a],i):r.appendChild(o[a]);return this},before:function(e,t,n){t=y(t,e);var r=e,o=r.parentNode;if(o)for(var i=h(t,n),a=0;a<i.length;a++)o.insertBefore(i[a],r);return this},prepend:function(e,t,n){for(var r=e,o=r.firstChild,i=h(t,n),a=0;a<i.length;a++)o?r.insertBefore(i[a],o):r.appendChild(i[a]);return this},append:b,remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,n){t.isArrayLike(n)||(n=[n]);for(var r=0;r<n.length;r++)e.removeChild(n[r]);return this},replace:function(e,t){return t.parentNode.replaceChild(e,t),this},throb:function(e,t){var n,o=this,i=(t=t||{}).text,a=(t.style,t.time),d=t.callback,u=this.createElement("div",{class:t.className||"throbber"}),l=(function(e,t){var n=N("div",t);r.css(n,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2147483647,opacity:.7}),e.appendChild(n)}(u,{class:"overlay fade"}),this.createElement("div",{class:"throb"})),c=this.createTextNode(i||""),s=function(){n&&(clearTimeout(n),n=null),u&&(o.remove(u),u=null)};t.style&&r.css(u,t.style);l.appendChild(c),u.appendChild(l),e.appendChild(u),a&&(n=setTimeout(function(){s(),d&&d()},a));return{remove:s,update:function(e){e&&e.text&&u&&(c.nodeValue=e.text)}}},traverse:function e(t,n){n(t);for(var r=0,o=t.childNodes.length;r<o;r++)e(t.childNodes[r],n);return this},reverse:function(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}},wrapper:function(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild);e.parentNode.insertBefore(n,e),n.appendChild(e)},wrapperInner:function(e,t){var n=p.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this},unwrap:function(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}}),e.attach("domx.noder",C)}),e("skylark-domx-ndoer/main",["./noder"],function(e){return e}),e("skylark-domx-ndoer",["skylark-domx-ndoer/main"],function(e){return e})}(n),!o){var d=r("skylark-langx/skylark");i?module.exports=d:t.skylarkjs=d}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-ndoer.js.map
