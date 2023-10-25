// DESESTRUCTURACION DE OBJETOS COMO PARAMETROS DE FUNCIONES
function imprimirInformacion({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
  nombre: "Enrique",
  edad: 20,
  ciudad: "Ragnarok"
}

imprimirInformacion(persona)

// EN ESTE CASO, ESTAMOS PASANDO UN OBJETO COMO ARGUMENTO A LA FUNCION "imprimirInformacion", Y LUEGO DESESTRUCTURAMOS EL OBJETO DIRECTAMENTE EN LOS PARAMETROS DE LA FUNCION PARA ACCEDER A LAS PROPIEDADES DENTRO DE LA FUNCION