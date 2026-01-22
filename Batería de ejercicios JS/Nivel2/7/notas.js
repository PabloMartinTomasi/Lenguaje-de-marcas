function analizarNotas(estudiantes) {
    if (estudiantes.length === 0) {
        console.log('No hay estudiantes para analizar.');
        return;
    }

    const notas = estudiantes.map(e => e.nota);
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const notaMax = Math.max(...notas);
    const notaMin = Math.min(...notas);
    const aprobados = notas.filter(nota => nota >= 5).length;

    console.log(`Media de la clase: ${media.toFixed(2)}`);
    console.log(`Nota más alta: ${notaMax}`);
    console.log(`Nota más baja: ${notaMin}`);
    console.log(`Número de aprobados: ${aprobados}`);
}

const estudiantes = [
    { nombre: 'Ana', nota: 8 },
    { nombre: 'Luis', nota: 4 },
    { nombre: 'María', nota: 6 },
    { nombre: 'Pedro', nota: 3 },
    { nombre: 'Elena', nota: 9 }
];

analizarNotas(estudiantes);