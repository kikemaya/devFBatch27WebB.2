// CREAR UN ARREGLO DE LAS LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO
const palabras = ["Linterna", "Llanta", "espada", "vaca"]

// SALIDA ESPERADA | EXPECTED OUTPUT: [8, 6]

// const longitudes = palabras.map(palabra => {
//   // otros codigos
//   return `palabra: ${palabra} - longitud: ${palabra.length} letras`
// })

const longitudes = palabras.map(palabra => `palabra: ${palabra} - longitud: ${palabra.length} letras`)

console.log("palabras:", palabras);
console.log("longitudes:", longitudes);