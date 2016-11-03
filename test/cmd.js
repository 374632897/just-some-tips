/*
* @Author: Jiang Guoxi
* @Date:   2016-08-17 17:04:51
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-11-03 14:33:46
*/

const cmd = require('commander');
cmd.option('-h, --haha', 'Add hello')
   .parse(process.argv);

console.log(cmd.haha)
console.log(cmd);
console.log(132131)

function getTitle (array) {
  const ary = [];
  array.forEach((item, index) => {
    if (item.get('childList')) {
      ary[index] = getTitle(item.get('childList'));
    } else {
      ary[index] = { id: item.get('id'), name: item.get('name') };
    }
  });
  return ary;
}
