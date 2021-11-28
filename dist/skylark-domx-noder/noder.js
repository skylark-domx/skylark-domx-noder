/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-arrays","skylark-langx-strings","skylark-langx-scripter","skylark-domx-browser"],function(r,t,n,a,e,o){Array.prototype.map,Array.prototype.slice;function s(){return s}return Object.assign(s,{blur:function(r){r.blur()},generateId:function(r){for(var t=r.tagName+r.className+r.src+r.href+r.textContent,n=t.length,a=0;n--;)a+=t.charCodeAt(n);return a.toString(36)},fromPoint:fromPoint}),r.attach("domx.noder",s)});
//# sourceMappingURL=sourcemaps/noder.js.map
