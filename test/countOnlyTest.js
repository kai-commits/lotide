const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('returns correct count', () => {
    assert.strictEqual(result['Jason'], 1);
    assert.strictEqual(result['Fang'], 2);
  });
  it('returns undefined when element doesn\'t exist', () => {
    assert.isUndefined(result['Karima'], 'undefined');
  });
  it('returns undefined when element is false', () => {
    assert.isUndefined(result['Agouhanna'], 'undefined');
  });
});
