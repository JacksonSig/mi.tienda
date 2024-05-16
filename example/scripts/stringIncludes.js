function stringIncludes(texto1, texto2) {
  const incluye = texto2.includes(texto1)
  return incluye;
}

console.warn("Parte 3")
console.log(stringIncludes("he", "Hello"))
console.log(stringIncludes("he", "hello world"))
