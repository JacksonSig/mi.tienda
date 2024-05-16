// let nombre = "Jackson vincenzo";
// let edad = 21;
// let profesion = "Programador";
// let ubicacion = "Lima, Peru";
// let hobby = "Leer";

// const texto =`Hola, me llamo ${nombre}. Tengo ${edad} años y soy ${profesion}. Actualmente vivo en ${ubicacion}. En mi tiempo libre, me gusta ${hobby}.`;
// const textoInsertado = document.getElementById("Texto")
// console.log(textoInsertado);
// textoInsertado.textContent = texto

let isOnline = false
console.log(isOnline);
const prompte = prompt("¿Estas conectado?")
console.log(prompte);
if (prompte.toUpperCase() == "SI" && isOnline == false) {
    isOnline = true
    console.log(isOnline);
}