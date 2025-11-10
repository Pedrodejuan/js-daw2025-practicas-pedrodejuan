console.log('Práctica 2.');

Array.prototype.calcularMedia = function () {
  if (this.length === 0) {
    return 0;
  }

  const suma = this.reduce(function (acumulador, valorActual) {
    if (typeof valorActual !== 'number') {
      return acumulador;
    }
    return acumulador + valorActual;
  }, 0);

  // Devolvemos la media calculada
  return suma / this.length;
};

const numeros1 = [10, 20, 30];
console.log('Array: ', numeros1);
console.log('Media: ', numeros1.calcularMedia());
