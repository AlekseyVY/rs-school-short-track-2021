/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const tmp = String(num);
  const arr = [];
  let construct = '';
  for (let i = 0; i < tmp.length; i++) {
    construct = tmp.substring(0, i) + tmp.substring(i + 1, tmp.length);
    arr.push(construct);
  }
  return Number(arr.sort((a, b) => b - a)[0]);
}

module.exports = deleteDigit;
