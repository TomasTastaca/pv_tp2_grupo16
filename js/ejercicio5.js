const horas = 3;
const minutos = 15;

const convertirASegundos = (h, m) => (h * 3600) + (m * 60);
const TotalSegundos = convertirASegundos(horas, minutos);

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Total de Segundos: ${TotalSegundos} seg`);
