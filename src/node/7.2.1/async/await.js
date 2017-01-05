const fs = require('fs');
const read = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
// async 里面需要返回await
// await 需要用于修饰一个返回Promise的函数, 只能在使用async修饰的函数内使用
const test = async function test () {
  // return await read(__filename + '1');
  return await read(__filename);
  // const text = await read(__filename);
  // console.log(text.toString());
}
test().then(a => console.log(a), err => console.error(err));
