
var time1 = 0, time2 = 0, time3= 0, start, start2, start3;
function test(fn1, fn2, arg) {
  console.time('函数1执行时间');
  fn1.call(null, arg);
  console.timeEnd('函数1执行时间');

  console.time('函数2执行时间');
  fn2.call(null, arg);
  console.timeEnd('函数2执行时间');
}
function test2(fn1, fn2,fn3, arg) {
  start = Date.now();
  fn1.call(null, arg);
  time1 += (Date.now() - start);

  start2 = Date.now();
  fn2.call(null, arg);
  time2 += (Date.now() - start);

}

function circle (times) {
  for (var i = 0; i < times; i++) {
    test2(fn1, fn2, STR);
  }
  console.log('函数1运行' + times + '次所用时间为' + time1);
  console.log('函数2运行' + times + '次所用时间为' + time2);
}



var STR = 'hello world';
var fn1 = function (str) {
  return str.replace(/(\w)(?=\S)/g, '$1 '); // 10000次的时候明显更快
}

var fn2 = function (str) {
  return str.split(' ').join(' ');
}

// test(fn1, fn2, STR);
circle(1000);