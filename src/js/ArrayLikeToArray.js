var arrLike = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
};
var start1, start2, start3, time1 = 0, time2 = 0, time3 = 0;
function test () {
  start1 = Date.now();
  convertByAbbr(arrLike);
  time1 += (Date.now() - start1);

  start2 = Date.now();
  convertByProto(arrLike);
  time2 += (Date.now() - start2);

  start3 = Date.now();
  convertByFrom(arrLike);
  time3 += (Date.now() - start3);
}

function convertByAbbr (arrLike) {    // 在少量数据的时候这两种执行时间不稳定， 无法比较两者差异
  return [].slice.call(arrLike);
}
function convertByProto (arrLike) {   // 在少量数据的时候这两种执行时间不稳定， 无法比较两者差异
  return Array.prototype.slice.call(arrLike);
}
function convertByFrom (arrLike) {
  try {
    return Array.from(arrLike);
  } catch (e) {}
}

for(var i = 0; i < 100000; i++) {
  test();
}                                                           // 100000   1000000
console.log('使用缩写方式访问原型转换为数组耗时%oms', time1); // 236      2364
console.log('直接访问原型转换为数组耗时%oms', time2);         // 215      2162
console.log('使用ES6转换为数组耗时%oms', time3);              // 82       953