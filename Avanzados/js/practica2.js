// Práctica 2 - Promesa con temporizador

const resultadoDiv = document.getElementById('resultado');

// Función que genera una promesa basada en un temporizador
function temporizador(ms) {
  return new Promise((resolve, reject) => {
    // Temporizador principal (cumple la promesa)
    const idExito = setTimeout(() => {
      resolve('Tiempo concluido');
      clearTimeout(idFallo); // si se cumple antes del doble, cancela el fallo
    }, ms);

    // Temporizador de fallo (si se pasa del doble de tiempo)
    const idFallo = setTimeout(() => {
      reject('El tiempo no va bien');
      clearTimeout(idExito); // cancela el temporizador original
    }, ms * 2);
  });
}

// Invocar la función con 5 segundos (5000 ms)
const tiempo = 5000;

resultadoDiv.innerHTML = `<p>Iniciando temporizador de ${
  tiempo / 1000
} segundos...</p>`;

// Llamamos a la promesa
temporizador(tiempo)
  .then((mensaje) => {
    resultadoDiv.innerHTML += `<p style="color:green;"><strong>${mensaje}</strong></p>`;
  })
  .catch((error) => {
    resultadoDiv.innerHTML += `<p style="color:red;"><strong>${error}</strong></p>`;
  });
