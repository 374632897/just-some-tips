function t1 (a, b) {
  a += b;
  a += b;
  return a;
}
function t2 (a, b) {
  a += 2 * b;
  return a;
}
console.log(t1(2, 3), t2(2, 3));
console.log(t1(2, 2), t2(2, 2))
