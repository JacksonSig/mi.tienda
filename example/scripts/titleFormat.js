function titleFormat(texto) {
  if (!texto) {
    return "invalid input";
  }
  let primeraLetra = texto.charAt(0);
  let restoTitulo = texto.slice(1);

  primeraLetra = primeraLetra.toUpperCase();
  restoTitulo = restoTitulo.toLowerCase();

  const nuevoTexto = primeraLetra + restoTitulo;

  return nuevoTexto;
}

console.warn("Parte 2")
console.log(titleFormat("hello world"))
console.log(titleFormat("HELLO world"))
console.log(titleFormat("HellO WOrLd"))
