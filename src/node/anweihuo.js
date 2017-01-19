const { random } = require('../../utils/array');
for (let i = 0; i < 100000; i++) {
  const item = Math.random() * i, parseItem = parseInt(item, 10), hItem = item | 0;
  if (parseItem !== hItem) {
    console.info('notEqual');
    consoleinfo('item => %s, parseItem => %s, hItem => %s', item, parseItem, hItem);
  }
}
