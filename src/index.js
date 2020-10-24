module.exports = function reverse (n) {
  let newStr = n.toString();
  let newArr = [];
  for (let i = newStr.length - 1; i > 0; i--) {
    newArr.push(newStr[i]);
  }
  newStr = newArr.toString();
  return parseInt(newStr);
}
