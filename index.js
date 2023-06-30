const { performance } = require("node:perf_hooks")

// Complejidad temporal prectica

const contador = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

const tiempoInicial = performance.now()
contador(5) // Algoritmo
const tiempoFinal = performance.now()
const duracion = tiempoFinal - tiempoInicial

console.time("duración metodo console.time")
contador(5) // Algoritmo
console.timeEnd("duración metodo console.time")

console.log(`duracion con el metodo performance.now: ${duracion}`)

// Complejidad espacial practica

function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(n);
    }
}

function arrayRepeat(array) {
    let reapetedArray = array
    return reapetedArray;
}

function stringConverter(array) {
    let result = array.map(item => item.toString());
    return result;
}
console.log(stringConverter([2,345,65,23,12,34,3]));

function generateMatriz(valor){
    let x = new Array(valor)
    for (let i = 0; i < valor; i++) {
     x[i] = new Array(valor).fill(0);   
    }
    return x;
}

console.log(generateMatriz(5));

// La diversidad de tamanos y formas con las que el compilador almacena 
//informacion esta relacionado con la cantidad de variables que se definen para almacenar arreglos, numeros o cadenas