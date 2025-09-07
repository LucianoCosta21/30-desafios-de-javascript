function verificarLetrasIguais(entrada) {
  const letras = entrada
    .toLowerCase()
    .split('')
    .filter((i) => i !== ' ');

  const frequencias = letras.map(
    (letra) => letras.filter((i) => i === letra).length,
  );
  const todasIguais = frequencias.every((qtd) => qtd === frequencias[0]);

  return todasIguais;
}
console.log(verificarLetrasIguais('This is Thee'));
console.log(verificarLetrasIguais('ssd'));
console.log(verificarLetrasIguais('Lorem ipsum'));
console.log(verificarLetrasIguais('QQwweerrttyy'));
