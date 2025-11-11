/* Crea un tipo de objeto que sirve para representar ordenadores. Sus propiedades serán:
•	Marca, un texto
•	Modelo, un texto
•	Memoria RAM, un número que indica los GB de capacidad
•	Capacidad de disco duro, un número que indica el GB de capacidad
•	Pulgadas de pantalla, un número que indica Pulgadas
Métodos de los ordenadores:
•	toString, sirve para obtener en forma de texto los detalles del ordenador
Al crear un ordenador se pueden indicar todos sus valores, pero por defecto (sin ser obligado indicarlos) se toman como valores: 17 pulgadas, 512 GB de disco duro y 4 GB de RAM. La marca y modelo sí son necesarias.
Crea otro tipo de objeto que represente a los ordenadores portátiles. Los que heredan todo lo que tiene un ordenador y añaden una nueva propiedad: autonomía, que es un número que expresa horas. Se construye este objeto de la misma forma que los ordenadores, pero puede añadirse la autonomía, que por defecto son 4 horas. Por defecto, todos los portátiles son de 12 pulgadas, 4 GB de RAM y disco duro de 256 GB. Además, el toString de un portátil añade la autonomía a los detalles.
*/
/*
Ejercicio: Ordenadores y Portátiles

Crea un tipo de objeto que sirve para representar ordenadores.
Propiedades:
  - marca (texto)
  - modelo (texto)
  - ram (número, en GB)
  - disco (número, en GB)
  - pulgadas (número)

Métodos:
  - toString() → devuelve en texto todos los detalles.

Requisitos:
  - marca y modelo son obligatorios.
  - si no se indican otros valores:
      → 4 GB de RAM
      → 512 GB de disco
      → 17 pulgadas

Luego, crea otro tipo de objeto “Portátil” que herede de Ordenador y añada:
  - autonomía (número de horas)
  - valores por defecto distintos:
      → 4 GB de RAM
      → 256 GB de disco
      → 12 pulgadas
      → 4 horas de autonomía
  - su toString() debe incluir también la autonomía.
*/

// Clase base para los ordenadores de sobremesa
class Ordenador {
  constructor(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    // Validación básica: marca y modelo son obligatorios
    if (!marca || !modelo) {
      throw new Error('Debes indicar marca y modelo del ordenador.');
    }

    // Propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
  }

  // Método que devuelve los detalles del ordenador en texto
  toString() {
    return `Ordenador ${this.marca} ${this.modelo} → ${this.ram} GB RAM, ${this.disco} GB disco, ${this.pulgadas}"`;
  }
}

// Clase hija para los portátiles (hereda de Ordenador)
class Portatil extends Ordenador {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 256,
    pulgadas = 12,
    autonomia = 4
  ) {
    // Llamamos al constructor de la clase padre con sus parámetros
    super(marca, modelo, ram, disco, pulgadas);

    // Nueva propiedad exclusiva de los portátiles
    this.autonomia = autonomia;
  }

  // Sobrescribimos el método toString() para incluir la autonomía
  toString() {
    return `Portátil ${this.marca} ${this.modelo} → ${this.ram} GB RAM, ${this.disco} GB disco, ${this.pulgadas}", ${this.autonomia}h de autonomía`;
  }
}

// ---------------- PRUEBAS ----------------

// Creamos un ordenador indicando todos los valores
const sobremesa = new Ordenador('HP', 'Pavilion', 8, 1024, 24);
console.log(sobremesa.toString());

// Creamos un ordenador con solo marca y modelo (usa valores por defecto)
const sobremesa2 = new Ordenador('Asus', 'Essential');
console.log(sobremesa2.toString());

// Creamos un portátil con valores personalizados
const laptop1 = new Portatil('Lenovo', 'Yoga', 16, 512, 14, 10);
console.log(laptop1.toString());

// Creamos un portátil solo con marca y modelo (usa todos los valores por defecto)
const laptop2 = new Portatil('Dell', 'XPS');
console.log(laptop2.toString());
