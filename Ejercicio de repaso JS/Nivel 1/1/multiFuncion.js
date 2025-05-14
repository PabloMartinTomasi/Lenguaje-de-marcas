function multiFuncion(){
    const opcion = parseInt(prompt("---MENU--- \n1- Temperatura \n2- Longitud \n3- Peso"));

    switch(opcion){
        case 1:
            temperatura();
            break;
        case 2:
            longitud();
            break;
        case 3:
            peso();
            break;
        default:
            alert("Elige una opcion del menu")
    }
}

function temperatura(){
    const opcion = parseInt(prompt("---SUB MENU--- \n1- Pasar de grados Celcius a Fahrenheit \n2- Pasar de Fahrenheit a grados Celcius"));

    switch(opcion){
        case 1:
            const celsius = parseFloat(prompt("Ingresa la temperatura de Celcius"));
            let celciusFahrenheit = (celsius * 9 / 5) + 32;
            alert(celciusFahrenheit);
            break;
        case 2:
            const fahrenheit = parseFloat(prompt("Ingresa la temperatura de Fahrenheit"));
            let fahrenheitCelcius = (fahrenheit - 32) * 5/9;
            alert(fahrenheitCelcius);
            break;
        default:
            alert("Elige una opcion del menu")
    }
}

function longitud(){
    const opcion = parseInt(prompt("---SUB MENU--- \n1- Pasar de Km a Millas \n2- Pasar de Millas a Km"));

    switch(opcion){
        case 1:
            const km = parseFloat(prompt("Ingresa los Km"));
            let kmMillas = km * 0.621371;
            alert(kmMillas); 
            break;
        case 2:
            const millas = parseFloat(prompt("Ingresa las millas"));
            let millasKM = millas * 1.60934;
            alert(millasKM); 
            break;
        default:
            alert("Elige una opcion del menu");
    }
}

function peso(){
    const opcion = parseInt(prompt("---SUB MENU--- \n1- Pasar de kilos a gramos \n2- Pasar de gramos a kilos"));
    switch(opcion){
        case 1:
            const kilos = parseFloat(prompt("Ingresa los kilos"));
            let kilosGramos = kilos * 1000;
            alert(kilosGramos);
            break;
        case 2:
            const gramos = parseFloat(prompt("Ingresa los gramos"));
            let gramosKilos = gramos / 1000;
            alert(gramosKilos);
            break;
        default:
            alert("Elige una opcion del menu");
    }
}

multiFuncion();