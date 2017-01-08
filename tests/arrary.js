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
  })
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
