const a = [...new Array(10000000)].map((item, index) => index);
const b = [...new Array(10)].map(item => Math.round(Math.random() * 100 + 1));
const { tip } = require('../../utils/func');
// console.log(a)
// console.log(b)

function binarySearch (item, ary, len = ary.length) {
  let lo = 0;
  let hi = len - 1;
  while (lo <= hi) {
    // const mid = lo + parseInt((hi - lo) / 2, 10);
    const mid = parseInt((lo + hi) / 2, 10);
    if (item === a[mid]) return mid;
    if (item < a[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
  // const mid = ary[parseInt(len / 2)];
  // if (item === mid) {
  //   return true;
  // }
  // if (item < mid) {
  //   return binarySearch(item, ary.slice(0, mid));
  // }
  // if (item > mid) {
  //   return binarySearch(item, ary.slice(mid, len));
  // }
  // return false;
}
function getItem (item, ary) {
  return ary.indexOf(item);
}
tip(function binary () {
  return binarySearch(99999, a);
});
tip(function indexOf () {
  return getItem(99999, a);
});


// function search1 (a, b) {
//   console.time('search1')
//   const notSelect = [];
//   a.forEach(item => {
//     if (b.indexOf(item) === -1) {
//       notSelect.push(item)
//     }
//   });
//   console.timeEnd('search1')

//   return notSelect;
// }
// function search2 (a, b) {
//   console.time('search2')
//   const notSelect = [];
//   console.time('sort')
//   a.sort();
//   b.sort();
//   console.timeEnd('sort')
//   a.forEach(item => {
//     if (binarySearch(item, b) === -1) {
//       notSelect.push(item);
//     }
//   });
//   console.timeEnd('search2')

//   return notSelect;
// }
// const item1 = search1(99, a);
// const item2 = search2(99, a);
// console.log(item1, item2)
// console.log(a)
// const s1 = search1(a, b), s2 = search2(a, b);
// console.log(s1.sort().toString() === s2.sort().toString())
// console.log(search1(a, b));
// console.log(search2(a, b));
