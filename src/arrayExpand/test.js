const assert = require('assert');
const expandArray = require('./');

function deepEqual (ary1, ary2) {
  return JSON.stringify(ary1) === JSON.stringify(ary2);
}

const testCases = new Map();

testCases.set([1,[2,3],[4,5]], [1,2,3,4,5]);
testCases.set([[1,2], [3,4],[5,6]], [1,2,3,4,5,6]);
testCases.set([1,2,[3,4,[5,6,[7,8,[9,10]]]]], [1,2,3,4,5,6,7,8,9,10]);
testCases.set([1, 'a', 'b', [2,3,'d', 'e', '4', [5]], '7', '8'], [1, 'a', 'b', 2, 3, 'd', 'e', '4', 5, '7', '8']);

testCases.forEach((expectedValue, targetValue) => {
  assert.ok(deepEqual(expandArray(targetValue), expectedValue));
});

