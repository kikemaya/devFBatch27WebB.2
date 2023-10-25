// MODIFICANDO EL ARREGLO ORIGINAL

const numeros = [1, 2, 3, 4, 5]

// CADA "forEach", EN LA FUNCION QUE PIDE COMO PARAMETRO, A SU VEZ, ESA FUNCION PUEDE RECIBIR 3 ARGUMENTOS: ELEMENTO, INDICE Y EL ARREGLO COMPLETO

console.log("original", numeros);

numeros.forEach((numeroActual, indice, arregloCompleto) => {
  // console.log(`${indice}.- ${numeroActual} ===== ${arregloCompleto}`);
  arregloCompleto[indice] = numeroActual * 2
});

console.log("original modificado", numeros);