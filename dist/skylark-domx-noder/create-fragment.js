/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-strings","./noder","./create-element"],function(e,t){var r=/^\s*<(\w+|!)[^>]*>/,n=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,o=document.createElement("div"),a=document.createElement("table"),l=document.createElement("tbody"),c=document.createElement("tr"),i={tr:l,tbody:a,thead:a,tfoot:a,td:c,th:c,"*":o},d=Array.prototype.slice;return e.createFragment=function(e){if(e=strings.trim(e),n.test(e))return[t(RegExp.$1)];var o=r.test(e)&&RegExp.$1;o in i||(o="*");var a=i[o];return a.innerHTML=function(e){for(var t=e.split("/>"),r="",n=0;n<t.length-1;n++){var o=t[n].split("<");r+=t[n]+"></"+o[o.length-1].split(" ")[0]+">"}return r+t[t.length-1]}(""+e),dom=d.call(a.childNodes),dom.forEach(function(e){a.removeChild(e)}),dom}});
//# sourceMappingURL=sourcemaps/create-fragment.js.map
