function Chain (fn) {
  this.fn = fn;
  this.successor = null;
}

Chain.prototype.setSuccesor = function (fn) {
  this.successor = fn;
  return this;
}
Chain.prototype.pass = function () {
  var ret = this.fn.apply(this, arguments);
  if (ret === 'successor') {
    return this.successor && this.successor.pass.apply(this, arguments); // 这里最后陷入了递归→＿←
  }
  return ret;
}
Chain.prototype.next = function () {
  return this.successor && this.successor.pass.apply(this, arguments);
}
var fn1 = new Chain(function () {
  console.log(1);
  return 'successor';
});
var fn2 = new Chain(function () {
  console.log(2);
  var _this = this;
  setTimeout(function () {
    _this.next();
  }, 1000);
  // return 'successor';
});
var fn3 = new Chain(function () {
  console.log(3);
  // return 'successor';
});
fn1.setSuccesor(fn2).setSuccesor(fn3);
