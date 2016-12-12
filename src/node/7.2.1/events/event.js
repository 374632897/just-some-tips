const Emiter = require('events');
class Test extends Emiter {

}

const test = new Test();
test.on('click', () => {
  console.log('click');
});
test.emit('click');
console.log(require('os').cpus().length)
