const { range } = require('../../utils/array');
const { tip } = require('../../utils/func');

function binarySearch (item, ary) {
  let low = 0, hi = ary.length - 1, mid;
  while (low <= hi) {
    mid = parseInt((low + hi) / 2, 10);
    const tar = ary[mid];
    if (item === tar) return mid;
    if (item < tar) {
      hi = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function index (item, ary) {
  return ary.indexOf(item);
}

const ary = range(10000);
// console.log()
tip(function BinarySearch () {
  return binarySearch(101, ary);
});
// index更快
tip(function Index () {
  return index(101, ary)
});
