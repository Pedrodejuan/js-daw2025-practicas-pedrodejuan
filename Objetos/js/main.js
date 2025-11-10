// Función común de pedir palabras
function pedirPalabras() {
  const palabras = [];
  let entrada;

  do {
    entrada = prompt(
      'Introduce una palabra (deja vacío o cancela para terminar):'
    );
    if (entrada) {
      palabras.push(entrada.trim());
    }
  } while (entrada);

  return palabras;
}
