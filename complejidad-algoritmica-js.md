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
