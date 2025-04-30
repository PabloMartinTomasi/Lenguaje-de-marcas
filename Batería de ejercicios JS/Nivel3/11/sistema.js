class Habitacion{
    constructor(numero, tipo){
        this.numero = numero;
        this.tipo = tipo;
        this.ocupado = false;
    }
}

class Reserva {
    constructor(cliente, habitacion, noches) {
        this.cliente = cliente;
        this.habitacion = habitacion;
        this.noches = noches;
    }
}

class Hotel {
    constructor() {
        this.habitaciones = [];
        this.reservas = [];
    }

    agregarHabitacion(numero, tipo) {
        const habitacion = new Habitacion(numero, tipo);
        this.habitaciones.push(habitacion);
    }

    mostrarDisponibles() {
        const disponibles = this.habitaciones.filter(h => !h.ocupada);
        if (disponibles.length === 0) {
            console.log("No hay habitaciones disponibles.");
        } else {
            console.log("Habitaciones disponibles:");
            disponibles.forEach(h =>
                console.log(`Número: ${h.numero}, Tipo: ${h.tipo}`)
            );
        }
    }

    hacerReserva(cliente, tipo, noches) {
        const habitacionDisponible = this.habitaciones.find(
            h => h.tipo === tipo && !h.ocupada
        );

        if (habitacionDisponible) {
            habitacionDisponible.ocupada = true;
            const reserva = new Reserva(cliente, habitacionDisponible, noches);
            this.reservas.push(reserva);
            console.log(`Reserva realizada para ${cliente} en la habitación ${habitacionDisponible.numero} por ${noches} noches.`);
        } else {
            console.log(`No hay habitaciones disponibles del tipo ${tipo}.`);
        }
    }

    liberarHabitacion(numero) {
        const habitacion = this.habitaciones.find(h => h.numero === numero);
        if (habitacion && habitacion.ocupada) {
            habitacion.ocupada = false;
            this.reservas = this.reservas.filter(r => r.habitacion.numero !== numero);
            console.log(`La habitación ${numero} ha sido liberada.`);
        } else {
            console.log(`La habitación ${numero} ya está libre o no existe.`);
        }
    }
}

const miHotel = new Hotel();
miHotel.agregarHabitacion(101, "individual");
miHotel.agregarHabitacion(102, "doble");
miHotel.agregarHabitacion(103, "doble");

miHotel.mostrarDisponibles();
miHotel.hacerReserva("Carlos Pérez", "doble", 3);
miHotel.mostrarDisponibles();
miHotel.liberarHabitacion(102);
miHotel.mostrarDisponibles();