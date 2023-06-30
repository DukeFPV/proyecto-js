let n = 20;

function sucesionFibo(n){
let a = 0;
let b = 1;
let c = 0;
let resultado;
let numSucesion = [];
  
  if ( c==0) {
   numSucesion.push(c,b);
   //console.log(numSucesion);
     for (let i=0; i <= n; i++){

        c = a+b;
        a=b;
        b=c;
        numSucesion.push(a);
      //y=resultado;
     }
  }return numSucesion;
}console.log(sucesionFibo(n));