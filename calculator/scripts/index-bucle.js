let cantidadNumeros = Number(prompt("¿Cuantos numeros desea sumar?"));

let sumatoria = 0;

for (let i = 1; i <= cantidadNumeros; i++) {
  let numetoIngresado = Number(prompt("Ingrese un numero a sumar"))
  sumatoria = sumatoria + numetoIngresado;
}

console.log("El resultado de la sumatoria es: " + sumatoria);
