/*
* @Author: Jiang Guoxi
* @Date:   2016-10-19 11:23:38
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-10-19 11:24:30
*/

var co = require('co');

co(function* () {
  var result = yield Promise.resolve(true);
  return result;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});
