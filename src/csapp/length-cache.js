// 通常情况下， 我们以为在循环中缓存数组长度会减少循环时间
// 然而实际上， 因为数组的长度是作为数组对象的一个属性存在的， 在访问其长度的时候
// 不需要去访问整个数组的每一项（不同于strlen）,所以提升不会太明显。
function f1 (ary) {
  console.time("f1");
  const len = ary.length;
  for (let i = 0; i < len; i++) {
    console
  }
  console.timeEnd("f1");
}
function f2 (ary) {
  console.time("f2");
  for (let i = 0; i < ary.length; i++) {
    console
  }
  console.timeEnd("f2");
}
const ary = [...new Array(1000000)];
f1(ary);
f2(ary);
