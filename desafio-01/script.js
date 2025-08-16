function calcular(...rest) {
  let valores = 0;
  let media = 0;

  for (let i = 0; i < rest.length; i++) {
    valores += rest[i];
  }

  media = valores / rest.length;
  return media;
}
console.log('Média:', calcular(10, 9, 6, 8, 9, 1, 5, 7));
console.log('Média:', calcular(2, 5, 7, 1, -2));
console.log('Média:', calcular(10, 10, 10, 10, 9));
console.log('Média:', calcular(25, 75));
