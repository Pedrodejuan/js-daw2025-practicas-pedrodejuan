/* Ejercicio 3: Ordenación de arrays. */

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
