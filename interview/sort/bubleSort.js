const arr = [2,1,3,2,1,0,10,12,15, -10];

function bubleSort (ary) {
  const len = ary.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (ary[i] > ary[j]) {
        const t = ary[i];
        ary[i] = ary[j];
        ary[j] = t;
      }
    }
  }
  return ary;
}

console.log(bubleSort(arr))

// console.log(Math.max.apply(null, arr))
