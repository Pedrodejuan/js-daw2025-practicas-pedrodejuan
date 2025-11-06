/* Ejercicio 7: Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una misma combinación. */

for (let i = 1; i <= 50; i++) {
  let combinacion = [];

  while (combinacion.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;

    if (!combinacion.includes(numero)) {
      combinacion.push(numero);
    }
  }

  combinacion.sort((a, b) => a - b);

  console.log(`Combinacion ${i}:`, combinacion.join(', '));
}
