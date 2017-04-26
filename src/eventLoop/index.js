console.log('script start');
setTimeout(() => {
  console.log('setTimeout')
});
Promise.resolve().then(() => {
  console.info('Promise1');
}).then(() => {
  console.info('Promise2');
});
console.info('script end');
