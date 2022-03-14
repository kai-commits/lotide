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

module.exports = countLetters;