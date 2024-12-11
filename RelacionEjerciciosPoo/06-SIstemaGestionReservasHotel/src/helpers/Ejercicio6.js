/**
 * @author Ismael Carballo Martin
 * @description Realizar las clases necesarias para la gestión de reservas
 * de habitaciones de un hotel
 */

//----------Función constructora----------------

export function HabitacionConstructor(numero, tipo, precio, reservada = false) {
    if (typeof numero !== 'number')
        throw new Error("El numero tiene que ser tipo 'number'");
    if (typeof tipo !== 'string' || (tipo !== 'individual' && tipo !== 'doble' && tipo !== 'suite'))
        throw new Error("El tipo de habitación deber ser 'string' y individual, doble o suite");
    if (typeof precio !== 'number')
        throw new Error("EL precio debe ser tipo 'number'");
    if (typeof reservada !== 'boolean')
        throw new Error("La reserva debe ser tipo 'boolean'");

    this.numero = numero;
    this.tipo = tipo;
    this.precio = precio;
    this.reservada = reservada;

}

HabitacionConstructor.prototype.reservar = function () {
    reservada = true;
}

HabitacionConstructor.prototype.liberar = function () {
    reservada = false;
}

let contadorId = 0;

export function ReservaConstructor(habitacion, cliente, dias) {

    if (typeof cliente !== 'string')
        throw new Error("El cliente debe ser tipo 'string'");
    if (!(habitacion instanceof HabitacionConstructor))
        throw new Error("La habitación debe ser una instancia de HabitacionConstructor");
    if (typeof dias !== 'number')
        throw new Error("Los dias deben ser tipo 'number'");

    this.id = contadorId++;
    this.habitacion = habitacion;
    this.cliente = cliente;
    this.dias = dias;
}

ReservaConstructor.prototype.calcularTotal = function () {
    this.habitacion.precio * this.dias;
}

//----------------------Clases-----------------------------

export class Habitacion {
    #reservada
    constructor(numero, tipo, precio, reservada = false) {
        if (typeof cliente !== 'string')
            throw new Error("El cliente debe ser tipo 'string'");
        if (typeof habitacion !== 'string')
            throw new Error("La habitación debe ser tipo 'string'");
        if (typeof dias !== 'number')
            throw new Error("Los dias deben ser tipo 'number'");

        this.numero = numero;
        this.tipo = tipo;
        this.precio = precio;
        this.#reservada = reservada;
    };

    getReservada(){
        return this.#reservada;
    };

    reservar(){
        this.#reservada = true;
    }

    liberar(){
        this.#reservada = false;
    }
}

export class Reserva{
    static #contadorId = 0;
    #id
    constructor(habitacion, cliente, dias){
        if (typeof cliente !== 'string')
            throw new Error("El cliente debe ser tipo 'string'");
        if (!(habitacion instanceof HabitacionConstructor))
            throw new Error("La habitación debe ser una instancia de HabitacionConstructor");
        if (typeof dias !== 'number')
            throw new Error("Los dias deben ser tipo 'number'");
        
        this.#id = ++Reserva.#contadorId;
        this.habitacion = habitacion;
        this.cliente = cliente;
        this.dias = dias;
    }

    static generarId(){
        return ++this.#contadorId;
    }

    getId(){
        return this.#id;
    }

    calcularTotal(){
        this.habitacion.precio * this.dias;
    }

}

export class GestorReserva {
    constructor() {
        this.habitaciones = [];
        this.reservas = [];
    }

    crearReserva(cliente, numeroHab, dias) {
        const habitacion = this.habitaciones.find((habitacion)=>habitacion.numero === numeroHab);

        if(!habitacion)
            throw new Error("La habitación no existe");

        if(habitacion.getReservada())
            throw new Error("La habitación ya está reservada");
            
        habitacion.reservar()
        this.reservas.push(new Reserva(cliente, habitacion, dias));
    }

    cancelarReserva(id) {
        const habitacion = this.habitaciones.find((habitacion)=>habitacion.getId() === id);
        habitacion.liberar();

        this.reservas.filter((reserva)=>reserva.getId() !== id);
    }

    listarReservas() {
        return this.reservas;
    }
}