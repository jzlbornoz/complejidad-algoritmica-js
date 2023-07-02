# Complejidad Algoritmica

## Estructura de un Algoritmo

- Un algoritmo es una secuencia de instrucciones para llevar a cabo una tarea o objetivo.
- Los algoritmos siempre deben cumplir la siguiente estructura:
  - Entrada: Son los datos que recibe el algoritmo para llevar a cabo el proceso.
  - Proceso: Es la serie de instrucciones donde se trabajan los datos recibidos para cumplir el objetivo
  - Salida: Es lo que devuelve el algoritmo.

## Complejidad Algoritmica

- La complejidad Algoritmica (Teoria de la Complejidad) tiene como objetivo estudiar y evaluar los recursos que consume el algoritmo al llevarse a cabo, estos recursos son el tiempo (segundos, milisegundos) y espacio en memoria (kb, mb, gb). La complejidad algoritmica no se fija en el tiempo absoluto que demora un algoritmo en llavar a cabo una tarea, si no en el ritmo (crecimiento del consumo de recursos) que este utiliza para cumplir dicha tarea de manera eficiente.

### Recursos:

- Tiempo: El tiempo que demora en cargar una pagina web
- Espacio: Lo que ocupa en memoria cache la pagina web

### Medicion de recursos:

- Para saber que tantos recursos consume un algoritmo, solo se miden los recursos, tomando el tiempo y el espacio requiere dicho algoritmo.

## Complejidad Espacial:

- La complejidad espacial, se encarga de calcular cuanto espacio en memoria puede ocupar un algoritmo, a parte del espacio ocupado por los datos de entrada, existe el espacio auxiliar, el cual es el espacio creado por el mismo algoritmo para hacer otro procesos, por ejemplo: filtrar un array, hacer un sort de números, etc. El espacio auxiliar incluso puede llegar a hacer mucho más grande que el espacio de los datos de entrada, y está relacionado al algoritmo mas que a los datos recibos.

```
function plusOne(arr){
    const result = arr.map(item => item + 1)
    return result;
}

```

- Cuando se refiere a Espacio Auxiliar, estamos hablando del espacio usado dentro del proceso. En este caso se esta creando un nuevo array al momento de usar map, ya que este método es inmutable, lo que crea un array nuevo, en lugar de modificar el pasado como parámetro. Este nuevo array que se ha creado es lo que debemos tomar en cuenta para hacer nuestro análisis Espacial

## Complejidad temporal

- La complejidad temporal se puede definir como la relación de crecimiento entre datos de entrada y tiempo de ejecución, trata de medir la eficiencia de un algoritmo conforme la cantidad de datos de entrada va aumentando. Es decir que la complejida no se trata de cuando mas o menos se tarda sino como aumenta en el tiempo

## Otras complejidades existentes

- Accesos a memoria.
- Procesos paralelos.
- Comparaciones.
- Entre otras más.

## Complejidad en el futuro

- Si decubrimos interesante optimizar el uso de un recurso en computación, allí tendremos un nuevo campo de estudio de complejidad.

# Analisis Asintotico

- El análisis asintótico ⇒ Es un método para describir el comportamiento limitante de una función.
- Análisis Asintótico es la forma con la que encontramos una función matemática similar a la medición de la complejidad.
- El comportamiento asintótico de una función f(n) se refiere al crecimiento de f(n) a medida que n crece.
- En el análisis asintótico, evaluamos el rendimiento de un algoritmo en términos de tamaño de entrada (no medimos el tiempo de ejecución real)
- Calculamos cómo aumenta el tiempo (o espacio) que toma un algoritmo con el tamaño de entrada.

# Notacion Big-O

- Es necesaria ya que permite simplificar el análisis de la complejidad computacional. Buscamos poder simplificar la representación de la complejidad. Con esta notacion (Big-O) se busca descubrir una función (constante, lineal, cuadratica, logarítmica o exponencial) que sea mayor o igual que la complejidad de un algoritmo.

- La notación Big-O es una forma comúnmente utilizada en el análisis asintótico para describir el rendimiento de un algoritmo. Se utiliza para indicar el límite superior del tiempo de ejecución de un algoritmo a medida que el tamaño de los datos aumenta.

- Por ejemplo, si un algoritmo tiene una complejidad de O(n^2), significa que el tiempo de ejecución del algoritmo aumenta cuadráticamente con el tamaño de los datos. Esto significa que si el tamaño de los datos se duplica, el tiempo de ejecución aumentará por un factor de cuatro. La notación Big-O se utiliza a menudo para describir el rendimiento de algoritmos en términos de su orden de crecimiento. Otros términos comunes incluyen la notación Big-Ω (omega) y Big-Θ (theta). Big-Ω describe el límite inferior del rendimiento de un algoritmo, mientras que Big-Θ describe el rendimiento exacto de un algoritmo

- O(1) = Constante
- O(log n) = Logaritmica
- O(n) = Lineal
- O(n^2) = Cuadratica
- O(n^x) = Exponencial
- O(n!) = Factorial

## Calculo de la Notacion Big-O

- El crecimiento importa ya que la complejidad de un algoritmo nace de cuántos recursos utiliza el algoritmo al ejecutarse.

- La notacion Big-O solo se enfoca en el crecimiento. Un algoritmo puede correr en una computadora muy vieja-lenta o en una muy nueva-rapida, pero el crecimiento (ritmo) sea el mismo, la complejidad será la misma. Pero esto es en base a los recursos que esa computadora tiene.

- En conclusion se revisa el código en nuestro algoritmo para medir su complejidad en la notación Big-O.

```
let bar = 'test'  // O(1)
if() {}    // O(1)
for() {}    // O(n)
while() {}  // O(n)
for() { for() {} }// O(n^2)
```

- La simplificacion tambien cumple un papel importante. Para simplificar la notación nos concentramos en el valor podemos abreviarlo de la siguiente manera:

* O(2n) ⇒ O(n)
* O(50) ⇒ O(1)
* O(n² + 50) ⇒ O(n²)

- Es posible simplificar de esta manera, ya que solo nos importa el grado mayor

## Recomendaciones para la evaluacion de un algoritmo

- Hasta ahora se sabe que un algoritmo con O(1) es mejor que uno con O(n). Pero, ¿y si ese algoritmo constante en tiempo O(1) se ejecuta en 1000 horas? ¿Y si ese algoritmo constante en espacio O(1) ocupa 1000 GB? La complejidad algorítmica es importante, pero dónde se ejecuta tu algoritmo determina qué tan importante es.

### ¿El crecimiento siempre importa?

- Cuando la Complejidad Algorítmica deja de ser relevante, es donde debemos mejorar nuestro algoritmo para alcanzar nuestro objetivo de eficiencia. Tal vez tengamos el mejor algoritmo jamás visto, pero si lo ejecutamos en una computadora de hace 20 años con un procesador antiguo, pues no podemos esperar mucha rapidez.

- Si tenemos un algoritmo A con O(1) y un algoritmo B con O(1), aún podemos saber cuál tiene un mejor rendimiento midiendo el tiempo en que duran. Ya que no dependen puramente del análisis asintótico. En este caso, la solución del problema no se trata de buscar el algoritmo con menor complejidad, sino de buscar las mejores opciones o variables de entorno para ejecutar y resolver el problema.
