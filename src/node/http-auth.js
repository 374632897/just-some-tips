const http = require('http');
const Auth =
http.createServer((req, res) => {
  const headers = req.headers, auth = headers['authorization'];
  console.log(headers);
  if (!auth) {
    res.writeHeader(401, 'Login required', {
      // 'WWW-authenticate': 'Basic realm="Plumbing and Fixtures"'
      'WWW-authenticate': 'Basic realm="Family"'
    });
    res.end();
    return;
  } else {
    console.log('auth: ', decodeBase64(auth.slice(6))); // 这里开头是Basic ;
  };
  res.end('hello world');
  // if ()
}).listen(1999);
console.log('Server runing at 1999');

function decodeBase64 (code) {
  return new Buffer(code, 'base64').toString('utf-8');
}
