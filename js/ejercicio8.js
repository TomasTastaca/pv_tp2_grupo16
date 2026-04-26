const analizarNotas = () => {
    // Declaramos el array con 10 notas (números enteros)
    const notas = [3, 4, 9, 5, 6, 3, 8, 2, 2, 3];
    // Arreglos vacíos para clasificar (usamos const porque la referencia al array no cambia)
    const aprobadas = [];
    const desaprobadas = [];
    
    let sumaTotal = 0;

    console.log("--- a) Listado de todas las notas ---");
    for (let i = 0; i < notas.length; i++) {
        let notaActual = notas[i];
        console.log(`Nota en posición ${i + 1}: ${notaActual}`);
        // Acumulamos para el promedio
        sumaTotal = sumaTotal + notaActual;
        // Clasificamos usando PUSH
        if (notaActual >= 6) {
            aprobadas.push(notaActual);
        } else {
            desaprobadas.push(notaActual);
        }
    }

    // d) Calcular el promedio general
    const promedio = sumaTotal / notas.length;

    console.log("\n--- b) Notas Aprobadas (>= 6) ---");
    console.log(`Las notas aprobadas son: ${aprobadas}`);

    console.log("\n--- c) Notas Desaprobadas (< 6) ---");
    console.log(`Las notas desaprobadas son: ${desaprobadas}`);

    console.log("\n--- Resultados Finales ---");
    console.log(`d) El promedio general es: ${promedio.toFixed(2)}`);
    console.log(`e) Cantidad de notas aprobadas: ${aprobadas.length}`);
};

analizarNotas();