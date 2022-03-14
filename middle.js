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

module.exports = middle;
