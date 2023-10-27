// EN BASE A "esDiaLaborable", DEFINIR SI "Nos sabemos la chambear | Trabajar ò Descansar"

const esDiaLaborable = false

// EXPECTED OUTPUT/SALIDA ESPERADA EN LA CONSOLA: "Trabajar" o "Descansar"
const actividad = esDiaLaborable ? "Trabajar" : "Descansar"
console.log(actividad);

// NOTA: INVESTIGAR VALORES TRUTHY Y FALSY
// Solo hay seis valores falsos/"falsy" en JavaScript: undefined , null , NaN , 0 , "" (cadena vacía), y false por supuesto.