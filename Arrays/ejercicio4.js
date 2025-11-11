/* Ejercicio 4:
Crea un array llamado numeros con al menos seis números.
Usa desestructuración para obtener los primeros dos números en variables individuales 
y almacena el resto de los números en un array llamado resto.
*/

let numeros = [1, 2, 3, 4, 5, 6];

// Desestructuración: asigna los dos primeros valores a variables y el resto a un array
let [primero, segundo, ...resto] = numeros;

console.log('Primer número:', primero);
console.log('Segundo número:', segundo);
console.log('Resto del array:', resto);
