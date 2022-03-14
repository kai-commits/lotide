const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('returns correct key', () => {
    const result1 = findKey(testObject, x => x.stars === 2);
    const result2 = findKey(testObject, x => x.stars === 3);
    assert.equal(result1, 'noma');
    assert.equal(result2, 'Akaleri');
  });
  it('returns undefined when key doesn\'t exist', () => {
    const result = findKey(testObject, x => x.stars === 4);
    assert.isUndefined(result, 'undefined');
  });
});
