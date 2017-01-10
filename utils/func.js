exports.tip = tip;
exports.doLoop = doLoop;

function tip (fn = function () {}, tips = fn.name) {
  console.time(tips);
  console.log(fn());
  console.timeEnd(tips);
}

const MAX = 10000;
function doLoop (fn = function () {}, max = MAX) {
  for (let i = 0; i < max; i++) {
    fn();
  }
}
