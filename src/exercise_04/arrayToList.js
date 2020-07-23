/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable for-direction */
export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  // 获取集合
  const myList = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const item = {};
    if ((i + 1) !== array.length) {
      item.value = array[i];
      item.next = myList[i + 1];
    } else {
      item.value = array[i];
      item.next = null;
    }
    myList[i] = item;
  }

  return { value: myList[0].value, next: myList[0].next };
}
