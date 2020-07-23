export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  // 判断输入的string是否为null Or undefied
  if (string === null || string === undefined || string === '') {
    return 0;
  }
  // 判断输入的条件是否存在
  if (prediction === undefined) {
    return string.length;
  }

  let count = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    if (prediction(string[i])) {
      count += 1;
    }
  }
  return count;
}
