module.exports = function reverse (n) {
  let newStr = n.toString();
  let newArr = [];
  for (let i = newStr.length - 1; i > -1; i--) {
    newArr.push(newStr[i]);
  }
  let newStrNum = "";
  for (let i = 0; i < newArr.length; i++) {
    newStrNum += newArr[i];
  }
  //return parseInt(newStr);
  return parseInt(newStrNum);
}
