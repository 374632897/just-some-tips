exports.tip = tip;
exports.doLoop = doLoop;
exports.doLoopWithCondition = doLoopWithCondition;
exports.isObjectEqual = isObjectEqual;

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
function doLoopWithCondition (fn = function () {}, max = MAX) {
  for (let i = 0; i < max; i++) {
    if (fn() === false) break;
  }
}
function isObjectEqual (source = {}, dist = {}) {
  if (source === dist) return true;
  try {
    return JSON.stringify(source) === JSON.stringify(dist);
  } catch (e) {
    return false;
  }
}
