const selectCurso = document.getElementById("curso");
const anioActual = new Date().getFullYear();

// Generar opciones del año actual hasta el año 2000
for (let i = anioActual; i >= 2000; i--) {
  const option = document.createElement("option");
  option.value = i.toString();
  option.text = i.toString();
  selectCurso.add(option);
}

// Función que comprueba si el nombre es válido
function checkNombre(nombre){
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(nombre);
}

// Obtener el campo de entrada de nombre
const nombreInput = document.getElementById("nombre");
const apellido1Input = document.getElementById("apellido1");
const apellido2Input = document.getElementById("apellido2");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");
const telefono = document.getElementById("telefono");

// Agregar un listener para validar el campo de nombre al salir del foco
nombreInput.addEventListener("blur", function() {
  const nombre = nombreInput.value.trim();
  if(nombre === ""){
    alert("El campo nombre no puede estar vacío");
    nombreInput.focus();
    return false;
  }
  if(!checkNombre(nombre)){
    alert("El campo nombre no puede contener números o caracteres especiales");
    nombreInput.focus();
    return false;
  }
  return true;
});

// Agregar un listener para validar el campo de apellido1 al salir del foco
apellido1Input.addEventListener("blur", function() {
  const apellido1 = apellido1Input.value.trim();
  if(apellido1 === ""){
    alert("El campo Apellido1 no puede estar vacío");
    apellido1Input.focus();
    return false;
  }
  if(!checkNombre(apellido1)){
    alert("El campo Apellido1 no puede contener números o caracteres especiales");
    apellido1Input.focus();
    return false;
  }
  return true;
});

// Agregar un listener para validar el campo de apellido2 al salir del foco
apellido2Input.addEventListener("blur", function() {
  const apellido2 = apellido2Input.value.trim();
  if(apellido2 === ""){
    alert("El campo Apellido2 no puede estar vacío");
    apellido2Input.focus();
    return false;
  }
  if(!checkNombre(apellido2)){
    alert("El campo Apellido2 no puede contener números o caracteres especiales");
    apellido2Input.focus();
    return false;
  }
  return true;
});

// Agregar un listener para validar el formato de la fecha de nacimiento
// Obtener el campo de entrada de fecha de nacimiento

fechaNacimientoInput.addEventListener("blur", function() {
  const fechaNacimiento = fechaNacimientoInput.value.trim();

  // Verificar que la fecha tenga el formato dd/mm/aaaa
  const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regexFecha.test(fechaNacimiento)) {
    alert("El formato de la fecha de nacimiento es incorrecto. Debe tener el formato dd/mm/aaaa.");
    fechaNacimientoInput.focus();
    return false;
  }

  // Verificar que el usuario tenga al menos 18 años
  const partesFecha = fechaNacimiento.split("/");
  const fecha = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }
  if (edad < 18) {
    alert("Debes ser mayor de 18 años para registrarte.");
    fechaNacimientoInput.focus();
    return false;
  }

  return true;
});



// Función que comprueba si el nombre es válido
function checkNombre(nombre){
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(nombre);
}

// Función que comprueba si el apellido es válido
function checkApellido(apellido1){
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(apellido1);
}
// Función que comprueba si el apellido es válido
function checkApellido(apellido2){
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(apellido2);
}


// Función que comprueba si el teléfono es válido
function checkTelefono(telefono){
  const regex = /^[0-9]{9}$/;
  return regex.test(telefono);
}

// Función que comprueba si los campos del formulario son válidos
function checkFormulario(){
  // Obtener los valores de los campos del formulario
const nombre = document.getElementById("nombre").value;
const apellido1 = document.getElementById("apellido1").value;
const apellido2 = document.getElementById("apellido2").value;
const fechaNacimiento = document.getElementById("fechaNacimiento").value;
const estudios = document.getElementById("estudios").value;
const curso = document.getElementById("curso").value;
const telefono = document.getElementById("telefono").value;

// Crear el mensaje del alert
const mensaje = `Nombre completo: ${nombre} ${apellido1} ${apellido2}\nFecha de nacimiento: ${fechaNacimiento}\nEstudios: ${estudios}\nCurso: ${curso}\nTeléfono: ${telefono}`;

// Mostrar el alert con el mensaje
alert(mensaje);

  // Si todos los campos son válidos, se devuelve true
  return true;
}