const a = require('./a');
console.info(a)
exports.sayName = () => {
  console.log('Hello ' + a());
}
