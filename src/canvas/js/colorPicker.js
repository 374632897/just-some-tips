(function () {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(this, 0, 0);
    // localStorage.setItem('localImage', oC.toDataURL('image/png'));
  };
  img.src = 'img/1.png';
  img.crossOrigin = 'Anonymous';
  // if (img.complete || img.complete === undefined) {
  //   var src = localStorage.getItem('localImage');
  //   console.log(src);

  // }
  setTimeout(function () {
    var src  = localStorage.getItem('localImage');
    console.log(src);
  });
  oC.onclick = function (e) {
    console.log(e);
    // img.src = 
    var x = e.layerX, 
      y = e.layerY,
      pixel = ctx.getImageData(x, y, 1, 1),
      data  = pixel.data,
      rgba  = data.join(',');
    console.log(pixel, data, rgba);
  };
})();