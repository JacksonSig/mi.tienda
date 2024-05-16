function lengthOf(texto) {
  if (!texto) {
    return "invalid input";
  }
  return texto.length;
}

console.warn("Parte 1")
console.log(lengthOf("Hola mundo"))
console.log(lengthOf(""))
console.log(lengthOf("Hola mundo, como estas"))
