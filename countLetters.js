const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const resultObj = {};
  const convertedString = string.replace(/\s+/g, '').toLowerCase();
  
  for (let letter of convertedString) {
    if (resultObj[letter]) {
      resultObj[letter] += 1;
    } else {
      resultObj[letter] = 1;
    }
  }
  return resultObj;
};

const test = countLetters("Lighthouse in the House");

assertEqual(test["l"], 1);
assertEqual(test["h"], 4);
assertEqual(test["b"], undefined);