/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,n){var r=n.define,t=n.require,o="function"==typeof r&&r.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!r){var a={};r=n.define=function(e,n,r){"function"==typeof r?(a[e]={factory:r,deps:n.map(function(n){return function(e,n){if("."!==e[0])return e;var r=n.split("/"),t=e.split("/");r.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?r.pop():r.push(t[o]));return r.join("/")}(n,e)}),resolved:!1,exports:null},t(e)):a[e]={factory:null,resolved:!0,exports:r}},t=n.require=function(e){if(!a.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var r=a[e];if(!r.resolved){var o=[];r.deps.forEach(function(e){o.push(t(e))}),r.exports=r.factory.apply(n,o)||null,r.resolved=!0}return r.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,n){e("skylark-domx-noder/noder",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser"],function(e,n,r){var t=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),o=/^\s*<(\w+|!)[^>]*>/,i=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,a=document.createElement("div"),u=document.createElement("table"),d=document.createElement("tbody"),l=document.createElement("tr"),c={tr:d,tbody:u,thead:u,tfoot:u,td:l,th:l,"*":a},f=/^(?:body|html)$/i,s=Array.prototype.map,m=Array.prototype.slice;function p(e,r){return n.isArrayLike(e)||(e=[e]),r&&(e=s.call(e,function(e){return e.cloneNode(!0)})),n.flatten(e)}function h(e,n){var r=e.nodeName&&e.nodeName.toLowerCase();return void 0!==n?r===n.toLowerCase():r}function v(e,r){if(n.isFunction(e))return e.apply(r,[]);if(n.isArrayLike(e)){for(var t,o=0;o<e.length;o++)n.isFunction(e[o])&&(e[o]=e[o].apply(r,[]),n.isArrayLike(e[o])&&(t=!0));t&&(e=n.flatten(e))}return e}function y(e,n,r){n=v(n,e);for(var t=e,o=p(n,r),i=0;i<o.length;i++)t.appendChild(o[i]);return this}function g(e,n,r){var t=document.createElement(e);if(n)for(var o in n)t.setAttribute(o,n[o]);return r&&y(r,t),t}var N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;function b(e,n,r){if(r)return e.parentNode===n;if(document.documentElement.contains)return n.contains(e);for(;e;){if(n===e)return!0;e=e.parentNode}return!1}function k(e){return e?9==e.nodeType?e:e.ownerDocument:document}function w(){return w}return n.mixin(w,{active:function(e){var n;e=e||document;try{n=e.activeElement}catch(r){n=e.body}n||(n=e.body);n.nodeName||(n=e.body);return n},blur:function(e){e.blur()},body:function(){return document.body},clone:function(e,n){var r,o=this;if(!t||1!==e.nodeType||n)return e.cloneNode(n);if(!n)return r=document.createElement(e.nodeName),each(o.getAttribs(e),function(n){o.setAttrib(r,n.nodeName,o.getAttrib(e,n.nodeName))}),r},contents:function(e){if(h(e,"iframe"))return e.contentDocument;return e.childNodes},createElement:g,createFragment:function(e){if(e=n.trim(e),i.test(e))return[g(RegExp.$1)];var r=o.test(e)&&RegExp.$1;r in c||(r="*");var t=c[r];return t.innerHTML=""+e,dom=m.call(t.childNodes),dom.forEach(function(e){t.removeChild(e)}),dom},contains:function(e,n){return b(n,e)},createTextNode:function(e){return document.createTextNode(e)},doc:function(){return document},empty:function(e){for(;e.hasChildNodes();){var n=e.firstChild;e.removeChild(n)}return this},fullScreen:function(e){if(!1===e)r.exitFullScreen.apply(document);else{if(!e)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;r.requestFullScreen.apply(e),e}},focusable:function(e,n){var r,t,o,i,a,u=e.nodeName.toLowerCase();if("area"===u)return r=e.parentNode,t=r.name,!(!e.href||!t||"map"!==r.nodeName.toLowerCase())&&((o=$("img[usemap='#"+t+"']")).length>0&&o.is(":visible"));/^(input|select|textarea|button|object)$/.test(u)?(i=!e.disabled)&&(a=$(e).closest("fieldset")[0])&&(i=!a.disabled):i="a"===u&&e.href||n;return i&&$(e).is(":visible")&&visible($(e))},html:function(e,r){if(void 0===r)return e.innerHTML;if(this.empty(e),r=r||"",n.isString(r)&&(r=r.replace(N,"<$1></$2>")),n.isString(r)||n.isNumber(r))e.innerHTML=r;else if(n.isArrayLike(r))for(var t=0;t<r.length;t++)e.appendChild(r[t]);else e.appendChild(r);return this},isChildOf:b,isDocument:function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE},isInDocument:function(e){return e===document.body||document.body.contains(e)},isWindow:n.isWindow,nodeName:h,offsetParent:function(e){var n=e.offsetParent||document.body;for(;n&&!f.test(n.nodeName)&&"static"==document.defaultView.getComputedStyle(n).position;)n=n.offsetParent;return n},ownerDoc:k,ownerWindow:function(e){var n=k(e);return n.defaultView||n.parentWindow},after:function(e,n,r){n=v(n,e);var t=(i=e).parentNode;if(t)for(var o=p(n,r),i=i.nextSibling,a=0;a<o.length;a++)i?t.insertBefore(o[a],i):t.appendChild(o[a]);return this},before:function(e,n,r){n=v(n,e);var t=e,o=t.parentNode;if(o)for(var i=p(n,r),a=0;a<i.length;a++)o.insertBefore(i[a],t);return this},prepend:function(e,n,r){for(var t=e,o=t.firstChild,i=p(n,r),a=0;a<i.length;a++)o?t.insertBefore(i[a],o):t.appendChild(i[a]);return this},append:y,reflow:function(e){null==el&&(e=document);return e.offsetHeight,this},remove:function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this},removeChild:function(e,r){n.isArrayLike(r)||(r=[r]);for(var t=0;t<r.length;t++)e.removeChild(r[t]);return this},replace:function(e,n){return n.parentNode.replaceChild(e,n),this},traverse:function e(n,r){r(n);for(var t=0,o=n.childNodes.length;t<o;t++)e(n.childNodes[t],r);return this},reverse:function(e){for(var n=e.firstChild,r=e.children.length-1;r>0;r--)if(r>0){var t=e.children[r];e.insertBefore(t,n)}},wrapper:function(e,r){n.isString(r)&&(r=this.createFragment(r).firstChild);e.parentNode.insertBefore(r,e),r.appendChild(e)},wrapperInner:function(e,n){var r=m.call(e.childNodes);e.appendChild(n);for(var t=0;t<r.length;t++)n.appendChild(r[t]);return this},unwrap:function(e){var n=e.parentNode;if(n){if(this.isDoc(n.parentNode))return;n.parentNode.insertBefore(e,n)}}}),e.attach("domx.noder",w)}),e("skylark-domx-noder/main",["./noder"],function(e){return e}),e("skylark-domx-noder",["skylark-domx-noder/main"],function(e){return e})}(r),!o){var u=t("skylark-langx/skylark");i?module.exports=u:n.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-noder.js.map
