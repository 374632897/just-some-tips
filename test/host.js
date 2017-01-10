var tmp = 10;
function bar () {
  console.log(typeof tmp)
  tmp = 90;
  return;
  function tmp () {}
}
bar();
console.log(tmp)
