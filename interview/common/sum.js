// https://www.youtube.com/watch?v=XKu_SEDAykw
// 2sum
const ary = [1,3,5,6,9];
const sum = 8;

function getPair (ary, sum) {
  let lower = 0, he = ary.length - 1
  if (ary[lower] + ary[he] < sum) return null;
  while (lower < he) {
    const innerSum = ary[lower] + ary[he];
    if (innerSum === sum) return [ary[lower], ary[he]];
    if (innerSum > sum) {
      he--;
    } else {
      lower++;
    }
  }
  return null;
}


function getPair (ary, sum) {
  const obj = ary.reduce((ac, curr, index) => {
    ac[curr] = index;
    return ac;
  }, {});
  const len = ary.length;
  let i = 0;
  while (i < len) {
    const item = ary[i], tar = sum - item;
    if (obj[tar] && obj[tar] !== i) return [item, tar]
    i++;
  }
  return null;
}

function getPair (ary, sum) {
  for (let i = 0, len = ary.length - 1; i < len; i++) {
    const item = ary[i], tar = sum - item;
    const index = ary.indexOf(tar);
    if (index !== -1 && index !== i) {
      return [item, tar];
    }
  }
  return null;
}

function getPair (ary, sum) {
  const comp = new Set();
  for (let i = 0, len = ary.length - 1; i< len; i++) {
    const item = ary[i], complement = sum - item;
    if (comp.has(complement)) {
      return [item, complement]
    }
    comp.add(item)
  }
  return null;
}

console.log(getPair(ary, sum));
console.log(getPair([1,2,3,4,5,6], 100))
console.log(getPair([10, 1, 5, 9, 15, 0], 20))
