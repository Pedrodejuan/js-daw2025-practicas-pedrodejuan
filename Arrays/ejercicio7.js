/* Ejercicio 7:
Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva.
Cada combinación tiene 6 números del 1 al 49, sin repetir números en la misma combinación.
*/

for (let i = 1; i <= 50; i++) {
  let combinacion = [];

  // Mientras la combinación no tenga 6 números únicos
  while (combinacion.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1; // número entre 1 y 49

    // Solo añadimos si no está repetido
    if (!combinacion.includes(numero)) {
      combinacion.push(numero);
    }
  }

  // Ordenamos la combinación de menor a mayor
  combinacion.sort((a, b) => a - b);

  console.log(`Combinación ${i}:`, combinacion.join(', '));
}
