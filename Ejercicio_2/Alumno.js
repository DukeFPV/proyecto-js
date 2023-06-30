// Definición del objeto con el identificador alumno y sus propiedades.
class Alumno {
    nombre= "";
    apellido1= "";
    apellido2= "";
    fechaNacimiento= "";
    estudios= "";
    curso= "";
    telefono= "";

    //Contructor de la clase
    constructor(nombre, apellido1, apellido2, fechaNacimiento, estudios, curso, telefono){

      //Setters del objeto de sus valores
        this.setNombre = nombre;
        this.setApellido1 = apellido1;
        this.setApellido2 = apellido2;
        this.setfechanacimiento = fechaNacimiento;
        this.setEstudios = estudios;
        this.setCurso = curso;
        this.setTelefono =telefono;        

    }
    
    // Métodos setters del objeto alumno
    set setNombre(nombre) {
      this.nombre = nombre;
    }
    set setApellido1(apellido1) {
      this.apellido1 = apellido1;
    }
    set setApellido2(apellido2) {
      this.apellido2 = apellido2;
    }
    set setFechaNacimiento(fecha) {
      this.fechaNacimiento = fecha;
    }
    set setEstudios(estudios) {
      this.estudios = estudios;
    }
    set setCurso(curso) {
      this.curso = curso;
    }
    set setTelefono(telefono) {
      this.telefono = telefono;
    }
    
    // Métodos getters del objeto alumno
    get getNombre() {
      return this.nombre;
    }
    get getApellido1() {
      return this.apellido1;
    }
    get getApellido2() {
      return this.apellido2;
    }
    get getFechaNacimiento() {
      return this.fechaNacimiento;
    }
    get getEstudios() {
      return this.estudios;
    }
    get getCurso() {
      return this.curso;
    }
    get getTelefono() {
      return this.telefono;
    }
    
    // Array de muestra: Creado un objeto de la clase Alumno nos devolverá
    // las propiedades del objeto.
    arrayProperties(){
      let array = [];
      Object.keys(this).forEach((props)=>{
          array.push(this[props]);
      });
      console.log(array);
      return array;
    }
    

 
}