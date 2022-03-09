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

const middle = (arr) => {
  let midArr = [];
  if (arr.length !== 0 && arr.length !== 1 && arr.length !== 2) {
    if ((arr.length - 1) % 2 === 0) {
      midArr.push(arr[(arr.length - 1) / 2]);
    } else {
      midArr.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
    }
  }
  return midArr;
};

// TEST CODE
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([]), []);
