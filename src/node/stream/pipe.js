const fs = require('fs');
// const writer = fs.createWriteStream('w.txt');
// const reader = fs.createReadStream('test.txt');
// reader.pipe(writer, {end: false});// 使用这种方法的话能够保证在pipe完了之后，writer没有被关闭
// // reader.pipe(writer);
// reader.on('end', () => {
//   console.log('end');
//   writer.end('hello');
// });
// writer.on('end', () => {
//   console.log('writer end');
// });
const buf = Buffer.from('Test');
console.log(buf.toString())
