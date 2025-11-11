// Seleccionamos el elemento donde mostraremos el resultado
const resultadoDiv = document.getElementById('resultado');

// Pedimos palabras al usuario (función en main.js)
let palabras = pedirPalabras();

// Si no se introdujo ninguna palabra
if (palabras.length === 0) {
  resultadoDiv.innerHTML += '<p>No se introdujo nada.</p>';
}

// Eliminamos duplicados usando un Set
palabras = [...new Set(palabras)];

// Ordenamos las palabras en orden Z-A
palabras.sort((a, b) => b.localeCompare(a, 'es'));

// Mostramos el resultado final
resultadoDiv.innerHTML += `<p>${palabras.join('<br>')}</p>`;
