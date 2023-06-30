//DNI de ejemplo
let dni='36085428S';

function validarDni (dni){
  //22 letras válidas para el DNI
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE"; 
  
  //Seleccionamos la letra del dni y los números por separado
  let letraDni = dni[8];
  let numerosDni = dni.substring(0, 8);
  
  //Cálculo del resto de dividir 23 entre la numeración 
  //nos da el numero de letra
  let numero = parseInt(numerosDni)%23;
  let calculoLetra = letras[numero];
  
  //Comprobamos la numeración introducida y la letra
  	if (numerosDni.length != 8 || isNaN(numerosDni)){
     alert(`La numeración "${numerosDni}" no es correcta`);
     return false;     
    }else if(letraDni.toUpperCase() != calculoLetra){
     alert(`La letra "${letraDni}" no es correcta, comprueba la numeración o pon la letra "${calculoLetra}"`)
     return false;      
    }else{
     return true; //Si todo es correcto retorna true
    }
}
console.log(validarDni(dni));
