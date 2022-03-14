const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns correct array', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    assert.deepEqual(without([1, 2, 2, 3, 1], [1, 2]), [3]);
  });
  it('returns does not alter original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
