const fs = require('fs');
const read = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
const test = async function test () {
  // return await read(__filename + '1');
  return await read(__filename);
  // const text = await read(__filename);
  // console.log(text.toString());
}
test().then(a => console.log(a), err => console.error(err));
