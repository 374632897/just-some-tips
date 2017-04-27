const b = require('./b');

console.log(b.sayName());
console.info('afterSayName')
console.info(module.exports)
module.exports = function () {
  return 'Jason'
}
