const cuentas = [
    {
        numero: "1234",
        pin: "1111",
        saldo: 500,
        intentos: 0,
        bloqueada: false,
        historial: []
    },
    {
        numero: "5678",
        pin: "2222",
        saldo: 1000,
        intentos: 0,
        bloqueada: false,
        historial: []
    }
];

function cajero() {
    const numeroCuenta = prompt("Ingrese el número de cuenta:");
    const cuenta = cuentas.find(c => c.numero === numeroCuenta);

    if (!cuenta) {
        alert("Cuenta no encontrada.");
        return;
    }

    if (cuenta.bloqueada) {
        alert("Cuenta bloqueada por intentos fallidos.");
        return;
    }

    for (let i = 0; i < 3; i++) {
        const pin = prompt("Ingrese su PIN:");
        if (pin === cuenta.pin) {
            cuenta.intentos = 0;
            menuOperaciones(cuenta);
            return;
        } else {
            cuenta.intentos++;
            alert("PIN incorrecto.");
        }

        if (cuenta.intentos >= 3) {
            cuenta.bloqueada = true;
            alert("Cuenta bloqueada por exceso de intentos.");
            return;
        }
    }
}

function menuOperaciones(cuenta) {
    const opcion = parseInt(prompt("Seleccione una opción:\n1. Consultar saldo\n2. Ingresar dinero\n3. Retirar dinero\n4. Ver historial\n5. Salir"));

    switch (opcion) {
        case "1":
            alert("Saldo actual: $" + cuenta.saldo);
            cuenta.historial.push("Consulta de saldo: $" + cuenta.saldo);
            break;

        case "2":
            const ingreso = parseFloat(prompt("¿Cuánto desea ingresar?"));
            if (!isNaN(ingreso) && ingreso > 0) {
                cuenta.saldo += ingreso;
                cuenta.historial.push("Ingreso: $" + ingreso);
                alert("Ingreso exitoso. Nuevo saldo: $" + cuenta.saldo);
            } else {
                alert("Monto no válido.");
            }
            break;

        case "3":
            const retiro = parseFloat(prompt("¿Cuánto desea retirar?"));
            if (!isNaN(retiro) && retiro > 0) {
                if (retiro <= cuenta.saldo) {
                    cuenta.saldo -= retiro;
                    cuenta.historial.push("Retiro: $" + retiro);
                    alert("Retiro exitoso. Nuevo saldo: $" + cuenta.saldo);
                } else {
                    alert("Fondos insuficientes.");
                }
            } else {
                alert("Monto no válido.");
            }
            break;

        case "4":
            if (cuenta.historial.length === 0) {
                alert("No hay operaciones registradas.");
            } else {
                alert("Historial de operaciones:\n" + cuenta.historial.join("\n"));
            }
            break;

        case "5":
            alert("Gracias por usar el cajero.");
            break;

        default:
            alert("Opción no válida.");
            break;
    }
}

cajero();
