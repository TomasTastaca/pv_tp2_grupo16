import { formatearMensaje } from './funciones20.js';

// Obtenemos los elementos mediante querySelector
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLU = document.querySelector('#lu');
const boton = document.querySelector('#btnMostrar');

// Función flecha para manejar el evento click
const manejarClick = () => {
    // Obtenemos los valores
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const lu = inputLU.value;

    // Generamos el mensaje usando la función importada
    const mensajeFinal = formatearMensaje(nombre, apellido, lu);

    // Mostramos el alert
    alert(mensajeFinal);
};

// Asignamos el evento al botón
boton.addEventListener('click', manejarClick);