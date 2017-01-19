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
  d('# doLoopWithCondition', () => {
    const doLoopWithCondition = func.doLoopWithCondition;
    it('should be breaked when the calculate value is false', () => {
      let i = 0;
      doLoopWithCondition(() => {
        if (++i === 100) return false;
      }, 100000);
      assert.equal(i, 100);
    });
  });
  d('# tip', () => {
    it.skip('Should console the time of function execute');
  });
  d('# isObjectEqual', () => {
    const isObjectEqual = func.isObjectEqual;
    it('should be equal when two array has same item and order', () => {
      const a = [1,2,3,4,5], b = [1,2,3,4,5];
      assert.equal(isObjectEqual(a, b), true);
    });
    it('should be not equal when two array has same item but different order', () => {
      const a = [1,2,3,4,5], b = [1,2,3,5,4];
      assert.equal(isObjectEqual(a, b), false);
    });
    it('it should be true when the object has same key-value pair', () => {
      const a = {
        name: 'Jason',
        age: 23
      }, b = {
        name: 'Jason',
        age: 23
      };
      assert.equal(isObjectEqual(a, b), true);
    });
    it('it should be false when the object has same key-value pair', () => {
      const a = {
        name: 'Jason',
        age: 23
      }, b = {
        name: 'Jason',
        age: 24
      };
      assert.equal(isObjectEqual(a, b), false);
    });
  });
});
