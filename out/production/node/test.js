#! /bin/node
//const fs = require('fs');
//fs.createReadStream('test.txt').pipe(fs.createWriteStream('test2.txt'))
const stream = require('stream');
const s = new stream.Readable;
console.log(s.isPaused());
s.pause();
console.log(s.isPaused());


