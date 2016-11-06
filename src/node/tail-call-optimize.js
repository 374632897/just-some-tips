/*
* @Author: Jiang Guoxi
* @Date:   2016-11-06 11:54:28
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-11-06 11:57:47
*/
function factorial1 (n) {
  if (n <= 1) return 1;
  return n * factorial1(n - 1)
}
// 改写后的函数就能够触发尾调用优化。
function factorial2(n, p = 1) {
  if (n <= 1) return 1 * p;
  // let result = n * p;
  return factorial2(n - 1, n * p);
}
console.time('没有尾调用优化');
factorial1(50);
console.timeEnd('没有尾调用优化');
console.time('有尾调用优化');
factorial2(50);
console.timeEnd('有尾调用优化');
