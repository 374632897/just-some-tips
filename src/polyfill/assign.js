Object.defineProperty(Object, 'myAssign', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: function(target, firstSource) {
    'use strict';
    // if(target === (undefined || null)) 
    if(target === undefined || target === null)
    throw new Error('cannot convert first argument to object');

    var to = Object(target);
    // 起初因为这里的len和下面循环里的len一样，所以在执行到下面的时候直接重写了len值，导致只能合并一个对象
    for(var i = 1, len = arguments.length; i < len; i++) {
      var nextSource = arguments[i];
      // if(nextSource === (undefined || null)) 
      if(nextSource === undefined || nextSource === null)
        // 如果遍历完毕，跳出循环
        continue;
      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, leng = keysArray.length; nextIndex < leng; nextIndex++) {
        var nextKey = keysArray[nextIndex],
        // 如果该属性可枚举（为避免可能出现的抛出异常情况，这里需要先判断该属性存在）
          desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if(desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        
      }
    }
    return to;
  }

});
