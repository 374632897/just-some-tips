// 数组扁平化
function flatten (ary) {
  if (ary.length <= 1) return ary;
  return ary.reduce((curr, next) => {
    return curr.concat(next.length > 1 ? flatten(next) : next);
  }, []);
}

console.log(flatten([1,2,[3,4,5,[6,7,8], 9]]))
