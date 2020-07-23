export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  // 判断输入的number是否是非数字
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(number)) {
    throw new Error('Please input a number');
  }

  let unitStr = '';
  // 确定要保留的小数位数
  const decimalBitCount = 2;

  if (option) {
    unitStr = '$ ';
  }

  const convertNumber = number.toFixed(decimalBitCount);
  return (unitStr + convertNumber);
}
