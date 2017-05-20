const E = require('events')
const {
  throttle,
  debounce
} = require('./CommonUtil')

const e = new E();

function test () {
  console.log(new Date().getMilliseconds())
}
e.on('test', throttle(test));

e.emit('test')
e.emit('test')
e.emit('test')
e.emit('test')
setTimeout(() => {
  console.log('setTimeoutEmit')
  e.emit('test')
}, 300)
