// Definición del objeto con el identificador alumno y sus propiedades.
const alumno = {
    nombre: "",
    apellido1: "",
    apellido2: "",
    fechaNacimiento: "",
    estudios: "",
    curso: "",
    telefono: "",
    
    // Métodos setters del objeto alumno
    setterNombre(nombre) {
      this.nombre = nombre;
    },
    setterApellido1(apellido1) {
      this.apellido1 = apellido1;
    },
    setterApellido2(apellido2) {
      this.apellido2 = apellido2;
    },
    setterFechaNacimiento(fecha) {
      this.fechaNacimiento = fecha;
    },
    setterEstudios(estudios) {
      this.estudios = estudios;
    },
    setterCurso(curso) {
      this.curso = curso;
    },
    setterTelefono(telefono) {
      this.telefono = telefono;
    },
    
    // Métodos getters del objeto alumno
    getterNombre() {
      return this.nombre;
    },
    getterApellido1() {
      return this.apellido1;
    },
    getterApellido2() {
      return this.apellido2;
    },
    getterFechaNacimiento() {
      return this.fechaNacimiento;
    },
    getterEstudios() {
      return this.estudios;
    },
    getterCurso() {
      return this.curso;
    },
    getterTelefono() {
      return this.telefono;
    },
    
    // Método para mostrar las propiedades del alumno. Se tabula con \t para que coincidan visualmente todos los campos
    propAlumnos() {
        const msgAlerta = `\t Nombre: ${this.nombre}  
         Apellido1: ${this.apellido1}
         Apellido2: ${this.apellido2}
         Fecha de nacimiento: ${this.fechaNacimiento}
         Estudios: ${this.estudios}
         Curso: ${this.curso}
         Teléfono: ${this.telefono}`;
      window.alert(msgAlerta);
    }
  };
  
  // Creación de una instancia del objeto alumno
  const miAlumno = Object.create(alumno);
  miAlumno.setterNombre("Juan");
  miAlumno.setterApellido1("García");
  miAlumno.setterApellido2("Pérez");
  miAlumno.setterFechaNacimiento("1999-05-08");
  miAlumno.setterEstudios("Ingeniería Informática");
  miAlumno.setterCurso("Segundo");
  miAlumno.setterTelefono("123456789");
  
  // Llamada al método que muestra las propiedades del alumno
  miAlumno.propAlumnos();