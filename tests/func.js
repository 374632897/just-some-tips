const assert = require('assert');
const func = require('../utils/func');
const d = describe;

d('# func', () => {
  d('# doLoop', () => {
    it('Should add 10000 times', () => {
      const obj = { a: 0 };
      func.doLoop(() => {
        obj.a++;
      });
      assert.equal(obj.a, 10000);
    });
    it('Should execute 90 times when the second param specified as 90', () => {
      const obj = { a: 0 };
      func.doLoop(() => {
        obj.a++;
      }, 90);
      assert.equal(obj.a, 90);
    });
  });
  d('# tip', () => {
    it.skip('Should console the time of function execute');
  });
});
