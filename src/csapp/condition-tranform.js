const a = [...new Array(1000)].map(item => Math.round(Math.random() * 1000 + 1));
const b = [...new Array(1000)].map(item => Math.round(Math.random() * 1000 + 1));
// 条件传送 、 条件转移
function tip (fn = function () {}) {
  console.time(fn.name);
  console.log(fn());
  console.timeEnd(fn.name);
}

function t1 () {
  const _a = a.concat(), _b = b.concat();
  for (let i = 0; i < _a.length; i++) {
    if (_a[i] > _b[i]) {
      const t = _a[i];
      _a[i] = _b[i];
      _b[i] = t;
    }
  }
}
function t2 () {
  const _a = a.concat(), _b = b.concat();
  for (let i = 0; i < _a.length; i++) {
    const t1  = a[i], t2 = b[i];
    a[i] = t1 > t2 ? t1 : t2;
    b[i] = t1 > t2 ? t2 : t1;
  }
}
tip(t1)
tip(t2)
