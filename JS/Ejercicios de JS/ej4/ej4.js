function TotalViaje(){
    let alojamiento = parseInt(prompt("Pon el gato por el alojamiento: "));
    let alimentacion = parseInt(prompt("Pon el gasto por la alimentacion: "));
    let entrenimiento = parseInt(prompt("Pon el gasto por el entretenimiento: "));

    let sum = alojamiento + alimentacion + entrenimiento;
    console.log("En este viaje has gastado un total de " + sum + "€");
}
TotalViaje();