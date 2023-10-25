// - SE UTILIZA PARA ITERAR SOBRE ELEMENTOS DE UN ARREGLO Y EJECUTAR UNA FUNCION PARA CADA ELEMENTO

// - NO DEVUELVE UN NUEVO ARREGLO. TRABAJA SOBRE EL ORIGINAL

const frutas = ["Manzana", "Pera", "Platano", "Uva"]

// EJEMPLO CON FUNCION DE FLECHA/ARROW FUNCTION
// frutas.forEach(fruta => {
//   console.log(fruta);
// });

// EJEMPLO CON UNA FUNCION CLASICA
frutas.forEach(function (fruta) {
  console.log(fruta);
});