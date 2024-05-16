/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const nombre = prompt("¿Cual es tu nombre?")

const mensaje = "Bienvenido " + nombre

console.log(mensaje);
alert(mensaje);

