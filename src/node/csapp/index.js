/*
* @Author: Jiang Guoxi
* @Date:   2016-10-25 13:33:45
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-10-25 13:36:45
*/

var http = require('http');
var URL = 'http://csapp.cs.cmu.edu/3e/code.html';
http.get(URL, function (res) {
  var data = '';
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function () {
    console.log(data.toString());
  });
  res.on('error', function () {
    console.log('error');
  })
});

function handleList (str) {

}
