/* Los objetos de tipo Array (en definitiva, los arrays) poseen numerosos métodos que resultan muy útiles. Esta práctica consiste en añadir un método a todos los arrays para el cálculo de la media aritmética de sus elementos. Modificar el prototipo de los arrays para añadir el llamado método.
Hace falta utilizar el método reduce() de los Arrays.
Añadir código que valide/pruebe el funcionamiento de los requisitos.
*/
console.log('Práctica 2.');

/*
Ampliamos la clase Array añadiendo un método personalizado:
calcularMedia(), que devuelve la media de los valores numéricos del array.
Si el array está vacío o contiene valores no numéricos, los ignora o devuelve 0.
*/

// Añadimos el método al prototipo de Array
Array.prototype.calcularMedia = function () {
  // Si el array está vacío, devolvemos 0 directamente
  if (this.length === 0) {
    return 0;
  }

  // Usamos reduce() para sumar los valores
  const suma = this.reduce(function (acumulador, valorActual) {
    // Si no es número, no lo sumamos
    if (typeof valorActual !== 'number') {
      return acumulador;
    }
    return acumulador + valorActual;
  }, 0);

  // Calculamos la media (suma / cantidad de elementos)
  return suma / this.length;
};

// ---- Pruebas ----
const numeros1 = [10, 20, 30];
console.log('Array: ', numeros1);
console.log('Media: ', numeros1.calcularMedia());
