function Calculo(){
    let opcion = parseInt(prompt("Seleciona una opcion del menu | 1-Sumar | 2-Restar | 3-Multiplicar: "));
    console.log("Has escojido la opcion " + opcion);

    let n1 = parseInt(prompt("Ingresa un número: "));
    let n2 = parseInt(prompt("Ingresa un número: "));

    switch(opcion){
        case 1:
            let suma = n1 + n2;
            console.log("La suma de " + n1 + " y de " + n2 + " es " + suma);
            break;
        case 2:
            let resta = n1 - n2;
            console.log("La resta de " + n1 + " y de " + n2 + " es " + resta);
            break;
        case 3:
            let multiplicar = n1 * n2;
            console.log("La multiplicacion de " + n1 + " y de " + n2 + " es " + multiplicar);
            break;
    }
}
Calculo();