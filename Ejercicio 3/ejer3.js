let img;
let inicioX = 0;
let inicioY = 0;
let finalX = 0;
let finalY = 0;
let moviendo = false;
const velocidad = 10; // 10 pixels por segundo

document.addEventListener("click", function (event) {
  if (!moviendo) {
    inicioX = event.clientX;
    inicioY = event.clientY;
    moviendo = true;
  } else {
    finalX = event.clientX;
    finalY = event.clientY;
    moverImagen();
    moviendo = false;
  }
});

function moverImagen() {
  const capa = document.querySelector("#imagen");
  const mitadAncho = window.innerWidth / 2;
  const mitadAlto = window.innerHeight / 2;
  let finX = (finalX < mitadAncho) ? 0 : window.innerWidth - img.width;
  let finY = (finalY < mitadAlto) ? 0 : window.innerHeight - img.height;
  
  const distanciaX = Math.abs(finX - inicioX);
  const distanciaY = Math.abs(finY - inicioY);
  const distanciaTotal = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  const duracion = distanciaTotal / velocidad * 1000; // en milisegundos
  
  const pasoX = (finX - inicioX) / distanciaTotal;
  const pasoY = (finY - inicioY) / distanciaTotal;
  
  let tiempoInicio = null;
  
  function animar(tiempoActual) {
    if (!tiempoInicio) {
      tiempoInicio = tiempoActual;
    }
    
    const tiempoTranscurrido = tiempoActual - tiempoInicio;
    const porcentaje = Math.min(tiempoTranscurrido / duracion, 1);
    const x = inicioX + porcentaje * distanciaX * pasoX;
    const y = inicioY + porcentaje * distanciaY * pasoY;
    
    capa.style.transform = `translate(${x}px, ${y}px)`;
    
    if (porcentaje < 1) {
      requestAnimationFrame(animar);
    } else {
      tiempoInicio = null;
      capa.style.transform = "translate(0, 0)";
    }
  }
  
  requestAnimationFrame(animar);
}
