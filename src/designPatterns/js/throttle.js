var JGX = {
  event: {
    on: function (type, ele, cb) {
      if (ele.addEventListener) {
        ele.addEventListener(type, cb, false);
      } else if (ele.attachEvent) {
        ele.attachEvent('on' + type, cb);
      } else {
        element['on' + type] = cb;
      }
    },
    off: function (type, ele, cb) {
      if (ele.removeEventListener) {
        ele.removeEventListener(type, cb, false)
      } else if (ele.detachEvent) {
        ele.detachEvent('on' + type, handler);
      } else {
        ele['on' + type] = null;
      }
    }
  },
  DOM: {

  }
  
}
/*var throttle = function (cb, interval) {
  var isFirstTime = true, timer = null;
  return function () {
    var _this = this, arg = arguments;
    if (isFirstTime) {
      cb.apply(this, arg);
      return isFirstTime = false;
    }
    if (timer) return;
    timer = setTimeout(function () {
      clearInterval(timer);
      cb.apply(cb, arg);// 延迟执行
      timer = null;
    }, interval || 500);
  }
};*/




var throttle = function (cb, interval) {
  var isFirstTime = true, timer = null;
  return function () {
    var _this = this, arg = arguments;
    if (isFirstTime) {
      cb.apply(_this, arg);
      return isFirstTime = false;
    }
    if (timer) return;
    timer = setTimeout(function () {
      console.log(timer);
      // clearTimeout(timer);
      timer = null;
      cb.apply(_this, arg);
    }, interval || 500);
  }
};
var scroll = throttle(function () {
  console.log('test');
});
JGX.event.on('resize', window, scroll);