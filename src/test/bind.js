Function.prototype.myBind = function (cxt) {
  var arg = Array.prototype.slice.call(arguments, 1);
  return this.apply(cxt, arg);
}

var obj = {
  name: 'Jason',
  sayName: function (arg, a, b, c, d) {
    console.log(this.name, arg, a, b, c, d);
  }
}
var obj2 = {
  name: 'Daisy'
};
obj.sayName.myBind(obj2);