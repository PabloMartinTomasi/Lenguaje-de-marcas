let saldoInicial = 1000;

function cajero(){
    do{
        let opcion = parseInt(prompt("Tienes un saldo inicial de " + saldoInicial + "€\n1- Ingresar saldo \n 2- Retirar saldo" 
            + "\n3- Ver saldo actual \n4- Salir"));

        switch(opcion){
            case 1:
                let ingreso = parseFloat(prompt("Ingresa lo que quieras añadir a tu saldo"));
                if(ingreso <= 0){
                    alert("La cantidad de ingreso debe de ser superior a 0");
                }else{
                    saldoInicial += ingreso;
                    alert("Has ingresado un total de " + ingreso + "€"
                        + "\n Ahora tu saldo es de " + saldoInicial + "€");
                }
                break;
            case 2:
                let retirar = parseFloat(prompt("Ingresa deseas retirar"));
                if(retirar > saldoInicial){
                    alert("La cantidad de retiro no debe de superar al saldo inicial. Retirar una suma menor");
                }else{
                    saldoInicial -= retirar;
                    alert("Has retirado un total de " + retirar + "€"
                        + "\n Ahora tu saldo es de " + saldoInicial + "€");
                }
                break;
            case 3:
                alert("Tu saldo actual es de " + saldoInicial + "€");
                break;
            case 4:
                console.log("Saliendo del cajero");
                break;
            default:
                console.log("Seleciona una opcion del menu");
                break;
        }
    } while(opcion !=4);
}
cajero();