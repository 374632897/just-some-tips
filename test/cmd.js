/*
* @Author: Jiang Guoxi
* @Date:   2016-08-17 17:04:51
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-11-02 18:04:24
*/

const cmd = require('commander');
cmd.option('-h, --haha', 'Add hello')
   .parse(process.argv);

console.log(cmd.haha)
console.log(cmd);
console.log(132131)
