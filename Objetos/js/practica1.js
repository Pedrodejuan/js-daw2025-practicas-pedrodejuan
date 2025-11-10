console.log('Práctica 1. Coordenadas');
function Punto(x, y) {
  if (typeof x !== 'number') {
    x = 0;
  }
  if (typeof x !== 'number') {
    y = 0;
  }

  this.x = x;
  this.y = y;
}

// Método cambiar
Punto.prototype.cambiar = function (nuevaX, nuevaY) {
  if (typeof nuevaX !== 'number') {
    x = 0;
  }
  if (typeof nuevaY !== 'number') {
    y = 0;
  }

  this.x = nuevaX;
  this.y = nuevaY;
};

// Método copia
Punto.prototype.copia = function () {
  return new Punto(this.x, this.y);
};

// Método para sumar dos puntos
Punto.prototype.sumar = function (otroPunto) {
  let nuevaX = this.x + otroPunto.x;
  let nuevaY = this.y + otroPunto.y;
  return new Punto(nuevaX, nuevaY);
};

// Para imprimir pruebas
const p1 = new Punto(2, 5);
console.log('Punto 1 = ', p1);

const p2 = new Punto('no', 10);
console.log('Punto 2 (x no número) = ', p2);

p1.cambiar(7, 8);
console.log('Punto 1 después de cambiar por (7,8): ', p1);

const p3 = p1.copia();
console.log('p3 (copia de p1):', p3); // mismo valor que p1
console.log('¿p1 y p3 son el mismo objeto? -->', p1 === p3); // false

const p4 = p1.sumar(p2);
console.log('Punto 4 = Punto 1 + Punto 2: ', p4);
