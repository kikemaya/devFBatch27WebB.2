// DEFINIR VALORES POR DEFECTO

const persona = {
  nombre: undefined,
  edad: 19,
  ciudad: "La mejor ciudad",
}

let { edad = 30, nombre = "Fulanito" } = persona

console.log(nombre);