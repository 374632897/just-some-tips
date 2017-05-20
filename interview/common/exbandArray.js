// 数组扁平化
function expandArray (ary) {
  if (ary.length <= 1) return ary;
  return ary.reduce((curr, next) => {
    return curr.concat(next.length > 1 ? expandArray(next) : next);
  }, []);
}

console.log(expandArray([1,2,[3,4,5,[6,7,8], 9]]))
