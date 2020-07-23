/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((p) => {
    if (!(p instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });

  let count = 0;
  const max = promises.length;
  // 记录失败任务数
  let countFail = 0;
  // 存储结果
  const result = new Array(max);

  return new Promise((resolve, reject) => {
    for (let i = 0; i < max; i++) {
      Promise.resolve(promises[i]).then(
        (res) => {
          // 暂时存储每个任务
          result[i] = res;
          if (++count === max) {
            // 如果所有任务都成功完成了，一起递交给下一个then
            if (countFail === 0) {
              resolve(result);
            } else {
              // 如果其中存在一个失败的任务，则递交给下一个的err
              // 但是正确的任务依然会正常完成
              reject(result);
            }
          }
        },
        (err) => {
          // 同上
          result[i] = err;
          countFail += 1;
          if (++count === max) {
            resolve(result);
          }
        }
      );
    }
  });
}
