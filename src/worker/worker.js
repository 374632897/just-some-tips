var worker = new Worker('test.js'); // 报错。。 chrome不允许worker使用本地文件
worker.addEventListener('message', function (e) {
  console.log('worker received some msgs');
  console.log(e);
}, false);

worker.postMessage('');