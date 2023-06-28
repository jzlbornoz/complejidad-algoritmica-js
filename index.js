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