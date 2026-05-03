import { obtenerColorAleatorio } from "./funciones25.js";

const boton = document.getElementById("btnColor");

boton.addEventListener("click", () => {
    const color = obtenerColorAleatorio();
    document.body.style.backgroundColor = color;

    console.log(`Color cambiado a: ${color}`);
});