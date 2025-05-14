function dni(){
    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

    let numeros = parseInt(prompt("Ingresa los numeros del DNI, deben de ser 8"));

    if (!/^\d{8}$/.test(numeros)) {
        alert("Error: Debes ingresar un número de 8 cifras.");
        return;
    }

    const indice = parseInt(numeros) % 23;
    const letra = letrasDNI[indice];

    alert("Tu DNI completo es: " + numeros + letra);
}
dni();