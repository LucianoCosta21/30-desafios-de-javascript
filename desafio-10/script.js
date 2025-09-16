function calcularFatorial(entrada) {
  const numeros = Array.from({ length: entrada }, (_, i) =>
    BigInt(++i),
  ).reverse();
  if (numeros.length === 0) {
    return '1n';
  }
  const fatorial = numeros.reduce((acc, valor) => acc * valor);
  return fatorial + 'n';
}
//console.log(calcularFatorial(5));
//console.log(calcularFatorial(0));
//console.log(calcularFatorial(32));
//console.log(calcularFatorial(9));

function recursividade(entrada) {
  if (entrada === 0) {
    return '1n';
  } else {
    const resultado =
      BigInt(entrada) * BigInt(recursividade(entrada - 1).replace('n', ''));
    return resultado.toString() + 'n';
  }
}

console.log(recursividade(5));
console.log(recursividade(0));
console.log(recursividade(32));
console.log(recursividade(9));
