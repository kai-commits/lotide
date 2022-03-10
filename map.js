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

const map = (array, callback) => {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(numbers, number => number * 2);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, ['GROUND','CONTROL','TO','MAJOR','TOM']);
assertArraysEqual(results3, [2,4,6,8]);
