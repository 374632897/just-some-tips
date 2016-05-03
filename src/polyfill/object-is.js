/*
* @Author: JGX
* @Date:   2016-02-18 19:19:12
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-18 19:26:49
*/
// Object.is是ES6规范中的
Object.myIs = function(a, b) {
  if (a === b) {
    // 如果a不等于0， 第一个条件为true， 返回true, 否则判断判断a,b的0的取值是否一样
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // NaN
    return a !== a && b !== b;
  }
};