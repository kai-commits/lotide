const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('returns correct key from value', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined when value doesn\'t exist', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), 'undefined');
  });
});
