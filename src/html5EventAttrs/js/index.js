document.body.onpagehide = function (e) {
  console.log(e);
  console.log('this page is hidden now!');
}
document.body.onpageshow = function (e) {
  console.log(e);
  console.log('this page is shown now!');
}
console.log('__________________________');