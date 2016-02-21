/**
 *
 * globelCompositeOperation  可以在已有图形后面再画新图形，可以用来遮盖， 清除某些区域
 * 可以取以下值： 
 * source-over       - 默认设置， 新图形会覆盖在原有内容上
 * destination-over  - 会在原有内容之下绘制新图形
 * source-in         - 新图形会仅仅出现与原有内容重叠的部分，其它区域会变成透明的
 * destination-in    - 原有内容中与新图形重叠的部分会被保留，其它区域会变成透明的
 * souce-out         - 只有新图形中与原有内容不重叠的部分会被绘制出来
 * destination-out   - 原有内容中与新图形不重叠的部分会被保留
 * source-atop       - 新图形中与原有内容重叠的部分会被绘制， 并覆盖于原有内容之上
 * destination-atop  - 原有内容中与新内容重叠的部分会被保留， 并会在原有内容之下绘制新图形
 * lighter           - 两图形中重叠部分作加色处理
 * darker            - 两图形中重叠的部分作减色处理
 * xor               - 重叠的部分会变成透明
 * copy              - 只有新图形会被保留， 其他会被清除掉
 * 
 */
/**
 * 裁剪路径 Clipping paths 
 * * 裁剪路径和普通的canvas图形差不多， 不同的是其作用是遮罩， 用来隐藏没有遮罩的部分
 * * clip()方法
 */

(function () {
  function fillRect() {
    ctx.fillRect(0, 0, oC.width, oC.height);
  }
  function draw() {
    fillRect();
    ctx.beginPath();
    ctx.arc(oC.width / 2, oC.height / 2, 100, 0, Math.PI * 2, true);
    ctx.clip();

    var lineGrad = ctx.createLinearGradient(0, -120, 0, 120);
    lineGrad.addColorStop(0, '#232256');
    lineGrad.addColorStop(1, '#143778');

    ctx.fillStyle = lineGrad;
    // ctx.fillStyle = '#f66';
    ctx.fillRect(300, 200, 240, 240);
    
    // ctx.beginPath();
    // ctx.arc(0,0,60,0,Math.PI*2,true);
    // ctx.clip();

    // var lingrad = ctx.createLinearGradient(0,-75,0,75);
    // lingrad.addColorStop(0, '#232256');
    // lingrad.addColorStop(1, '#143778');
    
    // ctx.fillStyle = lingrad;
    // ctx.fillRect(-75,-75,150,150);
  }
  draw();
})();
