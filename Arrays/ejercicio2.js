/* Ejercicio 2:
Crea un array vacío llamado letras. Inserta al principio del array las letras A, B y C.
Luego, inserta al final las letras D y E.
Finalmente, elimina el primer elemento y el último, e imprime el array final.
*/

// Creamos un array vacío
let letras = [];

// Insertamos A, B y C al principio (en orden inverso, ya que unshift añade al inicio)
letras.unshift('C');
letras.unshift('B');
letras.unshift('A');

// Insertamos D y E al final
letras.push('D');
letras.push('E');

console.log('Array después de insertar:', letras);

// Eliminamos el primer y el último elemento
letras.shift(); // elimina el primero (A)
letras.pop(); // elimina el último (E)

console.log('Array final:', letras);
