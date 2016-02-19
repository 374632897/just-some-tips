/*
* @Author: JGX
* @Date:   2016-02-19 10:51:20
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-19 11:24:27
*/
/**
 * Step:
 * 1. 创建路径起点                                           ---  beginPath()                    
 * 2. 使用画图命令画出路径                                   ---      
 * 3. 封闭路径                                               ---  closePath()
 * 4. 路径生成之后就可以通过描边或者填充来渲染图形           ---  stroke() || fill()
 */

/**
 * 使用fill的时候路径会自动闭合
 * 使用stroke的时候路径不会自动闭合
 */

function drawAArrow () {
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(275, 125);
  ctx.lineTo(275, 275);
  ctx.fillStyle = '#f00';

  ctx.fill();
}

// drawAArrow();

function drawAFace () {
  ctx.beginPath();
  ctx.strokeStyle = '#f66';
  // ctx.moveTo(200, 200);
  ctx.arc(250, 250, 75, 0, Math.PI * 2, true);

  /**
   * 需要使用moveTo()来移动画笔， 不然的话会将各点连起来
   */
  ctx.moveTo(310, 250); 
  ctx.arc(250, 250, 60, 0, Math.PI, false);

  ctx.moveTo(224, 216);
  ctx.arc(220, 220, 5, 0, Math.PI * 2, true);

  ctx.moveTo(284, 216);
  ctx.arc(280, 220, 5, 0, Math.PI * 2, true);

  ctx.stroke();
}

// drawAFace();

function drawTwoTriangle () {
  ctx.beginPath();
  ctx.strokeStyle = '#747474';
  ctx.strokeRect(100, 100, 600, 400);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();

  ctx.fillStyle = 'black';
  ctx.moveTo(150, 150);
  ctx.lineTo(650, 150);
  ctx.lineTo(150, 450);
  ctx.fill(); // fill()的话就不用关闭路径， 因为会自动闭合

  ctx.closePath();
  
  ctx.beginPath();

  ctx.strokeStyle = '#f66';
  ctx.moveTo(170, 450);
  ctx.lineTo(650, 160);
  ctx.lineTo(650, 450);
  // ctx.lineTo(170, 450); // 如果不加上这句的话就不会闭合
  // 先闭合路径， 再渲染图形
  ctx.closePath();


  ctx.stroke();


}

// drawTwoTriangle();

function drawAArc () {
  ctx.strokeStyle = '#006742';
  ctx.arc(300, 250, 100, 0, Math.PI * 2, true);

  ctx.stroke();
}

// drawAArc();
function draw() {
  // var canvas = document.getElementById('canvas');
  // if (canvas.getContext){
    // var ctx = canvas.getContext('2d');

    for(var i=0;i<4;i++){
      for(var j=0;j<3;j++){
        ctx.beginPath();
        var x              = 25+j*50;               // x 坐标值 // 距离： 50 - radius * 2
        var y              = 25+i*50;               // y 坐标值 // 距离： 50 - radius * 2
        var radius         = 20;                    // 圆弧半径
        var startAngle     = 0;                     // 开始点
        var endAngle       = Math.PI+(Math.PI*j)/2; // 结束点
        var anticlockwise  = i%2==0 ? false : true; // 顺时针或逆时针

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i>1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  // }
}
// draw();

/**
 * quadraticCurveTo(c1x, c1y, x, y)  绘制二次贝塞尔曲线， c1x, c1y为控制点， x, y为结束点
 * bezierCurveTo(c1x, c1y, c2x, c2y, x, y)  绘制三次贝塞尔曲线，x,y为结束点，c1x,c1y为控制点一，c2x,c2y为控制点二。
 */