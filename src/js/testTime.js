
// 经检测， 使用第一种方式比第二种方式要多花费0.2毫秒左右。 
// 因为第一种方式需要先新建实例， 再走对象的原型链上查找。而第二种方式直接就走原型上查找了
function testTime (obj) {
  console.time('使用简写方式耗时');
  console.log(({}).toString.call(obj));
  console.timeEnd('使用简写方式耗时');


  console.time('直接使用prototype耗时');
  console.log(Object.prototype.toString.call(obj));
  console.timeEnd('直接使用prototype耗时');
}

function testNewAndVisitTIme (obj) {
  console.time('新建对象用时');
  console.log({}.toString);
  console.timeEnd('新建对象用时');


  console.time('直接访问prototype耗时');
  console.log(Object.prototype.toString);
  console.timeEnd('直接访问prototype耗时');
}
// 这里情况也是和上面差不多
function testArrayMethod (ary) {
  console.time('使用简写方式耗时');
  console.log([].slice.call(ary));
  console.timeEnd('使用简写方式耗时');


  console.time('直接使用prototype耗时');
  console.log(Array.prototype.slice.call(ary));
  console.timeEnd('直接使用prototype耗时');
}
