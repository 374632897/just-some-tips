class Util {
  throttle (fn, timeout = 200) {
    let timer = null, previous = 0, result;
    const later = function () {
      previous = Date.now();
      timeout = null;
      result = fn();
    };
    return function () {
      const now = Date.now()
      const remaining = timeout - (now - previous)
      if (remaining <= 0) {
        clearTimeout(timer);
        timer = null;
        previous = now;
        result = fn();
      } else if (!timer) {
        timer = setTimeout(later, remaining);
      }
      return result;
    }
  }
  debounce (fn, timeout = 200) {
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      } else {
        fn();
      }
      timer = setTimeout(fn, timeout);
    }
  }
}


module.exports = new Util()
