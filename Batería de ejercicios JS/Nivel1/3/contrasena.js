function validarContrasena(){
    let contrasena = prompt("Introduce la nueva contraseña");
    const errores = [];

    if(contrasena.length < 8){
        errores.push("La contraseña debe de tener un minimo de 8 caracteres");
    }
    if(!/[A-Z]/.test(contrasena)){
        errores.push("La contraseña debe de contener como minimo una mayuscula");
    }
    if(!/[a-z]/.test(contrasena)){
        errores.push("La contraseña debe de contener como un minimo de una minuscula");
    }
    if(!/[0-9]/.test(contrasena)){
        errores.push("La contraseña debe de contener como un minimo de un número");
    }
    if(errores.length === 0){
        alert("Contraseña válida.");
    }
    else {
        alert("Contraseña inválida. Faltan los siguientes requisitos:\n- " + errores.join("\n- "));
    }
}
validarContrasena();