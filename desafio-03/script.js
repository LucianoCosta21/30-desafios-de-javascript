const array1 = [0, 9, 6, 8, 9, 1, 5, 7];
const array2 = ['Oh', 'Hi', 'Mark'];
const array3 = [false, true, true, true];
const array4 = ["It's", 'not', true, 0];

function reverse(entrada) {
  const novoArray = [];
  for (let i = entrada.length; i > 0; --i) {
    novoArray.push(entrada[i - 1]);
  }
  return novoArray;
}

console.log(reverse(array1));
console.log(reverse(array2));
console.log(reverse(array3));
console.log(reverse(array4));
