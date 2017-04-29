const assert = require('assert')

const isSameIds = (ids1, ids2) => {
  if (ids2 === ids1) return true;
  if (!ids1 || !ids2) return false;
  if (ids1.length !== ids2.length) return false;

  const [sortIds1, sortIds2] = [ids1, ids2].map(item => {
    return item.split(',').map(Number).sort((a, b) => {
      return a - b;
    }).join(',');
  });
  console.info(sortIds1, sortIds2)
  return sortIds1 === sortIds2;
};

assert.equal(isSameIds('1,2,3', '1,2,3'), true)
assert.equal(isSameIds('1,2,4', '4,2,1'), true)
assert.equal(isSameIds('1,2,3', '1,2'), false)
assert.equal(isSameIds('1,2,3', ''), false)
assert.equal(isSameIds('', '1,2,3'), false)
assert.equal(isSameIds('1,2,3,2,1,3,1,2', '1,1,2,2,3,1,3,2'), true)
