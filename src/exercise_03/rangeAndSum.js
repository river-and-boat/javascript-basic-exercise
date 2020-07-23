/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(start) || isNaN(end)) {
    throw new Error('Please input a number');
  }

  const resultArray = [];

  if (end >= 0) {
    if (end <= start) {
      return resultArray;
    }
    for (let i = 0; start < end; i++, start++) {
      resultArray[i] = start;
    }
  } else {
    if (end >= start) {
      return resultArray;
    }
    for (let i = 0; start > end; i++, start--) {
      resultArray[i] = start;
    }
  }
  return resultArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let s = 0;
  numbers.forEach((v) => {
    s += v;
  });
  return s;
}
