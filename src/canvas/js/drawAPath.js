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

  ctx.moveTo(310, 250);
  ctx.arc(250, 250, 60, 0, Math.PI, false);

  ctx.moveTo(224, 214);
  ctx.arc(220, 220, 5, 0, Math.PI * 2, true);

  ctx.moveTo(284, 214);
  ctx.arc(280, 220, 5, 0, Math.PI * 2, true);


  ctx.stroke();
}

drawAFace();