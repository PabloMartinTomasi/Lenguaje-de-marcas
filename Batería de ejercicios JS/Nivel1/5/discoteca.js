function discoteca(){
    let usuario = prompt("Ingresa tu nombre");
    let edad = parseInt(prompt("Ingresa tu edad"));

    if(usuario === "Carlos" || usuario === "Lucía"){
        alert("Entrada gratuita");
    }
    if(edad < 18){
        alert("Entrada denegada");
    }
    if(edad === 18 || edad === 25){
        alert("Tu entrada cuesta 5€");
    }
    if(edad > 25){
        alert("Tu entrada va a costar 10€");
    }
}
discoteca();