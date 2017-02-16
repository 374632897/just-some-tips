const fs = require('fs');
const str = fs.readFileSync('./test.log').toString();
console.log(str.match( /action-data=\\"(uid=.*?)">/g));
