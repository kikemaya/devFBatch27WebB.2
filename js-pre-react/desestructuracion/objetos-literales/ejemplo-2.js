// DARLE UN ALIAS/SOBRENOMBRE A LAS PROPIEDADES QUE SE DESESTRUCTURAN 

const persona = {
  nombre: "Cinthya",
  edad: 20,
  ciudad: "La mejor ciudad",
}

const nombre = "Laura"

// DESESTRUCTURAR EL "nombre"
let { nombre: nuevoNombre } = persona

console.log(nuevoNombre);