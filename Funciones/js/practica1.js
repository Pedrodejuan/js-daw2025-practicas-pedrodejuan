const resultadoDiv = document.getElementById('resultado');

let palabras = pedirPalabras();
// Si no escribes nada:
if (palabras.length === 0) {
  resultadoDiv.innerHTML += '<p>No se introdujo nada.</p>';
}
// Eliminar palabras duplicadas
palabras = [...new Set(palabras)];

// Ordenar Z-A
palabras.sort((a, b) => b.localeCompare(a, 'es'));

// Construimos el resultado
resultadoDiv.innerHTML += `<p>${palabras.join('<br>')}
</p>`;
