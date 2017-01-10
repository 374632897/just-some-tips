exports.tip = tip;
function tip (fn = function () {}, tips = fn.name) {
  console.time(tips);
  console.log(fn());
  console.timeEnd(tips);
}
