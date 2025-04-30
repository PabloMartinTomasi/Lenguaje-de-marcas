class Conversor {
    pasarKilometrosMillas(km) {
        return km * 0.621371;
    }

    pasarCelciusFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    index() {
        const opcion = parseInt(prompt("---MENU---\n1- Pasar de kilómetros a millas\n2- Pasar de grados Celsius a Fahrenheit"));

        if (opcion === 1) {
            const km = parseFloat(prompt("Ingresa la cantidad de kilómetros que quieras pasar a millas:"));
            if (!isNaN(km)) {
                const millas = this.pasarKilometrosMillas(km);
                alert(`${km} km son un total de ${millas.toFixed(2)} millas.`);
            } else {
                alert("Entrada no válida. Ingresa un número.");
            }
        }
        else if (opcion === 2) {
            const celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
            if (!isNaN(celsius)) {
                const fahrenheit = this.pasarCelciusFahrenheit(celsius);
                alert(`${celsius} °C son un total de ${fahrenheit.toFixed(2)} °F.`);
            } else {
                alert("Entrada no válida. Ingresa un número.");
            }
        } else {
            alert("Opción no válida. Por favor, elige 1 o 2.");
        }
    }
}

const miConversor = new Conversor();
miConversor.index();
