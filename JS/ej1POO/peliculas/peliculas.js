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

const peli1 = new Pelicula();

peli1.mostrarDatosPeliculas();
peli2.mostrarDatosPeliculas();
peli3.mostrarDatosPeliculas();