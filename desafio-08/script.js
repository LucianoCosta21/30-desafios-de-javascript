function formatarNomeBibliografico(entrada) {
  const iniciais =
    entrada
      .toUpperCase()
      .split(' ')
      .slice(0, -1)
      .map((i) => i[0])
      .join('.') + '.';
  const ultimoNome = entrada.toUpperCase().split(' ').slice(-1);
  const nomeBibliografico = ultimoNome.concat(iniciais).join(', ');
  return nomeBibliografico;
}
console.log(formatarNomeBibliografico('Isaac Larrubia Ferreira Pontes'));
console.log(formatarNomeBibliografico('Jhon Ronald Reul Tolkien'));
console.log(formatarNomeBibliografico('christopher james paolini'));
console.log(formatarNomeBibliografico('Susanne Marie Collins'));
