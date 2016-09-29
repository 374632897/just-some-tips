/*
* @Author: Jiang Guoxi
* @Date:   2016-09-29 14:56:52
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-29 15:33:12
*/

var http = require('http');
// var loc = 'http://192.168.0.106:8040/webpage/index.php';
// var loc = 'https:www.rishiqing.com';
var loc = 'http://beta.rishiqing.com';
// var loc = 'http://beta.rishiqing.com';
var i = 1;
// http.get(loc, function (a, b, c) {
//   console.log(a, b, c);
//   console.log('第%s次访问', i);
//   i++;
// });
while (i < 1000) {
  !function (j) {
    var d = http.get(loc, function (a, b, c) {
      // console.log(a, b, c);
      console.log('第%s次访问', j);
    });
    d.on('error', function (e) {
      console.log('error');
      console.log(e);
    })
  }(i);
  i++;
}

