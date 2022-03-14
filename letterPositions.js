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
  return result;
};

module.exports = letterPositions;