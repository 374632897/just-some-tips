var LazyMan = class LazyMan {
  constructor (name = '') {
    if (!(this instanceof LazyMan)) {
      return new LazyMan(name);
    }
    console.log(`Hello ${name}`);
  }
  sleep (sec = 1) {
    const now = Date.now(), end = sec * 1000 + now;
    function noop () {}
    while (Date.now() < end) {
      noop();
    }
    return this;
  }
  async sleep1 (delay = 1) {
    const a = await new Promise ((res, rej) => {
      setTimeout(() => {
        res(this);
      }, delay * 1000);
    });
    return a;
  }

  eat (food = '') {
    console.log(`Eat ${food}~`);
    return this;
  }
}

new LazyMan('Jason').eat('dinner').sleep(10).eat('supper');
