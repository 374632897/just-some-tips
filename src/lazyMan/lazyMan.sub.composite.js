function Subscribe () {
  this.resetTask();
}
Subscribe.prototype.resetTask = function () {
  this.__taskList = [];
}
Subscribe.prototype.subscribe = function (name, fn = function () {}) {
  this.__taskList.push({ name, fn });
}
Subscribe.prototype.hasNext = function () {
  return this.__taskList.length > 0;
}
Subscribe.prototype.getNext = function () {
  return this.__taskList.shift();
}
Subscribe.prototype.next = function () {
  if (!this.hasNext()) return;
  const first = this.getNext();
  first.fn();
  return this;
}

function LazyMan (name) {
  if (!(this instanceof LazyMan)) {
    return new LazyMan(name);
  }
  setTimeout(() => {
    this.next();
  }, 0);
}
LazyMan.prototype = new Subscribe();

LazyMan.prototype.sleep = function (sec = 1) {
  this.subscribe('sleep', () => {
    setTimeout(() => {
      this.next();
    }, sec * 1000);
  });
  return this;
}
LazyMan.prototype.eat = function (food = '') {
  console.log(this)
  this.subscribe('eat', () => {
    console.log('Enjoy ', food);
    this.next();
  });
  return this;
}

new LazyMan('Jason').eat('dinner').sleep(10).eat('supper');

