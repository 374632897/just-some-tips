const assert = require('assert')
const ary = [0,3,9,12,-5, -8, -10]
const target = -8;

function binarySearch (ary, item , left = 0, right = ary.length) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2)
  const value = ary[mid]

  if (item === value) {
    return mid;
  } else if (item > value) {
    return binarySearch(ary, item, mid + 1)
  } else {
    return binarySearch(ary, item, 0, mid);
  }
}

ary.sort();
assert.equal(ary.indexOf(target), binarySearch(ary, target))
