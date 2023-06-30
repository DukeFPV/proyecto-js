//Entrada de número por teclado
let x = parseInt(prompt ("Introduce el número"));

//función que calcula el factorial de un número x  
  function numFactorial(x){
  	if (x == 0 || x == 1){ //Si x vale 0 o 1 devuelve el valor x
      return x;       
    }else{
      return x * numFactorial(x-1); //Parte recursiva de la función donde se va restando 1 al valor de x
    }
    
  }
//Muestra por consola el resultado de la función
console.log(numFactorial(x));