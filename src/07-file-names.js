/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tmp = 1;
  // eslint-disable-next-line array-callback-return
  names.map((ele, idx) => {
    for (let i = idx + 1; i < names.length; i++) {
      if (ele === names[i]) {
        // eslint-disable-next-line no-param-reassign
        names[i] = `${names[i]}(${tmp})`;
        tmp += 1;
      }
    }
    tmp = 1;
  });
  return names;
}

module.exports = renameFiles;
