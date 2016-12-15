const https = require('https');

// const source = ``

function request () {
  https.get('https://www.rishiqing.com/app', (socket) => {
    // socket.setEncoding('utf-8');
    let buf = new Buffer(1);
    socket.on('data', (chunk) => {
      buf += chunk;
      // console.log(chunk)
    }).on('end', () => {
      // console.log(buf.toString());
      resolveResource(buf.toString());
    }).on('error', () => {
      console.log('fetch Error');
    });
  });
}
// resolveResource(`<script type="text/javascript" src="https://res-front-cdn.timetask.cn/release/jquery_plugin.d4faff0fcb.js"></script>`);

function resolveResource(str) {
  const ary = [];
  const reg = /(https:\/\/res-front-cdn\.timetask\.cn\/[\s\S]*?)(js|css)/g;
  console.log(str.match(reg))
}
request();

