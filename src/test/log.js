function log () {
  var arg = Array.prototype.slice.call(arguments);
  ///////////////////////////////////
  // console.log.apply(null, arg); //
  ///////////////////////////////////
  arg.unshift('app'); // unshift是走头部推入， 直接在原数组上操作， 返回值为推入后的数组长度！！！！别搞混了。 
  console.log.apply(console, arg); // 这里的this指向的是console, arguments类数组对象可以直接推入而不用转化为数组
}