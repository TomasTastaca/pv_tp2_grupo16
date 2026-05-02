import { actualizarTexto, cambiarFondo } from "./funciones23.js";


const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

texto.addEventListener("input", () =>{
    actualizarTexto(parrafo,texto.value);
    cambiarFondo(parrafo,texto.value);
});