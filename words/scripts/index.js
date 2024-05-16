const frase = prompt("Ingrese una frase o palabra:")

const cantidad = frase.length;

const mensajeCantidad = "La longitus es: " + cantidad;

console.log(mensajeCantidad)

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const minMay = "Minusculas: " + fraseMinusculas + ". Frase Mayuscula: " + fraseMayusculas;

console.log(minMay);
