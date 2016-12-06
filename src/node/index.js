const _ary = [...new Array(100000)].map((_, index) => index);
const ary = _ary.concat().sort(() => Math.random() - Math.random());

const time = (fn, tips = '') => {
  console.time(tips);
  fn();
  console.timeEnd(tips);
};
time(() => {
  console.log(ary.indexOf(1023));
}, 'indexOf');
time(() => {
}, 'binarySearch');
