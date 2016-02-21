/**
 * save()           用来保存一个状态
 * restore()        用来恢复到上一个状态 
 * scale()          用来增减图形在canvas中的像素数目， 对形状， 位图进行缩小或者放大
 */

/**
 * [testRestore1 description]
 * @return {[type]} [description]
 */
function testRestore1 () {
  var WIDTH = oC.width / 10, HEIGHT = oC.height / 10;
  ctx.fillRect(0, 0, WIDTH * 10, HEIGHT * 10);
  ctx.save();

  ctx.fillStyle = '#f00';
  ctx.fillRect(WIDTH, HEIGHT, WIDTH * 8, HEIGHT * 8);

  ctx.save();
  ctx.fillStyle = '#048';
  ctx.fillRect(WIDTH * 2, HEIGHT * 2, WIDTH * 6, HEIGHT * 6);

  ctx.restore();
  ctx.fillRect(WIDTH * 3, HEIGHT * 3, WIDTH * 4, HEIGHT * 4);

  ctx.restore();
  ctx.fillRect(WIDTH * 4, HEIGHT * 4, WIDTH * 2, HEIGHT * 2);

  // ctx.fill();

}
// testRestore1();

/**
 * 1. translate(x, y)    移动canvas和它的原点到另一个位置, x是左右偏移量， y是上下偏移量
 * 2. rotate(angle)      以原点为中心旋转canvas
 * 
 */
(function() {
function draw() {
  // var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0,0,300,300);
  for (var i=0;i<3;i++) {
    for (var j=0;j<3;j++) {
      ctx.save();
      ctx.strokeStyle = "#9CFF00";
      ctx.translate(50+j*100,50+i*100); // 100表示两个图形中点的距离
      drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
      ctx.restore();
    }
  }
}
function drawSpirograph(ctx,R,r,O){
  var x1 = R-O;
  var y1 = 0;
  var i  = 1;
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  do {
    if (i>20000) break;
    var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
    var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
    ctx.lineTo(x2,y2);
    x1 = x2;
    y1 = y2;
    i++;
  } while (x2 != R-O && y2 != 0 );
  ctx.stroke();
}
// draw();
})();

(function () {

})();