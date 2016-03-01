(function () {
  var oDiv = document.getElementById('div');
  addEvent(oDiv, 'click', function () {
    console.log(this);
    console.log('div');
  });
  addEvent(oDiv, 'click', function () {
    console.log('div2');
  });
  addEvent(document.body, 'click', function () {
    console.log('body');
  });
  addEvent(document.documentElement, 'click', function () {
    console.log('html');
  });
  addEvent(document, 'click', function () {
    console.log('document');
  });
  addEvent(window, 'click', function () {
    console.log('window'); // window无反应  // 尼玛，  chrome的问题
  });

  oDiv.onclick = null; // 这个不能解除不是使用DOM0事件绑定的方式来绑定的事件

})();
 
 // var stackForIe = [];
 function addEvent (ele, type, handler) {
  if (ele.addEventListener) {
    ele.addEventListener(type, handler, false); // chrome下捕获阶段处理事件不行？？ 而且也不能冒泡到window // 原来只是chrome抽了
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + type, function () { // 关于IE下事件执行顺序的问题
      // var stackForIe = [];
      // return (function () {
        // stackForIe.push(handler);
      // })();
      // stackForIe.push(handler);
      // stackForIe.reverse.forEach(function (item) {
      //   item.call(ele);
      // })
      // handler.call(ele);
    });
  } else {
    ele['on' + type] = handler;
  }
}