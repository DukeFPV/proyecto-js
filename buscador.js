function contarPalabraEnTexto(palabra, texto) {
  let contador = 0;
  let palabraActual = '';
  let separadores = [' ', ',', ';', '.', ':', '?', '!'];

  for (let i = 0; i < texto.length; i++) {
    let letraActual = texto[i];
    
    if (separadores.includes(letraActual)) {
      // Se encontró un separador, se compara la palabra actual con la palabra buscada
      if (palabraActual === palabra) {
        contador++;
      }
      // Se resetea la palabra actual para continuar buscando
      palabraActual = '';
    } else {
      // Se agrega la letra a la palabra actual
      palabraActual += letraActual;
    }
  }
  
  // Se verifica si la última palabra del texto coincide con la palabra buscada
  if (palabraActual === palabra) {
    contador++;
  }
  
  return contador;
}


console.log(contarPalabraEnTexto("lug", "En un lugar de la mancha de cuyo nombre no logro acordarme"));