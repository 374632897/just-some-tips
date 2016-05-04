const http = require('http');
const WebSocketServer = require('ws').Server, wss = new WebSocketServer({ port: 1234 });
wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    console.log('received message ', msg);
    ws.send(msg);
  });
  ws.send('something');
});
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-type' : 'text/html;charset=utf8'});
//   res.end('hello world 测试');
// }).listen(1234);

// console.log('the server runing at 1234');