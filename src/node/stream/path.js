const path = require('path');
const fs = require('fs');
const file = '/Users/Jason/project/company/rishiqing-front/package.json';
console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));
// console.log(path.extname(file));
const s = fs.createReadStream(file);
console.log(s.relative)
