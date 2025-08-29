function inverterPalavras(entrada) {
  const palavrasInvertidas = entrada
    .toLowerCase()
    .split(' ')
    .map((i) => i.split('').reverse().join(''));
  return palavrasInvertidas;
}

console.log(inverterPalavras('Lorem ipsum dolore sec avanti'));
console.log(inverterPalavras('This is an apple'));
console.log(inverterPalavras('May the force be with you'));
console.log(inverterPalavras('It s over nine thousand'));
