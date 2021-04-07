/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let begin = 0;
  let end = array.length - 1;
  let idx;
  while (begin <= end) {
    const pivot = Math.floor((begin + end) / 2);
    if (array[pivot] === value) {
      idx = pivot;
      break;
    } else if (array[pivot] < value) {
      begin = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }
  return idx;
}

module.exports = findIndex;
