/*
* @Author: Jiang Guoxi
* @Date:   2016-06-24 13:18:15
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-06-27 09:23:19
*/

const fs = require('fs');
const RATIO = 64 / 25; // 64 => 雪碧图ICON宽高 25 => 期待宽高
fs.readFile('./sprite-2.scss', (err, data) => {
  const str = data.toString();
  const _str = str.replace(/background-position: 0 (-?\d+(?:px)?);/g, (match, position) => {
    return 'background-position: 0 ' + (parseInt(position, 10) / RATIO) + 'px;';
  });
  fs.writeFileSync('./replace.scss', _str);
});