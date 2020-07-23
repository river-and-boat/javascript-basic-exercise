/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) {
    throw new Error('Flatten undefined or null array');
  }

  if (array.length === 0 || array.length === 1) {
    return array;
  }
  // 存储最终结果
  const result = [];
  // 循环计数
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === undefined) {
      result[count] = array[i];
      count += 1;
    } else {
      for (let j = 0; j < array[i].length; j++) {
        result[count] = array[i][j];
        count += 1;
      }
    }
  }
  return result;
}
