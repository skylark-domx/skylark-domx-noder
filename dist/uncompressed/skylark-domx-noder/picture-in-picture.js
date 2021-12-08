define([
    "skylark-domx-browser",
	"./noder"
],function(browser,noder){

    var fulledEl = null;

    function pictureInPicture(el) {
        if (el === false) {
            return   document.exitPictureInPicture();
        } else if (el) {
            if (el !== document.pictureInPictureElement) {
                el.requestPictureInPicture();
                fulledEl = el;
            }          
        } else {
            return document.pictureInPictureElement;
        }
    }
	
	return noder.pictureInPicture = pictureInPicture;
});