/* Ejercicio 1: 
Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia".
Recorre el array e imprime el nombre de cada país.
Después, elimina el primer país del array y vuelve a recorrerlo e imprimir el array de nuevo.
*/

let paises = ['España', 'Francia', 'Alemania', 'Italia'];

// Primera pasada: mostramos todos los países
console.log('Listado inicial:');
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]); // imprime cada país
}

// Eliminamos el primer país del array (España)
paises.shift();

// Segunda pasada: mostramos el nuevo listado
console.log('Listado después de eliminar el primero:');
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}
