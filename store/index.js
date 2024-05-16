const comprar = () => {
  let totalAPagar = 0;

  let cantidadProductos = Number(prompt("Cantidad de productos a comprar"));

  for (let i = 0; i < cantidadProductos; i++) {
    let nombreProducto = prompt("Nombre del producto");
    let cantidadComprada = Number(prompt("Cantidad de " + nombreProducto + " que quieres comprar"));
    let precioProducto = Number(prompt("Precio de " + nombreProducto));
    let subTotal = cantidadComprada * precioProducto;
    totalAPagar = totalAPagar + subTotal;
  }

  console.log("El total a pagar por todos los productos es: S/" + totalAPagar);

  return totalAPagar;
}

let total = comprar() + comprar() + comprar();

console.log("El total de todas las compras es: " + total);

