/*
* @Author: JGX
* @Date:   2016-01-27 09:32:57
* @Last Modified by:   JGX
* @Last Modified time: 2016-01-27 09:33:56
*/
var getUuid = function () {
  var i, random, uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
  }

  return uuid;
};