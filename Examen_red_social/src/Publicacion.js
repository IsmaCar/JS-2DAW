/**
 * @author Ismael Carballo Martin
 * @description Crear función constructora llamada Publicación que representa una Publicación
 * de la red social
 * @param {String} mensaje
 * @param {String} fecha
 * @param {Number} likes
 */

export function Publicacion(mensaje, fecha, likes = 0) {
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.likes = likes;
}

Publicacion.prototype.darLike = function () {
    this.likes += 1
}