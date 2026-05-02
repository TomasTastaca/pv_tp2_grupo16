export const actualizarTexto = (parrafo, nuevoTexto) => {
    parrafo.textContent= nuevoTexto;
}

export const cambiarFondo = (parrafo, nuevoTexto) => {
    if (nuevoTexto.length > 20)
        parrafo.classList.add("colorFondo");
    else
        parrafo.classList.remove("colorFondo");
}