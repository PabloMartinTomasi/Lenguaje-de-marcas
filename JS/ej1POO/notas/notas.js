class Alumno{
    constructor(nombre, edad, curso, email, asignaturas, notas){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.email = email;
        this.asignaturas = asignaturas;
        this.notas = notas;
    }

    calcularMedia() {
        let suma = 0;
        for (let nota of this.notas) {
            suma += nota;
        }
        let media = suma / this.notas.length;
        return media.toFixed(2);
    }

    mostrarDatosAlumnos(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Email: ${this.email}`);
        console.log(`Asignaturas: ${this.asignaturas.join(', ')}`);
        console.log(`Notas: ${this.notas.join(', ')}`);
        console.log(`Media: ${this.calcularMedia()}`);
        console.log(`++++++++++++++++++++++++++++++++++++++++++++++`);
    }
}

const alumno1 = new Alumno('Pedro', 16, 'ESO', 'pedro@ejemplo.com', ['Matématicas', 'Francés', 'Lengua', 'Historia'], [7, 9, 4, 8.5]);
const alumno2 = new Alumno('Fernando', 15, 'ESO', 'fernando@ejemplo.com', ['Matématicas', 'Francés', 'Lengua', 'Historia'], [6, 4, 9, 10]);
const alumno3 = new Alumno('Luis', 15, 'ESO', 'luis@ejemplo.com', ['Matématicas', 'Francés', 'Lengua', 'Historia'], [10, 7, 9, 7.5]);

alumno1.mostrarDatosAlumnos();
alumno2.mostrarDatosAlumnos();
alumno3.mostrarDatosAlumnos();