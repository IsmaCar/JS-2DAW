/**
 * @author Ismael Carballo Martin
 * @description Crear función constructora llamada Usuario que representa un usuario
 * de la red social
 * @param {String} username
 * @param {String} nombreCompleto
 * @param {Array} amigos
 * @param {Array} publicaciones
 */

export function Usuario(username, nombreCompleto) {
    this.username = username;
    this.nombreCompleto = nombreCompleto;
    this.amigos = [];
    this. publicaciones =[];
}

Usuario.prototype.agregarAmigo = function(amigo) {
    if(typeof amigo !== 'string')
        throw new Error("'amigo' debe ser un string");

    this.amigos.push(amigo);
}

Usuario.prototype.agregarPublicaciones = function(mensaje, fecha) {
    if(typeof mensaje !== 'string')
        throw new Error("'mensaje' debe ser un string");
    if(typeof fecha !== 'string')
        throw new Error("'fecha' debe ser un string");
    this.publicaciones.push({mensaje,fecha});
}