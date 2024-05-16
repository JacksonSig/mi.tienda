console.warn("Parte 1")
const producto1 = {
  nombre: "celular",
  precio: 10000,
  stock: 2
}

producto1.id = "id123"
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1)
console.log("El nombre del producto es: " + producto1.nombre)

console.warn("Parte 2")

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }

  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (this.stock < units) {
      console.log("No hay stock suficiente: actual => " + this.stock + ", intento de venta => " + units)
    } else {
      this.stock = this.stock - units;
    }
  }
}

const prod1 = new Product();
const prod2 = new Product("id123", "computadora", 2500);
const prod3 = new Product("id124", "laptop", 2000, 5, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], 12);

console.log(prod1);
console.log(prod2);
console.log(prod3);

console.log(prod2.title)
console.log(prod3.onsale)

console.warn("Parte 3")
const prod4 = new Product("id125", "celular", 1000, 10, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], 1, "samsung");
console.log(prod4)

prod4._supplier = "apple"
console.log(prod4)

console.warn("Parte 4")
const prod5 = new Product("id126", "microfono", 500, 20, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp"], 1, "hyperx");

prod5.sellUnits(10)
prod5.sellUnits(5)
prod5.sellUnits(2)
prod5.sellUnits(5)
console.log(prod5)
