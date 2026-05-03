export function obtenerColorAleatorio() {
    const colores = ["red", "blue", "green", "purple", "orange", "pink"];

    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}