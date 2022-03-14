const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('returns correct array from array of words', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    const results2 = map(words, word => word.toUpperCase());
    assert.deepEqual(results1, ['g','c','t','m','t']);
    assert.deepEqual(results2, ['GROUND','CONTROL','TO','MAJOR','TOM']);
  });
  it('returns correct array from array of numbers', () => {
    const numbers = [1,2,3,4];
    const result = map(numbers, number => number * 2);
    assert.deepEqual(result, [2,4,6,8]);
  });
});
