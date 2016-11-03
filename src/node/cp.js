/*
* @Author: Jiang Guoxi
* @Date:   2016-10-25 09:12:56
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-10-25 09:15:15
*/

var exec = require('child_process').exec;
exec('touch test.js', function (err, cb) {
  if (err) return console.log('err => ', err)
    console.log(cb)
})
