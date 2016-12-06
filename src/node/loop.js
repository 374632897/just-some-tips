/*
* @Author: Jiang Guoxi
* @Date:   2016-07-04 13:06:15
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-07-08 13:08:51
*/
/**
 * 对循环的一些测试
 * 测试方法为计算ARY内数值项的和， 每种方法计算TIME次
 * 以下的比较是针对花费时间而言的：
 * 当循环次数为10000的时候 for ~ while < forEach < reduce
 * 当循环次数为1000的时候  forEach ~ for < while < reduce // 前三者次序不一定， 但是reduce肯定是最后
 * 当循环次数为100的时候   while < reduce ~ for < forEach
 * 结论：
 *   在低循环次数的情况下， while和reduce具有更大的优势，
 *   但是高循环次数下， reduce的性能就会变差，而for循环会逐渐出现优势
 *   至于高低循环次数的界定， 需要更多的测试数据才能确定， 暂时先定为100吧
 */
const TIME = 1000; // 循环执行次数
const ARY = [...Array(1000)].map((item, index) => index); // 测试数组
const METHOD_ARY = []; // 测试方法

const doTest = (time = TIME) => {
  let i = 0, len = METHOD_ARY.length;
  while (i < len) {
    const fn = METHOD_ARY[i++], tip = fn.name;
    console.time(tip);
    if (time === 1) {
      fn();
    } else {
      let j = 0;
      while(j < time) {
        fn();
        j++;
      }
    }
    console.timeEnd(tip);
  }
};

const testForEach = () => {
  let num = 0;
  ARY.forEach(item => num += item);
  // console.log(num);
};

METHOD_ARY.push(testForEach);
// map的性能真是不忍直视  当然， map本身就不适合这里的操作， 这里主要是为了验证
const testMap = () => {
  let num = 0;
  ARY.map(item => num += item);
  // console.log(num);
};

METHOD_ARY.push(testMap);

const testFor = () => {
  let num = 0;
  for (let i = 0, len = ARY.length; i < len; i++) {
    num += ARY[i];
  }
  // console.log(num);
};
METHOD_ARY.push(testFor);

const testReduce = () => {
  let num = ARY.reduce((a, b) => { return a + b }, 0);
  // console.log(num);
};
METHOD_ARY.push(testReduce);

const testWhile = () => {
  let i = 0, len = ARY.length, num = 0;
  while (i < len) {
    num += ARY[i++];
  }
  // console.log(num);
};
METHOD_ARY.push(testWhile);

doTest();
