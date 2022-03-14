const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns correct amount of elements', () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result).length, 2);
  });
  it('returns correct first element', () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result)[0], 'Lighthouse');
  });
  it('returns correct second element', () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(result)[1], 'Labs');
  });
  it('doesn\'t alter original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});
