// RETORNAR UN VALOR EN UNA FUNCION

function esPar(numero) {
  // EN BASE A UNA CONDICION DE OPERADOR TERNARIO, RETORNAR: "Es par" ò "Es impar"
  return (numero % 2 === 0) ? "Es par" : "Es impar"
}

// EXPECTED OUTPUT EN LA CONSOLA: "Es par" ò "Es impar"
console.log(esPar(7));