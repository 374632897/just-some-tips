Object.defineProperty(Object, 'myAssign', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: function(target, firstSource) {
    'use strict';
    if(target === (undefined || null)) throw new Error('cannot conver first argument to object');

    var to = Object(target);
    for(var i = 1, len = arguments.length; i < len; i++) {
      var nextSource = arguments[i];
      if(nextSource === (undefined || null)) continue;
      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex];
        
      }
    }
  }

});
