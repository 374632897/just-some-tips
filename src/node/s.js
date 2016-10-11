/*
* @Author: Jiang Guoxi
* @Date:   2016-10-11 17:22:42
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-10-11 17:23:41
*/

var http = require('http');
http.createServer(function (req, res) {
  console.log(req.headers);
  res.end('Hello world');
}).listen(9999);
console.log('Server runing at 9999');
