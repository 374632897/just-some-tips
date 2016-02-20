function drawWidthGradient () {
  var lingrad = ctx.createLinearGradient(0,0,0,150);
  lingrad.addColorStop(0, '#00ABEB');
  // lingrad.addColorStop(0.5, '#fff');
  // lingrad.addColorStop(1, '#f66');

  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0,50,0,95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;
  
  // draw shapes
  ctx.fillRect(10,10,130,130);
  ctx.strokeRect(50,50,50,50);
}
// drawWidthGradient();

function selfTest () {
  var WIDTH = oC.width, HEIGHT = oC.height;
  var lGradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  lGradient.addColorStop(0, '#fff');
  lGradient.addColorStop(0.3, '#f00');
  lGradient.addColorStop(0.4, '#f66');
  lGradient.addColorStop(0.8, '#0689d5');
  lGradient.addColorStop(1, '#0603d9');

  ctx.fillStyle = lGradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  // ctx.fillRect(0, 0, WIDTH / 2, HEIGHT / 2);


}
// selfTest();

function drawRich () {
  // Create gradients
  var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');
  
  var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

  var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

  var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
  
  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0,0,150,150);
}
// drawRich();

/*
 * 使用图案模式的时候要注意需要将绘制过程放到图片加载完成之后执行。。不然的话可能会出现异常
 */
function imgPatterns () {
  var img = new Image();
  img.src = './img/1.png';
  img.onload = function () {
    var ptn = ctx.createPattern(img, 'repeat-x');

    ctx.fillStyle = ptn;
    ctx.fillRect(0, 0, 800, 600);

    ctx.fill();

  };
}

// imgPatterns();

function textShadow () {
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur    = 6;
  ctx.shadowColor   = '#f66';

  ctx.font = '30px Microsoft Yahei';
  ctx.fillStyle = 'orange';
  ctx.fillText('Hello world', 200, 200); // 后两个参数表示起始坐标
}

// textShadow();
function drawTwoCircle() {
  // var ctx = document.getElementById('canvas').getContext('2d'); 
  ctx.beginPath(); 
  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
  ctx.fill(); // 实心圆 // 相当于上面那句话没有起作用 参数缺省值为'nonzero'
  // ctx.fill("evenodd"); // 空心圆
}
drawTwoCircle();