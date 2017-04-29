let counter = 0;
self.addEventListener('message', (e) => {
console.info(self);
console.info('has File => ', typeof File)
  function post () {
    setInterval(() => {
      self.postMessage(++counter)
    }, 1000);
  }
  post();
})
