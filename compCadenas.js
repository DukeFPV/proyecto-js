let txtCadena1 = "Buenas";
let txtCadena2 = "buena";

function txtComparar (txtCadena1, txtCadena2) {
	for(let i = 0 ; txtCadena1.length > i ; i++) {
    	if (txtCadena1 != txtCadena2 && txtCadena1.toUpperCase() != txtCadena2.toUpperCase()){
          //alert(`${txtCadena1} no es igual a ${txtCadena2}`);
          return false;
        }
    }
return true;

}
console.log(txtComparar(txtCadena1, txtCadena2));