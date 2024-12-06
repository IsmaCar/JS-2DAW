/**
 * @author Ismael Carballo Martin
 * @description Realizar las clases de un sistema para la gestión de usuarios de una aplicación,
 * utilizando función constructora y clase.
 */

export function UsuarioConstructor(nombre, _email, rol) {
    if(typeof nombre !== 'string')
        throw new Error("El nombre debe ser un string")
    if(typeof _email !== 'string')
        throw new Error("El email debe ser un string")
    if(typeof rol !== 'string' || (rol !== 'admin' && rol !== 'user'))
        throw new Error("El nuevo rol debe ser un string y tener el valor 'admin' o 'user'")
   
    this.nombre = nombre;
    let _email = email;
    this.rol = rol;

    this.getEmail = function (){
        return _email;
    }

    this.setEmail = function (nuevoEmail){
        if(typeof nuevoEmail !== 'string')
            throw new Error("El email debe ser un string")

        _email =  nuevoEmail
    }
};



UsuarioConstructor.prototype.actualizarRol = function (nuevoRol) {
    if(typeof rol !== 'string' || (rol !== 'admin' && rol !== 'user'))
        throw new Error("El nuevo rol debe ser un string y tener el valor 'admin' o 'user'");
        
    this.rol = nuevoRol;
};

export function UsuarioPremiumConstructor(nombre, _email, rol, suscripcionActiva){
    UsuarioConstructor.call(this, nombre, _email, rol);
    
    if(typeof suscripcionActiva !== 'boolean')
        throw new Error("La suscripción debeser un booleano")
    
    this.suscripcionActiva = suscripcionActiva;

};

UsuarioPremiumConstructor.prototype = Object.create(UsuarioConstructor.prototype);
UsuarioPremiumConstructor.prototype.constructor = UsuarioPremiumConstructor;

UsuarioPremiumConstructor.prototype.activarSuscripcion = function () {
    this.suscripcionActiva = true;
}

UsuarioPremiumConstructor.prototype.desactivarSuscripcion = function () {
    this.suscripcionActiva = false;
}

export class UsuarioCLase {
    #email
    constructor(nombre, email, rol){
        if(typeof nombre !== 'string')
            throw new Error("El nombre debe ser un string")
        if(typeof email !== 'string')
            throw new Error("El email debe ser un string")
        if(typeof rol !== 'string' || (rol !== 'admin' && rol !== 'user'))
            throw new Error("El nuevo rol debe ser un string y tener el valor 'admin' o 'user'")

        this.nombre = nombre;
        this.#email = email;
        this.rol = rol;
    };

    getEmail(){
        return this.#email;
    };

    setEmail(nuevoEmail){
        if(typeof email !== 'string')
            throw new Error("El email debe ser un string")

        this.#email = nuevoEmail;
    };

    actualizarRol(nuevoRol){
        if(typeof rol !== 'string' || (rol !== 'admin' && rol !== 'user'))
            throw new Error("El nuevo rol debe ser un string y tener el valor 'admin' o 'user'")

        this.rol = nuevoRol;
    };
};

export class UsuarioPremiumClase extends UsuarioCLase{
    
    constructor(nombre, email, rol, suscripcionActiva){
        super(nombre, email, rol);
        
        if(typeof suscripcionActiva !== 'boolean')
            throw new Error("La suscripción debeser un booleano");

        this.suscripcionActiva = suscripcionActiva;
    };

    activarSuscripcion(){
        this.suscripcionActiva = true;
    };

    cancelarSuscripcion(){
        this.suscripcionActiva = false;
    };

};


