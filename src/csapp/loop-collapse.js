const ary = [...new Array(10000)].map((item, index) => index);
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

function add3 () { // 循环展开
  let sum = 0;
  for (let i = 0; i < len - 1; i += 2) {
    sum = ary[i] + ary[i + 1];
  }
  return sum;
}

function tip (fn = function () {}) {
  console.time(fn.name);
  console.log(fn());
  console.timeEnd(fn.name);
}
tip(add1)
tip(add2)
tip(add3)
