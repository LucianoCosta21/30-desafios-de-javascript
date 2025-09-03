function arrayOrdenado(entrada) {
  const arr = entrada.flat().sort((a, b) => a - b);
  return arr;
}

console.log(
  arrayOrdenado([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ]),
);

console.log(
  arrayOrdenado([
    [1, 3],
    [4, 8],
    [7, 5],
    [2, 6],
  ]),
);

console.log(arrayOrdenado([[], [], [], []]));

console.log(
  arrayOrdenado([
    [100, 50],
    [60, 100],
    [20, 100, 70],
    [10, 40, 80, 90],
  ]),
);
