// timeout_vs_immediate.js
const fs = require('fs');
function withOutIo () {
  setTimeout(function timeout () {
    console.log('timeout');
  },0);

  setImmediate(function immediate () {
    console.log('immediate');
  });
}
function withIo () {
  fs.readFile(__filename, () => {
    withOutIo();
  });
}

withIo();
