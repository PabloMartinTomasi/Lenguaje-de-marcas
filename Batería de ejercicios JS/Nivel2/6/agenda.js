class Agenda{
    constructor() {
        this.contactos = [];
    }

    agregarContacto(nombre, tlf, email){
        const contacto = {nombre, tlf, email};
        this.contactos.push(contacto);
        console.log("Se a añadido correctamente el nuevo contacto");
    }

    buscarContacto(nombre) {
        const resultados = this.contactos.filter(contacto => 
            contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        if (resultados.length > 0) {
            console.log("Contacto encontrado con ese nombre:");
            resultados.forEach(c => console.log(c));
        } else {
            console.log("No se a podido encontrar un contacto con ese nombre. Intentalo con otro nombre");
        }
    }

    eliminarContacto(nombre) {
        const index = this.contactos.findIndex(contacto => 
            contacto.nombre.toLowerCase() === nombre.toLowerCase()
        );

        if (index !== -1) {
            const eliminado = this.contactos.splice(index, 1)[0];
            console.log(`El contacto con el nombre: ${eliminado.nombre}\nHa sido eliminado con exito`);
        } else {
            console.log(`El contacto con el nombre: ${eliminado.nombre}\nNo ha sido eliminado, ya que no se ha encontrado`);
        }
    }

    mostrarTodos() {
        if (this.contactos.length === 0) {
            alert("No se han encontrado contactos en la agenda.");
        } else {
            let mensaje = "--- CONTACTOS ---\n";
            this.contactos.forEach(c => {
                mensaje += `Nombre: ${c.nombre}, Teléfono: ${c.tlf}, Email: ${c.email}\n`;
            });
            alert(mensaje);
        }
    }    
}

const agenda = new Agenda();
let opcion;

do{
    opcion = parseInt(prompt("---MENU---\n 1- Añadir un nuevo contacto\n 2- Buscar un contacto\n 3- Eliminar un contacto\n 4- Mostrar todos los contactos\n 5- Salir"));

    switch(opcion){
        case 1:
            const nombre = prompt("Nombre del contacto:");
            const telefono = prompt("Teléfono:");
            const correo = prompt("Correo electrónico:");
            agenda.agregarContacto(nombre, telefono, correo);
            break;

        case 2:
            const nombreBuscar = prompt("Nombre a buscar:");
            agenda.buscarContacto(nombreBuscar);
            break;

        case 3:
            const nombreEliminar = prompt("Nombre del contacto a eliminar:");
            agenda.eliminarContacto(nombreEliminar);
            break;

        case 4:
            agenda.mostrarTodos();
            break;

        case 5:
            alert("---SALIENDO---");
            break;

        default:
            alert("Seleciona una opcion del menu");
    }
}while (opcion !== 5);