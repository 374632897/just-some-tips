const fs = require('fs');
fs.readFile('./a.js', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
