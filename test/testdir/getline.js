/*
* @Author: Jiang Guoxi
* @Date:   2016-08-17 16:03:52
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-17 16:09:10
*/
'use strict';
const fs = require('fs');
const path = require('path');
const dir = '.';
let line = 0;
fs.readdir(dir, (err, files) => {
  files.forEach(item => {
    const file = path.join(dir, item);
    const string = fs.readFileSync(file).toString();
    const _line = string.match(/\n/g).length;
    line += _line;
  });
  console.log('文件行数： ', line);
});
