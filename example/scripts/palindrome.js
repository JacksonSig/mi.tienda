function palindrome(texto) {
  const elementos = texto.split('');
  const elementosRevez = elementos.reverse();
  const elementosUnidos = elementosRevez.join('')

  const palindromo = texto === elementosUnidos;
  return palindromo;
}

console.warn("Parte 4")
console.log(palindrome('hello'))
console.log(palindrome('hannah'))
console.log(palindrome('anitalavalatina'))

