exports.range = range;
exports.random = random;

function range (start = 0, end = 10) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  return [...new Array(end - start)].map((_, index) => index);
}

function random (start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  return Math.round(Math.random() * (end - start) + start);
}
