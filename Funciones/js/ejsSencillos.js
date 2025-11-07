// Ejercicio 1.1
function cuadrado(num) {
  return num * num;
}
console.log('1.1 -> El cuadrado de 5 es: ', cuadrado(5));

// Ejercicio 1.2
(function () {
  let contador = 0;
  contador++;
  console.log('1.2 -> Contador:', contador);
})();
// console.log(contador); -> solo existe dentro de la función

/* así se vería el incremento, pero no es autoinvocada, la tenemos que llamar:
const contador = (function () {
  let valor = 0;
  return function () {
    valor++;
    console.log('Alternativa anónima no autoinvocada: ', valor);
  };
})();
contador();
contador();
contador();
*/

// Ejercicio 1.3
(function (texto, numero) {
  console.log(texto + numero);
})('1.3 -> Concatenación: hola + ', 7);

// Ejercicio 1.4
const esPar = (num) => num % 2 == 0;
console.log('1.4 -> ¿Es 8 par?', esPar(8));
