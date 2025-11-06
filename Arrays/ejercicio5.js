/* Ejercicio 5: Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo. */
let valores = [1, 2, 3, 4, 5, 3, 6, 2, 7, 8, 3, 9];
let conjunto = new Set(valores);

let unicos = [...conjunto];

console.log('Array original:', valores);
console.log('Array sin duplicados:', unicos);
