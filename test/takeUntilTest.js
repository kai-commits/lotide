const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns correct array of numbers', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data, x => x < 0);
    assert.deepEqual(results, [1,2,5,7,2]);
  });
  it('returns correct array of strings', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(data, x => x === ',');
    assert.deepEqual(results, ["I've", "been", "to", "Hollywood"]);
  });
});
