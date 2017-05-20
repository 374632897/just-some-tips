const arr = [2,1,3,2,1,0,10,12,15, -10];

// var quickSort = function(arr) {
//     console.time('2.快速排序耗时');
// 　　if (arr.length <= 1) { return arr; }
// 　　var pivot = arr.splice(0, 1)[0];
// 　　var left = [];
// 　　var right = [];
// 　　for (var i = 0; i < arr.length; i++){
// 　　　　if (arr[i] < pivot) {
// 　　　　　　left.push(arr[i]);
// 　　　　} else {
// 　　　　　　right.push(arr[i]);
// 　　　　}
// 　　}
// console.timeEnd('2.快速排序耗时');
// 　　return quickSort(left).concat([pivot], quickSort(right));
// };

// function quickSort (ary) {
//   const base = ary[0];
//   const left = [], right = [];
//   if (ary.length <= 1) return ary;
//   for (let i = 1; i < ary.length; i++) {
//     const item = ary[i];
//     if (item > base) {
//       right.push(item)
//     } else {
//       left.push(item)
//     }
//   }
//   return quickSort(left).concat(base, quickSort(right));
// }
function quickSort (ary) {
  // 应该在函数的第一个位置判断是否返回
  if (ary.length <= 1) return ary;
  const base = ary.splice(0, 1)[0]
  const left = [], right = [];
  ary.forEach(item => {
    return item > base ? right.push(item) : left.push(item);
  });
  return quickSort(left).concat(base, quickSort(right));
}
console.time('quickSort')
console.log(quickSort(arr))
console.timeEnd('quickSort')
