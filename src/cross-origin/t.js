const fs = require('fs')
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      resolve(data.toString())
    });
  });
}
async function getServer () {
  const result = await readFile('./server.js');
  console.log(result)
}

getServer();
