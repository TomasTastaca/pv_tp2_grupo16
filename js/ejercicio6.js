const edades = [22, 31, 43, 39, 40, 15, 25, 32]; 
let prom = 0;
for(let i=0;i<edades.length;i++){
    console.log (`Edad: ${edades[i]}`);
    prom+= edades[i];
}
 console.log (`Promedio: ${prom/edades.length}`);
