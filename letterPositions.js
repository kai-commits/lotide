const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter].push(i);
      } else {
        result[letter] = [i];
      }
    }
  }
  console.log(result);
  return result;
};

assertArraysEqual(letterPositions("Hello There").h, [0, 7]);
assertArraysEqual(letterPositions("Hello There").e, [1, 8, 10]);
assertArraysEqual(letterPositions("Hello There")['r'], [9]);