const http = require('http');
const config = require('./config');
http.get('http://weibo.com', (socket) => {
  socket.on('data', (data) => {
    console.log(data)
  })
  // console.log(err,data)
})
// const b = http.request(config, (err, data) => {
//   console.log(err, data)
// });
// console.log(b)
// b.on('data', (data) => {
//   console.log(data);
// })
// b.on('end', () => {
//   console.log('end');
// }).on('error', (err) => {
//   console.log(err)
// })
