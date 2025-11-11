/* Ejercicio 1: 
Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia".
Recorre el array e imprime el nombre de cada país.
Después, elimina el primer país del array y vuelve a recorrerlo e imprimir el array de nuevo.
*/
console.log('Ejercicio 1');
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

/* Ejercicio  2:
Crea un array vacío llamado letras. Inserta al principio del array las letras A, B y C. Luego, inserta al final las letras D y E. Finalmente, elimina el primer elemento y el último, e imprime el array final.
*/
console.log('Ejercicio 2');
// Creamos un array vacío
let letras = [];

// Insertamos A, B y C al principio (usando unshift)
letras.unshift('C');
letras.unshift('B');
letras.unshift('A');

// Insertamos D y E al final (usando push)
letras.push('D');
letras.push('E');

console.log('Array después de insertar:', letras);

// Eliminamos el primer y el último elemento
letras.shift(); // elimina el primero (A)
letras.pop(); // elimina el último (E)

// Mostramos el resultado final
console.log('Array final:', letras);

/* Ejercicio 3: Ordenación de arrays. */
console.log('Ejercicio 3');
let data = [
  { name: 'Nacho', telephone: '966112233', age: 40 },
  { name: 'Ana', telephone: '911223344', age: 35 },
  { name: 'Mario', phone: '611998877', age: 15 },
  { name: 'Laura', telephone: '633663366', age: 17 },
];

// a) añadimos dos elementos al final
data.push(
  { name: 'Pedro', telephone: '611944444', age: 25 },
  { name: 'Julia', phone: '633232323', age: 37 }
);

console.log('Después de añadir:', data);

// b) Ordenamos el vector por edad (de menor a mayor)
data.sort((a, b) => a.age - b.age);
console.log('Ordenado por edad:', data);

// c) Ordenamos el vector por nombre (alfabéticamente)
data.sort((a, b) => a.name.localeCompare(b.name));
console.log('Ordenado por nombre:', data);

// d) Creamos un nuevo vector con las personas mayores de 30 años
let mayores30 = data.filter((persona) => persona.age > 30);
console.log('Mayores de 30 años:', mayores30);

/* Ejercicio 4:
Crea un array llamado numeros con al menos seis números.
Usa desestructuración para obtener los primeros dos números en variables individuales 
y almacena el resto de los números en un array llamado resto.
*/
console.log('Ejercicio 4');
let numeros = [1, 2, 3, 4, 5, 6];

// Desestructuración: asigna los dos primeros valores a variables y el resto a un array
let [primero, segundo, ...resto] = numeros;

console.log('Primer número:', primero);
console.log('Segundo número:', segundo);
console.log('Resto del array:', resto);

/* Ejercicio 5:
Crea un array llamado valores que contenga números, algunos de los cuales son duplicados.
Utiliza un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo.
*/
console.log('Ejercicio 5');
let valores = [1, 2, 3, 4, 5, 3, 6, 2, 7, 8, 3, 9];

// Un Set elimina automáticamente los duplicados
let conjunto = new Set(valores);

// Convertimos el Set de nuevo a array con el operador spread (...)
let unicos = [...conjunto];

console.log('Array original:', valores);
console.log('Array sin duplicados:', unicos);

/* Ejercicio 6:
Crea un Map que almacene nombres como claves y edades como valores.
Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos,
y finalmente imprime todos los nombres con sus edades.
*/
console.log('Ejercicio 6');
// Creamos el Map vacío
let personas = new Map();

// Añadimos pares clave-valor
personas.set('Pedro', 25);
personas.set('Ana', 30);
personas.set('Luis', 20);
personas.set('Marta', 27);
console.log('Mapa inicial:');
console.log(personas);

// Actualizamos la edad de Luis
personas.set('Luis', 22); // si la clave ya existe, reemplaza el valor

// Recorremos el Map e imprimimos cada par
console.log('Listado de nombres y edades:');
for (let [nombre, edad] of personas) {
  console.log(`${nombre}, ${edad} años`);
}

/* Ejercicio 7:
Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva.
Cada combinación tiene 6 números del 1 al 49, sin repetir números en la misma combinación.
*/
console.log('Ejercicio 7');
for (let i = 1; i <= 50; i++) {
  let combinacion = [];

  // Mientras la combinación no tenga 6 números únicos
  while (combinacion.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1; // número entre 1 y 49

    // Solo añadimos si no está repetido
    if (!combinacion.includes(numero)) {
      combinacion.push(numero);
    }
  }

  // Ordenamos la combinación de menor a mayor
  combinacion.sort((a, b) => a - b);

  console.log(`Combinación ${i}:`, combinacion.join(', '));
}

/* Ejercicio 8:
Se desea validar hasta qué punto la función Math.random es realmente aleatoria.
Para ello, generaremos 10.000 números aleatorios del 1 al 10
y contaremos cuántas veces sale cada número.
*/
console.log('Ejercicio 8');
// Creamos un objeto para contar las apariciones de cada número
let conteo = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};

// Generamos 10.000 números y actualizamos el conteo
for (let i = 0; i < 10000; i++) {
  let numero = Math.floor(Math.random() * 10) + 1; // del 1 al 10
  conteo[numero]++;
}

// Mostramos el resultado
console.log('Resultados de 10.000 números aleatorios (1 al 10):');
for (let n = 1; n <= 10; n++) {
  console.log(`${n}: ${conteo[n]} veces`);
}
