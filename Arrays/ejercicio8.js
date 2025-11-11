/* Ejercicio 8:
Se desea validar hasta qué punto la función Math.random es realmente aleatoria.
Para ello, generaremos 10.000 números aleatorios del 1 al 10
y contaremos cuántas veces sale cada número.
*/

// Creamos un objeto para contar las apariciones de cada número
let conteo = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};

// Generamos 10.000 números y actualizamos el conteo
for (let i = 0; i < 10000; i++) {
  let numero = Math.floor(Math.random() * 10) + 1; // del 1 al 10
  conteo[numero]++;
}

// Mostramos el resultado
console.log('Resultados de 10.000 números aleatorios (1 al 10):');
for (let n = 1; n <= 10; n++) {
  console.log(`${n}: ${conteo[n]} veces`);
}
