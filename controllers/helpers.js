const objToArray = (obj) => {
  return Object.keys(obj).map((data) => obj[data]);
};

module.exports = {
  objToArray,
};
