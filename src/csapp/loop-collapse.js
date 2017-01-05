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
// 循环展开
// 数组长度为n， 展开k次， 那么循环界限为n - k + 1; 自增i += k; 每次求和求出ary[i]...ary[i + k - 1]
// 一个问题是，当n / k 不是整数的时候， 会出问题。
function add3 () { // 循环展开 // 在数组项为奇数的时候还存在问题
  let sum = 0, _len = len - 1;
  for (let i = 0; i < _len; i += 2) {
    sum += ary[i] + ary[i + 1];
  }
  if (len % 2) { // 针对奇数项的hack， 这里应该会有更好的方案。
    sum += ary[len - 1];
  }
  return sum;
}

function add5 () {
  let sum = 0, _len = len - 5 + 1;
  for (let i = 0; i < _len; i += 5) {
    sum += ary[i] + ary[i + 1] + ary[i + 2] + ary[i + 3] + ary[i + 4];
  }
  return sum;
}


function tip (fn = function () {}) {
  console.time(fn.name);
  console.log(fn());
  console.timeEnd(fn.name);
}
tip(add1) // 2.200ms
tip(add2) // 0.673ms
tip(add3) // 0.417ms
tip(add5) // 0.324ms
