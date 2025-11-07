const resultadoDiv = document.getElementById('resultado');
const palabras = pedirPalabras();

//Si no introduce nada
if (palabras.length === 0) {
  resultadoDiv.innerHTML += '<p>No se introdujo nada.</p>';
} else {
  //Mapa con los recuentos
  const mapaPalabras = contarPalabras(palabras);

  // Mostrar los resultados
  let resultadoHTML = '';
  for (const [palabra, cantidad] of mapaPalabras) {
    resultadoHTML += `${palabra}: ${cantidad}<br>`;
  }

  resultadoDiv.innerHTML += `<p>${resultadoHTML}</p>`;
}

// array en map
function contarPalabras(array) {
  const mapa = new Map();
  array.forEach((palabra) => {
    const clave = palabra.toLowerCase();
    mapa.set(clave, (mapa.get(clave) || 0) + 1);
  });
  return mapa;
}
