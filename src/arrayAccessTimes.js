var arr;
!function () {
  arr = [1,2,3,4];
  arr._key = 123;
  var times = 0;
  Object.defineProperty(arr, 'key', {
    get () {
      console.log('get');
      times++;
      return this._key;
    },
    set (value) {
      times++;
      console.log('set');
      this._key = value;
    }
  })
  Object.defineProperty(arr, 'times', {
    value () {
      return times;
    }
  })
}();
console.log(arr.key)
console.log(arr.times());
arr.key = 'test';
arr.key = 'blog;'
console.log(arr.times());
// for ()
console.log('for iterator');
for (const key in arr) {
  console.log(key);
}

console.log('Object.keys()')
Object.keys(arr).forEach(item => console.log(item))

