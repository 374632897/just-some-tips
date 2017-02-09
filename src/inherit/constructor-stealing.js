function SuperType () {
  this.colors = ['red', 'blue'];
}
SuperType.prototype.say = function () {
  console.log(123)
}
function SubType () {
  SuperType.call(this);
  this.constructor = SubType;
}
SubType.prototype = new SuperType();
const i = new SubType();
console.log(i, i.say)

