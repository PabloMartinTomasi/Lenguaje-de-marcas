class rectangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }

    calcularPerimetro(){
        return 2*(this.base + this.altura);
    }

    esCuadrado() {
        return this.base === this.altura;
    }
}

const rect1 = new rectangulo(10, 5);
const rect2 = new rectangulo(7, 7);
const rect3 = new rectangulo(15, 20);

const mostrarResultados = (rect, numero) => {
  console.log(`Rectángulo ${numero}:`);
  console.log(`Base: ${rect.base}, Altura: ${rect.altura}`);
  console.log(`Área: ${rect.calcularArea()}`);
  console.log(`Perímetro: ${rect.calcularPerimetro()}`);
  console.log(`¿Es un cuadrado?: ${rect.esCuadrado() ? "Sí" : "No"}`);
  console.log('-----------------------------');
};

mostrarResultados(rect1, 1);
mostrarResultados(rect2, 2);
mostrarResultados(rect3, 3);