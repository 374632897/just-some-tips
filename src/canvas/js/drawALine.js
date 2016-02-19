/*
* @Author: JGX
* @Date:   2016-02-19 10:12:55
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-19 10:42:12
*/

ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
// ctx.strokeColor = 'red'; // 这里有误。。 算了。。 还是先学API吧。 
ctx.strokeStyle = 'red'; // 描述颜色是用的style而不是color啊， cry.. 

ctx.stroke();


/**
 * testComment
 * @return {[type]} [description]
 */
(function () {
  /**
   * [sayname description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function sayname (name) {
    consolel.log('My name is ' + name);
  }
  /**
   * [h description]
   * @type {String}
   */
  var h = 'hello';
})();