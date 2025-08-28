function quadradoConcatenado(entrada) {
  const numeroSeprado = entrada.toString().split('');
  const numeroAoQuadrado = numeroSeprado
    .map((numero) => Number(numero) ** 2)
    .join('');
  return numeroAoQuadrado;
}

console.log(quadradoConcatenado(3514));
console.log(quadradoConcatenado(94571));
console.log(quadradoConcatenado(24));
console.log(quadradoConcatenado(745821698));
