const http = require('http');

http.createServer((req, res) => {
  res.end(JSON.stringify(req.headers));
}).listen(3090);
