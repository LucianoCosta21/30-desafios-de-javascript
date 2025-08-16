function recursividade(entrada) {
  let nome = 'chunck';
  if (entrada == 1) {
    return nome;
  } else {
    return nome + '-' + recursividade(entrada - 1);
  }
}

console.log(recursividade(4));
console.log(recursividade(1));
console.log(recursividade(8));
console.log(recursividade(2));
