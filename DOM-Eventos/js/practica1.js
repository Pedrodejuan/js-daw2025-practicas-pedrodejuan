document.addEventListener('DOMContentLoaded', function () {
  const mensaje = document.getElementById('mensaje');
  const volver = document.getElementById('volver');

  document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'F12') {
      event.preventDefault();

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhaW55JTIwZ3JhZGllbnR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')";
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';

      mensaje.textContent = 'Fondo cambiado';
      mensaje.style.color = '#ffffff';
      mensaje.style.backgroundColor = 'rgba(0, 0, 0, 0.64)';
      mensaje.style.padding = '0.6rem 1rem';
      mensaje.style.borderRadius = '8px';

      volver.style.display = 'inline-block';
    }
  });
});
