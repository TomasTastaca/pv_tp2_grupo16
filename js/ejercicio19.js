import { cambiarTexto } from "./funciones19.js";

const boton = document.getElementById("btnCambiar");
const parrafo = document.getElementById("texto");

const texto = "Estamos trabajando en la parte 2 del trabajo practico n°2 >_<";


boton.addEventListener("click",()=>{
    cambiarTexto(parrafo,texto);
});