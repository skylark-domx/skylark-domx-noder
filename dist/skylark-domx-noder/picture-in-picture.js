/**
 * skylark-domx-noder - The skylark html node library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-browser","./noder"],function(e,t){return t.pictureInPicture=function(e){return!1===e?document.exitPictureInPicture():e?void(e!==document.pictureInPictureElement&&(e.requestPictureInPicture(),e)):document.pictureInPictureElement}});
//# sourceMappingURL=sourcemaps/picture-in-picture.js.map
