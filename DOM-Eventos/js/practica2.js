// ../js/practica2.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitBtn = document.querySelector('input[type="submit"]');

  // por si acaso
  if (!form || !emailInput || !passwordInput || !submitBtn) return;

  // desactivamos el botón al inicio
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = 'grey';
  submitBtn.style.cursor = 'not-allowed';

  // funciones de validación
  function validarEmail(valor) {
    // formato simple: xxxx@yyyy.zzzz
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regex.test(valor);
  }

  function validarPassword(valor) {
    // entre 8 y 10 caracteres
    return valor.length >= 8 && valor.length <= 10;
  }

  // crear mensaje de error debajo del input
  function mostrarError(input, mensaje) {
    // si ya hay error, no lo dupliques
    if (
      input.nextElementSibling &&
      input.nextElementSibling.classList.contains('error')
    ) {
      input.nextElementSibling.textContent = mensaje;
      return;
    }

    const p = document.createElement('p');
    p.textContent = mensaje;
    p.classList.add('error');
    p.style.color = 'red';
    p.style.fontSize = '0.8rem';
    p.style.marginTop = '0.3rem';
    // insertamos justo después del input
    input.insertAdjacentElement('afterend', p);
  }

  function limpiarError(input) {
    if (
      input.nextElementSibling &&
      input.nextElementSibling.classList.contains('error')
    ) {
      input.nextElementSibling.remove();
    }
  }

  function comprobarFormulario() {
    const emailOk = validarEmail(emailInput.value);
    const passOk = validarPassword(passwordInput.value);

    if (emailOk && passOk) {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '';
      submitBtn.style.cursor = 'pointer';
    } else {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = 'grey';
      submitBtn.style.cursor = 'not-allowed';
    }
  }

  // eventos
  emailInput.addEventListener('blur', function () {
    if (!validarEmail(emailInput.value)) {
      mostrarError(emailInput, 'El email debe tener el formato xxxx@yyyy.zzzz');
    }
    comprobarFormulario();
  });

  passwordInput.addEventListener('blur', function () {
    if (!validarPassword(passwordInput.value)) {
      mostrarError(
        passwordInput,
        'La contraseña debe tener entre 8 y 10 caracteres.'
      );
    }
    comprobarFormulario();
  });

  // limpiar errores al entrar a escribir de nuevo
  emailInput.addEventListener('input', function () {
    limpiarError(emailInput);
    comprobarFormulario();
  });

  passwordInput.addEventListener('input', function () {
    limpiarError(passwordInput);
    comprobarFormulario();
  });

  // evitar envío si está desactivado
  form.addEventListener('submit', function (e) {
    const emailOk = validarEmail(emailInput.value);
    const passOk = validarPassword(passwordInput.value);

    if (!emailOk || !passOk) {
      e.preventDefault();
    }
  });
});
