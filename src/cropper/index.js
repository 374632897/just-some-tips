/*
* @Author: Jiang Guoxi
* @Date:   2016-09-19 14:43:19
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-21 09:11:47
*/

!function () {
  var $cvs = $('.test'), $file = $('.file'), $img = $('.img'), $body = $('body');
  // const options = {
  //   aspectRatio: 10 / 10,
  //   zoomOnWheel: false,
  //   viewMode: 2,
  //   crop () {
  //   }
  // };
  // $cvs.cropper(options);
  $file.on('change', function () {
    if (!this.files) return;
    var reader = new FileReader(), file = this.files[0], URL = window.URL || window.webkitURL;
    var blobURL = URL.createObjectURL(file);
    $body.append($('<img width = "400" height = "400" />').attr('src', blobURL));
    // $img.attr('src', blobURL)
    // $cvs.one('built.cropper', function () {
    //   URL.revokeObjectURL(blobURL);
    // }).cropper('reset').cropper('replace', blobURL);
    // console.info(file);
  });
}();
