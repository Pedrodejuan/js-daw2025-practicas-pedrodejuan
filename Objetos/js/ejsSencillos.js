/* Ejercicio 1. Crea un objeto llamado persona con las siguientes propiedades:
•	nombre: "Juan"
•	edad: 30
•	profesion: "Ingeniero"
•	Un método presentarse que devuelva una cadena de texto presentando a la persona con su nombre y profesión.
Llama al método presentarse e imprime el resultado en la consola */
console.log('Ejercicio 1');
let persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',
  presentarPersona: function () {
    return `${persona.nombre}, de ${persona.edad} años, es ${persona.profesion}`;
  },
};
console.log('Primera presentación:', persona.presentarPersona());

/* Ejercicio 2. Modifica el objeto persona del ejercicio anterior para incluir un método cumplirAnios que incremente la edad de la persona en 1 utilizando el objeto this. Llama al método cumplirAnios e imprime la edad actualizada. */
console.log('Ejercicio 2. ');
let personaMasUno = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',

  cumplirAnios() {
    this.edad++;
  },
};
personaMasUno.cumplirAnios();
console.log(
  `Esta persona cumplirá ${personaMasUno.edad} años el año que viene`
);

/* Ejercicio 3. Crea una función constructora llamada Coche que tenga las propiedades:
•	marca
•	modelo
•	año
•	Un método detalles que devuelva una cadena de texto con la marca, el modelo y el año del coche.
Crea dos instancias de Coche y llama al método detalles para cada uno.
 */
console.log('Ejercicio 3.');
let libro = {
  titulo: 'Cien Años de Soledad',
  autor: 'Gabriel García Márquez',
  paginas: 417,
  añoPublicacion: 1967,
};
for (let prop in libro) {
  console.log(`${prop}: ${libro[prop]}.`);
}

/* Ejercicio 4 Crea una función constructora llamada Coche que tenga las propiedades:
•	marca
•	modelo
•	año
•	Un método detalles que devuelva una cadena de texto con la marca, el modelo y el año del coche.
Crea dos instancias de Coche y llama al método detalles para cada uno.
*/
console.log('Ejercicio 4.');

function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.detalles = function () {
    return `El coche es un ${this.marca}, modelo ${this.modelo}, del año ${this.año}`;
  };
}

let coche1 = new Coche('Peugeot', '308', 2015);
let coche2 = new Coche('Opel', 'Zafira', 2008);

console.log(coche1.detalles());
console.log(coche2.detalles());

/* Ejercicio 5. Utiliza el ejercicio anterior del constructor Coche. Ahora añade un método al prototipo de Coche llamado encender, que imprima "El coche [marca] [modelo] ha sido encendido".
Llama al método encender en alguna de las instancias de Coche. */
console.log('Ejercicio 5.');

Coche.prototype.encender = function () {
  return `El coche ${this.marca} ${this.modelo} ha sido encendido.`;
};

console.log(coche1.encender());
