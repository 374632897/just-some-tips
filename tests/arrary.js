const { range, random } = require('../utils/array');
const assert = require('assert');
describe("# Array", () => {
  describe('# range', () => {
    it('Should return 10 of the array.length', () => {
      assert.equal(10, range(0, 10).length);
    });
    it('Should be accurated by 1', () => {
      const ary = range(0, 10);
      let i = 0;
      while (i < 9) {
        assert.equal(ary[i] + 1, ary[++i]);
      }
    });
    it('Should return correct array when only one param specified', () => {
      const ary = range(100);
      assert.equal(0, ary[0]);
      assert.equal(99, ary[99]);
    });
    it('should step by 5 when third param specified', () => {
      const ary = range(0, 10, 3);
      assert.equal(4, ary.length);
      assert.equal(ary[0], 0);
      assert.equal(ary[1], 3);
      assert.equal(ary[2], 6);
      assert.equal(ary[3], 9);
    });
    it('should return an array who\'s every item equals to the start when third param is 0', () => {
      const ary = range(0, 10, 0);
      assert.equal(true, ary.every(item => item === 0));
    });
  });
  describe('# random', () => {
    it('Should between 0 - 10', () => {
      for (let i = 0; i < 10; i++) {
        const item = random(10);
        if (item < 0 || item > 10) {
          throw 'Random function out of bounding';
        }
      }
    });
  })
})
