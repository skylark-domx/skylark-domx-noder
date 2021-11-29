/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,n){var r=n.define,require=n.require,t="function"==typeof r&&r.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!r){var i={};r=n.define=function(e,n,r){"function"==typeof r?(i[e]={factory:r,deps:n.map(function(n){return function(e,n){if("."!==e[0])return e;var r=n.split("/"),t=e.split("/");r.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?r.pop():r.push(t[o]));return r.join("/")}(n,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:r}},require=n.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var r=[];module.deps.forEach(function(e){r.push(require(e))}),module.exports=module.factory.apply(n,r)||null,module.resolved=!0}return module.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-noder/noder",["skylark-langx-ns","skylark-langx-types","skylark-langx-arrays","skylark-langx-strings","skylark-langx-scripter","skylark-domx-browser"],function(e,n,r,t,o,i){Array.prototype.map,Array.prototype.slice;function d(){return d}return Object.assign(d,{blur:function(e){e.blur()},generateId:function(e){var n=e.tagName+e.className+e.src+e.href+e.textContent,r=n.length,t=0;for(;r--;)t+=n.charCodeAt(r);return t.toString(36)}}),e.attach("domx.noder",d)}),e("skylark-domx-noder/active",["./noder"],function(e){return e.active=function(e){var n;e=e||document;try{n=e.activeElement}catch(r){n=e.body}n||(n=e.body);n.nodeName||(n=e.body);return n}}),e("skylark-domx-noder/_enhance_place_content",["skylark-langx-types","skylark-langx-arrays","./noder"],function(e,n,r){return function(r,t){if(e.isFunction(r))return r.apply(t,[]);if(e.isArrayLike(r)){for(var o,i=0;i<r.length;i++)e.isFunction(r[i])&&(r[i]=r[i].apply(t,[]),e.isArrayLike(r[i])&&(o=!0));o&&(r=n.flatten(r))}return r}}),e("skylark-domx-noder/is-element",["./noder"],function(e){return e.isElement=function(e){return e&&1===e.nodeType}}),e("skylark-domx-noder/is-text-node",["./noder"],function(e){return e.isTextNode=function(e){return e&&3===e.nodeType}}),e("skylark-domx-noder/is-fragment",["./noder"],function(e){return e.isFragment=function(e){return e&&11===e.nodeType}}),e("skylark-domx-noder/_normalize_content",["skylark-langx-types","./noder","./is-element","./is-text-node","./is-fragment"],function(e,n,r,t,o){var i=Array.prototype.map;return function(n){"function"==typeof n&&(n=n());return i.call(e.isArrayLike(n)?n:[n],e=>("function"==typeof e&&(e=e()),r(e)||t(e)||o(e)?e:"string"==typeof e&&/\S/.test(e)?document.createTextNode(e):void 0)).filter(e=>e)}}),e("skylark-domx-noder/_ensure_nodes",["skylark-langx-arrays","./noder","./_normalize_content"],function(e,n,r){var t=Array.prototype.map;return function(n,o){var i=r(n);o&&(i=t.call(i,function(e){return e.cloneNode(!0)}));return e.flatten(i)}}),e("skylark-domx-noder/after",["./noder","./_enhance_place_content","./_ensure_nodes"],function(e,n,r){return e.after=function(e,t,o){t=n(t,e);var i=(a=e).parentNode;if(i)for(var d=r(t,o),a=a.nextSibling,l=0;l<d.length;l++)a?i.insertBefore(d[l],a):i.appendChild(d[l]);return this}}),e("skylark-domx-noder/append",["./noder","./_enhance_place_content","./_ensure_nodes"],function(e,n,r){return e.append=function(e,t,o){t=n(t,e);for(var i=e,d=r(t,o),a=0;a<d.length;a++)i.appendChild(d[a]);return this}}),e("skylark-domx-noder/before",["./noder","./_enhance_place_content","./_ensure_nodes"],function(e,n,r){return e.before=function(e,t,o){t=n(t,e);var i=e,d=i.parentNode;if(d)for(var a=r(t,o),l=0;l<a.length;l++)d.insertBefore(a[l],i);return this}}),e("skylark-domx-noder/body",["./noder"],function(e){return e.body=function(){return document.body}}),e("skylark-domx-noder/clone",["./noder"],function(e){return e.clone=function(e,n){return e.cloneNode(n)}}),e("skylark-domx-noder/is-child-of",["./noder"],function(e){return e.isChildOf=function(e,n,r){if(r)return e.parentNode===n;if(document.documentElement.contains)return n.contains(e);for(;e;){if(n===e)return!0;e=e.parentNode}return!1}}),e("skylark-domx-noder/contains",["./noder","./is-child-of"],function(e,n){return e.contains=function(e,r){return n(r,e)}}),e("skylark-domx-noder/create-element",["skylark-langx-types","./noder"],function(e,n){return n.createElement=function(r,t,o,i){var d;d=/svg/i.test(r)?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);e.isHtmlNode(t)?(i=t,t=null,o=null):e.isHtmlNode(o)&&(i=o,o=null);if(t)for(var a in t)d[a]=t[a];if(o)for(var a in o)d.setAttribute(a,o[a]);i&&n.append(i,d);return d}}),e("skylark-domx-noder/create-fragment",["skylark-langx-strings","./noder","./create-element"],function(e,n,r){var t=/^\s*<(\w+|!)[^>]*>/,o=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,i=document.createElement("div"),d=document.createElement("table"),a=document.createElement("tbody"),l=document.createElement("tr"),u={tr:a,tbody:d,thead:d,tfoot:d,td:l,th:l,"*":i},s=Array.prototype.slice;return n.createFragment=function(n){if(n=e.trim(n),o.test(n))return[r(RegExp.$1)];var i=t.test(n)&&RegExp.$1;i in u||(i="*");var d=u[i];return d.innerHTML=function(e){for(var n=e.split("/>"),r="",t=0;t<n.length-1;t++){var o=n[t].split("<");r+=n[t]+"></"+o[o.length-1].split(" ")[0]+">"}return r+n[n.length-1]}(""+n),dom=s.call(d.childNodes),dom.forEach(function(e){d.removeChild(e)}),dom}}),e("skylark-domx-noder/create-text-node",["./noder"],function(e){return e.createTextNode=function(e){return document.createTextNode(e)}}),e("skylark-domx-noder/doc",["./noder"],function(e){return e.doc=function(){return document}}),e("skylark-domx-noder/empty",["./noder"],function(e){return e.empty=function(e){for(;e.hasChildNodes();){var n=e.firstChild;e.removeChild(n)}return this}}),e("skylark-domx-noder/focusable",["./noder"],function(e){return e.focusable=function(e,n){var r,t,o,i,d,a=e.nodeName.toLowerCase();if("area"===a)return r=e.parentNode,t=r.name,!(!e.href||!t||"map"!==r.nodeName.toLowerCase())&&((o=$("img[usemap='#"+t+"']")).length>0&&o.is(":visible"));/^(input|select|textarea|button|object)$/.test(a)?(i=!e.disabled)&&(d=$(e).closest("fieldset")[0])&&(i=!d.disabled):i="a"===a&&e.href||n;return i&&$(e).is(":visible")&&visible($(e))}}),e("skylark-domx-noder/from-point",["./noder"],function(e){return e.fromPoint=function(e,n){return document.elementFromPoint(e,n)}}),e("skylark-domx-noder/fullscreen",["skylark-domx-browser","./noder"],function(e,n){return n.fullscreen=function(n){return!1===n?e.exitFullscreen.apply(document):n?n[e.support.fullscreen.requestFullscreen]():document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}}),e("skylark-domx-noder/html",["skylark-langx-types","skylark-langx-scripter","./noder","./empty"],function(e,n,r,t){var o=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,i=/^$|^module$|\/(?:java|ecma)script/i;return r.html=function(r,d){var a=function(n,r){if(void 0===r)return n.innerHTML;if(t(n),r=r||"",e.isString(r)&&(r=r.replace(o,"<$1></$2>")),e.isString(r)||e.isNumber(r))n.innerHTML=r;else if(e.isArrayLike(r))for(var i=0;i<r.length;i++)n.appendChild(r[i]);else n.appendChild(r);return this}(r,d);if(void 0!==d){for(var l=r.querySelectorAll("script"),u=0;u<l.length;u++){var s=l[u];i.test(s.type||"")&&n.evaluate(s.textContent,s)}return this}return a}}),e("skylark-domx-noder/is-active",["./noder"],function(e){return e.isActive=function(e){return e===document.activeElement&&(e.type||e.href)}}),e("skylark-domx-noder/is-block-node",["./noder"],function(e){var n=["div","p","ul","ol","li","blockquote","hr","pre","h1","h2","h3","h4","h5","table"];return e.isBlockNode=function(e){if(!e||3===e.nodeType)return!1;return new RegExp("^("+n.join("|")+")$").test(e.nodeName.toLowerCase())}}),e("skylark-domx-noder/is-doc",["./noder"],function(e){return e.isDoc=function(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}}),e("skylark-domx-noder/is-editable",["./noder"],function(e){return e.isEditable=function e(n){if(!n)return!1;if("false"===n.contentEditable)return!1;if("true"===n.contentEditable)return!0;return e(n.parentNode)}}),e("skylark-domx-noder/is-fullscreen",["./noder","./fullscreen"],function(e,n){return e.isFullscreen=function(e){return n()===e}}),e("skylark-domx-noder/is-in-document",["./noder"],function(e){return e.isInDocument=function(e){return e===document.body||document.body.contains(e)}}),e("skylark-domx-noder/is-in-frame",["./noder"],function(e){return e.isInFrame=function(){try{return window.parent!==window.self}catch(e){return!0}}}),e("skylark-domx-noder/is-input",["./noder","./is-editable"],function(e,n){return e.isInput=function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||n(e)}}),e("skylark-domx-noder/is-window",["skylark-langx-types","./noder"],function(e,n){return n.isWindow=e.isWindow}),e("skylark-domx-noder/node-name",["./noder"],function(e){return e.nodeName=function(e,n){var r=e.nodeName&&e.nodeName.toLowerCase();if(void 0!==n)return r===n.toLowerCase();return r}}),e("skylark-domx-noder/offset-parent",["./noder"],function(e){var n=/^(?:body|html)$/i;return e.offsetParent=function(e){var r=e.offsetParent||document.body;for(;r&&!n.test(r.nodeName)&&"static"==document.defaultView.getComputedStyle(r).position;)r=r.offsetParent;return r}}),e("skylark-domx-noder/overlay",["skylark-domx-styler","./noder"],function(e,n){return n.overlay=function(r,t){var o=n.createElement("div",t);return e.css(o,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2147483647,opacity:.7}),r.appendChild(o),o}}),e("skylark-domx-noder/owner-doc",["./noder"],function(e){return e.ownerDoc=function(e){if(!e)return document;if(9==e.nodeType)return e;return e.ownerDocument}}),e("skylark-domx-noder/owner-window",["./noder","./owner-doc"],function(e,n){return e.ownerWindow=function(e){var r=n(e);return r.defaultView||r.parentWindow}}),e("skylark-domx-noder/prepend",["./noder","./_enhance_place_content","./_ensure_nodes"],function(e,n,r){return e.prepend=function(e,n,t){for(var o=e,i=o.firstChild,d=r(n,t),a=0;a<d.length;a++)i?o.insertBefore(d[a],i):o.appendChild(d[a]);return this}}),e("skylark-domx-noder/reflow",["./noder"],function(e){return e.reflow=function(e){e||(e=document);return e.offsetHeight,this}}),e("skylark-domx-noder/remove-child",["skylark-langx-types","./noder"],function(e,n){return n.removeChild=function(n,r){e.isArrayLike(r)||(r=[r]);for(var t=0;t<r.length;t++)n.removeChild(r[t]);return this}}),e("skylark-domx-noder/remove",["./noder"],function(e){return e.remove=function(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(e){console.warn("The node is already removed",e)}return this}}),e("skylark-domx-noder/replace",["./noder"],function(e){return e.replace=function(e,n){return n.parentNode.replaceChild(e,n),this}}),e("skylark-domx-noder/reverse",["./noder"],function(e){return e.reverse=function(e){for(var n=e.firstChild,r=e.children.length-1;r>0;r--)if(r>0){var t=e.children[r];e.insertBefore(t,n)}}}),e("skylark-domx-noder/root",["./noder"],function(e){return e.root=function(){return document.documentElement}}),e("skylark-domx-noder/scrolling-element",["./noder"],function(e){return e.scrollingElement=function(){return document.scrollingElement||document.documentElement}}),e("skylark-domx-noder/selectable",["./noder"],function(e){return e.selectable=function(e,n){if(void 0===e||void 0===e.style)return;e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off"}}),e("skylark-domx-noder/throb",["skylark-langx/langx","skylark-domx-styler","./noder"],function(e,n,r){return r.throb=function(e,t){(t=t||{}).text,t.style;var o,i=t.time,d=t.callback,a=r.createElement("div",{className:t.className||"throbber"}),l=function(){o&&(clearTimeout(o),o=null),a&&(r.remove(a),a=null)};t.style&&n.css(a,t.style);var u=t.content||'<span class="throb"></span>';r.html(a,u),e.appendChild(a),i&&(o=setTimeout(function(){l(),d&&d()},i));return{throbber:a,remove:l,update:function(e){e&&e.text&&a&&(textNode.nodeValue=e.text)}}}}),e("skylark-domx-noder/traverse",["./noder"],function(e){return e.traverse=function e(n,r){r(n);for(var t=0,o=n.childNodes.length;t<o;t++)e(n.childNodes[t],r);return this}}),e("skylark-domx-noder/unwrap",["./noder","./is-doc"],function(e,n){return e.unwrap=function(e){var r=e.parentNode;if(r){if(n(r.parentNode))return;r.parentNode.insertBefore(e,r)}}}),e("skylark-domx-noder/wrapper-inner",["./noder"],function(e){var n=Array.prototype.slice;return e.wrapperInner=function(e,r){var t=n.call(e.childNodes);e.appendChild(r);for(var o=0;o<t.length;o++)r.appendChild(t[o]);return this}}),e("skylark-domx-noder/wrapper",["./noder"],function(e){return e.wrapper=function(e,n){types.isString(n)&&(n=this.createFragment(n).firstChild);e.parentNode.insertBefore(n,e),n.appendChild(e)}}),e("skylark-domx-noder/main",["./noder","./active","./after","./append","./before","./body","./clone","./contains","./create-element","./create-fragment","./create-text-node","./doc","./empty","./focusable","./from-point","./fullscreen","./html","./is-active","./is-block-node","./is-child-of","./is-doc","./is-editable","./is-element","./is-fragment","./is-fullscreen","./is-in-document","./is-in-frame","./is-input","./is-text-node","./is-window","./node-name","./offset-parent","./overlay","./owner-doc","./owner-window","./prepend","./reflow","./remove-child","./remove","./replace","./reverse","./root","./scrolling-element","./selectable","./throb","./traverse","./unwrap","./wrapper-inner","./wrapper","./throb"],function(e){return e}),e("skylark-domx-noder",["skylark-domx-noder/main"],function(e){return e})}(r),!t){var d=require("skylark-langx-ns");o?module.exports=d:n.skylarkjs=d}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-noder.js.map
