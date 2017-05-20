class Event {
  constructor () {
    this._listener = {};
  }
  on (name, handler) {
    if (!name || !handler) return;
    if (!this._listener[name]) {
      this._listener[name] = [];
    }
    this._listener[name].push(handler);
  }
  _getEvents (name) {
    if (!name) return false;
    const handlers = this._listener[name];
    if (!handlers || !handlers.length) return false;
    return handlers;
  }
  emit (name, ...args) {
    const handlers = this._getEvents(name);
    if (!handlers) return;
    handlers.forEach(item => item(...args));
  }
  remove (name, handler) {
    if (name && !handler) {
      this._listener[name] = [];
      return;
    }

    const handlers = this._getEvents(name);
    const index = handlers.indexOf(handler);
    return handlers.splice(index, 1);
  }
}


function test () {
  const a = new Event();
  function sayName () { console.log('sayName') }
  a.on('test', () => {
    console.log('test 1')
  })
  a.on('test', sayName)
  a.emit('test')
  a.remove('test', sayName)
  a.emit('test')
}

test()
