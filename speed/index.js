
calcularVelocidad(10, 2);
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);
console.log("==============================")

function calcularVelocidad(distancia, tiempo) {
  // let distancia = 10;
  // let tiempo = 2;
  let velocidad = distancia / tiempo;
  console.log("La velocidad del movil es: " + velocidad);
}

const calcularVelocidad2 = (distancia, tiempo) => {
  let velocidad = distancia / tiempo;
  //console.log("La velocidad del movil es: " + velocidad);
  return velocidad;
}

let velocidad1 = calcularVelocidad2(75, 3);
let velocidad2 = calcularVelocidad2(100, 2);
let velocidad3 = calcularVelocidad2(300, 3);

console.log("La velocidad del movil 1 es: " + velocidad1);
console.log("La velocidad del movil 2 es: " + velocidad2);
console.log("La velocidad del movil 3 es: " + velocidad3);
