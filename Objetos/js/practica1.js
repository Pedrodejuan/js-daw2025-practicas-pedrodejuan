/* Queremos crear objetos que representen puntos. De ellos necesitamos:
•	Que tengan dos propiedades: x e y. Servirán para representar a las coordenadas del punto.
•	La construcción de los puntos se realizará con una función constructora a la que se le pasan dos números. Si lo que se recibe en cada coordenada no es un número, se pondrá un cero.
•	Que tengan un método llamado: cambiar. A este método le pasaremos dos números y nos permitirá cambiar las coordenadas del punto
•	Que tengan un método llamado: copia. Este método devolverá una copia del objeto.
•	Que tengan un método llamado: suma. Este método recibe un segundo punto y devuelve un tercer punto resultado de sumar las coordenadas de los dos anteriores.
Añadir código que valide/pruebe el funcionamiento de todos los requisitos. */

console.log('Práctica 1. Coordenadas');

/*
Definimos una función constructora Punto(x, y)
que representará un punto en un plano.
Incluye métodos para:
- cambiar sus coordenadas
- crear una copia
- sumar otro punto
*/

function Punto(x, y) {
  // Si x o y no son números, se reemplazan por 0
  if (typeof x !== 'number') {
    x = 0;
  }
  if (typeof y !== 'number') {
    y = 0;
  }

  // Asignamos las propiedades
  this.x = x;
  this.y = y;
}

// Método cambiar() para actualizar las coordenadas
Punto.prototype.cambiar = function (nuevaX, nuevaY) {
  if (typeof nuevaX !== 'number') {
    nuevaX = 0;
  }
  if (typeof nuevaY !== 'number') {
    nuevaY = 0;
  }

  this.x = nuevaX;
  this.y = nuevaY;
};

// Método copia() devuelve un nuevo objeto Punto con las mismas coordenadas
Punto.prototype.copia = function () {
  return new Punto(this.x, this.y);
};

// Método sumar() devuelve un nuevo punto que es la suma de las coordenadas de dos puntos
Punto.prototype.sumar = function (otroPunto) {
  let nuevaX = this.x + otroPunto.x;
  let nuevaY = this.y + otroPunto.y;
  return new Punto(nuevaX, nuevaY);
};

// ---- Pruebas en consola ----

// Creamos puntos de prueba
const p1 = new Punto(2, 5);
console.log('Punto 1 = ', p1);

// Creamos otro punto con x no numérica (se sustituye por 0)
const p2 = new Punto('no', 10);
console.log('Punto 2 (x no número) = ', p2);

// Probamos el método cambiar()
p1.cambiar(7, 8);
console.log('Punto 1 después de cambiar por (7,8): ', p1);

// Copiamos p1 en un nuevo punto
const p3 = p1.copia();
console.log('p3 (copia de p1):', p3);
console.log('¿p1 y p3 son el mismo objeto? -->', p1 === p3); // false, son distintos objetos

// Probamos la suma de puntos
const p4 = p1.sumar(p2);
console.log('Punto 4 = Punto 1 + Punto 2: ', p4);
