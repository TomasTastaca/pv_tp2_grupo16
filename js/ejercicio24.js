import { mostrarSeleccion } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        mostrarSeleccion(resultado, radio.value);
    });
});