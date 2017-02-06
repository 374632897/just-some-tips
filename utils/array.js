exports.range = range;
exports.random = random;
exports.getDenseArray = getDenseArray;

function getDenseArray (length = 10) {
  return [...new Array(length)];
}
function getSparseArray (length = 10) {
  return new Array(length);
}

function range (start = 0, end = 10, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  if (step === 0) {
    return getDenseArray(end - start).map(item => start);
  }
  const s = Math.abs(step - start);
  return getDenseArray(end - start).map((_, index) => index).filter(item => item % s === 0);
}

function random (start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  return Math.round(Math.random() * (end - start) + start);
}
