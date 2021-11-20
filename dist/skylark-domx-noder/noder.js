/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-arrays","skylark-langx-strings","skylark-langx-scripter","skylark-domx-browser"],function(r,n,t,e,a,o){Array.prototype.map,Array.prototype.slice;function s(){return s}return Object.assign(s,{blur:function(r){r.blur()},body:function(){return document.body},generateId:function(r){for(var n=r.tagName+r.className+r.src+r.href+r.textContent,t=n.length,e=0;t--;)e+=n.charCodeAt(t);return e.toString(36)},fromPoint:function(r,n){return document.elementFromPoint(r,n)}}),r.attach("domx.noder",s)});
//# sourceMappingURL=sourcemaps/noder.js.map
