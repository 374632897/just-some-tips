let str = 'programming';

function bySort (str) {
  str = str.split('').sort().join('');

  console.log(str)

  const match = str.match(/([\s\S])\1?/g);

  const maxIndex = Math.max(...match.map(item => item.length))

  const maxChar = match[maxIndex] // 这里有问题 ， 而且这个方法效率不及下面一种

  return [maxIndex, maxChar]

  // console.log(maxIndex, maxChar)
}

function byObject (str) {
  const obj = str.split('').reduce((prev, next) => {
    if (prev[next]) {
      prev[next]++
    } else {
      prev[next] = 1
    }
    return prev;
  }, {});
  let maxIndex = 0, maxChar;
  Object.keys(obj).forEach(item => {
    if (obj[item] > maxIndex) {
      maxIndex = obj[item]
      maxChar = item
    }
  });
  return [maxIndex, maxChar]
  // const maxIndex = Math.max(...Object.keys(obj).map(item => obj[item]));
}
console.time('bySort')
console.log(bySort(str))
console.timeEnd('bySort')
console.time('byObject')
console.log(byObject(str))
console.timeEnd('byObject')
