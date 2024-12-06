/**
 * @author Ismael Carballo Martin
 * @description Ejercicio de un sistema de gestón de vehículos y flotas
 */

//------------------Función constructora-----------------------

export function VehiculoConstructor(marca, modelo, kilometraje) {
    this.marca = marca;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
};

VehiculoConstructor.prototype.registrarViaje = function (kms) {
    return this.kilometraje += kms;
};

VehiculoConstructor.prototype.info = function () {
    return `
    Marca del vehículo: ${this.modelo},
    Modelo del vehículo: ${this.marca},
    Kilometraje del vehículo: ${this.kilometraje},
    Registro kilometros viaje: ${this.registrarViaje()}
    `;
};

export function VehiculoCamionConstructor(marca, modelo, kilometraje, capacidadCarga) {
    VehiculoConstructor.call(this, marca, modelo, kilometraje);
    this.capacidadCarga = capacidadCarga;

};

VehiculoCamionConstructor.prototype = Object.create(VehiculoConstructor.prototype);
VehiculoCamionConstructor.prototype.constructor = VehiculoCamionConstructor;

VehiculoCamionConstructor.prototype.registrarViaje = function (kms, numToneladas) {
    const kilometrajeVehiculo = this.kilometraje + kms;
    const cargaVehiculo = numToneladas;

    if (cargaVehiculo > this.capacidadCarga)
        throw new Error("El numero de toneladas no puede superar a la capacidad del vehículo");

    return `${kilometrajeVehiculo} kms y  ${cargaVehiculo} toneladas`;
};

VehiculoCamionConstructor.prototype.info = function () {
    return `
    Marca del vehículo: ${this.marca},
    Modelo del vehículo: ${this.modelo},
    Kilometraje del vehículo: ${this.kilometraje},
    Cargar soportada: ${this.capacidadCarga}
    `;
};

export function VehiculoAutomovilConstructor(marca, modelo, kilometraje, capacidadPasajeros) {
    VehiculoConstructor.call(this, marca, modelo, kilometraje);
    this.capacidadPasajeros = capacidadPasajeros;

};

VehiculoAutomovilConstructor.prototype = Object.create(VehiculoConstructor.prototype);
VehiculoAutomovilConstructor.prototype.constructor = VehiculoAutomovilConstructor;

VehiculoAutomovilConstructor.prototype.registrarViaje = function (kms, numPasajeros) {
    const kilometrajeVehiculo = this.kilometraje + kms;
    const pasajerosVehiculo = numPasajeros;

    if (pasajerosVehiculo > this.capacidadCarga)
        throw new Error("El numero de pasajeros no puede ser mayor a la capacidad del vehículo");

    return `${kilometrajeVehiculo} pasajeros, y ${numPasajeros} pasajeros`;
};

VehiculoAutomovilConstructor.prototype.info = function () {
    return `
    Marca del vehículo: ${this.modelo},
    Modelo del vehículo: ${this.marca},
    Kilometraje del vehículo: ${this.kilometraje},
    Pasajeros soportados: ${this.capacidadPasajeros}
    `;
};

//------------------ Clase -----------------------

export class VehículoClase {
    constructor(marca, modelo, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
    };

    registrarViaje(kms) {
       return this.kilometraje += kms
    };

    info() {
        return `
        Marca del vehículo: ${this.marca},
        Modelo del vehículo: ${this.modelo},
        Kilometraje del vehículo: ${this.kilometraje}
    `;
    };
};

export class VehiculoCamionClase extends VehículoClase{
    constructor(marca, modelo, kilometraje, capacidadCarga){
        super(marca, modelo, kilometraje);
        this.capacidadCarga = capacidadCarga;
    };

    registrarViaje(kms, numToneladas) {

        if(numToneladas > this.capacidadCarga)
            throw new Error("La carga no puede superar a la capacidad de carga");
        
        return `${this.kilometraje += kms} kilometros y ${numToneladas} toneladas`
    };

    info(){
    return `
        Marca del vehículo: ${this.marca},
        Modelo del vehículo: ${this.modelo},
        Kilometraje del vehículo: ${this.kilometraje},
        Cargar soportada: ${this.capacidadCarga}
    `; 
    };
};

export class VehiculoAutomovilClase extends VehículoClase{
    constructor(marca, modelo, kilometraje, capacidadPasajeros){
        super(marca, modelo, kilometraje)
        this.capacidadPasajeros = capacidadPasajeros;
    };

    registrarViaje(kms, numPasajeros) {

        if(numPasajeros > this.capacidadPasajeros)
            throw new Error("Los pasajeros no pueden superar a la capacidad");
        
        return `${this.kilometraje += kms} kilometros y ${numPasajeros} pasajeros`
    };

    info(){
        return `
            Marca del vehículo: ${this.marca},
            Modelo del vehículo: ${this.modelo},
            Kilometraje del vehículo: ${this.kilometraje},
            Pasajeros soportados: ${this.capacidadPasajeros}
        `; 
        };
};
