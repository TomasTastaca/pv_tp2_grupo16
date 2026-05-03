import { datos } from "./funciones21.js";
const pais = document.getElementById("pais");
const capital = document.getElementById("capital");

pais.addEventListener("change", () => {

    const paisSeleccionado = pais.value;

    capital.value = datos[paisSeleccionado];

    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital seleccionada: ${capital.value}`);
});