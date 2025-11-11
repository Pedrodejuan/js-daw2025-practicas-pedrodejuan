const resultadoDiv = document.getElementById('resultado');

// Función principal: aplica una función (callback) a cada elemento del array
function filtro(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]); // reemplaza el valor con el resultado del callback
  }
  return array; // devuelve el array modificado
}

// Caso 1: multiplicar por 2
let numeros = [1, 2, 3, 4];
filtro(numeros, function (num) {
  return num * 2;
});
resultadoDiv.innerHTML += `<p><strong>Multiplicar por 2:</strong> ${numeros.join(
  ', '
)}</p>`;

// Caso 2: pasar a mayúsculas
let palabras = ['práctica3', 'funciones', 'javascript'];
filtro(palabras, function (texto) {
  return texto.toUpperCase();
});
resultadoDiv.innerHTML += `<p><strong>Palabras en mayúsculas:</strong> ${palabras.join(
  ', '
)}</p>`;

// Caso 3: calcular factoriales
let numeros2 = [3, 5, 7];
filtro(numeros2, function (n) {
  return factorial(n);
});
resultadoDiv.innerHTML += `<p><strong>Factoriales:</strong> ${numeros2.join(
  ', '
)}</p>`;

// Función auxiliar que calcula el factorial de un número
function factorial(num) {
  if (num === 0 || num === 1) return 1; // casos base
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i; // multiplica todos los enteros hasta el número dado
  }
  return resultado;
}
