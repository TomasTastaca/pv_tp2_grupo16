const nombres = ["Tomas", "Marcelo", "Sara", "Pablo", "Brenda","Jazmin"];
let nombresmaslargo = nombres[0];
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);

    if (nombres[i].length > nombresmaslargo.length){
        nombresmaslargo = nombres[i];
    }
}
console.log(`El nombre más largo es: ${nombresmaslargo}`);
