/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( 1 )
 * Espacio Auxiliar -> O( 1 )
 */

function isPowerOfTwo(n) {
    if (n < 1) {
      return false;
    }
  
    let numeroDividido = n;
    while (numeroDividido !== 1) {
      if (numeroDividido % 2 !== 0) {
        return false;
      }
      numeroDividido = numeroDividido / 2;
    }
  
    return true;
  }