const E =require('events');
function throttle (fn, delay = 200) {
  let previous, timer;
  const later = function () {
    clearTimeout(timer);
    previous = Date.now();
    timer = null;
    fn();
  };
  return function () {
    const now = Date.now();
    const remaining = delay - (now - previous);
    if (remaining <=  0) {
      previous = now;
      clearTimeout(timer);
      timer = null;
      fn();
    } else if (!timer) {
      timer = setTimeout(later, remaining)
    }
  }
}

const e = new E();
e.on('hello', throttle(() => {
  console.log('Hello')
}))
e.emit('hello')
e.emit('hello')
e.emit('hello')
e.emit('hello')

setTimeout(() => {
  e.emit('Hello');
}, 200);
