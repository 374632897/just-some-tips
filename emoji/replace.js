/*
* @Author: Jiang Guoxi
* @Date:   2016-06-24 13:18:15
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-06-24 14:31:44
*/

const fs = require('fs');
const height = 881 * 64;
fs.readFile('./sprite-2.scss', (err, data) => {
  const str = data.toString();
  const _str = str.replace(/background-position: 0 (-?\d+(?:px)?);/g, (match, position) => {
    // console.log(match, position);
    // return 'background-position: 0 ' + (- parseInt(position, 10) / height * 100).toFixed(6) + '%;';
    return 'background-position: 0 ' + (parseInt(position, 10) / 2.56) + 'px;';
  });
  fs.writeFileSync('./replace.scss', _str)
  // const _t = fs.createWriteStream('./replace.scss');
  // _t.pipe(_str);
});