class ArrayTimes {
  constructor () {
    let times = 0;
    return new Proxy([], {
      get (target, name) {
        if (name === 'times') {
          return times;
        }
        times++;
        return target[name];
      },
      set (target, name, value) {
        if (name === 'times') return false;
        times++;
        target[name] = value;
      }
    });
  }
}

var a = new ArrayTimes();
a[1] = 10;
a[2] = 9;
console.log(a.times)
