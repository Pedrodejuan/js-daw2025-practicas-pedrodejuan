/* ===================== EJERCICIO 1 ===================== */
// Funciones para manejar cookies
function setCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + fecha.toUTCString();
  document.cookie = `${nombre}=${valor};${expires};path=/`;
}

function getCookie(nombre) {
  const name = nombre + '=';
  const ca = document.cookie.split(';');
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

const formNombre = document.getElementById('form-nombre');
const mensaje = document.getElementById('mensaje');
const inputNombre = document.getElementById('nombre');
const btnGuardar = document.getElementById('btn-guardar');

const nombreCookie = getCookie('usuario');
if (nombreCookie) {
  mensaje.textContent = `Bienvenido de nuevo, ${nombreCookie} 👋`;
  formNombre.style.display = 'none';
} else {
  mensaje.textContent = 'Introduce tu nombre para guardarlo.';
}

btnGuardar.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();
  if (nombre !== '') {
    setCookie('usuario', nombre, 7);
    mensaje.textContent = `Bienvenido, ${nombre} 👋`;
    formNombre.style.display = 'none';
  }
});

/* ===================== EJERCICIO 2 ===================== */
function divide(a, b) {
  if (b === 0) throw new Error('No se puede dividir por cero');
  return a / b;
}

try {
  const resultado1 = divide(10, 2);
  console.log('Ej2 -> 10 / 2 =', resultado1);

  const resultado2 = divide(5, 0); // error
  console.log('Ej2 -> 5 / 0 =', resultado2);
} catch (error) {
  console.error('Ej2 -> Error al dividir:', error.message);
}

/* ===================== EJERCICIO 3 ===================== */
function simulaProceso(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve('Proceso exitoso');
      } else {
        reject('Hubo un error');
      }
    }, 500);
  });
}

// then / catch
simulaProceso(true)
  .then((msg) => console.log('Ej3 (then) OK:', msg))
  .catch((err) => console.error('Ej3 (then) ERROR:', err));

simulaProceso(false)
  .then((msg) => console.log('Ej3 (then) OK:', msg))
  .catch((err) => console.error('Ej3 (then) ERROR:', err));

// async / await
async function probarProcesos() {
  try {
    const ok = await simulaProceso(true);
    console.log('Ej3 (await) OK:', ok);
  } catch (error) {
    console.error('Ej3 (await) ERROR:', error);
  }

  try {
    const fail = await simulaProceso(false);
    console.log('Ej3 (await) OK:', fail);
  } catch (error) {
    console.error('Ej3 (await) ERROR:', error);
  }
}
probarProcesos();

/* ===================== EJERCICIO 4 ===================== */
// Simulamos el módulo calculadora en el mismo archivo
const calculadora = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplica: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('No se puede dividir por cero');
    return a / b;
  },
};

console.log('Ej4 -> Suma 5+3 =', calculadora.suma(5, 3));
console.log('Ej4 -> Resta 10-4 =', calculadora.resta(10, 4));
console.log('Ej4 -> Multiplica 6*7 =', calculadora.multiplica(6, 7));
console.log('Ej4 -> Divide 20/5 =', calculadora.divide(20, 5));

/* ===================== EJERCICIO 5 ===================== */
// Tres funciones que devuelven promesas
function primeraTarea() {
  return Promise.resolve(10);
}

function segundaTarea(valor) {
  return Promise.resolve(valor * 2);
}

function terceraTarea(valor) {
  return Promise.resolve(valor + 5);
}

// Encadenamos las promesas
primeraTarea()
  .then((v1) => {
    console.log('Ej5 -> primeraTarea:', v1);
    return segundaTarea(v1);
  })
  .then((v2) => {
    console.log('Ej5 -> segundaTarea:', v2);
    return terceraTarea(v2);
  })
  .then((resultadoFinal) => {
    console.log('Ej5 -> Resultado final:', resultadoFinal);
  })
  .catch((error) => console.error('Ej5 -> Error:', error));
