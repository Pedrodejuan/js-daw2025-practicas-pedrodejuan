// Nombre de la cookie y límite
const COOKIE_NAME = 'visitas_pagina';
const LIMITE_VISITAS = 10;

const resultadoDiv = document.getElementById('resultado');

// Función para obtener el valor de una cookie
function getCookie(nombre) {
  const nombreEQ = nombre + '=';
  const partes = document.cookie.split(';');

  for (let i = 0; i < partes.length; i++) {
    let c = partes[i].trim();
    if (c.indexOf(nombreEQ) === 0) {
      return c.substring(nombreEQ.length, c.length);
    }
  }
  return null;
}

// Función para crear/actualizar cookie con caducidad en días
function setCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + fecha.toUTCString();
  document.cookie = `${nombre}=${valor};${expires};path=/`;
}

// Función para borrar cookie
function borrarCookie(nombre) {
  document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Lógica del contador
let visitas = parseInt(getCookie(COOKIE_NAME), 10);

if (isNaN(visitas)) {
  // primera visita
  visitas = 1;
  setCookie(COOKIE_NAME, visitas, 30); // 30 días ~ 1 mes
  resultadoDiv.innerHTML = `<p>Esta es tu visita número <strong>${visitas}</strong>.</p>`;
} else {
  visitas += 1;

  if (visitas > LIMITE_VISITAS) {
    // superar 10 → reset
    borrarCookie(COOKIE_NAME);
    resultadoDiv.innerHTML = `<p>Has visitado la página más de ${LIMITE_VISITAS} veces. Contador reiniciado.</p>`;
  } else {
    setCookie(COOKIE_NAME, visitas, 30);
    resultadoDiv.innerHTML = `<p>Has visitado esta página <strong>${visitas}</strong> veces.</p>`;
  }
}
