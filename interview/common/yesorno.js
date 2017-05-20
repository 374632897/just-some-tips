const str = '11100101'
let currIndex = 0;
const descMap = {};
str.replace(/(\d)\1{0,}/g, (a, b, c, d) => {
  descMap[currIndex + '~' + (currIndex + a.length)] = b === '1' ? 'yes' : 'no';
  currIndex += a.length;
  // console.info(a, b, c, d)
})
console.info(descMap)


// function yesOrNo (str) {
//   let pre = 0, _str = '';
//   const ary = str.split('');
//   ary.reduce((curr, next, nextIndex) => {
//     if (next !== curr) {

//     } else {

//     }
//   });
// }
// ['a', 'b', 'c'].reduce((a, b, c, d) => {
//   console.log(a, b, c, d)
// }, '')
