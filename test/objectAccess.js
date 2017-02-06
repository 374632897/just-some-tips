const a = {}, b = {};
for (let i = 0; i < 1000000; i++) {
  a[i] = i;
}
b[0] = 0;
b[999999] = 999999;

function log (fn = function () {}, tip = '') {
  let start = Date.now();
  console.log(fn())
  console.log(tip + ': ');
  console.log(Date.now() - start)
}

log(() => {
  return a[999999] - a[0]
}, 'big')
log(() => {
  return b[999999] - b[0]
}, 'small')
