/*
* @Author: Jiang Guoxi
* @Date:   2016-08-10 08:46:20
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-10 08:54:43
*/
const colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
console.log(process.env);
// console.log(process.env.TERM);
console.log('hello'.error);
