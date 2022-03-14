const without = (source, itemsToRemove) => {
  const filteredArray = source.filter(element => !itemsToRemove.includes(element));
  return filteredArray;
};

module.exports = without;