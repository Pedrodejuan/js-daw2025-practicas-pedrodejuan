/* Ejercicio 6: Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus edades. */

// Creamos el Map vacío
let personas = new Map();

personas.set('Pedro', 25);
personas.set('Ana', 30);
personas.set('Luis', 20);
personas.set('Marta', 27);
console.log('Mapa inicial:');
console.log(personas);

// Actualizamos la edad de uno
personas.set('Luis', 22); // sobreescribiendo con el mismo set

// Recorremos el Map e imprimimos cada par
console.log('Listado de nombres y edades:');
for (let [nombre, edad] of personas) {
  console.log(nombre, ',', edad, 'años');
}
