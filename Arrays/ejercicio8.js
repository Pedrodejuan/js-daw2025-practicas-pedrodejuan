/* Ejercicio 8: Se desea validar hasta qué punto la función Math.random es realmente aleatoria. Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces que ha salido ese número.  */

// Creamos un objeto para contar cuántas veces sale cada número
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

// Repetimos 10.000 veces
for (let i = 0; i < 10000; i++) {
  // Generamos un número aleatorio del 1 al 10
  let numero = Math.floor(Math.random() * 10) + 1;

  // Sumamos 1 al contador correspondiente
  conteo[numero]++;
}

// Mostramos el resultado
console.log('Resultados de 10.000 números aleatorios (1 al 10):');
for (let n = 1; n <= 10; n++) {
  console.log(`${n}: ${conteo[n]} veces`);
}
