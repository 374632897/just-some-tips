const fs = require('fs')
fs.readFile('./1.jpeg', (err, data) => {
  // data.setEncoding('utf-8');
  console.log(data.toString('base64'));
});
