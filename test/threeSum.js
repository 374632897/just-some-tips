const { getDenseArray, range } = require('../utils/array');
// const a = getDenseArray(20).map((_, index) => index - 10);
// const MAX = a.length;
// const expectedTimes = MAX * (MAX - 1) * (MAX - 2) / 6;

let times = 0;
const a = range(5);
const MAX = a.length;
for (let i = 0; i < MAX; i++) {
  for (let j = i + 1; j < MAX; j++) {
    for (let k = j + 1; k < MAX; k++) {
      // console.log(i, j, k);
      times++;
      // 为什么这里会计算 MAX * (MAX - 1) * (MAX - 2) / 6次。。。
      if (a[i] + a[j] + a[k] === 0) {
        // console.log(a[i], a[j], a[k]);
      }
    }
  }
}



console.log('all times is => %s, Max is %s', times, MAX)
// console.log(expectedTimes, times)
