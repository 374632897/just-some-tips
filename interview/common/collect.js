// 交集
function unique (ary) {
  return [...new Set(ary)];
}
function intersection (ary1, ary2) {
  return unique(ary1.filter((item) => ary2.indexOf(item) !== -1));
}
// 并集
function union (ary1, ary2) {
  return unique(ary1.concat(ary2));
  // return [...new Set(ary1.concat(ary2))];
}

// 差集
function complement (ary1, ary2) {
  return unique(ary1.filter(item => ary2.indexOf(item) < 0));
}

const ary1 = [1,2,3,4]
const ary2 = [2,2,1,8,9]

console.log(intersection(ary1, ary2))
console.log(union(ary1, ary2))
console.log(complement(ary1, ary2))
