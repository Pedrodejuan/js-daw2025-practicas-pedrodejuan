// ej1.js
// Ej1. Haz un programa que cuando se pulse un botón “Nuevo número”,
// añada un elemento con un número aleatorio a una lista desordenada (UL).

// 1. Referencias a los elementos del DOM
const btnNuevoNumero = document.getElementById('btn-nuevo-numero');
const listaNumeros = document.getElementById('lista-numeros');

// 2. Función que crea un <li> con un número aleatorio
function agregarNumeroAleatorio() {
  // Generamos un número aleatorio (1-100 por ejemplo)
  const numero = Math.floor(Math.random() * 100) + 1;

  // Creamos el elemento <li>
  const li = document.createElement('li');
  li.textContent = `Número: ${numero}`;

  // Lo añadimos a la lista
  listaNumeros.appendChild(li);
}

// 3. Asociamos el evento click al botón
btnNuevoNumero.addEventListener('click', agregarNumeroAleatorio);

// ej2.js
// Ej2. Mostrar en todo momento la posición actual del ratón en pantalla
// modificando dinámicamente un <p>.

// 1. Obtenemos el elemento donde mostraremos la posición
const posParrafo = document.getElementById('pos-raton');

// 2. Escuchamos el evento 'mousemove' en todo el documento
document.addEventListener('mousemove', function (event) {
  // event.clientX / clientY -> posición respecto a la ventana
  // event.pageX / pageY -> posición respecto al documento
  const x = event.clientX;
  const y = event.clientY;

  // Actualizamos el contenido del <p>
  posParrafo.textContent = `Posición: X=${x}, Y=${y}`;
});

// ej3.js
// Ej3. 3 <p> que se oculten al hacer clic, se eliminen al hacer clic derecho,
// y un botón "Reaparecer" que muestre los ocultos.

// 1. Referencias
const parrafos = document.querySelectorAll('.parrafo-ej3');
const btnReaparecer = document.getElementById('btn-reaparecer');

// Vamos a guardar cuáles se han ocultado,
// para poder mostrarlos después (los eliminados no estarán)
let parrafosOcultos = [];

// 2. Recorremos cada <p> y le ponemos los eventos
parrafos.forEach((p) => {
  // Click normal: ocultar
  p.addEventListener('click', function () {
    // Solo lo ocultamos si sigue en el DOM
    p.style.display = 'none';

    // Lo guardamos en la lista de ocultos si no estaba
    if (!parrafosOcultos.includes(p)) {
      parrafosOcultos.push(p);
    }
  });

  // Click derecho: eliminar
  p.addEventListener('contextmenu', function (event) {
    // Evita que salga el menú del navegador
    event.preventDefault();

    // Eliminamos el párrafo del DOM
    p.remove();

    // Si estaba en la lista de ocultos, lo quitamos también de ahí
    parrafosOcultos = parrafosOcultos.filter((elem) => elem !== p);
  });
});

// 3. Botón "Reaparecer": vuelve a mostrar SOLO los ocultos
btnReaparecer.addEventListener('click', function () {
  parrafosOcultos.forEach((p) => {
    // Solo podemos mostrarlo si sigue en el DOM
    // (los eliminados con remove() ya no están)
    p.style.display = 'block';
  });

  // Después de reaparecerlos, vaciamos la lista
  parrafosOcultos = [];
});
