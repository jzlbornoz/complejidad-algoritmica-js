/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( 1 )
 * Espacio Auxiliar -> O( 1 )
 */
function factorial(numero) {
    let resultado = 1;
  
    for (let i = 2; i <= numero; i += 1) {
      resultado *= i;
    }
  
    return resultado;
  }