const http = require('http');
const Auth =
http.createServer((req, res) => {
  const headers = req.headers, auth = headers['authorization'];
  console.log(headers);
  if (!auth) {
    res.writeHeader(401, 'Login required', {
      'WWW-authenticate': 'Basic realm="Plumbing and Fixtures"'
    });
    res.end();
    return;
  };
  res.end('hello world');
  // if ()
}).listen(1999);
