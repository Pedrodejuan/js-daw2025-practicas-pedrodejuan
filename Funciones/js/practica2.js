const resultadoDiv = document.getElementById('resultado');
const palabras = pedirPalabras(); // función definida en main.js

// Si no introduce nada
if (palabras.length === 0) {
  resultadoDiv.innerHTML += '<p>No se introdujo nada.</p>';
} else {
  // Creamos un mapa con el número de veces que aparece cada palabra
  const mapaPalabras = contarPalabras(palabras);

  // Mostramos los resultados
  let resultadoHTML = '';
  for (const [palabra, cantidad] of mapaPalabras) {
    resultadoHTML += `${palabra}: ${cantidad}<br>`;
  }

  resultadoDiv.innerHTML += `<p>${resultadoHTML}</p>`;
}

// Función que recibe un array y devuelve un Map con el recuento de palabras
function contarPalabras(array) {
  const mapa = new Map();

  array.forEach((palabra) => {
    const clave = palabra.toLowerCase(); // para que no distinga mayúsculas
    mapa.set(clave, (mapa.get(clave) || 0) + 1); // si existe, suma 1; si no, empieza en 1
  });

  return mapa;
}
