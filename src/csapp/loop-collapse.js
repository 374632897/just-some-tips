const ary = [...new Array(10000)].map((item, index) => index).concat(1);
const len = ary.length;
function add1 () {
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += ary[i];
  }
  return sum;
}
function add2 () {
  return ary.reduce((prev, next) => prev + next, 0);
}

function add3 () { // 循环展开 // 在数组项为奇数的时候还存在问题
  let sum = 0;
  for (let i = 0; i < len - 1; i += 2) {
    sum += ary[i] + ary[i + 1];
  }
  if (len % 2) { // 针对奇数项的hack， 这里应该会有更好的方案。
    sum += ary[len - 1];
  }
  return sum;
}

function tip (fn = function () {}) {
  console.time(fn.name);
  console.log(fn());
  console.timeEnd(fn.name);
}
tip(add1) // 2.459ms
tip(add2) // 0.588ms
tip(add3) // 0.386ms
