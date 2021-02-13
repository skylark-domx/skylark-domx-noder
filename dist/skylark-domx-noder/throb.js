/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-styler","./noder"],function(e,t,n){return n.throb=function(e,l){(l=l||{}).text,l.style;var r,a=l.time,o=l.callback,s=n.createElement("div",{class:l.className||"throbber"}),c=function(){r&&(clearTimeout(r),r=null),s&&(n.remove(s),s=null)};l.style&&t.css(s,l.style);var u=l.content||'<span class="throb"></span>';return n.html(s,u),e.appendChild(s),a&&(r=setTimeout(function(){c(),o&&o()},a)),{throbber:s,remove:c,update:function(e){e&&e.text&&s&&(textNode.nodeValue=e.text)}}}});
//# sourceMappingURL=sourcemaps/throb.js.map
