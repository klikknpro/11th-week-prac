// uzleti logika kiszervezve

console.log("Lof@sz!");

const addForDummies = (num1, num2) => {
  const number1 = Math.floor(num1);
  const number2 = Math.floor(num2);
  const addNums = number1 + number2;
  let result = addNums;
  if (addNums < 0) result = 0;
  if (addNums > 10) result = "sok";

  return result;
};

module.exports = addForDummies;
// ez menne az App.js-be
// kulon comp lesz
// fuggetlen logika
