const sumArray = function (array) {
  let total = 0;
  for (let num of array) {
    total += Number(num);
  }
  return total;
};

let input;
const numbers = [];
do {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.length > 0) {
  console.log(`Общая сумма чисел равна ${sumArray(numbers)}`);
}
