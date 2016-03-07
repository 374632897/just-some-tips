/*
* @Author: JGX
* @Date:   2016-02-20 15:03:36
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-20 15:46:49
*/
function butt () {
  ctx.lineWidth = 10;
  ctx.moveTo(200, 200);
  ctx.lineTo(200, 500);
  ctx.stroke();

  ctx.lineCap = 'square';
  ctx.beginPath()
  ctx.moveTo(400, 200);
  ctx.lineTo(400, 500);
  ctx.strokeStyle = '#f66';
  ctx.stroke();
  // ctx.closePath(); // 加上这句话之后， 就不会显示设置的lineCap了。。。 或者把这句加在stroke的后面

  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(600, 200);
  ctx.lineTo(600, 500);
  ctx.strokeStyle = '#356';
  // ctx.closePath();
  ctx.stroke();

}

// butt();

function drawBrokenLine () {
  var WIDTH = 100, HEIGHT = 100, xNum = oC.width / WIDTH, yNum = oC.height / HEIGHT;
  ctx.lineCap = 'round';
  // ctx.moveTo(0, 0);
  for (var i = 0; i < yNum; i++) {
    ctx.moveTo(WIDTH, i * HEIGHT);
    for (var j = 0; j < xNum; j++) {
      // ctx.beginPath();
      // ctx.moveTo(WIDTH + j * xNum, HEIGHT + i * yNum);
      var h = i % 2 !== 0 ? i - 1 : i;
      // ctx.moveTo(j * WIDTH, i * HEIGHT);
      ctx.lineTo(WIDTH + j * WIDTH, HEIGHT + h * HEIGHT);
      ctx.stroke();
      // console.log(123);
    }
  }
}
drawBrokenLine();