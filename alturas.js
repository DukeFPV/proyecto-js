const listaAlturas = [165, 184, 170, 163, 172, 185, 167, 166, 153, 147];

function calculoAlturas(alturas) {
  //Se van sumando las alturas del array reduciendolo y se guardan los valores en suma
  const sumaAlturas = listaAlturas.reduce((suma, altura) => suma + altura, 0);
  const mediaAltura = sumaAlturas/alturas.length; /*La media de altura se calcula dividiendo el resultado de 
                                                    la suma anterior entre el total de las alturas*/

  //El calculo de la media de mínima se filtrando las alturas que están por debajo de la media y dividiendolo por la cantidad de alturas
  const mediaMinAlt = listaAlturas.filter((altura) => altura < mediaAltura).length;
  const minValor = parseFloat(mediaMinAlt/alturas.length) * 100;
  
  //El calculo de la media de mínima se filtrando las alturas que están por debajo de la media y dividiendolo por la cantidad de alturas
  const mediaMaxAlt = listaAlturas.filter((altura) => altura > mediaAltura).length;
  const maxValor = parseFloat(mediaMaxAlt/alturas.length) * 100;
  
  return{mediaAltura, minValor, maxValor};

}
 //Resultado de los datos accesible llamando a la función. 
 const resultadoDatos = calculoAlturas(listaAlturas);

//Se retorna el resultado de los valores almacenados por la función mediaAltura, minValor, maxValor
console.log('La lista de alturas es: ' + listaAlturas)
console.log('La media de altura de la lista es: ' + resultadoDatos.mediaAltura + 'cm');
console.log('Las alturas por debajo de la media son del ' + resultadoDatos.minValor + '%');
console.log('Las alturas por encima de la media son del ' + resultadoDatos.maxValor + '%');