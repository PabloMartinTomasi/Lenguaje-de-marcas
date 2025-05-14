class Coche {
    constructor(marca, modelo, velocidadActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = velocidadActual;
        this.encendido = false;
    }

    datosCoche() {
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Velocidad actual:", this.velocidadActual + " km/h");
        console.log("Estado:", this.encendido ? "Encendido" : "Apagado");
    }

    encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El coche se ha encendido.");
        } else {
            console.log("El coche ya está encendido.");
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            this.velocidadActual = 0;
            console.log("El coche se ha apagado.");
        } else {
            console.log("El coche ya está apagado.");
        }
    }
}

const miCoche = new Coche("Toyota", "Corolla", 0);
miCoche.datosCoche();

miCoche.encender();
miCoche.datosCoche();

miCoche.apagar();
miCoche.datosCoche();
