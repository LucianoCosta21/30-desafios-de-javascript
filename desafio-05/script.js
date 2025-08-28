function ultimaLetra(entrada) {
  const separadaLetras = entrada.toLowerCase().split('');
  const ordenarLetras = separadaLetras.sort();
  return ordenarLetras[ordenarLetras.length - 1];
}

console.log(ultimaLetra('Lorem ipsum dolore sec avanti'));
console.log(ultimaLetra('Hello'));
console.log(ultimaLetra('May the force be with you'));
console.log(ultimaLetra('Its over nine thousand'));
