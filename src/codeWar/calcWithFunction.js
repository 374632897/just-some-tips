function wrapper (a, b) {
  if (!a) return b;
  console.log('b => %s, a => %o', b, a)
  switch (a[0]) {
    case '+':
      return b + (a[1] - 0);
    case '-':
      return b - (a[1] - 0);
    case '*':
      return b * (a[1] - 0);
    default:
      return b / (a[1] - 0);
  }
}
function zero(a) {
  return wrapper(a, 0);
}
function one(a) {
  return wrapper(a, 1);
}
function two(a) {
  return wrapper(a, 2);
}
function three(a) {
  return wrapper(a, 3);
}
function four(a) {
  return wrapper(a, 4);
}
function five(a) {
  return wrapper(a, 5);
}
function six(a) {
  return wrapper(a, 6);
}
function seven(a) {
  return wrapper(a, 7);
}
function eight(a) {
  return wrapper(a, 8);
}
function nine(a) {
  return wrapper(a, 9);
}

function plus(a) { return '+' + a; }
function minus(a) { return '-' + a }
function times(a) { return '*' + a }
function dividedBy(a) { return '/' + a }

