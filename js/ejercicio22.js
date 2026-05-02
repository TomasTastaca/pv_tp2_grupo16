import { actualizarTexto } from "./funciones22.js";


const texto = document.getElementById("texto");
const parrafo = document.getElementById("parrafo");

texto.addEventListener("input", () =>{
    actualizarTexto(parrafo,texto.value);
});