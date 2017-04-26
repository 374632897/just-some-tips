let counter = 0;
self.addEventListener('message', (e) => {
  function post () {
    setInterval(() => {
      self.postMessage(++counter)
    }, 1000);
  }
  post();
})
