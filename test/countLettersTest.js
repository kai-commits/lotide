const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns correct amount of letters', () => {
    const test = countLetters("Lighthouse in the House");
    assert.strictEqual(test['l'], 1);
    assert.strictEqual(test['h'], 4);
  });
  it('returns undefined when letter is not in string', () => {
    const test = countLetters("Lighthouse in the House");
    assert.isUndefined(test['b'], 'undefined');
  });
});
