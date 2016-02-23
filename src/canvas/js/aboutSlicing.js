/*
* @Author: JGX
* @Date:   2016-02-23 18:03:19
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-23 20:35:07
*/
/**
 * 关于drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
 * 1. 要
 * 
 */

(function () {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(this, 0, 0, oC.width, oC.height);
    ctx.fillStyle = 'rgba(0, 0, 0, .3)';
    ctx.fillRect(0, 0, 400, 400);

    ctx2.drawImage(this, 0, 0, oC.width, oC.height);
    ctx2.strokeRect(0, 0, oC.width, oC.height);
  };
  img.src = 'img/1.png';

})();

oBtn.onclick = function () {
  // var x = oX.value - 0, y = oY.value - 0, r = oR.value - 0, w1 = oC.width - 0, w2 = oC.height - 0, ratio = x / w1;
  var x = oX.value, y = oY.value, r = oR.value, w1 = oC.width, w2 = cloneCanvas.width, ratio1 = x / w1, ratio2 = x / y;
  ratio2 = (x == 0 || y == 0) ? w1 : ratio2 * r;
  ctx2.clearRect(0, 0, 300, 300);

  ctx2.drawImage(oC, x, y, r, r, ratio1 * w2, ratio1 * w2, ratio2, ratio2);
  //                             这两个值需要计算裁剪起始位置/宽度的比例再乘以第二个的宽度
};