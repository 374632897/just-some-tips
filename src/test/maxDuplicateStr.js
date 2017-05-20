function maxDuplicateStr (str) {
  if (str.length <= 1) return str;
  const strMap = str.split('').reduce((current, next) => {
    if (current[next]) {
      current[next]++;
    } else {
      current[next] = 1;
    }
    return current;
  }, {});
  let maxStr = '', maxTimes = 0;
  Object.keys(strMap).forEach(str => {
    if (strMap[str] < maxTimes) return;
    maxStr = str;
    maxTimes = strMap[str]
  });
  return [maxStr, maxTimes]
}
console.log(maxDuplicateStr('afjghdfraaaasdenas'));
