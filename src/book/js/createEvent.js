oDiv.addEventListener('fuck', function (e) {
  console.log(e);
}, false);

var CustomEvent = document.createEvent('CustomEvent');
CustomEvent.initCustomEvent('fuck', true, false, 'fuck fuck fuck');
oDiv.dispatchEvent(CustomEvent);


