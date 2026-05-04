export const mostrarSeleccion = (elemento, valor) => {
    elemento.textContent = `Has seleccionado: ${valor}`;
    console.log(`Opción seleccionada: ${valor}`);
};