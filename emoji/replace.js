/*
* @Author: Jiang Guoxi
* @Date:   2016-06-24 13:18:15
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-07-26 14:10:42
*/

const fs = require('fs');
const RATIO = 64 / 25; // 64 => 雪碧图ICON宽高 25 => 期待宽高
fs.readFile('./square-t.css', (err, data) => {
  const str = data.toString();
  // const _str = str.replace(/width: 64px;\r\n/g, '').replace(/height: 64px;\r\n/g, '');
  // console.log(_str);
  const _str = str.replace(/background-position: (-?\d+(?:px)?) (-?\d+(?:px)?);/g, (match, a, b) => {
    return 'background-position: ' + (parseInt(a, 10) / RATIO) + 'px ' + (parseInt(b, 10) / RATIO) + 'px;';
  });
  fs.writeFileSync('./square-t-2.css', _str);
});
