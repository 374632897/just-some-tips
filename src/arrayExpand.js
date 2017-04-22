function expandArray (ary) {
  if (!Array.isArray(ary)) return ary;
  return ary.reduce((pre, next) => {
    return pre.concat(expandArray(next));
  }, []);
}

console.info(expandArray([1,2,3,[1,2,3, [1,2,3]], [4,5,[6,7,[8,9]]]]));
