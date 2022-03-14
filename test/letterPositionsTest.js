const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns correct indices', () => {
    const result = letterPositions("Hello There");
    assert.deepEqual(result.h, [0, 7]);
    assert.deepEqual(result.e, [1, 8, 10]);
    assert.deepEqual(result['r'], [9]);
  });
});
