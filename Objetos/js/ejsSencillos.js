/* Ejercicio 1.
Crea un objeto llamado persona con las siguientes propiedades:
• nombre: "Juan"
• edad: 30
• profesion: "Ingeniero"
• Un método presentarse que devuelva una cadena de texto presentando a la persona con su nombre y profesión.
Llama al método presentarse e imprime el resultado en la consola.
*/
console.log('Ejercicio 1');

// Creamos un objeto literal con propiedades y un método
let persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',

  // Método que devuelve una presentación en texto
  presentarPersona: function () {
    return `${this.nombre}, de ${this.edad} años, es ${this.profesion}`;
  },
};

// Mostramos por consola el texto devuelto por el método
console.log('Primera presentación:', persona.presentarPersona());

/* Ejercicio 2.
Modifica el objeto persona del ejercicio anterior para incluir un método cumplirAnios 
que incremente la edad de la persona en 1 utilizando el objeto this.
Llama al método cumplirAnios e imprime la edad actualizada.
*/
console.log('Ejercicio 2.');

// Nuevo objeto persona con el método cumplirAnios()
let personaMasUno = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',

  // Método que suma 1 a la propiedad edad
  cumplirAnios() {
    this.edad++;
  },
};

// Llamamos al método y mostramos la edad actualizada
personaMasUno.cumplirAnios();
console.log(
  `Esta persona cumplirá ${personaMasUno.edad} años el año que viene`
);

/* Ejercicio 3.
Crea un objeto libro con las propiedades:
• titulo
• autor
• paginas
• añoPublicacion
Muestra por consola cada propiedad con su valor.
*/
console.log('Ejercicio 3.');

// Creamos el objeto libro con varias propiedades
let libro = {
  titulo: 'Cien Años de Soledad',
  autor: 'Gabriel García Márquez',
  paginas: 417,
  añoPublicacion: 1967,
};

// Recorremos todas las propiedades del objeto usando un bucle for...in
for (let prop in libro) {
  console.log(`${prop}: ${libro[prop]}.`);
}

/* Ejercicio 4.
Crea una función constructora llamada Coche que tenga las propiedades:
• marca
• modelo
• año
• Un método detalles que devuelva una cadena de texto con la marca, el modelo y el año del coche.
Crea dos instancias de Coche y llama al método detalles para cada uno.
*/
console.log('Ejercicio 4.');

// Función constructora: sirve para crear objetos del tipo "Coche"
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  // Método interno que devuelve una descripción del coche
  this.detalles = function () {
    return `El coche es un ${this.marca}, modelo ${this.modelo}, del año ${this.año}`;
  };
}

// Creamos dos objetos (instancias) de tipo Coche
let coche1 = new Coche('Peugeot', '308', 2015);
let coche2 = new Coche('Opel', 'Zafira', 2008);

// Mostramos la información de cada uno
console.log(coche1.detalles());
console.log(coche2.detalles());

/* Ejercicio 5.
Utiliza el ejercicio anterior del constructor Coche.
Ahora añade un método al prototipo de Coche llamado encender, 
que imprima "El coche [marca] [modelo] ha sido encendido".
Llama al método encender en alguna de las instancias de Coche.
*/
console.log('Ejercicio 5.');

// Añadimos un método al prototipo (compartido por todas las instancias)
Coche.prototype.encender = function () {
  return `El coche ${this.marca} ${this.modelo} ha sido encendido.`;
};

// Llamamos al método en una de las instancias
console.log(coche1.encender());
