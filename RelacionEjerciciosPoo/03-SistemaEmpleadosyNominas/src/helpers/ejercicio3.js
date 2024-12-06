/**
 * @author Ismael Carballo Martin
 * @description Diseñar un sistema para gestionar empleados
 * empleando una función constructora y una clase
 */

//----------------Función constructora----------------------

export function EmpleadoConsrtuctor(nombre, edad, puesto) {

    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

}

EmpleadoConsrtuctor.prototype.calcularSalario = function () {
    const salarioBase = {
        "junior": 1400,
        "semi-senior": 2200,
        "senior": 3000
    };

    return salarioBase[this.puesto] || 0;
}

EmpleadoConsrtuctor.prototype.info = function () {
    return `
    Nombre: ${this.nombre},
    Edad: ${this.edad},
    Puesto: ${this.puesto},
    Salario: ${this.calcularSalario()}
    `;
}

export function EmpleadoFreelanceConstructor(nombre, edad, precioHora) {
    call.EmpleadoConsrtuctor(this, nombre, edad, "freelance");

    this.precioHora = precioHora;

    EmpleadoFreelanceConstructor.prototype = Object.create(EmpleadoConstructor.prototype);
    EmpleadoFreelanceConstructor.prototype.constructor = EmpleadoFreelanceConstructor;
}

EmpleadoFreelanceConstructor.prototype.calcularSalario = function (numHoras) {
    return this.precioHora * numHoras;
}

EmpleadoFreelanceConstructor.prototype.info = function () {
    return `
    Nombre: ${this.nombre},
    Edad: ${this.edad},
    Puesto: ${this.puesto},
    Precio hora: ${this.precioHora},
    Salario: ${this.calcularSalario(numHoras)}
    `;
}

//----------------Función constructora----------------------

export class EmpleadoClase {
    
    constructor(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }

    calcularSalario() {
        const salarioBase = {
        "junior": 1400,
        "semi-senior": 2200,
        "senior": 3000
        };

        return salarioBase[this.puesto] || 0;
    }

    info() {
        return `
        Nombre: ${this.nombre},
        Edad: ${this.edad},
        Puesto: ${this.puesto},
        Salario: ${this.calcularSalario()}
        `;
    }
}

export class EmpleadoFreelanceClase extends EmpleadoClase{
    constructor(nombre, edad, precioHora){
        super(nombre, edad, "freelance");
        this.precioHora = precioHora;
    }

    calcularSalario(numHoras){
        return this.precioHora * numHoras;
    }

    info(numHoras){
        return `
        Nombre: ${this.nombre},
        Edad: ${this.edad},
        Puesto: ${this.puesto},
        Salario: ${this.calcularSalario(numHoras)}
        `;
    }
}