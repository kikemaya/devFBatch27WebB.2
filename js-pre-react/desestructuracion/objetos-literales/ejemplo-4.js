// DESESTRUCTURACION ANIDADA

const persona = {
  nombre: undefined,
  edad: 19,
  ciudad: "La mejor ciudad",
  direccion: {
    numero: 123,
    calle: "Calle principal",
    colonia: "colonia bonita"
  }
}

// DESESTRUCTURACION ANIDADA
const { nombre = "Luna", direccion: { calle, colonia } } = persona

let direccionCompleta = "Calle: " + calle + ", " + "colonia: " + colonia
console.log(direccionCompleta);