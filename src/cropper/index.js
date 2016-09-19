/*
* @Author: Jiang Guoxi
* @Date:   2016-09-19 14:43:19
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-19 14:47:56
*/

!function () {
  var $cvs = $('.test'), $file = $('.file');
  const options = {
    aspectRatio: 10 / 10,
    zoomOnWheel: false,
    viewMode: 2,
    crop () {
    }
  };
  $cvs.cropper(options);
  $file.on('change', function () {
    var reader = new FileReader(), file = this.files[0], URL = window.URL || window.webkitURL;
    var blobURL = URL.createObjectURL(file);
    $cvs.one('built.cropper', function () {
      URL.revokeObjectURL(blobURL);
    }).cropper('reset').cropper('replace', blobURL);
    console.info(file);
  });
}();
