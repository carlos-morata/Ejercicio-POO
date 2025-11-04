// Ejercicio 1
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Nombre -> ${this.nombre}, edad -> ${this.edad} género -> ${this.genero}`)
    }
}
let persona = new Persona("Pedro", 42, "Masculino");
persona.obtDetalles();

// Ejercicio 2
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`Estudiante -> ${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}`);
    }
}
let estudiante = new Estudiante("Carlos", "21", "Desarrollo Web", "A");
estudiante.obtDetalles();
estudiante.registrar();

// Ejercicio 3
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`La profesora -> ${this.nombre} imparte la asignatura -> ${this.asignatura} en el nivel ${this.nivel}`);
    }
}
let profesor = new Profesor("Marta", 31, "Femenino", "Programación", "Avanzado");
profesor.obtDetalles();
profesor.asignar();