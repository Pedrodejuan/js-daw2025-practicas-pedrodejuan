// Ejercicio 2.1 Crea un bucle que recorra un array de números y calcule la suma de todos ellos de forma iterativa y recursiva. ¿Qué solución crees que es mejor? Suma ITERATIVA
const numeros = [2, 2, 2, 2, 2];
console.log('2.1 El array es: ', numeros);
function sumarIterativo(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

console.log('2.1 -> Suma iterativa: ', sumarIterativo(numeros));
// Suma RECURSIVA
function sumarRecursivo(array, indice = 0) {
  if (indice === array.length) {
    return 0;
  }
  // caso recursivo: valor actual + lo que quede por sumar
  return array[indice] + sumarRecursivo(array, indice + 1);
}

console.log('2.1 -> Suma recursiva: ', sumarRecursivo(numeros));

/* Ejercicio 2.2 Tienes un array de objetos que representan productos. Usa forEach() para incrementar en un 10% el precio de cada producto.
const productos = [ { nombre: "Camiseta", precio: 20 }, { nombre: "Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ]; */
const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 30 },
  { nombre: 'Zapatos', precio: 50 },
];
productos.forEach((producto) => {
  producto.precio = producto.precio * 1.1;
});
console.log('2.2 -> productos con precio actualizado:', productos);

/* Ejercicio 2.3 Usa una combinación de los métodos map(), reduce() y filter() para procesar un array de objetos. Tienes un array de personas con sus nombres y edades, filtra a las personas mayores de 18, multiplica su edad por 2, y luego suma todas las edades.
const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 22 }, { nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ]; */

const personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 19 },
  { nombre: 'Laura', edad: 16 },
];

const mayores = personas.filter((persona) => persona.edad >= 18);
const edadesDoble = mayores.map((persona) => persona.edad * 2);

const sumaEdades = edadesDoble.reduce((acum, edad) => acum + edad, 0);

console.log('2.3 -> Mayores: ', mayores);
console.log('2.3 -> edades * 2: ', edadesDoble);
console.log('2.3 -> suma final: ', sumaEdades);
