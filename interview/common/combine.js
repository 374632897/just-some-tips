const a = [1,3,5,7,9]
const b = [2,4,6,8,10]

function combine (a, b) {
  let aIndex = 0, bIndex = 0;
  const ary = [], aLen = a.length, bLen = b.length;
  while (aIndex < aLen && bIndex < bLen) {
    if (a[aIndex] > b[bIndex]) {
      ary.push(b[bIndex])
      bIndex++
    } else {
      ary.push(a[aIndex])
      aIndex++
    }
  }
  return ary;
}

console.log(combine(a, b))
