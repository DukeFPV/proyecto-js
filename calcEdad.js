let a = "23/02/2008";


//function convertDateFormat(a) {
  var infoDate = a.split('/');
  console.log(infoDate[0] + '/' + infoDate[1] + '/' + infoDate[2]);
//}

let fecha = new Date(infoDate[1] + '/' + infoDate[0] + '/' + infoDate[2]);
let ahora = new Date();
console.log(fecha);
function calcEdad(edadTotal){
  let bDay = new Date(fecha);
  let year = ahora.getFullYear() - bDay.getFullYear();
  let mes = ahora.getMonth() - bDay.getMonth();

	if( mes < 0 || (mes === 0 && ahora.getDate() < bDay.getDate())){
      year--;
      mes += 12;
    }
  let dia = ahora.getDate() - bDay.getDate();
  return year + " años " + (mes) + " meses y " + dia + " dias";
  
}
console.log(calcEdad(fecha));