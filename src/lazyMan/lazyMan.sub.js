class Subscribe {
  constructor () {
    this.resetTask();
  }
  resetTask () {
    this.__taskList = []
  }
  subscribe (name, fn = function () {}) {
    this.__taskList.push({ name, fn });
  }
  hasNext () {
    return this.__taskList.length > 0;
  }
  getNext () {
    return this.__taskList.shift();
  }
  next () {
    if (!this.hasNext()) return;
    const first = this.getNext();
    first.fn();
    return this;
  }
  triggerAll () {
    setTimeout(() => {
      while (this.hasNext()) {
        const first = this.getNext();
        first.fn();
      }
    }, 0);
  }
}

class LazyMan extends Subscribe {
  constructor (name) {
    super();
    console.log('Hello', name);
    setTimeout(() => {
      this.next();
    });
  }
  sleep (sec = 1) {
    this.subscribe('sleep', () => {
      setTimeout(() => {
        this.next();
      }, sec * 1000);
    });
    return this;
  }
  eat (food = '') {
    console.log(this)

    this.subscribe('eat', () => {
      console.log('Enjoy ', food);
      this.next();
    });
    return this;
  }
}

new LazyMan('Jason').eat('dinner').sleep(1).eat('supper');

