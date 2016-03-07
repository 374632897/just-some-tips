/*
* @Author: JGX
* @Date:   2016-02-19 10:37:11
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-19 10:50:41
*/
// ctx.moveTo(100, 100);

/**
 * fillRect             @param(x, y, width, height)  后两个参数分别为宽度和高度而不是起点和终点 
 * strokeRect           @param(x, y, width, height)  后两个参数分别为宽度和高度而不是起点和终点      
 * clearRect            @param(x, y, width, height)  后两个参数分别为宽度和高度而不是起点和终点  ---  清除指定区域，使之完全透明
 */

ctx.fillStyle = '#f66'; // 需要先指定颜色，再进行绘制
ctx.fillRect(100, 100, 400, 400);

ctx.lineWidth = '10';
ctx.strokeStyle = 'orange';
ctx.strokeRect(100, 100, 400, 400);


ctx.fill();
// ctx.stroke(); // 没有加这句话也进行了绘制。。。 o(╯□╰)o   

ctx.clearRect(150, 150, 300, 300);