let texto = 'bajalafajamaja';

function txtCadena (texto){
  let txt = [];
  let numChar = [];
  	for (let i = 0; texto.length > i; i++){
    	let sumChar = txt.indexOf(texto[i]);
      		if (sumChar != -1){
              numChar[sumChar]++;
            }else{
              txt.push(texto[i]);
              numChar.push(1);
            } 
    }
  let finalArray = [];
	for( let i = 0; i<txt.length ; i++){
      finalArray.push([txt[i],numChar[i]]);
    }
  return finalArray;
}
console.log(txtCadena(texto));