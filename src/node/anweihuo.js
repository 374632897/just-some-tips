const { random, range } = require('../../utils/array');
const { tip, doLoop, isObjectEqual } = require('../../utils/func');
const arr = range(0, 10000).map(item => Math.random() * item);

function loop () {
  doLoop(() => {
    const item = Math.random() * i, parseItem = parseInt(item, 10), hItem = item | 0;
      if (parseItem !== hItem) {
        console.info('notEqual');
        consoleinfo('item => %s, parseItem => %s, hItem => %s', item, parseItem, hItem);
      }
  }, 100000);
}
let parse, parse2;
tip(function parseItem () {
  parse = arr.map(item => parseInt(item, 10));
});
tip(function hItem () {
  parse2 = arr.map(item => item | 0);
});

console.log(isObjectEqual(parse, parse2));
