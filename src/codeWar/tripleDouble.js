const assert = require('assert');
function tripledouble (num1, num2) {
  const [min, max] = [...arguments].sort().map(String);
  return min.split('').some((item, index) => {
    return (min.includes(item.repeat(2)) && max.includes(item.repeat(3))) ||
           (min.includes(item.repeat(3)) && max.includes(item.repeat(2)));
  }) ? 1 : 0;
}
console.log(Array.from(10))
assert.equal(tripledouble(451999277,41177722899),1);
assert.equal(tripledouble(1222345, 12345),0);
assert.equal(tripledouble(12345, 12345),0);
assert.equal(tripledouble(666789, 12345667),1);
assert.equal(tripledouble(10560002, 100),1);
