const assert = require('assert');
const fn =  (n) => {
  if (!n) return [];
  if (n > 30) n = 30;

  const loop = [...new Array(n)];
  const indexes = [...new Array(31)].map((_, index) => index + 2);
  console.log(indexes)
  return loop.map(() => {
    const index = Math.floor(Math.random() * indexes.length);
    const item = indexes.splice(index, 1)[0];
    return item;
  });
}

const set32 = fn(32);
assert.equal(set32.length, [...new Set(set32)].length);
console.log('The max of fn less than 32', Math.max(...set32) <= 32);
console.log('The min of fn bigger than 2', Math.min(...set32) >= 2);
// assert.equal(Math.max())
