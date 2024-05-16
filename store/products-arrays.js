class Product {
  constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
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

console.warn("Parte 1")
const prod1 = new Product("id123", "computadora", 2500, 15, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], true, 'deltron', ['blanco', 'negro'], "Esta es la descripcion del producto");
const prod2 = new Product("id124", "laptop", 2000, 5, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], false, "metro", ['blanco', 'negro'], "Esta es la descripcion del producto");
const prod3 = new Product("id125", "celular", 1000, 10, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], true, "samsung", ['blanco', 'negro'], "Esta es la descripcion del producto");
const prod4 = new Product("id126", "microfono", 500, 20, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], true, "hyperx", ['blanco', 'negro'], "Esta es la descripcion del producto");

const products = [prod1, prod2, prod3, prod4];
//                  0     1      2      3
console.log(products);
console.log(products[1].chano);
console.log(products[products.length - 1].title)

console.warn("Parte 2")
const prod5 = new Product("id127", "camara", 300, 50, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], false, 'cannon', ['blanco', 'negro'], "Esta es la descripcion del producto");
const prod6 = new Product("id128", "tablet", 1500, 25, ["https://i.postimg.cc/Jn2C5W84/galaxy1.webp", "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp"], true, 'samsung', ['blanco', 'negro'], "Esta es la descripcion del producto");

products.unshift(prod5); //agrega un elemento al inicio
products.push(prod6); //agrega un elemento al final

console.log(products);
console.log(products[1]);
console.log(products[products.length - 1].title)

console.warn("Parte 3")
products.shift(); //elimina primer elemento
products.pop(); //elimina ultimo elemento

console.log(products);
console.log(products[1]);
console.log(products[products.length - 1].title)

console.warn("Parte 4")
console.log(products[0].images.length);
console.log(products[products.length - 1].images.length)
