class Product {
  constructor(image, title, description, price, discount, observation) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.observation = observation;
  }
}

const product1 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');
const product2 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');
const product3 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');
const product4 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');
const product5 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');
const product6 = new Product('assets/mock1.jpg', 'Macbook Pro 15\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP');

const products = [product1, product2, product3, product4, product5, product6];
