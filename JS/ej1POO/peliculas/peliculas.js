class Pelicula{
    constructor(titulo, director, anio, genero, plataforma, valoraciones){
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
        this.plataforma = plataforma;
        this.valoraciones = valoraciones;
    }

    mediaValoraciones() {
        let suma = 0;
        for (let valoracion of this.valoraciones) {
            suma += valoracion;
        }
        let valoracionMedia = suma / this.valoraciones.length;
        return valoracionMedia.toFixed(2);
    }

    mostrarDatosPeliculas(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Director: ${this.director}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Plataforma: ${this.plataforma.join(', ')}`);
        console.log(`Valoraciones: ${this.valoraciones.join(', ')}`);
        console.log(`Valoracion media: ${this.mediaValoraciones()}`);
        console.log(`++++++++++++++++++++++++++++++++++++++++++++++`);
    }
}

const peli1 = new Pelicula('El Señor de los Anillos: La Comunidad del Anillo', 'Peter Jackson', 2001, 'Fantasía / Aventura', ['HBO Max', 'Amazon Prime'],[10, 9]);
const peli2 = new Pelicula('Star Wars: Episodio V - El Imperio Contraataca','Irvin Kershner',1980,'Ciencia ficción / Aventura',['Disney+'],[10]);
const peli3 = new Pelicula('Interstellar','Christopher Nolan',2014,'Ciencia ficción / Drama',['Netflix', 'HBO Max'],[9, 9]);

peli1.mostrarDatosPeliculas();
peli2.mostrarDatosPeliculas();
peli3.mostrarDatosPeliculas();