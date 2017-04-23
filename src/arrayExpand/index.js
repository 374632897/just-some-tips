// test cases './test.js'

function expandArray (ary) {
  if (!Array.isArray(ary)) return ary;
  return ary.reduce((pre, next) => {
    return pre.concat(expandArray(next));
  }, []);
}

module.exports = expandArray;
