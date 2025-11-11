/* =========================================================
   Ejercicio 1.1
   Crea una función tradicional que reciba un número y retorne su cuadrado.
   Luego, usa esa función para mostrar el cuadrado de 5 en la consola.
   ========================================================= */

function cuadrado(numero) {
  // Multiplicamos el número por sí mismo y devolvemos el resultado
  return numero * numero;
}

// Probamos la función con el número 5
console.log('1.1 -> El cuadrado de 5 es:', cuadrado(5));

/* =========================================================
   Ejercicio 1.2
   Crea una función anónima autoinvocada que defina una variable llamada contador
   y la incremente en cada invocación. Luego, intenta acceder a la variable contador
   fuera de la función y observa lo que sucede.
   ========================================================= */

// Función anónima autoinvocada (IIFE: Immediately Invoked Function Expression)
(function () {
  let contador = 0;
  contador++;
  console.log('1.2 -> Valor del contador dentro de la función:', contador);
})();

// Intentamos acceder a la variable fuera (esto dará error porque no existe en el ámbito global)
try {
  console.log('Valor del contador fuera:', contador);
} catch (error) {
  console.log(
    "1.2 -> Error al acceder a 'contador' fuera de la función:",
    error.message
  );
}

/* =========================================================
   Ejercicio 1.3
   Crea una función autoinvocada que reciba dos parámetros:
   una cadena de texto y un número. Dentro de la función,
   concatena la cadena con el número y muestra el resultado en consola.
   ========================================================= */

(function (texto, numero) {
  // Concatenamos ambos valores en una cadena
  console.log('1.3 -> Resultado de la concatenación:', texto + numero);
})('El número es ', 7);

/* =========================================================
   Ejercicio 1.4
   Crea una función flecha que sirva para devolver verdadero
   si un número es par o falso si no lo es.
   Asigna esa función a una variable y prueba la función.
   ========================================================= */

// Función flecha que devuelve true si el número es par, false si no
const esPar = (num) => num % 2 === 0;

// Probamos la función con distintos valores
console.log('1.4 -> ¿4 es par?:', esPar(4)); // true
console.log('1.4 -> ¿7 es par?:', esPar(7)); // false
