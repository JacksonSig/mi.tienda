class Calculator {
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  sumar() {
    return this.numero1 + this.numero2;
  }
  restar() {
    return this.numero1 - this.numero2;
  }
  multiplicar() {
    return this.numero1 * this.numero2;
  }
  dividir() {
    return this.numero1 / this.numero2;
  }
  elevar(exponente) {
    return Math.pow(this.numero1, exponente);
  }
  raizCuadrada() {
    return Math.sqrt(this.numero1);
  }
  raizCubica() {
    return Math.cbrt(this.numero1);
  }
}

function InicializarCalculadora() {
  const calculator = new Calculator(16, 20);

  console.log("Suma: " + calculator.sumar());
  console.log("Resta: " + calculator.restar());
  console.log("Multiplicacion: " + calculator.multiplicar());
  console.log("Division: " + calculator.dividir());
  console.log("Potencia 2: " + calculator.elevar(2));
  console.log("Potencia 3: " + calculator.elevar(3));
  console.log("Raiz cuadrada: " + calculator.raizCuadrada());
  console.log("Raiz cubica: " + calculator.raizCubica());
}

InicializarCalculadora();