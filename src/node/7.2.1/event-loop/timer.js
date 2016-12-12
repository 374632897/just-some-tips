// EventLoop timers => IO callbacks => idle, prepare => poll => check(invoked immediate callback) => close callbacks
// In poll phase, If the poll queue is emptyscripts and no scripts have been scheduled by setImmediate(),
// the event loop will end the poll phase and continue to the check phase to execute those scheduled scripts.
const fs = require('fs')
console.log('start');
let timer;
setImmediate(() => {
  console.log('setImmediate');
});
timer = setInterval(() => {
  console.log('setInterval');
}, 0);
console.log('Timer => ', timer)
setTimeout(() => {
  console.log('timeout');
  clearInterval(timer);
}, 0);
fs.readFile('./timer.js', (err, data) => {
  console.log('readFile');
});
process.nextTick(() => {
  console.log('nextTick')
});
console.log('end');

