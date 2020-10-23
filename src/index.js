module.exports = function reverse (n) {
  let newStr = reverse.toString();
  let newArr = [];
  for (let i = newStr.length - 1; i > 0; i--) {
    newArr.push(newStr[i]);
  }
  newStr = newArr.toString();
  return Number(newStr);
}
